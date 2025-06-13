'use strict';

var index = require('./index-ljSeaagN.js');

const tabGroupCss = ":host{display:block;width:100%}.tab_group{width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative}.tab_group__header{padding:4px 16px;overflow:hidden}.tab_group__header__itens{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;width:-webkit-max-content;width:-moz-max-content;width:max-content;gap:32px;margin:auto}.tab_group__header__itens__center{-ms-flex-pack:center;justify-content:center;margin:auto}.tab_group__header__itens__right{-ms-flex-pack:right;justify-content:right;margin:0 0 0 auto}.tab_group__header__itens__left{-ms-flex-pack:left;justify-content:left;margin:0 auto 0 0}.tab_group__header__itens__item{cursor:pointer;height:46px;gap:4px;width:auto;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;border-bottom:2px solid transparent;position:relative}.tab_group__header__itens__item__typo{color:var(--color-content-disable, rgb(89, 89, 89))}.tab_group__header__itens__item__typo__disable{color:var(--color-content-ghost, rgb(140, 140, 140))}.tab_group__header__itens__item::before{content:\"\";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px}.tab_group__header__itens__item:focus-visible{outline:none}.tab_group__header__itens__item:focus-visible::before{border-color:var(--color-focus, rgb(194, 38, 251))}.tab_group__header__itens__item__open{color:var(--color-content-default, rgb(40, 40, 40));border-color:var(--color-primary, rgb(30, 107, 241))}.tab_group__header__itens__item__disable{cursor:no-drop}.tab_group__slide{position:relative;overflow:hidden;padding:0 16px;height:54px;margin-left:56px;margin-right:56px}.tab_group__slide-button{position:absolute;z-index:1;background-color:var(--color-surface-1, rgb(246, 246, 246))}.tab_group__slide-button[icon=arrow-left]{left:0}.tab_group__slide-button[icon=arrow-right]{right:0}.tab_group__slide__itens{position:absolute;left:56px;width:-webkit-max-content;width:-moz-max-content;width:max-content;height:48px;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:center;justify-content:center;padding:4px;gap:32px;-webkit-transition:left 0.5s;-moz-transition:left 0.5s;transition:left 0.5s}.tab_group__content{height:100%}.tab_group__scrolled{-ms-flex-negative:999;flex-shrink:999;overflow:none}.tab_group__scrolled::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.tab_group__scrolled::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}";

const BdsTabGroup = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bdsTabChange = index.createEvent(this, "bdsTabChange");
        this.bdsTabDisabled = index.createEvent(this, "bdsTabDisabled");
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
            if (this.headerElement || this.headerSlideElement) {
                if (this.headerSlideElement?.offsetWidth > this.headerElement?.offsetWidth) {
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
                return {
                    label: item.label,
                    open: item.open,
                    numberElement: index,
                    badge: item.badge,
                    ...(item.disable !== undefined && { disable: item.disable }),
                    ...(item.icon !== undefined && { icon: item.icon }),
                    ...(item.iconPosition !== undefined && { iconPosition: item.iconPosition }),
                    ...(item.iconTheme !== undefined && { iconTheme: item.iconTheme }),
                    ...(item.badgeShape !== undefined && { badgeShape: item.badgeShape }),
                    ...(item.badgeColor !== undefined && { badgeColor: item.badgeColor }),
                    ...(item.badgeIcon !== undefined && { badgeIcon: item.badgeIcon }),
                    ...(item.badgeAnimation !== undefined && { badgeAnimation: item.badgeAnimation }),
                    ...(item.badgeNumber !== undefined && { badgeNumber: item.badgeNumber }),
                    ...(item.badgePosition !== undefined && { badgePosition: item.badgePosition }),
                    ...(item.dataTest !== undefined && { dataTest: item.dataTest }),
                };
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
            const minLeft = this.headerElement?.offsetWidth - this.headerSlideElement?.offsetWidth;
            const calcNumber = this.headerSlideElement?.offsetWidth / this.headerElement?.offsetWidth;
            const numberClicks = parseInt(calcNumber.toString());
            const newPosition = this.positionLeft - this.headerElement?.offsetWidth;
            this.positionLeft = newPosition < minLeft ? minLeft : newPosition;
            this.alignTab = newPosition < minLeft ? 'right' : 'scrolling';
            this.tabRefSlide = numberClicks <= this.tabRefSlide ? this.tabRefSlide + 1 : numberClicks;
        };
        this.prevSlide = () => {
            const calcNumber = this.headerSlideElement?.offsetWidth / this.headerElement?.offsetWidth;
            const numberClicks = parseInt(calcNumber.toString());
            const newPosition = this.positionLeft + this.headerElement?.offsetWidth;
            this.positionLeft = newPosition > 0 ? 0 : newPosition;
            this.alignTab = newPosition > 0 ? 'left' : 'scrolling';
            this.tabRefSlide = numberClicks <= this.tabRefSlide ? this.tabRefSlide - 1 : numberClicks;
        };
        this.renderIcon = (Icon, Theme, disable) => {
            return (index.h("bds-icon", { class: { tab_group__header__itens__item__typo__disable: disable }, size: "x-small", name: Icon, theme: Theme }));
        };
        this.renderBadge = (Shape, Color, Icon, Animation, Number) => {
            return (index.h("bds-grid", { "justify-content": "center" }, index.h("bds-badge", { color: Color, icon: Icon, number: Number, shape: Shape, animation: Animation })));
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
        return (index.h(index.Host, { key: 'f7c5557018e984c0f4f38e0f9fd15ab1b7a8367e' }, index.h("div", { key: '1e2f86becc71b9f8fc16e3ee1846de9bed48a8c5', class: { tab_group: true } }, this.isSlideTabs && this.alignTab != 'left' && (index.h("bds-button-icon", { key: '042b3b1b0af96a64cc36857089f914f354554d8a', class: "tab_group__slide-button", icon: "arrow-left", size: "short", id: "bds-tabs-button-left", onClick: () => this.prevSlide(), dataTest: this.dtButtonPrev, variant: "secondary" })), index.h("div", { key: 'b7dc699964f40409408dd0c0c636f90327e9ad9f', class: { tab_group__header: true, tab_group__slide: this.isSlideTabs }, ref: this.refHeaderElement }, index.h("div", { key: 'd5ca6d63e398b91ba51b80abbd8648e9e1fa59da', class: {
                tab_group__header__itens: true,
                tab_group__slide__itens: this.isSlideTabs,
                [`tab_group__header__itens__${this.align}`]: !this.isSlideTabs,
            }, ref: this.refHeaderSlideElement, style: slidePosition }, this.internalItens &&
            this.internalItens.map((item, index$1) => {
                const bold = item.open == true ? 'bold' : 'regular';
                return (index.h("div", { class: {
                        tab_group__header__itens__item: true,
                        tab_group__header__itens__item__open: item.open,
                        tab_group__header__itens__item__disable: item.disable,
                    }, key: index$1, tabindex: "0", onClick: () => item.disable ? this.handleDisabled(item.numberElement) : this.handleClick(item.numberElement), onKeyDown: (ev) => this.handleKeyDown(ev, item) }, item.iconPosition === 'left' && item.icon
                    ? this.renderIcon(item.icon, item.iconTheme, item.disable)
                    : '', item.badgePosition === 'left' && item.badge
                    ? this.renderBadge(item.badgeShape, item.badgeColor, item.badgeIcon, item.badgeAnimation, item.badgeNumber)
                    : '', index.h("bds-typo", { class: { tab_group__header__itens__item__typo__disable: item.disable }, variant: "fs-16", bold: bold }, item.label), item.iconPosition === 'right' && item.icon
                    ? this.renderIcon(item.icon, item.iconTheme, item.disable)
                    : '', item.badgePosition === 'right' && item.badge
                    ? this.renderBadge(item.badgeShape, item.badgeColor, item.badgeIcon, item.badgeAnimation, item.badgeNumber)
                    : ''));
            }))), this.isSlideTabs && this.alignTab != 'right' && (index.h("bds-button-icon", { key: 'ded55848b9edf8abd71609d208c203083463b4f2', class: "tab_group__slide-button", icon: "arrow-right", size: "short", id: "bds-tabs-button-right", onClick: () => this.nextSlide(), dataTest: this.dtButtonNext, variant: "secondary" })), index.h("div", { key: 'd40ac23b3285160d9bbc571aee2f07b7859724c2', class: { tab_group__content: true, tab_group__scrolled: this.contentScrollable } }, index.h("slot", { key: 'abb52fefcedcc400a4680b70b634bb2e49e2b625' })))));
    }
    get element() { return index.getElement(this); }
};
BdsTabGroup.style = tabGroupCss;

exports.bds_tab_group = BdsTabGroup;
//# sourceMappingURL=bds-tab-group.entry.cjs.js.map

//# sourceMappingURL=bds-tab-group.cjs.entry.js.map