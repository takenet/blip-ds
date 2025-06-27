'use strict';

var index = require('./index-D_zq0Z7d.js');

const chipCss = ":host{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;cursor:pointer;white-space:nowrap;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-weight:600}:host(.chip){border-radius:8px;padding:3px 8px}:host(.chip--primary){background:#e8f2ff;color:#3f7de8}:host(.chip--click.chip--primary:hover){background:#d1e3fa;color:#125ad5}:host(.chip--watermelon){background:#fb5a8b;color:#ffffff}:host(.chip--default){background:#f8fbfb;color:#8ca0b3}:host(.chip--danger){background:#ffa5a5;color:#ff4c4c}:host(.chip--click.chip--danger:hover){background:#fccccc;color:#6a2026}:host(.chip--filter){background:#125ad5;color:#ffffff}:host(.chip--click.chip--filter:hover){background:#0747a6;color:#ffffff}:host(.chip--standard){height:24px;font-size:0.75rem}:host(.chip--tall){height:32px;font-size:0.875rem}.chip__delete{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;padding-left:6px;cursor:pointer}.chip__icon{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;padding-right:4px}";

const Chip = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bdsDelete = index.createEvent(this, "bdsDelete");
        /**
         * Chip size. Entered as one of the size design tokens. Can be one of:
         * "standard" and "tall"
         */
        this.size = 'standard';
        /**
         * Variant. Entered as one of the variant. Can be one of:
         * 'primary', 'default';
         */
        this.variant = 'default';
        /**
         * Add state danger on chip, use for use feedback.
         */
        this.danger = false;
        /**
         * Add state filter on chip whith specific color.
         */
        this.filter = false;
        /**
         * When 'true' and the component is using the primary variant, a hover is added
         */
        this.clickable = false;
        /**
         * When 'true', the component recive remove button and dispach event onBdsDelete
         */
        this.deletable = false;
        /**
         * When 'true', no events will be dispatched
         */
        this.disabled = false;
    }
    handleClickDelete(event) {
        if (!this.deletable || this.disabled)
            return;
        event.preventDefault();
        this.bdsDelete.emit({ id: this.element.id });
    }
    getClickClass() {
        return this.clickable ? { 'chip--click': true } : {};
    }
    getSizeClass() {
        return this.size === 'standard' ? { 'chip--standard': true } : { 'chip--tall': true };
    }
    getStateClass() {
        if (this.disabled) {
            return { 'chip--default': true };
        }
        if (this.danger) {
            return { 'chip--danger': true };
        }
        if (this.filter) {
            return { 'chip--filter': true };
        }
        if (this.variant === 'primary') {
            return { 'chip--primary': true };
        }
        if (this.variant === 'watermelon') {
            return { 'chip--watermelon': true };
        }
        return { 'chip--default': true };
    }
    render() {
        return (index.h(index.Host, { key: '4bf35e7843479bbd765f4773b7bccd5708fbc69c', class: Object.assign(Object.assign(Object.assign({ chip: true }, this.getClickClass()), this.getStateClass()), this.getSizeClass()) }, this.icon && (index.h("div", { key: '6d26618edb9a07ce5b0fff6ce6148cf5a14e687a', class: "chip__icon" }, index.h("bds-icon", { key: 'd101356186188912680ae66346081bc361f5786c', size: "x-small", name: this.icon }))), index.h("slot", { key: 'dc25f08f36e3fbe780b9831662d31277c3a409f7' }), this.deletable && (index.h("div", { key: 'aa42ee4917cbc5148e31ea9d03578735106d0c71', class: "chip__delete", onClick: this.handleClickDelete.bind(this) }, index.h("bds-icon", { key: '43063b7e9949523af551e78f234e5020eea9d2a8', size: "x-small", theme: "solid", name: "error" })))));
    }
    get element() { return index.getElement(this); }
};
Chip.style = chipCss;

exports.bds_chip = Chip;
//# sourceMappingURL=bds-chip.entry.cjs.js.map

//# sourceMappingURL=bds-chip.cjs.entry.js.map