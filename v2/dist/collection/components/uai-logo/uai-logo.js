import { Host, h } from "@stencil/core";
import { loadAssetSvg } from "../../utils/asset-loader";
import { warnOnce } from "../../utils/deprecation";
import { getLogoName } from "../icon/utils";
/**
 * Brand logo from the versioned asset catalog in blip-tokens. Set the host width to control its size;
 * the SVG keeps the aspect ratio from its viewBox. Use aria-label for a meaningful logo, or omit it when decorative.
 *
 * @part asset - The element containing the logo SVG.
 */
export class UaiLogo {
    constructor() {
        this.requestVersion = 0;
        /**
         * Accessible name for a meaningful logo. Without it, the logo is decorative.
         */
        this.ariaLabel = null;
    }
    connectedCallback() {
        this.loadLogo();
    }
    disconnectedCallback() {
        this.requestVersion++;
    }
    loadLogo() {
        const version = ++this.requestVersion;
        if (!this.name) {
            this.svgContent = undefined;
            return;
        }
        this.svgContent = undefined;
        Promise.resolve()
            .then(() => loadAssetSvg(getLogoName(this.name)))
            .then((svg) => {
            if (version === this.requestVersion)
                this.svgContent = svg;
        })
            .catch(() => {
            if (version !== this.requestVersion)
                return;
            this.svgContent = undefined;
            warnOnce('uai-logo', `load:${this.name}`, `Failed to load logo "${this.name}" from blip-tokens.`);
        });
    }
    render() {
        return (h(Host, { key: '28d0a47d76d974468e18fe126a07699a55472fb2', role: this.ariaLabel ? 'img' : undefined, "aria-label": this.ariaLabel, "aria-hidden": this.ariaLabel ? undefined : 'true' }, h("div", { key: '9436a95674b371dcf6754efa19dceb8ede241b6c', class: "asset", part: "asset", innerHTML: this.svgContent, "data-test": this.dataTest })));
    }
    static get is() { return "uai-logo"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-logo.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-logo.css"]
        };
    }
    static get properties() {
        return {
            "name": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Logo name as listed in the blip-tokens asset catalog."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "name"
            },
            "ariaLabel": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Accessible name for a meaningful logo. Without it, the logo is decorative."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "aria-label",
                "defaultValue": "null"
            },
            "dataTest": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Value forwarded to the logo SVG container's data-test attribute."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "data-test"
            }
        };
    }
    static get states() {
        return {
            "svgContent": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "name",
                "methodName": "loadLogo"
            }];
    }
}
