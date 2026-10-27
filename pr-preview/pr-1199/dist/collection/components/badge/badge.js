import { h, Host } from "@stencil/core";
export class Badge {
    constructor() {
        /**
         * State for keep the value of the type.
         */
        this.type = 'status';
        /**
         * Set the color of the component.
         */
        this.color = 'system';
        /**
         * Set the shape of the component.
         */
        this.shape = 'circle';
        /**
         * Set witch icon will be render inside the component.
         */
        this.icon = null;
        /**
         * If true, actived the pulse animation.
         */
        this.animation = false;
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
    }
    componentWillLoad() {
        if (this.icon === null && this.number) {
            this.type = 'number';
        }
        else if (!this.number && this.icon) {
            this.type = 'icon';
        }
        else if (this.number && this.icon) {
            this.type = 'number';
        }
        else if (this.number === 0) {
            this.type = 'empty';
        }
    }
    numberChanged(newNumber) {
        if (newNumber === 0) {
            this.type = 'empty';
        }
        else if (this.icon === null && newNumber !== null) {
            this.type = 'number';
        }
    }
    render() {
        return (h(Host, { key: 'd20ef9793af71ebc0945fceb95ca517c85de527b' }, h("div", { key: '9d4aa070ca534a0edf680daadb1cd78dd99ad695', class: {
                chip_badge: true,
                chip_size: this.number !== 0 ? true : false,
                [`chip_badge--${this.shape}`]: true,
                [`chip_badge--${this.color}`]: true,
            }, "data-test": this.dataTest }, this.type === 'status' && (h("div", { key: '17db29aefd614b84e2ad4e14f677e0e9f1270a0a', class: {
                status: true,
                [`status--${this.shape}`]: true,
                [`color--${this.color}`]: true,
                [`status--circle-${this.animation}`]: true,
            } })), this.type === 'icon' && (h("div", { key: '5ad822383ab49895d3f9135d36b803c9afec9df3', class: { icon: true, [`icon--${this.shape}`]: true } }, h("div", { key: 'd6f9358bd0a441c85043587cda77bfca483a277c', class: { [`color--${this.color}`]: true, trim: true, [`trim-${this.animation}`]: true } }), h("bds-icon", { key: '8b760e7b1ddb604659bf886c28d39d88b7711ad2', size: "xxx-small", name: this.icon }))), this.type === 'number' && (h("div", { key: '3da3d77e5107792d256b9892be77e15a693bf8a5', class: {
                number: true,
                [`color--${this.color}`]: true,
                [`number--${this.animation}`]: true,
            } }, h("bds-typo", { key: '7b6eb54efcb34abd18fcdd232d8a589d4288383d', class: "number_text", variant: "fs-12", bold: "bold", margin: false }, this.number >= 999 ? '999+' : this.number))), this.type === 'empty' && (h("div", { key: 'b2c5b644be228c6df3ec179d3c091f6ccdddb19e', class: {
                empty: true,
                [`color--${this.color}`]: true,
                [`empty--${this.shape}`]: true,
                [`empty--${this.animation}`]: true,
            } })))));
    }
    static get is() { return "bds-badge"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["badge.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["badge.css"]
        };
    }
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
                    "text": "Set the color of the component."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'system'"
            },
            "shape": {
                "type": "string",
                "attribute": "shape",
                "mutable": false,
                "complexType": {
                    "original": "Shape",
                    "resolved": "\"circle\" | \"polygon\" | \"square\" | \"triangle\" | \"triangle-reverse\"",
                    "references": {
                        "Shape": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/badge/badge.tsx",
                            "id": "src/components/badge/badge.tsx::Shape"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Set the shape of the component."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'circle'"
            },
            "icon": {
                "type": "string",
                "attribute": "icon",
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
                    "text": "Set witch icon will be render inside the component."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "null"
            },
            "number": {
                "type": "number",
                "attribute": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Set the text in shape circle. Is just alow numbers, but if the number pass 999 a symbol '+' will be render."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "animation": {
                "type": "boolean",
                "attribute": "animation",
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
                    "text": "If true, actived the pulse animation."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
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
            "type": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "number",
                "methodName": "numberChanged"
            }];
    }
}
//# sourceMappingURL=badge.js.map
