import { r as registerInstance, h } from './index-611fd21e.js';

const cardColorCss = ".card{cursor:pointer}.card-color{width:239px;height:136px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;border-radius:8px;-webkit-box-shadow:0px 2px 8px -2px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 2px 8px -2px var(--color-shadow-1, rgba(0, 0, 0, 0.16));margin-left:8px;margin-top:8px}.card-color--color{-ms-flex:2;flex:2;border-top-left-radius:8px;border-top-right-radius:8px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.card-color--color-brand{background-color:var(--color-brand, #0096fa)}.card-color--color-primary{background-color:var(--color-primary, #1e6bf1)}.card-color--color-secondary{background-color:var(--color-secondary, #292929)}.card-color--color-surface-1{background-color:var(--color-surface-1, #f6f6f6)}.card-color--color-surface-2{background-color:var(--color-surface-2, #ededed)}.card-color--color-surface-3{background-color:var(--color-surface-3, #e3e3e3)}.card-color--color-surface-4{background-color:var(--color-surface-4, #141414)}.card-color--color-content-default{background-color:var(--color-content-default, #282828)}.card-color--color-content-disable{background-color:var(--color-content-disable, #595959)}.card-color--color-content-ghost{background-color:var(--color-content-ghost, #8c8c8c)}.card-color--color-content-bright{background-color:var(--color-content-bright, white)}.card-color--color-content-din{background-color:var(--color-content-din, black)}.card-color--color-border-1{background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.card-color--color-border-2{background-color:var(--color-border-2, rgba(0, 0, 0, 0.16))}.card-color--color-border-3{background-color:var(--color-border-3, rgba(0, 0, 0, 0.06))}.card-color--color-info{background-color:var(--color-info, #80e3eb)}.card-color--color-system{background-color:var(--color-system, #b2dffd)}.card-color--color-focus{background-color:var(--color-focus, #c226fb)}.card-color--color-success{background-color:var(--color-success, #84ebbc)}.card-color--color-warning{background-color:var(--color-warning, #fde99b)}.card-color--color-error{background-color:var(--color-error, #fabebe)}.card-color--color-delete{background-color:var(--color-delete, #e60f0f)}.card-color--color-extended-blue{background-color:var(--color-extended-blue, #1968f0)}.card-color--color-extended-ocean{background-color:var(--color-extended-ocean, #00d3e4)}.card-color--color-extended-green{background-color:var(--color-extended-green, #35de90)}.card-color--color-extended-yellow{background-color:var(--color-extended-yellow, #fbcf23)}.card-color--color-extended-orange{background-color:var(--color-extended-orange, #f06305)}.card-color--color-extended-red{background-color:var(--color-extended-red, #e60f0f)}.card-color--color-extended-pink{background-color:var(--color-extended-pink, #fb4bc1)}.card-color--color-extended-gray{background-color:var(--color-extended-gray, #666666)}.card-text{-webkit-animation:invert-motion 1s;animation:invert-motion 1s}.card-text-copie{-webkit-animation:motion 3s 1;animation:motion 3s 1}@-webkit-keyframes motion{0%{height:0}30%{height:50%}85%{letter-spacing:0}}@keyframes motion{0%{height:0}30%{height:50%}85%{letter-spacing:0}}@-webkit-keyframes invert-motion{0%{height:100%}30%{height:50%}85%{letter-spacing:0}}@keyframes invert-motion{0%{height:100%}30%{height:50%}85%{letter-spacing:0}}";

const CardColor = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.handleCopyVariable = (variable) => {
      const value = `$${variable}`;
      navigator.clipboard.writeText(value);
      this.showMessage = true;
      // Ocultar a mensagem após 3 segundos
      setTimeout(() => {
        this.showMessage = false;
      }, 3000);
    };
    this.showMessage = false;
    this.name = undefined;
    this.hex = undefined;
    this.gradient = false;
    this.variable = undefined;
    this.lightText = false;
  }
  render() {
    return (h("bds-paper", { class: "card", width: "240px", height: "140px", onClick: () => this.handleCopyVariable(this.variable) }, h("bds-grid", { direction: "column", height: "100%" }, h("bds-grid", { height: "70%", xxs: "12", class: {
        'card-color--color': true,
        [`card-color--${this.variable}`]: true,
      } }), h("bds-grid", { "justify-content": "center", "align-items": "center", height: "30%" }, !this.showMessage ? (h("bds-typo", { class: "card-text", variant: "fs-14", bold: "bold" }, "$", this.variable)) : (h("bds-typo", { class: "card-text-copie", variant: "fs-14", bold: "bold" }, "Cor copiada!"))))));
  }
};
CardColor.style = cardColorCss;

export { CardColor as bds_card_color };
