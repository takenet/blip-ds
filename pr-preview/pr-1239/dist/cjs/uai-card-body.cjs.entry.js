'use strict';

var index = require('./index-JW9Yq-qX.js');

const uaiCardBodyCss = () => `:host{display:-ms-flexbox;display:flex;width:100%;min-width:0}`;

const UaiCardBody = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '8dd2beb89585769424945d7ba32666adf349b65c' }, index.h("uai-grid", { key: 'f76097852f89fd4e8d05fa46f72cd1a4e2bcf286', xxs: "12", direction: "column", gap: "1" }, index.h("slot", { key: '96d1b1b34d06390ab80d85a4376c7b92bb6f2972' }))));
    }
};
UaiCardBody.style = uaiCardBodyCss();

exports.uai_card_body = UaiCardBody;
