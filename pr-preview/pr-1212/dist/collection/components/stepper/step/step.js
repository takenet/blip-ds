import { h } from "@stencil/core";
export class BdsStep {
    constructor() {
        /**
         * Used to define the last step component on the list
         */
        this.last = false;
        /**
         * Used to complete the step
         */
        this.completed = false;
        /**
         * Used to set the step as active
         */
        this.active = false;
        /**
         * Used to set the step as disabled
         */
        this.disabled = false;
        /**
         * Used to set the index of the steps
         */
        this.index = 0;
        /**
         * Used to set cursor pointer on the step (useful to allow clicks on the steps)
         */
        this.pointer = false;
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
    }
    render() {
        return (h("div", { key: 'fe6407804110d10b319708d1b56e769b8d3bb1a5', class: "step" }, h("div", { key: '6c6d4e81cabea3c19e11c8037e03813935f79786', class: {
                step__content: true,
                'step__content--active': this.active,
                'step__content--completed': this.completed,
                'step__content--disabled': this.disabled,
                'step__content--pointer': this.pointer,
                'step--last': this.last,
            }, "data-test": this.dataTest }, h("div", { key: '21a3e0db7c1da6b0a531684eb2abb2e55c4fb8ce', class: {
                step__content__ellipse: true,
                'step__content__ellipse--active': this.active,
                'step__content__ellipse--completed': this.completed,
                'step__content__ellipse--disabled': this.disabled,
            } }, this.completed && h("bds-icon", { key: 'f71fb80de6c445bd472a7f8aa9a675726b49ae20', name: "true" }), !this.completed && h("bds-typo", { key: '7ef06a3439e25d52df7c3a7dc121c516f1ef346d' }, this.index + 1)), h("bds-typo", { key: 'fc055bb10266c78ad7b2de9989b9a8b5a6426bfe', variant: "fs-16", class: {
                step__content__text: true,
                'step__content__text--completed': this.completed && !this.active,
                'step__content__text--active': this.active,
                'step__content__text--disabled': this.disabled,
            }, bold: this.active ? 'bold' : 'regular' }, h("slot", { key: '2eb9deda5d4b4071ccc2f939a76c7ef791fb9288' })))));
    }
    static get is() { return "bds-step"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["step.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["step.css"]
        };
    }
    static get properties() {
        return {
            "last": {
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
                    "text": "Used to define the last step component on the list"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "last",
                "defaultValue": "false"
            },
            "completed": {
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
                    "text": "Used to complete the step"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "completed",
                "defaultValue": "false"
            },
            "active": {
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
                    "text": "Used to set the step as active"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "active",
                "defaultValue": "false"
            },
            "disabled": {
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
                    "text": "Used to set the step as disabled"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "disabled",
                "defaultValue": "false"
            },
            "index": {
                "type": "number",
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
                    "text": "Used to set the index of the steps"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "index",
                "defaultValue": "0"
            },
            "pointer": {
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
                    "text": "Used to set cursor pointer on the step (useful to allow clicks on the steps)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "pointer",
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
}
