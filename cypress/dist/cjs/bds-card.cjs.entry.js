'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6a53aecf.js');

const cardCss = ":host{display:-ms-flexbox;display:flex;position:relative}:host:focus-visible{outline:none}.card{display:-ms-flexbox;display:flex;width:100%}.card_hover:hover{-webkit-transform:scale(1.02);transform:scale(1.02);-webkit-transition:all 0.3s;transition:all 0.3s;cursor:pointer}.focus:focus-visible{display:-ms-flexbox;display:flex;position:absolute;border:2px solid var(--color-focus, #c226fb);border-radius:4px;width:100%;height:100%;top:-4px;left:-4px;padding-right:4px;padding-bottom:4px;outline:none}";

const Card = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.bdsClick = index.createEvent(this, "bdsClick", 7);
    this.height = null;
    this.width = 'fit-content';
    this.clickable = false;
    this.bgColor = 'surface-1';
    this.dataTest = null;
    this.isHovered = false;
    this.isPressed = false;
    this.elevation = 'primary';
  }
  componentDidLoad() {
    this.cardElement = this.element.shadowRoot.querySelector('.card');
    if (this.cardElement && this.clickable === true) {
      this.cardElement.addEventListener('mouseenter', () => {
        this.isHovered = true;
      });
      this.cardElement.addEventListener('mouseleave', () => {
        this.isHovered = false;
      });
      this.cardElement.addEventListener('mousedown', () => {
        this.isPressed = true;
        this.bdsClick.emit();
      });
      document.addEventListener('mouseup', () => {
        this.isPressed = false;
      });
      this.cardElement.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          this.isPressed = true;
          this.bdsClick.emit();
        }
      });
      this.cardElement.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
          this.isPressed = false;
        }
      });
    }
  }
  componentDidUpdate() {
    if (this.isPressed) {
      this.elevation = 'static';
    }
    else if (this.isHovered) {
      this.elevation = 'secondary';
    }
  }
  handleKeyDown(event) {
    if (event.key == 'Enter') {
      this.isPressed = true;
      this.bdsClick.emit(event);
    }
  }
  render() {
    const styleHost = {
      width: this.width,
    };
    return (index.h(index.Host, { style: styleHost }, index.h("bds-paper", { elevation: this.elevation, class: { card: true, card_hover: this.clickable }, height: this.height, width: this.width, bgColor: this.bgColor, "data-test": this.dataTest }, index.h("div", { tabindex: "0", class: "focus", onKeyDown: this.handleKeyDown.bind(this) }), index.h("bds-grid", { xxs: "12", direction: "column", gap: "2", padding: "2" }, index.h("slot", null)))));
  }
  get element() { return index.getElement(this); }
};
Card.style = cardCss;

exports.bds_card = Card;
