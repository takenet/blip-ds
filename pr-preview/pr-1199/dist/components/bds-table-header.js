import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const tableHeaderCss = ".sc-bds-table-header-h{display:table-header-group;border-bottom:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2))}";

const TableHeader = /*@__PURE__*/ proxyCustomElement(class TableHeader extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: '6912979cbae55369fa16a5d3f6cb12cc2802d340' }, h("slot", { key: '335b48a7fcf93044973b02b3d033b2347a62330d' })));
    }
    static get style() { return tableHeaderCss; }
}, [6, "bds-table-header"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-table-header"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-table-header":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TableHeader);
            }
            break;
    } });
}

const BdsTableHeader = TableHeader;
const defineCustomElement = defineCustomElement$1;

export { BdsTableHeader, defineCustomElement };
//# sourceMappingURL=bds-table-header.js.map

//# sourceMappingURL=bds-table-header.js.map