'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6a53aecf.js');
const _package = require('./package-385f22e6.js');

const loadingPageCss = ":host{display:block;position:fixed;top:0;left:0;height:100vh;width:100vw;z-index:999}.loading-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;background-color:var(--color-surface-4, #141414);opacity:0.65;mix-blend-mode:multiply}.page_loading{-webkit-animation:growUp 0.8s ease-in-out infinite;animation:growUp 0.8s ease-in-out infinite;width:90px;height:90px;color:var(--color-surface-1, #f6f6f6)}@-webkit-keyframes growUp{from{opacity:0}10%{opacity:1}60%{opacity:1}to{-webkit-transform:scale(1.6);transform:scale(1.6);opacity:0}}@keyframes growUp{from{opacity:0}10%{opacity:1}60%{opacity:1}to{-webkit-transform:scale(1.6);transform:scale(1.6);opacity:0}}";

const BdsLoading = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
      const tokensVersion = _package.packageJson.dependencies['blip-tokens'].replace(/^[~^]/, '');
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
    return (index.h(index.Host, null, index.h("div", { class: "loading-container", "data-test": this.dataTest }, index.h("div", { class: { page_loading: true }, innerHTML: this.svgContent }))));
  }
};
BdsLoading.style = loadingPageCss;

exports.bds_loading_page = BdsLoading;
