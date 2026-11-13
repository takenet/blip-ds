import { r as registerInstance, h, H as Host } from './index-CkbvGS8Z.js';

const uaiModalActionCss = () => `:host{display:block;width:100%}.modal__action{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;gap:var(--uai-spacing-xs, 0.5rem)}`;

const UaiModalAction = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: 'df84fc51ccd3ef99257ffb4a67de5b837d769eff' }, h("div", { key: 'b00412a1553498ffb76a92abddef1854d1a801a7', class: "modal__action", part: "action" }, h("slot", { key: '8e594af6e164420fff1d9f62db378392259f9096' }))));
    }
};
UaiModalAction.style = uaiModalActionCss();

export { UaiModalAction as uai_modal_action };
