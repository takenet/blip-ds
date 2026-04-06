import { Host, h } from "@stencil/core";
export class MenuList {
    render() {
        return (h(Host, { key: 'fd2efa6166ec5e70194e988a103467e01b316ba1' }, h("div", { key: 'a5e3fb2b77f539269541c72b5912432a2561b651', class: "menu-list" }, h("div", { key: 'b0b96f03859ada57245631b7057a07fa92900b26', class: "menu-list__left" }), h("slot", { key: '80fc703613476822c566b7a280a22fbba1ead92a' }), h("div", { key: '11c99646c228149919951baec400dd658ad9a2a1', class: "menu-list__right" }))));
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
