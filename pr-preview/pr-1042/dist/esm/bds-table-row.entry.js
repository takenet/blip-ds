import { r as registerInstance, h, H as Host, a as getElement } from './index-COEIU3SQ.js';

const tableRowCss = ".sc-bds-table-row-h{display:table-row;height:64px;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;border-bottom:1px solid var(--color-border-2, rgba(0, 0, 0, 0.16))}.sc-bds-table-row-h .collapse-body.sc-bds-table-row{padding:16px;max-height:100px;text-align:left;opacity:1;-webkit-transition:all ease 0.5s;transition:all ease 0.5s}.sc-bds-table-row-h:last-child{border-bottom:none}.clickable--true.sc-bds-table-row-h:hover{background-color:var(--color-hover, rgba(0, 0, 0, 0.08));border-bottom:1px solid var(--color-border-2, rgba(0, 0, 0, 0.16));cursor:pointer}.clickable--true.sc-bds-table-row-h{border-bottom:none}.selected--true.sc-bds-table-row-h{border-radius:8px;outline:2px solid var(--color-primary, rgb(30, 107, 241));outline-offset:-1px;border-bottom:none}.dense-row.sc-bds-table-row-h{height:auto}.collapse-body.sc-bds-table-row-h{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}.arrow.sc-bds-table-row{-webkit-transition:all ease 0.3s;-moz-transition:all ease 0.3s;transition:all ease 0.3s;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.active.sc-bds-table-row{-webkit-transform:rotate(0deg);transform:rotate(0deg)}.collapse.sc-bds-table-row-h{height:0}.collapse.sc-bds-table-row-h .collapse-body.sc-bds-table-row{padding:0;max-height:0;opacity:0;overflow:hidden;-webkit-transition:all ease-in-out 0.5s;transition:all ease-in-out 0.5s}.collapse.sc-bds-table-row-h th.sc-bds-table-row{padding:0}";

const TableRow = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.isDense = false;
        this.isCollapsed = true;
        this.colspanNumber = null;
        /**
         * Prop to make hover animation.
         */
        this.clickable = false;
        /**
         * Prop to highlight the row selected.
         */
        this.selected = false;
        this.toggleCollapse = (target) => {
            if (this.collapse) {
                const body = document.querySelector(`[body-collapse="${target}"]`);
                body.classList.toggle('collapse');
                this.isCollapsed = !this.isCollapsed;
            }
        };
    }
    componentWillLoad() {
        this.bdsTable = this.element.closest('bds-table');
        this.collapseRow = document.querySelector(`[body-collapse="${this.dataTarget}"]`);
        this.colspanNumber = document.querySelector(`bds-table-row`).children.length;
        if (this.bdsTable && (this.bdsTable.getAttribute('dense-table') === 'true' || this.bdsTable.denseTable === true)) {
            this.isDense = true;
        }
        if (this.bdsTable && (this.bdsTable.getAttribute('collapse') === 'true' || this.bdsTable.collapse === true)) {
            this.collapse = true;
            this.clickable = true;
        }
        if (this.collapseRow) {
            this.collapseRow.classList.add('collapse');
            this.collapseRow.classList.add('collapse-body');
        }
    }
    componentWillUpdate() {
        const bdsTable = this.element.closest('bds-table');
        if (bdsTable && (bdsTable.getAttribute('dense-table') === 'true' || bdsTable.denseTable === true)) {
            this.isDense = true;
        }
    }
    render() {
        if (this.bodyCollapse) {
            return (h("th", { colSpan: this.colspanNumber }, h("div", { class: "collapse-body" }, h("slot", null))));
        }
        else {
            const isFirstRow = this.element.closest('bds-table-header') === this.element.parentElement;
            return (h(Host, { class: {
                    host: true,
                    [`clickable--${this.clickable}`]: !isFirstRow && this.clickable === true ? true : false,
                    [`selected--${this.selected}`]: true,
                    'dense-row': this.isDense,
                }, onClick: () => this.toggleCollapse(this.dataTarget) }, this.collapse && (h("bds-table-cell", { type: "custom" }, !isFirstRow && h("bds-icon", { class: { arrow: true, active: this.isCollapsed }, name: "arrow-down" }))), h("slot", null)));
        }
    }
    get element() { return getElement(this); }
};
TableRow.style = tableRowCss;

export { TableRow as bds_table_row };
//# sourceMappingURL=bds-table-row.entry.js.map

//# sourceMappingURL=bds-table-row.entry.js.map