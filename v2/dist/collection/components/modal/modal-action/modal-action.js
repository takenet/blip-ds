import { h } from "@stencil/core";
/**
 * @deprecated Use uai-modal-action with UaiThemeProvider for tokenized styling.
 */
export class BdsModalAction {
    render() {
        return (h("div", { key: '213693438fd4e9ab3ef5100eb735869a5c441f1e', class: "modal__action" }, h("slot", { key: '4a9d30cd594fdae914d6a752a9ca23895a74a9b8' })));
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
