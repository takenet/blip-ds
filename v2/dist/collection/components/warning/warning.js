import { Host, h } from "@stencil/core";
export class Warning {
    render() {
        return (h(Host, { key: '888a218c6e6ea55ef057a482dad326d06a8b40b2' }, h("div", { key: '5fa88bea1c4710eb42da9679c26122ca94606cdc', class: "warning__body" }, h("bds-icon", { key: 'e9315aedc35cb6b2968822e477d3d567d74007bf', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), h("bds-typo", { key: 'ee1ef49d52d36b14cc9ff85975bc8d41bba64848', variant: "fs-14", tag: "span", class: "warning__message" }, h("slot", { key: 'cc0dc06eefacae265bde84e22712dce16610c1ed' })))));
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
