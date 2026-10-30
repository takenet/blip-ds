import { r as registerInstance, c as createEvent, h, H as Host } from './index-CkbvGS8Z.js';

const tabItemCss = () => `:host{display:none}:host(.is-open){display:block;height:100%}.tab_item{height:100%}.tab_item_content{display:none;height:100%}.tab_item_content--open{display:block}`;

const BdsTabItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { key: 'eaed3b610d8f46b5bf7d6ceab0e45889ffa55ff1', class: { [`is-open`]: this.disable === true ? false : this.open } }, h("div", { key: '066c32b0a2c26ce85856be44d21593d915b78581', class: { tab_item: true }, "data-test": this.dataTest }, h("div", { key: '29c3d2586252586de451d1a759299d715ef5d330', class: { tab_item_content: true, [`tab_item_content--open`]: this.open } }, h("slot", { key: '4a57ada68ca5e5ed8b8d0169dc23a8b8fb59d92c' })))));
    }
    static get watchers() { return {
        "disable": [{
                "disableChanged": 0
            }]
    }; }
};
BdsTabItem.style = tabItemCss();

export { BdsTabItem as bds_tab_item };
