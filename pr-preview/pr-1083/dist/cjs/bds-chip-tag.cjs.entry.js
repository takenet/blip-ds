'use strict';

var index = require('./index-D_zq0Z7d.js');

const chipTagCss = ":host{display:-ms-flexbox;display:flex;max-width:100%}:host .chip_tag{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;min-width:32px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:24px;border-radius:12px;padding:0px 4px;-webkit-box-sizing:border-box;box-sizing:border-box}:host .chip_tag--container-text--full{width:100%}:host .chip_tag--container-text--half{width:calc(100% - 16px)}:host .chip_tag--icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:16px;height:16px}:host .chip_tag--text{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin:0 8px;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif}:host .chip_tag--default{background-color:var(--color-system, rgb(178, 223, 253));color:var(--color-content-din, rgb(0, 0, 0))}:host .chip_tag--info{background-color:var(--color-info, rgb(128, 227, 235));color:var(--color-content-din, rgb(0, 0, 0))}:host .chip_tag--success{background-color:var(--color-success, rgb(132, 235, 188));color:var(--color-content-din, rgb(0, 0, 0))}:host .chip_tag--warning{background-color:var(--color-warning, rgb(253, 233, 155));color:var(--color-content-din, rgb(0, 0, 0))}:host .chip_tag--danger{background-color:var(--color-error, rgb(250, 190, 190));color:var(--color-content-din, rgb(0, 0, 0))}:host .chip_tag--outline{border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));color:var(--color-content-default, rgb(40, 40, 40))}:host .chip_tag--disabled{background-color:var(--color-surface-3, rgb(227, 227, 227));color:var(--color-content-default, rgb(40, 40, 40))}";

const ChipTag = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h(index.Host, { key: '887254e094eb8da629197db22d1cf745d36c44eb' }, index.h("div", { key: '184c6b4bbe90f3c4db18c1f15fd7a4b5e103f423', class: {
                chip_tag: true,
                [`chip_tag--${this.color}`]: true,
            }, "data-test": this.dataTest }, this.icon && (index.h("div", { key: '12c1fab15b6a7a95a34820c4300591976335230e', class: "chip_tag--icon" }, index.h("bds-icon", { key: 'bc21e95c84cff8a0a648be069ee7c9c438c00f60', size: "x-small", name: this.icon }))), index.h("div", { key: 'a7aa8eac28bf01ab0d09ee995a0cd87fb6bc2ac1', class: this.icon ? `chip_tag--container-text--half` : `chip_tag--container-text--full` }, index.h("bds-typo", { key: '8782a444b3c56871c5001404f2fb8d966b9bffaa', "no-wrap": "true", class: "chip_tag--text", variant: "fs-12", bold: "bold" }, index.h("slot", { key: '058c4a53484962e98402be0db41bb0462afaa336' }))))));
    }
};
ChipTag.style = chipTagCss;

exports.bds_chip_tag = ChipTag;
//# sourceMappingURL=bds-chip-tag.entry.cjs.js.map

//# sourceMappingURL=bds-chip-tag.cjs.entry.js.map