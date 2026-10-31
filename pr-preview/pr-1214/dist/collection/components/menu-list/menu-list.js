import { Host, h } from "@stencil/core";
export class MenuList {
    render() {
        return (h(Host, { key: '3772fb4ec0c587848172d832922b9d5e4596eba2' }, h("div", { key: '8d33e99dee4865567c61657c6e021291db0f3afe', class: "menu-list" }, h("div", { key: 'e002ac786e3540c85bdc95cef919800c6be00de5', class: "menu-list__left" }), h("slot", { key: '3e8f1b2b351923c653966ba99db0736a9ea6c428' }), h("div", { key: '604be0fde1b0254012dcc8043664611c699f5d26', class: "menu-list__right" }))));
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
