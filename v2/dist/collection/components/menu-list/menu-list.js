import { Host, h } from "@stencil/core";
export class MenuList {
    render() {
        return (h(Host, { key: 'acabd22ae0445bac489939ad1a5dbbd26a508c29' }, h("div", { key: 'c9904e89f290b7470536851563d6775309892dce', class: "menu-list" }, h("div", { key: '5ad615415933402dc4c8a65adc948da147b83719', class: "menu-list__left" }), h("slot", { key: 'bd87939492c9f700fef4b4fa248e902f09573413' }), h("div", { key: '1742ddc25b04d9fec527f1f429913f41e1ff3260', class: "menu-list__right" }))));
    }
    static get is() { return "bds-menu-list"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["menu-list.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["menu-list.css"]
        };
    }
}
//# sourceMappingURL=menu-list.js.map
