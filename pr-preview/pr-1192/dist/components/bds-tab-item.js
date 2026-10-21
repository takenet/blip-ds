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
        return (h(Host, { key: 'ec9725ede10c770ccffcc85eee2d93b7470dfa93', class: { [`is-open`]: this.disable === true ? false : this.open } }, h("div", { key: '1327eb5c29859c0aec93cfceb74f696d99eadfa6', class: { tab_item: true }, "data-test": this.dataTest }, h("div", { key: '917866a0275ca16313e660435ecfe98d0e09fa0e', class: { tab_item_content: true, [`tab_item_content--open`]: this.open } }, h("slot", { key: '6f3415621672633325f7a15c7c2dec8ef55f39a6' })))));
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