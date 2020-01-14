import { Component, State, Prop, h, Watch } from '@stencil/core';
import { getSvgPath, getSvgContent, formatSvg } from './utils';

export type IconSize = 'xxx-small'
  | 'xx-small'
  | 'x-small'
  | 'small'
  | 'medium'
  | 'large'
  | 'x-large'
  | 'xx-large'
  | 'xxx-large';

export type IconTheme = 'outline' | 'solid';

@Component({
  tag: 'bds-icon',
  styleUrl: 'icon.scss',
  assetsDir: 'svg',
  shadow: true
})
export class Icon {
  @State() svgContent?: string;

  /**
  * Specifies which icon to use from the built-in set of icons.
  */
  @Prop({ reflect: true }) name!: string;

  /**
  * Specifies the label to use for accessibility. Defaults to the icon name.
  */
  @Prop({ mutable: true, reflectToAttr: true }) ariaLabel?: string;

  /**
   * Icon size. Entered as one of the icon size design tokens. Can be one of: 
   * "xxx-small", "xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large", "xxx-large".
   */
  @Prop() size?: IconSize = 'medium';

  /**
  * Specifies the color to use.Specifies a color to use. The default is svg.
  */
  @Prop() color?: string;

  /**
  * Specifies the theme to use outline or solid icons. Defaults to outline.
  */
  @Prop({ reflect: true }) theme: IconTheme = 'outline';

  async connectedCallback(): Promise<void> {
    await this.loadSvg();
  }

  @Watch('name')
  async loadSvg(): Promise<void> {
    const url = getSvgPath(this.name, this.theme);
    const svgContent = await getSvgContent(url);
    const formatedSvg = formatSvg(svgContent, this.color);

    this.svgContent = formatedSvg;
  }

  getAccessibilityName(): string {
    const defaultAccessibilityName = 'Icon';

    if (!this.ariaLabel) return `${defaultAccessibilityName} ${this.name}`
    return this.ariaLabel;
  }

  render(): HTMLElement {
    return (
      <div class={{
        'bds-icon': true,
        [`bds-icon__size--${this.size}`]: true
      }}
        aria-label={this.getAccessibilityName()}
        innerHTML={this.svgContent}></div>
    );
  }

}
