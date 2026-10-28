'use strict';

var index = require('./index-BqjYThoc.js');

const warningCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.warning__body{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;max-width:100%;max-height:100%;background-color:#ededed;border-radius:8px;padding:16px}.warning__icon{color:#f6a721}.warning__message{color:#505f79;margin-left:8px}`;

const Warning = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '94b6b6171eb8c791f32086f7b8f3c14eed5449e7' }, index.h("div", { key: '00a36ae000a4dd7986adefd7f8b3df97f448a839', class: "warning__body" }, index.h("bds-icon", { key: 'e3ff86f29ddb5e4967978a478f0ad4488b743ca2', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), index.h("bds-typo", { key: '89cd4fe68f53cfedfb471e184ae357e196e3af00', variant: "fs-14", tag: "span", class: "warning__message" }, index.h("slot", { key: '0afc1b85e1988fe271250622bc902c862fede328' })))));
    }
};
Warning.style = warningCss();

exports.bds_warning = Warning;
