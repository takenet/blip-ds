import { r as registerInstance, h, H as Host } from './index-B3G05Lxx.js';

const uaiModalActionCss = () => `:host{display:block;width:100%}.modal__action{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;gap:var(--uai-spacing-xs, 0.5rem)}`;

const UaiModalAction = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '7fe1fb74e129a559e7fddaf13b243b5a59f9dda3' }, h("div", { key: '1e2040c703d5df55586bc0efa5302102598ef24e', class: "modal__action", part: "action" }, h("slot", { key: '2981a4a8e1083db1721080d1c9b41a28b445e73b' }))));
    }
};
UaiModalAction.style = uaiModalActionCss();

export { UaiModalAction as uai_modal_action };
