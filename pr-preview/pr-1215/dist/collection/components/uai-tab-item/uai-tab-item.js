import { Host, h } from "@stencil/core";
import { warnDeprecated } from "../../utils/deprecation";
/**
 * Content panel and configuration of one tab. Use inside UaiTabGroup. Pair with a label;
 * avoid using open panels as independent navigation controls.
 *
 * @slot - Panel content. Use for the selected tab's content; pair with label; avoid putting tab headers here.
 */
export class UaiTabItem {
    constructor() {
        /** Position assigned by the group. Use for event correlation; pair with reciveNumber; avoid treating it as a stable ID. */
        this.numberElement = null;
        /** Tab label. Use a short name; pair with panel content; avoid unnamed tabs. */
        this.label = null;
        /** Optional tab icon. Use a UAI icon name; pair with label; avoid using an icon as the only accessible name. */
        this.icon = null;
        /** Icon side, left or right. Use to preserve layout; pair with icon; avoid unsupported positions. */
        this.iconPosition = 'left';
        /** Icon theme, outline, solid, emoji or logos. Use UAI themes first; pair with icon; avoid new legacy icon names. */
        this.iconTheme = 'outline';
        /** Shows an optional internal indicator. Use for status or counts; pair with badge props; avoid mandatory decoration. */
        this.badge = false;
        /** Indicator shape: circle, square, triangle, triangle-reverse or polygon. Use for status; pair with badge; avoid color-only meaning. */
        this.badgeShape = 'circle';
        /** Indicator color: system, danger, warning, success or neutral. Use semantic status; pair with a label; avoid arbitrary colors. */
        this.badgeColor = 'system';
        /** Optional indicator icon. Use for status; pair with badge; avoid relying on an unnamed icon for meaning. */
        this.badgeIcon = null;
        /** Animates the indicator unless reduced motion is requested. Use sparingly; pair with badge; avoid continuous distraction. */
        this.badgeAnimation = false;
        /** Indicator side, left or right. Use to preserve layout; pair with badge; avoid unsupported positions. */
        this.badgePosition = 'left';
        /** Indicator count, capped visually at 999+. Use null for status and zero for an empty indicator; pair with badge; avoid negative counts. */
        this.badgeNumber = null;
        /** Disables activation. Use for unavailable tabs; pair with a meaningful label; avoid renaming this inherited prop to disabled. */
        this.disable = false;
        /** Marks an error with a semantic color and icon. Use for a panel requiring attention; pair with explanatory panel content; avoid color alone. */
        this.error = false;
        /**
         * Custom group header styles when this item is open. Use token-based declarations for compatibility;
         * pair with contentStyle; avoid overriding component internals.
         * @deprecated Prefer token-based composition around the group. The inherited style string remains functional.
         */
        this.headerStyle = null;
        /**
         * Custom group content styles when this item is open. Use token-based declarations for compatibility;
         * pair with headerStyle; avoid overriding component internals.
         * @deprecated Prefer token-based composition around the group. The inherited style string remains functional.
         */
        this.contentStyle = null;
        /** Selects this tab. Use for initial or controlled selection; pair with uaiTabChange; avoid opening multiple items. */
        this.open = false;
        /** Panel data-test marker. Use in automated tests; pair with dtButtonPrev/Next on the group; avoid using it as an accessible name. */
        this.dataTest = null;
        /** Accessible tab name overriding label. Use for icon-only tabs; pair with iconOnly; avoid empty names. */
        this.ariaLabel = null;
        /** Hides the visible label, not its accessible name. Use for the Intelligence icon layout; pair with icon and label; avoid unnamed actions. */
        this.iconOnly = false;
    }
    /** Assigns the item index, preserving the legacy spelling. Use for compatibility; pair with numberElement; avoid using the index as a persistent identifier. */
    async reciveNumber(number) {
        this.numberElement = number;
    }
    disabledChanged() {
        this.uaiDisabled.emit({ item: this.numberElement, disable: this.disable });
    }
    configurationChanged(_value, _oldValue, prop) {
        this.warnStyles();
        this.el.dispatchEvent(new CustomEvent('uaiTabItemUpdate', { bubbles: true, detail: { prop } }));
    }
    componentWillLoad() {
        this.warnStyles();
    }
    warnStyles() {
        for (const prop of ['headerStyle', 'contentStyle']) {
            if (this[prop])
                warnDeprecated('uai-tab-item', prop, 'Prefer token-based composition around UaiTabGroup. The style remains functional.');
        }
    }
    render() {
        return (h(Host, { key: 'fb99f2a09589ae5967dca6667c430514b27ee1c7', class: { 'is-open': this.open && !this.disable }, hidden: !this.open || this.disable }, h("div", { key: 'ee57230659163073d45a6ffea91e1420daa7b079', class: "uai-tab-item__content", "data-test": this.dataTest }, h("slot", { key: '231dad2f7dae2c759b760684aabd5434f6480a7d' }))));
    }
    static get is() { return "uai-tab-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-tab-item.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-tab-item.css"]
        };
    }
    static get properties() {
        return {
            "numberElement": {
                "type": "number",
                "mutable": true,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Position assigned by the group. Use for event correlation; pair with reciveNumber; avoid treating it as a stable ID."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "number-element",
                "defaultValue": "null"
            },
            "label": {
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
                    "text": "Tab label. Use a short name; pair with panel content; avoid unnamed tabs."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label",
                "defaultValue": "null"
            },
            "icon": {
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
                    "text": "Optional tab icon. Use a UAI icon name; pair with label; avoid using an icon as the only accessible name."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "icon",
                "defaultValue": "null"
            },
            "iconPosition": {
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
                    "text": "Icon side, left or right. Use to preserve layout; pair with icon; avoid unsupported positions."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "icon-position",
                "defaultValue": "'left'"
            },
            "iconTheme": {
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
                    "text": "Icon theme, outline, solid, emoji or logos. Use UAI themes first; pair with icon; avoid new legacy icon names."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "icon-theme",
                "defaultValue": "'outline'"
            },
            "badge": {
                "type": "boolean",
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
                    "text": "Shows an optional internal indicator. Use for status or counts; pair with badge props; avoid mandatory decoration."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "badge",
                "defaultValue": "false"
            },
            "badgeShape": {
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
                    "text": "Indicator shape: circle, square, triangle, triangle-reverse or polygon. Use for status; pair with badge; avoid color-only meaning."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "badge-shape",
                "defaultValue": "'circle'"
            },
            "badgeColor": {
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
                    "text": "Indicator color: system, danger, warning, success or neutral. Use semantic status; pair with a label; avoid arbitrary colors."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "badge-color",
                "defaultValue": "'system'"
            },
            "badgeIcon": {
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
                    "text": "Optional indicator icon. Use for status; pair with badge; avoid relying on an unnamed icon for meaning."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "badge-icon",
                "defaultValue": "null"
            },
            "badgeAnimation": {
                "type": "boolean",
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
                    "text": "Animates the indicator unless reduced motion is requested. Use sparingly; pair with badge; avoid continuous distraction."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "badge-animation",
                "defaultValue": "false"
            },
            "badgePosition": {
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
                    "text": "Indicator side, left or right. Use to preserve layout; pair with badge; avoid unsupported positions."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "badge-position",
                "defaultValue": "'left'"
            },
            "badgeNumber": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Indicator count, capped visually at 999+. Use null for status and zero for an empty indicator; pair with badge; avoid negative counts."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "badge-number",
                "defaultValue": "null"
            },
            "disable": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Disables activation. Use for unavailable tabs; pair with a meaningful label; avoid renaming this inherited prop to disabled."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "disable",
                "defaultValue": "false"
            },
            "error": {
                "type": "boolean",
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
                    "text": "Marks an error with a semantic color and icon. Use for a panel requiring attention; pair with explanatory panel content; avoid color alone."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "error",
                "defaultValue": "false"
            },
            "headerStyle": {
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
                    "tags": [{
                            "name": "deprecated",
                            "text": "Prefer token-based composition around the group. The inherited style string remains functional."
                        }],
                    "text": "Custom group header styles when this item is open. Use token-based declarations for compatibility;\npair with contentStyle; avoid overriding component internals."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "header-style",
                "defaultValue": "null"
            },
            "contentStyle": {
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
                    "tags": [{
                            "name": "deprecated",
                            "text": "Prefer token-based composition around the group. The inherited style string remains functional."
                        }],
                    "text": "Custom group content styles when this item is open. Use token-based declarations for compatibility;\npair with headerStyle; avoid overriding component internals."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "content-style",
                "defaultValue": "null"
            },
            "open": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Selects this tab. Use for initial or controlled selection; pair with uaiTabChange; avoid opening multiple items."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "open",
                "defaultValue": "false"
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Panel data-test marker. Use in automated tests; pair with dtButtonPrev/Next on the group; avoid using it as an accessible name."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "data-test",
                "defaultValue": "null"
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
                    "text": "Accessible tab name overriding label. Use for icon-only tabs; pair with iconOnly; avoid empty names."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "aria-label",
                "defaultValue": "null"
            },
            "iconOnly": {
                "type": "boolean",
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
                    "text": "Hides the visible label, not its accessible name. Use for the Intelligence icon layout; pair with icon and label; avoid unnamed actions."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "icon-only",
                "defaultValue": "false"
            }
        };
    }
    static get events() {
        return [{
                "method": "uaiDisabled",
                "name": "uaiDisabled",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Availability change with the current index. Use for observing disable changes; pair with uaiTabDisabled on the group; avoid confusing it with activation."
                },
                "complexType": {
                    "original": "{ item: number; disable: boolean }",
                    "resolved": "{ item: number; disable: boolean; }",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "reciveNumber": {
                "complexType": {
                    "signature": "(number: number) => Promise<void>",
                    "parameters": [{
                            "name": "number",
                            "type": "number",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Assigns the item index, preserving the legacy spelling. Use for compatibility; pair with numberElement; avoid using the index as a persistent identifier.",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "disable",
                "methodName": "disabledChanged"
            }, {
                "propName": "numberElement",
                "methodName": "configurationChanged"
            }, {
                "propName": "label",
                "methodName": "configurationChanged"
            }, {
                "propName": "icon",
                "methodName": "configurationChanged"
            }, {
                "propName": "iconPosition",
                "methodName": "configurationChanged"
            }, {
                "propName": "iconTheme",
                "methodName": "configurationChanged"
            }, {
                "propName": "badge",
                "methodName": "configurationChanged"
            }, {
                "propName": "badgeShape",
                "methodName": "configurationChanged"
            }, {
                "propName": "badgeColor",
                "methodName": "configurationChanged"
            }, {
                "propName": "badgeIcon",
                "methodName": "configurationChanged"
            }, {
                "propName": "badgeAnimation",
                "methodName": "configurationChanged"
            }, {
                "propName": "badgePosition",
                "methodName": "configurationChanged"
            }, {
                "propName": "badgeNumber",
                "methodName": "configurationChanged"
            }, {
                "propName": "disable",
                "methodName": "configurationChanged"
            }, {
                "propName": "error",
                "methodName": "configurationChanged"
            }, {
                "propName": "headerStyle",
                "methodName": "configurationChanged"
            }, {
                "propName": "contentStyle",
                "methodName": "configurationChanged"
            }, {
                "propName": "open",
                "methodName": "configurationChanged"
            }, {
                "propName": "dataTest",
                "methodName": "configurationChanged"
            }, {
                "propName": "ariaLabel",
                "methodName": "configurationChanged"
            }, {
                "propName": "iconOnly",
                "methodName": "configurationChanged"
            }];
    }
}
