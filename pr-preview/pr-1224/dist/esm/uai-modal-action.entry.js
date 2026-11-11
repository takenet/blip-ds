import { r as registerInstance, h, H as Host } from './index-CkbvGS8Z.js';

const uaiModalActionCss = () => `:host{display:block;width:100%}.modal__action{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;gap:var(--uai-spacing-xs, 0.5rem)}`;

const UaiModalAction = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '2acbb3a911d02c8be6df2a40984910908055cbd5' }, h("div", { key: '93a7d65e067504759e7c0ddfc52fdc04df3b221e', class: "modal__action", part: "action" }, h("slot", { key: '7f111bfe638a5a76c1157cc6cd95b8bc602fc231' }))));
    }
};
UaiModalAction.style = uaiModalActionCss();

export { UaiModalAction as uai_modal_action };
