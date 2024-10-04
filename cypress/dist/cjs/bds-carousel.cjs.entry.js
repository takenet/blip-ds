'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6a53aecf.js');
const positionElement = require('./position-element-c9b15fa1.js');

const carouselCss = ":host{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;position:relative}.carousel{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;max-width:1920px;position:relative}.carousel_slide{width:100%;position:relative;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 56px}.carousel_slide_fullwidth{padding:0}.carousel_slide_frame{width:100%;display:-ms-flexbox;display:flex;overflow:hidden;-webkit-transition:height ease-in-out 0.5s;-moz-transition:height ease-in-out 0.5s;transition:height ease-in-out 0.5s}.carousel_slide_frame_loading{opacity:0;pointer-events:none}.carousel_slide_frame *{-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;-webkit-user-drag:none;-khtml-user-drag:none;-moz-user-drag:none;-o-user-drag:none}.carousel_slide_frame *[slot=loop]{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:relative;right:0;-webkit-transition:right ease-in-out 0.75s;-moz-transition:right ease-in-out 0.75s;transition:right ease-in-out 0.75s}.carousel_slide_frame_repeater{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:relative;right:0;-webkit-transition:right ease-in-out 0.75s;-moz-transition:right ease-in-out 0.75s;transition:right ease-in-out 0.75s}.carousel_slide_loading{opacity:0;pointer-events:none;position:absolute;inset:0}.carousel_slide_loading_visible{opacity:1;pointer-events:all}.carousel_loading_bar{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 60px;margin-top:8px}.carousel_loading_bar_fullwidth{padding:0 4px}.carousel_buttons{position:absolute;width:100%;height:0px;top:calc(50% - 20px);left:0;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-sizing:border-box;box-sizing:border-box}.carousel_buttons_fullwidth{padding:0 16px}.carousel_bullets{margin-top:16px;margin-bottom:16px}";

const BdsCarousel = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.bdsChangeCarousel = index.createEvent(this, "bdsChangeCarousel", 7);
    this.itemsElement = null;
    this.setInternalItens = (ItensElement) => {
      const floor = Math.floor(ItensElement.length / this.slidePerPage);
      const numberOfColumns = ItensElement.length / this.slidePerPage;
      const newItens = positionElement.getItems(numberOfColumns);
      this.internalItens = newItens;
      this.isWhole = ItensElement.length - this.slidePerPage * floor;
    };
    this.startCountSeconds = () => {
      if (this.autoplay) {
        this.incrementSeconds = setInterval(() => {
          this.seconds += 0.1;
        }, 100);
      }
    };
    this.updateHeight = (itemsElement) => {
      const elementActive = itemsElement[this.itemActivated * this.slidePerPage - this.slidePerPage];
      let heightFrame = 240;
      if (this.slidePerPage > 1) {
        const getVisibleItens = this.isWhole > 0 && this.itemActivated == this.internalItens.length
          ? itemsElement.slice(this.internalItens.length - this.internalItens.length - this.slidePerPage, this.itemActivated * this.slidePerPage)
          : itemsElement.slice(this.itemActivated * this.slidePerPage - this.slidePerPage, this.itemActivated * this.slidePerPage);
        heightFrame = positionElement.getHighestItem(getVisibleItens)[0];
      }
      else {
        heightFrame = elementActive.offsetHeight;
      }
      this.frame.style.height = `${heightFrame}px`;
    };
    this.refFrame = (el) => {
      this.frame = el;
    };
    this.refFrameRepeater = (el) => {
      this.frameRepeater = el;
    };
    this.onMouseOver = () => {
      if (this.autoplayHoverPause) {
        this.pauseAutoplay();
      }
    };
    this.onMouseOut = () => {
      if (this.autoplayHoverPause) {
        this.runAutoplay();
      }
    };
    this.onMouseDown = (ev) => {
      if (this.grab) {
        this.framePressed = true;
        const offsetFrame = this.frame.offsetLeft + this.element.offsetLeft;
        this.startX = ev.pageX - offsetFrame;
        this.endX = ev.pageX - offsetFrame;
        this.frame.style.cursor = 'grabbing';
      }
    };
    this.onMouseEnter = () => {
      if (this.grab) {
        this.frame.style.cursor = 'grab';
      }
    };
    this.onMouseUp = () => {
      if (this.grab) {
        this.framePressed = false;
        this.frame.style.cursor = 'grab';
        this.boundItems();
        if (this.autoplayHoverPause) {
          this.pauseAutoplay();
        }
      }
    };
    this.onMouseMove = (ev) => {
      if (this.grab) {
        if (!this.framePressed)
          return;
        ev.preventDefault();
        const offsetFrame = this.frame.offsetLeft + this.element.offsetLeft;
        this.endX = ev.pageX - offsetFrame;
      }
    };
    this.boundItems = () => {
      if (this.endX < this.startX) {
        this.nextSlide();
        this.seconds = 0;
      }
      else if (this.endX > this.startX) {
        this.prevSlide();
        this.seconds = 0;
      }
    };
    this.itemActivated = 1;
    this.seconds = 0;
    this.internalItens = undefined;
    this.isWhole = 0;
    this.heightCarousel = 240;
    this.framePressed = false;
    this.startX = undefined;
    this.endX = undefined;
    this.autoplay = false;
    this.autoplayTimeout = 5000;
    this.autoplayHoverPause = false;
    this.autoHeight = false;
    this.bullets = true;
    this.infiniteLoop = false;
    this.arrows = 'outside';
    this.slidePerPage = 1;
    this.gap = 'none';
    this.grab = true;
    this.loading = false;
    this.secondsLimit = this.autoplayTimeout / 1000;
  }
  componentWillLoad() {
    this.itemsElement = this.element.getElementsByTagName('bds-carousel-item');
    this.setInternalItens(Array.from(this.itemsElement));
  }
  componentDidRender() {
    if (!this.loading) {
      if (this.gap != 'none') {
        this.frame.style.width = `calc(100% + ${positionElement.gapChanged(this.gap)}px)`;
        this.frame.style.marginLeft = `-${positionElement.gapChanged(this.gap) / 2}px`;
      }
      for (let i = 0; i < this.itemsElement.length; i++) {
        const widthFrame = this.frame.offsetWidth >= 1920 ? 1920 : this.frame.offsetWidth;
        this.itemsElement[i].style.width = `${widthFrame / this.slidePerPage}px`;
        this.itemsElement[i].style.padding = `0 ${positionElement.gapChanged(this.gap) / 2}px`;
      }
      if (this.autoHeight)
        this.updateHeight(Array.from(this.itemsElement));
    }
  }
  componentDidLoad() {
    this.startCountSeconds();
  }
  itemActivatedChanged() {
    const currentItemSelected = this.internalItens.find((item) => item.id === this.itemActivated);
    const slideFrame = !this.frame ? 0 : this.frame.offsetWidth * (this.itemActivated - 1);
    if (this.frameRepeater) {
      if (currentItemSelected.isWhole) {
        const isWholeWidth = this.itemsElement[1].offsetWidth * (this.slidePerPage - this.isWhole);
        this.frameRepeater.style.right = `${slideFrame - isWholeWidth}px`;
      }
      else {
        this.frameRepeater.style.right = `${slideFrame}px`;
      }
    }
    this.bdsChangeCarousel.emit({ value: currentItemSelected });
  }
  autoplayTimeoutChanged() {
    this.secondsLimit = this.autoplayTimeout / 1000;
  }
  secondsChanged() {
    if (this.seconds >= this.secondsLimit) {
      this.nextSlide();
      this.seconds = 0;
    }
  }
  isWholeChanged() {
    var _a, _b;
    if (this.internalItens != undefined) {
      if (this.isWhole > 0) {
        const newItem = {
          id: ((_a = this.internalItens) === null || _a === void 0 ? void 0 : _a.length) + 1,
          label: `Frame - ${((_b = this.internalItens) === null || _b === void 0 ? void 0 : _b.length) + 1}`,
          isWhole: true,
        };
        this.internalItens = [...this.internalItens, newItem];
      }
    }
  }
  async buildCarousel() {
    this.itemsElement = this.element.getElementsByTagName('bds-carousel-item');
    this.loading = true;
    setTimeout(() => (this.setInternalItens(Array.from(this.itemsElement)), (this.loading = false), this.setActivated(1)), 1000);
  }
  async nextSlide() {
    if (this.itemActivated == this.internalItens.length) {
      if (this.infiniteLoop || this.autoplay) {
        this.itemActivated = 1;
      }
      else {
        this.itemActivated = this.itemActivated;
      }
    }
    else {
      this.itemActivated = this.itemActivated + 1;
    }
    clearInterval(this.incrementSeconds);
    this.seconds = 0;
    this.startCountSeconds();
  }
  async prevSlide() {
    if (this.itemActivated == 1) {
      if (this.infiniteLoop || this.autoplay) {
        this.itemActivated = this.internalItens.length;
      }
      else {
        this.itemActivated = this.itemActivated;
      }
    }
    else {
      this.itemActivated = this.itemActivated - 1;
    }
    clearInterval(this.incrementSeconds);
    this.seconds = 0;
    this.startCountSeconds();
  }
  async setActivated(item) {
    this.itemActivated = item;
    clearInterval(this.incrementSeconds);
    this.seconds = 0;
    this.startCountSeconds();
  }
  async pauseAutoplay() {
    clearInterval(this.incrementSeconds);
  }
  async runAutoplay() {
    this.startCountSeconds();
  }
  render() {
    return (index.h("div", { class: { carousel: true } }, index.h("div", { class: { carousel_slide: true, carousel_slide_fullwidth: this.arrows != 'outside' } }, index.h("div", { ref: (el) => this.refFrame(el), class: { carousel_slide_frame: true, carousel_slide_frame_loading: this.loading }, onMouseOver: () => this.onMouseOver(), onMouseOut: () => this.onMouseOut(), onMouseDown: (ev) => this.onMouseDown(ev), onMouseEnter: () => this.onMouseEnter(), onMouseUp: () => this.onMouseUp(), onMouseMove: (ev) => this.onMouseMove(ev), tabindex: "0" }, index.h("div", { ref: (el) => this.refFrameRepeater(el), class: { carousel_slide_frame_repeater: true }, tabindex: "0", role: "tabpanel" }, index.h("slot", null))), index.h("bds-grid", { class: { carousel_slide_loading: true, carousel_slide_loading_visible: this.loading } }, index.h("bds-skeleton", { height: "100%", shape: "square", width: "100%" })), this.arrows != 'none' && !this.loading && (index.h("div", { class: { carousel_buttons: true, carousel_buttons_fullwidth: this.arrows == 'inside' } }, index.h("bds-button-icon", { variant: "tertiary", icon: "arrow-left", size: "short", onBdsClick: () => this.prevSlide(), disabled: !this.infiniteLoop && this.itemActivated <= 1 }), index.h("bds-button-icon", { variant: "tertiary", icon: "arrow-right", size: "short", onBdsClick: () => this.nextSlide(), disabled: !this.infiniteLoop && this.itemActivated >= this.internalItens.length })))), this.autoplay &&
      (this.loading ? (index.h("bds-skeleton", { class: { carousel_loading_bar: true, carousel_loading_bar_fullwidth: this.arrows != 'outside' }, height: "8px", width: "100%", shape: "square" })) : (index.h("bds-loading-bar", { class: { carousel_loading_bar: true, carousel_loading_bar_fullwidth: this.arrows != 'outside' }, percent: (this.seconds * 100) / this.secondsLimit, size: "small" }))), this.bullets && (index.h("div", { class: { carousel_bullets: true } }, this.loading ? (index.h("bds-grid", { gap: "2", "justify-content": "center" }, index.h("bds-skeleton", { height: "24px", width: "24px", shape: "circle" }), index.h("bds-skeleton", { height: "24px", width: "24px", shape: "circle" }), index.h("bds-skeleton", { height: "24px", width: "24px", shape: "circle" }))) : (this.internalItens && (index.h("bds-radio-group", null, index.h("bds-grid", { gap: "2", "justify-content": "center" }, this.internalItens.map((item, index$1) => (index.h("bds-radio", { key: index$1, checked: item.id == this.itemActivated, value: item.id.toString(), onBdsClickChange: () => this.setActivated(item.id) }))))))))), index.h("slot", { name: "after" })));
  }
  get element() { return index.getElement(this); }
  static get watchers() { return {
    "itemActivated": ["itemActivatedChanged"],
    "autoplayTimeout": ["autoplayTimeoutChanged"],
    "seconds": ["secondsChanged"],
    "isWhole": ["isWholeChanged"]
  }; }
};
BdsCarousel.style = carouselCss;

exports.bds_carousel = BdsCarousel;
