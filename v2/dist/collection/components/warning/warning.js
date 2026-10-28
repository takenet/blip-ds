import { Host, h } from "@stencil/core";
export class Warning {
    render() {
        return (h(Host, { key: '94b6b6171eb8c791f32086f7b8f3c14eed5449e7' }, h("div", { key: '00a36ae000a4dd7986adefd7f8b3df97f448a839', class: "warning__body" }, h("bds-icon", { key: 'e3ff86f29ddb5e4967978a478f0ad4488b743ca2', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), h("bds-typo", { key: '89cd4fe68f53cfedfb471e184ae357e196e3af00', variant: "fs-14", tag: "span", class: "warning__message" }, h("slot", { key: '0afc1b85e1988fe271250622bc902c862fede328' })))));
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
