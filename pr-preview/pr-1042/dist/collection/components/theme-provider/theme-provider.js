import { Host, h } from "@stencil/core";
export class ThemeProvider {
    constructor() {
        /**
         * Set what theme will be aplyed inside the component.
         * 'light', 'dark';
         */
        this.theme = 'light';
    }
    render() {
        return (h(Host, { key: '993effb08ca8e5619a69bdf9100b4934bef91f4d', class: { theme: true, [`theme--${this.theme}`]: true } }, h("slot", { key: '7e1576c4ff0593e4a809def63616a5937b512f74' })));
    }
    static get is() { return "bds-theme-provider"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["theme-provider.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["theme-provider.css"]
        };
    }
    static get properties() {
        return {
            "theme": {
                "type": "string",
                "attribute": "theme",
                "mutable": false,
                "complexType": {
                    "original": "Themes",
                    "resolved": "\"dark\" | \"high-contrast\" | \"light\"",
                    "references": {
                        "Themes": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/theme-provider/theme-provider.tsx",
                            "id": "src/components/theme-provider/theme-provider.tsx::Themes"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Set what theme will be aplyed inside the component.\n'light', 'dark';"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'light'"
            }
        };
    }
}
//# sourceMappingURL=theme-provider.js.map
