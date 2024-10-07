import { r as registerInstance, h } from './index-611fd21e.js';

const carouselCss = ":host{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;position:relative}.carousel{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;max-width:1920px;position:relative}.carousel_slide{width:100%;position:relative;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 56px}.carousel_slide_fullwidth{padding:0}.carousel_slide_frame{width:100%;display:-ms-flexbox;display:flex;overflow:hidden;-webkit-transition:height ease-in-out 0.5s;-moz-transition:height ease-in-out 0.5s;transition:height ease-in-out 0.5s}.carousel_slide_frame_loading{opacity:0;pointer-events:none}.carousel_slide_frame *{-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;-webkit-user-drag:none;-khtml-user-drag:none;-moz-user-drag:none;-o-user-drag:none}.carousel_slide_frame *[slot=loop]{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:relative;right:0;-webkit-transition:right ease-in-out 0.75s;-moz-transition:right ease-in-out 0.75s;transition:right ease-in-out 0.75s}.carousel_slide_frame_repeater{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:relative;right:0;-webkit-transition:right ease-in-out 0.75s;-moz-transition:right ease-in-out 0.75s;transition:right ease-in-out 0.75s}.carousel_slide_loading{opacity:0;pointer-events:none;position:absolute;inset:0}.carousel_slide_loading_visible{opacity:1;pointer-events:all}.carousel_loading_bar{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 60px;margin-top:8px}.carousel_loading_bar_fullwidth{padding:0 4px}.carousel_buttons{position:absolute;width:100%;height:0px;top:calc(50% - 20px);left:0;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-sizing:border-box;box-sizing:border-box}.carousel_buttons_fullwidth{padding:0 16px}.carousel_bullets{margin-top:16px;margin-bottom:16px}";

const BdsCarouselItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h("slot", null);
  }
};
BdsCarouselItem.style = carouselCss;

export { BdsCarouselItem as bds_carousel_item };
