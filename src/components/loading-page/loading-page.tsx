import { Component, Host, Prop, State, h } from '@stencil/core';
import packageJson from '../../../package.json';

@Component({
  tag: 'bds-loading-page',
  styleUrl: 'loading-page.scss',
  shadow: true,
})
export class BdsLoading {
  @State() private svgContent?: string;

  /**
   * Data test is the prop to specifically test the component action object.
   */
  @Prop() dataTest?: string = null;

  async componentWillLoad() {
    await this.setSvgContent();
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

  setSvgContent = async () => {
    const tokensVersion = packageJson.dependencies['blip-tokens'].replace(/^[~^]/, '');
    const assetUrl = `https://cdn.blip.ai/blip-tokens/${tokensVersion}/illustrations/brand/blip-ballon-white.svg`;

    try {
      const response = await fetch(assetUrl);
      if (!response.ok) throw new Error(`Failed to fetch illustration: ${response.status}`);
      const svg = this.formatSvg(await response.text());
      this.svgContent = svg;
    } catch (_error) {
      this.svgContent = '';
    }
  };

  render() {
    return (
      <Host>
        <div class="loading-container" data-test={this.dataTest}>
          <div class={{ page_loading: true }} innerHTML={this.svgContent}></div>
        </div>
      </Host>
    );
  }
}
