import { r as registerInstance, h, H as Host } from './index-CkbvGS8Z.js';

const toastContainerCss = () => `.sc-bds-toast-container-h{position:fixed;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;z-index:110000;width:456px}.bottom-right.sc-bds-toast-container-h{bottom:48px;right:48px}.bottom-left.sc-bds-toast-container-h{bottom:48px;left:48px}.top-right.sc-bds-toast-container-h{top:24px;right:24px}.top-left.sc-bds-toast-container-h{top:48px;left:48px}@media (max-width: 780px){.sc-bds-toast-container-h{right:0px;left:0px;width:100%}.top-left.sc-bds-toast-container-h,.top-right.sc-bds-toast-container-h{top:20px}.bottom-left.sc-bds-toast-container-h,.bottom-right.sc-bds-toast-container-h{bottom:20px}}`;

const BdsToastContainer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '7882975df3a6944c8d72534b3bb95486a5de3d65' }, h("slot", { key: '989ca6af45f20f11bce63d3eff5f863fffb0dd3a' })));
    }
};
BdsToastContainer.style = toastContainerCss();

export { BdsToastContainer as bds_toast_container };
