import { h, Host } from "@stencil/core";
export class BdsToastContainer {
    render() {
        return (h(Host, { key: 'e849231c30450e4326174ce9ba6c346507ef4b76' }, h("slot", { key: '0b01dbd67d55f90be271098eb0dc1bbfaccb2d38' })));
    }
    static get is() { return "bds-toast-container"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["toast-container.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["toast-container.css"]
        };
    }
}
