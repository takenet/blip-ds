import { Host, h } from "@stencil/core";
const THEMES = ['light', 'dark'];
export class UaiThemeProvider {
    constructor() {
        /**
         * Theme applied to the UAI components inside the provider. Can be one of:
         * 'light', 'dark'. Any other value falls back to 'light' with a console warning.
         */
        this.theme = 'light';
    }
    validateTheme() {
        if (!THEMES.includes(this.theme)) {
            console.warn(`[uai-theme-provider] Unsupported theme "${this.theme}". Using "light".`);
        }
    }
    componentWillLoad() {
        this.validateTheme();
    }
    render() {
        const theme = THEMES.includes(this.theme) ? this.theme : 'light';
        return (h(Host, { key: '829fecdd0ac930b7fa36e6b2c8b9cfe3b4b71142', "data-uai-theme": theme }, h("slot", { key: 'c2e9455ffb3b460c3754f5548ee8a919cb1138a0' })));
    }
    static get is() { return "uai-theme-provider"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-theme-provider.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-theme-provider.css"]
        };
    }
    static get properties() {
        return {
            "theme": {
                "type": "string",
                "attribute": "theme",
                "mutable": false,
                "complexType": {
                    "original": "UaiTheme",
                    "resolved": "\"dark\" | \"light\"",
                    "references": {
                        "UaiTheme": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-theme-provider/uai-theme-provider.tsx",
                            "id": "src/components/uai-theme-provider/uai-theme-provider.tsx::UaiTheme"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Theme applied to the UAI components inside the provider. Can be one of:\n'light', 'dark'. Any other value falls back to 'light' with a console warning."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "'light'"
            }
        };
    }
    static get watchers() {
        return [{
                "propName": "theme",
                "methodName": "validateTheme"
            }];
    }
}
//# sourceMappingURL=uai-theme-provider.js.map
