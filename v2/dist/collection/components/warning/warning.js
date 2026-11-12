import { Host, h } from "@stencil/core";
export class Warning {
    render() {
        return (h(Host, { key: 'f02b3a4953ecc13446496ae0e042392132374b4f' }, h("div", { key: '6f8a1961868ee239cf816f8608cb7bbb9d2a0f27', class: "warning__body" }, h("bds-icon", { key: '6427033cb84d30f23545d667a4914aac1179c2c9', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), h("bds-typo", { key: 'cd1817e7969041c75b1c1ad64e3375524dfc3e55', variant: "fs-14", tag: "span", class: "warning__message" }, h("slot", { key: '84cdedf0e2533f5ba8b61e3b64f7f04b1fb85ff8' })))));
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
