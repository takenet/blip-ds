import { Host, h } from "@stencil/core";
export class Warning {
    render() {
        return (h(Host, { key: 'acd1edde3d422914067c8214951901c857ee6c63' }, h("div", { key: 'cddb29bec222245680448403fce9ba9868cc5a7b', class: "warning__body" }, h("bds-icon", { key: 'd632547a261754b2b9937e3e9ac050620dd6bfa0', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), h("bds-typo", { key: 'd9d8abf79cb26ef8e991fc726df51282960de28a', variant: "fs-14", tag: "span", class: "warning__message" }, h("slot", { key: 'd75984da3b5b4f46bd7b9cd6f39928d9d4fa8a83' })))));
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
