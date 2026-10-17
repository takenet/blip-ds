import { Component, h, Host, Prop, State, Watch } from '@stencil/core';
import packageJson from '../../../package.json';

export type LoadingSpinnerVariant = 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'delete';
export type loadingSize = 'extra-small' | 'small' | 'standard';
export type colorsVariants = 'main' | 'light' | 'content' | 'positive' | 'negative';

export type LoadingSpinnerColorMap = { [key in LoadingSpinnerVariant]: string };

@Component({
  tag: 'bds-loading-spinner',
  styleUrl: 'loading-spinner.scss',
  shadow: true,
})
export class BdsLoadingSpinner {
  @State() private svgContent?: string;
  private requestId = 0;
  /**
   * 	Sets the color of the spinner, can be 'primary', 'secondary' or 'ghost'
   */
  @Prop() variant: LoadingSpinnerVariant = 'primary';
  /**
   * Size, Entered as one of the size. Can be one of:
   * 'small', 'standard', 'large'.
   */
  @Prop() size?: loadingSize = 'standard';
  /**
   * Color, Entered as one of the color. Can be one of:
   * 'default', 'white'.
   */
  @Prop() color?: colorsVariants = 'main';

  /**
   * Data test is the prop to specifically test the component action object.
   */
  @Prop() dataTest?: string = null;

  componentWillLoad() {
    this.setSvgContent();
  }

  /**Function to transform the svg in a div element. */
  formatSvg = (svgContent: string) => {
    const div = document.createElement('div');
    div.innerHTML = svgContent;
    const svgElm = div.firstElementChild;

    svgElm.removeAttribute('width');
    svgElm.removeAttribute('height');
    return div.innerHTML;
  };

  @Watch('size')
  async setSvgContent(): Promise<void> {
    const requestId = ++this.requestId;
    const tokensVersion = packageJson.dependencies['blip-tokens'].replace(/^[~^]/, '');
    const assetName = this.size === 'extra-small' ? 'loading-spinner-extra-small' : `loading-spinner-${this.size}`;
    const assetUrl = `https://cdn.blip.ai/blip-tokens/${tokensVersion}/components/${assetName}.svg`;

    try {
      const response = await fetch(assetUrl);
      if (!response.ok) throw new Error(`Failed to fetch loading spinner: ${response.status}`);
      const svg = this.formatSvg(await response.text());
      if (requestId === this.requestId) this.svgContent = svg;
    } catch (_error) {
      if (requestId === this.requestId) this.svgContent = undefined;
    }
  }

  render() {
    return (
      <Host>
        <div
          class={{
            spinner_container: true,
            [`spinner_background_${this.size}`]: true,
          }}
          data-test={this.dataTest}
        >
          <div
            class={{
              spinner_background: true,
              [`spinner_background_${this.size}`]: true,
              [`spinner_background_${this.color}`]: true,
            }}
          ></div>
          <div
            class={{
              spinner_loading: true,
              [`spinner_loading_${this.size}`]: true,
              [`spinner_loading_${this.color}`]: true,
            }}
            innerHTML={this.svgContent}
          ></div>
        </div>
      </Host>
    );
  }
}
