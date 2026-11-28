'use strict';

var index = require('./index-GTJCA4wH.js');
var assetLoader = require('./asset-loader-CO6wtD2Y.js');
require('./asset-config-CKVSo2i2.js');

const illustrationCss = () => `:host .illustration{display:-ms-flexbox;display:flex;height:100%;width:auto}:host(.bds-illustration) img{width:100%;height:100%}`;

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
    }
    componentWillLoad() {
        this.setIllustrationContent();
    }
    setIllustrationContent() {
        try {
            this.IllustrationContent = this.name ? assetLoader.getAssetUrl(`illustration/${this.type}/${this.name}`) : undefined;
        }
        catch (_a) {
            this.IllustrationContent = undefined;
        }
    }
    render() {
        return (index.h(index.Host, { key: 'e7b27c584578ab70ab38cad86bcb17f9dcd29525', role: "img", class: {
                'bds-illustration': true,
            } }, this.IllustrationContent ? (index.h("img", { draggable: false, src: this.IllustrationContent, onError: () => { this.IllustrationContent = undefined; }, alt: this.alt, "data-test": this.dataTest })) : (index.h("div", { class: "default", "data-test": this.dataTest }))));
    }
    static get assetsDirs() { return ["svg"]; }
    static get watchers() { return {
        "name": [{
                "setIllustrationContent": 0
            }],
        "type": [{
                "setIllustrationContent": 0
            }]
    }; }
};
BdsIllustration.style = illustrationCss();

const skeletonCss = () => `.skeleton{min-width:8px;min-height:8px;background-color:var(--color-content-default, rgb(40, 40, 40));opacity:0.16;overflow:hidden}.skeleton_shape--circle{border-radius:50%}.skeleton_shape--square{border-radius:8px}.animation{position:absolute;width:100%;height:100%;background:-webkit-gradient(linear, left top, right top, from(rgba(246, 246, 246, 0)), color-stop(50%, rgba(246, 246, 246, 0.56)), to(rgba(246, 246, 246, 0)));background:linear-gradient(90deg, rgba(246, 246, 246, 0) 0%, rgba(246, 246, 246, 0.56) 50%, rgba(246, 246, 246, 0) 100%);mix-blend-mode:overlay;-webkit-animation:2.5s ease-out infinite shine;animation:2.5s ease-out infinite shine}@-webkit-keyframes shine{0%{-webkit-transform:translateX(-100%);transform:translateX(-100%)}20%{-webkit-transform:translateX(100%);transform:translateX(100%)}100%{-webkit-transform:translateX(100%);transform:translateX(100%)}}@keyframes shine{0%{-webkit-transform:translateX(-100%);transform:translateX(-100%)}20%{-webkit-transform:translateX(100%);transform:translateX(100%)}100%{-webkit-transform:translateX(100%);transform:translateX(100%)}}`;

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
        return (index.h(index.Host, { key: '187e4b047bc7fc3bc2f6a8f96af40b37f41d23fa', style: {
                display: 'flex',
                position: 'relative',
                overflow: 'hidden',
                width: this.width,
                height: this.height,
                borderRadius: this.shape === 'circle' ? '50%' : '8px',
            } }, index.h("bds-grid", { key: '8615f70a2b8cec72ac9dfb610a65813586a09e0a', xxs: "12", class: { skeleton: true, [`skeleton_shape--${this.shape}`]: true } }), index.h("div", { key: '5077ffb487767e836436720e866f5af5bc6f4b93', style: {
                display: 'flex',
                width: '100%',
                height: '100%',
                position: 'absolute',
                borderRadius: this.shape === 'circle' ? '50%' : '8px',
                overflow: 'hidden',
            }, "data-test": this.dataTest }, index.h("div", { key: 'aa8c77615412a9e6a8ef12b3fee56dd5b440f9da', class: "animation" }))));
    }
};
Skeleton.style = skeletonCss();

exports.bds_illustration = BdsIllustration;
exports.bds_skeleton = Skeleton;
