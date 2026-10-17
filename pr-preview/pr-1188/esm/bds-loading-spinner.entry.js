import { r as registerInstance, h, H as Host } from './index-611fd21e.js';
import { p as packageJson } from './package-ded5d3e6.js';

const loadingSpinnerCss = ":host{display:block}.spinner_container{display:-ms-inline-flexbox;display:inline-flex;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.spinner_background{border-radius:50%;border:2px solid}.spinner_background_extra-small{border-width:2px;width:16px;height:16px;-webkit-box-sizing:border-box;box-sizing:border-box}.spinner_background_small{border-width:4px;width:32px;height:32px;-webkit-box-sizing:border-box;box-sizing:border-box}.spinner_background_standard{border-width:8px;width:64px;height:64px;-webkit-box-sizing:border-box;box-sizing:border-box}.spinner_background_main{border-color:var(--color-content-default, #282828);opacity:0.16}.spinner_background_light{border-color:var(--color-content-bright, white);opacity:0.16}.spinner_background_content{border-color:var(--color-surface-0, white);opacity:0.16}.spinner_background_positive{border-color:var(--color-positive, #10603b);opacity:0.16}.spinner_background_negative{border-color:var(--color-negative, #e60f0f);opacity:0.16}.spinner_loading{-webkit-animation:rotate 0.5s linear infinite;animation:rotate 0.5s linear infinite;position:absolute}.spinner_loading_extra-small{width:16px;height:16px}.spinner_loading_small{width:32px;height:32px}.spinner_loading_standard{width:64px;height:64px}.spinner_loading_main{color:var(--color-primary, #1e6bf1)}.spinner_loading_light{color:var(--color-content-bright, white)}.spinner_loading_content{color:var(--color-surface-0, white)}.spinner_loading_positive{color:var(--color-positive, #10603b)}.spinner_loading_negative{color:var(--color-negative, #e60f0f)}@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}";

const BdsLoadingSpinner = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.requestId = 0;
    /**Function to transform the svg in a div element. */
    this.formatSvg = (svgContent) => {
      const div = document.createElement('div');
      div.innerHTML = svgContent;
      const svgElm = div.firstElementChild;
      svgElm.removeAttribute('width');
      svgElm.removeAttribute('height');
      return div.innerHTML;
    };
    this.svgContent = undefined;
    this.variant = 'primary';
    this.size = 'standard';
    this.color = 'main';
    this.dataTest = null;
  }
  componentWillLoad() {
    this.setSvgContent();
  }
  async setSvgContent() {
    const requestId = ++this.requestId;
    const tokensVersion = packageJson.dependencies['blip-tokens'].replace(/^[~^]/, '');
    const assetName = this.size === 'extra-small' ? 'loading-spinner-extra-small' : `loading-spinner-${this.size}`;
    const assetUrl = `https://cdn.blip.ai/blip-tokens/${tokensVersion}/components/${assetName}.svg`;
    try {
      const response = await fetch(assetUrl);
      if (!response.ok)
        throw new Error(`Failed to fetch loading spinner: ${response.status}`);
      const svg = this.formatSvg(await response.text());
      if (requestId === this.requestId)
        this.svgContent = svg;
    }
    catch (_error) {
      if (requestId === this.requestId)
        this.svgContent = undefined;
    }
  }
  render() {
    return (h(Host, null, h("div", { class: {
        spinner_container: true,
        [`spinner_background_${this.size}`]: true,
      }, "data-test": this.dataTest }, h("div", { class: {
        spinner_background: true,
        [`spinner_background_${this.size}`]: true,
        [`spinner_background_${this.color}`]: true,
      } }), h("div", { class: {
        spinner_loading: true,
        [`spinner_loading_${this.size}`]: true,
        [`spinner_loading_${this.color}`]: true,
      }, innerHTML: this.svgContent }))));
  }
  static get watchers() { return {
    "size": ["setSvgContent"]
  }; }
};
BdsLoadingSpinner.style = loadingSpinnerCss;

export { BdsLoadingSpinner as bds_loading_spinner };
