import { h, Host } from "@stencil/core";
export class UaiNavbar {
    constructor() {
        /** Navbar orientation: horizontal or vertical. */
        this.orientation = 'vertical';
        /** Background surface color. */
        this.backgroundColor = 'surface-paper';
        /** Alignment for navbar content. */
        this.justifyContent = 'space-between';
        /** Attribute used to identify the component in tests. */
        this.dataTest = null;
    }
    render() {
        return (h(Host, { key: 'a02fad0a9951fc3f5f9b12ec03e254eea7bf4b6d', class: { [`${this.orientation}`]: true } }, h("div", { key: '91bfb19f2139dd8b2453c9f2181fefd742bd1d74', class: {
                navbar: true,
                [`navbar__justify-content__${this.justifyContent}`]: true,
                [`navbar__orientation__${this.orientation}`]: true,
                [`navbar__background-color__${this.backgroundColor}`]: true,
            }, "data-test": this.dataTest }, h("slot", { key: '36a60717b3d0281497b2b2a7571762cfa8bb27f2' }))));
    }
    static get is() { return "uai-navbar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-navbar.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-navbar.css"]
        };
    }
    static get properties() {
        return {
            "orientation": {
                "type": "string",
                "attribute": "orientation",
                "mutable": false,
                "complexType": {
                    "original": "uaiNavbarOrientation",
                    "resolved": "\"horizontal\" | \"vertical\"",
                    "references": {
                        "uaiNavbarOrientation": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-navbar/uai-navbar.tsx",
                            "id": "src/components/uai-navbar/uai-navbar.tsx::uaiNavbarOrientation"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Navbar orientation: horizontal or vertical."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'vertical'"
            },
            "backgroundColor": {
                "type": "string",
                "attribute": "background-color",
                "mutable": false,
                "complexType": {
                    "original": "uaiNavbarBackground",
                    "resolved": "\"surface-background\" | \"surface-contrast\" | \"surface-inverse\" | \"surface-muted\" | \"surface-paper\"",
                    "references": {
                        "uaiNavbarBackground": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-navbar/uai-navbar.tsx",
                            "id": "src/components/uai-navbar/uai-navbar.tsx::uaiNavbarBackground"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Background surface color."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'surface-paper'"
            },
            "justifyContent": {
                "type": "string",
                "attribute": "justify-content",
                "mutable": false,
                "complexType": {
                    "original": "uaiNavbarJustifyContent",
                    "resolved": "\"center\" | \"flex-end\" | \"flex-start\" | \"space-around\" | \"space-between\" | \"space-evenly\"",
                    "references": {
                        "uaiNavbarJustifyContent": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-navbar/uai-navbar.tsx",
                            "id": "src/components/uai-navbar/uai-navbar.tsx::uaiNavbarJustifyContent"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Alignment for navbar content."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'space-between'"
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
                    "text": "Attribute used to identify the component in tests."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "null"
            }
        };
    }
    static get elementRef() { return "hostElement"; }
}
//# sourceMappingURL=uai-navbar.js.map
