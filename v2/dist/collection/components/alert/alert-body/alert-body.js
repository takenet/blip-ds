import { h } from "@stencil/core";
export class AlertBody {
    render() {
        return (h("div", { key: 'b718f074aed9923786e539614b350620ae7641a1', class: "alert__body" }, h("bds-typo", { key: 'd712bacd127944ab172e077ea1d701c9240d91dc', variant: "fs-14", bold: "regular", slot: "body" }, h("slot", { key: '27d4c59430d99277b92c18bfcffad465b1dc547e' }))));
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
