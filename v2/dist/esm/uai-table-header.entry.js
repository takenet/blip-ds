import { t as transformTag, r as registerInstance, h, H as Host } from './index-D799VfbI.js';

const uaiTableHeaderCss = () => `:host{display:block}::slotted(${transformTag("uai-table-row")}:not([variant=bar])){min-height:0}`;

const UaiTableHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '2894ae96f19985f920fd0852063692df1533ee38', role: "rowgroup" }, h("slot", { key: '4a9b619a59fc6826fb340ef201a21d4f90c15799' })));
    }
};
UaiTableHeader.style = uaiTableHeaderCss();

export { UaiTableHeader as uai_table_header };
