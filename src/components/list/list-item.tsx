import { Element, Component, Host, h, State, Prop, Event, EventEmitter, Watch } from '@stencil/core';
import { TypeList } from './list';
@Component({
  tag: 'bds-list-item',
  styleUrl: 'list.scss',
  shadow: true,
})
export class ListItem {
  private hasActionAreaSlot: boolean;
  private hasContentAreaSlot: boolean;

  @Element() hostElement: HTMLElement;

  @State() internalChips: string[] = [];

  @State() internalActionsButtons: string[] = [];

  @Prop({ mutable: true, reflect: true }) checked?: boolean = false;
  /**
   * Typelis. Used toselect type of item list.
   */
  @Prop() typeList?: TypeList = null;
  /**
   * AvatarName. Used to enter the avatar name.
   */
  @Prop() avatarName?: string = null;
  /**
   * AvatarThumbnail. Used to insert the avatar photo.
   */
  @Prop() avatarThumbnail?: string = null;
  /**
   * Icon. Used to add icon in list item.
   */
  @Prop() icon?: string = null;
  /**
   * Value. Used to insert a value in list item.
   */
  @Prop() value: string = null;
  /**
   * Text. Used to insert a text in the display item.
   */
  @Prop() text?: string = null;
  /**
   * SecondaryText. Used to insert a secondaryText in the display item.
   */
  @Prop() secondaryText?: string = null;

  /**
   * The chips on the component
   * Should be passed this way:
   * chips='["chip1", "chip2"]'
   */
  @Prop({ mutable: true }) chips: string | string[] = [];

  /**
   * The actions buttons on the component
   * Should be passed this way:
   * actions-buttons='["copy", "settings-general", "more-options-horizontal"]'
   */
  @Prop({ mutable: true }) actionsButtons: string | string[] = [];

  /**
   * Clickable. Used to define if the item is clickable or not.
   */
  @Prop() clickable?: boolean = false;

  /**
   * Emitted when the value has changed because of a click event.
   */
  @Event() bdsChecked!: EventEmitter;

  /**
   * Emitted when click in someone actions buttom insert in data.
   */
  @Event() bdsClickActionButtom!: EventEmitter;

  componentWillLoad() {
    this.hasActionAreaSlot = !!this.hostElement.querySelector('[slot="action-area"]');
    this.hasContentAreaSlot = !!this.hostElement.querySelector('[slot="content-area"]');
    this.chipsChanged();
    this.actionsButtonsChanged();
  }

  @Watch('checked')
  protected checkedChanged(isChecked: boolean): void {
    this.bdsChecked.emit({
      value: this.value,
      text: this.text,
      secondaryText: this.secondaryText,
      typeList: this.typeList,
      checked: isChecked,
    });
  }

  @Watch('chips')
  protected chipsChanged(): void {
    if (this.chips) {
      if (typeof this.chips === 'string') {
        this.internalChips = JSON.parse(this.chips);
      } else {
        this.internalChips = this.chips;
      }
    } else {
      this.internalChips = [];
    }
  }

  @Watch('actionsButtons')
  protected actionsButtonsChanged(): void {
    if (this.actionsButtons) {
      if (typeof this.actionsButtons === 'string') {
        this.internalActionsButtons = JSON.parse(this.actionsButtons);
      } else {
        this.internalActionsButtons = this.actionsButtons;
      }
    } else {
      this.internalActionsButtons = [];
    }
  }

  private handler = (): void => {
    this.typeList == 'radio' ? (this.checked = true) : (this.checked = !this.checked);
  };

  private clickActionButtons = (data, event): void => {
    const elementButton = event.composedPath()[0];
    this.bdsClickActionButtom.emit({
      value: this.value,
      icon: data,
      elementButton: elementButton,
    });
  };

  private renderChips() {
    if (!this.internalChips.length) {
      return [];
    }

    return this.internalChips.map((chip, index) => {
      const id = index.toString();
      const limit = 30;
      if (chip.length <= limit) {
        return (
          <bds-chip-clickable id={id} key={id} color="default">
            {chip}
          </bds-chip-clickable>
        );
      } else {
        return (
          <bds-tooltip key={id} position="top-center" tooltip-text={chip}>
            <bds-chip-clickable id={id} key={id} color="default">
              {`${chip.slice(0, limit)} ...`}
            </bds-chip-clickable>
          </bds-tooltip>
        );
      }
    });
  }

  private renderActionsButtons() {
    if (!this.internalActionsButtons.length) {
      return [];
    }

    return this.internalActionsButtons.map((button, index) => {
      const id = index.toString();
      return (
        <bds-button-icon
          key={id}
          variant="secondary"
          icon={button}
          size="short"
          onClick={(ev) => this.clickActionButtons(button, ev)}
        ></bds-button-icon>
      );
    });
  }

  render() {
    const hasInput =
      this.clickable == true || this.typeList == 'checkbox' || this.typeList == 'radio' || this.typeList == 'switch';
    const hasLeftInput = this.typeList == 'checkbox' || this.typeList == 'radio';
    const hasAvatar = this.avatarName || this.avatarThumbnail;
    return (
      <Host>
        <div
          onClick={this.handler}
          tabindex="0"
          class={{
            list_item: true,
            clickable: hasInput,
          }}
        >
          {hasLeftInput && (
            <div class={{ input_list: true }}>
              {this.typeList == 'radio' && <bds-radio value={this.value} checked={this.checked}></bds-radio>}
              {this.typeList == 'checkbox' && (
                <bds-checkbox refer="" label="" name="cb1" disabled={false} checked={this.checked}></bds-checkbox>
              )}
            </div>
          )}
          {hasAvatar ? (
            <bds-avatar
              class="avatar-item"
              name={this.avatarName}
              thumbnail={this.avatarThumbnail}
              size="extra-small"
            ></bds-avatar>
          ) : (
            this.icon && <bds-icon class="icon-item" size="medium" name={this.icon} color="inherit"></bds-icon>
          )}
          <div
            class={{
              [`content-item`]: true,
              [`grow-up`]: !this.hasActionAreaSlot && !this.hasContentAreaSlot && this.internalChips.length < 0,
            }}
          >
            {this.text && (
              <bds-typo class="title-item" variant="fs-16" tag="span">
                {this.text}
              </bds-typo>
            )}
            {this.secondaryText && (
              <bds-typo class="subtitle-item" variant="fs-12" line-height="small" tag="span">
                {this.secondaryText}
              </bds-typo>
            )}
          </div>
          <div class={{ [`content-area`]: true, [`grow-up`]: true }}>
            {this.internalChips.length > 0 && <div class="internal-chips">{this.renderChips()}</div>}
            <slot name="content-area"></slot>
          </div>
          {(!this.typeList || this.typeList == 'default') && (
            <div class={{ [`action-area`]: true }}>
              {this.internalActionsButtons.length > 0 && (
                <div class="internal-actions-buttons">{this.renderActionsButtons()}</div>
              )}
              <slot name="action-area"></slot>
            </div>
          )}
          {this.typeList == 'switch' && <bds-switch refer="" name="" checked={this.checked}></bds-switch>}
        </div>
      </Host>
    );
  }
}
