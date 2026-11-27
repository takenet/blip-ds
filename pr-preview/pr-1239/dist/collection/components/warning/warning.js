import { Host, h } from "@stencil/core";
export class Warning {
    render() {
        return (h(Host, { key: '9421350be04c3792a4cb25505147f81007080e9d' }, h("div", { key: '9f3dd5c905d447c6bef21f2747d64876336f62c3', class: "warning__body" }, h("bds-icon", { key: '4eac92ad7942824e517dfc8ca97e18a669d34243', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), h("bds-typo", { key: '951220f844f884e762a46bb63cf37e28331029db', variant: "fs-14", tag: "span", class: "warning__message" }, h("slot", { key: '60cb1bdf6049579e6e22476005adf9d8f6ab10df' })))));
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
