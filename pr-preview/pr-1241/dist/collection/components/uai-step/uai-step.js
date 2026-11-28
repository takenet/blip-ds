import { Host, h } from "@stencil/core";
/**
 * One stage of a UaiStepper, with a numbered marker, a title and an optional description.
 * Use inside uai-stepper, which sets its orientation, number and position; avoid it outside a stepper.
 *
 * @slot heading - Step title. Use for rich content; pair with no heading prop, which it replaces.
 * @slot description - Step description. Use for rich content; pair with no description prop, which it replaces.
 */
export class UaiStep {
    constructor() {
        /** Step title. Use a short noun phrase; pair with description for details; avoid long sentences. */
        this.heading = null;
        /** Step description. Use for one or two lines of detail; pair with heading; in the horizontal stepper it is cut at two lines. */
        this.description = null;
        /** Layout of the step. Set by the stepper from its orientation; avoid setting it by hand. */
        this.orientation = 'horizontal';
        /** Marks the last step, which draws no connector in the vertical layout. Set by the stepper; avoid setting it by hand. */
        this.last = false;
        /** Marks the stage as done and shows a check. Use with setCompletedStep; the active step wins over completed. */
        this.completed = false;
        /** Marks the current stage. Use with setActiveStep; avoid more than one active step. */
        this.active = false;
        /** Makes the step unavailable. Use for stages that cannot be reached yet; avoid combining it with pointer. */
        this.disabled = false;
        /** Position of the step, starting at 0. Set by the stepper; avoid setting it by hand. */
        this.index = 0;
        /** Makes the step clickable and focusable, announcing uaiStepSelect. Use for steps the person can go back to; set by the stepper when navigable; ignored on disabled steps. */
        this.pointer = false;
        /** Data test is the prop to specifically test the component action object. */
        this.dataTest = null;
        this.select = () => {
            if (this.interactive)
                this.uaiStepSelect.emit(this.index);
        };
        this.onKeyDown = (event) => {
            if (!this.interactive || (event.key !== 'Enter' && event.key !== ' '))
                return;
            event.preventDefault();
            this.select();
        };
    }
    get interactive() {
        return !!this.pointer && !this.disabled;
    }
    get state() {
        if (this.active)
            return 'active';
        if (this.completed)
            return 'completed';
        return 'pending';
    }
    render() {
        const state = this.state;
        const vertical = this.orientation === 'vertical';
        return (h(Host, { key: '717a3b52352ec4e0649715cf87d11a142b5ee23a', role: "listitem", "aria-current": this.active ? 'step' : undefined, "aria-disabled": this.disabled ? 'true' : undefined }, h("div", { key: 'd2bc5ff54c86d5efd3c1cd2b78e1d35ff12aa92b', class: {
                step: true,
                [`step--${state}`]: true,
                'step--disabled': this.disabled,
                'step--pointer': this.pointer && !this.disabled,
            }, "data-test": this.dataTest, role: this.interactive ? 'button' : undefined, tabindex: this.interactive ? 0 : undefined, onClick: this.select, onKeyDown: this.onKeyDown }, h("div", { key: 'b2cd32f93a945cfa1946c149749dc7b3ce008610', class: "step__number" }, h("span", { key: '372689cf31c41419f8ce64256221f7a5bc9412c9', class: "step__marker", "aria-hidden": "true" }, state === 'completed' ? (h("uai-icon", { name: "check", size: "medium" })) : (h("uai-typo", { tag: "span", variant: "body-base", bold: "medium", margin: false }, this.index + 1))), vertical && !this.last && h("span", { key: 'a3c3f8dae8c3313235d6604066116de6bb10c524', class: "step__line", "aria-hidden": "true" })), h("div", { key: '4fb16d91b9f8a5cff3689ee4efc677ebc8a1d7ed', class: "step__content" }, h("uai-typo", { key: '5bf7a7fd9f9d91b143ca28d420111675cd64a033', tag: "span", variant: "title-md", bold: "semibold", margin: false, class: "step__heading" }, h("slot", { key: '51feb1f85c059f2b0f8888318cd37c702f5bb807', name: "heading" }, this.heading)), h("div", { key: '35d5e2117e5e151b152dfed7533eacc8e26c99c8', class: "step__description" }, h("uai-typo", { key: '0079e00e6dfd85f4072ca0fd379f764093477784', tag: "span", variant: "body-base", margin: false }, h("slot", { key: 'f6769b6cf243bb4ab2be61d0a00731fbeab42d12', name: "description" }, this.description)))))));
    }
    static get is() { return "uai-step"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-step.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-step.css"]
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
                    "text": "Step title. Use a short noun phrase; pair with description for details; avoid long sentences."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "heading",
                "defaultValue": "null"
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
                    "text": "Step description. Use for one or two lines of detail; pair with heading; in the horizontal stepper it is cut at two lines."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "description",
                "defaultValue": "null"
            },
            "orientation": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "UaiStepOrientation",
                    "resolved": "\"horizontal\" | \"vertical\"",
                    "references": {
                        "UaiStepOrientation": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-step/uai-step.tsx",
                            "id": "src/components/uai-step/uai-step.tsx::UaiStepOrientation"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Layout of the step. Set by the stepper from its orientation; avoid setting it by hand."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "orientation",
                "defaultValue": "'horizontal'"
            },
            "last": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Marks the last step, which draws no connector in the vertical layout. Set by the stepper; avoid setting it by hand."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "last",
                "defaultValue": "false"
            },
            "completed": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Marks the stage as done and shows a check. Use with setCompletedStep; the active step wins over completed."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "completed",
                "defaultValue": "false"
            },
            "active": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Marks the current stage. Use with setActiveStep; avoid more than one active step."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
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
                    "text": "Makes the step unavailable. Use for stages that cannot be reached yet; avoid combining it with pointer."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "disabled",
                "defaultValue": "false"
            },
            "index": {
                "type": "number",
                "mutable": true,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Position of the step, starting at 0. Set by the stepper; avoid setting it by hand."
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
                    "text": "Makes the step clickable and focusable, announcing uaiStepSelect. Use for steps the person can go back to; set by the stepper when navigable; ignored on disabled steps."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
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
    static get events() {
        return [{
                "method": "uaiStepSelect",
                "name": "uaiStepSelect",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Index of the step when the person selects it by click, Enter or Space. Only fires when the step is clickable (pointer) and not disabled."
                },
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                }
            }];
    }
}
