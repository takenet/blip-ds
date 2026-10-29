import { h } from "@stencil/core";
export class AlertBody {
    render() {
        return (h("div", { key: '9063d75033181df9cd3b021566a42394acaa1d83', class: "alert__body" }, h("bds-typo", { key: 'fd0f8fcc53c25b7daabdebef346ce2eb2e1b7262', variant: "fs-14", bold: "regular", slot: "body" }, h("slot", { key: '2ba09628fa332b45217c75267f36de189e679a34' }))));
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
