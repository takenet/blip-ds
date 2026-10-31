import { Host, h } from "@stencil/core";
export class MenuList {
    render() {
        return (h(Host, { key: 'da436b8a8615fe4943a81b8b84a7060d6f5ca39c' }, h("div", { key: '9e4d7d648193ee89fb53294adc7554e14b9bb642', class: "menu-list" }, h("div", { key: '7eebe9ae0ed82d6438a765924225bfd74e452565', class: "menu-list__left" }), h("slot", { key: 'c087b0db5965d975551d59375bd58945b5657a28' }), h("div", { key: '00256063fa451443c2e0ab8add42b4ca6e3a7475', class: "menu-list__right" }))));
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
