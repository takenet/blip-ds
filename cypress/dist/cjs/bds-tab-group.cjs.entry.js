'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6a53aecf.js');

const tabGroupCss = ":host{display:block;width:100%}.tab_group{width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative}.tab_group__header{padding:4px 16px;overflow:hidden}.tab_group__header__itens{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;width:-webkit-max-content;width:-moz-max-content;width:max-content;gap:32px;margin:auto}.tab_group__header__itens__center{-ms-flex-pack:center;justify-content:center;margin:auto}.tab_group__header__itens__right{-ms-flex-pack:right;justify-content:right;margin:0 0 0 auto}.tab_group__header__itens__left{-ms-flex-pack:left;justify-content:left;margin:0 auto 0 0}.tab_group__header__itens__item{cursor:pointer;height:46px;gap:4px;width:auto;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;border-bottom:2px solid transparent;position:relative}.tab_group__header__itens__item__typo{color:var(--color-content-disable, #636363)}.tab_group__header__itens__item__typo__disable{color:var(--color-content-ghost, #8c8c8c)}.tab_group__header__itens__item::before{content:\"\";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px}.tab_group__header__itens__item:focus-visible{outline:none}.tab_group__header__itens__item:focus-visible::before{border-color:var(--color-focus, #c226fb)}.tab_group__header__itens__item__open{color:var(--color-content-default, #454545);border-color:var(--color-primary, #1e6bf1)}.tab_group__header__itens__item__disable{cursor:no-drop}.tab_group__slide{position:relative;overflow:hidden;padding:0 16px;height:54px;margin-left:56px;margin-right:56px}.tab_group__slide-button{position:absolute;z-index:1;background-color:var(--color-surface-1, #f6f6f6)}.tab_group__slide-button[icon=arrow-left]{left:0}.tab_group__slide-button[icon=arrow-right]{right:0}.tab_group__slide__itens{position:absolute;left:56px;width:-webkit-max-content;width:-moz-max-content;width:max-content;height:48px;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:center;justify-content:center;padding:4px;gap:32px;-webkit-transition:left 0.5s;-moz-transition:left 0.5s;transition:left 0.5s}.tab_group__content{height:100%}.tab_group__scrolled{-ms-flex-negative:999;flex-shrink:999;overflow:auto}.tab_group__scrolled::-webkit-scrollbar{width:16px;background-color:transparent}.tab_group__scrolled::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}";

const BdsTabGroup = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.bdsTabChange = index.createEvent(this, "bdsTabChange", 7);
    this.bdsTabDisabled = index.createEvent(this, "bdsTabDisabled", 7);
    this.tabItensElement = null;
    this.tabItensSlideElement = null;
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
      return (index.h("bds-icon", { class: { tab_group__header__itens__item__typo__disable: disable }, size: "x-small", name: Icon, theme: Theme }));
    };
    this.renderBadge = (Shape, Color, Icon, Animation, Number) => {
      return (index.h("bds-grid", { "justify-content": "center" }, index.h("bds-badge", { color: Color, icon: Icon, number: Number, shape: Shape, animation: Animation })));
    };
    this.internalItens = undefined;
    this.isSlideTabs = false;
    this.alignTab = 'left';
    this.tabRefSlide = 0;
    this.positionLeft = 0;
    this.contentScrollable = true;
    this.align = 'center';
    this.dtButtonPrev = null;
    this.dtButtonNext = null;
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
    return (index.h(index.Host, null, index.h("div", { class: { tab_group: true } }, this.isSlideTabs && this.alignTab != 'left' && (index.h("bds-button-icon", { class: "tab_group__slide-button", icon: "arrow-left", size: "short", id: "bds-tabs-button-left", onClick: () => this.prevSlide(), dataTest: this.dtButtonPrev, variant: "secondary" })), index.h("div", { class: { tab_group__header: true, tab_group__slide: this.isSlideTabs }, ref: this.refHeaderElement }, index.h("div", { class: {
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
      }))), this.isSlideTabs && this.alignTab != 'right' && (index.h("bds-button-icon", { class: "tab_group__slide-button", icon: "arrow-right", size: "short", id: "bds-tabs-button-right", onClick: () => this.nextSlide(), dataTest: this.dtButtonNext, variant: "secondary" })), index.h("div", { class: { tab_group__content: true, tab_group__scrolled: this.contentScrollable } }, index.h("slot", null)))));
  }
  get element() { return index.getElement(this); }
};
BdsTabGroup.style = tabGroupCss;

exports.bds_tab_group = BdsTabGroup;
