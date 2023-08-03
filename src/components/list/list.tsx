import { Element, Component, Host, h, State, Prop, Event, EventEmitter, Watch } from '@stencil/core';
import { Data } from './list-interface';

export type TypeList = 'checkbox' | 'radio' | 'switch' | 'default';

@Component({
  tag: 'bds-list',
  styleUrl: 'list.scss',
  shadow: true,
})
export class List {
  private itemListElement?: HTMLCollectionOf<HTMLBdsListItemElement> | NodeListOf<HTMLBdsListItemElement> = null;

  @Element() private element: HTMLElement;

  @State() internalData: Data[];
  /**
   * Typelist. Used to .
   */
  @Prop() typeList?: TypeList = null;
  /**
   * The value of the selected radio
   */
  @Prop({ mutable: true, reflect: true }) value?: string;

  /**
   * The Data of the list
   * Should be passed this way:
   * data='[{"value": "01","text": "Text","secondaryText": "Secondary Text","avatarName": "","avatarThumbnail": "","checked"="true","icon": "settings-builder"}, {"value": "02","text": "Text","secondaryText": "Secondary Text","avatarName": "","avatarThumbnail": "","checked"="false","icon": "settings-builder",}]'
   * Data can also be passed as child by using bds-list-item component, but passing as a child you may have some compatibility problems with Angular.
   */
  @Prop({ mutable: true, reflect: true }) data?: string | Data[];

  /**
   * Emitted when the value checkboxes has changed because of a click event.
   */
  @Event() bdsListCheckboxChange!: EventEmitter;
  /**
   * Emitted when the value radios has changed because of a click event.
   */
  @Event() bdsListRadioChange!: EventEmitter;
  /**
   * Emitted when the value switches has changed because of a click event.
   */
  @Event() bdsListSwitchChange!: EventEmitter;
  /**
   * Emitted when click in someone actions buttom insert in data.
   */
  @Event() bdsClickActionsButtons!: EventEmitter;

  componentWillLoad() {
    this.data && this.dataChanged();
  }

  componentWillRender() {
    this.data && this.updateData();
    if (!this.data) {
      this.setitemListElement();
    }
  }
  componentDidRender() {
    if (this.data) {
      this.internalDataChanged();
    }
  }

  @Watch('data')
  dataChanged() {
    this.updateData();
  }

  @Watch('value')
  valueChanged(value: string) {
    this.setSelectedRadio(value);
  }

  @Watch('internalData')
  internalDataChanged() {
    this.itemListElement = this.element.shadowRoot.querySelectorAll('bds-list-item');
  }

  private setitemListElement() {
    this.itemListElement = this.element.getElementsByTagName(
      'bds-list-item'
    ) as HTMLCollectionOf<HTMLBdsListItemElement>;

    for (let i = 0; i < this.itemListElement.length; i++) {
      this.itemListElement[i].typeList = this.typeList;
      this.itemListElement[i].addEventListener('bdsChecked', (event: CustomEvent) => this.chagedOptions(event));
    }
  }

  private updateData() {
    if (this.data) {
      if (typeof this.data === 'string') {
        this.internalData = JSON.parse(this.data);
      } else {
        this.internalData = this.data;
      }
    }
  }

  private chagedOptions = (event: CustomEvent): void => {
    const { detail } = event;
    if (detail.typeList == 'radio') {
      if (detail.checked == true) {
        this.value = detail;
      }
    }
    if (detail.typeList == 'checkbox') {
      this.setSelectedCheckbox();
    }
    if (detail.typeList == 'switch') {
      this.setSelectedSwitch();
    }
  };

  private setSelectedRadio(itemList) {
    const itens = Array.from(this.itemListElement);
    const radios = itens.filter((item) => item.typeList == 'radio');
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].value != itemList.value) {
        radios[i].checked = false;
      } else {
        const construct = {
          value: radios[i].value,
          text: radios[i]?.text,
          secondaryText: radios[i]?.secondaryText,
          avatarName: radios[i]?.avatarName,
          avatarThumbnail: radios[i]?.avatarThumbnail,
          typeList: radios[i]?.typeList,
        };
        this.bdsListRadioChange.emit(construct);
      }
    }
  }

  private setSelectedCheckbox() {
    const checkboxs = this.itemListElement;
    const itens = Array.from(checkboxs).filter((item) => item.typeList == 'checkbox');
    const result = itens
      .filter((item) => item.checked)
      .map((term) => ({
        value: term.value,
        text: term?.text,
        secondaryText: term?.secondaryText,
        avatarName: term?.avatarName,
        avatarThumbnail: term?.avatarThumbnail,
        typeList: term?.typeList,
      }));
    this.bdsListCheckboxChange.emit(result);
  }

  private setSelectedSwitch() {
    const Switch = this.itemListElement;
    const itens = Array.from(Switch).filter((item) => item.typeList == 'switch');
    const result = itens
      .filter((item) => item.checked)
      .map((term) => ({
        value: term.value,
        text: term?.text,
        secondaryText: term?.secondaryText,
        avatarName: term?.avatarName,
        avatarThumbnail: term?.avatarThumbnail,
        typeList: term?.typeList,
      }));
    this.bdsListSwitchChange.emit(result);
  }

  private onClickActionsButtons = (event: CustomEvent): void => {
    const { detail } = event;
    this.bdsClickActionsButtons.emit(detail);
  };

  render() {
    return (
      <Host>
        <div
          class={{
            list: true,
          }}
        >
          {this.internalData ? (
            this.internalData.map((item, idx) => (
              <bds-list-item
                key={idx}
                value={item.value}
                text={item.text}
                type-list={this.typeList ? this.typeList : item.typeList}
                secondary-text={item.secondaryText}
                avatar-name={item.avatarName}
                avatar-thumbnail={item.avatarThumbnail}
                checked={item.checked}
                icon={item.icon}
                chips={item.chips}
                actionsButtons={item.actionsButtons}
                onBdsChecked={(ev) => this.chagedOptions(ev)}
                onBdsClickActionButtom={(ev) => this.onClickActionsButtons(ev)}
                dataTest={item.dataTest}
              ></bds-list-item>
            ))
          ) : (
            <slot></slot>
          )}
        </div>
      </Host>
    );
  }
}
