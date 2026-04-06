import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const tableBodyCss = ".sc-bds-table-body-h{display:table-row-group;height:64px}.multiple.sc-bds-table-body-h{border-bottom:1px solid var(--color-border-2, rgba(0, 0, 0, 0.16))}.sc-bds-table-body-h:last-child{border-bottom:none}";

const TableBody = /*@__PURE__*/ proxyCustomElement(class TableBody extends H {
    constructor() {
        super();
        this.__registerHost();
        this.multipleRows = false;
    }
    componentWillLoad() {
        const bdsTable = this.element.closest('bds-table');
        if (bdsTable && (bdsTable.getAttribute('collapse') === 'true' || bdsTable.collapse === true)) {
            this.multipleRows = true;
        }
    }
    render() {
        return (h(Host, { key: 'e6113fa0dff53f53b34d47ac6d77f2ccbd39ba23', class: { host: true, multiple: this.multipleRows } }, h("slot", { key: '48ac1586bb5c488b72ea47d8204bf68072a9d1b7' })));
    }
    get element() { return this; }
    static get style() { return tableBodyCss; }
}, [6, "bds-table-body", {
        "multipleRows": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-table-body"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-table-body":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TableBody);
            }
            break;
    } });
}

const BdsTableBody = TableBody;
const defineCustomElement = defineCustomElement$1;

export { BdsTableBody, defineCustomElement };
//# sourceMappingURL=bds-table-body.js.map

//# sourceMappingURL=bds-table-body.js.map