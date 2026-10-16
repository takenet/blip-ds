import { p as proxyCustomElement, H, h } from './index.js';
import { d as defineCustomElement$1 } from './p-BTwF0c-l.js';

var CounterTextState;
(function (CounterTextState) {
    CounterTextState["Default"] = "default";
    CounterTextState["Warning"] = "warning";
    CounterTextState["Delete"] = "delete";
})(CounterTextState || (CounterTextState = {}));

const counterTextCss = ".counter-text{background:var(--color-surface-2, rgb(237, 237, 237));color:var(--color-content-disable, rgb(89, 89, 89));-webkit-box-sizing:content-box;box-sizing:content-box;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;border-radius:11px;padding:0 8px;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-ms-user-select:none;user-select:none}.counter-text--active{background:var(--color-system, rgb(178, 223, 253));color:var(--color-content-din, rgb(0, 0, 0))}.counter-text--warning{background:var(--color-warning, rgb(253, 233, 155));color:var(--color-content-din, rgb(0, 0, 0))}.counter-text--delete{background:var(--color-delete, rgb(230, 15, 15));color:var(--color-content-bright, rgb(255, 255, 255))}";

const CounterText = /*@__PURE__*/ proxyCustomElement(class CounterText extends H {
    constructor() {
        super();
        this.__registerHost();
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
        return (h("div", { key: 'eb0ee66e83bb3d4d0755d58b9887bafedffe962f', class: {
                'counter-text': true,
                'counter-text--active': this.active,
                [`counter-text--${state}`]: true,
            } }, h("bds-typo", { key: '8e07b48242309ee2d5047f21bede2f0f68f06771', variant: "fs-10" }, actualLength)));
    }
    static get style() { return counterTextCss; }
}, [0, "bds-counter-text", {
        "length": [1026],
        "max": [2],
        "active": [1028],
        "warning": [1040],
        "delete": [1040]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-counter-text", "bds-typo"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-counter-text":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, CounterText);
            }
            break;
        case "bds-typo":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { CounterText as C, defineCustomElement as d };
//# sourceMappingURL=p-B97ExyrQ.js.map

//# sourceMappingURL=p-B97ExyrQ.js.map