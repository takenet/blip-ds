import { Host, h } from "@stencil/core";
/**
 * Row for the buttons of a uai-modal, aligned to the end with spacing/xs between them. Use it with slot="footer" in uai-modal;
 * pair with uai-button (Cancelar, Salvar); avoid putting long content in it.
 *
 * @slot - Action buttons.
 * @part action - The action row.
 */
export class UaiModalAction {
    render() {
        return (h(Host, { key: 'b35d2348943372c16b3d1be1aedaa8033c574d01' }, h("div", { key: '0d38d871dcf9b2baa697ba20815c70949b760833', class: "modal__action", part: "action" }, h("slot", { key: 'd68b8515043cabde9c705c9b0239ad9b9c334ead' }))));
    }
    static get is() { return "uai-modal-action"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-modal-action.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-modal-action.css"]
        };
    }
}
