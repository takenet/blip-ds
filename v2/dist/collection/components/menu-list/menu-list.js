import { Host, h } from "@stencil/core";
export class MenuList {
    render() {
        return (h(Host, { key: '5d99f0ff282bf159d9834635b56975ba0a60ee33' }, h("div", { key: 'ec4dc921f997ac8f7ef5e886dda843ed614f6c2f', class: "menu-list" }, h("div", { key: 'fbabd5088b23d69f595af29809a0e52d35ceb3b8', class: "menu-list__left" }), h("slot", { key: '7aa6c3cbff23a1e134f41406fbd6268f209c156d' }), h("div", { key: '2c0ff79247fdabb6319b291e42d398cb18ed3749', class: "menu-list__right" }))));
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
