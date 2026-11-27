import { h } from "@stencil/core";
/**
 * @deprecated Use uai-modal-action with UaiThemeProvider for tokenized styling.
 */
export class BdsModalAction {
    render() {
        return (h("div", { key: '22e800186871264f7d051f943e2ecf66567f7d8b', class: "modal__action" }, h("slot", { key: '3eb5499b0bd63326b0ef0239c9a4fb96834f1c0d' })));
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
