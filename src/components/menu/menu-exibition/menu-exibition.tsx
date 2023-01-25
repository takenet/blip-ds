import { Component, h, Prop } from '@stencil/core';

export type avatarSize = 'extra-small' | 'small' | 'standard';

@Component({
  tag: 'bds-menu-exibition',
  styleUrl: 'menu-exibition.scss',
  shadow: true,
})
export class BdsMenuExibition {
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
  @Prop() avatarSize?: avatarSize = 'standard';
  /**
   * Value. Used to insert a title in the display item.
   */
  @Prop() value?: string = null;
  /**
   * Subtitle. Used to insert a subtitle in the display item.
   */
  @Prop() subtitle?: string = null;
  /**
   * Description. Used to insert a subtitle in the display item.
   */
  @Prop() description?: string = null;
  render() {
    const hasAvatar = this.avatarName || this.avatarThumbnail;
    return (
      <div
        class={{
          menuexibition: true,
        }}
      >
        {hasAvatar && (
          <bds-avatar
            class="avatar-item"
            name={this.avatarName}
            thumbnail={this.avatarThumbnail}
            size={this.avatarSize}
          ></bds-avatar>
        )}
        <div class="content-item">
          {this.value && (
            <bds-typo class="title-item" variant="fs-16" tag="span">
              {this.value}
            </bds-typo>
          )}
          {this.subtitle && (
            <bds-typo class="subtitle-item" variant="fs-10" tag="span">
              {this.subtitle}
            </bds-typo>
          )}
          {this.description && (
            <bds-typo class="description-item" variant="fs-10" tag="span">
              {this.description}
            </bds-typo>
          )}
        </div>
      </div>
    );
  }
}
