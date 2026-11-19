import { t as transformTag, r as registerInstance, h, H as Host } from './index-D799VfbI.js';

const uaiTableHeaderCss = () => `:host{display:block}::slotted(${transformTag("uai-table-row")}:not([variant=bar])){min-height:0}`;

const UaiTableHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '7b665fb48476aeea2df76284e1156174094cc9df', role: "rowgroup" }, h("slot", { key: '2a80ea0e754b6ed3d9e6272523a54d15aedbd819' })));
    }
};
UaiTableHeader.style = uaiTableHeaderCss();

export { UaiTableHeader as uai_table_header };
