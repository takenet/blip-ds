import { Host, h } from "@stencil/core";
import { warnLegacyValue } from "../../utils/deprecation";
const THEMES = ['light', 'dark'];
/**
 * Theme root for UAI components. Wrap the app (or an area with another theme) in it with theme="light" or "dark".
 * It sets data-uai-theme and the --uai-* tokens from blip-tokens, and does not change the layout (display: contents).
 *
 * @slot - The app or area that receives the theme.
 */
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
            warnLegacyValue('uai-theme-provider', 'theme', this.theme, 'light');
        }
    }
    componentWillLoad() {
        this.validateTheme();
    }
    render() {
        const theme = THEMES.includes(this.theme) ? this.theme : 'light';
        return (h(Host, { key: '65b0c31641a7f1b4de0931919c250c2848fa7167', "data-uai-theme": theme }, h("slot", { key: 'e1940582e77f773cf547445769e9d9fd81d4feeb' })));
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
                "attribute": "theme",
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
