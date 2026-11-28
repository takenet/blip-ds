import { h, Host } from "@stencil/core";
/**
 * @deprecated Use uai-toast-container with UaiThemeProvider for tokenized styling.
 */
export class BdsToastContainer {
    render() {
        return (h(Host, { key: 'db8db5f2ca2e14a4f10b19582ac8a2ff3949f828' }, h("slot", { key: '0cc8e976d10961ecc5be93d488ed74cd66dd43c2' })));
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
