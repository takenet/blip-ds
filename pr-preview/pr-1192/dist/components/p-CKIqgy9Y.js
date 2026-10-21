import { p as proxyCustomElement, H, h, a as Host } from './index.js';
import { g as getAssetUrl } from './p-2NONefL6.js';

const illustrationCss = ":host .illustration{display:-ms-flexbox;display:flex;height:100%;width:auto}:host(.bds-illustration) img{width:100%;height:100%}";

const BdsIllustration = /*@__PURE__*/ proxyCustomElement(class BdsIllustration extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
            this.IllustrationContent = this.name ? getAssetUrl(`illustration/${this.type}/${this.name}`) : undefined;
        }
        catch (_a) {
            this.IllustrationContent = undefined;
        }
    }
    render() {
        return (h(Host, { key: 'b06d6ceeb6eb7222f196e8000681a1baeae0db49', role: "img", class: {
                'bds-illustration': true,
            } }, this.IllustrationContent ? (h("img", { draggable: false, src: this.IllustrationContent, onError: () => { this.IllustrationContent = undefined; }, alt: this.alt, "data-test": this.dataTest })) : (h("div", { class: "default", "data-test": this.dataTest }))));
    }
    static get assetsDirs() { return ["svg"]; }
    static get watchers() { return {
        "name": ["setIllustrationContent"],
        "type": ["setIllustrationContent"]
    }; }
    static get style() { return illustrationCss; }
}, [1, "bds-illustration", {
        "type": [1],
        "name": [1],
        "alt": [1],
        "dataTest": [1, "data-test"],
        "IllustrationContent": [32]
    }, undefined, {
        "name": ["setIllustrationContent"],
        "type": ["setIllustrationContent"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-illustration"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-illustration":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, BdsIllustration);
            }
            break;
    } });
}

export { BdsIllustration as B, defineCustomElement as d };
//# sourceMappingURL=p-CKIqgy9Y.js.map

//# sourceMappingURL=p-CKIqgy9Y.js.map