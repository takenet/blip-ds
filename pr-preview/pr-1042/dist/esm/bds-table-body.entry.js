import { r as registerInstance, h, H as Host, a as getElement } from './index-COEIU3SQ.js';

const tableBodyCss = ".sc-bds-table-body-h{display:table-row-group;height:64px}.multiple.sc-bds-table-body-h{border-bottom:1px solid var(--color-border-2, rgba(0, 0, 0, 0.16))}.sc-bds-table-body-h:last-child{border-bottom:none}";

const TableBody = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.multipleRows = false;
    }
    componentWillLoad() {
        const bdsTable = this.element.closest('bds-table');
        if (bdsTable && (bdsTable.getAttribute('collapse') === 'true' || bdsTable.collapse === true)) {
            this.multipleRows = true;
        }
    }
    render() {
        return (h(Host, { key: 'fa882714e063128308e411219b6c4b13581ad3a8', class: { host: true, multiple: this.multipleRows } }, h("slot", { key: 'ea31c990c01de9899c3116716875e5f5a90aa9af' })));
    }
    get element() { return getElement(this); }
};
TableBody.style = tableBodyCss;

export { TableBody as bds_table_body };
//# sourceMappingURL=bds-table-body.entry.js.map

//# sourceMappingURL=bds-table-body.entry.js.map