import { t as transformTag, r as registerInstance, h, H as Host } from './index-B3G05Lxx.js';

const uaiTableHeaderCss = () => `:host{display:block}::slotted(${transformTag("uai-table-row")}:not([variant=bar])){min-height:0}`;

const UaiTableHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: 'ee18a1c3a0a53e29f478eadbe95f60801b9fba64', role: "rowgroup" }, h("slot", { key: 'c2c682863290d36fbeaa4b088cc993ca38ae64ea' })));
    }
};
UaiTableHeader.style = uaiTableHeaderCss();

export { UaiTableHeader as uai_table_header };
