import { r as registerInstance, h, H as Host } from './index-B3G05Lxx.js';

const uaiTableBodyCss = () => `:host{display:block}`;

const UaiTableBody = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '08ca06f99136962f672890325454e65c4f56a056', role: "rowgroup" }, h("slot", { key: '508a8989c4978b58fc100ed412e0727e592295b2' })));
    }
};
UaiTableBody.style = uaiTableBodyCss();

export { UaiTableBody as uai_table_body };
