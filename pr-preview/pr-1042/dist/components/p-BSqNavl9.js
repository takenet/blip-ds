import { p as proxyCustomElement, H, c as createEvent, h, a as Host } from './index.js';
import { d as defineCustomElement$3 } from './p-FnzKEJwK.js';
import { d as defineCustomElement$2 } from './p-BHBVuzyo.js';
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
        return (h(Host, { key: '701930b3271cd381aee70709c6f3992ed98e6f0d' }, h("div", { key: 'c0bf981012d37bef741293a72811fee28ae55657', class: {
                chip_clickable: true,
                [`chip_clickable--${this.color}`]: !this.disabled,
                [`chip_clickable--${this.size}`]: true,
                'chip_clickable--hide': !this.visible,
                'chip_clickable--click': this.clickable,
                'chip_clickable--disabled': this.disabled,
            }, onClick: this.handleClick.bind(this), "data-test": this.dataTest }, this.clickable && !this.disabled && (h("div", { key: 'a80c97c41fe2f042b17bfbef4f905c968991532b', class: "chip_focus", onKeyDown: this.handleClickKey.bind(this), tabindex: "0" })), this.clickable && !this.disabled && h("div", { key: 'f9bd96ff044af8e25ba8e564f6bcb86709079735', class: "chip_darker" }), this.icon && !this.avatar && (h("div", { key: '056c7ef70c4811b59a3404191d179aad68c2fcdd', class: "chip_clickable--icon" }, h("bds-icon", { key: '7c11d82f56fa7426ee6b09c46c9ecde97038561c', size: this.getSizeIconChip(), name: this.icon }))), this.avatar && (h("div", { key: 'e5dbf9e23452f19f430883caa21db0dc0919a632', class: "chip_clickable--avatar" }, h("bds-avatar", { key: '6caa3097f9427b899e5c8c9a8b500f10039f5172', size: this.getSizeAvatarChip(), thumbnail: this.avatar }))), h("div", { key: 'db9ccaaa668cd48cee88b0ab482aa0c56fdef6dc', class: this.close && (this.icon || this.avatar)
                ? `chip_clickable--container-text--min`
                : !this.close && !this.icon && !this.avatar
                    ? `chip_clickable--container-text--full`
                    : `chip_clickable--container-text--half` }, h("bds-typo", { key: '6c7e0888d9a1dcaec0ac6c362747f73820c8776a', "no-wrap": "true", class: "chip_clickable--text", variant: "fs-12", bold: "bold" }, h("slot", { key: '86c4b319a3bc1be4f215769deffd5da6131e1a38' }))), this.close && (h("div", { key: '546aa9f33a01e1c01be3221c09854d587e8d2f0d', class: "chip_clickable--close", "data-test": this.dtButtonClose, onClick: this.handleCloseChip.bind(this) }, !this.disabled && (h("div", { key: '42b605c6ef58d026b236f3e59abbe9d0de5eb629', class: "close_focus", onKeyDown: this.handleCloseKey.bind(this), tabindex: "0" })), h("bds-icon", { key: '20ca03f78f4baea77931d48e9aa5af9abd64119f', size: "x-small", theme: "solid", name: "error" }))))));
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
//# sourceMappingURL=p-BSqNavl9.js.map

//# sourceMappingURL=p-BSqNavl9.js.map