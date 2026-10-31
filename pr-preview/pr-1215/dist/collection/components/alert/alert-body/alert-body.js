import { h } from "@stencil/core";
export class AlertBody {
    render() {
        return (h("div", { key: '8ded0a5613b845c836739a73875df5c7f207ea1f', class: "alert__body" }, h("bds-typo", { key: '93b8efcf289f4644755ae6040092126271a9f02e', variant: "fs-14", bold: "regular", slot: "body" }, h("slot", { key: '3fa4899d81e5c67ec20de8a6d856065fe9308cc7' }))));
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
