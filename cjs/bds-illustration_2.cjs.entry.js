'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6a53aecf.js');

const dependencies = {
	"blip-tokens": "^1.106.0"
};

const illustrationCss = ":host .illustration{display:-ms-flexbox;display:flex;height:100%;width:auto}:host(.bds-illustration) img{width:100%;height:100%}";

const BdsIllustration = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**Function to map the svg and call the "formatSvg" function */
    this.setIllustrationContent = () => {
      const tokensVersion = dependencies['blip-tokens'].replace('^', '');
      const apiUrl = `https://cdn.jsdelivr.net/npm/blip-tokens@${tokensVersion}/build/json/illustrations/${this.type}/${this.name}.json`;
      fetch(apiUrl).then((response) => response.json().then((data) => {
        this.IllustrationContent = data[`asset-${this.type}-${this.name}-svg`];
      }));
    };
    this.IllustrationContent = undefined;
    this.type = 'default';
    this.name = undefined;
    this.alt = undefined;
    this.dataTest = null;
  }
  componentWillLoad() {
    this.setIllustrationContent();
  }
  render() {
    return (index.h(index.Host, { role: "img", class: {
        'bds-illustration': true,
      } }, this.IllustrationContent ? (index.h("img", { draggable: false, src: `data:image/svg+xml;base64,${this.IllustrationContent}`, alt: this.alt, "data-test": this.dataTest })) : (index.h("div", { class: "default", "data-test": this.dataTest }))));
  }
  static get assetsDirs() { return ["svg"]; }
};
BdsIllustration.style = illustrationCss;

const skeletonCss = ".skeleton{min-width:8px;min-height:8px;background-color:var(--color-content-default, #282828);opacity:0.16;overflow:hidden}.skeleton_shape--circle{border-radius:50%}.skeleton_shape--square{border-radius:8px}.animation{position:absolute;width:100%;height:100%;background:-webkit-gradient(linear, left top, right top, from(rgba(246, 246, 246, 0)), color-stop(50%, rgba(246, 246, 246, 0.56)), to(rgba(246, 246, 246, 0)));background:linear-gradient(90deg, rgba(246, 246, 246, 0) 0%, rgba(246, 246, 246, 0.56) 50%, rgba(246, 246, 246, 0) 100%);mix-blend-mode:overlay;-webkit-animation:2.5s ease-out infinite shine;animation:2.5s ease-out infinite shine}@-webkit-keyframes shine{0%{-webkit-transform:translateX(-100%);transform:translateX(-100%)}20%{-webkit-transform:translateX(100%);transform:translateX(100%)}100%{-webkit-transform:translateX(100%);transform:translateX(100%)}}@keyframes shine{0%{-webkit-transform:translateX(-100%);transform:translateX(-100%)}20%{-webkit-transform:translateX(100%);transform:translateX(100%)}100%{-webkit-transform:translateX(100%);transform:translateX(100%)}}";

const Skeleton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.shape = 'square';
    this.height = '50px';
    this.width = '100%';
    this.dataTest = null;
  }
  render() {
    return (index.h(index.Host, { style: {
        display: 'flex',
        position: 'relative',
        overflow: 'hidden',
        width: this.width,
        height: this.height,
        borderRadius: this.shape === 'circle' ? '50%' : '8px',
      } }, index.h("bds-grid", { xxs: "12", class: { skeleton: true, [`skeleton_shape--${this.shape}`]: true } }), index.h("div", { style: {
        display: 'flex',
        width: '100%',
        height: '100%',
        position: 'absolute',
        borderRadius: this.shape === 'circle' ? '50%' : '8px',
        overflow: 'hidden',
      }, "data-test": this.dataTest }, index.h("div", { class: "animation" }))));
  }
};
Skeleton.style = skeletonCss;

exports.bds_illustration = BdsIllustration;
exports.bds_skeleton = Skeleton;
