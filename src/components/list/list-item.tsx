import { Element, Component, Host, h, Prop, Event, EventEmitter, Watch } from '@stencil/core';
import { TypeList } from './list';

export type avatarSize = 'extra-small' | 'small' | 'standard';

@Component({
  tag: 'bds-list-item',
  styleUrl: 'list.scss',
  shadow: true,
})
export class ListItem {
  private hasActionAreaSlot: boolean;
  private hasContentAreaSlot: boolean;

  @Element() hostElement: HTMLElement;

  @Prop({ mutable: true, reflect: true }) checked?: boolean = false;
  /**
   * AvatarName. Used to enter the avatar name.
   */
  @Prop() typeList?: TypeList = 'default';
  /**
   * AvatarName. Used to enter the avatar name.
   */
  @Prop() avatarName?: string = null;
  /**
   * AvatarThumbnail. Used to insert the avatar photo.
   */
  @Prop() avatarThumbnail?: string = null;
  /**
   * Icon. Used to add icon in header accordion.
   */
  @Prop() icon?: string = null;
  /**
   * Value. Used to insert a title in the display item.
   */
  @Prop() value: string = null;
  /**
   * Text. Used to insert a secondaryText in the display item.
   */
  @Prop() text?: string = null;
  /**
   * SecondaryText. Used to insert a secondaryText in the display item.
   */
  @Prop() secondaryText?: string = null;

  /**
   * Emitted when the value has changed because of a click event.
   */
  @Event() bdsChange!: EventEmitter;

  componentWillLoad() {
    this.hasActionAreaSlot = !!this.hostElement.querySelector('[slot="action-area"]');
    this.hasContentAreaSlot = !!this.hostElement.querySelector('[slot="content-area"]');
  }

  @Watch('checked')
  protected checkedChanged(isChecked: boolean): void {
    this.bdsChange.emit({ checked: isChecked });
  }

  private handler = (): void => {
    this.typeList == 'radio' ? (this.checked = true) : (this.checked = !this.checked);
  };

  render() {
    const hasInput = this.typeList == 'checkbox' || this.typeList == 'radio';
    const hasAvatar = this.avatarName || this.avatarThumbnail;
    return (
      <Host>
        <div
          onClick={this.handler}
          tabindex="0"
          class={{
            list_item: true,
            clickable: hasInput || this.typeList == 'switch',
          }}
        >
          {hasInput && (
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
          <div class={{ [`content-item`]: true, [`grow-up`]: !this.hasActionAreaSlot && !this.hasContentAreaSlot }}>
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
            <slot name="content-area"></slot>
          </div>
          <div class={{ [`action-area`]: true }}>
            <slot name="action-area"></slot>
          </div>
          {this.typeList == 'switch' && <bds-switch refer="" name="" checked={this.checked}></bds-switch>}
        </div>
      </Host>
    );
  }
}
