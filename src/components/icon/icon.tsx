import { Component, Host, State, Prop, h } from '@stencil/core';
import { getSvgPath, getSvgContent, formatSvg } from './utils';

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
   * Specifies the icon width (eg.: 50)
   */
  @Prop() width?: string = '32';

  /**
   * Specifies the icon height (eg.: 50)
   */
  @Prop() height?: string = '32';

  /**
  * Specifies the label to use for accessibility. Defaults to the icon name.
  */
  @Prop() color?: string;

  /**
  * Specifies the theme to use outline or solid icons. Defaults to outline.
  */
  @Prop({ reflect: true }) theme: 'outline' | 'solid' = 'outline';

  async connectedCallback() {
    const url = getSvgPath(this.name, this.theme);
    const svgContent = await getSvgContent(url);
    const formatedSvg = formatSvg(svgContent, this.height, this.width, this.color);

    this.svgContent = formatedSvg;
  }

  render() {
    return (
      <Host role="img"
        class={{
          'icon': true,
        }}
      >
        <div class="icon__inner" innerHTML={this.svgContent}></div>
      </Host>
    );
  }

}
