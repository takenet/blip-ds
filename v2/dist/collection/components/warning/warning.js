import { Host, h } from "@stencil/core";
export class Warning {
    render() {
        return (h(Host, { key: 'ea7925df89a434797625520e501e7b9eb0f83299' }, h("div", { key: '7b7af9697a475cf142798e9e43feee3985856a6b', class: "warning__body" }, h("bds-icon", { key: '1ccdd2eda69d4d917955b5d480b6a4dfa27de566', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), h("bds-typo", { key: '75f2ff549ec3ec221032bc447f693257b502a21a', variant: "fs-14", tag: "span", class: "warning__message" }, h("slot", { key: '4ecc95ae44ba1488cb390b1d2550519d9917c16a' })))));
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
