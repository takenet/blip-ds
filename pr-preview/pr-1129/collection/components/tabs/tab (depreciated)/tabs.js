import { h, Host } from '@stencil/core';
export class Tabs {
  constructor() {
    this.SCROLL_BEHAVIOR = 'smooth';
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
    this.align = 'center';
  }
  onScrollButtonClick(event) {
    event.preventDefault();
    const options = {
      behavior: this.SCROLL_BEHAVIOR,
      top: 0,
      left: event.detail.distance,
    };
    options.left ?? (options.left = this.getDistance(options, event));
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
    return (h(Host, { class: {
        'bds-tabs': true,
        [`bds-tabs--${this.align}`]: true,
      } }, h("div", { class: "bds-tabs__header-button-container" }, h("bds-button-icon", { class: "bds-tabs__header-button", icon: "arrow-left", size: "short", id: "bds-tabs-button-left", onClick: () => this.handleScrollButtonClick("left" /* ScrollDirection.LEFT */), variant: "secondary" })), h("div", { class: "bds-tabs__header" }, h("slot", null)), h("div", { class: "bds-tabs__header-button-container" }, h("bds-button-icon", { class: "bds-tabs__header-button", icon: "arrow-right", size: "short", id: "bds-tabs-button-right", onClick: () => this.handleScrollButtonClick("right" /* ScrollDirection.RIGHT */), variant: "secondary" }))));
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
        "attribute": "align",
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
              "path": "./tabs-interface"
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
          "original": "any",
          "resolved": "any",
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
