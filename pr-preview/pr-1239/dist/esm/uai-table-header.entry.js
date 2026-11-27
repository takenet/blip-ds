import { t as transformTag, r as registerInstance, h, H as Host } from './index-DUwG7Zwx.js';

const uaiTableHeaderCss = () => `:host{display:block}::slotted(${transformTag("uai-table-row")}:not([variant=bar])){min-height:0}`;

const UaiTableHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: 'ec9efcfb46af2084a8f6b6126b4f7400a310f62c', role: "rowgroup" }, h("slot", { key: '921d8264f48a0b0ed7bcbf5b0a22189334d425b5' })));
    }
};
UaiTableHeader.style = uaiTableHeaderCss();

export { UaiTableHeader as uai_table_header };
