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
        return (h(Host, { key: '3d547f6fb8cb93bcf601ba4bc1adf3c548bfbe67' }, h("div", { key: '097108164d21ef92ad4b5576d6ff9eafe0647524', class: "modal__action", part: "action" }, h("slot", { key: '94fe2c763ec069d41faf05e67530e6a718e0a516' }))));
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
