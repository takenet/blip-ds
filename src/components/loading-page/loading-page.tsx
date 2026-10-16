import { Component, Host, Prop, State, h } from '@stencil/core';
import { loadAssetSvg } from '../../utils/asset-loader';

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

  setSvgContent = async (): Promise<void> => {
    try {
      const svg = await loadAssetSvg('asset-component-loading-page');
      this.svgContent = this.formatSvg(svg);
    } catch {
      this.svgContent = undefined;
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
