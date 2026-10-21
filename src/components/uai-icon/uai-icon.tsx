import { Component, Host, Prop, h } from '@stencil/core';
import { UaiIconTheme, isUaiIcon } from '../../globals/uai-icons';

export type UaiIconSize = 'x-small' | 'small' | 'medium';
export type UaiIconColor =
  | 'content-primary'
  | 'content-secondary'
  | 'content-disabled'
  | 'content-inverse'
  | 'content-link'
  | 'feedback-info'
  | 'feedback-success'
  | 'feedback-warning'
  | 'feedback-error';

const THEMES: UaiIconTheme[] = ['outline', 'solid'];
const SIZES: UaiIconSize[] = ['x-small', 'small', 'medium'];
const COLORS: UaiIconColor[] = [
  'content-primary',
  'content-secondary',
  'content-disabled',
  'content-inverse',
  'content-link',
  'feedback-info',
  'feedback-success',
  'feedback-warning',
  'feedback-error',
];

const warnings = new Set<string>();
const warnOnce = (key: string, message: string): void => {
  if (warnings.has(key)) return;
  warnings.add(key);
  console.warn(`[uai-icon] ${message}`);
};

const supported = <T extends string>(prop: string, value: string, allowed: T[], fallback: T): T => {
  if ((allowed as string[]).includes(value)) return value as T;
  warnOnce(`${prop}:${value}`, `Unsupported ${prop} "${value}". Using "${fallback}".`);
  return fallback;
};

/**
 * Interface icon from the UAI icon font of blip-tokens. Use it for icons in UAI screens and inside UAI components.
 * Sizes keep the bds-icon names: x-small is 16px, small is 20px and medium (default) is 24px.
 * Without `color`, the icon takes the text color around it, so it matches the label next to it.
 * The app must load the font once: `import 'blip-tokens/uai-icons/css';`.
 */
@Component({
  tag: 'uai-icon',
  styleUrl: 'uai-icon.scss',
  shadow: true,
})
export class UaiIcon {
  /**
   * Icon name, as in the Figma icon library without the theme prefix. For example "info" or "arrow-right".
   */
  @Prop({ reflect: true }) name: string;

  /**
   * Icon style: 'outline' (default) or 'solid'.
   */
  @Prop({ reflect: true }) theme: UaiIconTheme = 'outline';

  /**
   * Icon size: 'x-small' (16px), 'small' (20px) or 'medium' (24px, default).
   */
  @Prop({ reflect: true }) size: UaiIconSize = 'medium';

  /**
   * Icon color, as a UAI color token: content-primary, content-secondary, content-disabled, content-inverse, content-link,
   * feedback-info, feedback-success, feedback-warning or feedback-error. Without it, the icon uses the surrounding text color.
   */
  @Prop({ reflect: true }) color?: UaiIconColor;

  /**
   * Accessible name. Set it when the icon conveys meaning on its own. Without it, the icon is decorative and hidden from assistive technology.
   */
  @Prop({ attribute: 'aria-label' }) ariaLabel?: string = null;

  /**
   * Data test is the prop to specifically test the component action object.
   */
  @Prop() dataTest?: string = null;

  render(): HTMLElement {
    const theme = supported('theme', this.theme, THEMES, 'outline');
    const size = supported('size', this.size, SIZES, 'medium');
    const color = this.color ? supported('color', this.color, COLORS, undefined) : undefined;
    const known = isUaiIcon(theme, this.name);

    if (!known) {
      warnOnce(`name:${theme}:${this.name}`, `"${this.name}" is not a ${theme} icon of the UAI icon font.`);
    }

    return (
      <Host
        class={{ [`uai-icon--size-${size}`]: true, [`uai-icon--color-${color}`]: !!color }}
        role={this.ariaLabel ? 'img' : undefined}
        aria-hidden={this.ariaLabel ? undefined : 'true'}
      >
        <span
          class={{ 'uai-icon': true, [`uai-icon-${theme}-${this.name}`]: known }}
          part="glyph"
          data-test={this.dataTest}
        ></span>
      </Host>
    );
  }
}
