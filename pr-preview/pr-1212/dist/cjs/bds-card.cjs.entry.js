'use strict';

var index = require('./index-BuAR9UTp.js');

const cardCss = () => `:host{display:-ms-flexbox;display:flex;position:relative}:host:focus-visible{outline:none}.card{display:-ms-flexbox;display:flex;width:100%}.card_hover:hover{-webkit-transform:scale(1.02);transform:scale(1.02);-webkit-transition:all 0.3s;transition:all 0.3s;cursor:pointer}.card_hover_selectable:hover{-webkit-box-shadow:0px 0px 0px 2px rgba(30, 107, 241, 0.08);box-shadow:0px 0px 0px 2px rgba(30, 107, 241, 0.08)}.card_hover_selectable:active{-webkit-box-shadow:0px 0px 0px 2px rgba(30, 107, 241, 0.24);box-shadow:0px 0px 0px 2px rgba(30, 107, 241, 0.24)}.focus:focus-visible{display:-ms-flexbox;display:flex;position:absolute;border:2px solid var(--color-focus, rgb(194, 38, 251));border-radius:4px;width:100%;height:100%;top:-4px;left:-4px;padding-right:4px;padding-bottom:4px;outline:none}`;

const Card = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bdsClick = index.createEvent(this, "bdsClick");
        /**
         * Prop for set the height of the component.
         */
        this.height = null;
        /**
         * Prop for set the width of the component.
         */
        this.width = 'fit-content';
        /**
         * If the prop is true, the component will be clickable.
         */
        this.clickable = false;
        /**
         * Prop for set the background color.
         */
        this.bgColor = 'surface-1';
        /**
         * Prop for set the background color.
         */
        this.selectable = false;
        /**
         * Prop for set the border color.
         */
        this.borderColor = null;
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
        this.isHovered = false;
        this.isPressed = false;
        this.elevation = 'primary';
    }
    componentDidLoad() {
        this.cardElement = this.element.shadowRoot.querySelector('.card');
        if (this.cardElement && (this.clickable === true || this.selectable === true)) {
            this.cardElement.addEventListener('mouseenter', () => {
                this.isHovered = true;
            });
            this.cardElement.addEventListener('mouseleave', () => {
                this.isHovered = false;
            });
            this.cardElement.addEventListener('mousedown', (event) => {
                this.isPressed = true;
                this.bdsClick.emit(event);
            });
            document.addEventListener('mouseup', () => {
                this.isPressed = false;
            });
            this.cardElement.addEventListener('keydown', (event) => {
                if (event.key === 'Enter') {
                    this.isPressed = true;
                    this.bdsClick.emit(event);
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
        return (index.h(index.Host, { key: '66bef3c73d160948bd6defe2efd7c7abb0c73b8a', style: styleHost }, index.h("bds-paper", { key: 'a78c80ce821c789e2f4cbe36b372e03b1cb1ead3', border: this.clickable ? false : true, elevation: this.elevation, class: {
                card: true,
                card_hover: this.clickable,
                card_hover_selectable: this.isHovered && this.selectable ? true : false,
                card_hover_pressed: this.isHovered && this.selectable ? true : false
            }, height: this.height, width: this.width, bgColor: this.bgColor, "data-test": this.dataTest, "border-color": this.borderColor ? this.borderColor : 'border-1' }, index.h("div", { key: 'f70f919853cc5025c9fbf926b7f66120d9e306ad', tabindex: "0", class: "focus", onKeyDown: this.handleKeyDown.bind(this) }), index.h("bds-grid", { key: '457c3fcd61a1d9f4af19e2448331e3fa4f423608', xxs: "12", direction: "column", gap: "2", padding: "2" }, index.h("slot", { key: 'fcce443332b937974a9ded186787768d49e88f93' })))));
    }
    get element() { return index.getElement(this); }
};
Card.style = cardCss();

exports.bds_card = Card;
