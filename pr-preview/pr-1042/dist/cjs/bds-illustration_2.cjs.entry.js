'use strict';

var index = require('./index-DnryYWxm.js');

const dependencies = {
	"blip-tokens": "^1.91.0"};
var packageJson = {
	dependencies: dependencies};

const illustrationCss = ":host .illustration{display:-ms-flexbox;display:flex;height:100%;width:auto}:host(.bds-illustration) img{width:100%;height:100%}";

const BdsIllustration = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Specifies the type to use. Can be: 'default'.
         */
        this.type = 'default';
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
        /**Function to map the svg and call the "formatSvg" function */
        this.setIllustrationContent = () => {
            const tokensVersion = packageJson.dependencies['blip-tokens'].replace('^', '');
            const apiUrl = `https://cdn.jsdelivr.net/npm/blip-tokens@${tokensVersion}/build/json/illustrations/${this.type}/${this.name}.json`;
            fetch(apiUrl).then((response) => response.json().then((data) => {
                this.IllustrationContent = data[`asset-${this.type}-${this.name}-svg`];
            }));
        };
    }
    componentWillLoad() {
        this.setIllustrationContent();
    }
    render() {
        return (index.h(index.Host, { key: '1aae10eaec7dca3f5c355a13d1567fc7048dfce3', role: "img", class: {
                'bds-illustration': true,
            } }, this.IllustrationContent ? (index.h("img", { draggable: false, src: `data:image/svg+xml;base64,${this.IllustrationContent}`, alt: this.alt, "data-test": this.dataTest })) : (index.h("div", { class: "default", "data-test": this.dataTest }))));
    }
    static get assetsDirs() { return ["svg"]; }
};
BdsIllustration.style = illustrationCss;

const skeletonCss = ".skeleton{min-width:8px;min-height:8px;background-color:var(--color-content-default, rgb(40, 40, 40));opacity:0.16;overflow:hidden}.skeleton_shape--circle{border-radius:50%}.skeleton_shape--square{border-radius:8px}.animation{position:absolute;width:100%;height:100%;background:-webkit-gradient(linear, left top, right top, from(rgba(246, 246, 246, 0)), color-stop(50%, rgba(246, 246, 246, 0.56)), to(rgba(246, 246, 246, 0)));background:linear-gradient(90deg, rgba(246, 246, 246, 0) 0%, rgba(246, 246, 246, 0.56) 50%, rgba(246, 246, 246, 0) 100%);mix-blend-mode:overlay;-webkit-animation:2.5s ease-out infinite shine;animation:2.5s ease-out infinite shine}@-webkit-keyframes shine{0%{-webkit-transform:translateX(-100%);transform:translateX(-100%)}20%{-webkit-transform:translateX(100%);transform:translateX(100%)}100%{-webkit-transform:translateX(100%);transform:translateX(100%)}}@keyframes shine{0%{-webkit-transform:translateX(-100%);transform:translateX(-100%)}20%{-webkit-transform:translateX(100%);transform:translateX(100%)}100%{-webkit-transform:translateX(100%);transform:translateX(100%)}}";

const Skeleton = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.shape = 'square';
        this.height = '50px';
        this.width = '100%';
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
    }
    render() {
        return (index.h(index.Host, { key: '904b53964e655f24141cf2d0ec57398c5c2c2774', style: {
                display: 'flex',
                position: 'relative',
                overflow: 'hidden',
                width: this.width,
                height: this.height,
                borderRadius: this.shape === 'circle' ? '50%' : '8px',
            } }, index.h("bds-grid", { key: '711b1f05e8c4ae9b60d4d12260e01c1e6c384a02', xxs: "12", class: { skeleton: true, [`skeleton_shape--${this.shape}`]: true } }), index.h("div", { key: '3c5f074f4a105a3c4135ad9867eac9abfd6f7a0e', style: {
                display: 'flex',
                width: '100%',
                height: '100%',
                position: 'absolute',
                borderRadius: this.shape === 'circle' ? '50%' : '8px',
                overflow: 'hidden',
            }, "data-test": this.dataTest }, index.h("div", { key: '9fb27c60dad05d69650fa95bca83adaabb34ca62', class: "animation" }))));
    }
};
Skeleton.style = skeletonCss;

exports.bds_illustration = BdsIllustration;
exports.bds_skeleton = Skeleton;
//# sourceMappingURL=bds-illustration.bds-skeleton.entry.cjs.js.map

//# sourceMappingURL=bds-illustration_2.cjs.entry.js.map