import { r as registerInstance, h, H as Host } from './index-CkbvGS8Z.js';

const uaiTableHeaderCss = () => `:host{display:block}::slotted(uai-table-row:not([variant=bar])){min-height:0}`;

const UaiTableHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '01cfacef061c956a57f8f82e3ac8b059e1e5b745', role: "rowgroup" }, h("slot", { key: 'f132e9708e7c93bfcc43099e272eef307cfa6142' })));
    }
};
UaiTableHeader.style = uaiTableHeaderCss();

export { UaiTableHeader as uai_table_header };
