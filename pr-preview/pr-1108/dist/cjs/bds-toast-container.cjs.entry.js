'use strict';

var index = require('./index-D_zq0Z7d.js');

const toastContainerCss = ".sc-bds-toast-container-h{position:fixed;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;z-index:110000;width:456px}.bottom-right.sc-bds-toast-container-h{bottom:48px;right:48px}.bottom-left.sc-bds-toast-container-h{bottom:48px;left:48px}.top-right.sc-bds-toast-container-h{top:24px;right:24px}.top-left.sc-bds-toast-container-h{top:48px;left:48px}@media (max-width: 780px){.sc-bds-toast-container-h{right:0px;left:0px;width:100%}.top-left.sc-bds-toast-container-h,.top-right.sc-bds-toast-container-h{top:20px}.bottom-left.sc-bds-toast-container-h,.bottom-right.sc-bds-toast-container-h{bottom:20px}}";

const BdsToastContainer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '19589f1833552467cf9e28bb97e3c965b2ebd1d2' }, index.h("slot", { key: 'a98aaed749b6bb2d09792df7bbc5ee81deef1975' })));
    }
};
BdsToastContainer.style = toastContainerCss;

exports.bds_toast_container = BdsToastContainer;
//# sourceMappingURL=bds-toast-container.entry.cjs.js.map

//# sourceMappingURL=bds-toast-container.cjs.entry.js.map