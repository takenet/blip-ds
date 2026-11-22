import { h } from "@stencil/core";
/**
 * @deprecated Use uai-modal-action with UaiThemeProvider for tokenized styling.
 */
export class BdsModalAction {
    render() {
        return (h("div", { key: 'f8f9a9ed118655b7bc440ee4489db7d216ebea06', class: "modal__action" }, h("slot", { key: 'fbaf152b23ec3a92d1f70cbf7c898c402944365c' })));
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
