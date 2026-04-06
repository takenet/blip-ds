import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const tableHeaderCss = ".sc-bds-table-header-h{display:table-header-group;border-bottom:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2))}";

const TableHeader = /*@__PURE__*/ proxyCustomElement(class TableHeader extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: '7b5161825754a09d0ed81913176b57687fbb3e79' }, h("slot", { key: '2e56df889f2dc5557a4c98ba7cc77bdc8548dd3a' })));
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