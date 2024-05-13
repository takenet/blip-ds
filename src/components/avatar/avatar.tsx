import { Component, EventEmitter, h, Prop, Event, Host, State, Element } from '@stencil/core';
import { FontSize } from '../typo/typo';
import { IconSize } from '../icon/icon-interface';
import { colorLetter } from './color-letter';

export type avatarSize = 'micro' | 'extra-small' | 'small' | 'standard' | 'large' | 'extra-large';
export type colors = 'colorLetter' | 'system' | 'success' | 'warning' | 'error' | 'info' | 'surface';

@Component({
  tag: 'bds-avatar',
  styleUrl: 'avatar.scss',
  shadow: true,
})
export class BdsAvatar {
  @Element() el: HTMLElement;
  private typoSize?: FontSize = 'fs-20';
  private iconSize?: IconSize = 'large';
  @State() hasThumb: boolean;
  /**
   * Name, Inserted for highlighted osuary name. Enter the full name.
   */
  @Prop() name?: string = null;
  /**
   * Thumbnail, Inserted to highlight user image. Url field.
   */
  @Prop({ mutable: true }) thumbnail?: string = null;
  /**
   * Size, Entered as one of the size. Can be one of:
   * 'extra-small', 'small', 'standard', 'large', 'extra-large'.
   */
  @Prop() size?: avatarSize = 'standard';
  /**
   * Color, Entered as one of the color. Can be one of:
   * 'system', 'success', 'warning', 'error', 'info'.
   */
  @Prop() color?: colors = 'colorLetter';
  /**
   * Upload, Serve to enable upload function on avatar.
   */
  @Prop() upload?: boolean = false;
  /**
   * When set to true, allows the avatar to be clicked to select and upload an image.
   */
  @Prop() openUpload?: boolean = false;
  /**
   * Ellipses, serves to indicate the user number in the listing.
   */
  @Prop() ellipsis?: number = null;

  /**
   * Data test is the prop to specifically test the component action object.
   */
  @Prop() dataTest?: string = null;
  @Event() bdsClickAvatar: EventEmitter;
  @Event() bdsImageUpload: EventEmitter;

  private onUploadClick(e) {
    e.preventDefault();
    this.bdsClickAvatar.emit(e);
    if (this.openUpload) {
      this.handleOpenUpload(e);
    }
  }

  handleOpenUpload = (e) => {
    const file = this.el.shadowRoot.getElementById('file-input');
    if (e.type === 'click' || (e.type === 'keydown' && (e.key === 'Enter' || e.key === ' '))) {
      file.click();
    }
  };

  private onFileInputChange(event) {
    const fileInput = event.target as HTMLInputElement;
    const files = fileInput.files;

    if (files && files.length > 0) {
      const selectedFile = files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        const imageUrl = e.target.result as string;
        this.thumbnail = imageUrl;
        this.bdsImageUpload.emit(imageUrl);
      };

      reader.readAsDataURL(selectedFile);
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
        this.iconSize = 'medium';
        break;
      case 'standard':
        this.typoSize = 'fs-20';
        this.iconSize = 'x-large';
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

  private avatarBgColor = (letter: string) => {
    if (this.color != 'colorLetter') {
      return this.color;
    } else if (letter) {
      const currentColor = colorLetter.find((item) => item.value === letter);
      return currentColor.color;
    }
  };

  componentWillRender() {
    this.hasThumb = this.thumbnail ? (this.thumbnail.length !== 0 ? true : false) : false;
  }

  render(): HTMLElement {
    const arrayName = this.name ? this.name.split(' ') : [];
    const firstName = arrayName.length ? arrayName.shift().charAt(0).toUpperCase() : '';
    const lastName = arrayName.length ? arrayName.pop().charAt(0).toUpperCase() : '';
    this.selectTypoSize(this.size);
    const thumbnailStyle = {
      backgroundImage: `url(${this.hasThumb ? this.thumbnail : null})`,
    };

    return (
      <Host>
        <input
          type="file"
          id="file-input"
          accept="image/*"
          onChange={(event) => this.onFileInputChange(event)}
          style={{ display: 'none' }}
        ></input>
        <div
          class={{
            avatar: true,
            [`avatar__color--${
              this.name && !this.hasThumb
                ? this.avatarBgColor(firstName)
                : this.hasThumb && !this.name
                  ? 'surface'
                  : !this.name && !this.hasThumb
                    ? 'surface'
                    : this.name && this.hasThumb
                      ? this.avatarBgColor(firstName)
                      : null
            }`]: true,
            [`avatar__size--${this.size}`]: true,
            upload: this.upload || this.openUpload,
          }}
          onClick={(ev) => this.onUploadClick(ev)}
          tabindex="0"
          onKeyDown={(ev) => this.onUploadClick(ev)}
          data-test={this.dataTest}
        >
          {this.ellipsis ? (
            <div class="avatar__btn">
              <bds-typo margin={false} variant={this.typoSize} tag="span">{`+${this.ellipsis}`}</bds-typo>
            </div>
          ) : this.thumbnail ? (
            this.upload || this.openUpload ? (
              <div class="avatar__btn">
                <div class={`avatar__btn__img avatar__size--${this.size}`} style={thumbnailStyle}></div>
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
              <div class="avatar__btn">
                <div class={`avatar__btn__img avatar__size--${this.size}`} style={thumbnailStyle}></div>
              </div>
            )
          ) : this.name ? (
            this.upload || this.openUpload ? (
              <div class="avatar__btn">
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
              <div class="avatar__btn">
                <bds-typo margin={false} class="avatar__text" variant={this.typoSize} tag="span">
                  {firstName + lastName}
                </bds-typo>
              </div>
            )
          ) : this.upload || this.openUpload ? (
            <div class="avatar__btn">
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
          ) : this.name === null && !this.hasThumb ? (
            <div class="avatar__btn">
              <bds-icon class="avatar__icon" name="user-default" theme="outline" size={this.iconSize}></bds-icon>
            </div>
          ) : (
            ''
          )}
        </div>
      </Host>
    );
  }
}
