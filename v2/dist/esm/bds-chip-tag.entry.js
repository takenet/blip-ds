import { r as registerInstance, h, H as Host } from './index-CkbvGS8Z.js';

const chipTagCss = () => `:host{display:-ms-flexbox;display:flex;max-width:100%}:host .chip_tag{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;min-width:32px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:24px;border-radius:12px;padding:0px 4px;-webkit-box-sizing:border-box;box-sizing:border-box}:host .chip_tag--container-text--full{width:100%}:host .chip_tag--container-text--half{width:calc(100% - 16px)}:host .chip_tag--icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:16px;height:16px}:host .chip_tag--text{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin:0 8px;font-family:"Nunito Sans", "Carbona", "Tahoma", "Helvetica", "Arial", sans-serif}:host .chip_tag--default{background-color:var(--color-system, rgb(178, 223, 253));color:var(--color-content-din, rgb(0, 0, 0))}:host .chip_tag--info{background-color:var(--color-info, rgb(128, 227, 235));color:var(--color-content-din, rgb(0, 0, 0))}:host .chip_tag--success{background-color:var(--color-success, rgb(132, 235, 188));color:var(--color-content-din, rgb(0, 0, 0))}:host .chip_tag--warning{background-color:var(--color-warning, rgb(253, 233, 155));color:var(--color-content-din, rgb(0, 0, 0))}:host .chip_tag--danger{background-color:var(--color-error, rgb(250, 190, 190));color:var(--color-content-din, rgb(0, 0, 0))}:host .chip_tag--outline{border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));color:var(--color-content-default, rgb(40, 40, 40))}:host .chip_tag--disabled{background-color:var(--color-surface-3, rgb(227, 227, 227));color:var(--color-content-default, rgb(40, 40, 40))}`;

const ChipTag = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * used for change the color. Uses one of them.
         */
        this.color = 'default';
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
    }
    render() {
        return (h(Host, { key: 'b8c5c9dbe90aba2964c68356839c78c309d4a1ca' }, h("div", { key: 'd15754ad55416cac647433060caf513e257ac966', class: {
                chip_tag: true,
                [`chip_tag--${this.color}`]: true,
            }, "data-test": this.dataTest }, this.icon && (h("div", { key: 'dc570cf1e3da9ec9d277ddf6a85044880b902e8d', class: "chip_tag--icon" }, h("bds-icon", { key: '4bdaef69560630cae690f5c2cf47bc486780e501', size: "x-small", name: this.icon }))), h("div", { key: '0498db13a8f781d05507bbc6dc015817ec01a12c', class: this.icon ? `chip_tag--container-text--half` : `chip_tag--container-text--full` }, h("bds-typo", { key: '53686e1531f0a7922f68a86b8cbc5d4b7077518b', "no-wrap": "true", class: "chip_tag--text", variant: "fs-12", bold: "bold" }, h("slot", { key: '78ed8b04029f66a348e0aa4948fc0b31d216bc02' }))))));
    }
};
ChipTag.style = chipTagCss();

export { ChipTag as bds_chip_tag };
