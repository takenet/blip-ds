import { Component, Element, Host, Prop, h } from '@stencil/core';
import { UaiIconSize } from '../uai-icon/uai-icon';
import { UaiIconTheme } from '../../globals/uai-icons';
import { warnLegacyValue } from '../../utils/deprecation';

export type UaiIconBoxSize = 'sm' | 'md' | 'lg';
export type UaiIconBoxTheme = UaiIconTheme;

const SIZES: readonly UaiIconBoxSize[] = ['sm', 'md', 'lg'];
const THEMES: readonly UaiIconBoxTheme[] = ['outline', 'solid'];

const ICON_SIZE: Record<UaiIconBoxSize, UaiIconSize> = {
  sm: 'small',
  md: 'medium',
  lg: 'medium',
};

/**
 * Passive rounded surface container that frames a UAI icon or custom slotted graphic.
 * Use alongside card headings or KPI indicators; pair with `aria-label` only when the icon conveys standalone meaning;
 * avoid using it as an interactive button (use `uai-icon-button` instead).
 *
 * @slot - Optional custom icon content.
 * @part box - The icon box container.
 */
@Component({
  tag: 'uai-icon-box',
  styleUrl: 'uai-icon-box.scss',
  shadow: true,
})
export class UaiIconBox {
  @Element() el!: HTMLElement;

  /**
   * Name of the glyph from the UAI icon font. When omitted, renders the default slot content.
   */
  @Prop({ reflect: true }) icon?: string = null;

  /**
   * Style of the UAI icon glyph (`outline` or `solid`).
   */
  @Prop({ reflect: true }) iconTheme?: UaiIconBoxTheme = 'outline';

  /**
   * Scale of the icon container (`sm`, `md`, or `lg`).
   */
  @Prop({ reflect: true }) size?: UaiIconBoxSize = 'md';

  /**
   * Accessible label when the icon box communicates standalone meaning; otherwise the box is decorative.
   */
  @Prop({ attribute: 'aria-label' }) ariaLabel: string | null = null;

  /**
   * Selector attribute applied to the box container for automated tests.
   */
  @Prop() dataTest?: string = null;

  private resolveSize(): UaiIconBoxSize {
    const rawSize = String(this.size ?? 'md');
    if ((SIZES as readonly string[]).includes(rawSize)) {
      return rawSize as UaiIconBoxSize;
    }
    warnLegacyValue('uai-icon-box', 'size', rawSize, 'md');
    return 'md';
  }

  private resolveTheme(): UaiIconBoxTheme {
    const rawTheme = String(this.iconTheme ?? 'outline');
    if ((THEMES as readonly string[]).includes(rawTheme)) {
      return rawTheme as UaiIconBoxTheme;
    }
    warnLegacyValue('uai-icon-box', 'iconTheme', rawTheme, 'outline');
    return 'outline';
  }

  render(): HTMLElement {
    const size = this.resolveSize();
    const theme = this.resolveTheme();
    const ariaLabel = (this.ariaLabel || this.el.getAttribute('aria-label') || '').trim();

    return (
      <Host
        role={ariaLabel ? 'img' : undefined}
        aria-label={ariaLabel || undefined}
        aria-hidden={ariaLabel ? undefined : 'true'}
      >
        <div
          class={{
            'icon-box': true,
            [`icon-box--size-${size}`]: true,
          }}
          part="box"
          data-test={this.dataTest}
        >
          {this.icon ? (
            <uai-icon
              class="icon-box__icon"
              name={this.icon}
              theme={theme}
              size={ICON_SIZE[size]}
              aria-hidden="true"
            ></uai-icon>
          ) : (
            <slot></slot>
          )}
        </div>
      </Host>
    );
  }
}
