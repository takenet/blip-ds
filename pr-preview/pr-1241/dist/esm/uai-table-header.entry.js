import { t as transformTag, r as registerInstance, h, H as Host } from './index-B3G05Lxx.js';

const uaiTableHeaderCss = () => `:host{display:block}::slotted(${transformTag("uai-table-row")}:not([variant=bar])){min-height:0}`;

const UaiTableHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: 'e59dc06e78e7c294018c8150f25880ff8b63f986', role: "rowgroup" }, h("slot", { key: '4d573c451c38962158086bcb2483e809a835b8a9' })));
    }
};
UaiTableHeader.style = uaiTableHeaderCss();

export { UaiTableHeader as uai_table_header };
