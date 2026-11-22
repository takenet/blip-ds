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
        return (h(Host, { key: '661d616b9eff11ff559b3c2ae003864c0eafa35b' }, h("div", { key: 'df298c58bf832f0f1660bf13b15a940f0a367af4', class: "modal__action", part: "action" }, h("slot", { key: '73f376bf01372a2f0fc32c19cf514747f2ea2a48' }))));
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
