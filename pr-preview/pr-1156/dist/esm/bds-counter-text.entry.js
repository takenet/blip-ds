import { r as registerInstance, h } from './index-BALoTlPi.js';

var CounterTextState;
(function (CounterTextState) {
    CounterTextState["Default"] = "default";
    CounterTextState["Warning"] = "warning";
    CounterTextState["Delete"] = "delete";
})(CounterTextState || (CounterTextState = {}));

const counterTextCss = ".counter-text{background:var(--color-surface-2, rgb(237, 237, 237));color:var(--color-content-disable, rgb(89, 89, 89));-webkit-box-sizing:content-box;box-sizing:content-box;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;border-radius:11px;padding:0 8px;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-ms-user-select:none;user-select:none}.counter-text--active{background:var(--color-system, rgb(178, 223, 253));color:var(--color-content-din, rgb(0, 0, 0))}.counter-text--warning{background:var(--color-warning, rgb(253, 233, 155));color:var(--color-content-din, rgb(0, 0, 0))}.counter-text--delete{background:var(--color-delete, rgb(230, 15, 15));color:var(--color-content-bright, rgb(255, 255, 255))}";

const CounterText = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.active = false;
        this.warning = { max: 20, min: 2 };
        this.delete = { max: 1, min: 0 };
    }
    getState() {
        const actualLength = this.getActualLength();
        if (actualLength >= this.warning.min && actualLength <= this.warning.max) {
            return CounterTextState.Warning;
        }
        if (actualLength <= this.delete.max) {
            return CounterTextState.Delete;
        }
        return CounterTextState.Default;
    }
    getActualLength() {
        return this.max - this.length;
    }
    render() {
        const state = this.getState();
        const actualLength = this.getActualLength();
        return (h("div", { key: '59797bc59075a09736c23c2d40172b3ef7d01bae', class: {
                'counter-text': true,
                'counter-text--active': this.active,
                [`counter-text--${state}`]: true,
            } }, h("bds-typo", { key: 'd5967b03ccc0f3193b36f079dd93d80fc6de93fa', variant: "fs-10" }, actualLength)));
    }
};
CounterText.style = counterTextCss;

export { CounterText as bds_counter_text };
//# sourceMappingURL=bds-counter-text.entry.js.map

//# sourceMappingURL=bds-counter-text.entry.js.map