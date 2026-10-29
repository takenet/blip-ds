import { Host, h } from "@stencil/core";
export class Warning {
    render() {
        return (h(Host, { key: 'a5387e2bc84fa251c21f523da68077ad43ba4a2c' }, h("div", { key: '7789b4625f90dba110f1adf47d50fac819127d88', class: "warning__body" }, h("bds-icon", { key: '9a3bbce842b1f1d3f4e4bd3a92a83c47944ff24c', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), h("bds-typo", { key: 'a50e591cecf3b54eb9e5f85452c4745bb56cb60d', variant: "fs-14", tag: "span", class: "warning__message" }, h("slot", { key: 'fd72c60603c479137e2c67bdc673712d5e4e611d' })))));
    }
    static get is() { return "bds-warning"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["warning.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["warning.css"]
        };
    }
}
