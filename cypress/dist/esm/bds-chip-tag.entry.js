import { r as registerInstance, h, H as Host } from './index-611fd21e.js';

const chipTagCss = ":host{display:-ms-flexbox;display:flex;max-width:100%}:host .chip_tag{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;min-width:32px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:24px;border-radius:12px;padding:0px 4px;-webkit-box-sizing:border-box;box-sizing:border-box}:host .chip_tag--container-text--full{width:100%}:host .chip_tag--container-text--half{width:calc(100% - 16px)}:host .chip_tag--icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:16px;height:16px}:host .chip_tag--text{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin:0 8px;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif}:host .chip_tag--default{background-color:var(--color-system, #b2dffd);color:var(--color-content-din, #000000)}:host .chip_tag--info{background-color:var(--color-info, #80e3eb);color:var(--color-content-din, #000000)}:host .chip_tag--success{background-color:var(--color-success, #84ebbc);color:var(--color-content-din, #000000)}:host .chip_tag--warning{background-color:var(--color-warning, #fde99b);color:var(--color-content-din, #000000)}:host .chip_tag--danger{background-color:var(--color-error, #f99f9f);color:var(--color-content-din, #000000)}:host .chip_tag--outline{border:1px solid var(--color-border-1, #c9c9c9);color:var(--color-content-default, #454545)}:host .chip_tag--disabled{background-color:var(--color-surface-3, #cfcfcf);color:var(--color-content-default, #454545)}";

const ChipTag = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.icon = undefined;
    this.color = 'default';
    this.dataTest = null;
  }
  render() {
    return (h(Host, null, h("div", { class: {
        chip_tag: true,
        [`chip_tag--${this.color}`]: true,
      }, "data-test": this.dataTest }, this.icon && (h("div", { class: "chip_tag--icon" }, h("bds-icon", { size: "x-small", name: this.icon }))), h("div", { class: this.icon ? `chip_tag--container-text--half` : `chip_tag--container-text--full` }, h("bds-typo", { "no-wrap": "true", class: "chip_tag--text", variant: "fs-12", bold: "bold" }, h("slot", null))))));
  }
};
ChipTag.style = chipTagCss;

export { ChipTag as bds_chip_tag };
