import { r as registerInstance, c as createEvent, h, g as getElement } from './index-611fd21e.js';
import { a as getHighestItem, b as gapChanged, c as getItems } from './position-element-d853cc63.js';

const carouselCss = ":root{--space-0:0px;--space-0-5:4px;--space-1:8px;--space-2:16px;--space-3:24px;--space-4:32px;--space-5:40px;--space-6:48px;--space-7:56px;--space-8:64px;--space-9:72px;--space-10:80px;--space-11:88px;--space-12:96px}.m-0{margin:var(--space-0) !important}.m-0\\.5{margin:var(--space-0-5) !important}.m-1{margin:var(--space-1) !important}.m-2{margin:var(--space-2) !important}.m-3{margin:var(--space-3) !important}.m-4{margin:var(--space-4) !important}.m-5{margin:var(--space-5) !important}.m-6{margin:var(--space-6) !important}.m-7{margin:var(--space-7) !important}.m-8{margin:var(--space-8) !important}.m-9{margin:var(--space-9) !important}.m-10{margin:var(--space-10) !important}.m-11{margin:var(--space-11) !important}.m-12{margin:var(--space-12) !important}.mx-0{margin-left:var(--space-0) !important;margin-right:var(--space-0) !important}.mx-0\\.5{margin-left:var(--space-0-5) !important;margin-right:var(--space-0-5) !important}.mx-1{margin-left:var(--space-1) !important;margin-right:var(--space-1) !important}.mx-2{margin-left:var(--space-2) !important;margin-right:var(--space-2) !important}.mx-3{margin-left:var(--space-3) !important;margin-right:var(--space-3) !important}.mx-4{margin-left:var(--space-4) !important;margin-right:var(--space-4) !important}.mx-5{margin-left:var(--space-5) !important;margin-right:var(--space-5) !important}.mx-6{margin-left:var(--space-6) !important;margin-right:var(--space-6) !important}.mx-7{margin-left:var(--space-7) !important;margin-right:var(--space-7) !important}.mx-8{margin-left:var(--space-8) !important;margin-right:var(--space-8) !important}.mx-9{margin-left:var(--space-9) !important;margin-right:var(--space-9) !important}.mx-10{margin-left:var(--space-10) !important;margin-right:var(--space-10) !important}.mx-11{margin-left:var(--space-11) !important;margin-right:var(--space-11) !important}.mx-12{margin-left:var(--space-12) !important;margin-right:var(--space-12) !important}.my-0{margin-top:var(--space-0) !important;margin-bottom:var(--space-0) !important}.my-0\\.5{margin-top:var(--space-0-5) !important;margin-bottom:var(--space-0-5) !important}.my-1{margin-top:var(--space-1) !important;margin-bottom:var(--space-1) !important}.my-2{margin-top:var(--space-2) !important;margin-bottom:var(--space-2) !important}.my-3{margin-top:var(--space-3) !important;margin-bottom:var(--space-3) !important}.my-4{margin-top:var(--space-4) !important;margin-bottom:var(--space-4) !important}.my-5{margin-top:var(--space-5) !important;margin-bottom:var(--space-5) !important}.my-6{margin-top:var(--space-6) !important;margin-bottom:var(--space-6) !important}.my-7{margin-top:var(--space-7) !important;margin-bottom:var(--space-7) !important}.my-8{margin-top:var(--space-8) !important;margin-bottom:var(--space-8) !important}.my-9{margin-top:var(--space-9) !important;margin-bottom:var(--space-9) !important}.my-10{margin-top:var(--space-10) !important;margin-bottom:var(--space-10) !important}.my-11{margin-top:var(--space-11) !important;margin-bottom:var(--space-11) !important}.my-12{margin-top:var(--space-12) !important;margin-bottom:var(--space-12) !important}.mt-0{margin-top:var(--space-0) !important}.mt-0\\.5{margin-top:var(--space-0-5) !important}.mt-1{margin-top:var(--space-1) !important}.mt-2{margin-top:var(--space-2) !important}.mt-3{margin-top:var(--space-3) !important}.mt-4{margin-top:var(--space-4) !important}.mt-5{margin-top:var(--space-5) !important}.mt-6{margin-top:var(--space-6) !important}.mt-7{margin-top:var(--space-7) !important}.mt-8{margin-top:var(--space-8) !important}.mt-9{margin-top:var(--space-9) !important}.mt-10{margin-top:var(--space-10) !important}.mt-11{margin-top:var(--space-11) !important}.mt-12{margin-top:var(--space-12) !important}.mr-0{margin-right:var(--space-0) !important}.mr-0\\.5{margin-right:var(--space-0-5) !important}.mr-1{margin-right:var(--space-1) !important}.mr-2{margin-right:var(--space-2) !important}.mr-3{margin-right:var(--space-3) !important}.mr-4{margin-right:var(--space-4) !important}.mr-5{margin-right:var(--space-5) !important}.mr-6{margin-right:var(--space-6) !important}.mr-7{margin-right:var(--space-7) !important}.mr-8{margin-right:var(--space-8) !important}.mr-9{margin-right:var(--space-9) !important}.mr-10{margin-right:var(--space-10) !important}.mr-11{margin-right:var(--space-11) !important}.mr-12{margin-right:var(--space-12) !important}.mb-0{margin-bottom:var(--space-0) !important}.mb-0\\.5{margin-bottom:var(--space-0-5) !important}.mb-1{margin-bottom:var(--space-1) !important}.mb-2{margin-bottom:var(--space-2) !important}.mb-3{margin-bottom:var(--space-3) !important}.mb-4{margin-bottom:var(--space-4) !important}.mb-5{margin-bottom:var(--space-5) !important}.mb-6{margin-bottom:var(--space-6) !important}.mb-7{margin-bottom:var(--space-7) !important}.mb-8{margin-bottom:var(--space-8) !important}.mb-9{margin-bottom:var(--space-9) !important}.mb-10{margin-bottom:var(--space-10) !important}.mb-11{margin-bottom:var(--space-11) !important}.mb-12{margin-bottom:var(--space-12) !important}.ml-0{margin-left:var(--space-0) !important}.ml-0\\.5{margin-left:var(--space-0-5) !important}.ml-1{margin-left:var(--space-1) !important}.ml-2{margin-left:var(--space-2) !important}.ml-3{margin-left:var(--space-3) !important}.ml-4{margin-left:var(--space-4) !important}.ml-5{margin-left:var(--space-5) !important}.ml-6{margin-left:var(--space-6) !important}.ml-7{margin-left:var(--space-7) !important}.ml-8{margin-left:var(--space-8) !important}.ml-9{margin-left:var(--space-9) !important}.ml-10{margin-left:var(--space-10) !important}.ml-11{margin-left:var(--space-11) !important}.ml-12{margin-left:var(--space-12) !important}.p-0{padding:var(--space-0) !important}.p-0\\.5{padding:var(--space-0-5) !important}.p-1{padding:var(--space-1) !important}.p-2{padding:var(--space-2) !important}.p-3{padding:var(--space-3) !important}.p-4{padding:var(--space-4) !important}.p-5{padding:var(--space-5) !important}.p-6{padding:var(--space-6) !important}.p-7{padding:var(--space-7) !important}.p-8{padding:var(--space-8) !important}.p-9{padding:var(--space-9) !important}.p-10{padding:var(--space-10) !important}.p-11{padding:var(--space-11) !important}.p-12{padding:var(--space-12) !important}.px-0{padding-left:var(--space-0) !important;padding-right:var(--space-0) !important}.px-0\\.5{padding-left:var(--space-0-5) !important;padding-right:var(--space-0-5) !important}.px-1{padding-left:var(--space-1) !important;padding-right:var(--space-1) !important}.px-2{padding-left:var(--space-2) !important;padding-right:var(--space-2) !important}.px-3{padding-left:var(--space-3) !important;padding-right:var(--space-3) !important}.px-4{padding-left:var(--space-4) !important;padding-right:var(--space-4) !important}.px-5{padding-left:var(--space-5) !important;padding-right:var(--space-5) !important}.px-6{padding-left:var(--space-6) !important;padding-right:var(--space-6) !important}.px-7{padding-left:var(--space-7) !important;padding-right:var(--space-7) !important}.px-8{padding-left:var(--space-8) !important;padding-right:var(--space-8) !important}.px-9{padding-left:var(--space-9) !important;padding-right:var(--space-9) !important}.px-10{padding-left:var(--space-10) !important;padding-right:var(--space-10) !important}.px-11{padding-left:var(--space-11) !important;padding-right:var(--space-11) !important}.px-12{padding-left:var(--space-12) !important;padding-right:var(--space-12) !important}.py-0{padding-top:var(--space-0) !important;padding-bottom:var(--space-0) !important}.py-0\\.5{padding-top:var(--space-0-5) !important;padding-bottom:var(--space-0-5) !important}.py-1{padding-top:var(--space-1) !important;padding-bottom:var(--space-1) !important}.py-2{padding-top:var(--space-2) !important;padding-bottom:var(--space-2) !important}.py-3{padding-top:var(--space-3) !important;padding-bottom:var(--space-3) !important}.py-4{padding-top:var(--space-4) !important;padding-bottom:var(--space-4) !important}.py-5{padding-top:var(--space-5) !important;padding-bottom:var(--space-5) !important}.py-6{padding-top:var(--space-6) !important;padding-bottom:var(--space-6) !important}.py-7{padding-top:var(--space-7) !important;padding-bottom:var(--space-7) !important}.py-8{padding-top:var(--space-8) !important;padding-bottom:var(--space-8) !important}.py-9{padding-top:var(--space-9) !important;padding-bottom:var(--space-9) !important}.py-10{padding-top:var(--space-10) !important;padding-bottom:var(--space-10) !important}.py-11{padding-top:var(--space-11) !important;padding-bottom:var(--space-11) !important}.py-12{padding-top:var(--space-12) !important;padding-bottom:var(--space-12) !important}.pt-0{padding-top:var(--space-0) !important}.pt-0\\.5{padding-top:var(--space-0-5) !important}.pt-1{padding-top:var(--space-1) !important}.pt-2{padding-top:var(--space-2) !important}.pt-3{padding-top:var(--space-3) !important}.pt-4{padding-top:var(--space-4) !important}.pt-5{padding-top:var(--space-5) !important}.pt-6{padding-top:var(--space-6) !important}.pt-7{padding-top:var(--space-7) !important}.pt-8{padding-top:var(--space-8) !important}.pt-9{padding-top:var(--space-9) !important}.pt-10{padding-top:var(--space-10) !important}.pt-11{padding-top:var(--space-11) !important}.pt-12{padding-top:var(--space-12) !important}.pr-0{padding-right:var(--space-0) !important}.pr-0\\.5{padding-right:var(--space-0-5) !important}.pr-1{padding-right:var(--space-1) !important}.pr-2{padding-right:var(--space-2) !important}.pr-3{padding-right:var(--space-3) !important}.pr-4{padding-right:var(--space-4) !important}.pr-5{padding-right:var(--space-5) !important}.pr-6{padding-right:var(--space-6) !important}.pr-7{padding-right:var(--space-7) !important}.pr-8{padding-right:var(--space-8) !important}.pr-9{padding-right:var(--space-9) !important}.pr-10{padding-right:var(--space-10) !important}.pr-11{padding-right:var(--space-11) !important}.pr-12{padding-right:var(--space-12) !important}.pb-0{padding-bottom:var(--space-0) !important}.pb-0\\.5{padding-bottom:var(--space-0-5) !important}.pb-1{padding-bottom:var(--space-1) !important}.pb-2{padding-bottom:var(--space-2) !important}.pb-3{padding-bottom:var(--space-3) !important}.pb-4{padding-bottom:var(--space-4) !important}.pb-5{padding-bottom:var(--space-5) !important}.pb-6{padding-bottom:var(--space-6) !important}.pb-7{padding-bottom:var(--space-7) !important}.pb-8{padding-bottom:var(--space-8) !important}.pb-9{padding-bottom:var(--space-9) !important}.pb-10{padding-bottom:var(--space-10) !important}.pb-11{padding-bottom:var(--space-11) !important}.pb-12{padding-bottom:var(--space-12) !important}.pl-0{padding-left:var(--space-0) !important}.pl-0\\.5{padding-left:var(--space-0-5) !important}.pl-1{padding-left:var(--space-1) !important}.pl-2{padding-left:var(--space-2) !important}.pl-3{padding-left:var(--space-3) !important}.pl-4{padding-left:var(--space-4) !important}.pl-5{padding-left:var(--space-5) !important}.pl-6{padding-left:var(--space-6) !important}.pl-7{padding-left:var(--space-7) !important}.pl-8{padding-left:var(--space-8) !important}.pl-9{padding-left:var(--space-9) !important}.pl-10{padding-left:var(--space-10) !important}.pl-11{padding-left:var(--space-11) !important}.pl-12{padding-left:var(--space-12) !important}:host{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;position:relative}.carousel{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;max-width:1920px;position:relative}.carousel_slide{width:100%;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 48px}.carousel_slide::after{content:\"\";position:absolute;inset:-8px;border:2px solid transparent;border-radius:4px;pointer-events:none}.carousel_slide:focus-visible{outline:none}.carousel_slide:focus-visible::after{border-color:var(--color-focus, #c226fb)}.carousel_slide_fullwidth{padding:0}.carousel_slide_frame{width:100%;display:-ms-flexbox;display:flex;overflow:hidden;-webkit-transition:height ease-in-out 0.5s;-moz-transition:height ease-in-out 0.5s;transition:height ease-in-out 0.5s}.carousel_slide_frame_loading{opacity:0;pointer-events:none}.carousel_slide_frame *{-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;-webkit-user-drag:none;-khtml-user-drag:none;-moz-user-drag:none;-o-user-drag:none}.carousel_slide_frame *[slot=loop]{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:relative;right:0;-webkit-transition:right ease-in-out 0.75s;-moz-transition:right ease-in-out 0.75s;transition:right ease-in-out 0.75s}.carousel_slide_frame_repeater{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:relative;right:0;-webkit-transition:right ease-in-out 0.75s;-moz-transition:right ease-in-out 0.75s;transition:right ease-in-out 0.75s}.carousel_slide_loading{opacity:0;pointer-events:none;position:absolute;inset:0}.carousel_slide_loading_visible{opacity:1;pointer-events:all}.carousel_loading_bar{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 60px;margin-top:8px}.carousel_loading_bar_fullwidth{padding:0 4px}.carousel_buttons{position:absolute;width:100%;height:0px;top:calc(50% - 20px);left:0;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-sizing:border-box;box-sizing:border-box}.carousel_buttons_fullwidth{padding:0 8px}.carousel_bullets{position:relative;margin-top:8px}.carousel_bullets_inside{position:absolute;bottom:0px;width:100%;margin:0;padding:0px 16px;-webkit-box-sizing:border-box;box-sizing:border-box}.carousel_bullets_card{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;display:-ms-inline-flexbox;display:inline-flex;gap:8px}.carousel_bullets_card_inside{border-top-left-radius:8px;border-top-right-radius:8px;padding:8px;background-color:var(--color-surface-0, white)}.carousel_bullets_item{width:16px;height:16px;border:2px solid var(--color-border-1, rgba(0, 0, 0, 0.2));border-radius:50%;position:relative;-webkit-transform:rotate(45deg);transform:rotate(45deg);cursor:pointer}.carousel_bullets_item::before{content:\"\";position:absolute;inset:4px;border-radius:50%}.carousel_bullets_item::after{content:\"\";position:absolute;inset:-8px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);border:2px solid transparent;border-radius:4px}.carousel_bullets_item:focus-visible{outline:none}.carousel_bullets_item:focus-visible::after{border-color:var(--color-focus, #c226fb)}.carousel_bullets_item_active::before{background-color:var(--color-primary, #1e6bf1)}.carousel_bullets_item_conclude{position:absolute;inset:-2px;border-radius:50%;border:2px solid var(--color-content-disable, #595959)}.carousel_bullets_item_loader{position:absolute;inset:-2px;border-radius:50%;border:2px solid var(--color-primary, #1e6bf1);-webkit-animation:l18 linear;animation:l18 linear}@-webkit-keyframes l18{0%{-webkit-clip-path:polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);clip-path:polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0)}25%{-webkit-clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0)}50%{-webkit-clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%)}75%{-webkit-clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%)}100%{-webkit-clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0)}}@keyframes l18{0%{-webkit-clip-path:polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);clip-path:polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0)}25%{-webkit-clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0)}50%{-webkit-clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%)}75%{-webkit-clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%)}100%{-webkit-clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0)}}";

const BdsCarousel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.bdsChangeCarousel = createEvent(this, "bdsChangeCarousel", 7);
    this.itemsElement = null;
    this.bulletElement = null;
    this.bulletElements = [];
    this.setInternalItens = (ItensElement) => {
      const floor = Math.floor(ItensElement.length / this.slidePerPage);
      const numberOfColumns = ItensElement.length / this.slidePerPage;
      const newItens = getItems(numberOfColumns);
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
        heightFrame = getHighestItem(getVisibleItens)[0];
      }
      else {
        heightFrame = elementActive.offsetHeight;
      }
      this.frame.style.height = `${heightFrame}px`;
    };
    this.refFrame = (el) => {
      this.frame = el;
    };
    this.refThemeProviderArrows = (el) => {
      this.themeProviderArrows = el;
    };
    this.refFrameRepeater = (el) => {
      this.frameRepeater = el;
    };
    this.refBulletElement = (el) => {
      if (el) {
        this.bulletElement = el; // Keep the current behavior
        this.bulletElements.push(el); // Store all bullet elements
      }
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
    this.setKeydownNavigation = (ev) => {
      if (ev.key === 'Tab') {
        if (this.bulletElements.length > 0) {
          this.bulletElements[0].focus();
        }
        else if (this.bulletElement) {
          this.bulletElement.focus();
        }
      }
      if (ev.key === 'ArrowRight') {
        this.nextSlide();
      }
      if (ev.key === 'ArrowLeft') {
        this.prevSlide();
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
    this.autoplayState = 'running';
    this.autoplay = false;
    this.autoplayTimeout = 5000;
    this.autoplayHoverPause = false;
    this.autoHeight = false;
    this.bullets = 'outside';
    this.bulletsPosition = 'center';
    this.infiniteLoop = false;
    this.arrows = 'outside';
    this.slidePerPage = 1;
    this.gap = 'none';
    this.grab = true;
    this.loading = false;
    this.dtSlideContent = null;
    this.dtButtonPrev = null;
    this.dtButtonNext = null;
    this.secondsLimit = this.autoplayTimeout / 1000;
  }
  componentWillLoad() {
    this.itemsElement = this.element.getElementsByTagName('bds-carousel-item');
    this.setInternalItens(Array.from(this.itemsElement));
    if (this.bullets == true) {
      this.bullets = 'outside';
    }
    if (this.bullets == false) {
      this.bullets = 'none';
    }
  }
  componentDidRender() {
    if (!this.loading) {
      if (this.gap != 'none') {
        this.frame.style.width = `calc(100% + ${gapChanged(this.gap)}px)`;
        this.frame.style.marginLeft = `-${gapChanged(this.gap) / 2}px`;
      }
      for (let i = 0; i < this.itemsElement.length; i++) {
        const widthFrame = this.frame.offsetWidth >= 1920 ? 1920 : this.frame.offsetWidth;
        this.itemsElement[i].style.width = `${widthFrame / this.slidePerPage}px`;
        this.itemsElement[i].style.padding = `0 ${gapChanged(this.gap) / 2}px`;
      }
      if (this.autoHeight)
        this.updateHeight(Array.from(this.itemsElement));
    }
    if (this.arrows == 'inside') {
      const firstItemActived = (this.itemActivated - 1) * (this.itemsElement.length / this.internalItens.length) + 1;
      this.themeProviderArrows.theme =
        this.slidePerPage <= 1
          ? this.itemsElement[this.itemActivated - 1].theme
          : this.itemsElement[Math.round(firstItemActived)].theme;
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
    if (this.internalItens != undefined) {
      if (this.isWhole > 0) {
        const newItem = {
          id: this.internalItens?.length + 1,
          label: `Frame - ${this.internalItens?.length + 1}`,
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
    this.autoplayState = 'running';
  }
  async pauseAutoplay() {
    clearInterval(this.incrementSeconds);
    this.autoplayState = 'paused';
  }
  async runAutoplay() {
    this.startCountSeconds();
    this.autoplayState = 'running';
  }
  render() {
    // Reset bullet elements array at start of render
    this.bulletElements = [];
    const ThemeOrDivArrows = this.arrows == 'inside' ? 'bds-theme-provider' : 'div';
    const justifybulletsPosition = this.bulletsPosition == 'center'
      ? 'center'
      : this.bulletsPosition == 'right'
        ? 'flex-end'
        : this.bulletsPosition == 'left' && 'flex-start';
    return (h("div", { class: { carousel: true } }, h("div", { class: {
        carousel_slide: true,
        carousel_slide_fullwidth: this.arrows != 'outside',
        [`carousel_slide_state_${this.autoplayState}`]: this.autoplay,
      }, tabindex: "0", onKeyDown: (ev) => this.setKeydownNavigation(ev), "data-test": this.dtSlideContent }, h("div", { ref: (el) => this.refFrame(el), class: { carousel_slide_frame: true, carousel_slide_frame_loading: this.loading }, onMouseOver: () => this.onMouseOver(), onMouseOut: () => this.onMouseOut(), onMouseDown: (ev) => this.onMouseDown(ev), onMouseEnter: () => this.onMouseEnter(), onMouseUp: () => this.onMouseUp(), onMouseMove: (ev) => this.onMouseMove(ev) }, h("div", { ref: (el) => this.refFrameRepeater(el), class: { carousel_slide_frame_repeater: true } }, h("slot", null))), h("bds-grid", { class: { carousel_slide_loading: true, carousel_slide_loading_visible: this.loading } }, h("bds-skeleton", { height: "100%", shape: "square", width: "100%" })), this.arrows != 'none' && !this.loading && (h(ThemeOrDivArrows, { ref: (el) => this.refThemeProviderArrows(el), class: {
        carousel_buttons: true,
        carousel_buttons_fullwidth: this.arrows != 'outside',
      } }, h("bds-button", { variant: "text", iconLeft: "arrow-left", color: "content", onBdsClick: () => this.prevSlide(), disabled: !this.infiniteLoop && this.itemActivated <= 1, dataTest: this.dtButtonPrev }), h("bds-button", { variant: "text", iconLeft: "arrow-right", color: "content", onBdsClick: () => this.nextSlide(), disabled: !this.infiniteLoop && this.itemActivated >= this.internalItens.length, dataTest: this.dtButtonNext })))), this.internalItens.length > 1 && this.bullets != 'none' && (h("div", { class: {
        carousel_bullets: true,
        carousel_bullets_inside: this.bullets == 'inside',
      } }, this.loading && this.bullets != 'inside' ? (h("bds-grid", { xxs: "12", gap: "1", "justify-content": justifybulletsPosition, padding: this.arrows === 'outside' ? 'x-7' : 'none' }, h("bds-skeleton", { height: "16px", width: "16px", shape: "circle" }), h("bds-skeleton", { height: "16px", width: "16px", shape: "circle" }), h("bds-skeleton", { height: "16px", width: "16px", shape: "circle" }))) : (this.internalItens && (h("bds-grid", { xxs: "12", "justify-content": justifybulletsPosition, padding: this.arrows === 'outside' ? 'x-7' : 'none' }, h("div", { class: {
        carousel_bullets_card: true,
        carousel_bullets_card_inside: this.bullets == 'inside',
      } }, this.internalItens.map((item, index) => (h("div", { key: index, ref: (el) => this.refBulletElement(el), class: {
        carousel_bullets_item: true,
        carousel_bullets_item_active: item.id == this.itemActivated,
      }, tabindex: "0", onClick: () => this.setActivated(item.id) }, item.id < this.itemActivated && this.autoplay && (h("div", { class: { carousel_bullets_item_conclude: true } })), item.id == this.itemActivated && this.autoplay && (h("div", { class: { carousel_bullets_item_loader: true }, style: {
        animationDuration: `${this.autoplayTimeout / 1000 - 0.1}s`,
        animationPlayState: this.autoplayState,
      } }))))))))))), h("slot", { name: "after" })));
  }
  get element() { return getElement(this); }
  static get watchers() { return {
    "itemActivated": ["itemActivatedChanged"],
    "autoplayTimeout": ["autoplayTimeoutChanged"],
    "seconds": ["secondsChanged"],
    "isWhole": ["isWholeChanged"]
  }; }
};
BdsCarousel.style = carouselCss;

export { BdsCarousel as bds_carousel };
