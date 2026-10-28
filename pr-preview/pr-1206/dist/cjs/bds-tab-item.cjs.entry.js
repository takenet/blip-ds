'use strict';

var index = require('./index-BuAR9UTp.js');

const tabItemCss = () => `:host{display:none}:host(.is-open){display:block;height:100%}.tab_item{height:100%}.tab_item_content{display:none;height:100%}.tab_item_content--open{display:block}`;

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
        return (index.h(index.Host, { key: 'cbb4b6864de4079821303bbeaf270166190376fc', class: { [`is-open`]: this.disable === true ? false : this.open } }, index.h("div", { key: 'bb591824ce955f28e6fcaede52dbaa81b849f31a', class: { tab_item: true }, "data-test": this.dataTest }, index.h("div", { key: '5a4cccc977fde253f7540c22e7e9da8379da0329', class: { tab_item_content: true, [`tab_item_content--open`]: this.open } }, index.h("slot", { key: 'f1c85de6c7980b728e4d516d56742ed77d480158' })))));
    }
    static get watchers() { return {
        "disable": [{
                "disableChanged": 0
            }]
    }; }
};
BdsTabItem.style = tabItemCss();

exports.bds_tab_item = BdsTabItem;
