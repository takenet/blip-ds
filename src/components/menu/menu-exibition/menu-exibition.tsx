import { Component, h, Prop } from '@stencil/core';

export type avatarSize = 'extra-small' | 'small' | 'standard';

@Component({
  tag: 'bds-menu-exibition',
  styleUrl: 'menu-exibition.scss',
  shadow: true,
})
export class BdsMenuExibition {
  /**
   * description
   */
  @Prop() avatarName?: string = null;
  /**
   * description
   */
  @Prop() avatarThumbnail?: string = null;
  /**
   * description
   */
  @Prop() avatarSize?: avatarSize = 'standard';
  /**
   * description
   */
  @Prop() value?: string = null;
  /**
   * description
   */
  @Prop() subtitle?: string = null;
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
        </div>
      </div>
    );
  }
}
