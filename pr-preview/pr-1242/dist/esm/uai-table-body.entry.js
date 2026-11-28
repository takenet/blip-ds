import { r as registerInstance, h, H as Host } from './index-B3G05Lxx.js';

const uaiTableBodyCss = () => `:host{display:block}`;

const UaiTableBody = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '62bb688c84cf2014089909c56adbfa5883f2808d', role: "rowgroup" }, h("slot", { key: 'e31fd63797320b43b3ffc49249a42733a2ddf0ca' })));
    }
};
UaiTableBody.style = uaiTableBodyCss();

export { UaiTableBody as uai_table_body };
