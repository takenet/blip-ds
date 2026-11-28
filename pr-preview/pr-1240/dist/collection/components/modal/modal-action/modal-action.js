import { h } from "@stencil/core";
/**
 * @deprecated Use uai-modal-action with UaiThemeProvider for tokenized styling.
 */
export class BdsModalAction {
    render() {
        return (h("div", { key: 'fd15c33021f36ec716ee0920c81d2b6519d4ad2e', class: "modal__action" }, h("slot", { key: '79e3f09a0aa3de49764abe35be1a2a32f01cce95' })));
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
