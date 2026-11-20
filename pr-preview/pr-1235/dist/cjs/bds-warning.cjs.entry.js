'use strict';

var index = require('./index-Bq8uwDLK.js');

const warningCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.warning__body{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;max-width:100%;max-height:100%;background-color:#ededed;border-radius:8px;padding:16px}.warning__icon{color:#f6a721}.warning__message{color:#505f79;margin-left:8px}`;

const Warning = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '888a218c6e6ea55ef057a482dad326d06a8b40b2' }, index.h("div", { key: '5fa88bea1c4710eb42da9679c26122ca94606cdc', class: "warning__body" }, index.h("bds-icon", { key: 'e9315aedc35cb6b2968822e477d3d567d74007bf', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), index.h("bds-typo", { key: 'ee1ef49d52d36b14cc9ff85975bc8d41bba64848', variant: "fs-14", tag: "span", class: "warning__message" }, index.h("slot", { key: 'cc0dc06eefacae265bde84e22712dce16610c1ed' })))));
    }
};
Warning.style = warningCss();

exports.bds_warning = Warning;
