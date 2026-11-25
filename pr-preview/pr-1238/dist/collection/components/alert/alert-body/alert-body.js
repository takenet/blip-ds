import { h } from "@stencil/core";
export class AlertBody {
    render() {
        return (h("div", { key: '75f60b6173c5be8bbb1a78ff7fdeca1351a53a42', class: "alert__body" }, h("bds-typo", { key: '1ee585ce6abb9769299821d3f2da1787f891cdb9', variant: "fs-14", bold: "regular", slot: "body" }, h("slot", { key: 'abbefdbb47fd5558e5f627049d252e7baf0939c3' }))));
    }
    static get is() { return "bds-alert-body"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["alert-body.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["alert-body.css"]
        };
    }
}
