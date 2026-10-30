import { Host, h } from "@stencil/core";
export class Warning {
    render() {
        return (h(Host, { key: '6bb75bb059f8376e73a4d98aa47f652ecce83d1b' }, h("div", { key: '3c17da7baa66c6fd089ebb1cff7f4057a1846983', class: "warning__body" }, h("bds-icon", { key: '52ac18bf0130c7fba6f29daf7e7c43adcae48007', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), h("bds-typo", { key: 'e07a4c930c53cd728663b342955f6b4a8de63bb4', variant: "fs-14", tag: "span", class: "warning__message" }, h("slot", { key: '55ffabb602bb99821018258b7919fe3493573bfa' })))));
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
