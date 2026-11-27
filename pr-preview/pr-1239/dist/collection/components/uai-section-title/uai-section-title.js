import { Host, h } from "@stencil/core";
import { warnLegacyValue } from "../../utils/deprecation";
const HEADING_TAGS = ['h2', 'h3', 'h4'];
/**
 * Semantic section header with heading, optional description, and optional trailing actions.
 * Use to introduce analytical or content blocks beneath `uai-page-header`; pair with `headingTag` matching document hierarchy;
 * avoid using `h1` here (reserve `h1` for the page title).
 *
 * @slot actions - Optional trailing actions.
 * @part container - The section header container.
 * @part heading - The semantic heading element.
 * @part description - The optional supporting description element.
 * @part actions - The trailing actions slot wrapper.
 */
export class UaiSectionTitle {
    constructor() {
        this.hasActions = false;
        /**
         * Main text of the section heading.
         */
        this.heading = '';
        /**
         * Optional supporting description rendered below the heading when non-empty.
         */
        this.description = '';
        /**
         * HTML heading element tag (`h2`, `h3`, or `h4`) to preserve document outline hierarchy.
         */
        this.headingTag = 'h2';
        /**
         * Selector attribute applied to the container for automated tests.
         */
        this.dataTest = null;
        this.syncActionsSlot = () => {
            this.hasActions = Array.from(this.el.children).some((child) => child.getAttribute('slot') === 'actions');
        };
    }
    componentWillLoad() {
        this.syncActionsSlot();
    }
    connectedCallback() {
        if (typeof MutationObserver === 'undefined' || this.childObserver)
            return;
        // The actions wrapper is not rendered while empty, so `slotchange` cannot detect late-added actions.
        this.childObserver = new MutationObserver(this.syncActionsSlot);
        this.childObserver.observe(this.el, { childList: true, attributes: true, attributeFilter: ['slot'], subtree: true });
    }
    disconnectedCallback() {
        var _a;
        (_a = this.childObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
        this.childObserver = undefined;
    }
    resolveHeadingTag() {
        var _a;
        const rawTag = String((_a = this.headingTag) !== null && _a !== void 0 ? _a : 'h2');
        if (HEADING_TAGS.includes(rawTag)) {
            return rawTag;
        }
        warnLegacyValue('uai-section-title', 'headingTag', rawTag, 'h2');
        return 'h2';
    }
    render() {
        const HeadingTag = this.resolveHeadingTag();
        const hasDescription = Boolean(this.description && this.description.trim().length > 0);
        return (h(Host, { key: 'e2762b7a9b387897072eff2c67779fd14ad3c82d' }, h("div", { key: 'd7c047332b4df072e669c894eb89331055d112a2', class: "section-title", part: "container", "data-test": this.dataTest }, h("div", { key: '0b5c220f38e05188041a1ad7fb1e38dd492d4d89', class: "section-title__content" }, h(HeadingTag, { key: 'ad63f3e310f4427474e712281c87582bf26b5abc', class: "section-title__heading", part: "heading" }, this.heading), hasDescription && (h("p", { key: '0688328ece1a3744d7953f3fad9fcb9d4b92b908', class: "section-title__description", part: "description" }, this.description))), this.hasActions && (h("div", { key: 'df2f24865be64809383956a907dd33b5924499ca', class: "section-title__actions", part: "actions" }, h("slot", { key: 'c3dd286a7f40fab75de136f2ea4dc6fa41ec5aa0', name: "actions", onSlotchange: this.syncActionsSlot }))))));
    }
    static get is() { return "uai-section-title"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-section-title.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-section-title.css"]
        };
    }
    static get properties() {
        return {
            "heading": {
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
                    "text": "Main text of the section heading."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "heading",
                "defaultValue": "''"
            },
            "description": {
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
                    "text": "Optional supporting description rendered below the heading when non-empty."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "description",
                "defaultValue": "''"
            },
            "headingTag": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UaiSectionTitleHeadingTag",
                    "resolved": "\"h2\" | \"h3\" | \"h4\"",
                    "references": {
                        "UaiSectionTitleHeadingTag": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-section-title/uai-section-title.tsx",
                            "id": "src/components/uai-section-title/uai-section-title.tsx::UaiSectionTitleHeadingTag"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "HTML heading element tag (`h2`, `h3`, or `h4`) to preserve document outline hierarchy."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "heading-tag",
                "defaultValue": "'h2'"
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
                    "text": "Selector attribute applied to the container for automated tests."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "data-test",
                "defaultValue": "null"
            }
        };
    }
    static get states() {
        return {
            "hasActions": {}
        };
    }
    static get elementRef() { return "el"; }
}
