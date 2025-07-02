import { p as proxyCustomElement, H, h } from './index.js';

const typoCss = ":host{color:var(--color-content-default, rgb(40, 40, 40))}.typo{margin:0;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-style:normal;font-weight:normal;margin:0;-webkit-margin-before:0;margin-block-start:0;-webkit-margin-after:0;margin-block-end:0;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:0;margin-inline-end:0;padding:0;border:0}.typo--italic{font-style:italic}.typo--no-wrap{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.typo--paragraph{margin-bottom:16px}.typo__variant--fs-10{font-size:0.625rem;line-height:150%}.typo__variant--fs-12{font-size:0.75rem;line-height:150%}.typo__variant--fs-14{font-size:0.875rem;line-height:150%}.typo__variant--fs-16{font-size:1rem;line-height:150%}.typo__variant--fs-20{font-size:1.25rem;line-height:100%}.typo__variant--fs-24{font-size:1.5rem;line-height:100%}.typo__variant--fs-32{font-size:2rem;line-height:100%}.typo__variant--fs-40{font-size:2.5rem;line-height:100%}.typo__margin--fs-20{margin-bottom:22px}.typo__margin--fs-24{margin-bottom:22px}.typo__margin--fs-32{margin-bottom:22px}.typo__margin--fs-40{margin-bottom:20px}.typo__line-height--none{line-height:0%}.typo__line-height--small{line-height:5%}.typo__line-height--simple{line-height:100%}.typo__line-height--plus{line-height:150%}.typo__line-height--double{line-height:200%}.typo__bold--regular{font-weight:400}.typo__bold--semi-bold{font-weight:600}.typo__bold--bold{font-weight:700}.typo__bold--extra-bold{font-weight:800}";

const Typo = /*@__PURE__*/ proxyCustomElement(class Typo extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        /**
         * Variant. Entered as one of the font size variant. Can be one of:
         * 'fs-10' ,'fs-12' ,'fs-14' ,'fs-16' ,'fs-20' ,'fs-24' ,'fs-32' ,'fs-40';
         */
        this.variant = 'fs-16';
        /**
         * Line Height. Entered as one of the line hieght. Can be one of:
         * 'none', 'small', 'simple', 'plus', 'double'
         */
        this.lineHeight = null;
        /**
         * Bold. Entered as one of the bold. Can be one of:
         * 'regular', 'semi-bold', 'bold', 'extra-bold';
         */
        this.bold = null;
        /**
         * Added font style italic
         */
        this.italic = false;
        /**
         * Added style no wrap
         */
        this.noWrap = false;
        /**
         * Tranform text in paragraph
         */
        this.paragraph = false;
        /**
         * If true, adds default margin values
         */
        this.margin = true;
        /**
         * Define element tag, must be used for acessibilty
         */
        this.tag = 'p';
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
    }
    render() {
        const Element = this.tag;
        return (h(Element, { key: 'fc26ef24e6f4b1946d971efc3003fb6d549c3e67', class: {
                typo: true,
                [`typo__variant--${this.variant}`]: true,
                [`typo__margin--${this.variant}`]: this.margin,
                'typo--no-wrap': this.noWrap,
                'typo--paragraph': this.paragraph,
                'typo--italic': this.italic,
                [`typo__line-height--${this.lineHeight}`]: !!this.lineHeight,
                [`typo__bold--${this.bold}`]: !!this.bold,
            }, part: "bds-typo__text", "data-test": this.dataTest }, h("slot", { key: '4ab6c5e8ab4c9213961fd45d02fc9e1cd002a070' })));
    }
    static get style() { return typoCss; }
}, [1, "bds-typo", {
        "variant": [1],
        "lineHeight": [1, "line-height"],
        "bold": [1],
        "italic": [4],
        "noWrap": [4, "no-wrap"],
        "paragraph": [4],
        "margin": [4],
        "tag": [1],
        "dataTest": [1, "data-test"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-typo"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-typo":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Typo);
            }
            break;
    } });
}

export { Typo as T, defineCustomElement as d };
//# sourceMappingURL=p-BTwF0c-l.js.map

//# sourceMappingURL=p-BTwF0c-l.js.map