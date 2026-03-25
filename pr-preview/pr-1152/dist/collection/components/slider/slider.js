import { Host, h } from "@stencil/core";
export class Slider {
    constructor() {
        var _a, _b;
        this.inputValue = (_b = (_a = this.value) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : (this.min ? this.min.toString() : '0');
        this.tooltipPosition = 'top-center';
        /**
         * Value, prop to define value of input.
         */
        this.value = this.min ? this.min : 0;
        /**
         * Markers, Prop to enable markers.
         */
        this.markers = false;
        /**
         * Label, Prop to enable Label.
         */
        this.label = false;
        /**
         * Type, prop to select type of slider.
         */
        this.type = 'fill';
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
        this.refInputSlide = (el) => {
            this.inputSlide = el;
        };
        this.refBdsTooltip = (el) => {
            this.bdsTooltip = el;
        };
        this.refProgressBar = (el) => {
            this.progressBar = el;
        };
        this.valuePercent = (element) => {
            const input = element;
            const min = input.min ? parseInt(input.min) : 0;
            const max = parseInt(input.max);
            const val = parseInt(input.value);
            const percentage = ((val - min) * 100) / (max - min);
            return percentage;
        };
        this.computeTooltipPosition = (percent) => {
            if (percent <= 0)
                return 'top-left';
            if (percent >= 100)
                return 'top-right';
            return 'top-center';
        };
        this.getTooltipText = (item) => {
            return item.tooltip !== undefined ? item.tooltip : item.name.toString();
        };
        this.onInputSlide = (ev) => {
            const input = ev.target;
            this.progressBar.style.width = `${this.valuePercent(input)}%`;
            const valueName = this.emiterChange(parseInt(input.value));
            this.inputValue = this.stepArray.length > 0 ? this.getTooltipText(valueName) : input.value;
            this.tooltipPosition = this.computeTooltipPosition(this.valuePercent(input));
            this.bdsChange.emit(valueName);
        };
        this.onInputMouseEnter = () => {
            this.bdsTooltip.visible();
            this.progressBar.classList.add(`progress-bar-hover`);
        };
        this.onInputMouseLeave = () => {
            this.bdsTooltip.invisible();
            this.progressBar.classList.remove(`progress-bar-hover`);
        };
        this.emiterChange = (value) => {
            if (this.internalOptions) {
                return this.stepArray[value];
            }
            else {
                return this.stepArray.find((item) => parseInt(item.name) === value);
            }
        };
    }
    componentWillLoad() {
        var _a, _b, _c, _d;
        if (this.dataMarkers) {
            if (typeof this.dataMarkers === 'string') {
                this.internalOptions = JSON.parse(this.dataMarkers);
                this.stepArray = this.internalOptions;
            }
            else {
                this.internalOptions = this.dataMarkers;
                this.stepArray = this.internalOptions;
            }
            const initialIndex = (_a = this.value) !== null && _a !== void 0 ? _a : 0;
            const initialItem = this.stepArray[initialIndex];
            if (initialItem) {
                this.inputValue = this.getTooltipText(initialItem);
            }
            const percent = this.stepArray.length > 1 ? (initialIndex / (this.stepArray.length - 1)) * 100 : 50;
            this.tooltipPosition = this.computeTooltipPosition(percent);
        }
        else {
            this.stepArray = this.arrayToSteps((this.max - this.min) / this.step, Number.isInteger((this.max - this.min) / this.step));
            const min = (_b = this.min) !== null && _b !== void 0 ? _b : 0;
            const max = (_c = this.max) !== null && _c !== void 0 ? _c : 100;
            const value = (_d = this.value) !== null && _d !== void 0 ? _d : min;
            const percent = max !== min ? ((value - min) * 100) / (max - min) : 50;
            this.tooltipPosition = this.computeTooltipPosition(percent);
        }
    }
    componentDidLoad() {
        this.progressBar.style.width = `${this.valuePercent(this.inputSlide)}%`;
    }
    componentDidRender() {
        if (this.internalOptions) {
            this.inputSlide.min = '0';
            this.inputSlide.max = `${this.internalOptions.length - 1}`;
            this.inputSlide.step = '1';
        }
        else {
            this.inputSlide.min = this.min ? `${this.min}` : '';
            this.inputSlide.max = this.max ? `${this.max}` : '';
            this.inputSlide.step = this.step ? `${this.step}` : '';
        }
    }
    componentDidUpdate() {
        this.progressBar.style.width = `${this.valuePercent(this.inputSlide)}%`;
        const valueName = this.emiterChange(parseInt(this.inputSlide.value));
        this.inputValue = this.stepArray.length > 0 ? this.getTooltipText(valueName) : this.inputSlide.value;
        this.tooltipPosition = this.computeTooltipPosition(this.valuePercent(this.inputSlide));
    }
    arrayToSteps(value, int) {
        const numberToCalc = int ? value + 1 : value;
        const valueSteps = [];
        for (let i = 0; i < numberToCalc; i++) {
            valueSteps.push(i);
        }
        return valueSteps.map((term) => ({ value: term, name: term * this.step + this.min }));
    }
    render() {
        return (h(Host, { key: 'fd0e5c5b7e0a178a36022b7283f3390e6cf3402c' }, h("input", { key: 'dd503cdaa91c4fbcdf2281b34031d0975965e8b0', ref: this.refInputSlide, type: "range", class: {
                input_slide: true,
            }, value: this.value, onInput: this.onInputSlide, onMouseEnter: this.onInputMouseEnter, onMouseLeave: this.onInputMouseLeave, "data-test": this.dataTest }), h("div", { key: '373b9e3acb7e6057df50accc1a67c6c30e89bfc8', class: "track-bg" }, this.markers &&
            this.stepArray.map((item, index) => (h("div", { key: index, class: { step: true, 'step--first': index === 0, 'step--last': index === this.stepArray.length - 1 } }, this.label && h("bds-typo", { class: "label-step", variant: "fs-10" }, `${item.name}`)))), h("div", { key: '62598d2bc5293a9cc97af8e1f93540fe3ae94e59', class: { [`progress-bar`]: true, [`progress-bar-liner`]: this.type !== 'no-linear' }, ref: this.refProgressBar }, h("bds-tooltip", { key: 'b6811f9781f9c47e017947606f2d0b976b54f57c', ref: this.refBdsTooltip, class: { [`progress-bar-tooltip`]: true }, position: this.tooltipPosition, "tooltip-text": this.inputValue }, h("div", { key: 'aa70f70056d64d53df66e84b4f40f0577ef3e69e', class: { [`progress-bar-thumb`]: true } }))))));
    }
    static get is() { return "bds-slider"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["slider.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["slider.css"]
        };
    }
    static get properties() {
        return {
            "step": {
                "type": "number",
                "attribute": "step",
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
                    "text": "Step, property to insert steps into the input range."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "min": {
                "type": "number",
                "attribute": "min",
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
                    "text": "Min, property to set the minimum value of the range."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "max": {
                "type": "number",
                "attribute": "max",
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
                    "text": "Max, property to set the maximum value of the range."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "value": {
                "type": "number",
                "attribute": "value",
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
                    "text": "Value, prop to define value of input."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "this.min ? this.min : 0"
            },
            "markers": {
                "type": "boolean",
                "attribute": "markers",
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
                    "text": "Markers, Prop to enable markers."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "label": {
                "type": "boolean",
                "attribute": "label",
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
                    "text": "Label, Prop to enable Label."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "type": {
                "type": "string",
                "attribute": "type",
                "mutable": false,
                "complexType": {
                    "original": "typeRange",
                    "resolved": "\"fill\" | \"no-linear\"",
                    "references": {
                        "typeRange": {
                            "location": "import",
                            "path": "./slider-interface",
                            "id": "src/components/slider/slider-interface.ts::typeRange"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Type, prop to select type of slider."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'fill'"
            },
            "dataMarkers": {
                "type": "string",
                "attribute": "data-markers",
                "mutable": false,
                "complexType": {
                    "original": "string | StepOption[]",
                    "resolved": "StepOption[] | string",
                    "references": {
                        "StepOption": {
                            "location": "import",
                            "path": "./slider-interface",
                            "id": "src/components/slider/slider-interface.ts::StepOption"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Data Markers, prop to select ype of markers."
                },
                "getter": false,
                "setter": false,
                "reflect": false
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
            "stepArray": {},
            "internalOptions": {},
            "inputValue": {},
            "tooltipPosition": {}
        };
    }
    static get events() {
        return [{
                "method": "bdsChange",
                "name": "bdsChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "bdsChange. Event to return selected date value."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=slider.js.map
