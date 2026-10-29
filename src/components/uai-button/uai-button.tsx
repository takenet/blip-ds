import { Component, Element, Event, EventEmitter, Host, Method, Prop, State, Watch, h } from '@stencil/core';
import { colorsVariants, LoadingSpinnerVariant } from '../loading-spinner/loading-spinner';
import { IconSize } from '../icon/icon-interface';
import { isUaiIcon } from '../../globals/uai-icons';
import { warnDeprecated, warnLegacyValue, warnOnce } from '../../utils/deprecation';

export type UaiButtonVariant = 'solid' | 'outline' | 'text';
export type UaiButtonColor = 'primary' | 'content' | 'negative' | 'positive';
export type UaiButtonSize = 'compact' | 'short' | 'medium' | 'large';
export type UaiButtonType = 'button' | 'submit' | 'reset';
export type UaiButtonIconType = 'icon' | 'logo' | 'emoji';
export type UaiButtonIconTheme = 'outline' | 'solid';
export type UaiButtonJustifyContent = 'center' | 'space-between';
export type UaiButtonPosition = 'first' | 'middle' | 'last';
export type UaiButtonDirection = 'row' | 'column';

const VARIANTS: UaiButtonVariant[] = ['solid', 'outline', 'text'];
const COLORS: UaiButtonColor[] = ['primary', 'content', 'negative', 'positive'];
const SIZES: UaiButtonSize[] = ['compact', 'short', 'medium', 'large'];
const JUSTIFY: UaiButtonJustifyContent[] = ['center', 'space-between'];

const ICON_SIZE: Record<UaiButtonSize, IconSize> = {
  compact: 'x-small',
  short: 'small',
  medium: 'medium',
  large: 'medium',
};

const supported = <T extends string>(prop: string, value: string, allowed: T[], fallback: T): T => {
  if ((allowed as string[]).includes(value)) return value as T;
  warnLegacyValue('uai-button', prop, value, fallback);
  return fallback;
};

const hasThemeRoot = (el: HTMLElement): boolean => {
  let node: Node | null = el;
  while (node) {
    if (node.nodeType === Node.ELEMENT_NODE && (node as HTMLElement).hasAttribute('data-uai-theme')) return true;
    node = node.parentNode || (node as ShadowRoot).host || null;
  }
  return false;
};

/**
 * Button that triggers an action. Use variant "solid" for the main action of a screen and "outline" or "text" for the others;
 * color says what the action does (primary, content, positive, negative). For navigation to another page, use a link.
 * The label is the children. Icons use UaiIcon names. Wrap the app in UaiThemeProvider.
 *
 * @slot - Label of the button. Put the left icon and the label together here when using groupIcon.
 * @part button - The native button element.
 */
@Component({
  tag: 'uai-button',
  styleUrl: 'uai-button.scss',
  shadow: true,
})
export class UaiButton {
  @Element() el!: HTMLElement;

  @State() active?: boolean;
  @State() position?: UaiButtonPosition;
  @State() direction: UaiButtonDirection = 'row';
  @State() hasLabel = true;

  /**
   * If true, the button takes the full width of its container.
   */
  @Prop() block?: boolean = false;

  /**
   * If true, the button takes the full width of its container with centered content.
   */
  @Prop() fullWidth?: boolean = false;

  /**
   * Horizontal alignment of the button content. Can be one of:
   * 'center' (default), 'space-between' (left content to the left, right content to the right).
   */
  @Prop() justifyContent?: UaiButtonJustifyContent = 'center';

  /**
   * @deprecated Put the left icon and the label together in the default slot instead.
   * If true, keeps the left icon together with the label when justifyContent is 'space-between'.
   */
  @Prop() groupIcon?: boolean;

  /**
   * If true, the button is disabled.
   */
  @Prop() disabled?: boolean = false;

  /**
   * Color of the button. Can be one of:
   * 'primary', 'content', 'negative', 'positive'.
   */
  @Prop({ mutable: true }) color?: UaiButtonColor = 'primary';

  /**
   * Size of the button. Can be one of:
   * 'compact' (`control-height/compact`), 'short' (`control-height/short`), 'medium' (`control-height/medium`), 'large' (`control-height/large`).
   */
  @Prop({ mutable: true }) size?: UaiButtonSize = 'medium';

  /**
   * Visual style of the button. Can be one of:
   * 'solid', 'outline', 'text'.
   */
  @Prop({ mutable: true }) variant?: UaiButtonVariant = 'solid';

  /**
   * Icon rendered before the label. Uses the bds-icon component. Takes precedence over iconLeft.
   */
  @Prop({ reflect: true }) icon?: string = null;

  /**
   * Icon rendered before the label. Uses the bds-icon component.
   */
  @Prop({ reflect: true }) iconLeft?: string = null;

  /**
   * Icon rendered after the label. Uses the bds-icon component.
   */
  @Prop({ reflect: true }) iconRight?: string = null;

  /**
   * If true, renders an 'arrow-right' icon after the label.
   */
  @Prop() arrow?: boolean = false;

  /**
   * Type of the button. Can be one of:
   * 'button', 'submit', 'reset'. 'submit' and 'reset' act on the enclosing form.
   */
  @Prop() type: UaiButtonType = 'button';

  /**
   * Theme of the icons. Can be one of:
   * 'outline', 'solid'.
   */
  @Prop({ reflect: true }) iconTheme: UaiButtonIconTheme = 'outline';

  /**
   * Type of the icons. Can be one of:
   * 'icon', 'logo', 'emoji'.
   */
  @Prop({ reflect: true }) typeIcon: UaiButtonIconType = 'icon';

  /**
   * If true, shows a loading spinner and blocks uaiClick.
   */
  @Prop() loading?: boolean = false;

  /**
   * @deprecated The spinner follows the button variant and color. This prop has no effect.
   */
  @Prop() bdsLoadingVariant?: LoadingSpinnerVariant;

  /**
   * @deprecated The spinner follows the button variant and color. This prop has no effect.
   */
  @Prop() bdsLoadingColor?: colorsVariants;

  /**
   * Accessible name of the button. Required when the button has no visible label.
   */
  @Prop({ attribute: 'aria-label' }) ariaLabel: string = null;

  /**
   * Expansion state of a controlled panel. Use on disclosure actions; pair with an overlay; avoid on unrelated buttons.
   */
  @Prop({ attribute: 'aria-expanded' }) ariaExpanded: 'true' | 'false' = null;

  /**
   * Data test is the prop to specifically test the component action object.
   */
  @Prop() dataTest?: string = null;

  /**
   * Emitted when the button is activated by click, Enter or Space. Carries the native click event.
   * Not emitted while the button is disabled or loading.
   */
  @Event() uaiClick: EventEmitter<MouseEvent>;

  /**
   * Focuses the native button. Use to restore keyboard focus; pair with overlays; avoid accessing the button Shadow DOM.
   */
  @Method()
  async setFocus(): Promise<void> {
    this.el.shadowRoot?.querySelector('button')?.focus();
  }

  /**
   * Sets the active (pressed) state of the button.
   */
  @Method()
  async isActive(value: boolean): Promise<void> {
    this.active = value;
  }

  /**
   * Sets the position of the button inside a group.
   */
  @Method()
  async setPosition(position: UaiButtonPosition): Promise<void> {
    this.position = position;
  }

  /**
   * Sets the direction of the group the button belongs to.
   */
  @Method()
  async setDirection(direction: UaiButtonDirection): Promise<void> {
    this.direction = direction;
  }

  /**
   * Sets the size of the button.
   */
  @Method()
  async setSize(size: UaiButtonSize): Promise<void> {
    this.size = size;
  }

  /**
   * Sets the color of the button.
   */
  @Method()
  async setColor(color: UaiButtonColor): Promise<void> {
    this.color = color;
  }

  /**
   * Sets the variant of the button.
   */
  @Method()
  async setVariant(variant: UaiButtonVariant): Promise<void> {
    this.variant = variant;
  }

  @Watch('groupIcon')
  @Watch('bdsLoadingVariant')
  @Watch('bdsLoadingColor')
  protected warnDeprecated(): void {
    if (this.groupIcon !== undefined) {
      warnDeprecated('uai-button', 'groupIcon', 'Put the left icon and the label together in the default slot.');
    }
    if (this.bdsLoadingVariant !== undefined) {
      warnDeprecated('uai-button', 'bdsLoadingVariant');
    }
    if (this.bdsLoadingColor !== undefined) {
      warnDeprecated('uai-button', 'bdsLoadingColor');
    }
  }

  componentWillLoad(): void {
    this.warnDeprecated();
    this.updateHasLabel();
  }

  componentDidLoad(): void {
    if (!hasThemeRoot(this.el)) {
      warnOnce('uai-button', 'theme-root', 'No [data-uai-theme] ancestor found. Wrap UAI components in <uai-theme-provider>.');
    }
  }

  private updateHasLabel = (): void => {
    this.hasLabel = Array.from(this.el.childNodes).some((node) =>
      node.nodeType === Node.ELEMENT_NODE ? true : node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '',
    );
  };

  private handleClick = (ev: MouseEvent): void => {
    if (this.disabled || this.loading) {
      ev.preventDefault();
      ev.stopPropagation();
      return;
    }
    this.uaiClick.emit(ev);
    this.actOnForm();
  };

  // The native button lives in the shadow root, outside the light-DOM form, so a temporary native button
  // inside the form performs the submit or reset (keeping validation and the submit event).
  private actOnForm(): void {
    if (this.type === 'button') return;
    const form = this.el.closest('form');
    if (!form) return;
    const proxy = document.createElement('button');
    proxy.type = this.type;
    proxy.style.display = 'none';
    form.appendChild(proxy);
    proxy.click();
    proxy.remove();
  }

  private renderIcon(name: string, size: UaiButtonSize, position: 'left' | 'right'): HTMLElement {
    const theme: UaiButtonIconTheme = this.iconTheme === 'solid' ? 'solid' : 'outline';
    const classes = { button__icon: true, [`button__icon--${position}`]: true };

    if (this.typeIcon === 'icon' && isUaiIcon(theme, name)) {
      return <uai-icon class={classes} name={name} theme={theme} aria-hidden="true"></uai-icon>;
    }

    warnOnce(
      'uai-button',
      `icon:${theme}:${this.typeIcon}:${name}`,
      `"${name}" is not in the UAI icon set (theme "${theme}", type "${this.typeIcon}"). Falling back to the legacy bds-icon, which is deprecated here.`,
    );
    return (
      <bds-icon
        class={classes}
        name={name}
        theme={this.iconTheme}
        type={this.typeIcon}
        color="inherit"
        size={ICON_SIZE[size]}
        aria-hidden="true"
      ></bds-icon>
    );
  }

  render(): HTMLElement {
    const variant = supported('variant', this.variant, VARIANTS, 'solid');
    const color = supported('color', this.color, COLORS, 'primary');
    const size = supported('size', this.size, SIZES, 'medium');
    const justify = supported('justifyContent', this.justifyContent, JUSTIFY, 'center');

    const leftIconName = this.icon || this.iconLeft;
    const rightIconName = this.arrow ? 'arrow-right' : this.iconRight;
    const iconOnly = !this.hasLabel && !!(leftIconName || rightIconName);

    if (iconOnly && !this.ariaLabel) {
      warnOnce('uai-button', 'icon-only-accessible-name', 'Icon-only buttons require an aria-label.');
    }

    const left = this.loading ? (
      <span class="button__spinner" aria-hidden="true"></span>
    ) : leftIconName ? (
      this.renderIcon(leftIconName, size, 'left')
    ) : null;
    const right = rightIconName && !(iconOnly && this.loading) ? this.renderIcon(rightIconName, size, 'right') : null;
    const label = (
      <span class={{ button__label: true, 'button__label--hidden': !this.hasLabel }}>
        <uai-typo
          class="button__typo"
          tag="span"
          variant={size === 'compact' ? 'caption' : 'body-base'}
          bold="medium"
          margin={false}
          noWrap
        >
          <slot onSlotchange={this.updateHasLabel}></slot>
        </uai-typo>
      </span>
    );
    const grouped = this.groupIcon && justify === 'space-between' && left;

    return (
      <Host
        class={{
          'uai-button--block': this.block || this.fullWidth,
          'uai-button--group': !!this.position,
        }}
      >
        <button
          class={{
            button: true,
            [`button--${variant}`]: true,
            [`button--color-${color}`]: true,
            [`button--size-${size}`]: true,
            [`button--justify-${justify}`]: true,
            [`button--position-${this.direction}-${this.position}`]: !!this.position,
            'button--icon-only': iconOnly,
            'button--active': !!this.active,
            'button--loading': this.loading,
          }}
          part="button"
          type="button"
          disabled={this.disabled}
          aria-disabled={this.loading ? 'true' : undefined}
          aria-busy={this.loading ? 'true' : undefined}
          aria-label={this.ariaLabel || undefined}
          aria-expanded={this.ariaExpanded}
          aria-pressed={this.active === undefined ? undefined : String(this.active)}
          data-test={this.dataTest}
          onClick={this.handleClick}
        >
          {grouped ? (
            <span class="button__group">
              {left}
              {label}
            </span>
          ) : (
            [left, label]
          )}
          {right}
        </button>
      </Host>
    );
  }
}
