import { h } from '@stencil/core';
import { gapChanged, getHighestItem, getItems } from '../../utils/position-element';
export class BdsCarousel {
  constructor() {
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
  static get is() { return "bds-carousel"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["carousel.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["carousel.css"]
    };
  }
  static get properties() {
    return {
      "autoplay": {
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
          "text": "Autoplay. Prop to Enable component autoplay."
        },
        "attribute": "autoplay",
        "reflect": false,
        "defaultValue": "false"
      },
      "autoplayTimeout": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "AutoplayTimeout. Prop to Choose the Autoplay time in milliseconds, ex: 5000."
        },
        "attribute": "autoplay-timeout",
        "reflect": false,
        "defaultValue": "5000"
      },
      "autoplayHoverPause": {
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
          "text": "AutoplayHoverPause. Prop to Enable it if you will have the function to pause autoplay when on hover."
        },
        "attribute": "autoplay-hover-pause",
        "reflect": false,
        "defaultValue": "false"
      },
      "autoHeight": {
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
          "text": "autoHeight. Prop to Enable it if you want the component to adjust its height relative to the active items.."
        },
        "attribute": "auto-height",
        "reflect": false,
        "defaultValue": "false"
      },
      "bullets": {
        "type": "any",
        "mutable": false,
        "complexType": {
          "original": "boolean | bullets",
          "resolved": "\"inside\" | \"none\" | \"outside\" | boolean",
          "references": {
            "bullets": {
              "location": "import",
              "path": "./carousel-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Bullet. Prop to Enable component bullets navigation."
        },
        "attribute": "bullets",
        "reflect": false,
        "defaultValue": "'outside'"
      },
      "bulletsPosition": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "bulletsPositions",
          "resolved": "\"center\" | \"left\" | \"right\"",
          "references": {
            "bulletsPositions": {
              "location": "import",
              "path": "./carousel-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Bullet. Prop to Enable component bullets navigation."
        },
        "attribute": "bullets-position",
        "reflect": false,
        "defaultValue": "'center'"
      },
      "infiniteLoop": {
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
          "text": "InfiniteLoop. Prop to Enable if the component will have infinite loop."
        },
        "attribute": "infinite-loop",
        "reflect": false,
        "defaultValue": "false"
      },
      "arrows": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "arrows",
          "resolved": "\"inside\" | \"none\" | \"outside\"",
          "references": {
            "arrows": {
              "location": "import",
              "path": "./carousel-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "arrows. Prop to select type of arrows in component. Are available \"outside\" | \"inside\" | \"none\"."
        },
        "attribute": "arrows",
        "reflect": false,
        "defaultValue": "'outside'"
      },
      "slidePerPage": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "SlidePerPage. Prop to Choose the number of slide per page you will have available in the carousel."
        },
        "attribute": "slide-per-page",
        "reflect": false,
        "defaultValue": "1"
      },
      "gap": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "gap",
          "resolved": "\"1\" | \"10\" | \"11\" | \"12\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"7\" | \"8\" | \"9\" | \"half\" | \"none\"",
          "references": {
            "gap": {
              "location": "import",
              "path": "./carousel-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Gap. Prop to Select the gap distance between items."
        },
        "attribute": "gap",
        "reflect": false,
        "defaultValue": "'none'"
      },
      "grab": {
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
          "text": "Grab. Prop to enable function of grab in carousel."
        },
        "attribute": "grab",
        "reflect": false,
        "defaultValue": "true"
      },
      "loading": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Loading state. Indicates if the component is in a loading state."
        },
        "attribute": "loading",
        "reflect": true,
        "defaultValue": "false"
      },
      "dtSlideContent": {
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
          "text": "Data test is the prop to specifically test the component action object.\ndtSlideContent is the data-test to slide action."
        },
        "attribute": "dt-slide-content",
        "reflect": false,
        "defaultValue": "null"
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
        "attribute": "dt-button-prev",
        "reflect": false,
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
        "attribute": "dt-button-next",
        "reflect": false,
        "defaultValue": "null"
      }
    };
  }
  static get states() {
    return {
      "itemActivated": {},
      "seconds": {},
      "internalItens": {},
      "isWhole": {},
      "heightCarousel": {},
      "framePressed": {},
      "startX": {},
      "endX": {},
      "autoplayState": {},
      "secondsLimit": {}
    };
  }
  static get events() {
    return [{
        "method": "bdsChangeCarousel",
        "name": "bdsChangeCarousel",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when active frame value."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
  static get methods() {
    return {
      "buildCarousel": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            },
            "HTMLCollectionOf": {
              "location": "global"
            },
            "HTMLBdsCarouselItemElement": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "",
          "tags": []
        }
      },
      "nextSlide": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "",
          "tags": []
        }
      },
      "prevSlide": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "",
          "tags": []
        }
      },
      "setActivated": {
        "complexType": {
          "signature": "(item: number) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "",
          "tags": []
        }
      },
      "pauseAutoplay": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "",
          "tags": []
        }
      },
      "runAutoplay": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "",
          "tags": []
        }
      }
    };
  }
  static get elementRef() { return "element"; }
  static get watchers() {
    return [{
        "propName": "itemActivated",
        "methodName": "itemActivatedChanged"
      }, {
        "propName": "autoplayTimeout",
        "methodName": "autoplayTimeoutChanged"
      }, {
        "propName": "seconds",
        "methodName": "secondsChanged"
      }, {
        "propName": "isWhole",
        "methodName": "isWholeChanged"
      }];
  }
}
