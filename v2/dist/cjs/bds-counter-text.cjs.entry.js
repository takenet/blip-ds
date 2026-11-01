'use strict';

var index = require('./index-BuAR9UTp.js');

var CounterTextState;
(function (CounterTextState) {
    CounterTextState["Default"] = "default";
    CounterTextState["Warning"] = "warning";
    CounterTextState["Delete"] = "delete";
})(CounterTextState || (CounterTextState = {}));

const counterTextCss = () => `.counter-text{background:var(--color-surface-2, rgb(237, 237, 237));color:var(--color-content-disable, rgb(89, 89, 89));-webkit-box-sizing:content-box;box-sizing:content-box;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;border-radius:11px;padding:0 8px;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-ms-user-select:none;user-select:none}.counter-text--active{background:var(--color-system, rgb(178, 223, 253));color:var(--color-content-din, rgb(0, 0, 0))}.counter-text--warning{background:var(--color-warning, rgb(253, 233, 155));color:var(--color-content-din, rgb(0, 0, 0))}.counter-text--delete{background:var(--color-delete, rgb(230, 15, 15));color:var(--color-content-bright, rgb(255, 255, 255))}`;

const CounterText = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h("div", { key: '5f95955b31e0132998dc71c0898d7d819f3cbc98', class: {
                'counter-text': true,
                'counter-text--active': this.active,
                [`counter-text--${state}`]: true,
            } }, index.h("bds-typo", { key: 'b7368fac20872d4e8baa20766d1631e61a0e29dc', variant: "fs-10" }, actualLength)));
    }
};
CounterText.style = counterTextCss();

exports.bds_counter_text = CounterText;
