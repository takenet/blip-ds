import { h } from "@stencil/core";
export class AlertBody {
    render() {
        return (h("div", { key: '87ebd2e00fe4ee242289ec54514a083a0101b3d5', class: "alert__body" }, h("bds-typo", { key: '65b5a98193384a4e442754060510a4ecd309bf29', variant: "fs-14", bold: "regular", slot: "body" }, h("slot", { key: '5d58cad38654fbc312417fc47e4fbe4f64fb4146' }))));
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
