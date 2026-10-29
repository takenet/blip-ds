import { Host, h } from "@stencil/core";
export class Warning {
    render() {
        return (h(Host, { key: 'c46051adf48d837214adfc5fec87740c040bdb86' }, h("div", { key: '4a1388a0b499e0b93adbf13396c8e21f8e3d0a07', class: "warning__body" }, h("bds-icon", { key: '7d7569897f365c2f410e64d8ec97be584b25fbd8', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), h("bds-typo", { key: '87aeb566aeaffe521141fa218e2d47499ff90254', variant: "fs-14", tag: "span", class: "warning__message" }, h("slot", { key: '6b2f1a65e166a69034b0fa85e9febecc55e9b521' })))));
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
