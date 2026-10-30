'use strict';

var index = require('./index-BuAR9UTp.js');

const warningCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.warning__body{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;max-width:100%;max-height:100%;background-color:#ededed;border-radius:8px;padding:16px}.warning__icon{color:#f6a721}.warning__message{color:#505f79;margin-left:8px}`;

const Warning = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '6bb75bb059f8376e73a4d98aa47f652ecce83d1b' }, index.h("div", { key: '3c17da7baa66c6fd089ebb1cff7f4057a1846983', class: "warning__body" }, index.h("bds-icon", { key: '52ac18bf0130c7fba6f29daf7e7c43adcae48007', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), index.h("bds-typo", { key: 'e07a4c930c53cd728663b342955f6b4a8de63bb4', variant: "fs-14", tag: "span", class: "warning__message" }, index.h("slot", { key: '55ffabb602bb99821018258b7919fe3493573bfa' })))));
    }
};
Warning.style = warningCss();

exports.bds_warning = Warning;
