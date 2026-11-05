import { r as registerInstance, h, H as Host } from './index-CkbvGS8Z.js';

const uaiTableHeaderCss = () => `:host{display:block}::slotted(uai-table-row:not([variant=bar])){min-height:0}`;

const UaiTableHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '0b0dd028f9c8c2890fa2e668a49289577ab83367', role: "rowgroup" }, h("slot", { key: 'e36901d6cc6b71eceec2d916c4f463ac0fcdc0d4' })));
    }
};
UaiTableHeader.style = uaiTableHeaderCss();

export { UaiTableHeader as uai_table_header };
