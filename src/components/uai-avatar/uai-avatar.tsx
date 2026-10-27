import { Component, Host, Prop, State, Watch, h } from '@stencil/core';
import { warnLegacyValue } from '../../utils/deprecation';

export type UaiAvatarSize = 'micro' | 'extra-small' | 'small' | 'standard' | 'large' | 'extra-large';

const SIZES: UaiAvatarSize[] = ['micro', 'extra-small', 'small', 'standard', 'large', 'extra-large'];

const supportedSize = (value: string): UaiAvatarSize => {
  if (SIZES.includes(value as UaiAvatarSize)) return value as UaiAvatarSize;
  warnLegacyValue('uai-avatar', 'size', value, 'standard');
  return 'standard';
};

/**
 * Static user avatar. Pass a remote image URL with `src`, explicit fallback initials with `initials`,
 * and an accessible name with `label`. The consuming application is responsible for uploading images.
 */
@Component({
  tag: 'uai-avatar',
  styleUrl: 'uai-avatar.scss',
  shadow: true,
})
export class UaiAvatar {
  @State() private imageFailed = false;

  /**
   * URL of the avatar image. The consuming application handles file selection and upload.
   */
  @Prop() src?: string;

  /**
   * Explicit one- or two-character fallback shown when the image is absent or fails to load.
   */
  @Prop() initials?: string;

  /**
   * Accessible name for the avatar. Without a label, the avatar is hidden from assistive technology.
   */
  @Prop() label?: string;

  /**
   * Avatar diameter: micro (`sizing/lg`), extra-small (`sizing/xl`), small (`sizing/2xl`), standard (`sizing/3xl`), large (`sizing/4xl`), or extra-large (`sizing/5xl`).
   */
  @Prop({ reflect: true }) size: UaiAvatarSize = 'standard';

  /**
   * Value placed on the avatar host for automated tests.
   */
  @Prop() dataTest?: string;

  @Watch('src')
  protected resetImageError(): void {
    this.imageFailed = false;
  }

  render(): HTMLElement {
    const size = supportedSize(this.size);
    const hasImage = !!this.src && !this.imageFailed;
    const initials = this.initials?.trim();
    const label = this.label?.trim();
    const iconSize = size === 'micro' ? 'x-small' : size === 'extra-small' ? 'small' : 'medium';

    return (
      <Host
        class={{ [`uai-avatar--size-${size}`]: true }}
        role={label ? 'img' : undefined}
        aria-label={label || undefined}
        aria-hidden={label ? undefined : 'true'}
        data-test={this.dataTest}
      >
        {hasImage ? (
          <img
            class="avatar__image"
            src={this.src}
            alt=""
            aria-hidden="true"
            onError={() => (this.imageFailed = true)}
          />
        ) : initials ? (
          <span class="avatar__initials" aria-hidden="true">
            {initials}
          </span>
        ) : (
          <uai-icon
            class="avatar__icon"
            name="avatar-user"
            theme="outline"
            size={iconSize}
            aria-hidden="true"
          ></uai-icon>
        )}
      </Host>
    );
  }
}
