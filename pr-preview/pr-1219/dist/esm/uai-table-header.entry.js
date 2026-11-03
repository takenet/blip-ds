import { r as registerInstance, h, H as Host } from './index-CkbvGS8Z.js';

const uaiTableHeaderCss = () => `:host{display:block}::slotted(uai-table-row:not([variant=bar])){min-height:0}`;

const UaiTableHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '49acdc2b23e30ea92249f18f3f13dbfea509e404', role: "rowgroup" }, h("slot", { key: '903d5880d1d929d133e93aeba7da65acb6dc5297' })));
    }
};
UaiTableHeader.style = uaiTableHeaderCss();

export { UaiTableHeader as uai_table_header };
