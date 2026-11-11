import { Host, h } from "@stencil/core";
export class Warning {
    render() {
        return (h(Host, { key: 'bb8e94e14da600e77a6e9faecbef8c883fdfebd6' }, h("div", { key: 'b45794867e4046d8fcedd20a39b44f80ae363072', class: "warning__body" }, h("bds-icon", { key: '14bf31c644def7067f41e8152163dc03c9262e69', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), h("bds-typo", { key: 'd33f3cc6eb336fb82411069219c869ed142a819c', variant: "fs-14", tag: "span", class: "warning__message" }, h("slot", { key: 'eef83092820f0f799dfb53557664cb4826570ad5' })))));
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
