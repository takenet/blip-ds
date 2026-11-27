import { r as registerInstance, t as transformTag, h, H as Host, g as getElement } from './index-DUwG7Zwx.js';

const tableBodyCss = () => `.sc-bds-table-body-h{display:table-row-group;height:64px}.multiple.sc-bds-table-body-h{border-bottom:1px solid var(--color-border-2, rgba(0, 0, 0, 0.16))}.sc-bds-table-body-h:last-child{border-bottom:none}`;

const TableBody = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.multipleRows = false;
    }
    componentWillLoad() {
        const bdsTable = this.element.closest(`${transformTag("bds-table")}`);
        if (bdsTable && (bdsTable.getAttribute('collapse') === 'true' || bdsTable.collapse === true)) {
            this.multipleRows = true;
        }
    }
    render() {
        return (h(Host, { key: 'e21424f2005b92fdf104ee7b33f55f646241cfa5', class: { host: true, multiple: this.multipleRows } }, h("slot", { key: 'fc70c4d1eee175422b098f27b3c760c05412c9b2' })));
    }
    get element() { return getElement(this); }
};
TableBody.style = tableBodyCss();

export { TableBody as bds_table_body };
