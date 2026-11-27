import { r as registerInstance, h, H as Host } from './index-DUwG7Zwx.js';

const uaiCardBodyCss = () => `:host{display:-ms-flexbox;display:flex;width:100%;min-width:0}`;

const UaiCardBody = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '8dd2beb89585769424945d7ba32666adf349b65c' }, h("uai-grid", { key: 'f76097852f89fd4e8d05fa46f72cd1a4e2bcf286', xxs: "12", direction: "column", gap: "1" }, h("slot", { key: '96d1b1b34d06390ab80d85a4376c7b92bb6f2972' }))));
    }
};
UaiCardBody.style = uaiCardBodyCss();

export { UaiCardBody as uai_card_body };
