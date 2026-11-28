import { Component, Element, Event, EventEmitter, Host, Prop, State, Watch, h } from '@stencil/core';
import type {
  UaiListActionButtonDetail,
  UaiListChangeDetail,
  UaiListData,
  UaiListItemCheckedDetail,
  UaiListTypeList,
} from './uai-list-interface';

/**
 * List of uai-list-item rows, from data or from child elements. Use for plain lists and for single (radio),
 * multiple (checkbox) or on/off (switch) selection; pair with typeList; avoid it for tabular data (use uai-table).
 *
 * The host has the list role (radiogroup when typeList is radio) and each row the listitem role.
 *
 * @slot - uai-list-item children. Ignored when data is set.
 */
@Component({
  tag: 'uai-list',
  styleUrl: 'uai-list.scss',
  shadow: true,
})
export class UaiList {
  private itemListElement?: HTMLCollectionOf<HTMLUaiListItemElement> | NodeListOf<HTMLUaiListItemElement> = null;

  @Element() private element: HTMLElement;

  @State() internalData: UaiListData[];

  /** Control of every row: checkbox, radio, switch or default. Use to make the whole list selectable; pair with the change events. When null, each row keeps its own typeList. */
  @Prop() typeList?: UaiListTypeList = null;

  /** Value of the selected radio row. Use to read or set the selection of a radio list; pair with uaiListRadioChange. Avoid it in other list types. */
  @Prop({ mutable: true, reflect: true }) value?: string;

  /**
   * Rows as a JSON string or an array:
   * data='[{"value": "01","text": "Text","secondaryText": "Secondary Text","avatarName": "","avatarThumbnail": "","checked": true,"icon": "settings-builder"}]'.
   * Use for lists built from data, also in Angular; pair with typeList. When set, child uai-list-item elements are ignored.
   */
  @Prop({ mutable: true, reflect: true }) data?: string | UaiListData[];

  /** A checkbox row changed by user interaction. detail: every checked checkbox row. Use to keep the selection; pair with typeList checkbox. */
  @Event() uaiListCheckboxChange!: EventEmitter<UaiListChangeDetail[]>;

  /** A radio row was selected by user interaction. detail: the selected row. Use to keep the selection; pair with value. */
  @Event() uaiListRadioChange!: EventEmitter<UaiListChangeDetail>;

  /** A switch row changed by user interaction. detail: every switch row that is on. Use to keep the settings; pair with typeList switch. */
  @Event() uaiListSwitchChange!: EventEmitter<UaiListChangeDetail[]>;

  /** An action button of a data row was clicked; name kept from bdsClickActionsButtons. detail: value, icon and elementButton. Use with data; pair with actionsButtons. */
  @Event() uaiClickActionsButtons!: EventEmitter<UaiListActionButtonDetail>;

  /** Same as uaiClickActionsButtons, with the corrected spelling; both are emitted with the same detail. Use in new code; avoid listening to both. */
  @Event() uaiClickActionsButton!: EventEmitter<UaiListActionButtonDetail>;

  componentWillLoad() {
    this.data && this.dataChanged();
  }

  componentWillRender() {
    this.data && this.updateData();
    if (!this.data) {
      this.setItemListElement();
    }
  }

  componentDidRender() {
    if (this.data) {
      this.internalDataChanged();
    }
  }

  componentDidLoad() {
    this.syncRadios();
  }

  @Watch('data')
  dataChanged() {
    this.updateData();
  }

  @Watch('value')
  valueChanged() {
    this.syncRadios();
  }

  @Watch('internalData')
  internalDataChanged() {
    this.itemListElement = this.element.shadowRoot.querySelectorAll('uai-list-item');
  }

  private get itemRole(): string {
    return this.typeList == 'radio' ? 'none' : 'listitem';
  }

  private setItemListElement() {
    this.itemListElement = this.element.getElementsByTagName(
      'uai-list-item',
    ) as HTMLCollectionOf<HTMLUaiListItemElement>;

    for (let i = 0; i < this.itemListElement.length; i++) {
      const item = this.itemListElement[i];
      // SOLFAC-117 (b, bug 2): only a list with a typeList overrides the typeList of its rows.
      if (this.typeList) item.typeList = this.typeList;
      item.setAttribute('role', this.itemRole);
      item.addEventListener('uaiChecked', this.changedOptions);
    }
  }

  private updateData() {
    if (this.data) {
      if (typeof this.data === 'string') {
        // Keep the current data if AngularJS has not interpolated the attribute yet; @Watch('data') reloads it.
        try {
          this.internalData = JSON.parse(this.data);
        } catch {
          // Not valid JSON yet.
        }
      } else {
        this.internalData = this.data;
      }
    }
  }

  private items(type: UaiListTypeList): HTMLUaiListItemElement[] {
    return Array.from(this.itemListElement || []).filter((item) => item.typeList == type);
  }

  private summary(item: HTMLUaiListItemElement): UaiListChangeDetail {
    return {
      value: item.value,
      text: item?.text,
      secondaryText: item?.secondaryText,
      avatarName: item?.avatarName,
      avatarThumbnail: item?.avatarThumbnail,
      typeList: item?.typeList,
    };
  }

  private changedOptions = (event: CustomEvent<UaiListItemCheckedDetail>): void => {
    const { detail } = event;
    if (detail.typeList == 'radio' && detail.checked == true) {
      // SOLFAC-117 (b, bug 1): value keeps the value string of the selected row, not the event detail.
      this.value = detail.value;
      this.syncRadios();
      const selected = this.items('radio').find((item) => item.value == detail.value);
      if (selected) this.uaiListRadioChange.emit(this.summary(selected));
    }
    if (detail.typeList == 'checkbox') {
      this.uaiListCheckboxChange.emit(this.items('checkbox').filter((item) => item.checked).map((item) => this.summary(item)));
    }
    if (detail.typeList == 'switch') {
      this.uaiListSwitchChange.emit(this.items('switch').filter((item) => item.checked).map((item) => this.summary(item)));
    }
  };

  // SOLFAC-117 (b, bugs 1 and 4): a value set from outside selects the matching radio; the other radios are
  // cleared silently (uaiChecked is only for user interaction).
  private syncRadios(): void {
    if (this.value === undefined || this.value === null || this.value === '') return;
    for (const radio of this.items('radio')) {
      radio.checked = radio.value == this.value;
    }
  }

  private onClickActionsButtons = (event: CustomEvent<UaiListActionButtonDetail>): void => {
    const { detail } = event;
    this.uaiClickActionsButtons.emit(detail);
    // SOLFAC-117 (c): corrected spelling, emitted with the same detail.
    this.uaiClickActionsButton.emit(detail);
  };

  render() {
    return (
      <Host role={this.typeList == 'radio' ? 'radiogroup' : 'list'}>
        <div class="list">
          {this.internalData ? (
            this.internalData.map((item, idx) => (
              <uai-list-item
                key={idx}
                role={this.itemRole}
                value={item.value}
                text={item.text}
                typeList={this.typeList ? this.typeList : item.typeList}
                secondaryText={item.secondaryText}
                avatarName={item.avatarName}
                avatarThumbnail={item.avatarThumbnail}
                checked={item.checked}
                icon={item.icon}
                chips={item.chips}
                actionsButtons={item.actionsButtons}
                onUaiChecked={this.changedOptions}
                onUaiClickActionButtom={this.onClickActionsButtons}
                dataTest={item.dataTest}
              ></uai-list-item>
            ))
          ) : (
            <slot></slot>
          )}
        </div>
      </Host>
    );
  }
}
