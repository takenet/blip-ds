'use strict';

var index = require('./index-JW9Yq-qX.js');

const uaiModalActionCss = () => `:host{display:block;width:100%}.modal__action{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;gap:var(--uai-spacing-xs, 0.5rem)}`;

const UaiModalAction = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'b35d2348943372c16b3d1be1aedaa8033c574d01' }, index.h("div", { key: '0d38d871dcf9b2baa697ba20815c70949b760833', class: "modal__action", part: "action" }, index.h("slot", { key: 'd68b8515043cabde9c705c9b0239ad9b9c334ead' }))));
    }
};
UaiModalAction.style = uaiModalActionCss();

exports.uai_modal_action = UaiModalAction;
