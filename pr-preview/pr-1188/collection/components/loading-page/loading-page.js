import { Host, h } from '@stencil/core';
import packageJson from '../../../package.json';
export class BdsLoading {
  constructor() {
    /**Function to transform the svg in a div element. */
    this.formatSvg = (svgContent) => {
      const div = document.createElement('div');
      div.innerHTML = svgContent;
      const svgElm = div.firstElementChild;
      svgElm.removeAttribute('width');
      svgElm.removeAttribute('height');
      return div.innerHTML;
    };
    this.setSvgContent = async () => {
      const tokensVersion = packageJson.dependencies['blip-tokens'].replace(/^[~^]/, '');
      const assetUrl = `https://cdn.blip.ai/blip-tokens/${tokensVersion}/illustrations/brand/blip-ballon-white.svg`;
      try {
        const response = await fetch(assetUrl);
        if (!response.ok)
          throw new Error(`Failed to fetch illustration: ${response.status}`);
        const svg = this.formatSvg(await response.text());
        this.svgContent = svg;
      }
      catch (_error) {
        this.svgContent = '';
      }
    };
    this.svgContent = undefined;
    this.dataTest = null;
  }
  async componentWillLoad() {
    await this.setSvgContent();
  }
  render() {
    return (h(Host, null, h("div", { class: "loading-container", "data-test": this.dataTest }, h("div", { class: { page_loading: true }, innerHTML: this.svgContent }))));
  }
  static get is() { return "bds-loading-page"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["loading-page.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["loading-page.css"]
    };
  }
  static get properties() {
    return {
      "dataTest": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Data test is the prop to specifically test the component action object."
        },
        "attribute": "data-test",
        "reflect": false,
        "defaultValue": "null"
      }
    };
  }
  static get states() {
    return {
      "svgContent": {}
    };
  }
}
