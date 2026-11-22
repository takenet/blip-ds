import { t as transformTag, r as registerInstance, h, H as Host } from './index-B3G05Lxx.js';

const uaiTableHeaderCss = () => `:host{display:block}::slotted(${transformTag("uai-table-row")}:not([variant=bar])){min-height:0}`;

const UaiTableHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '0d09f2c6e5ff1eaa4ef7fbf56ad86d4f5004b0df', role: "rowgroup" }, h("slot", { key: 'e32d6de0e9d5d07ee02f5d72357761aed636d090' })));
    }
};
UaiTableHeader.style = uaiTableHeaderCss();

export { UaiTableHeader as uai_table_header };
