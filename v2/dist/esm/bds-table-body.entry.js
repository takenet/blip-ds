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
        return (h(Host, { key: '6fd4435dd90fba8dbdf3ec4cf22b128a27869818', class: { host: true, multiple: this.multipleRows } }, h("slot", { key: '3b8c873e9c861b5e6b39b46f8f9097d342d2681d' })));
    }
    get element() { return getElement(this); }
};
TableBody.style = tableBodyCss;

export { TableBody as bds_table_body };
//# sourceMappingURL=bds-table-body.entry.js.map

//# sourceMappingURL=bds-table-body.entry.js.map