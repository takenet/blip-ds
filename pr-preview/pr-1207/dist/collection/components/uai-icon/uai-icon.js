import { Host, h } from "@stencil/core";
import { isUaiIcon } from "../../globals/uai-icons";
import { warnLegacyValue, warnOnce } from "../../utils/deprecation";
const THEMES = ['outline', 'solid'];
const SIZES = ['x-small', 'small', 'medium'];
const COLORS = [
    'content-primary',
    'content-secondary',
    'content-disabled',
    'content-inverse',
    'content-link',
    'feedback-info',
    'feedback-success',
    'feedback-warning',
    'feedback-error',
];
const supported = (prop, value, allowed, fallback) => {
    if (allowed.includes(value))
        return value;
    warnLegacyValue('uai-icon', prop, value, String(fallback));
    return fallback;
};
/**
 * Interface icon from the UAI icon font of blip-tokens. Use it for icons in UAI screens and inside UAI components.
 * Sizes keep the bds-icon names: x-small is `sizing/sm`, small is `sizing/md` and medium (default) is `sizing/lg`.
 * Without `color`, the icon takes the text color around it, so it matches the label next to it.
 * The app must load the font once: `import 'blip-tokens/uai-icons/css';`.
 *
 * @part glyph - The element that renders the icon font glyph.
 */
export class UaiIcon {
    constructor() {
        /**
         * Icon style: 'outline' (default) or 'solid'.
         */
        this.theme = 'outline';
        /**
         * Icon size: 'x-small' (`sizing/sm`), 'small' (`sizing/md`) or 'medium' (`sizing/lg`, default).
         */
        this.size = 'medium';
        /**
         * Accessible name. Set it when the icon conveys meaning on its own. Without it, the icon is decorative and hidden from assistive technology.
         */
        this.ariaLabel = null;
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
    }
    render() {
        const theme = supported('theme', this.theme, THEMES, 'outline');
        const size = supported('size', this.size, SIZES, 'medium');
        const color = this.color ? supported('color', this.color, COLORS, undefined) : undefined;
        const known = isUaiIcon(theme, this.name);
        if (!known) {
            warnOnce('uai-icon', `name:${theme}:${this.name}`, `"${this.name}" is not a ${theme} icon of the UAI icon font.`);
        }
        return (h(Host, { key: 'cb08c0bbce471189783d0bff3e7f8a2e8d1bfef4', class: { [`uai-icon--size-${size}`]: true, [`uai-icon--color-${color}`]: !!color }, role: this.ariaLabel ? 'img' : undefined, "aria-hidden": this.ariaLabel ? undefined : 'true' }, h("span", { key: 'a5db570a164441bca7367102b56a1c275457ec68', class: { 'uai-icon': true, [`uai-icon-${theme}-${this.name}`]: known }, part: "glyph", "data-test": this.dataTest })));
    }
    static get is() { return "uai-icon"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-icon.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-icon.css"]
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
                    "text": "Icon name, as in the Figma icon library without the theme prefix. For example \"info\" or \"arrow-right\"."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "name"
            },
            "theme": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UaiIconTheme",
                    "resolved": "\"outline\" | \"solid\"",
                    "references": {
                        "UaiIconTheme": {
                            "location": "import",
                            "path": "../../globals/uai-icons",
                            "id": "src/globals/uai-icons.ts::UaiIconTheme",
                            "referenceLocation": "UaiIconTheme"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Icon style: 'outline' (default) or 'solid'."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "theme",
                "defaultValue": "'outline'"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UaiIconSize",
                    "resolved": "\"medium\" | \"small\" | \"x-small\"",
                    "references": {
                        "UaiIconSize": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-icon/uai-icon.tsx",
                            "id": "src/components/uai-icon/uai-icon.tsx::UaiIconSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Icon size: 'x-small' (`sizing/sm`), 'small' (`sizing/md`) or 'medium' (`sizing/lg`, default)."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "size",
                "defaultValue": "'medium'"
            },
            "color": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UaiIconColor",
                    "resolved": "\"content-disabled\" | \"content-inverse\" | \"content-link\" | \"content-primary\" | \"content-secondary\" | \"feedback-error\" | \"feedback-info\" | \"feedback-success\" | \"feedback-warning\"",
                    "references": {
                        "UaiIconColor": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-icon/uai-icon.tsx",
                            "id": "src/components/uai-icon/uai-icon.tsx::UaiIconColor"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Icon color, as a UAI color token: content-primary, content-secondary, content-disabled, content-inverse, content-link,\nfeedback-info, feedback-success, feedback-warning or feedback-error. Without it, the icon uses the surrounding text color."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "color"
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
                    "text": "Accessible name. Set it when the icon conveys meaning on its own. Without it, the icon is decorative and hidden from assistive technology."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
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
                    "text": "Data test is the prop to specifically test the component action object."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "data-test",
                "defaultValue": "null"
            }
        };
    }
}
