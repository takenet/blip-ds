import { r as registerInstance, h, H as Host, a as getElement } from './index-C3J6Z5OX.js';

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
        return (h(Host, { key: '27bfcdcd8ace4db92acacd5e5a18e80f9b6b47e8', class: { host: true, multiple: this.multipleRows } }, h("slot", { key: '3ff0940651e3b52dcf7648cbc3581ceba9d6c6bc' })));
    }
    get element() { return getElement(this); }
};
TableBody.style = tableBodyCss;

export { TableBody as bds_table_body };
//# sourceMappingURL=bds-table-body.entry.js.map

//# sourceMappingURL=bds-table-body.entry.js.map