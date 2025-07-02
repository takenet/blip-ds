import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const dependencies = {
	"blip-tokens": "^1.93.0"};
var packageJson = {
	dependencies: dependencies};

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
        return (h(Host, { key: '1aae10eaec7dca3f5c355a13d1567fc7048dfce3', role: "img", class: {
                'bds-illustration': true,
            } }, this.IllustrationContent ? (h("img", { draggable: false, src: `data:image/svg+xml;base64,${this.IllustrationContent}`, alt: this.alt, "data-test": this.dataTest })) : (h("div", { class: "default", "data-test": this.dataTest }))));
    }
    static get assetsDirs() { return ["svg"]; }
    static get style() { return illustrationCss; }
}, [1, "bds-illustration", {
        "type": [1],
        "name": [1],
        "alt": [1],
        "dataTest": [1, "data-test"],
        "IllustrationContent": [32]
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
//# sourceMappingURL=p-BiURb2Nl.js.map

//# sourceMappingURL=p-BiURb2Nl.js.map