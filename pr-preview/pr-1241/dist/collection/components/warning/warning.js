import { Host, h } from "@stencil/core";
export class Warning {
    render() {
        return (h(Host, { key: '6d822227664127c2fa3b2e39625c11380ae375d6' }, h("div", { key: 'ac5d9ba959ae1e94a4c92cc2c313ea9c9c57f9de', class: "warning__body" }, h("bds-icon", { key: '8fb2d189f3f381a630a46d100056e6074f792f21', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), h("bds-typo", { key: 'a79fb46d0981c439e3f096525fbe42e665ad84d7', variant: "fs-14", tag: "span", class: "warning__message" }, h("slot", { key: '6f36d26d6368c71ff8e938c092a868d7f327bbd1' })))));
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
