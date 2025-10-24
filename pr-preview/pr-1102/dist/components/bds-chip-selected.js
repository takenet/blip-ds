import { p as proxyCustomElement, H, c as createEvent, h, a as Host } from './index.js';
import { d as defineCustomElement$3 } from './p-sqTSDoSs.js';
import { d as defineCustomElement$2 } from './p-BTwF0c-l.js';

const chipSelectedCss = ":host{display:-ms-flexbox;display:flex;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:100%}:host .chip{display:-ms-flexbox;display:flex;min-width:32px;width:-webkit-max-content;width:-moz-max-content;width:max-content;height:32px;border-radius:16px;padding:2px 4px;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-pack:center;justify-content:center;position:relative;z-index:0}:host .chip .chip_focus:focus{position:absolute;width:100%;height:100%;padding:2px;border-radius:4px;outline:var(--color-focus, rgb(194, 38, 251)) solid 2px}:host .chip .chip_darker{position:absolute;width:100%;height:100%;border-radius:inherit;z-index:1;-webkit-backdrop-filter:brightness(1);backdrop-filter:brightness(1);-webkit-box-sizing:border-box;box-sizing:border-box}:host .chip--icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding-left:4px;height:20px;z-index:2}:host .chip--text{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:20px;z-index:2;margin:0 8px;-ms-flex-wrap:nowrap;flex-wrap:nowrap;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif}:host .chip--tall{height:40px;border-radius:24px}:host .chip--default{background-color:var(--color-system, rgb(178, 223, 253));color:var(--color-content-default, rgb(40, 40, 40))}:host .chip--info{background-color:var(--color-info, rgb(128, 227, 235));color:var(--color-content-default, rgb(40, 40, 40))}:host .chip--success{background-color:var(--color-success, rgb(132, 235, 188));color:var(--color-content-default, rgb(40, 40, 40))}:host .chip--warning{background-color:var(--color-warning, rgb(253, 233, 155));color:var(--color-content-default, rgb(40, 40, 40))}:host .chip--danger{background-color:var(--color-error, rgb(250, 190, 190));color:var(--color-content-default, rgb(40, 40, 40))}:host .chip--outline{border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));color:var(--color-content-default, rgb(40, 40, 40));padding:2px 3px}:host .chip--outline .chip_darker{height:calc(100% + 2px)}:host .chip:hover{cursor:pointer}:host .chip:hover .chip_darker{-webkit-backdrop-filter:brightness(0.9);backdrop-filter:brightness(0.9)}:host .chip:active{cursor:pointer}:host .chip:active .chip_darker{-webkit-backdrop-filter:brightness(0.8);backdrop-filter:brightness(0.8)}:host .chip:focus-visible{outline:none}:host .chip_selected{display:-ms-flexbox;display:flex;min-width:32px;width:-webkit-max-content;width:-moz-max-content;width:max-content;height:32px;border-radius:16px;padding:2px;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--color-surface-1, rgb(246, 246, 246));border:2px solid var(--color-content-default, rgb(40, 40, 40))}:host .chip_selected--container-text--full{width:100%}:host .chip_selected--container-text--half{width:calc(100% - 20px)}:host .chip_selected--icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:20px;padding-left:4px;color:var(--color-content-default, rgb(40, 40, 40))}:host .chip_selected--text{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:20px;margin:0 8px;-ms-flex-wrap:nowrap;flex-wrap:nowrap;color:var(--color-content-default, rgb(40, 40, 40));font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif}:host .chip_selected--tall{height:40px;border-radius:24px}:host .chip_selected:hover{opacity:38%;cursor:pointer}:host .chip_selected:active{opacity:38%}:host .chip_disabled{display:-ms-flexbox;display:flex;min-width:32px;width:-webkit-max-content;width:-moz-max-content;width:max-content;height:32px;border-radius:16px;padding:2px 4px;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-pack:center;justify-content:center;position:relative;z-index:0;background-color:var(--color-surface-3, rgb(227, 227, 227))}:host .chip_disabled--icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding-left:4px;width:16px;height:20px;color:var(--color-content-default, rgb(40, 40, 40));z-index:2}:host .chip_disabled--text{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:20px;z-index:2;margin:0 8px;-ms-flex-wrap:nowrap;flex-wrap:nowrap;color:var(--color-content-default, rgb(40, 40, 40));font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif}:host .chip_disabled--tall{height:40px;border-radius:24px}:host .chip_disabled:hover{cursor:default}";

const ChipSelected = /*@__PURE__*/ proxyCustomElement(class ChipSelected extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
        return (h(Host, { key: '18075d116fbfd2778ead391f6eabe73f4cc4ba9b' }, h("div", { key: 'e58dc939ed85f6c0bb8d36fc872a5cc56fc3bda7', class: Object.assign(Object.assign({ chip: true }, this.getStyleChip()), this.getDisabledChip()), onClick: (ev) => this.handleClick(ev), "data-test": this.dataTest }, !this.disabled && h("div", { key: 'b8c686322397598a1280c67f2754a48403334266', class: "chip_focus", onKeyDown: this.handleKeyDown.bind(this), tabindex: "0" }), !this.isSelected && !this.disabled && h("div", { key: '1c475b5e7a51324f031c2c6953f5116fd2edca9c', class: "chip_darker" }), this.icon && !this.isSelected && (h("div", { key: '954ca24707820e1780f9cd78bdd1c79a1645b921', class: "chip--icon" }, h("bds-icon", { key: '1fe6e7a56d1cdf2e94bef4ef8c845c364de6d77d', size: this.getSizeIconChip(), name: this.icon }))), this.isSelected && (h("div", { key: '83da6efe0dd55781a4a94c47974be22d313a94a0', class: "chip_selected--icon" }, h("bds-icon", { key: '5b8de80b511814c2315654c9dd0a69cdaa7b8ba1', size: this.getSizeIconChip(), name: "checkball" }))), h("div", { key: 'b1f1d265c4bcf4bbd05dc35bbd8aeca99c2bdeb4', class: this.isSelected ? `chip_selected--container-text--half` : `chip_selected--container-text--full` }, h("bds-typo", { key: '6245650ace38bb0ef3115c61e84fb1ccf75396e3', class: Object.assign({ 'chip--text': true }, this.getStyleText()), variant: "fs-12", "no-wrap": true, bold: "bold" }, h("slot", { key: 'd9c7d48ada626b245e5b9eefe1cc029649eb56bf' }))))));
    }
    get el() { return this; }
    static get style() { return chipSelectedCss; }
}, [1, "bds-chip-selected", {
        "icon": [1],
        "color": [1],
        "size": [1],
        "selected": [4],
        "disabled": [4],
        "dataTest": [1, "data-test"],
        "isSelected": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-chip-selected", "bds-icon", "bds-typo"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-chip-selected":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ChipSelected);
            }
            break;
        case "bds-icon":
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

const BdsChipSelected = ChipSelected;
const defineCustomElement = defineCustomElement$1;

export { BdsChipSelected, defineCustomElement };
//# sourceMappingURL=bds-chip-selected.js.map

//# sourceMappingURL=bds-chip-selected.js.map