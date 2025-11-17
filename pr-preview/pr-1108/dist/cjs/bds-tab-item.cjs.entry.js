'use strict';

var index = require('./index-D_zq0Z7d.js');

const tabItemCss = ":host{display:none}:host(.is-open){display:block;height:100%}.tab_item{height:100%}.tab_item_content{display:none;height:100%}.tab_item_content--open{display:block}";

const BdsTabItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.tabDisabled = index.createEvent(this, "tabDisabled");
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
        return (index.h(index.Host, { key: 'd9873300253948c5ad103f81e69b3dc11a2887ba', class: { [`is-open`]: this.disable === true ? false : this.open } }, index.h("div", { key: '46d71ec4e53ad9af468c47609e39f7b9d1222f2d', class: { tab_item: true }, "data-test": this.dataTest }, index.h("div", { key: 'c7ed3ad0726297032cff3a1ade103c6f8a471d2b', class: { tab_item_content: true, [`tab_item_content--open`]: this.open } }, index.h("slot", { key: '7a2aa454dc59046a992066526d1974d785cc76c1' })))));
    }
    static get watchers() { return {
        "disable": ["disableChanged"]
    }; }
};
BdsTabItem.style = tabItemCss;

exports.bds_tab_item = BdsTabItem;
//# sourceMappingURL=bds-tab-item.entry.cjs.js.map

//# sourceMappingURL=bds-tab-item.cjs.entry.js.map