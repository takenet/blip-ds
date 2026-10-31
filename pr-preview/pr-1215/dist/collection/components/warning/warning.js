import { Host, h } from "@stencil/core";
export class Warning {
    render() {
        return (h(Host, { key: '896b1c74919d9ef6c333b12db9834e97f2467195' }, h("div", { key: 'd785258433921b4c530be69e5076649b8adaec06', class: "warning__body" }, h("bds-icon", { key: '609a263bbd4df122a5f30943c3ff9f86966f108b', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), h("bds-typo", { key: '939f65933ee5d3f4d6e8115c623b21f66d0e0c42', variant: "fs-14", tag: "span", class: "warning__message" }, h("slot", { key: 'a93ec321d8a36c87a50278248647736520ba1744' })))));
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
