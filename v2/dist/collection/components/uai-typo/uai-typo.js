import { h } from "@stencil/core";
import { warnDeprecated, warnLegacyValue, warnOnce } from "../../utils/deprecation";
const VARIANTS = [
    'display',
    'heading-xl',
    'heading-lg',
    'heading-md',
    'title-lg',
    'title-md',
    'title-sm',
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
const supported = (prop, value, allowed, fallback) => {
    if (allowed.includes(value))
        return value;
    warnLegacyValue('uai-typo', prop, value, String(fallback));
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
/**
 * Text with the UAI type scale. variant and bold are the Figma text styles (heading/lg/semibold is variant="heading-lg" bold="semibold");
 * tag sets the HTML element, so use h1-h4 for titles. Default: body-base, regular, <p>. Wrap the app in UaiThemeProvider.
 *
 * @slot - Text content.
 * @part uai-typo__text - The text element.
 */
export class UaiTypo {
    constructor() {
        /**
         * Text style role from the UAI typography scale. Can be one of:
         * 'display', 'heading-xl', 'heading-lg', 'heading-md', 'title-lg', 'title-md', 'title-sm', 'title',
         * 'body-lg', 'body-base', 'body-sm', 'caption', 'overline'.
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
            warnDeprecated('uai-typo', 'lineHeight', 'It has no effect. The line height comes from the variant.');
        }
    }
    componentWillLoad() {
        this.warnDeprecated();
    }
    componentDidLoad() {
        if (!hasThemeRoot(this.el)) {
            warnOnce('uai-typo', 'theme-root', 'No [data-uai-theme] ancestor found. Wrap UAI components in <uai-theme-provider>.');
        }
    }
    render() {
        const variant = supported('variant', this.variant, VARIANTS, 'body-base');
        const bold = supported('bold', this.bold, BOLDS, 'regular');
        const letterSpacing = supported('letterSpacing', this.letterSpacing, LETTER_SPACINGS, 'normal');
        const Tag = supported('tag', this.tag, TAGS, 'p');
        return (h(Tag, { key: '5aaa8e17d9740aa71c28f20b2c2d4dad0109b6de', class: {
                typo: true,
                [`typo--variant-${variant}`]: true,
                [`typo--bold-${bold}`]: true,
                [`typo--letter-spacing-${letterSpacing}`]: true,
                'typo--margin': this.margin && MARGIN_VARIANTS.includes(variant),
                'typo--paragraph': this.paragraph,
                'typo--italic': this.italic,
                'typo--no-wrap': this.noWrap,
            }, part: "uai-typo__text", "data-test": this.dataTest }, h("slot", { key: '980f35a1888bb65c68599273e7540213118595dd' })));
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
                "mutable": false,
                "complexType": {
                    "original": "UaiTypoVariant",
                    "resolved": "\"body-base\" | \"body-lg\" | \"body-sm\" | \"caption\" | \"display\" | \"heading-lg\" | \"heading-md\" | \"heading-xl\" | \"overline\" | \"title\" | \"title-lg\" | \"title-md\" | \"title-sm\"",
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
                    "text": "Text style role from the UAI typography scale. Can be one of:\n'display', 'heading-xl', 'heading-lg', 'heading-md', 'title-lg', 'title-md', 'title-sm', 'title',\n'body-lg', 'body-base', 'body-sm', 'caption', 'overline'."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "variant",
                "defaultValue": "'body-base'"
            },
            "bold": {
                "type": "string",
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
                "attribute": "bold",
                "defaultValue": "'regular'"
            },
            "letterSpacing": {
                "type": "string",
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
                "attribute": "letter-spacing",
                "defaultValue": "'normal'"
            },
            "lineHeight": {
                "type": "string",
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
                "reflect": false,
                "attribute": "line-height"
            },
            "italic": {
                "type": "boolean",
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
                "attribute": "italic",
                "defaultValue": "false"
            },
            "noWrap": {
                "type": "boolean",
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
                "attribute": "no-wrap",
                "defaultValue": "false"
            },
            "paragraph": {
                "type": "boolean",
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
                "attribute": "paragraph",
                "defaultValue": "false"
            },
            "margin": {
                "type": "boolean",
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
                "attribute": "margin",
                "defaultValue": "true"
            },
            "tag": {
                "type": "string",
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
                "attribute": "tag",
                "defaultValue": "'p'"
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
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "lineHeight",
                "methodName": "warnDeprecated"
            }];
    }
}
