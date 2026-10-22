import { h } from "@stencil/core";
const VARIANTS = [
    'display',
    'heading-xl',
    'heading-lg',
    'heading-md',
    'title',
    'body-lg',
    'body-base',
    'body-sm',
    'caption',
    'overline',
];
const BOLDS = ['regular', 'medium', 'semibold', 'bold'];
const LETTER_SPACINGS = ['normal', 'expanded'];
const TAGS = ['p', 'h1', 'h2', 'h3', 'h4', 'span'];
const MARGIN_VARIANTS = ['display', 'heading-xl', 'heading-lg', 'heading-md'];
const warnings = new Set();
const warnOnce = (key, message) => {
    if (warnings.has(key))
        return;
    warnings.add(key);
    console.warn(`[uai-typo] ${message}`);
};
const supported = (prop, value, allowed, fallback) => {
    if (allowed.includes(value))
        return value;
    warnOnce(`${prop}:${value}`, `Unsupported ${prop} "${value}". Using "${fallback}".`);
    return fallback;
};
const hasThemeRoot = (el) => {
    let node = el;
    while (node) {
        if (node.nodeType === Node.ELEMENT_NODE && node.hasAttribute('data-uai-theme'))
            return true;
        node = node.parentNode || node.host || null;
    }
    return false;
};
export class UaiTypo {
    constructor() {
        /**
         * Text style role from the UAI typography scale. Can be one of:
         * 'display', 'heading-xl', 'heading-lg', 'heading-md', 'title', 'body-lg', 'body-base', 'body-sm', 'caption', 'overline'.
         */
        this.variant = 'body-base';
        /**
         * Font weight. Can be one of: 'regular', 'medium', 'semibold', 'bold'.
         */
        this.bold = 'regular';
        /**
         * Letter spacing. 'expanded' matches the spaced body text style.
         */
        this.letterSpacing = 'normal';
        /**
         * Adds font style italic.
         */
        this.italic = false;
        /**
         * Keeps the text on one line and truncates it with an ellipsis.
         */
        this.noWrap = false;
        /**
         * Adds a bottom margin for paragraphs.
         */
        this.paragraph = false;
        /**
         * If true, adds the default bottom margin to display and heading variants.
         */
        this.margin = true;
        /**
         * Element tag. Use it to give the text the right semantics.
         */
        this.tag = 'p';
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
    }
    warnDeprecated() {
        if (this.lineHeight !== undefined && this.lineHeight !== null) {
            warnOnce('lineHeight', '"lineHeight" is deprecated and has no effect. The line height comes from the variant.');
        }
    }
    componentWillLoad() {
        this.warnDeprecated();
    }
    componentDidLoad() {
        if (!hasThemeRoot(this.el)) {
            warnOnce('theme-root', 'No [data-uai-theme] ancestor found. Wrap UAI components in <uai-theme-provider>.');
        }
    }
    render() {
        const variant = supported('variant', this.variant, VARIANTS, 'body-base');
        const bold = supported('bold', this.bold, BOLDS, 'regular');
        const letterSpacing = supported('letterSpacing', this.letterSpacing, LETTER_SPACINGS, 'normal');
        const Tag = supported('tag', this.tag, TAGS, 'p');
        return (h(Tag, { key: 'bb89b44f2219412cdcf2aebfe277b653c9088563', class: {
                typo: true,
                [`typo--variant-${variant}`]: true,
                [`typo--bold-${bold}`]: true,
                [`typo--letter-spacing-${letterSpacing}`]: true,
                'typo--margin': this.margin && MARGIN_VARIANTS.includes(variant),
                'typo--paragraph': this.paragraph,
                'typo--italic': this.italic,
                'typo--no-wrap': this.noWrap,
            }, part: "uai-typo__text", "data-test": this.dataTest }, h("slot", { key: 'ca5ad3de4dde5c6915560450e78cb146d1148722' })));
    }
    static get is() { return "uai-typo"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-typo.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-typo.css"]
        };
    }
    static get properties() {
        return {
            "variant": {
                "type": "string",
                "attribute": "variant",
                "mutable": false,
                "complexType": {
                    "original": "UaiTypoVariant",
                    "resolved": "\"body-base\" | \"body-lg\" | \"body-sm\" | \"caption\" | \"display\" | \"heading-lg\" | \"heading-md\" | \"heading-xl\" | \"overline\" | \"title\"",
                    "references": {
                        "UaiTypoVariant": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-typo/uai-typo.tsx",
                            "id": "src/components/uai-typo/uai-typo.tsx::UaiTypoVariant"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Text style role from the UAI typography scale. Can be one of:\n'display', 'heading-xl', 'heading-lg', 'heading-md', 'title', 'body-lg', 'body-base', 'body-sm', 'caption', 'overline'."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'body-base'"
            },
            "bold": {
                "type": "string",
                "attribute": "bold",
                "mutable": false,
                "complexType": {
                    "original": "UaiTypoBold",
                    "resolved": "\"bold\" | \"medium\" | \"regular\" | \"semibold\"",
                    "references": {
                        "UaiTypoBold": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-typo/uai-typo.tsx",
                            "id": "src/components/uai-typo/uai-typo.tsx::UaiTypoBold"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Font weight. Can be one of: 'regular', 'medium', 'semibold', 'bold'."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'regular'"
            },
            "letterSpacing": {
                "type": "string",
                "attribute": "letter-spacing",
                "mutable": false,
                "complexType": {
                    "original": "UaiTypoLetterSpacing",
                    "resolved": "\"expanded\" | \"normal\"",
                    "references": {
                        "UaiTypoLetterSpacing": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-typo/uai-typo.tsx",
                            "id": "src/components/uai-typo/uai-typo.tsx::UaiTypoLetterSpacing"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Letter spacing. 'expanded' matches the spaced body text style."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'normal'"
            },
            "lineHeight": {
                "type": "string",
                "attribute": "line-height",
                "mutable": false,
                "complexType": {
                    "original": "UaiTypoLineHeight",
                    "resolved": "\"double\" | \"none\" | \"plus\" | \"simple\" | \"small\"",
                    "references": {
                        "UaiTypoLineHeight": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-typo/uai-typo.tsx",
                            "id": "src/components/uai-typo/uai-typo.tsx::UaiTypoLineHeight"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [{
                            "name": "deprecated",
                            "text": "The line height comes from the variant. This prop has no effect."
                        }],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "italic": {
                "type": "boolean",
                "attribute": "italic",
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
                    "text": "Adds font style italic."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "noWrap": {
                "type": "boolean",
                "attribute": "no-wrap",
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
                    "text": "Keeps the text on one line and truncates it with an ellipsis."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "paragraph": {
                "type": "boolean",
                "attribute": "paragraph",
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
                    "text": "Adds a bottom margin for paragraphs."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "margin": {
                "type": "boolean",
                "attribute": "margin",
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
                    "text": "If true, adds the default bottom margin to display and heading variants."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            },
            "tag": {
                "type": "string",
                "attribute": "tag",
                "mutable": false,
                "complexType": {
                    "original": "UaiTypoTag",
                    "resolved": "\"h1\" | \"h2\" | \"h3\" | \"h4\" | \"p\" | \"span\"",
                    "references": {
                        "UaiTypoTag": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-typo/uai-typo.tsx",
                            "id": "src/components/uai-typo/uai-typo.tsx::UaiTypoTag"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Element tag. Use it to give the text the right semantics."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'p'"
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
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "lineHeight",
                "methodName": "warnDeprecated"
            }];
    }
}
//# sourceMappingURL=uai-typo.js.map
