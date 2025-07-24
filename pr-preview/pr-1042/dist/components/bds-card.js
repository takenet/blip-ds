import { p as proxyCustomElement, H, c as createEvent, h, a as Host } from './index.js';
import { d as defineCustomElement$3 } from './p-mCuNr11T.js';
import { d as defineCustomElement$2 } from './p-BLWmqqxb.js';

const cardCss = ":host{display:-ms-flexbox;display:flex;position:relative}:host:focus-visible{outline:none}.card{display:-ms-flexbox;display:flex;width:100%}.card_hover:hover{-webkit-transform:scale(1.02);transform:scale(1.02);-webkit-transition:all 0.3s;transition:all 0.3s;cursor:pointer}.card_hover_selectable:hover{-webkit-box-shadow:0px 0px 0px 2px rgba(30, 107, 241, 0.08);box-shadow:0px 0px 0px 2px rgba(30, 107, 241, 0.08)}.card_hover_selectable:active{-webkit-box-shadow:0px 0px 0px 2px rgba(30, 107, 241, 0.24);box-shadow:0px 0px 0px 2px rgba(30, 107, 241, 0.24)}.focus:focus-visible{display:-ms-flexbox;display:flex;position:absolute;border:2px solid var(--color-focus, rgb(194, 38, 251));border-radius:4px;width:100%;height:100%;top:-4px;left:-4px;padding-right:4px;padding-bottom:4px;outline:none}";

const Card = /*@__PURE__*/ proxyCustomElement(class Card extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.bdsClick = createEvent(this, "bdsClick");
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
        return (h(Host, { key: '687351ef20eb5cc606beb8f79245038530592b35', style: styleHost }, h("bds-paper", { key: '4170263f939ecb713199955b9a4b24277f3c9122', border: this.clickable ? false : true, elevation: this.elevation, class: {
                card: true,
                card_hover: this.clickable,
                card_hover_selectable: this.isHovered && this.selectable ? true : false,
                card_hover_pressed: this.isHovered && this.selectable ? true : false
            }, height: this.height, width: this.width, bgColor: this.bgColor, "data-test": this.dataTest, "border-color": this.borderColor ? this.borderColor : 'border-1' }, h("div", { key: '2d335525082502f9b7f549df33487a7860717c12', tabindex: "0", class: "focus", onKeyDown: this.handleKeyDown.bind(this) }), h("bds-grid", { key: '98ba4927febe56906ec7e6f8ed7688a40bae094b', xxs: "12", direction: "column", gap: "2", padding: "2" }, h("slot", { key: '61a1dab93bca0893b0f172a6985a25c7365bd35f' })))));
    }
    get element() { return this; }
    static get style() { return cardCss; }
}, [1, "bds-card", {
        "height": [1],
        "width": [1],
        "clickable": [4],
        "bgColor": [1, "bg-color"],
        "selectable": [4],
        "borderColor": [1025, "border-color"],
        "dataTest": [1, "data-test"],
        "isHovered": [32],
        "isPressed": [32],
        "elevation": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-card", "bds-grid", "bds-paper"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-card":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Card);
            }
            break;
        case "bds-grid":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "bds-paper":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const BdsCard = Card;
const defineCustomElement = defineCustomElement$1;

export { BdsCard, defineCustomElement };
//# sourceMappingURL=bds-card.js.map

//# sourceMappingURL=bds-card.js.map