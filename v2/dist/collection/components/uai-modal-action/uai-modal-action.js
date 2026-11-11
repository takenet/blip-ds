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
        return (h(Host, { key: '2acbb3a911d02c8be6df2a40984910908055cbd5' }, h("div", { key: '93a7d65e067504759e7c0ddfc52fdc04df3b221e', class: "modal__action", part: "action" }, h("slot", { key: '7f111bfe638a5a76c1157cc6cd95b8bc602fc231' }))));
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
