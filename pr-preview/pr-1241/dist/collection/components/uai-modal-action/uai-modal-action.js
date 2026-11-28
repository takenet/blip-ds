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
        return (h(Host, { key: 'b46474090f1cf11103469313da3b8f69a411f042' }, h("div", { key: '918ae30ef4585f347c3f95c79c3eb2a8abced961', class: "modal__action", part: "action" }, h("slot", { key: 'c26198e90d2a1d09fb636b1a604c4aa3e26e0a61' }))));
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
