import { h, Host } from "@stencil/core";
/**
 * @deprecated Use uai-tab-group. Consulte UAI/Tab Group para a migração de props e eventos.
 */
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
                return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ label: item.label, open: item.open, numberElement: index, badge: item.badge }, (item.disable !== undefined && { disable: item.disable })), (item.error !== undefined && { error: item.error })), (item.headerStyle !== undefined && { headerStyle: item.headerStyle })), (item.contentStyle !== undefined && { contentStyle: item.contentStyle })), (item.icon !== undefined && { icon: item.icon })), (item.iconPosition !== undefined && { iconPosition: item.iconPosition })), (item.iconTheme !== undefined && { iconTheme: item.iconTheme })), (item.badgeShape !== undefined && { badgeShape: item.badgeShape })), (item.badgeColor !== undefined && { badgeColor: item.badgeColor })), (item.badgeIcon !== undefined && { badgeIcon: item.badgeIcon })), (item.badgeAnimation !== undefined && { badgeAnimation: item.badgeAnimation })), (item.badgeNumber !== undefined && { badgeNumber: item.badgeNumber })), (item.badgePosition !== undefined && { badgePosition: item.badgePosition })), (item.dataTest !== undefined && { dataTest: item.dataTest }));
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
        this.renderIcon = (Icon, Theme, disable, error) => {
            return (h("bds-icon", { class: {
                    tab_group__header__itens__item__typo__disable: disable,
                    tab_group__header__itens__item__typo__error: error
                }, size: "x-small", name: Icon, theme: Theme }));
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
    parseInlineStyle(styleString) {
        if (!styleString)
            return {};
        return styleString
            .split(';')
            .filter(style => style.trim())
            .reduce((acc, style) => {
            const [property, value] = style.split(':').map(s => s.trim());
            if (property && value) {
                // Convert kebab-case to camelCase for CSS properties
                const camelProperty = property.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
                acc[camelProperty] = value;
            }
            return acc;
        }, {});
    }
    render() {
        var _a;
        const slidePosition = { left: `${this.positionLeft}px` };
        // Find the currently open tab to get its headerStyle and contentStyle
        const openTab = (_a = this.internalItens) === null || _a === void 0 ? void 0 : _a.find(item => item.open);
        const headerStyle = (openTab === null || openTab === void 0 ? void 0 : openTab.headerStyle) ? this.parseInlineStyle(openTab.headerStyle) : {};
        const contentStyle = (openTab === null || openTab === void 0 ? void 0 : openTab.contentStyle) ? this.parseInlineStyle(openTab.contentStyle) : {};
        return (h(Host, { key: '44d85ec63ee26272f725f909d0d0187f38258190' }, h("div", { key: 'a253cddd63c4e6b5eea41338031ccca9915f9a1c', class: { tab_group: true } }, this.isSlideTabs && this.alignTab != 'left' && (h("bds-button-icon", { key: 'b2a9703e4da30743664cd4215165c8d6888569ac', class: "tab_group__slide-button", icon: "arrow-left", size: "short", id: "bds-tabs-button-left", onClick: () => this.prevSlide(), dataTest: this.dtButtonPrev, variant: "secondary" })), h("div", { key: 'c504e5533f32307a5a2088d2a0b8dbdf79c30645', class: { tab_group__header: true, tab_group__slide: this.isSlideTabs }, ref: this.refHeaderElement, style: headerStyle }, h("div", { key: '07cd80d7e7fc26efea68e964c1f220c9a1d38ae4', class: {
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
                    ? this.renderIcon(item.icon, item.iconTheme, item.disable, item.error)
                    : '', item.badgePosition === 'left' && item.badge
                    ? this.renderBadge(item.badgeShape, item.badgeColor, item.badgeIcon, item.badgeAnimation, item.badgeNumber)
                    : '', h("bds-typo", { class: {
                        tab_group__header__itens__item__typo__disable: item.disable,
                        tab_group__header__itens__item__typo__error: item.error
                    }, variant: "fs-16", bold: bold }, item.label), item.iconPosition === 'right' && item.icon
                    ? this.renderIcon(item.icon, item.iconTheme, item.disable, item.error)
                    : '', item.badgePosition === 'right' && item.badge
                    ? this.renderBadge(item.badgeShape, item.badgeColor, item.badgeIcon, item.badgeAnimation, item.badgeNumber)
                    : ''));
            }))), this.isSlideTabs && this.alignTab != 'right' && (h("bds-button-icon", { key: '2653c141bbe23ec4a39fa6f8e46ed8075e30399d', class: "tab_group__slide-button", icon: "arrow-right", size: "short", id: "bds-tabs-button-right", onClick: () => this.nextSlide(), dataTest: this.dtButtonNext, variant: "secondary" })), h("div", { key: 'd3c0161006d58d1fe26620e8fd6273141e4b03da', class: { tab_group__content: true, tab_group__scrolled: this.contentScrollable }, style: contentStyle }, h("slot", { key: 'bc3d2f6a6c0b3655c11ad7c5d67b684714670937' })))));
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
                "attribute": "content-scrollable",
                "defaultValue": "true"
            },
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "align",
                "defaultValue": "'center'"
            },
            "dtButtonPrev": {
                "type": "string",
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
                "attribute": "dt-button-prev",
                "defaultValue": "null"
            },
            "dtButtonNext": {
                "type": "string",
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
                "attribute": "dt-button-next",
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
                    "original": "HTMLBdsTabItemElement",
                    "resolved": "HTMLBdsTabItemElement",
                    "references": {
                        "HTMLBdsTabItemElement": {
                            "location": "global",
                            "id": "global::HTMLBdsTabItemElement"
                        }
                    }
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
                    "original": "HTMLBdsTabItemElement",
                    "resolved": "HTMLBdsTabItemElement",
                    "references": {
                        "HTMLBdsTabItemElement": {
                            "location": "global",
                            "id": "global::HTMLBdsTabItemElement"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "element"; }
}
