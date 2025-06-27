import { r as registerInstance, c as createEvent, h, H as Host, a as getElement } from './index-C3J6Z5OX.js';

const chipSelectedCss = ":host{display:-ms-flexbox;display:flex;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:100%}:host .chip{display:-ms-flexbox;display:flex;min-width:32px;width:-webkit-max-content;width:-moz-max-content;width:max-content;height:32px;border-radius:16px;padding:2px 4px;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-pack:center;justify-content:center;position:relative;z-index:0}:host .chip .chip_focus:focus{position:absolute;width:100%;height:100%;padding:2px;border-radius:4px;outline:var(--color-focus, rgb(194, 38, 251)) solid 2px}:host .chip .chip_darker{position:absolute;width:100%;height:100%;border-radius:inherit;z-index:1;-webkit-backdrop-filter:brightness(1);backdrop-filter:brightness(1);-webkit-box-sizing:border-box;box-sizing:border-box}:host .chip--icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding-left:4px;height:20px;z-index:2}:host .chip--text{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:20px;z-index:2;margin:0 8px;-ms-flex-wrap:nowrap;flex-wrap:nowrap;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif}:host .chip--tall{height:40px;border-radius:24px}:host .chip--default{background-color:var(--color-system, rgb(178, 223, 253));color:var(--color-content-default, rgb(40, 40, 40))}:host .chip--info{background-color:var(--color-info, rgb(128, 227, 235));color:var(--color-content-default, rgb(40, 40, 40))}:host .chip--success{background-color:var(--color-success, rgb(132, 235, 188));color:var(--color-content-default, rgb(40, 40, 40))}:host .chip--warning{background-color:var(--color-warning, rgb(253, 233, 155));color:var(--color-content-default, rgb(40, 40, 40))}:host .chip--danger{background-color:var(--color-error, rgb(250, 190, 190));color:var(--color-content-default, rgb(40, 40, 40))}:host .chip--outline{border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));color:var(--color-content-default, rgb(40, 40, 40));padding:2px 3px}:host .chip--outline .chip_darker{height:calc(100% + 2px)}:host .chip:hover{cursor:pointer}:host .chip:hover .chip_darker{-webkit-backdrop-filter:brightness(0.9);backdrop-filter:brightness(0.9)}:host .chip:active{cursor:pointer}:host .chip:active .chip_darker{-webkit-backdrop-filter:brightness(0.8);backdrop-filter:brightness(0.8)}:host .chip:focus-visible{outline:none}:host .chip_selected{display:-ms-flexbox;display:flex;min-width:32px;width:-webkit-max-content;width:-moz-max-content;width:max-content;height:32px;border-radius:16px;padding:2px;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--color-surface-1, rgb(246, 246, 246));border:2px solid var(--color-content-default, rgb(40, 40, 40))}:host .chip_selected--container-text--full{width:100%}:host .chip_selected--container-text--half{width:calc(100% - 20px)}:host .chip_selected--icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:20px;padding-left:4px;color:var(--color-content-default, rgb(40, 40, 40))}:host .chip_selected--text{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:20px;margin:0 8px;-ms-flex-wrap:nowrap;flex-wrap:nowrap;color:var(--color-content-default, rgb(40, 40, 40));font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif}:host .chip_selected--tall{height:40px;border-radius:24px}:host .chip_selected:hover{opacity:38%;cursor:pointer}:host .chip_selected:active{opacity:38%}:host .chip_disabled{display:-ms-flexbox;display:flex;min-width:32px;width:-webkit-max-content;width:-moz-max-content;width:max-content;height:32px;border-radius:16px;padding:2px 4px;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-pack:center;justify-content:center;position:relative;z-index:0;background-color:var(--color-surface-3, rgb(227, 227, 227))}:host .chip_disabled--icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding-left:4px;width:16px;height:20px;color:var(--color-content-default, rgb(40, 40, 40));z-index:2}:host .chip_disabled--text{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:20px;z-index:2;margin:0 8px;-ms-flex-wrap:nowrap;flex-wrap:nowrap;color:var(--color-content-default, rgb(40, 40, 40));font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif}:host .chip_disabled--tall{height:40px;border-radius:24px}:host .chip_disabled:hover{cursor:default}";

const ChipSelected = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.chipClick = createEvent(this, "chipClick");
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
        return (h(Host, { key: '1e33ada55a3b814269ecb01d90e89ea3984b0414' }, h("div", { key: 'eeff52441ea7b0e67d60d0a02b5fd54c9cd712d6', class: {
                chip: true,
                ...this.getStyleChip(),
                ...this.getDisabledChip(),
            }, onClick: (ev) => this.handleClick(ev), "data-test": this.dataTest }, !this.disabled && h("div", { key: '94ccd6403ec0f45d918e6a61dd4ba5b2eff5683f', class: "chip_focus", onKeyDown: this.handleKeyDown.bind(this), tabindex: "0" }), !this.isSelected && !this.disabled && h("div", { key: '37a273a6697e37b515ed9429fe71c790263b140b', class: "chip_darker" }), this.icon && !this.isSelected && (h("div", { key: '33e618cffbdd77803a61b13e19913a97500e62d4', class: "chip--icon" }, h("bds-icon", { key: '59e951a21725aa97dea64d61c7465863aa2c3b77', size: this.getSizeIconChip(), name: this.icon }))), this.isSelected && (h("div", { key: '868d5fb08cfe8b9ef0e792ff97004624cf052d65', class: "chip_selected--icon" }, h("bds-icon", { key: '8dff7167e05826fac0008c4762ed3506cb12c3c4', size: this.getSizeIconChip(), name: "checkball" }))), h("div", { key: '5852b5f684f7672966a411fe66cda045e10c61ad', class: this.isSelected ? `chip_selected--container-text--half` : `chip_selected--container-text--full` }, h("bds-typo", { key: '642855e4fb67d2a1dd10494b77b4c8f8b4c5cd7f', class: { 'chip--text': true, ...this.getStyleText() }, variant: "fs-12", "no-wrap": true, bold: "bold" }, h("slot", { key: 'b2bf55c0efee784937d1170aadc73f97a7fbfdd4' }))))));
    }
    get el() { return getElement(this); }
};
ChipSelected.style = chipSelectedCss;

export { ChipSelected as bds_chip_selected };
//# sourceMappingURL=bds-chip-selected.entry.js.map

//# sourceMappingURL=bds-chip-selected.entry.js.map