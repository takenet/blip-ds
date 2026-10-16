import { Host, h } from "@stencil/core";
export class MenuList {
    render() {
        return (h(Host, { key: '408ea024c267c6ff43b3e2f5a0471cd533715453' }, h("div", { key: '2df69d1cdb447525c928a639298e7ef2d493dd25', class: "menu-list" }, h("div", { key: 'd8e2cccbe7ca0c34be707a2dd7311c6e94fcae65', class: "menu-list__left" }), h("slot", { key: 'dcacf00e21ce59e07596517b4e2c14da2d1c6ecb' }), h("div", { key: 'ea0252a12a9be26d4413c3c619988faee8635534', class: "menu-list__right" }))));
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
