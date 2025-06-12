import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const paperCss = ".bds-hover:hover{mix-blend-mode:multiply}.focus::before{content:\"\";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px}.focus:focus-visible{outline:none}.focus:focus-visible::before{border-color:#c226fb}.disabled{pointer-events:none}.bg-surface-1{background-color:var(--color-surface-1, rgb(246, 246, 246))}.bg-surface-2{background-color:var(--color-surface-2, rgb(237, 237, 237))}.bg-surface-3{background-color:var(--color-surface-3, rgb(227, 227, 227))}.bg-surface-4{background-color:var(--color-surface-4, rgb(20, 20, 20))}:host{display:block;border-radius:16px}:host(.border){border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));margin:-1px}:host(.bg-surface-0){background-color:var(--color-surface-0, rgb(255, 255, 255))}:host(.bg-surface-1){background-color:var(--color-surface-1, rgb(246, 246, 246))}:host(.bg-surface-2){background-color:var(--color-surface-2, rgb(237, 237, 237))}:host(.bg-surface-3){background-color:var(--color-surface-3, rgb(227, 227, 227))}:host(.bg-surface-4){background-color:var(--color-surface-4, rgb(20, 20, 20))}:host(.border-1){border-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}:host(.border-2){border-color:var(--color-border-2, rgba(0, 0, 0, 0.16))}:host(.border-3){border-color:var(--color-border-3, rgba(0, 0, 0, 0.06))}:host(.border-primary){border-color:var(--color-primary, rgb(30, 107, 241))}:host(.border-secondary){border-color:var(--color-secondary, rgb(41, 41, 41))}:host(.border-positive){border-color:var(--color-positive, #10603b)}:host(.border-negative){border-color:var(--color-negative, #e60f0f)}:host(.border-warning){border-color:var(--color-warning, rgb(253, 233, 155))}:host(.border-error){border-color:var(--color-error, rgb(250, 190, 190))}:host(.border-success){border-color:var(--color-success, rgb(132, 235, 188))}:host(.border-delete){border-color:var(--color-delete, rgb(230, 15, 15))}:host(.paper__elevation--none){-webkit-box-shadow:none;box-shadow:none}:host(.paper__elevation--static){-webkit-box-shadow:0px 2px 8px -2px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 2px 8px -2px var(--color-shadow-1, rgba(0, 0, 0, 0.16))}:host(.paper__elevation--primary){-webkit-box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16))}:host(.paper__elevation--secondary){-webkit-box-shadow:0px 8px 4px -4px var(--color-shadow-0, rgba(0, 0, 0, 0.04)), 0px 12px 12px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 8px 4px -4px var(--color-shadow-0, rgba(0, 0, 0, 0.04)), 0px 12px 12px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16))}.paper__display{display:contents}";

const Paper = /*@__PURE__*/ proxyCustomElement(class Paper extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.hasBorder = true;
        /**
         * Size. Entered as one of the size. Can be one of:
         * 'static', 'primary', 'secondary';
         */
        this.elevation = 'static';
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
        /**
         * Prop for set the border of the component.
         */
        this.border = false;
        /**
         * Prop for set the height of the component.
         */
        this.height = null;
        /**
         * Prop for set the width of the component.
         */
        this.width = null;
        /**
         * Prop for set the background color.
         */
        this.bgColor = 'surface-1';
        /**
         * Prop for set the border color.
         */
        this.borderColor = null;
    }
    componentWillLoad() {
        this.border === true ? (this.hasBorder = false) : (this.hasBorder = true);
    }
    render() {
        return (h(Host, { key: 'f993f9815d89962ca89c91356610024006c949d5', class: {
                [`paper__elevation--${this.elevation}`]: this.hasBorder,
                border: this.border,
                [`bg-${this.bgColor}`]: true,
                [`border-${this.borderColor}`]: true,
            }, style: { height: `${this.height}`, width: `${this.width}` } }, h("div", { key: 'f7d7cba705e31b7f05c28be974f36001e934d12e', class: "paper__display", "data-test": this.dataTest }, h("slot", { key: '966df4e4772b0e36c67d87c9cbe41b8ea6d93365' }))));
    }
    static get style() { return paperCss; }
}, [1, "bds-paper", {
        "elevation": [1537],
        "dataTest": [1, "data-test"],
        "border": [4],
        "height": [1],
        "width": [1],
        "bgColor": [1, "bg-color"],
        "borderColor": [1, "border-color"],
        "hasBorder": [32],
        "constElevation": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-paper"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-paper":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Paper);
            }
            break;
    } });
}

export { Paper as P, defineCustomElement as d };
//# sourceMappingURL=p-CzMNFclR.js.map

//# sourceMappingURL=p-CzMNFclR.js.map