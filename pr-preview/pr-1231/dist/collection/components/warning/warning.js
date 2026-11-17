import { Host, h } from "@stencil/core";
export class Warning {
    render() {
        return (h(Host, { key: 'a4ea8935003d44b527ff26de33e0d0cac9e929a0' }, h("div", { key: 'a195df117eaf1930b50ae6dc2e1976a034e3d575', class: "warning__body" }, h("bds-icon", { key: '465d42026e583cbd4cec951493bad2bc99c4f60a', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), h("bds-typo", { key: 'be9bc277c4f1777157bcbc908be7c10f5126eadd', variant: "fs-14", tag: "span", class: "warning__message" }, h("slot", { key: '909edecd18c677bee71b8531b82678ff6045643e' })))));
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
