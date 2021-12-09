import { Component, h, Prop } from '@stencil/core';
import { FontSize } from '../typo/typo';
import { IconSize } from '../icon/icon-interface';

export type avatarSize = 'extra-small' | 'small' | 'standard' | 'large' | 'extra-large';

@Component({
  tag: 'bds-avatar',
  styleUrl: 'avatar.scss',
  shadow: false,
})
export class BdsAvatar {

  private typoSize?: FontSize = 'fs-20';
  private iconSize?: IconSize = 'large';
  /**
  * Name. Inserted for highlighted osuary name. Enter the full name.
  */
  @Prop() name?: string = null;
  /**
  * Thumbnail. Inserted to highlight user image. Url field.
  */
  @Prop() thumbnail?: string = null;
  /**
  * Size. Entered as one of the size. Can be one of:
  * 'extra-small', 'small', 'standard', 'large', 'extra-large'.
  */
  @Prop() size?: avatarSize = 'standard';
  /**
  * Button. Serve to enable button function on avatar.
  */
  @Prop() button?: boolean = false;
  /**
  * Ellipses, serves to indicate the user number in the listing.
  */
  @Prop() ellipsis?: number = null;
  private selectTypoSize = (value): void => {
    switch (value) {
      case 'extra-small':
        this.typoSize = 'fs-14';
        this.iconSize = 'x-small';
        break
      case 'small':
        this.typoSize = 'fs-16';
        this.iconSize = 'small';
        break
      case 'standard':
        this.typoSize = 'fs-20';
        this.iconSize = 'medium';
        break
      case 'large':
        this.typoSize = 'fs-24';
        this.iconSize = 'large';
        break
      case 'extra-large':
        this.typoSize = 'fs-32';
        this.iconSize = 'x-large';
        break
      default:
        this.typoSize = 'fs-20';
        this.iconSize = 'medium';
    }
  }

  render(): HTMLElement {
    const avatarColor = ["purple", "brand", "green", "brown", "pink"];
    const randColor = avatarColor[Math.floor(Math.random() * avatarColor.length)];
    const avatarBgColor = !this.name || this.ellipsis ? 'neutral' : randColor;
    const arrayName = this.name ? this.name.split(' ') : [];
    const firstName = arrayName.length ? arrayName.shift().charAt(0) : '';
    const lastName = arrayName.length ? arrayName.pop().charAt(0) : '';
    const Element = this.button ? 'button' : 'div';
    this.selectTypoSize(this.size);

    return (
      <Element
        class={{
          avatar: true,
          [`avatar__size--${this.size}`]: true,
          [`avatar__color--${avatarBgColor}`]: true,
          button: this.button
        }}
      >
        {this.ellipsis ? (
          <bds-typo class="avatar__ellipsis" variant={this.typoSize} tag="span">{`+${this.ellipsis}`}</bds-typo>
        ) : (
          this.thumbnail ? (
            this.button ? (
              <div
                class="avatar__btn">
                <img class="avatar__btn__img" src={this.thumbnail} />
                <div class="avatar__btn__thumb">
                  <bds-icon class="avatar__btn__thumb__icon" name="edit" theme="outline" size={this.iconSize}></bds-icon>
                </div>
              </div>
            ) : (
              <img class="avatar__img" src={this.thumbnail} />
            )
          ) : (
            this.name ? (
              this.button ? (
                <div
                  class="avatar__btn">
                  <bds-typo class="avatar__btn__text" variant={this.typoSize} tag="span">{firstName+lastName}</bds-typo>
                  <div class="avatar__btn__name">
                    <bds-icon class="avatar__btn__name__icon" name="upload" theme="outline" size={this.iconSize}></bds-icon>
                  </div>
                </div>
              ) : (
                <bds-typo class="avatar__text" variant={this.typoSize} tag="span">{firstName+lastName}</bds-typo>
              )
            ) : (
              this.button ? (
                <div
                  class="avatar__btn">
                  <bds-icon class="avatar__btn__icon" name="user-default" theme="outline" size={this.iconSize}></bds-icon>
                  <div class="avatar__btn__empty">
                    <bds-icon class="avatar__btn__empty__icon" name="upload" theme="outline" size={this.iconSize}></bds-icon>
                  </div>
                </div>
              ) : (
                <bds-icon class="avatar__icon" name="user-default" theme="outline" size={this.iconSize}></bds-icon>
              )
            )
          )
        )}
      </Element>
    );
  }

}
