import { Component, Element, Event, EventEmitter, Host, Prop, State, Watch, h } from '@stencil/core';
import { warnDeprecated, warnLegacyValue } from '../../utils/deprecation';
import { colorLetter } from '../avatar/color-letter';
import { initialsOf } from './uai-avatar-initials';

export type UaiAvatarSize = 'micro' | 'extra-small' | 'small' | 'standard' | 'large' | 'extra-large';
export type UaiAvatarColor = 'colorLetter' | 'system' | 'success' | 'warning' | 'error' | 'info' | 'surface';

type ResolvedColor = 'info' | 'success' | 'warning' | 'error' | 'surface';

const TAG = 'uai-avatar';
const SIZES: UaiAvatarSize[] = ['micro', 'extra-small', 'small', 'standard', 'large', 'extra-large'];
const COLORS: UaiAvatarColor[] = ['colorLetter', 'system', 'success', 'warning', 'error', 'info', 'surface'];

// system and info share feedback/info-subtle: UAI has a single information surface.
const UAI_COLOR: Record<Exclude<UaiAvatarColor, 'colorLetter'>, ResolvedColor> = {
  system: 'info',
  info: 'info',
  success: 'success',
  warning: 'warning',
  error: 'error',
  surface: 'surface',
};

const ICON_SIZE: Record<UaiAvatarSize, 'x-small' | 'small' | 'medium'> = {
  micro: 'x-small',
  'extra-small': 'small',
  small: 'medium',
  standard: 'medium',
  large: 'medium',
  'extra-large': 'medium',
};

/**
 * Avatar of a person: photo, initials of the name or a generic icon. Same contract as bds-avatar with UAI tokens.
 * Give the full name in `name`: it builds the initials and the accessible name. Use it in lists, profiles and
 * headers. Pair with the person's name nearby when the avatar is small. Avoid it as a generic button; use `upload`
 * or `openUpload` only when the avatar itself changes the photo. Wrap the app in UaiThemeProvider.
 *
 * @part avatar - The circle with the photo, initials, icon or counter.
 */
@Component({
  tag: 'uai-avatar',
  styleUrl: 'uai-avatar.scss',
  shadow: true,
})
export class UaiAvatar {
  @Element() el!: HTMLElement;

  @State() private imageFailed = false;

  private fileInput?: HTMLInputElement;

  /**
   * Full name of the person. Builds the initials (first letter of the first and the last name) and the accessible
   * name.
   */
  @Prop() name?: string = null;

  /**
   * URL of the photo. Without it, or if it fails to load, the initials are shown.
   */
  @Prop({ mutable: true }) thumbnail?: string = null;

  /**
   * Avatar size. Can be one of: 'micro', 'extra-small', 'small', 'standard' (default), 'large', 'extra-large'.
   */
  @Prop({ reflect: true }) size?: UaiAvatarSize = 'standard';

  /**
   * Background behind the initials. Can be one of: 'colorLetter' (default, picked by the first letter of the name),
   * 'system', 'success', 'warning', 'error', 'info', 'surface' (neutral).
   */
  @Prop() color?: UaiAvatarColor = 'colorLetter';

  /**
   * If true, shows the upload icon on hover and focus. The click only emits uaiClickAvatar; the app opens its own
   * picker.
   */
  @Prop() upload?: boolean = false;

  /**
   * If true, activating the avatar opens the image picker, shows the chosen image and emits uaiImageUpload.
   */
  @Prop() openUpload?: boolean = false;

  /**
   * Number of hidden people, shown as "+N" (for example in a group of avatars).
   */
  @Prop() ellipsis?: number = null;

  /**
   * Data test id, set on the host.
   */
  @Prop() dataTest?: string = null;

  /**
   * @deprecated Use thumbnail.
   */
  @Prop() src?: string;

  /**
   * @deprecated Use name. It builds the initials and the accessible name.
   */
  @Prop() label?: string;

  /**
   * @deprecated The initials come from name. Without name, at most two characters are shown.
   */
  @Prop() initials?: string;

  /**
   * Emitted when the avatar is clicked, or activated with Enter or Space when it is interactive.
   */
  @Event() uaiClickAvatar!: EventEmitter<PointerEvent | KeyboardEvent>;

  /**
   * Emitted with the chosen image as a data URL, when openUpload is true.
   */
  @Event() uaiImageUpload!: EventEmitter<string>;

  @Watch('thumbnail')
  @Watch('src')
  protected resetImageError(): void {
    this.imageFailed = false;
  }

  componentWillLoad() {
    if (this.src !== undefined && this.src !== null) warnDeprecated(TAG, 'src', 'Use thumbnail.');
    if (this.label !== undefined && this.label !== null) warnDeprecated(TAG, 'label', 'Use name.');
    if (this.initials !== undefined && this.initials !== null) {
      warnDeprecated(TAG, 'initials', 'The initials come from name.');
    }
  }

  private get sizeValue(): UaiAvatarSize {
    if ((SIZES as string[]).includes(this.size)) return this.size;
    warnLegacyValue(TAG, 'size', this.size, 'standard');
    return 'standard';
  }

  private get personName(): string {
    return (this.name || this.label || '').trim();
  }

  private get image(): string {
    return this.thumbnail || this.src || '';
  }

  private get interactive(): boolean {
    return !!(this.upload || this.openUpload);
  }

  private get text(): string {
    const fromName = initialsOf(this.personName);
    if (fromName) return fromName;
    return (this.initials || '').trim().slice(0, 2).toUpperCase();
  }

  private resolvedColor(initials: string): ResolvedColor {
    let color = this.color;
    if (!(COLORS as string[]).includes(color)) {
      warnLegacyValue(TAG, 'color', color, 'colorLetter');
      color = 'colorLetter';
    }
    if (color !== 'colorLetter') return UAI_COLOR[color];
    const letter = colorLetter.find((item) => item.value === initials.charAt(0));
    return letter ? UAI_COLOR[letter.color as keyof typeof UAI_COLOR] || 'surface' : 'surface';
  }

  private activate(event: PointerEvent | KeyboardEvent) {
    this.uaiClickAvatar.emit(event);
    if (this.openUpload) this.fileInput?.click();
  }

  private onClick = (event: PointerEvent): void => {
    this.activate(event);
  };

  private onKeyDown = (event: KeyboardEvent): void => {
    if (!this.interactive || (event.key !== 'Enter' && event.key !== ' ')) return;
    event.preventDefault();
    this.activate(event);
  };

  private onFileChange = (event: Event): void => {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const url = reader.result as string;
      this.thumbnail = url;
      this.uaiImageUpload.emit(url);
    };
    reader.readAsDataURL(file);
  };

  private renderContent(size: UaiAvatarSize, initials: string) {
    if (this.ellipsis) {
      return (
        <span class="avatar__ellipsis" aria-hidden="true">
          {`+${this.ellipsis}`}
        </span>
      );
    }
    if (this.image && !this.imageFailed) {
      return (
        <img
          class="avatar__image"
          src={this.image}
          alt=""
          aria-hidden="true"
          onError={() => (this.imageFailed = true)}
        />
      );
    }
    if (initials) {
      return (
        <span class="avatar__initials" aria-hidden="true">
          {initials}
        </span>
      );
    }
    return (
      <uai-icon
        class="avatar__icon"
        name="avatar-user"
        theme="outline"
        size={ICON_SIZE[size]}
        aria-hidden="true"
      ></uai-icon>
    );
  }

  render(): HTMLElement {
    const size = this.sizeValue;
    const initials = this.text;
    const hasImage = !!this.image && !this.imageFailed;
    const color = this.ellipsis || hasImage || !initials ? 'surface' : this.resolvedColor(initials);
    const name = this.personName;
    const interactive = this.interactive;
    const accessibleName = name || (this.ellipsis ? `+${this.ellipsis}` : '');

    return (
      <Host
        class={{
          [`uai-avatar--size-${size}`]: true,
          [`uai-avatar--color-${color}`]: true,
          'uai-avatar--upload': interactive,
        }}
        role={interactive ? 'button' : accessibleName ? 'img' : null}
        tabindex={interactive ? '0' : null}
        aria-label={interactive ? accessibleName || 'Avatar' : accessibleName || null}
        aria-hidden={!interactive && !accessibleName ? 'true' : null}
        data-test={this.dataTest}
        onClick={this.onClick}
        onKeyDown={this.onKeyDown}
      >
        <div class="avatar" part="avatar">
          {this.renderContent(size, initials)}
          {interactive && (
            <div class="avatar__upload" aria-hidden="true">
              <uai-icon name="upload" theme="outline" size={ICON_SIZE[size]}></uai-icon>
            </div>
          )}
        </div>
        {this.openUpload && (
          <input
            ref={(input) => (this.fileInput = input)}
            class="avatar__file"
            type="file"
            accept="image/*"
            tabindex="-1"
            aria-hidden="true"
            onChange={this.onFileChange}
            onClick={(event) => event.stopPropagation()}
          />
        )}
      </Host>
    );
  }
}
