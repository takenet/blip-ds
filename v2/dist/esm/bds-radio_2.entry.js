import { r as registerInstance, c as createEvent, h, H as Host } from './index-CkbvGS8Z.js';

const radioCss = () => `:host{display:-ms-flexbox;display:flex}.radio{display:-ms-flexbox;display:flex;cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.radio [type=radio]{display:none}.radio [type=radio]:focus{outline:0}.radio__circle{-webkit-transition:all 0.3s;transition:all 0.3s;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:0.3s;transition-duration:0.3s;-webkit-transition-timing-function:ease;transition-timing-function:ease;-webkit-transition-delay:0s;transition-delay:0s;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:24px;height:24px;-ms-flex-negative:0;flex-shrink:0;border:2px solid var(--color-content-default, rgb(40, 40, 40));padding:4px;border-radius:100%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;position:relative}.radio__circle__pointer{-webkit-transition:all 0.3s;transition:all 0.3s;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:0.3s;transition-duration:0.3s;-webkit-transition-timing-function:ease;transition-timing-function:ease;-webkit-transition-delay:0s;transition-delay:0s;border-radius:100%;background:transparent;height:10px;width:10px}.radio__circle .hover{width:0;height:0;opacity:0}.radio__circle .focus:focus-visible{display:-ms-flexbox;display:flex;position:absolute;border:2px solid var(--color-focus, rgb(194, 38, 251));border-radius:4px;padding:4px;width:100%;height:100%;outline:none}.radio:hover{border-color:var(--color-content-disable, rgb(89, 89, 89))}.radio:hover .hover{display:-ms-flexbox;display:flex;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));position:absolute;width:36px;height:36px;opacity:1;border-radius:24px;-webkit-transition:width 0.2s, height 0.2s;transition:width 0.2s, height 0.2s}.radio__text{-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-ms-user-select:none;user-select:none;padding-left:8px;color:var(--color-content-default, rgb(40, 40, 40))}.radio{}.radio__input[type=radio]:checked~.radio__circle{background:transparent;border-color:var(--color-content-default, rgb(40, 40, 40))}.radio__input[type=radio]:checked~.radio__circle .radio__circle__pointer{background-color:var(--color-primary, rgb(30, 107, 241))}.radio__input[type=radio]:checked~.radio__circle:hover{border-color:var(--color-content-default, rgb(40, 40, 40))}.radio__input[type=radio]:checked~.radio__circle:hover .radio__circle__pointer{background-color:var(--color-primary, rgb(30, 107, 241))}.radio{}.radio__input[type=radio]:disabled~.radio__circle{border-color:var(--color-content-disable, rgb(89, 89, 89));background-color:var(--color-surface-3, rgb(227, 227, 227))}.radio__input[type=radio]:disabled~.radio__circle .radio__circle__pointer{background-color:transparent}.radio__input[type=radio]:disabled:hover~.radio__circle{border-color:var(--color-content-disable, rgb(89, 89, 89));background-color:var(--color-surface-3, rgb(227, 227, 227))}.radio__input[type=radio]:disabled:hover~.radio__circle .radio__circle__pointer{background-color:transparent}.radio__input[type=radio]:disabled:checked~.radio__circle{border-color:var(--color-content-disable, rgb(89, 89, 89));background-color:var(--color-surface-3, rgb(227, 227, 227))}.radio__input[type=radio]:disabled:checked~.radio__circle .radio__circle__pointer{background-color:var(--color-content-default, rgb(40, 40, 40))}.radio__input[type=radio]:disabled:checked:hover~.radio__circle{border-color:var(--color-content-disable, rgb(89, 89, 89));background-color:var(--color-surface-3, rgb(227, 227, 227))}.radio__input[type=radio]:disabled:checked:hover~.radio__circle .radio__circle__pointer{background-color:var(--color-content-default, rgb(40, 40, 40))}.radio__input[type=radio]:disabled~.radio__text{color:var(--color-content-disable, rgb(89, 89, 89));cursor:not-allowed}.radio__input[type=radio]:disabled~.radio__circle{cursor:not-allowed}`;

let radioButtonIds = 0;
const Radio = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.bdsChange = createEvent(this, "bdsChange");
        this.bdsClickChange = createEvent(this, "bdsClickChange");
        /**
         * If `true`, the checkbox is selected.
         */
        this.checked = false;
        /**
         * If `true`, the user cannot interact with the checkbox.
         */
        this.disabled = false;
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
        this.onClick = (event) => {
            this.checked = true;
            this.bdsClickChange.emit({ checked: this.checked });
            event.stopPropagation();
        };
        this.refNativeInput = (input) => {
            this.nativeInput = input;
        };
    }
    checkedChanged(isChecked) {
        this.bdsChange.emit({ checked: isChecked });
    }
    getInputElement() {
        return Promise.resolve(this.nativeInput);
    }
    getValue() {
        return Promise.resolve(this.nativeInput.checked);
    }
    connectedCallback() {
        this.radioId = this.refer || `bds-radio-${radioButtonIds++}`;
    }
    handleClickKey(event) {
        if ((event.key === 'Enter' || event.key === ' ') && !this.disabled) {
            this.onClick(event);
            event.preventDefault();
            this.bdsClickChange.emit({ checked: this.checked });
        }
    }
    render() {
        return (h(Host, { key: '966cbc1637ead33b556f0811a36c5cff9207c55e' }, h("label", { key: '1100f570883e0c0bdee261ab2f1f25363772160d', class: "radio", htmlFor: this.radioId }, h("input", { key: '713827d632b8a6de1fad5c83a1f94d2f9d6f1a6c', class: "radio__input", type: "radio", ref: this.refNativeInput, id: this.radioId, onClick: this.onClick, disabled: this.disabled, checked: this.checked, value: this.value, name: this.name, "data-test": this.dataTest }), h("div", { key: '7f00c65c65ef94d83df0f6d457041c56236ee940', class: "radio__circle" }, !this.disabled ? h("div", { class: "focus", tabindex: "0", onKeyDown: this.handleClickKey.bind(this) }) : '', !this.disabled ? h("div", { class: "hover" }) : '', h("div", { key: '3c3ad4cac1ba59e6ed88e0175f80c4b200a62e9b', class: "radio__circle__pointer" })), this.label && (h("bds-typo", { key: '4d1abd93bee707b4355ba306e1244b79f2976e81', class: "radio__text", variant: "fs-14", bold: this.checked ? 'bold' : 'regular', tag: "span" }, this.label)), h("slot", { key: '83ce9547970ef4487bcc82f64068fd2a0585c5ac' }))));
    }
    static get watchers() { return {
        "checked": [{
                "checkedChanged": 0
            }]
    }; }
};
Radio.style = radioCss();

const switchCss = () => `.switch{position:relative;display:inline-block}.switch--size-tall{width:56px;height:32px}.switch--size-standard{width:42px;height:24px}.switch--size-short{width:32px;height:18px}.switch .focus:focus-visible{display:-ms-flexbox;display:flex;position:absolute;border:2px solid var(--color-focus, rgb(194, 38, 251));border-radius:4px;width:100%;height:100%;top:-4px;left:-4px;padding-right:4px;padding-bottom:4px;outline:none}.switch input{opacity:100;width:0;height:0}.slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:var(--color-content-ghost, rgb(140, 140, 140));-webkit-transition:0.4s;transition:0.4s;border-radius:34px}.slider--size-tall::before{position:absolute;content:" ";left:4px;bottom:4px;top:4px;background-color:var(--color-content-bright, rgb(255, 255, 255));-webkit-transition:0.4s;transition:0.4s;border-radius:50%;width:24px;height:24px}.slider--size-standard::before{position:absolute;content:" ";left:3px;bottom:3px;top:3px;background-color:var(--color-content-bright, rgb(255, 255, 255));-webkit-transition:0.4s;transition:0.4s;border-radius:50%;width:18px;height:18px}.slider--size-short::before{position:absolute;content:" ";left:2.25px;bottom:2.25px;top:2.25px;background-color:var(--color-content-bright, rgb(255, 255, 255));-webkit-transition:0.4s;transition:0.4s;border-radius:50%;width:13.5px;height:13.5px}.slider--deselected-disabled{cursor:not-allowed;background-color:var(--color-content-ghost, rgb(140, 140, 140));opacity:0.5}input:checked+.slider{background-color:var(--color-surface-primary, rgb(30, 107, 241))}input:checked+.slider--selected-disabled{cursor:not-allowed;opacity:0.5}input:focus+.slider{-webkit-box-shadow:0 0 1px #3f7de8;box-shadow:0 0 1px #3f7de8}input:focus+.slider--selected-disabled{-webkit-box-shadow:0 0 1px #b9cbd3;box-shadow:0 0 1px #b9cbd3}input:focus+.slider--deselected-disabled{-webkit-box-shadow:0 0 1px #d4d4d4;box-shadow:0 0 1px #d4d4d4}input:checked+.slider--size-tall::before{-webkit-transform:translateX(24px);-ms-transform:translateX(24px);transform:translateX(24px)}input:checked+.slider--size-standard::before{-webkit-transform:translateX(18px);-ms-transform:translateX(18px);transform:translateX(18px)}input:checked+.slider--size-short::before{-webkit-transform:translateX(13.75px);-ms-transform:translateX(13.75px);transform:translateX(13.75px)}`;

let switchIds = 0;
const Switch = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.bdsChange = createEvent(this, "bdsChange");
        /**
         * Size. Entered as one of the size. Can be one of:
         * 'tall', 'standard', 'short';
         */
        this.size = 'standard';
        /**
         * If `true`, the switch is selected.
         */
        this.checked = false;
        /**
         * If `true`, the user cannot interact with the switch.
         */
        this.disabled = false;
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
        this.onClick = () => {
            this.checked = !this.checked;
        };
        this.refNativeInput = (input) => {
            this.nativeInput = input;
        };
        this.getStyleState = () => {
            if (this.checked && !this.disabled) {
                return 'slider--selected';
            }
            if (!this.checked && !this.disabled) {
                return 'slider--deselected';
            }
            if (this.checked && this.disabled) {
                return 'slider--selected-disabled';
            }
            if (!this.checked && this.disabled) {
                return 'slider--deselected-disabled';
            }
            return '';
        };
        this.handleClick = (ev) => {
            if (!this.disabled) {
                if (ev.key === 'Enter') {
                    this.checked = !this.checked;
                }
            }
        };
    }
    connectedCallback() {
        this.switchId = this.refer || `bds-switch-${switchIds++}`;
    }
    checkedChanged(isChecked) {
        this.bdsChange.emit({
            checked: isChecked,
        });
    }
    getInputElement() {
        return Promise.resolve(this.nativeInput);
    }
    getValue() {
        return Promise.resolve(this.nativeInput.checked);
    }
    getSizeClass() {
        return `switch switch--size-${this.size} `;
    }
    getSizeSliderClass() {
        return `slider slider--size-${this.size} round `;
    }
    render() {
        const sizeClass = this.getSizeClass();
        const sizeSliderClass = this.getSizeSliderClass();
        const styleState = this.getStyleState();
        return (h("label", { key: '2baf589e554795b6f04f4b9d8094f9f969a19e27', class: { [sizeClass]: true } }, h("div", { key: 'a646bdb9ab65c46df56e8a27233c26805beae5f6', tabindex: "0", onKeyDown: (ev) => this.handleClick(ev), class: "focus" }), h("input", { key: 'c8ed7a9a0fecd5292993f8b3bf50e3a7d4f9410f', type: "checkbox", ref: this.refNativeInput, id: this.switchId, name: this.name, onClick: this.onClick, checked: this.checked, disabled: this.disabled, "data-test": this.dataTest }), h("span", { key: '0276c4d3dd0f3c66d4ac43100e0bb27a1c835c78', class: { [sizeSliderClass]: true, [styleState]: true } })));
    }
    static get watchers() { return {
        "checked": [{
                "checkedChanged": 0
            }]
    }; }
};
Switch.style = switchCss();

export { Radio as bds_radio, Switch as bds_switch };
