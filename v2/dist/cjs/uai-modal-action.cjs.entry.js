'use strict';

var index = require('./index-BuAR9UTp.js');

const uaiModalActionCss = () => `:host{display:block;width:100%}.modal__action{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;gap:var(--uai-spacing-xs, 0.5rem)}`;

const UaiModalAction = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'bf0eb41437155132f656176289a10a0be416b038' }, index.h("div", { key: '8a7e0bef38b570e52e93debf4549c7deb120859b', class: "modal__action", part: "action" }, index.h("slot", { key: 'a7b26b342e317e348ecb05a6056e2818abc0435c' }))));
    }
};
UaiModalAction.style = uaiModalActionCss();

exports.uai_modal_action = UaiModalAction;
