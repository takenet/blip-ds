'use strict';

var index = require('./index-ljSeaagN.js');

const alertHeaderCss = ".alert__header{width:100%;min-height:64px;padding:12px 16px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center}.alert__header bds-icon{min-width:32px}.alert__header bds-typo{margin-left:8px;color:var(--color-content-din, rgb(0, 0, 0))}.alert__header--system{background:var(--color-system, rgb(178, 223, 253))}.alert__header--system bds-typo{color:var(--color-content-default, rgb(40, 40, 40))}.alert__header--system .color-icon{color:var(--color-content-default, rgb(40, 40, 40))}.alert__header--error{background:var(--color-error, rgb(250, 190, 190))}.alert__header--error bds-typo{color:var(--color-content-default, rgb(40, 40, 40))}.alert__header--error .color-icon{color:var(--color-content-default, rgb(40, 40, 40))}.alert__header--warning{background:var(--color-warning, rgb(253, 233, 155))}.alert__header--warning bds-typo{color:var(--color-content-default, rgb(40, 40, 40))}.alert__header--warning .color-icon{color:var(--color-content-default, rgb(40, 40, 40))}.alert__header--delete{background:var(--color-delete, rgb(230, 15, 15))}.alert__header--delete bds-typo{color:var(--color-content-bright, rgb(255, 255, 255))}.alert__header--delete .color-icon{color:var(--color-content-bright, rgb(255, 255, 255))}";

const AlertHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Variant. Entered as one of the variant. Can be one of:
         * 'system', 'error', 'warning', 'delete';
         */
        this.variant = 'system';
        /**
         * used for add icon the header. Uses the bds-icon component.
         */
        this.icon = null;
    }
    render() {
        return (index.h("div", { key: 'd43bde5580a3be573f250fc221e2907db1ea14f5', class: {
                alert__header: true,
                [`alert__header--${this.variant}`]: true,
            } }, this.icon && index.h("bds-icon", { key: '0f8d5cc6a6700628fb6cc19d4f1c74083e7e726d', class: "color-icon", theme: "outline", size: "x-large", name: this.icon }), index.h("bds-typo", { key: '03f676ffda6d3ebc5733ec493afb4fae604ad8bd', variant: "fs-16", bold: "bold" }, index.h("slot", { key: 'c8671c9d3b29368660de48a376a25365b5028b50' }))));
    }
};
AlertHeader.style = alertHeaderCss;

exports.bds_alert_header = AlertHeader;
//# sourceMappingURL=bds-alert-header.entry.cjs.js.map

//# sourceMappingURL=bds-alert-header.cjs.entry.js.map