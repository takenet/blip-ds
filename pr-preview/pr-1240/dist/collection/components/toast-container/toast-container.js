import { h, Host } from "@stencil/core";
/**
 * @deprecated Use uai-toast-container with UaiThemeProvider for tokenized styling.
 */
export class BdsToastContainer {
    render() {
        return (h(Host, { key: '3901438ebeabea9aca078e75bc90828dbf295890' }, h("slot", { key: 'a5a0f70b30a3654612d1192f63d319ccbede9628' })));
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
