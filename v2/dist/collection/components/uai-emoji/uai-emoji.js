import { Host, h } from "@stencil/core";
import { loadAssetSvg } from "../../utils/asset-loader";
import { warnOnce } from "../../utils/deprecation";
import { getEmojiName } from "../icon/utils";
/**
 * Emoji from the versioned asset catalog in blip-tokens. Set the host width to control its size;
 * the SVG keeps the aspect ratio from its viewBox. Use aria-label for a meaningful emoji, or omit it when decorative.
 *
 * @part asset - The element containing the emoji SVG.
 */
export class UaiEmoji {
    constructor() {
        this.requestVersion = 0;
        /**
         * Accessible name for a meaningful emoji. Without it, the emoji is decorative.
         */
        this.ariaLabel = null;
    }
    connectedCallback() {
        this.loadEmoji();
    }
    disconnectedCallback() {
        this.requestVersion++;
    }
    loadEmoji() {
        const version = ++this.requestVersion;
        if (!this.name) {
            this.svgContent = undefined;
            return;
        }
        this.svgContent = undefined;
        Promise.resolve()
            .then(() => loadAssetSvg(getEmojiName(this.name)))
            .then((svg) => {
            if (version === this.requestVersion)
                this.svgContent = svg;
        })
            .catch(() => {
            if (version !== this.requestVersion)
                return;
            this.svgContent = undefined;
            warnOnce('uai-emoji', `load:${this.name}`, `Failed to load emoji "${this.name}" from blip-tokens.`);
        });
    }
    render() {
        return (h(Host, { key: '8f1f8cf95cc7adb5442e5f7fb1b88f98a998fbbf', role: this.ariaLabel ? 'img' : undefined, "aria-label": this.ariaLabel, "aria-hidden": this.ariaLabel ? undefined : 'true' }, h("div", { key: '47eeab40eac2bbf48715c62983d27df2ee223c61', class: "asset", part: "asset", innerHTML: this.svgContent, "data-test": this.dataTest })));
    }
    static get is() { return "uai-emoji"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-emoji.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-emoji.css"]
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
                    "text": "Emoji name as listed in the blip-tokens asset catalog."
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
                    "text": "Accessible name for a meaningful emoji. Without it, the emoji is decorative."
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
                    "text": "Value forwarded to the emoji SVG container's data-test attribute."
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
                "methodName": "loadEmoji"
            }];
    }
}
