import { h } from "@stencil/core";
/**
 * @deprecated Use uai-modal-action with UaiThemeProvider for tokenized styling.
 */
export class BdsModalAction {
    render() {
        return (h("div", { key: '6610343e04d83a52684c8beccf392682f635776d', class: "modal__action" }, h("slot", { key: '15480c41180c0393266947759a28b8f76a076305' })));
    }
    static get is() { return "bds-modal-action"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["modal-action.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["modal-action.css"]
        };
    }
}
