import { h, Host } from "@stencil/core";
export class BdsTabGroup {
    constructor() {
        this.tabItensElement = null;
        this.tabItensSlideElement = null;
        this.isSlideTabs = false;
        this.alignTab = 'left';
        this.tabRefSlide = 0;
        this.positionLeft = 0;
        this.contentScrollable = true;
        this.align = 'center';
        /**
         * Data test is the prop to specifically test the component action object.
         * dtButtonPrev is the data-test to button prev.
         */
        this.dtButtonPrev = null;
        /**
         * Data test is the prop to specifically test the component action object.
         * dtButtonNext is the data-test to button next.
         */
        this.dtButtonNext = null;
        this.getEventsDisable = (ItensElement) => {
            ItensElement.forEach((element) => {
                element.addEventListener('tabDisabled', () => {
                    this.setInternalItens(Array.from(this.tabItensElement));
                }, false);
            });
        };
        this.checkSlideTabs = () => {
            var _a, _b;
            if (this.headerElement || this.headerSlideElement) {
                if (((_a = this.headerSlideElement) === null || _a === void 0 ? void 0 : _a.offsetWidth) > ((_b = this.headerElement) === null || _b === void 0 ? void 0 : _b.offsetWidth)) {
                    return true;
                }
            }
        };
        this.setFirstActive = () => {
            const hasOpenDefined = Array.from(this.tabItensElement).filter((obj) => obj.open);
            if (!hasOpenDefined.length) {
                this.tabItensElement[0].open = true;
            }
        };
        this.setnumberElement = () => {
            for (let i = 0; i < this.tabItensElement.length; i++) {
                this.tabItensElement[i].numberElement = i;
            }
        };
        this.setInternalItens = (ItensElement) => {
            const arrayItens = ItensElement.map((item, index) => {
                return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ label: item.label, open: item.open, numberElement: index, badge: item.badge }, (item.disable !== undefined && { disable: item.disable })), (item.icon !== undefined && { icon: item.icon })), (item.iconPosition !== undefined && { iconPosition: item.iconPosition })), (item.iconTheme !== undefined && { iconTheme: item.iconTheme })), (item.badgeShape !== undefined && { badgeShape: item.badgeShape })), (item.badgeColor !== undefined && { badgeColor: item.badgeColor })), (item.badgeIcon !== undefined && { badgeIcon: item.badgeIcon })), (item.badgeAnimation !== undefined && { badgeAnimation: item.badgeAnimation })), (item.badgeNumber !== undefined && { badgeNumber: item.badgeNumber })), (item.badgePosition !== undefined && { badgePosition: item.badgePosition })), (item.dataTest !== undefined && { dataTest: item.dataTest }));
            });
            return (this.internalItens = arrayItens);
        };
        this.handleClick = (numberItem) => {
            const updateInternalItens = this.internalItens.map((item) => {
                return {
                    label: item.label,
                    open: false,
                    numberElement: item.numberElement,
                };
            });
            this.internalItens = updateInternalItens;
            for (let i = 0; i < this.tabItensElement.length; i++) {
                if (this.tabItensElement[i].numberElement != numberItem) {
                    this.tabItensElement[i].open = false;
                }
                else {
                    this.tabItensElement[i].open = true;
                    this.bdsTabChange.emit(this.tabItensElement[i]);
                }
            }
        };
        this.refHeaderElement = (el) => {
            this.headerElement = el;
        };
        this.refHeaderSlideElement = (el) => {
            this.headerSlideElement = el;
        };
        this.handleDisabled = (id) => {
            this.bdsTabDisabled.emit(this.tabItensElement[id]);
        };
        this.nextSlide = () => {
            var _a, _b, _c, _d, _e;
            const minLeft = ((_a = this.headerElement) === null || _a === void 0 ? void 0 : _a.offsetWidth) - ((_b = this.headerSlideElement) === null || _b === void 0 ? void 0 : _b.offsetWidth);
            const calcNumber = ((_c = this.headerSlideElement) === null || _c === void 0 ? void 0 : _c.offsetWidth) / ((_d = this.headerElement) === null || _d === void 0 ? void 0 : _d.offsetWidth);
            const numberClicks = parseInt(calcNumber.toString());
            const newPosition = this.positionLeft - ((_e = this.headerElement) === null || _e === void 0 ? void 0 : _e.offsetWidth);
            this.positionLeft = newPosition < minLeft ? minLeft : newPosition;
            this.alignTab = newPosition < minLeft ? 'right' : 'scrolling';
            this.tabRefSlide = numberClicks <= this.tabRefSlide ? this.tabRefSlide + 1 : numberClicks;
        };
        this.prevSlide = () => {
            var _a, _b, _c;
            const calcNumber = ((_a = this.headerSlideElement) === null || _a === void 0 ? void 0 : _a.offsetWidth) / ((_b = this.headerElement) === null || _b === void 0 ? void 0 : _b.offsetWidth);
            const numberClicks = parseInt(calcNumber.toString());
            const newPosition = this.positionLeft + ((_c = this.headerElement) === null || _c === void 0 ? void 0 : _c.offsetWidth);
            this.positionLeft = newPosition > 0 ? 0 : newPosition;
            this.alignTab = newPosition > 0 ? 'left' : 'scrolling';
            this.tabRefSlide = numberClicks <= this.tabRefSlide ? this.tabRefSlide - 1 : numberClicks;
        };
        this.renderIcon = (Icon, Theme, disable) => {
            return (h("bds-icon", { class: { tab_group__header__itens__item__typo__disable: disable }, size: "x-small", name: Icon, theme: Theme }));
        };
        this.renderBadge = (Shape, Color, Icon, Animation, Number) => {
            return (h("bds-grid", { "justify-content": "center" }, h("bds-badge", { color: Color, icon: Icon, number: Number, shape: Shape, animation: Animation })));
        };
    }
    componentWillRender() {
        this.tabItensElement = this.element.getElementsByTagName('bds-tab-item');
        this.setnumberElement();
        this.setFirstActive();
        this.setInternalItens(Array.from(this.tabItensElement));
        this.getEventsDisable(Array.from(this.tabItensElement));
    }
    componentDidLoad() {
        this.tabItensSlideElement = this.element.shadowRoot.querySelectorAll('.tab_group__header__itens__item');
    }
    connectedCallback() {
        this.isSlide = window.setInterval(() => {
            this.isSlideTabs = this.checkSlideTabs();
        }, 100);
    }
    disconnectedCallback() {
        window.clearInterval(this.isSlide);
    }
    handleKeyDown(event, item) {
        if (event.key == 'Enter') {
            item.disable ? this.handleDisabled(item.numberElement) : this.handleClick(item.numberElement);
        }
        if (event.key == 'ArrowRight') {
            this.tabItensSlideElement[item.numberElement + 1].focus();
        }
        if (event.key == 'ArrowLeft') {
            this.tabItensSlideElement[item.numberElement - 1].focus();
        }
    }
    render() {
        const slidePosition = { left: `${this.positionLeft}px` };
        return (h(Host, { key: 'f7c5557018e984c0f4f38e0f9fd15ab1b7a8367e' }, h("div", { key: '1e2f86becc71b9f8fc16e3ee1846de9bed48a8c5', class: { tab_group: true } }, this.isSlideTabs && this.alignTab != 'left' && (h("bds-button-icon", { key: '042b3b1b0af96a64cc36857089f914f354554d8a', class: "tab_group__slide-button", icon: "arrow-left", size: "short", id: "bds-tabs-button-left", onClick: () => this.prevSlide(), dataTest: this.dtButtonPrev, variant: "secondary" })), h("div", { key: 'b7dc699964f40409408dd0c0c636f90327e9ad9f', class: { tab_group__header: true, tab_group__slide: this.isSlideTabs }, ref: this.refHeaderElement }, h("div", { key: 'd5ca6d63e398b91ba51b80abbd8648e9e1fa59da', class: {
                tab_group__header__itens: true,
                tab_group__slide__itens: this.isSlideTabs,
                [`tab_group__header__itens__${this.align}`]: !this.isSlideTabs,
            }, ref: this.refHeaderSlideElement, style: slidePosition }, this.internalItens &&
            this.internalItens.map((item, index) => {
                const bold = item.open == true ? 'bold' : 'regular';
                return (h("div", { class: {
                        tab_group__header__itens__item: true,
                        tab_group__header__itens__item__open: item.open,
                        tab_group__header__itens__item__disable: item.disable,
                    }, key: index, tabindex: "0", onClick: () => item.disable ? this.handleDisabled(item.numberElement) : this.handleClick(item.numberElement), onKeyDown: (ev) => this.handleKeyDown(ev, item) }, item.iconPosition === 'left' && item.icon
                    ? this.renderIcon(item.icon, item.iconTheme, item.disable)
                    : '', item.badgePosition === 'left' && item.badge
                    ? this.renderBadge(item.badgeShape, item.badgeColor, item.badgeIcon, item.badgeAnimation, item.badgeNumber)
                    : '', h("bds-typo", { class: { tab_group__header__itens__item__typo__disable: item.disable }, variant: "fs-16", bold: bold }, item.label), item.iconPosition === 'right' && item.icon
                    ? this.renderIcon(item.icon, item.iconTheme, item.disable)
                    : '', item.badgePosition === 'right' && item.badge
                    ? this.renderBadge(item.badgeShape, item.badgeColor, item.badgeIcon, item.badgeAnimation, item.badgeNumber)
                    : ''));
            }))), this.isSlideTabs && this.alignTab != 'right' && (h("bds-button-icon", { key: 'ded55848b9edf8abd71609d208c203083463b4f2', class: "tab_group__slide-button", icon: "arrow-right", size: "short", id: "bds-tabs-button-right", onClick: () => this.nextSlide(), dataTest: this.dtButtonNext, variant: "secondary" })), h("div", { key: 'd40ac23b3285160d9bbc571aee2f07b7859724c2', class: { tab_group__content: true, tab_group__scrolled: this.contentScrollable } }, h("slot", { key: 'abb52fefcedcc400a4680b70b634bb2e49e2b625' })))));
    }
    static get is() { return "bds-tab-group"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["tab-group.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["tab-group.css"]
        };
    }
    static get properties() {
        return {
            "contentScrollable": {
                "type": "boolean",
                "attribute": "content-scrollable",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            },
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
            },
            "dtButtonPrev": {
                "type": "string",
                "attribute": "dt-button-prev",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Data test is the prop to specifically test the component action object.\ndtButtonPrev is the data-test to button prev."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "null"
            },
            "dtButtonNext": {
                "type": "string",
                "attribute": "dt-button-next",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Data test is the prop to specifically test the component action object.\ndtButtonNext is the data-test to button next."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "null"
            }
        };
    }
    static get states() {
        return {
            "internalItens": {},
            "isSlideTabs": {},
            "alignTab": {},
            "tabRefSlide": {},
            "positionLeft": {}
        };
    }
    static get events() {
        return [{
                "method": "bdsTabChange",
                "name": "bdsTabChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "bdsTabChange. Event to return value when Tabs is change."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "bdsTabDisabled",
                "name": "bdsTabDisabled",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "bdsTabDisabled. Event to return value when Tabs disable is change."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "element"; }
}
//# sourceMappingURL=tab-group.js.map
