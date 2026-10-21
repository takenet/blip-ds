import { Host, h } from "@stencil/core";
export class Warning {
    render() {
        return (h(Host, { key: 'dde6714cdd0c497194091cbc73aec4cbd2277ba0' }, h("div", { key: 'f30261a4cb010ba12e3959a05dfd65e33fbbff58', class: "warning__body" }, h("bds-icon", { key: 'c01c4cf23bf0d1d5310087e78b7526ed665e1f3e', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), h("bds-typo", { key: '6986c4a6075226b17e8238c9b2149be062c27e92', variant: "fs-14", tag: "span", class: "warning__message" }, h("slot", { key: '7b60dc98c4c51b867a49c64f5a187221d049d9f7' })))));
    }
    static get is() { return "bds-warning"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["warning.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["warning.css"]
        };
    }
}
//# sourceMappingURL=warning.js.map
