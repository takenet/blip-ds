'use strict';

var index = require('./index-D_zq0Z7d.js');

const iconButtonCss = ".icon__button{border:none;margin:0;padding:0;width:auto;overflow:visible;outline:none;background:transparent;color:inherit;font:inherit;line-height:normal;-webkit-font-smoothing:inherit;-moz-osx-font-smoothing:inherit;-webkit-appearance:none;cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;position:relative;-webkit-transition:all 0.5s;-moz-transition:all 0.5s;transition:all 0.5s;border-radius:8px;padding:8px}.icon__button::-moz-focus-inner{border:0;padding:0}.icon__button::before{content:\"\";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px}.icon__button:focus-visible{outline:none}.icon__button:focus-visible::before{border-color:var(--color-focus, rgb(194, 38, 251))}.icon__button::after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:transparent;z-index:0;border-radius:8px}.icon__button:hover::after{background-color:var(--color-hover, rgba(0, 0, 0, 0.08))}.icon__button:active::after{background-color:var(--color-pressed, rgba(0, 0, 0, 0.16))}.icon__button .icon__button{position:relative;z-index:1}.icon__button *{pointer-events:none}.icon__button--primary{background:var(--color-surface-primary, rgb(30, 107, 241))}.icon__button--primary .bds-icon{color:var(--color-content-bright, rgb(255, 255, 255))}.icon__button--primary--disabled{opacity:50%;pointer-events:none;cursor:not-allowed;color:#e8f2ff;border:#637798}.icon__button--primary--disabled:hover,.icon__button--primary--disabled:active{color:#e8f2ff;border:#637798}.icon__button--secondary{color:var(--color-content-default, rgb(40, 40, 40));background:transparent}.icon__button--secondary .bds-icon{color:var(--color-content-default, rgb(40, 40, 40))}.icon__button--secondary--disabled{opacity:50%;pointer-events:none;cursor:not-allowed;color:transparent;border:#637798}.icon__button--secondary--disabled:hover,.icon__button--secondary--disabled:active{color:transparent;border:#637798}.icon__button--tertiary{background:transparent;border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2))}.icon__button--tertiary .bds-icon{color:var(--color-content-default, rgb(40, 40, 40))}.icon__button--tertiary--disabled{opacity:50%;pointer-events:none;cursor:not-allowed;color:#637798;border:1px solid #637798}.icon__button--tertiary--disabled:hover,.icon__button--tertiary--disabled:active{color:#637798;border:1px solid #637798}.icon__button--ghost{background:transparent;border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2))}.icon__button--ghost .bds-icon{color:var(--color-content-default, rgb(40, 40, 40))}.icon__button--ghost--disabled{opacity:50%;pointer-events:none;cursor:not-allowed;color:#637798;border:1px solid #637798}.icon__button--ghost--disabled:hover,.icon__button--ghost--disabled:active{color:#637798;border:1px solid #637798}.icon__button--secondary-white{background:transparent;color:#ffffff}.icon__button--secondary-white:hover,.icon__button--secondary-white:focus{background:rgba(255, 255, 255, 0.3);color:#ffffff}.icon__button--secondary-white:active{background:rgba(255, 255, 255, 0.4);color:#ffffff}.icon__button--secondary-white--disabled{cursor:not-allowed;color:#637798;background:#e8f2ff}.icon__button--delete{background:var(--color-delete, rgb(230, 15, 15))}.icon__button--delete .bds-icon{color:var(--color-content-bright, rgb(255, 255, 255))}.icon__button--delete--disabled{opacity:50%;pointer-events:none;cursor:not-allowed;color:#ba5a5a}.icon__button--delete--disabled:hover,.icon__button--delete--disabled:active{color:#ba5a5a}.icon__button.size-tall{width:56px;height:56px}.icon__button.size-standard{width:48px;height:48px}.icon__button.size-short{width:40px;height:40px}";

const IconButton = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bdsClick = index.createEvent(this, "bdsClick");
        /**
         * 	If true, the base button will be disabled.
         */
        this.disabled = false;
        /**
         * Size. Entered as one of the size. Can be one of:
         * 'tall', 'standard', 'short';
         */
        this.size = 'standard';
        /**
         * Variant. Entered as one of the variant. Can be one of:
         * 'primary', 'secondary', 'ghost', 'dashed';
         */
        this.variant = 'primary';
        /**
         * The theme of the icon. Can be one of:
         * 'outline', 'solid';
         */
        this.iconTheme = 'outline';
        /**
         * used for add icon in input left. Uses the bds-icon component.
         */
        this.icon = null;
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
        this.mapSize = {
            tall: 'xxx-large',
            standard: 'x-large',
            short: 'medium',
        };
        this.mapVariantStyle = {
            primary: 'icon__button--primary',
            secondary: 'icon__button--secondary',
            tertiary: 'icon__button--tertiary',
            delete: 'icon__button--delete',
            ghost: 'icon__button--ghost',
            'secondary--white': 'icon__button--secondary-white',
        };
        this.handleClick = (ev) => {
            if (!this.disabled) {
                this.bdsClick.emit(ev);
            }
        };
    }
    render() {
        if (!this.icon)
            return null;
        const size = this.mapSize[this.size];
        const state = this.mapVariantStyle[this.variant];
        return (index.h("button", { onClick: (ev) => this.handleClick(ev), disabled: this.disabled, class: {
                ['icon__button']: true,
                [state]: true,
                [`${state}--disabled`]: this.disabled,
                [`size-${this.size}`]: true,
            }, "data-test": this.dataTest, tabindex: "0" }, index.h("bds-icon", { name: this.icon, size: size, theme: this.iconTheme, color: "inherit" })));
    }
};
IconButton.style = iconButtonCss;

exports.bds_button_icon = IconButton;
//# sourceMappingURL=bds-button-icon.entry.cjs.js.map

//# sourceMappingURL=bds-button-icon.cjs.entry.js.map