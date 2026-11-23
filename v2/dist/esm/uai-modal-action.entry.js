import { r as registerInstance, h, H as Host } from './index-B3G05Lxx.js';

const uaiModalActionCss = () => `:host{display:block;width:100%}.modal__action{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;gap:var(--uai-spacing-xs, 0.5rem)}`;

const UaiModalAction = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: 'd6806bdbf673343d900b90d0f0f835499c587c11' }, h("div", { key: 'd2bccf6780130f1f0dc0a0cc548bbac4da9de9b9', class: "modal__action", part: "action" }, h("slot", { key: '3cd7375a6c40a2ae7b275b15973834a3efb4ffd9' }))));
    }
};
UaiModalAction.style = uaiModalActionCss();

export { UaiModalAction as uai_modal_action };
