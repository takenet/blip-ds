import { p as proxyCustomElement, H, c as createEvent, h, a as Host } from './index.js';
import { d as defineCustomElement$6 } from './p-tbr0dhs8.js';
import { d as defineCustomElement$5 } from './p-Buf97HbJ.js';
import { d as defineCustomElement$4 } from './p-mCuNr11T.js';
import { d as defineCustomElement$3 } from './p-19uyXyEx.js';
import { d as defineCustomElement$2 } from './p-BTwF0c-l.js';

const tabGroupCss = ":host{display:block;width:100%}.tab_group{width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative}.tab_group__header{padding:4px 16px;overflow:hidden}.tab_group__header__itens{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;width:-webkit-max-content;width:-moz-max-content;width:max-content;gap:32px;margin:auto}.tab_group__header__itens__center{-ms-flex-pack:center;justify-content:center;margin:auto}.tab_group__header__itens__right{-ms-flex-pack:right;justify-content:right;margin:0 0 0 auto}.tab_group__header__itens__left{-ms-flex-pack:left;justify-content:left;margin:0 auto 0 0}.tab_group__header__itens__item{cursor:pointer;height:46px;gap:4px;width:auto;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;border-bottom:2px solid transparent;position:relative}.tab_group__header__itens__item__typo{color:var(--color-content-disable, rgb(89, 89, 89))}.tab_group__header__itens__item__typo__disable{color:var(--color-content-ghost, rgb(140, 140, 140))}.tab_group__header__itens__item__typo__error{color:var(--color-surface-negative, rgb(138, 0, 0))}.tab_group__header__itens__item::before{content:\"\";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px}.tab_group__header__itens__item:focus-visible{outline:none}.tab_group__header__itens__item:focus-visible::before{border-color:var(--color-focus, rgb(194, 38, 251))}.tab_group__header__itens__item__open{color:var(--color-content-default, rgb(40, 40, 40));border-color:var(--color-primary, rgb(30, 107, 241))}.tab_group__header__itens__item__disable{cursor:no-drop}.tab_group__slide{position:relative;overflow:hidden;padding:0 16px;height:54px;margin-left:56px;margin-right:56px}.tab_group__slide-button{position:absolute;z-index:1;background-color:var(--color-surface-1, rgb(246, 246, 246))}.tab_group__slide-button[icon=arrow-left]{left:0}.tab_group__slide-button[icon=arrow-right]{right:0}.tab_group__slide__itens{position:absolute;left:56px;width:-webkit-max-content;width:-moz-max-content;width:max-content;height:48px;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:center;justify-content:center;padding:4px;gap:32px;-webkit-transition:left 0.5s;-moz-transition:left 0.5s;transition:left 0.5s}.tab_group__content{height:100%}.tab_group__scrolled{-ms-flex-negative:999;flex-shrink:999;overflow:none}.tab_group__scrolled::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.tab_group__scrolled::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}";

const BdsTabGroup$1 = /*@__PURE__*/ proxyCustomElement(class BdsTabGroup extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.bdsTabChange = createEvent(this, "bdsTabChange");
        this.bdsTabDisabled = createEvent(this, "bdsTabDisabled");
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
        return (h(Host, { key: 'bb7954172ee37d84e5cad48192187c0c6aea5ace' }, h("div", { key: '1a3aa12156fec3cc16fffbfeffe7504111190bc1', class: { tab_group: true } }, this.isSlideTabs && this.alignTab != 'left' && (h("bds-button-icon", { key: '71081c94bd1de5b090a35bd45687ca4cd492f5c3', class: "tab_group__slide-button", icon: "arrow-left", size: "short", id: "bds-tabs-button-left", onClick: () => this.prevSlide(), dataTest: this.dtButtonPrev, variant: "secondary" })), h("div", { key: '82cbd5a0c47f605424d62856d0d1bb2cb39bb714', class: { tab_group__header: true, tab_group__slide: this.isSlideTabs }, ref: this.refHeaderElement, style: headerStyle }, h("div", { key: '95bc772a8bb3ce52e6d6360f97d5cda778ea38b0', class: {
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
            }))), this.isSlideTabs && this.alignTab != 'right' && (h("bds-button-icon", { key: '1361f5eeef61af74934e88b77ac16777f95ef16f', class: "tab_group__slide-button", icon: "arrow-right", size: "short", id: "bds-tabs-button-right", onClick: () => this.nextSlide(), dataTest: this.dtButtonNext, variant: "secondary" })), h("div", { key: '7ddbb88fe13055456056ddbb869f627b09ffd741', class: { tab_group__content: true, tab_group__scrolled: this.contentScrollable }, style: contentStyle }, h("slot", { key: 'ccb397f22da575ecabd65b3fb336fa9e8d9bd485' })))));
    }
    get element() { return this; }
    static get style() { return tabGroupCss; }
}, [1, "bds-tab-group", {
        "contentScrollable": [4, "content-scrollable"],
        "align": [1],
        "dtButtonPrev": [1, "dt-button-prev"],
        "dtButtonNext": [1, "dt-button-next"],
        "internalItens": [32],
        "isSlideTabs": [32],
        "alignTab": [32],
        "tabRefSlide": [32],
        "positionLeft": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-tab-group", "bds-badge", "bds-button-icon", "bds-grid", "bds-icon", "bds-typo"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-tab-group":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, BdsTabGroup$1);
            }
            break;
        case "bds-badge":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "bds-button-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "bds-grid":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "bds-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "bds-typo":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const BdsTabGroup = BdsTabGroup$1;
const defineCustomElement = defineCustomElement$1;

export { BdsTabGroup, defineCustomElement };
//# sourceMappingURL=bds-tab-group.js.map

//# sourceMappingURL=bds-tab-group.js.map