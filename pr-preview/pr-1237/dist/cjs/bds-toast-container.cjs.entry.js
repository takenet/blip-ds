'use strict';

var index = require('./index-GTJCA4wH.js');

const toastContainerCss = () => `.sc-bds-toast-container-h{position:fixed;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;z-index:110000;width:456px}.bottom-right.sc-bds-toast-container-h{bottom:48px;right:48px}.bottom-left.sc-bds-toast-container-h{bottom:48px;left:48px}.top-right.sc-bds-toast-container-h{top:24px;right:24px}.top-left.sc-bds-toast-container-h{top:48px;left:48px}@media (max-width: 780px){.sc-bds-toast-container-h{right:0px;left:0px;width:100%}.top-left.sc-bds-toast-container-h,.top-right.sc-bds-toast-container-h{top:20px}.bottom-left.sc-bds-toast-container-h,.bottom-right.sc-bds-toast-container-h{bottom:20px}}`;

const BdsToastContainer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'b1205ef19e4a36a5c745489980fc2c8c1fbe9a88' }, index.h("slot", { key: '643a5a40487a5c1f0847ee8c9a263298f43eaf90' })));
    }
};
BdsToastContainer.style = toastContainerCss();

exports.bds_toast_container = BdsToastContainer;
