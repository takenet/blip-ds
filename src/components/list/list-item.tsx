import { Element, Component, Host, h, Prop, Event, EventEmitter, Watch } from '@stencil/core';

export type avatarSize = 'extra-small' | 'small' | 'standard';
export type TypeList = 'checkbox' | 'radio' | 'switch' | 'default';

@Component({
  tag: 'bds-list-item',
  styleUrl: 'list.scss',
  shadow: true,
})
export class ListItem {
  private hasContentSlot: boolean;

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
   * AvatarSize. Used to set avatar size.
   */
  @Prop() avatarSize?: avatarSize = 'extra-small';
  /**
   * Icon. Used to add icon in header accordion.
   */
  @Prop() icon?: string = null;
  /**
   * Value. Used to insert a title in the display item.
   */
  @Prop() value: string = null;
  /**
   * Subtitle. Used to insert a subtitle in the display item.
   */
  @Prop() subtitle?: string = null;

  /**
   * Emitted when the value has changed because of a click event.
   */
  @Event() bdsChange!: EventEmitter;

  componentWillLoad() {
    this.hasContentSlot = !!this.hostElement.querySelector('[slot="footer"]');
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
              size={this.avatarSize}
            ></bds-avatar>
          ) : (
            this.icon && <bds-icon class="icon-item" size="medium" name={this.icon} color="inherit"></bds-icon>
          )}
          <div class={{ [`content-item`]: true, [`grow-up`]: this.hasContentSlot }}>
            {this.value && (
              <bds-typo class="title-item" variant="fs-16" tag="span">
                {this.value}
              </bds-typo>
            )}
            {this.subtitle && (
              <bds-typo class="subtitle-item" variant="fs-12" line-height="small" tag="span">
                {this.subtitle}
              </bds-typo>
            )}
          </div>
          <div class="content-list">
            <slot name="content-list"></slot>
          </div>
          <div class="action-area">
            <slot name="action-area"></slot>
          </div>
          {this.typeList == 'switch' && <bds-switch refer="" name="" checked={this.checked}></bds-switch>}
        </div>
      </Host>
    );
  }
}
