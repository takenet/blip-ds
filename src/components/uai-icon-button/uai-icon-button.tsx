import { Component, Element, Event, EventEmitter, Host, Method, Prop, State, h } from '@stencil/core';
import { UaiIconSize } from '../uai-icon/uai-icon';
import { UaiIconTheme } from '../../globals/uai-icons';
import { warnLegacyValue, warnOnce } from '../../utils/deprecation';

export type UaiIconButtonVariant = 'solid' | 'outline' | 'ghost';
export type UaiIconButtonColor = 'primary' | 'content' | 'positive' | 'negative';
export type UaiIconButtonSize = 'compact' | 'short' | 'medium' | 'large';
export type UaiIconButtonType = 'button' | 'submit' | 'reset';
export type UaiIconButtonIconTheme = UaiIconTheme;

const VARIANTS: readonly UaiIconButtonVariant[] = ['solid', 'outline', 'ghost'];
const COLORS: readonly UaiIconButtonColor[] = ['primary', 'content', 'positive', 'negative'];
const SIZES: readonly UaiIconButtonSize[] = ['compact', 'short', 'medium', 'large'];
const TYPES: readonly UaiIconButtonType[] = ['button', 'submit', 'reset'];
const ICON_THEMES: readonly UaiIconButtonIconTheme[] = ['outline', 'solid'];

const LEGACY_VARIANTS: Record<string, { variant: UaiIconButtonVariant; color?: UaiIconButtonColor }> = {
  text: { variant: 'ghost' },
  primary: { variant: 'solid' },
  secondary: { variant: 'outline' },
  'secondary--white': { variant: 'outline' },
  tertiary: { variant: 'outline' },
  delete: { variant: 'solid', color: 'negative' },
};

const LEGACY_SIZES: Record<string, UaiIconButtonSize> = {
  standard: 'medium',
  tall: 'large',
};

const ICON_SIZE: Record<UaiIconButtonSize, UaiIconSize> = {
  compact: 'x-small',
  short: 'small',
  medium: 'medium',
  large: 'medium',
};

/**
 * Square icon-only action button for toolbars, card headers, and compact controls.
 * Use `variant="ghost"` or `variant="outline"` for secondary actions and `variant="solid"` for high-emphasis triggers;
 * pair with `aria-label` or `aria-labelledby` so assistive technologies announce the action; avoid omitting an accessible name.
 *
 * @part button - The native button element.
 */
@Component({
  tag: 'uai-icon-button',
  styleUrl: 'uai-icon-button.scss',
  shadow: true,
})
export class UaiIconButton {
  @Element() el!: HTMLElement;

  @State() active?: boolean;

  /**
   * Name of the glyph from the UAI icon font. When omitted, nothing is rendered.
   */
  @Prop({ reflect: true }) icon?: string = null;

  /**
   * Style of the UAI icon glyph (`outline` or `solid`).
   */
  @Prop({ reflect: true }) iconTheme?: UaiIconButtonIconTheme = 'outline';

  /**
   * Visual emphasis of the button (`solid`, `outline`, or `ghost`).
   */
  @Prop({ mutable: true }) variant?: UaiIconButtonVariant = 'solid';

  /**
   * Semantic color of the action (`primary`, `content`, `positive`, or `negative`).
   */
  @Prop({ mutable: true }) color?: UaiIconButtonColor = 'primary';

  /**
   * Control size (`compact`, `short`, `medium`, or `large`), mapped to `control-height/*` tokens.
   */
  @Prop({ mutable: true }) size?: UaiIconButtonSize = 'medium';

  /**
   * If true, disables the native button and prevents `uaiClick` emission.
   */
  @Prop() disabled?: boolean = false;

  /**
   * If true, renders a loading spinner instead of the icon and prevents `uaiClick` emission.
   */
  @Prop() loading?: boolean = false;

  /**
   * Native button type (`button`, `submit`, or `reset`).
   */
  @Prop() type?: UaiIconButtonType = 'button';

  /**
   * Accessible name forwarded to the inner `<button>`. Required when `aria-labelledby` is not set.
   */
  @Prop({ attribute: 'aria-label' }) ariaLabel: string | null = null;

  /**
   * ID reference forwarded to the inner `<button>` when labelled by an external element.
   */
  @Prop({ attribute: 'aria-labelledby' }) ariaLabelledby?: string = null;

  /**
   * Selector attribute forwarded to the inner `<button>` for automated tests.
   */
  @Prop() dataTest?: string = null;

  /**
   * Emitted when the button is activated by pointer or keyboard while enabled and not loading.
   */
  @Event() uaiClick!: EventEmitter<MouseEvent>;

  /**
   * Controls the visual active/pressed state of the button programmatically.
   */
  @Method()
  async isActive(value: boolean): Promise<void> {
    this.active = value;
  }

  private resolveVariantAndColor(): { variant: UaiIconButtonVariant; color: UaiIconButtonColor } {
    const rawColor = String(this.color ?? 'primary');
    let resolvedColor: UaiIconButtonColor = 'primary';
    if ((COLORS as readonly string[]).includes(rawColor)) {
      resolvedColor = rawColor as UaiIconButtonColor;
    } else {
      warnLegacyValue('uai-icon-button', 'color', rawColor, 'primary');
    }

    const rawVariant = String(this.variant ?? 'solid');
    if ((VARIANTS as readonly string[]).includes(rawVariant)) {
      return { variant: rawVariant as UaiIconButtonVariant, color: resolvedColor };
    }

    const mapped = LEGACY_VARIANTS[rawVariant];
    if (mapped) {
      warnLegacyValue('uai-icon-button', 'variant', rawVariant, mapped.variant);
      return {
        variant: mapped.variant,
        color: mapped.color ?? resolvedColor,
      };
    }

    warnLegacyValue('uai-icon-button', 'variant', rawVariant, 'solid');
    return { variant: 'solid', color: resolvedColor };
  }

  private resolveSize(): UaiIconButtonSize {
    const rawSize = String(this.size ?? 'medium');
    if ((SIZES as readonly string[]).includes(rawSize)) {
      return rawSize as UaiIconButtonSize;
    }
    const mapped = LEGACY_SIZES[rawSize];
    if (mapped) {
      warnLegacyValue('uai-icon-button', 'size', rawSize, mapped);
      return mapped;
    }
    warnLegacyValue('uai-icon-button', 'size', rawSize, 'medium');
    return 'medium';
  }

  private resolveType(): UaiIconButtonType {
    const rawType = String(this.type ?? 'button');
    if ((TYPES as readonly string[]).includes(rawType)) {
      return rawType as UaiIconButtonType;
    }
    warnLegacyValue('uai-icon-button', 'type', rawType, 'button');
    return 'button';
  }

  private resolveIconTheme(): UaiIconButtonIconTheme {
    const rawTheme = String(this.iconTheme ?? 'outline');
    if ((ICON_THEMES as readonly string[]).includes(rawTheme)) {
      return rawTheme as UaiIconButtonIconTheme;
    }
    warnLegacyValue('uai-icon-button', 'iconTheme', rawTheme, 'outline');
    return 'outline';
  }

  private handleClick = (ev: MouseEvent): void => {
    if (this.disabled || this.loading) {
      ev.preventDefault();
      ev.stopPropagation();
      return;
    }
    this.uaiClick.emit(ev);
    this.actOnForm(this.resolveType());
  };

  private actOnForm(buttonType: UaiIconButtonType): void {
    if (buttonType === 'button') return;
    const form = this.el.closest('form');
    if (!form) return;
    const proxy = document.createElement('button');
    proxy.type = buttonType;
    proxy.style.display = 'none';
    form.appendChild(proxy);
    proxy.click();
    proxy.remove();
  }

  render(): HTMLElement {
    if (!this.icon) return null;

    const { variant, color } = this.resolveVariantAndColor();
    const size = this.resolveSize();
    const buttonType = this.resolveType();
    const theme = this.resolveIconTheme();

    const ariaLabel = (this.ariaLabel || this.el.getAttribute('aria-label') || '').trim();
    const ariaLabelledby = (this.ariaLabelledby || this.el.getAttribute('aria-labelledby') || '').trim();

    if (!ariaLabel && !ariaLabelledby) {
      warnOnce(
        'uai-icon-button',
        'missing-accessible-name',
        'Icon buttons require an accessible name via aria-label or aria-labelledby.',
      );
    }

    return (
      <Host>
        <button
          part="button"
          type={buttonType}
          class={{
            'icon-button': true,
            [`icon-button--${variant}`]: true,
            [`icon-button--color-${color}`]: true,
            [`icon-button--size-${size}`]: true,
            'icon-button--active': !!this.active,
            active: !!this.active,
            'icon-button--loading': !!this.loading,
          }}
          disabled={this.disabled}
          aria-disabled={this.loading ? 'true' : undefined}
          aria-busy={this.loading ? 'true' : undefined}
          aria-label={ariaLabel || undefined}
          aria-labelledby={ariaLabelledby || undefined}
          aria-pressed={this.active === undefined ? undefined : String(this.active)}
          data-test={this.dataTest}
          onClick={this.handleClick}
        >
          {this.loading ? (
            <span class="icon-button__spinner" aria-hidden="true"></span>
          ) : (
            <uai-icon
              class="icon-button__icon"
              name={this.icon}
              theme={theme}
              size={ICON_SIZE[size]}
              aria-hidden="true"
            ></uai-icon>
          )}
        </button>
      </Host>
    );
  }
}
