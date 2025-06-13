import { p as proxyCustomElement, H, c as createEvent, h, a as Host } from './index.js';
import { d as defineCustomElement$3 } from './p-Oerd8HLX.js';
import { d as defineCustomElement$2 } from './p-3JBO9P5_.js';
import { d as defineCustomElement$1 } from './p-BTwF0c-l.js';

const chipClickableCss = ":host{display:-ms-flexbox;display:flex;height:-webkit-max-content;height:-moz-max-content;height:max-content;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:100%}:host .chip_clickable{display:-ms-flexbox;display:flex;min-width:32px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:24px;border-radius:12px;padding:2px 6px;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-pack:center;justify-content:center;position:relative;z-index:1;-ms-flex-negative:0;flex-shrink:0}:host .chip_clickable--container-text--full{width:100%}:host .chip_clickable--container-text--min{width:calc(100% - 36px)}:host .chip_clickable--container-text--half{width:calc(100% - 16px)}:host .chip_clickable--hide{display:none;padding:0;border:none}:host .chip_clickable .chip_focus:focus{position:absolute;width:100%;height:100%;padding:2px;border-radius:4px;outline:var(--color-focus, rgb(194, 38, 251)) solid 2px}:host .chip_clickable--click{cursor:pointer}:host .chip_clickable--click .chip_darker{opacity:0;position:absolute;width:100%;height:100%;border-radius:inherit;z-index:1;-webkit-backdrop-filter:brightness(1);backdrop-filter:brightness(1);-webkit-box-sizing:border-box;box-sizing:border-box}:host .chip_clickable--click:hover .chip_darker{opacity:1;-webkit-backdrop-filter:brightness(0.9);backdrop-filter:brightness(0.9)}:host .chip_clickable--click:active .chip_darker{opacity:1;-webkit-backdrop-filter:brightness(0.8);backdrop-filter:brightness(0.8)}:host .chip_clickable--disabled{cursor:default;background-color:var(--color-surface-3, rgb(227, 227, 227))}:host .chip_clickable--disabled .chip_clickable--icon{color:var(--color-content-default, rgb(40, 40, 40))}:host .chip_clickable--disabled .chip_clickable--text{color:var(--color-content-default, rgb(40, 40, 40))}:host .chip_clickable--disabled .chip_clickable--close{cursor:default}:host .chip_clickable--text{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:16px;margin:0;padding:0 2px;z-index:2;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;line-height:1}:host .chip_clickable--icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:16px;padding-right:2px;z-index:2}:host .chip_clickable--close{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:16px;padding-left:2px;mix-blend-mode:hard-light;opacity:0.5;z-index:2;position:relative;cursor:pointer}:host .chip_clickable--close .close_focus:focus{position:absolute;width:100%;height:100%;left:-2px;border-radius:4px;outline:var(--color-focus, rgb(194, 38, 251)) solid 2px}:host .chip_clickable--tall{height:32px;border-radius:16px;padding:4px 8px}:host .chip_clickable--tall .chip_clickable--text{height:20px;line-height:1.1}:host .chip_clickable--tall .chip_clickable--icon{height:20px;padding-right:4px}:host .chip_clickable--tall .chip_clickable--close{height:20px;padding-left:4px}:host .chip_clickable--default{background-color:var(--color-system, rgb(178, 223, 253));color:var(--color-content-din, rgb(0, 0, 0))}:host .chip_clickable--info{background-color:var(--color-info, rgb(128, 227, 235));color:var(--color-content-din, rgb(0, 0, 0))}:host .chip_clickable--success{background-color:var(--color-success, rgb(132, 235, 188));color:var(--color-content-din, rgb(0, 0, 0))}:host .chip_clickable--warning{background-color:var(--color-warning, rgb(253, 233, 155));color:var(--color-content-din, rgb(0, 0, 0))}:host .chip_clickable--danger{background-color:var(--color-error, rgb(250, 190, 190));color:var(--color-content-din, rgb(0, 0, 0))}:host .chip_clickable--outline{border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));color:var(--color-content-default, rgb(40, 40, 40))}:host .chip_clickable:focus-visible{outline:none}";

const ChipClickable = /*@__PURE__*/ proxyCustomElement(class ChipClickable extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.chipClickableClose = createEvent(this, "chipClickableClose");
        this.chipClickableClick = createEvent(this, "chipClickableClick");
        this.visible = true;
        /**
         * used for change the color. Uses one of them.
         */
        this.color = 'default';
        /**
         * used for change the size chip. Uses one of them.
         */
        this.size = 'standard';
        /**
         * it makes the chip clickable.
         */
        this.clickable = false;
        /**
         * used for delete the chip.
         */
        this.close = false;
        /**
         * the chip gone stay disabled while this prop be true.
         */
        this.disabled = false;
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
        /**
         * Data test is the prop to specifically test the component action object.
         * dtButtonClose is the data-test to button close.
         */
        this.dtButtonClose = null;
    }
    handleClickKey(event) {
        if ((event.key === 'Enter' || event.key === ' ') && !this.disabled) {
            event.preventDefault();
            this.chipClickableClick.emit();
        }
    }
    handleClick(event) {
        if (!this.disabled) {
            event.preventDefault();
            this.chipClickableClick.emit();
        }
    }
    handleCloseChip(event) {
        event.preventDefault();
        this.chipClickableClose.emit({ id: this.element.id });
    }
    handleCloseKey(event) {
        if ((event.key === 'Enter' || event.key === ' ') && !this.disabled) {
            event.preventDefault();
            this.chipClickableClose.emit({ id: this.element.id });
        }
    }
    getSizeAvatarChip() {
        if (this.size === 'tall') {
            return 'extra-small';
        }
        else
            return 'micro';
    }
    getSizeIconChip() {
        if (this.size === 'tall') {
            return 'medium';
        }
        else
            return 'x-small';
    }
    render() {
        return (h(Host, { key: 'a484e58dc90b62b8ad74a11705d0efd8382185e3' }, h("div", { key: '3d0a2c590ffe9ae89941c5bd2e73e2b407b1add3', class: {
                chip_clickable: true,
                [`chip_clickable--${this.color}`]: !this.disabled,
                [`chip_clickable--${this.size}`]: true,
                'chip_clickable--hide': !this.visible,
                'chip_clickable--click': this.clickable,
                'chip_clickable--disabled': this.disabled,
            }, onClick: this.handleClick.bind(this), "data-test": this.dataTest }, this.clickable && !this.disabled && (h("div", { key: '6c6e89984c427d3e20aaca4d0339992818e0e4dd', class: "chip_focus", onKeyDown: this.handleClickKey.bind(this), tabindex: "0" })), this.clickable && !this.disabled && h("div", { key: '002103387277cde8a86afce59ae22a6eabd55bf6', class: "chip_darker" }), this.icon && !this.avatar && (h("div", { key: '3d407de38a7e442356d24a954e7a041bf5d3518a', class: "chip_clickable--icon" }, h("bds-icon", { key: 'decf9fe0ab44c101f366070fb71347d83b62f6ec', size: this.getSizeIconChip(), name: this.icon }))), this.avatar && (h("div", { key: '38ead54424b4435cd6da1c0794a3b1987179f692', class: "chip_clickable--avatar" }, h("bds-avatar", { key: 'daca44da604029e5e93078f062efa9419e637552', size: this.getSizeAvatarChip(), thumbnail: this.avatar }))), h("div", { key: '2c22c9824b2adc7f54049dc5149f0a700306498b', class: this.close && (this.icon || this.avatar)
                ? `chip_clickable--container-text--min`
                : !this.close && !this.icon && !this.avatar
                    ? `chip_clickable--container-text--full`
                    : `chip_clickable--container-text--half` }, h("bds-typo", { key: '6beed0256b3985cb870d1545af3c634755fd3f8b', "no-wrap": "true", class: "chip_clickable--text", variant: "fs-12", bold: "bold" }, h("slot", { key: '0138704cd285cf018738f81cb0f4aadaf0ce2f50' }))), this.close && (h("div", { key: '0343f5ce17252337c094a668faa79a743c1da788', class: "chip_clickable--close", "data-test": this.dtButtonClose, onClick: this.handleCloseChip.bind(this) }, !this.disabled && (h("div", { key: '8825c413ad7a45f563a938aa786e227d4e94da13', class: "close_focus", onKeyDown: this.handleCloseKey.bind(this), tabindex: "0" })), h("bds-icon", { key: '764137a65a22077d31b6e9d3da826c2e88a1483b', size: "x-small", theme: "solid", name: "error" }))))));
    }
    get element() { return this; }
    static get style() { return chipClickableCss; }
}, [1, "bds-chip-clickable", {
        "icon": [1],
        "avatar": [1],
        "color": [1],
        "size": [1],
        "clickable": [4],
        "close": [4],
        "disabled": [4],
        "dataTest": [1, "data-test"],
        "dtButtonClose": [1, "dt-button-close"],
        "visible": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-chip-clickable", "bds-avatar", "bds-icon", "bds-typo"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-chip-clickable":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ChipClickable);
            }
            break;
        case "bds-avatar":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "bds-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "bds-typo":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { ChipClickable as C, defineCustomElement as d };
//# sourceMappingURL=p-DaXcfYJP.js.map

//# sourceMappingURL=p-DaXcfYJP.js.map