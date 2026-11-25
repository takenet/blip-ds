import { r as registerInstance, t as transformTag, h, H as Host, g as getElement } from './index-B3G05Lxx.js';

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
        return (h(Host, { key: '8bed65880b079cd1f730e52eaca872a2feda7638', class: { host: true, multiple: this.multipleRows } }, h("slot", { key: '84ef1394e4c6e3b925c843d8c370efa5481ada6b' })));
    }
    get element() { return getElement(this); }
};
TableBody.style = tableBodyCss();

export { TableBody as bds_table_body };
