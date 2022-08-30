import { Component, EventEmitter, h, Prop, Event, Host } from '@stencil/core';
import { FontSize } from '../typo/typo';
import { IconSize } from '../icon/icon-interface';

export type avatarSize = 'micro' | 'extra-small' | 'small' | 'standard' | 'large' | 'extra-large';

@Component({
  tag: 'bds-avatar',
  styleUrl: 'avatar.scss',
  shadow: true,
})
export class BdsAvatar {
  private typoSize?: FontSize = 'fs-20';
  private iconSize?: IconSize = 'large';
  /**
   * Name, Inserted for highlighted osuary name. Enter the full name.
   */
  @Prop() name?: string = null;
  /**
   * Thumbnail, Inserted to highlight user image. Url field.
   */
  @Prop() thumbnail?: string = null;
  /**
   * Size, Entered as one of the size. Can be one of:
   * 'extra-small', 'small', 'standard', 'large', 'extra-large'.
   */
  @Prop() size?: avatarSize = 'standard';
  /**
   * Upload, Serve to enable upload function on avatar.
   */
  @Prop() upload?: boolean = false;
  /**
   * Ellipses, serves to indicate the user number in the listing.
   */
  @Prop() ellipsis?: number = null;

  /**
   * Data test is the prop to specifically test the component action object.
   */
  @Prop() dataTest?: string = null;
  @Event() bdsClickAvatar: EventEmitter;

  private onUploadClick(e) {
    e.preventDefault();
    this.bdsClickAvatar.emit(e);
  }

  private handleClickKey(event) {
    if ((event.key === 'Enter' || event.key === ' ') && this.upload) {
      event.preventDefault();
      this.bdsClickAvatar.emit();
    }
  }

  private selectTypoSize = (value): void => {
    switch (value) {
      case 'micro':
        this.typoSize = 'fs-12';
        this.iconSize = 'xx-small';
        break;
      case 'extra-small':
        this.typoSize = 'fs-14';
        this.iconSize = 'x-small';
        break;
      case 'small':
        this.typoSize = 'fs-16';
        this.iconSize = 'x-small';
        break;
      case 'standard':
        this.typoSize = 'fs-20';
        this.iconSize = 'medium';
        break;
      case 'large':
        this.typoSize = 'fs-24';
        this.iconSize = 'xxx-large';
        break;
      case 'extra-large':
        this.typoSize = 'fs-32';
        this.iconSize = 'xxx-large';
        break;
      default:
        this.typoSize = 'fs-20';
        this.iconSize = 'medium';
    }
  };

  render(): HTMLElement {
    const avatarColor = ['yellow', 'blue', 'green', 'brown', 'pink'];
    const randColor = avatarColor[Math.floor(Math.random() * avatarColor.length)];
    const avatarBgColor = !this.name || this.ellipsis ? 'neutral' : randColor;
    const arrayName = this.name ? this.name.split(' ') : [];
    const firstName = arrayName.length ? arrayName.shift().charAt(0) : '';
    const lastName = arrayName.length ? arrayName.pop().charAt(0) : '';
    this.selectTypoSize(this.size);

    return (
      <Host>
        <div
          class={{
            avatar: true,
            [`avatar__color--${avatarBgColor}`]: true,
            [`avatar__size--${this.size}`]: true,
            upload: this.upload,
          }}
          data-test={this.dataTest}
        >
          {this.ellipsis ? (
            <bds-typo
              margin={false}
              class="avatar__ellipsis"
              variant={this.typoSize}
              tag="span"
            >{`+${this.ellipsis}`}</bds-typo>
          ) : this.thumbnail ? (
            this.upload && this.size !== 'micro' ? (
              <div class="avatar__btn" onClick={() => this.onUploadClick}>
                <img class="avatar__btn__img" src={this.thumbnail} />
                <div class="avatar__btn__thumb">
                  <bds-icon
                    class="avatar__btn__thumb__icon"
                    name="upload"
                    theme="outline"
                    size={this.iconSize}
                  ></bds-icon>
                </div>
              </div>
            ) : (
              <img class="avatar__img" src={this.thumbnail} />
            )
          ) : this.name ? (
            this.upload && this.size !== 'micro' ? (
              <div class="avatar__btn" onClick={() => this.onUploadClick}>
                <bds-typo margin={false} class="avatar__btn__text" variant={this.typoSize} tag="span">
                  {firstName + lastName}
                </bds-typo>
                <div class="avatar__btn__name">
                  <bds-icon
                    class="avatar__btn__name__icon"
                    name="upload"
                    theme="outline"
                    size={this.iconSize}
                  ></bds-icon>
                </div>
              </div>
            ) : (
              <bds-typo margin={false} class="avatar__text" variant={this.typoSize} tag="span">
                {firstName + lastName}
              </bds-typo>
            )
          ) : this.upload && this.size !== 'micro' ? (
            <div class="avatar__btn" onClick={() => this.onUploadClick}>
              <bds-icon class="avatar__btn__icon" name="user-default" theme="outline" size={this.iconSize}></bds-icon>
              <div class="avatar__btn__empty">
                <bds-icon
                  class="avatar__btn__empty__icon"
                  name="upload"
                  theme="outline"
                  size={this.iconSize}
                ></bds-icon>
              </div>
            </div>
          ) : (
            <bds-icon class="avatar__icon" name="user-default" theme="outline" size={this.iconSize}></bds-icon>
          )}
        </div>
        {this.upload && this.size !== 'micro' ? (
          <div tabindex="0" onClick={() => this.handleClickKey} class="focus"></div>
        ) : (
          ''
        )}
      </Host>
    );
  }
}
