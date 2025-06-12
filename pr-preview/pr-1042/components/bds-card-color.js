import { p as proxyCustomElement, H, h } from './index.js';
import { d as defineCustomElement$4 } from './p-CGgHblXS.js';
import { d as defineCustomElement$3 } from './p-CzMNFclR.js';
import { d as defineCustomElement$2 } from './p-BTwF0c-l.js';

const cardColorCss = ".card{cursor:pointer}.card-color{width:239px;height:136px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;border-radius:8px;-webkit-box-shadow:0px 2px 8px -2px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 2px 8px -2px var(--color-shadow-1, rgba(0, 0, 0, 0.16));margin-left:8px;margin-top:8px}.card-color--color{-ms-flex:2;flex:2;border-top-left-radius:8px;border-top-right-radius:8px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.card-color--color-brand{background-color:var(--color-brand, rgb(0, 150, 250))}.card-color--color-primary{background-color:var(--color-primary, rgb(30, 107, 241))}.card-color--color-secondary{background-color:var(--color-secondary, rgb(41, 41, 41))}.card-color--color-surface-1{background-color:var(--color-surface-1, rgb(246, 246, 246))}.card-color--color-surface-2{background-color:var(--color-surface-2, rgb(237, 237, 237))}.card-color--color-surface-3{background-color:var(--color-surface-3, rgb(227, 227, 227))}.card-color--color-surface-4{background-color:var(--color-surface-4, rgb(20, 20, 20))}.card-color--color-content-default{background-color:var(--color-content-default, rgb(40, 40, 40))}.card-color--color-content-disable{background-color:var(--color-content-disable, rgb(89, 89, 89))}.card-color--color-content-ghost{background-color:var(--color-content-ghost, rgb(140, 140, 140))}.card-color--color-content-bright{background-color:var(--color-content-bright, rgb(255, 255, 255))}.card-color--color-content-din{background-color:var(--color-content-din, rgb(0, 0, 0))}.card-color--color-border-1{background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.card-color--color-border-2{background-color:var(--color-border-2, rgba(0, 0, 0, 0.16))}.card-color--color-border-3{background-color:var(--color-border-3, rgba(0, 0, 0, 0.06))}.card-color--color-info{background-color:var(--color-info, rgb(128, 227, 235))}.card-color--color-system{background-color:var(--color-system, rgb(178, 223, 253))}.card-color--color-focus{background-color:var(--color-focus, rgb(194, 38, 251))}.card-color--color-success{background-color:var(--color-success, rgb(132, 235, 188))}.card-color--color-warning{background-color:var(--color-warning, rgb(253, 233, 155))}.card-color--color-error{background-color:var(--color-error, rgb(250, 190, 190))}.card-color--color-delete{background-color:var(--color-delete, rgb(230, 15, 15))}.card-color--color-extended-blue{background-color:var(--color-extended-blue, rgb(25, 104, 240))}.card-color--color-extended-ocean{background-color:var(--color-extended-ocean, rgb(0, 211, 228))}.card-color--color-extended-green{background-color:var(--color-extended-green, rgb(53, 222, 144))}.card-color--color-extended-yellow{background-color:var(--color-extended-yellow, rgb(251, 207, 35))}.card-color--color-extended-orange{background-color:var(--color-extended-orange, rgb(240, 99, 5))}.card-color--color-extended-red{background-color:var(--color-extended-red, rgb(230, 15, 15))}.card-color--color-extended-pink{background-color:var(--color-extended-pink, rgb(251, 75, 193))}.card-color--color-extended-gray{background-color:var(--color-extended-gray, rgb(102, 102, 102))}.card-text{-webkit-animation:invert-motion 1s;animation:invert-motion 1s}.card-text-copie{-webkit-animation:motion 3s 1;animation:motion 3s 1}@-webkit-keyframes motion{0%{height:0}30%{height:50%}85%{letter-spacing:0}}@keyframes motion{0%{height:0}30%{height:50%}85%{letter-spacing:0}}@-webkit-keyframes invert-motion{0%{height:100%}30%{height:50%}85%{letter-spacing:0}}@keyframes invert-motion{0%{height:100%}30%{height:50%}85%{letter-spacing:0}}";

const CardColor = /*@__PURE__*/ proxyCustomElement(class CardColor extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.showMessage = false;
        /**
         * Specifies if the hex is a linear gradient
         */
        this.gradient = false;
        /**
         * If true, the text will be white
         */
        this.lightText = false;
        this.handleCopyVariable = (variable) => {
            const value = `$${variable}`;
            navigator.clipboard.writeText(value);
            this.showMessage = true;
            // Ocultar a mensagem após 3 segundos
            setTimeout(() => {
                this.showMessage = false;
            }, 3000);
        };
    }
    render() {
        return (h("bds-paper", { key: 'edf1c070c006dbc7179074645c3b3c5e005519f1', class: "card", width: "240px", height: "140px", onClick: () => this.handleCopyVariable(this.variable) }, h("bds-grid", { key: 'eae3f63402cd1e571a2f33133fd24a834622b87b', direction: "column", height: "100%" }, h("bds-grid", { key: '44095d7b1c8e152212fd77861a4b0421b0bb8d1f', height: "70%", xxs: "12", class: {
                'card-color--color': true,
                [`card-color--${this.variable}`]: true,
            } }), h("bds-grid", { key: '0449b9a586dd5f8e2d3b5e672e1a564dab8a9d13', "justify-content": "center", "align-items": "center", height: "30%" }, !this.showMessage ? (h("bds-typo", { class: "card-text", variant: "fs-14", bold: "bold" }, "$", this.variable)) : (h("bds-typo", { class: "card-text-copie", variant: "fs-14", bold: "bold" }, "Cor copiada!"))))));
    }
    static get style() { return cardColorCss; }
}, [1, "bds-card-color", {
        "name": [1],
        "hex": [1],
        "gradient": [4],
        "variable": [1],
        "lightText": [4, "light-text"],
        "showMessage": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-card-color", "bds-grid", "bds-paper", "bds-typo"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-card-color":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, CardColor);
            }
            break;
        case "bds-grid":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "bds-paper":
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

const BdsCardColor = CardColor;
const defineCustomElement = defineCustomElement$1;

export { BdsCardColor, defineCustomElement };
//# sourceMappingURL=bds-card-color.js.map

//# sourceMappingURL=bds-card-color.js.map