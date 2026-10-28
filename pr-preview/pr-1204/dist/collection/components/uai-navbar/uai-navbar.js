import { h, Host } from "@stencil/core";
/**
 * Navigation bar container. Set orientation, background and justifyContent; put uai-navbar-content items inside.
 *
 * @slot - Navbar content, usually uai-navbar-content elements.
 */
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
        return (h(Host, { key: '7a24337e33b483ad20f8938428e280d96fcb22db', class: { [`${this.orientation}`]: true } }, h("div", { key: '198ba7f2d6785c8ba3c2a6644e193e0e301a2bef', class: {
                navbar: true,
                [`navbar__justify-content__${this.justifyContent}`]: true,
                [`navbar__orientation__${this.orientation}`]: true,
                [`navbar__background-color__${this.backgroundColor}`]: true,
            }, "data-test": this.dataTest }, h("slot", { key: 'f07c979ef2d845ad5bd0f04570aad594ff11b151' }))));
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
                "attribute": "orientation",
                "defaultValue": "'vertical'"
            },
            "backgroundColor": {
                "type": "string",
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
                "attribute": "background-color",
                "defaultValue": "'surface-paper'"
            },
            "justifyContent": {
                "type": "string",
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
                "attribute": "justify-content",
                "defaultValue": "'space-between'"
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
                    "text": "Attribute used to identify the component in tests."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "data-test",
                "defaultValue": "null"
            }
        };
    }
    static get elementRef() { return "hostElement"; }
}
