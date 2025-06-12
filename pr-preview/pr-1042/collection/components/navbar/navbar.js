import { h, Host } from "@stencil/core";
export class Navbar {
    constructor() {
        /**
         * Navbar orientation. Used to orientation the navbar. Either on the left or on the right.
         */
        this.orientation = 'vertical';
        /**
         * Width, number to define navbar width.
         */
        this.backgroundColor = 'surface-1';
        /**
         * Justify Content. Used to align itens in navbar.
         */
        this.justifyContent = 'space-between';
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
    }
    render() {
        return (h(Host, { key: 'd8885b6b92b10e7f9ff7e359b4ce6aa87ab60ee4', class: { [`${this.orientation}`]: true } }, h("div", { key: 'e468a6ac74d7d8a8e0c0627739d107605ac96bc8', class: {
                navbar: true,
                [`navbar__justify-content__${this.justifyContent}`]: true,
                [`navbar__orientation__${this.orientation}`]: true,
                [`navbar__background-color__${this.backgroundColor}`]: true,
            }, "data-test": this.dataTest }, h("slot", { key: 'a2c537e005ec2383b4b2d790ecbbeb079b4f6e23' }))));
    }
    static get is() { return "bds-navbar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["navbar.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["navbar.css"]
        };
    }
    static get properties() {
        return {
            "orientation": {
                "type": "string",
                "attribute": "orientation",
                "mutable": false,
                "complexType": {
                    "original": "orientation",
                    "resolved": "\"horizontal\" | \"vertical\"",
                    "references": {
                        "orientation": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/navbar/navbar.tsx",
                            "id": "src/components/navbar/navbar.tsx::orientation"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Navbar orientation. Used to orientation the navbar. Either on the left or on the right."
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
                    "original": "navbarBackground",
                    "resolved": "\"surface-1\" | \"surface-2\" | \"surface-3\"",
                    "references": {
                        "navbarBackground": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/navbar/navbar.tsx",
                            "id": "src/components/navbar/navbar.tsx::navbarBackground"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Width, number to define navbar width."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'surface-1'"
            },
            "justifyContent": {
                "type": "string",
                "attribute": "justify-content",
                "mutable": false,
                "complexType": {
                    "original": "justifyContent",
                    "resolved": "\"center\" | \"flex-end\" | \"flex-start\" | \"space-around\" | \"space-between\" | \"space-evenly\"",
                    "references": {
                        "justifyContent": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/navbar/navbar.tsx",
                            "id": "src/components/navbar/navbar.tsx::justifyContent"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Justify Content. Used to align itens in navbar."
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
                    "text": "Data test is the prop to specifically test the component action object."
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
//# sourceMappingURL=navbar.js.map
