import { h } from "@stencil/core";
export class AlertBody {
    render() {
        return (h("div", { key: 'c67aceee95698bf2f19866e0c8a01745f7728c60', class: "alert__body" }, h("bds-typo", { key: '2689558a0ca839eec458ad1f0930fc9082053767', variant: "fs-14", bold: "regular", slot: "body" }, h("slot", { key: '9c946e4d3e6a0337b33dc167770ece352ddba9fc' }))));
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
