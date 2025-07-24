'use strict';

var index = require('./index-D_zq0Z7d.js');

const chipSelectedCss = ":host{display:-ms-flexbox;display:flex;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:100%}:host .chip{display:-ms-flexbox;display:flex;min-width:32px;width:-webkit-max-content;width:-moz-max-content;width:max-content;height:32px;border-radius:16px;padding:2px 4px;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-pack:center;justify-content:center;position:relative;z-index:0}:host .chip .chip_focus:focus{position:absolute;width:100%;height:100%;padding:2px;border-radius:4px;outline:var(--color-focus, rgb(194, 38, 251)) solid 2px}:host .chip .chip_darker{position:absolute;width:100%;height:100%;border-radius:inherit;z-index:1;-webkit-backdrop-filter:brightness(1);backdrop-filter:brightness(1);-webkit-box-sizing:border-box;box-sizing:border-box}:host .chip--icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding-left:4px;height:20px;z-index:2}:host .chip--text{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:20px;z-index:2;margin:0 8px;-ms-flex-wrap:nowrap;flex-wrap:nowrap;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif}:host .chip--tall{height:40px;border-radius:24px}:host .chip--default{background-color:var(--color-system, rgb(178, 223, 253));color:var(--color-content-default, rgb(40, 40, 40))}:host .chip--info{background-color:var(--color-info, rgb(128, 227, 235));color:var(--color-content-default, rgb(40, 40, 40))}:host .chip--success{background-color:var(--color-success, rgb(132, 235, 188));color:var(--color-content-default, rgb(40, 40, 40))}:host .chip--warning{background-color:var(--color-warning, rgb(253, 233, 155));color:var(--color-content-default, rgb(40, 40, 40))}:host .chip--danger{background-color:var(--color-error, rgb(250, 190, 190));color:var(--color-content-default, rgb(40, 40, 40))}:host .chip--outline{border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));color:var(--color-content-default, rgb(40, 40, 40));padding:2px 3px}:host .chip--outline .chip_darker{height:calc(100% + 2px)}:host .chip:hover{cursor:pointer}:host .chip:hover .chip_darker{-webkit-backdrop-filter:brightness(0.9);backdrop-filter:brightness(0.9)}:host .chip:active{cursor:pointer}:host .chip:active .chip_darker{-webkit-backdrop-filter:brightness(0.8);backdrop-filter:brightness(0.8)}:host .chip:focus-visible{outline:none}:host .chip_selected{display:-ms-flexbox;display:flex;min-width:32px;width:-webkit-max-content;width:-moz-max-content;width:max-content;height:32px;border-radius:16px;padding:2px;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--color-surface-1, rgb(246, 246, 246));border:2px solid var(--color-content-default, rgb(40, 40, 40))}:host .chip_selected--container-text--full{width:100%}:host .chip_selected--container-text--half{width:calc(100% - 20px)}:host .chip_selected--icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:20px;padding-left:4px;color:var(--color-content-default, rgb(40, 40, 40))}:host .chip_selected--text{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:20px;margin:0 8px;-ms-flex-wrap:nowrap;flex-wrap:nowrap;color:var(--color-content-default, rgb(40, 40, 40));font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif}:host .chip_selected--tall{height:40px;border-radius:24px}:host .chip_selected:hover{opacity:38%;cursor:pointer}:host .chip_selected:active{opacity:38%}:host .chip_disabled{display:-ms-flexbox;display:flex;min-width:32px;width:-webkit-max-content;width:-moz-max-content;width:max-content;height:32px;border-radius:16px;padding:2px 4px;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-pack:center;justify-content:center;position:relative;z-index:0;background-color:var(--color-surface-3, rgb(227, 227, 227))}:host .chip_disabled--icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding-left:4px;width:16px;height:20px;color:var(--color-content-default, rgb(40, 40, 40));z-index:2}:host .chip_disabled--text{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:20px;z-index:2;margin:0 8px;-ms-flex-wrap:nowrap;flex-wrap:nowrap;color:var(--color-content-default, rgb(40, 40, 40));font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif}:host .chip_disabled--tall{height:40px;border-radius:24px}:host .chip_disabled:hover{cursor:default}";

const ChipSelected = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.chipClick = index.createEvent(this, "chipClick");
        this.isSelected = false;
        /**
         * used for change the color. Uses one of them.
         */
        this.color = 'default';
        /**
         * used for change the chip size. Use one of them;
         */
        this.size = 'standard';
        /**
         * used for set the initial setup for true;
         */
        this.selected = false;
        /**
         * When 'true', no events will be dispatched
         */
        this.disabled = false;
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
    }
    handleKeyDown(event) {
        if ((event.key === 'Enter' || event.key === ' ') && !this.disabled) {
            event.preventDefault();
            if (this.isSelected) {
                this.isSelected = false;
            }
            else {
                this.isSelected = true;
            }
            this.chipClick.emit({ selected: this.isSelected });
        }
    }
    handleClick(event) {
        if (!this.disabled) {
            event.preventDefault();
            if (this.isSelected) {
                this.isSelected = false;
            }
            else {
                this.isSelected = true;
            }
            this.chipClick.emit({ selected: this.isSelected });
        }
    }
    componentWillLoad() {
        this.el.focus();
        this.isSelected = this.selected;
    }
    getDisabledChip() {
        return this.disabled ? { chip_disabled: true, [`chip_disabled--${this.size}`]: true } : {};
    }
    getStyleChip() {
        return this.isSelected
            ? { chip_selected: true, [`chip_selected--${this.size}`]: true }
            : { [`chip--${this.color}`]: true, [`chip--${this.size}`]: true };
    }
    getStyleText() {
        if (this.isSelected) {
            const chipSelected = { 'chip_selected--text': true };
            return chipSelected;
        }
    }
    getSizeIconChip() {
        if (this.size === 'tall') {
            return 'medium';
        }
        else
            return 'x-small';
    }
    render() {
        return (index.h(index.Host, { key: '91d33c460176f9b163760db431bb6e40f2315a0d' }, index.h("div", { key: 'fa32872ea7e2d99db15ed3f3915320730eb259f2', class: Object.assign(Object.assign({ chip: true }, this.getStyleChip()), this.getDisabledChip()), onClick: (ev) => this.handleClick(ev), "data-test": this.dataTest }, !this.disabled && index.h("div", { key: 'afac917fb643afe0f74dbf0d4a342a8abf1bf51a', class: "chip_focus", onKeyDown: this.handleKeyDown.bind(this), tabindex: "0" }), !this.isSelected && !this.disabled && index.h("div", { key: '1ff4dc3b67a4122420d8beb1108d975216f59e66', class: "chip_darker" }), this.icon && !this.isSelected && (index.h("div", { key: '16d5a1055d1f140ebe8a41715373e5a938be1843', class: "chip--icon" }, index.h("bds-icon", { key: '756221618403928021c4e6a6a503f6bf7972da73', size: this.getSizeIconChip(), name: this.icon }))), this.isSelected && (index.h("div", { key: 'e9d7eb49b3a7ff338d98bf42ed72ad11ba8f5b3a', class: "chip_selected--icon" }, index.h("bds-icon", { key: '0e0175d66d0d1a3e13459ecdc77b6db992e347e7', size: this.getSizeIconChip(), name: "checkball" }))), index.h("div", { key: '4cba6caffec90399696995c61bd169de5c0fad8d', class: this.isSelected ? `chip_selected--container-text--half` : `chip_selected--container-text--full` }, index.h("bds-typo", { key: 'f60732ceba2a6ebacf856f7120e4ea7e7b1f693a', class: Object.assign({ 'chip--text': true }, this.getStyleText()), variant: "fs-12", "no-wrap": true, bold: "bold" }, index.h("slot", { key: '7eb8412b2ea1ec66d430eb8313dd66e58b8d1477' }))))));
    }
    get el() { return index.getElement(this); }
};
ChipSelected.style = chipSelectedCss;

exports.bds_chip_selected = ChipSelected;
//# sourceMappingURL=bds-chip-selected.entry.cjs.js.map

//# sourceMappingURL=bds-chip-selected.cjs.entry.js.map