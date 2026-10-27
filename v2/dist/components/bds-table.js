import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const tableCss = ".sc-bds-table-h{width:100%;border-radius:8px;background-color:var(--color-surface-1, rgb(246, 246, 246));border:1px solid var(--color-border-3, rgba(0, 0, 0, 0.06))}.bds-table.sc-bds-table{display:table;width:100%;border-spacing:0px;-webkit-box-sizing:border-box;box-sizing:border-box;border-collapse:collapse}.scrollable.sc-bds-table-h{overflow-x:auto}.dense-table.sc-bds-table-h{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}";

const Table = /*@__PURE__*/ proxyCustomElement(class Table extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: '4b866bbeaf4e2a75dbe05e01c84476894e10f5db', class: { scrollable: this.scrollable, 'dense-table': this.denseTable } }, h("div", { key: 'ff5f43216fc34733dc65bb5c56dbaee18a0cd89b', class: "bds-table" }, h("slot", { key: '49da8ff435066fb4a2a9716e2608f3d74d5acb89' }))));
    }
    static get style() { return tableCss; }
}, [6, "bds-table", {
        "scrollable": [1540],
        "collapse": [1540],
        "denseTable": [1540, "dense-table"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-table"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-table":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Table);
            }
            break;
    } });
}

const BdsTable = Table;
const defineCustomElement = defineCustomElement$1;

export { BdsTable, defineCustomElement };
//# sourceMappingURL=bds-table.js.map

//# sourceMappingURL=bds-table.js.map