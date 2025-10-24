import { r as registerInstance, c as createEvent, h, H as Host, a as getElement } from './index-C3J6Z5OX.js';

const chipClickableCss = ":host{display:-ms-flexbox;display:flex;height:-webkit-max-content;height:-moz-max-content;height:max-content;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:100%}:host .chip_clickable{display:-ms-flexbox;display:flex;min-width:32px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:24px;border-radius:12px;padding:2px 6px;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-pack:center;justify-content:center;position:relative;z-index:1;-ms-flex-negative:0;flex-shrink:0}:host .chip_clickable--container-text--full{width:100%}:host .chip_clickable--container-text--min{width:calc(100% - 36px)}:host .chip_clickable--container-text--half{width:calc(100% - 16px)}:host .chip_clickable--hide{display:none;padding:0;border:none}:host .chip_clickable .chip_focus:focus{position:absolute;width:100%;height:100%;padding:2px;border-radius:4px;outline:var(--color-focus, rgb(194, 38, 251)) solid 2px}:host .chip_clickable--click{cursor:pointer}:host .chip_clickable--click .chip_darker{opacity:0;position:absolute;width:100%;height:100%;border-radius:inherit;z-index:1;-webkit-backdrop-filter:brightness(1);backdrop-filter:brightness(1);-webkit-box-sizing:border-box;box-sizing:border-box}:host .chip_clickable--click:hover .chip_darker{opacity:1;-webkit-backdrop-filter:brightness(0.9);backdrop-filter:brightness(0.9)}:host .chip_clickable--click:active .chip_darker{opacity:1;-webkit-backdrop-filter:brightness(0.8);backdrop-filter:brightness(0.8)}:host .chip_clickable--disabled{cursor:default;background-color:var(--color-surface-3, rgb(227, 227, 227))}:host .chip_clickable--disabled .chip_clickable--icon{color:var(--color-content-default, rgb(40, 40, 40))}:host .chip_clickable--disabled .chip_clickable--text{color:var(--color-content-default, rgb(40, 40, 40))}:host .chip_clickable--disabled .chip_clickable--close{cursor:default}:host .chip_clickable--text{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:16px;margin:0;padding:0 2px;z-index:2;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;line-height:1}:host .chip_clickable--icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:16px;padding-right:2px;z-index:2}:host .chip_clickable--close{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:16px;padding-left:2px;mix-blend-mode:hard-light;opacity:0.5;z-index:2;position:relative;cursor:pointer}:host .chip_clickable--close .close_focus:focus{position:absolute;width:100%;height:100%;left:-2px;border-radius:4px;outline:var(--color-focus, rgb(194, 38, 251)) solid 2px}:host .chip_clickable--tall{height:32px;border-radius:16px;padding:4px 8px}:host .chip_clickable--tall .chip_clickable--text{height:20px;line-height:1.1}:host .chip_clickable--tall .chip_clickable--icon{height:20px;padding-right:4px}:host .chip_clickable--tall .chip_clickable--close{height:20px;padding-left:4px}:host .chip_clickable--default{background-color:var(--color-system, rgb(178, 223, 253));color:var(--color-content-din, rgb(0, 0, 0))}:host .chip_clickable--info{background-color:var(--color-info, rgb(128, 227, 235));color:var(--color-content-din, rgb(0, 0, 0))}:host .chip_clickable--success{background-color:var(--color-success, rgb(132, 235, 188));color:var(--color-content-din, rgb(0, 0, 0))}:host .chip_clickable--warning{background-color:var(--color-warning, rgb(253, 233, 155));color:var(--color-content-din, rgb(0, 0, 0))}:host .chip_clickable--danger{background-color:var(--color-error, rgb(250, 190, 190));color:var(--color-content-din, rgb(0, 0, 0))}:host .chip_clickable--outline{border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));color:var(--color-content-default, rgb(40, 40, 40))}:host .chip_clickable:focus-visible{outline:none}";

const ChipClickable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { key: '81b8b0eabe8b60422dd6c37db95ff24efd0cce9e' }, h("div", { key: '0c5ea22d5ac037ec92bb1425de62d89e33b3af23', class: {
                chip_clickable: true,
                [`chip_clickable--${this.color}`]: !this.disabled,
                [`chip_clickable--${this.size}`]: true,
                'chip_clickable--hide': !this.visible,
                'chip_clickable--click': this.clickable,
                'chip_clickable--disabled': this.disabled,
            }, onClick: this.handleClick.bind(this), "data-test": this.dataTest }, this.clickable && !this.disabled && (h("div", { key: 'd64148a7990a7122cb83600eeeb0eabe98798597', class: "chip_focus", onKeyDown: this.handleClickKey.bind(this), tabindex: "0" })), this.clickable && !this.disabled && h("div", { key: 'f6c388e3b8cd375e90289fe1fd628f292a42999b', class: "chip_darker" }), this.icon && !this.avatar && (h("div", { key: '89720d37fb9d2bac99b11267ec0f458a2fe74ea6', class: "chip_clickable--icon" }, h("bds-icon", { key: '9ba8e5137ae728faca79e103069499aff6286640', size: this.getSizeIconChip(), name: this.icon }))), this.avatar && (h("div", { key: '24c88bd4c3ece279eddd8135591ab7c997aded43', class: "chip_clickable--avatar" }, h("bds-avatar", { key: '208b5f035f751f13cc4729587e7fc1b5b4fcc82c', size: this.getSizeAvatarChip(), thumbnail: this.avatar }))), h("div", { key: 'ded99799cc37face13162b83114f197b0cdfe9df', class: this.close && (this.icon || this.avatar)
                ? `chip_clickable--container-text--min`
                : !this.close && !this.icon && !this.avatar
                    ? `chip_clickable--container-text--full`
                    : `chip_clickable--container-text--half` }, h("bds-typo", { key: '905058defcc0423413fd0d1319323baf8339820f', "no-wrap": "true", class: "chip_clickable--text", variant: "fs-12", bold: "bold" }, h("slot", { key: '121970910a177829ddf0d67d5198bdc0d4911384' }))), this.close && (h("div", { key: '603693e1efa1e6f8a6ac152c217c5748515d7566', class: "chip_clickable--close", "data-test": this.dtButtonClose, onClick: this.handleCloseChip.bind(this) }, !this.disabled && (h("div", { key: 'f6b41aae039740f488c8b9f91eada9441d3e0d5c', class: "close_focus", onKeyDown: this.handleCloseKey.bind(this), tabindex: "0" })), h("bds-icon", { key: '5823d24b3ee1939dcb8d0638f74eea7be517674c', size: "x-small", theme: "solid", name: "error" }))))));
    }
    get element() { return getElement(this); }
};
ChipClickable.style = chipClickableCss;

const tooltipCss = ".tooltip__wrapper{display:inline-block;position:relative}.tooltip__tip{position:absolute;left:50%;border-radius:8px;padding:8px;background:var(--color-content-default, rgb(40, 40, 40));z-index:90000;white-space:normal;width:-webkit-max-content;width:-moz-max-content;width:max-content;min-width:32px;max-width:320px;-webkit-box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));visibility:hidden;-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out;-webkit-box-sizing:border-box;box-sizing:border-box;cursor:default}.tooltip__tip--visible{visibility:visible}.tooltip__tip::before{content:\"\";left:50%;border:solid transparent;height:0;width:0;position:absolute;pointer-events:none;margin-left:-6px;border-width:6px}.tooltip__tip--top-center,.tooltip__tip--top-left,.tooltip__tip--top-right{bottom:calc(100% + 10px)}.tooltip__tip--top-center::before,.tooltip__tip--top-left::before,.tooltip__tip--top-right::before{top:100%;border-top-color:var(--color-content-default, rgb(40, 40, 40))}.tooltip__tip--top-left{left:0;-webkit-transform:translateX(-15%);transform:translateX(-15%)}.tooltip__tip--top-left::before{left:calc(15% + 6px)}.tooltip__tip--top-right{left:initial;right:0;-webkit-transform:translateX(15%);transform:translateX(15%)}.tooltip__tip--top-right::before{left:calc(85% - 6px)}.tooltip__tip--bottom-center,.tooltip__tip--top-center{-webkit-transform:translateX(-50%);transform:translateX(-50%)}.tooltip__tip--left-center,.tooltip__tip--right-center{-webkit-transform:translateX(0) translateY(-50%);transform:translateX(0) translateY(-50%)}.tooltip__tip--right-center,.tooltip__tip--right-top,.tooltip__tip--right-bottom{left:calc(100% + 10px);top:50%}.tooltip__tip--right-center::before,.tooltip__tip--right-top::before,.tooltip__tip--right-bottom::before{left:-5px;top:50%;-webkit-transform:translateX(0) translateY(-50%);transform:translateX(0) translateY(-50%);border-right-color:var(--color-content-default, rgb(40, 40, 40))}.tooltip__tip--right-top{top:0}.tooltip__tip--right-top::before{top:40%}.tooltip__tip--right-bottom{top:initial;bottom:0}.tooltip__tip--right-bottom::before{top:60%}.tooltip__tip--bottom-center,.tooltip__tip--bottom-right,.tooltip__tip--bottom-left{top:calc(100% + 10px)}.tooltip__tip--bottom-center::before,.tooltip__tip--bottom-right::before,.tooltip__tip--bottom-left::before{bottom:100%;border-bottom-color:var(--color-content-default, rgb(40, 40, 40))}.tooltip__tip--bottom-right{left:initial;right:0;-webkit-transform:translateX(15%);transform:translateX(15%)}.tooltip__tip--bottom-right::before{left:calc(85% - 6px)}.tooltip__tip--bottom-left{left:0;-webkit-transform:translateX(-15%);transform:translateX(-15%)}.tooltip__tip--bottom-left::before{left:calc(15% + 6px)}.tooltip__tip--left-center,.tooltip__tip--left-top,.tooltip__tip--left-bottom{left:auto;right:calc(100% + 10px);top:50%}.tooltip__tip--left-center::before,.tooltip__tip--left-top::before,.tooltip__tip--left-bottom::before{left:auto;right:-11px;top:50%;-webkit-transform:translateX(0) translateY(-50%);transform:translateX(0) translateY(-50%);border-left-color:var(--color-content-default, rgb(40, 40, 40))}.tooltip__tip--left-top{top:0}.tooltip__tip--left-top::before{top:40%}.tooltip__tip--left-bottom{top:initial;bottom:0}.tooltip__tip--left-bottom::before{top:60%}.tooltip__tip__text pre{margin:0;display:-ms-flexbox;display:flex;font-family:inherit;white-space:break-spaces}.tooltip__tip__text .text{color:var(--color-surface-1, rgb(246, 246, 246))}";

const Tooltip = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Used to set tooltip visibility
         */
        this.isMouseOver = false;
        /**
         * Used to set tooltip text
         */
        this.tooltipText = 'Tooltip';
        /**
         * Used to disable tooltip when the button are avalible
         */
        this.disabled = false;
        /**
         * Used to set tooltip position
         */
        this.position = 'left-center';
        /**
         * Used to set tooltip max width
         */
        this.maxWidth = '320px';
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
    }
    /**
     * Method for change the visibility of tooltip.
     */
    async visible() {
        this.isMouseOver = true;
    }
    /**
     * Method for change the visibility of tooltip.
     */
    async invisible() {
        this.isMouseOver = false;
    }
    setVisibility(value) {
        if (this.disabled) {
            this.isMouseOver = false;
            return;
        }
        this.isMouseOver = value;
    }
    componentWillLoad() {
        this.textVerify = this.tooltipText ? this.tooltipText.replace(/<br>/gi, '\r\n') : '';
        this.maxWidtTooltip = this.maxWidth;
    }
    tooltipTextChanged() {
        this.textVerify = this.tooltipText ? this.tooltipText.replace(/<br>/gi, '\r\n') : '';
    }
    maxWidthChanged() {
        this.maxWidtTooltip = this.maxWidth;
    }
    render() {
        const styleTooltip = {
            maxWidth: this.maxWidtTooltip,
        };
        return (h("div", { key: '00b09b6886eb74ac91fbea2c9fbe3d792d5bd6cb', class: "tooltip__wrapper" }, h("div", { key: 'e5026004be5450694921a9741f070f620dab6924', onMouseEnter: () => this.setVisibility(true), onMouseLeave: () => this.setVisibility(false), "data-test": this.dataTest }, h("slot", { key: 'ea0363fa79c3ab2ee36cc0d981025a9dc51cf403' })), h("div", { key: 'cb0da1586a8e66456295a212cfabb1e51831c123', class: {
                tooltip__tip: true,
                [`tooltip__tip--${this.position}`]: true,
                'tooltip__tip--visible': this.isMouseOver,
            }, style: styleTooltip }, h("div", { key: '3c5bf7638affb6719452ed26d67675028cb39510', class: { tooltip__tip__text: true } }, h("pre", { key: 'd330774b5fd7140bf3f7ccb75dc096f33162d587' }, h("bds-typo", { key: 'df2356e9b99a38cb444ed77b283fdedd0c331770', class: "text", "no-wrap": "false", variant: "fs-12" }, this.textVerify))))));
    }
    static get watchers() { return {
        "tooltipText": ["tooltipTextChanged"],
        "maxWidth": ["maxWidthChanged"]
    }; }
};
Tooltip.style = tooltipCss;

export { ChipClickable as bds_chip_clickable, Tooltip as bds_tooltip };
//# sourceMappingURL=bds-chip-clickable.bds-tooltip.entry.js.map

//# sourceMappingURL=bds-chip-clickable_2.entry.js.map