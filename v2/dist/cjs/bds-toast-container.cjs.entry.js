'use strict';

var index = require('./index-DQyYkciT.js');

const toastContainerCss = ".sc-bds-toast-container-h{position:fixed;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;z-index:110000;width:456px}.bottom-right.sc-bds-toast-container-h{bottom:48px;right:48px}.bottom-left.sc-bds-toast-container-h{bottom:48px;left:48px}.top-right.sc-bds-toast-container-h{top:24px;right:24px}.top-left.sc-bds-toast-container-h{top:48px;left:48px}@media (max-width: 780px){.sc-bds-toast-container-h{right:0px;left:0px;width:100%}.top-left.sc-bds-toast-container-h,.top-right.sc-bds-toast-container-h{top:20px}.bottom-left.sc-bds-toast-container-h,.bottom-right.sc-bds-toast-container-h{bottom:20px}}";

const BdsToastContainer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '83f1fb76ff973fb12d820e3a80d178749c85fe2e' }, index.h("slot", { key: 'd12cd89d2a1ef6ca8a36fe2a2dd2186fa0738864' })));
    }
};
BdsToastContainer.style = toastContainerCss;

exports.bds_toast_container = BdsToastContainer;
//# sourceMappingURL=bds-toast-container.entry.cjs.js.map

//# sourceMappingURL=bds-toast-container.cjs.entry.js.map