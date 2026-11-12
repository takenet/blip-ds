import { r as registerInstance, h, H as Host } from './index-CkbvGS8Z.js';

const uaiTableHeaderCss = () => `:host{display:block}::slotted(uai-table-row:not([variant=bar])){min-height:0}`;

const UaiTableHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '7e003a049facebf121ddf7ef6744e17ac1ad00fc', role: "rowgroup" }, h("slot", { key: '36fd8265c8491a59fc7b2eccdd2b3b08f5a876d5' })));
    }
};
UaiTableHeader.style = uaiTableHeaderCss();

export { UaiTableHeader as uai_table_header };
