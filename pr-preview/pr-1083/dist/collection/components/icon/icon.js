/* eslint-disable @typescript-eslint/no-explicit-any */
import { Build, Host, h } from "@stencil/core";
import icons from "blip-tokens/build/json/assets_icons.json";
import emojis from "blip-tokens/build/json/assets_emojis.json";
import logo from "blip-tokens/build/json/assets_logos.json";
import { formatSvg, getIconName, getEmojiName, getLogoName } from "./utils";
export class Icon {
    constructor() {
        this.isVisible = false;
        /**
         * Icon size. Entered as one of the icon size design tokens. Can be one of:
         * "xxx-small", "xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large", "xxx-large", "brand".
         */
        this.size = 'medium';
        /**
         * If enabled, ion-icon will be loaded lazily when it's visible in the viewport.
         * Default, `false`.
         */
        this.lazy = false;
        /**
         * Specifies the theme to use outline or solid icons. Defaults to outline.
         */
        this.theme = 'outline';
        /**
         * Specifies the type of icon. If type is set to emoji, it will be able to set only emoji names on the name property.
         */
        this.type = 'icon';
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
        this.setSvgContent = () => {
            let svg;
            try {
                if (this.type === 'icon') {
                    const key = getIconName(this.name, this.theme);
                    svg = atob(icons[key]);
                    this.svgContent = formatSvg(svg, this.color);
                }
                else if (this.type === 'emoji') {
                    const key = getEmojiName(this.name);
                    svg = atob(emojis[key]);
                    this.svgContent = formatSvg(svg, this.color, true);
                }
                else if (this.type === 'logo') {
                    const key = getLogoName(this.name);
                    svg = atob(logo[key]);
                    this.svgContent = formatSvg(svg, this.color, true);
                }
            }
            catch (err) {
                // eslint-disable-next-line no-console
                console.warn('[Warning]: Failed to setSvgContent to', this.name);
            }
        };
    }
    connectedCallback() {
        // purposely do not return the promise here because loading
        // the svg file should not hold up loading the app
        // only load the svg if it's visible
        this.waitUntilVisible(this.el, () => {
            this.isVisible = true;
            this.loadIcon();
        });
    }
    disconnectedCallback() {
        if (this.io) {
            this.io.disconnect();
            this.io = undefined;
        }
    }
    waitUntilVisible(el, cb) {
        if (Build.isBrowser && this.lazy && typeof window !== 'undefined' && window.IntersectionObserver) {
            const io = (this.io = new window.IntersectionObserver((data) => {
                if (data[0].isIntersecting) {
                    io.disconnect();
                    this.io = undefined;
                    cb();
                }
            }));
            io.observe(el);
        }
        else {
            // browser doesn't support IntersectionObserver
            // so just fallback to always show it
            cb();
        }
    }
    loadIcon() {
        if (!this.name)
            return;
        if (Build.isBrowser && this.isVisible) {
            this.setSvgContent();
        }
        if (!this.ariaLabel) {
            const label = this.name;
            if (label) {
                this.ariaLabel = label;
            }
        }
    }
    render() {
        return (h(Host, { key: '138b5e71a228c54fa1f70b645cb138840c727a9d', role: "img", class: {
                'bds-icon': true,
                [`bds-icon__size--${this.size}`]: true,
            } }, this.svgContent ? (h("div", { class: {
                'icon-inner': this.type === 'icon',
                'emoji-inner': this.type === 'emoji',
                'logo-inner': this.type === 'logo',
            }, innerHTML: this.svgContent, "data-test": this.dataTest })) : (h("div", { class: "icon-inner", "data-test": this.dataTest }))));
    }
    static get is() { return "bds-icon"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["icon.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["icon.css"]
        };
    }
    static get assetsDirs() { return ["svg"]; }
    static get properties() {
        return {
            "color": {
                "type": "string",
                "attribute": "color",
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
                    "text": "Specifies the color to use.Specifies a color to use. The default is svg."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "ariaLabel": {
                "type": "string",
                "attribute": "aria-label",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Specifies the label to use for accessibility. Defaults to the icon name."
                },
                "getter": false,
                "setter": false,
                "reflect": true
            },
            "flipRtl": {
                "type": "boolean",
                "attribute": "flip-rtl",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Specifies whether the icon should horizontally flip when `dir` is `\"rtl\"`."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "name": {
                "type": "string",
                "attribute": "name",
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
                    "text": "Specifies which icon to use from the built-in set of icons."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "src": {
                "type": "string",
                "attribute": "src",
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
                    "text": "Specifies the exact `src` of an SVG file to use."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "icon": {
                "type": "any",
                "attribute": "icon",
                "mutable": false,
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "A combination of both `name` and `src`. If a `src` url is detected\nit will set the `src` property. Otherwise it assumes it's a built-in named\nSVG and set the `name` property."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "IconSize",
                    "resolved": "\"brand\" | \"large\" | \"medium\" | \"small\" | \"x-large\" | \"x-small\" | \"xx-large\" | \"xx-small\" | \"xxx-large\" | \"xxx-small\"",
                    "references": {
                        "IconSize": {
                            "location": "import",
                            "path": "./icon-interface",
                            "id": "src/components/icon/icon-interface.ts::IconSize"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Icon size. Entered as one of the icon size design tokens. Can be one of:\n\"xxx-small\", \"xx-small\", \"x-small\", \"small\", \"medium\", \"large\", \"x-large\", \"xx-large\", \"xxx-large\", \"brand\"."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'medium'"
            },
            "lazy": {
                "type": "boolean",
                "attribute": "lazy",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "If enabled, ion-icon will be loaded lazily when it's visible in the viewport.\nDefault, `false`."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "theme": {
                "type": "string",
                "attribute": "theme",
                "mutable": false,
                "complexType": {
                    "original": "IconTheme",
                    "resolved": "\"outline\" | \"solid\"",
                    "references": {
                        "IconTheme": {
                            "location": "import",
                            "path": "./icon-interface",
                            "id": "src/components/icon/icon-interface.ts::IconTheme"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Specifies the theme to use outline or solid icons. Defaults to outline."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "'outline'"
            },
            "type": {
                "type": "string",
                "attribute": "type",
                "mutable": false,
                "complexType": {
                    "original": "IconType",
                    "resolved": "\"emoji\" | \"icon\" | \"logo\"",
                    "references": {
                        "IconType": {
                            "location": "import",
                            "path": "./icon-interface",
                            "id": "src/components/icon/icon-interface.ts::IconType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Specifies the type of icon. If type is set to emoji, it will be able to set only emoji names on the name property."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'icon'"
            },
            "dataTest": {
                "type": "string",
                "attribute": "data-test",
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
                    "text": "Data test is the prop to specifically test the component action object."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "null"
            }
        };
    }
    static get states() {
        return {
            "svgContent": {},
            "isVisible": {}
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "name",
                "methodName": "loadIcon"
            }, {
                "propName": "src",
                "methodName": "loadIcon"
            }, {
                "propName": "icon",
                "methodName": "loadIcon"
            }, {
                "propName": "theme",
                "methodName": "loadIcon"
            }];
    }
}
//# sourceMappingURL=icon.js.map
