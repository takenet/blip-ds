import { h, Host } from "@stencil/core";
/**
 * @deprecated Use uai-toast-container with UaiThemeProvider for tokenized styling.
 */
export class BdsToastContainer {
    render() {
        return (h(Host, { key: 'f37f81c16a178dd5c71d45cda0534fdd77c6d28c' }, h("slot", { key: '3f46a3383251fc950af2670e761027ef12b62a78' })));
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
