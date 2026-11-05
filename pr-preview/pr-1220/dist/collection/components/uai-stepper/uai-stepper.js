import { Host, h } from "@stencil/core";
/**
 * Sequential steps of a process. Use for flows with ordered stages; pair with UaiStep; avoid it for free navigation between views (use uai-tab-group).
 * The stepper numbers the steps, marks the last one and sets their orientation.
 *
 * @slot - UaiStep items, in order.
 */
export class UaiStepper {
    constructor() {
        /** Layout of the steps: a row with a state bar under each step, or a column with connectors. Use vertical for long labels or narrow areas; avoid unsupported values. */
        this.orientation = 'horizontal';
        this.syncSteps = () => {
            const steps = this.steps;
            steps.forEach((step, index) => {
                step.index = index;
                step.last = index === steps.length - 1;
                step.orientation = this.orientation === 'vertical' ? 'vertical' : 'horizontal';
            });
        };
    }
    orientationChanged() {
        this.syncSteps();
    }
    get steps() {
        return Array.from(this.el.children).filter((child) => child.tagName === 'UAI-STEP');
    }
    connectedCallback() {
        this.syncSteps();
    }
    componentDidLoad() {
        this.syncSteps();
    }
    /**
     * Sets the active step. Use for moving forward or back; pair with setCompletedStep; avoid indexes outside the steps, which are ignored.
     * @param index Zero-based index of the step.
     */
    async setActiveStep(index) {
        const step = this.steps[index];
        if (!step)
            return;
        await this.resetActiveSteps();
        step.active = true;
    }
    /**
     * Marks a step as completed. Use after the person finishes a stage; pair with setActiveStep; avoid indexes outside the steps, which are ignored.
     * @param index Zero-based index of the step.
     */
    async setCompletedStep(index) {
        const step = this.steps[index];
        if (step)
            step.completed = true;
    }
    /**
     * Index of the active step, or -1 when none is active. Use to decide the next step; pair with setActiveStep; avoid assuming a step is always active.
     */
    async getActiveStep() {
        return this.steps.findIndex((step) => step.active === true);
    }
    /** Clears the active state of every step. Use before restarting a flow; pair with resetCompletedSteps. */
    async resetActiveSteps() {
        this.steps.forEach((step) => (step.active = false));
    }
    /** Clears the completed state of every step. Use before restarting a flow; pair with resetActiveSteps. */
    async resetCompletedSteps() {
        this.steps.forEach((step) => (step.completed = false));
    }
    render() {
        return (h(Host, { key: '2c81a4a7028fffddf3d405efb8ab770521b826a9', role: "list" }, h("slot", { key: 'd8a98934f143dda037f20e98e3d315109b4d6e99', onSlotchange: this.syncSteps })));
    }
    static get is() { return "uai-stepper"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-stepper.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-stepper.css"]
        };
    }
    static get properties() {
        return {
            "orientation": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'horizontal' | 'vertical'",
                    "resolved": "\"horizontal\" | \"vertical\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Layout of the steps: a row with a state bar under each step, or a column with connectors. Use vertical for long labels or narrow areas; avoid unsupported values."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "orientation",
                "defaultValue": "'horizontal'"
            }
        };
    }
    static get methods() {
        return {
            "setActiveStep": {
                "complexType": {
                    "signature": "(index: number) => Promise<void>",
                    "parameters": [{
                            "name": "index",
                            "type": "number",
                            "docs": "Zero-based index of the step."
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
                    "text": "Sets the active step. Use for moving forward or back; pair with setCompletedStep; avoid indexes outside the steps, which are ignored.",
                    "tags": [{
                            "name": "param",
                            "text": "index Zero-based index of the step."
                        }]
                }
            },
            "setCompletedStep": {
                "complexType": {
                    "signature": "(index: number) => Promise<void>",
                    "parameters": [{
                            "name": "index",
                            "type": "number",
                            "docs": "Zero-based index of the step."
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
                    "text": "Marks a step as completed. Use after the person finishes a stage; pair with setActiveStep; avoid indexes outside the steps, which are ignored.",
                    "tags": [{
                            "name": "param",
                            "text": "index Zero-based index of the step."
                        }]
                }
            },
            "getActiveStep": {
                "complexType": {
                    "signature": "() => Promise<number>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<number>"
                },
                "docs": {
                    "text": "Index of the active step, or -1 when none is active. Use to decide the next step; pair with setActiveStep; avoid assuming a step is always active.",
                    "tags": []
                }
            },
            "resetActiveSteps": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Clears the active state of every step. Use before restarting a flow; pair with resetCompletedSteps.",
                    "tags": []
                }
            },
            "resetCompletedSteps": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Clears the completed state of every step. Use before restarting a flow; pair with resetActiveSteps.",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "orientation",
                "methodName": "orientationChanged"
            }];
    }
}
