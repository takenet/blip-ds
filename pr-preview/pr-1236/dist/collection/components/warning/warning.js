import { Host, h } from "@stencil/core";
export class Warning {
    render() {
        return (h(Host, { key: '06d2d1cc9e46e40b6e4b1623ec7385fcfe591812' }, h("div", { key: '4cf94a375662f8ec2d18045fb1037ec4290eb96d', class: "warning__body" }, h("bds-icon", { key: '34333418968bdb0ed83fae5c6cc9d62090d27df5', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), h("bds-typo", { key: '04d682be37414774687d1be45b7addbfb2815a0f', variant: "fs-14", tag: "span", class: "warning__message" }, h("slot", { key: '1077e4737245aa20d9e5622cbfb754c096db3bfb' })))));
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
