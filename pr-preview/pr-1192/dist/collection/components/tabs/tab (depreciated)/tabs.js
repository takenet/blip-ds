import { h, Host } from "@stencil/core";
export class Tabs {
    constructor() {
        this.SCROLL_BEHAVIOR = 'smooth';
        this.align = 'center';
        this.handleHeaderResize = () => {
            if (this.tabsHeaderChildElement.offsetWidth < this.tabsHeaderChildElement.scrollWidth) {
                this.updateButtonsVisibility(true);
            }
            else {
                this.updateButtonsVisibility(false);
            }
        };
        this.updateButtonsVisibility = (isScrollable) => {
            this.setLeftButtonVisibility(isScrollable);
            this.setRightButtonVisibility(isScrollable);
        };
        this.handleScrollButtonClick = (direction) => {
            this.scrollButtonClick.emit({ direction });
        };
    }
    onScrollButtonClick(event) {
        var _a;
        event.preventDefault();
        const options = {
            behavior: this.SCROLL_BEHAVIOR,
            top: 0,
            left: event.detail.distance,
        };
        (_a = options.left) !== null && _a !== void 0 ? _a : (options.left = this.getDistance(options, event));
        this.tabsHeaderChildElement.scrollTo(options);
    }
    onSelectedTab(event) {
        this.handleButtonOverlay(event.detail);
    }
    componentDidLoad() {
        this.getChildElements();
        this.attachEvents();
        this.setLeftButtonVisibility(false);
        this.setRightButtonVisibility(true);
        this.handleActiveTab();
    }
    handleActiveTab() {
        const tabs = Array.from(this.tabsHeaderChildElement.getElementsByTagName('bds-tab'));
        const activeTab = tabs.find((tab) => tab.active);
        if (activeTab) {
            this.bdsTabInit.emit(activeTab.group);
        }
        else {
            const [firstTab] = tabs;
            this.bdsTabInit.emit(firstTab.group);
        }
    }
    getChildElements() {
        this.tabsHeaderChildElement = this.el.querySelector('.bds-tabs__header');
        this.leftButtonChildElement = this.el.querySelector('#bds-tabs-button-left');
        this.rightButtonChildElement = this.el.querySelector('#bds-tabs-button-right');
    }
    attachEvents() {
        window.onresize = this.handleHeaderResize;
        this.tabsHeaderChildElement.onscroll = () => this.updateButtonsVisibility(this.tabsHeaderChildElement.scrollWidth > this.tabsHeaderChildElement.clientWidth);
    }
    setRightButtonVisibility(isScrollable) {
        if (isScrollable &&
            this.tabsHeaderChildElement.scrollWidth >
                Math.ceil(this.tabsHeaderChildElement.scrollLeft + this.tabsHeaderChildElement.clientWidth)) {
            this.rightButtonChildElement.style.display = "block" /* Display.BLOCK */;
        }
        else {
            this.rightButtonChildElement.style.display = "none" /* Display.NONE */;
        }
    }
    setLeftButtonVisibility(isScrollable) {
        this.leftButtonChildElement.style.display =
            this.tabsHeaderChildElement.scrollLeft > 0 && isScrollable ? "block" /* Display.BLOCK */ : "none" /* Display.NONE */;
    }
    handleButtonOverlay(group) {
        const tab = Array.from(this.tabsHeaderChildElement.getElementsByTagName('bds-tab')).find((header) => {
            return header.group == group;
        });
        const buttons = [this.leftButtonChildElement, this.rightButtonChildElement];
        buttons.forEach((button) => {
            if (this.isButtonOverlappingTab(button, tab)) {
                const distance = this.getAdjutScrollDistance(button, tab);
                this.scrollButtonClick.emit({ distance: distance });
            }
        });
    }
    isButtonOverlappingTab(button, tab) {
        const tabRect = tab.getBoundingClientRect();
        const buttonRect = button.getBoundingClientRect();
        return this.elementIsOverlapping(buttonRect, tabRect);
    }
    elementIsOverlapping(element, overlaidElement) {
        const elementStart = element.x;
        const elementEnd = element.x + element.width;
        const comparatorStart = overlaidElement.x;
        const comparatorEnd = overlaidElement.x + overlaidElement.width;
        return ((elementStart >= comparatorStart && elementStart <= comparatorEnd) ||
            (elementEnd >= comparatorStart && elementEnd <= comparatorEnd));
    }
    getAdjutScrollDistance(button, tab) {
        const direction = button.id == 'bds-tabs-button-left' ? "left" /* ScrollDirection.LEFT */ : "right" /* ScrollDirection.RIGHT */;
        const distanceDifference = tab.clientWidth + parseInt(getComputedStyle(tab).marginRight) - button.offsetWidth;
        if (direction == "right" /* ScrollDirection.RIGHT */) {
            return tab.parentElement.scrollLeft + distanceDifference;
        }
        else {
            return tab.parentElement.scrollLeft - distanceDifference;
        }
    }
    getDistance(options, event) {
        return event.detail.direction == "right" /* ScrollDirection.RIGHT */
            ? (options.left = this.tabsHeaderChildElement.scrollLeft + this.tabsHeaderChildElement.clientWidth)
            : (options.left = this.tabsHeaderChildElement.scrollLeft - this.tabsHeaderChildElement.clientWidth);
    }
    render() {
        return (h(Host, { key: '13e4e70a4c8383844bb6933519340b2e1a694601', class: {
                'bds-tabs': true,
                [`bds-tabs--${this.align}`]: true,
            } }, h("div", { key: 'a82a38c35a882fa57ce6e202d1a9b4c4efc462b3', class: "bds-tabs__header-button-container" }, h("bds-button-icon", { key: '6011d191bfd5381295bbad1f86270b241e4dab60', class: "bds-tabs__header-button", icon: "arrow-left", size: "short", id: "bds-tabs-button-left", onClick: () => this.handleScrollButtonClick("left" /* ScrollDirection.LEFT */), variant: "secondary" })), h("div", { key: '400f8ccbc50b1e194948583c79927c2908c4e417', class: "bds-tabs__header" }, h("slot", { key: '6b325999044cd22ac221df10eb380387180e6374' })), h("div", { key: '8574f694dbfea0b33b7b1786386fee4fc683d8f5', class: "bds-tabs__header-button-container" }, h("bds-button-icon", { key: '75f454fd633df2a1a6e13825c653d1427044afe7', class: "bds-tabs__header-button", icon: "arrow-right", size: "short", id: "bds-tabs-button-right", onClick: () => this.handleScrollButtonClick("right" /* ScrollDirection.RIGHT */), variant: "secondary" }))));
    }
    static get is() { return "bds-tabs"; }
    static get originalStyleUrls() {
        return {
            "$": ["tabs.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["tabs.css"]
        };
    }
    static get properties() {
        return {
            "align": {
                "type": "string",
                "attribute": "align",
                "mutable": false,
                "complexType": {
                    "original": "'left' | 'center' | 'right'",
                    "resolved": "\"center\" | \"left\" | \"right\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'center'"
            }
        };
    }
    static get events() {
        return [{
                "method": "scrollButtonClick",
                "name": "scrollButtonClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "Overflow",
                    "resolved": "Overflow",
                    "references": {
                        "Overflow": {
                            "location": "import",
                            "path": "./tabs-interface",
                            "id": "src/components/tabs/tab (depreciated)/tabs-interface.ts::Overflow"
                        }
                    }
                }
            }, {
                "method": "bdsTabInit",
                "name": "bdsTabInit",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get listeners() {
        return [{
                "name": "scrollButtonClick",
                "method": "onScrollButtonClick",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "bdsTabChange",
                "method": "onSelectedTab",
                "target": "body",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=tabs.js.map
