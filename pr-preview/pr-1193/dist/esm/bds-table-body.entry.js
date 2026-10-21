import { r as registerInstance, h, H as Host, a as getElement } from './index-gowA9FoV.js';

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
        return (h(Host, { key: 'fc1fe0e55b06a1db6159feb3281a7ec56d248ea2', class: { host: true, multiple: this.multipleRows } }, h("slot", { key: '755527b2820cbed3ac01f0f903049fdb70c026c5' })));
    }
    get element() { return getElement(this); }
};
TableBody.style = tableBodyCss;

export { TableBody as bds_table_body };
//# sourceMappingURL=bds-table-body.entry.js.map

//# sourceMappingURL=bds-table-body.entry.js.map