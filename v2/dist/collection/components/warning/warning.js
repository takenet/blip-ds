import { Host, h } from "@stencil/core";
export class Warning {
    render() {
        return (h(Host, { key: 'c52282bc73276f40e058008ecc329fc806e92c4a' }, h("div", { key: '7bcc1d6ab58531de6aed9033d5308acc5068859a', class: "warning__body" }, h("bds-icon", { key: '0422644e44f834fab1bd1b64e4aa90d5beef41fa', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), h("bds-typo", { key: '9a3ffc5b5dd1abc24f0c55953441c74e7b9a7dfc', variant: "fs-14", tag: "span", class: "warning__message" }, h("slot", { key: '58139e6ae80c7d88ddd47852c18f7b916deb08ec' })))));
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
