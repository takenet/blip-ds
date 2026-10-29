import { h } from "@stencil/core";
import { warnLegacyValue } from "../../utils/deprecation";
/**
 * Page title or hierarchical navigation with consumer-owned actions. Use one per page; pair with UaiButton;
 * avoid embedding product persistence or global application navigation.
 *
 * @slot actions - Page actions. Use UaiButton; pair with loading/disabled; avoid rebuilding native controls.
 */
export class UaiPageHeader {
    constructor() {
        /**
         * Visual composition. Use primary for title and secondary for breadcrumb; pair with items; avoid treating it as a depth limit.
         */
        this.level = 'primary';
        /**
         * Primary page title. Use with level primary; pair with actions; avoid expecting a secondary breadcrumb fallback.
         */
        this.title = '';
        /**
         * Secondary breadcrumb items, as JSON or array. Use ancestor-to-current order; pair with level secondary; avoid context selectors.
         */
        this.items = [];
        /**
         * Collapses intermediate breadcrumb items above three. Use false to show all; pair with items; avoid imposing a depth limit.
         */
        this.wrapItems = true;
        /**
         * Enables editing of the secondary breadcrumb's current item. Use with the edit event; pair with items; avoid editing primary title.
         */
        this.editable = false;
        /**
         * Language for breadcrumb messages. Use a supported locale; pair with labels; avoid translating consumer-provided titles implicitly.
         */
        this.language = 'pt_BR';
    }
    render() {
        let level = this.level;
        if (level !== 'primary' && level !== 'secondary') {
            warnLegacyValue('uai-page-header', 'level', level, 'primary');
            level = 'primary';
        }
        return (h("header", { key: '22bbca7ccd9ba829be1db89e3194023b00cac5de', class: "header" }, h("div", { key: '6fd8bdd1f4ad7bc17ce616833059100f72ea518b', class: "header__main" }, level === 'primary' ? (h("uai-typo", { class: "header__title", tag: "h1", variant: "title-md", bold: "semibold", margin: false }, this.title)) : (h("uai-breadcrumb", { items: this.items, wrapItems: this.wrapItems, editable: this.editable, language: this.language, labels: this.labels, currentHeadingLevel: 1 }))), h("div", { key: '6f1beaedac3f7af5a12c497491352049ae317d44', class: "header__actions" }, h("slot", { key: '12d6122f0341eb7e47195fdf5dd08da2fecc29d7', name: "actions" }))));
    }
    static get is() { return "uai-page-header"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-page-header.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-page-header.css"]
        };
    }
    static get properties() {
        return {
            "level": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UaiPageHeaderLevel",
                    "resolved": "\"primary\" | \"secondary\"",
                    "references": {
                        "UaiPageHeaderLevel": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-page-header/uai-page-header.tsx",
                            "id": "src/components/uai-page-header/uai-page-header.tsx::UaiPageHeaderLevel"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Visual composition. Use primary for title and secondary for breadcrumb; pair with items; avoid treating it as a depth limit."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "level",
                "defaultValue": "'primary'"
            },
            "title": {
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
                    "text": "Primary page title. Use with level primary; pair with actions; avoid expecting a secondary breadcrumb fallback."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "title",
                "defaultValue": "''"
            },
            "items": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string | UaiBreadcrumbItem[]",
                    "resolved": "UaiBreadcrumbItem[] | string",
                    "references": {
                        "UaiBreadcrumbItem": {
                            "location": "import",
                            "path": "../uai-breadcrumb/uai-breadcrumb",
                            "id": "src/components/uai-breadcrumb/uai-breadcrumb.tsx::UaiBreadcrumbItem",
                            "referenceLocation": "UaiBreadcrumbItem"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Secondary breadcrumb items, as JSON or array. Use ancestor-to-current order; pair with level secondary; avoid context selectors."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "items",
                "defaultValue": "[]"
            },
            "wrapItems": {
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
                    "text": "Collapses intermediate breadcrumb items above three. Use false to show all; pair with items; avoid imposing a depth limit."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "wrap-items",
                "defaultValue": "true"
            },
            "editable": {
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
                    "text": "Enables editing of the secondary breadcrumb's current item. Use with the edit event; pair with items; avoid editing primary title."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "editable",
                "defaultValue": "false"
            },
            "language": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UaiBreadcrumbLanguage",
                    "resolved": "\"en_US\" | \"es_ES\" | \"pt_BR\"",
                    "references": {
                        "UaiBreadcrumbLanguage": {
                            "location": "import",
                            "path": "../uai-breadcrumb/uai-breadcrumb",
                            "id": "src/components/uai-breadcrumb/uai-breadcrumb.tsx::UaiBreadcrumbLanguage",
                            "referenceLocation": "UaiBreadcrumbLanguage"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Language for breadcrumb messages. Use a supported locale; pair with labels; avoid translating consumer-provided titles implicitly."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "language",
                "defaultValue": "'pt_BR'"
            },
            "labels": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Partial<UaiBreadcrumbLabels>",
                    "resolved": "UaiBreadcrumbLabels",
                    "references": {
                        "Partial": {
                            "location": "global",
                            "id": "global::Partial"
                        },
                        "UaiBreadcrumbLabels": {
                            "location": "import",
                            "path": "../uai-breadcrumb/uai-breadcrumb",
                            "id": "src/components/uai-breadcrumb/uai-breadcrumb.tsx::UaiBreadcrumbLabels",
                            "referenceLocation": "UaiBreadcrumbLabels"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Partial breadcrumb text overrides. Use for accessible names; pair with language; avoid empty action names."
                },
                "getter": false,
                "setter": false
            }
        };
    }
    static get events() {
        return [{
                "method": "uaiBreadcrumbItemClick",
                "name": "uaiBreadcrumbItemClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Native link activation bubbling from the breadcrumb. Use to observe navigation; pair with items; avoid re-emitting it."
                },
                "complexType": {
                    "original": "UaiBreadcrumbItem",
                    "resolved": "UaiBreadcrumbItem",
                    "references": {
                        "UaiBreadcrumbItem": {
                            "location": "import",
                            "path": "../uai-breadcrumb/uai-breadcrumb",
                            "id": "src/components/uai-breadcrumb/uai-breadcrumb.tsx::UaiBreadcrumbItem",
                            "referenceLocation": "UaiBreadcrumbItem"
                        }
                    }
                }
            }, {
                "method": "uaiBreadcrumbItemEdit",
                "name": "uaiBreadcrumbItemEdit",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Rename request bubbling from the breadcrumb. Use to update items; pair with editable; avoid assuming persistence succeeded."
                },
                "complexType": {
                    "original": "UaiBreadcrumbEditDetail",
                    "resolved": "UaiBreadcrumbEditDetail",
                    "references": {
                        "UaiBreadcrumbEditDetail": {
                            "location": "import",
                            "path": "../uai-breadcrumb/uai-breadcrumb",
                            "id": "src/components/uai-breadcrumb/uai-breadcrumb.tsx::UaiBreadcrumbEditDetail",
                            "referenceLocation": "UaiBreadcrumbEditDetail"
                        }
                    }
                }
            }];
    }
}
