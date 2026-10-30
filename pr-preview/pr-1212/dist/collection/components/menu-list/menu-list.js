import { Host, h } from "@stencil/core";
export class MenuList {
    render() {
        return (h(Host, { key: 'a478240ac7684be570b63c46d586081185f67edc' }, h("div", { key: 'fb94f1fdc038e7613b0a25eb3fcb894cad54beea', class: "menu-list" }, h("div", { key: '72fd9bd5580eb9bbf497e7246b9b6dafd7d8780e', class: "menu-list__left" }), h("slot", { key: 'c26a9a331f11a73cb1253c83e09123e185d44e33' }), h("div", { key: '5a5ee0cb1eeb9047089d7b153800368580ca5651', class: "menu-list__right" }))));
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
