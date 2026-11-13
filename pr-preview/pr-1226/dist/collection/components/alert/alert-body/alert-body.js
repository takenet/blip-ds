import { h } from "@stencil/core";
export class AlertBody {
    render() {
        return (h("div", { key: 'e093f5a362d2981dd37892bdadf5dfcb31631206', class: "alert__body" }, h("bds-typo", { key: '4a0ff05bb27ffba899be505104e7fa636a79e892', variant: "fs-14", bold: "regular", slot: "body" }, h("slot", { key: 'c94026f01ecdbdf0112ece9b6d02438f3fb82bfd' }))));
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
