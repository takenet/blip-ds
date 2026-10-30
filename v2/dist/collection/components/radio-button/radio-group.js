import { h, Host } from "@stencil/core";
/** @deprecated Use uai-radio-group for new work. */
export class RadioGroup {
    constructor() {
        this.radioGroupElement = null;
        this.chagedOptions = (value, event) => {
            if (event.detail.checked == true) {
                this.value = value;
            }
        };
    }
    valueChanged(value) {
        this.setSelectedRadio(value);
        this.bdsRadioGroupChange.emit({ value });
    }
    componentWillRender() {
        this.radioGroupElement = this.element.getElementsByTagName('bds-radio');
        for (let i = 0; i < this.radioGroupElement.length; i++) {
            this.radioGroupElement[i].addEventListener('bdsChange', (event) => this.chagedOptions(this.radioGroupElement[i].value, event));
        }
    }
    setSelectedRadio(value) {
        const radios = this.radioGroupElement;
        for (let i = 0; i < radios.length; i++) {
            const getValue = radios[i].value;
            radios[i].checked = false;
            if (radios[i].checked == false && value == getValue) {
                radios[i].checked = true;
            }
        }
    }
    render() {
        return (h(Host, { key: 'b6eb895371cbefddbc47aaa58dae151f4d6f9683' }, h("slot", { key: '4ff649e2fe5771d2066eb59929a47417a33a2b60' })));
    }
    static get is() { return "bds-radio-group"; }
    static get encapsulation() { return "scoped"; }
    static get properties() {
        return {
            "value": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The value of the selected radio"
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "value"
            }
        };
    }
    static get events() {
        return [{
                "method": "bdsRadioGroupChange",
                "name": "bdsRadioGroupChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the value has changed due to a click event."
                },
                "complexType": {
                    "original": "{ value?: string }",
                    "resolved": "{ value?: string; }",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "element"; }
    static get watchers() {
        return [{
                "propName": "value",
                "methodName": "valueChanged"
            }];
    }
}
