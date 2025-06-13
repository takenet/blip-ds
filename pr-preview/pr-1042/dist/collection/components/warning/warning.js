import { Host, h } from "@stencil/core";
export class Warning {
    render() {
        return (h(Host, { key: '088aa4e15b700fec87581ad3a6094fe89552a415' }, h("div", { key: '8120a90aa0c30dc99a1dc8ee47b29e7f1a2a7b98', class: "warning__body" }, h("bds-icon", { key: '4b586963f11406e016afed439bb297472579d235', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), h("bds-typo", { key: 'e66fa1878253b7b4e291f15aedfb0efd26dd4da9', variant: "fs-14", tag: "span", class: "warning__message" }, h("slot", { key: 'd7526ba9710b18ac31bcd0cd165506fbfd7144cf' })))));
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
