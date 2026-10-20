import { p as proxyCustomElement, H, c as createEvent, h, a as Host } from './index.js';

const tabItemCss = ":host{display:none}:host(.is-open){display:block;height:100%}.tab_item{height:100%}.tab_item_content{display:none;height:100%}.tab_item_content--open{display:block}";

const BdsTabItem$1 = /*@__PURE__*/ proxyCustomElement(class BdsTabItem extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.tabDisabled = createEvent(this, "tabDisabled");
        /**
         * Use to set number of tabItem.
         */
        this.numberElement = null;
        /**
         * The text to be shown at the Tab item.
         */
        this.label = null;
        /**
         * The icon to be shown at the Tab item.
         */
        this.icon = null;
        /**
         * The position of the icon at the Tab item ('left', 'right').
         */
        this.iconPosition = 'left';
        /**
         * The theme of the icon at the Tab item ('solid', 'outline', 'emoji', 'logos').
         */
        this.iconTheme = 'outline';
        /**
         * The shape of the badge to be shown at the Tab item ('circle', 'square', 'triangle', 'triangle-reverse', 'polygon').
         */
        this.badge = false;
        /**
         * The shape of the badge to be shown at the Tab item ('circle', 'square', 'triangle', 'triangle-reverse', 'polygon').
         */
        this.badgeShape = 'circle';
        /**
         * The color of the badge to be shown at the Tab item.
         */
        this.badgeColor = 'system';
        /**
         * The icon to be shown inside the badge at the Tab item ('system', 'danger', 'warning', 'success', 'neutral')
         */
        this.badgeIcon = null;
        /**
         * The animation of the badge to be shown at the Tab item.
         */
        this.badgeAnimation = false;
        /**
         * The animation of the badge to be shown at the Tab item.
         */
        this.badgePosition = 'left';
        /**
         * The number to be shown inside the badge at the Tab item.
         */
        this.badgeNumber = null;
        /**
         * Prop for disable the especific tab.
         */
        this.disable = false;
        /**
         * Prop to indicate an error state for the tab.
         */
        this.error = false;
        /**
         * Inline styles to be applied to the tab group header element.
         */
        this.headerStyle = null;
        /**
         * Inline styles to be applied to the tab group content element.
         */
        this.contentStyle = null;
        /**
         * Used to open/close the Tab item.
         */
        this.open = false;
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
    }
    async reciveNumber(number) {
        this.numberElement = number;
    }
    disableChanged() {
        this.tabDisabled.emit({ item: this.numberElement, disable: this.disable });
    }
    render() {
        return (h(Host, { key: 'd9873300253948c5ad103f81e69b3dc11a2887ba', class: { [`is-open`]: this.disable === true ? false : this.open } }, h("div", { key: '46d71ec4e53ad9af468c47609e39f7b9d1222f2d', class: { tab_item: true }, "data-test": this.dataTest }, h("div", { key: 'c7ed3ad0726297032cff3a1ade103c6f8a471d2b', class: { tab_item_content: true, [`tab_item_content--open`]: this.open } }, h("slot", { key: '7a2aa454dc59046a992066526d1974d785cc76c1' })))));
    }
    static get watchers() { return {
        "disable": ["disableChanged"]
    }; }
    static get style() { return tabItemCss; }
}, [1, "bds-tab-item", {
        "numberElement": [1538, "number-element"],
        "label": [1],
        "icon": [1],
        "iconPosition": [1, "icon-position"],
        "iconTheme": [1, "icon-theme"],
        "badge": [4],
        "badgeShape": [1, "badge-shape"],
        "badgeColor": [1, "badge-color"],
        "badgeIcon": [1, "badge-icon"],
        "badgeAnimation": [4, "badge-animation"],
        "badgePosition": [1, "badge-position"],
        "badgeNumber": [2, "badge-number"],
        "disable": [1540],
        "error": [4],
        "headerStyle": [1, "header-style"],
        "contentStyle": [1, "content-style"],
        "open": [1540],
        "dataTest": [1, "data-test"],
        "reciveNumber": [64]
    }, undefined, {
        "disable": ["disableChanged"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-tab-item"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-tab-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, BdsTabItem$1);
            }
            break;
    } });
}

const BdsTabItem = BdsTabItem$1;
const defineCustomElement = defineCustomElement$1;

export { BdsTabItem, defineCustomElement };
//# sourceMappingURL=bds-tab-item.js.map

//# sourceMappingURL=bds-tab-item.js.map