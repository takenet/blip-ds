import { Host, h } from '@stencil/core';
export class Slider {
  constructor() {
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
    this.onInputSlide = (ev) => {
      const input = ev.target;
      this.progressBar.style.width = `${this.valuePercent(input)}%`;
      const valueName = this.emiterChange(parseInt(input.value));
      this.inputValue = this.stepArray.length > 0 ? valueName.name : input.value;
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
    this.stepArray = undefined;
    this.internalOptions = undefined;
    this.inputValue = this.value.toString();
    this.step = undefined;
    this.min = undefined;
    this.max = undefined;
    this.value = this.min ? this.min : 0;
    this.markers = false;
    this.label = false;
    this.type = 'fill';
    this.dataMarkers = undefined;
    this.dataTest = null;
  }
  componentWillLoad() {
    if (this.dataMarkers) {
      if (typeof this.dataMarkers === 'string') {
        this.internalOptions = JSON.parse(this.dataMarkers);
        this.stepArray = this.internalOptions;
      }
      else {
        this.internalOptions = this.dataMarkers;
        this.stepArray = this.internalOptions;
      }
    }
    else {
      this.stepArray = this.arrayToSteps((this.max - this.min) / this.step, Number.isInteger((this.max - this.min) / this.step));
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
    this.inputValue = this.stepArray.length > 0 ? valueName.name : this.inputSlide.value;
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
    return (h(Host, null, h("input", { ref: this.refInputSlide, type: "range", class: {
        input_slide: true,
      }, value: this.value, onInput: this.onInputSlide, onMouseEnter: this.onInputMouseEnter, onMouseLeave: this.onInputMouseLeave, "data-test": this.dataTest }), h("div", { class: "track-bg" }, h("div", { class: { [`progress-bar`]: true, [`progress-bar-liner`]: this.type !== 'no-linear' }, ref: this.refProgressBar }, h("bds-tooltip", { ref: this.refBdsTooltip, class: { [`progress-bar-tooltip`]: true }, position: "top-center", "tooltip-text": this.inputValue }, h("div", { class: { [`progress-bar-thumb`]: true } }))), this.markers &&
      this.stepArray.map((item, index) => (h("div", { key: index, class: `step` }, this.label && h("bds-typo", { class: "label-step", variant: "fs-10" }, `${item.name}`)))))));
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
        "attribute": "step",
        "reflect": false
      },
      "min": {
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
          "text": "Min, property to set the minimum value of the range."
        },
        "attribute": "min",
        "reflect": false
      },
      "max": {
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
          "text": "Max, property to set the maximum value of the range."
        },
        "attribute": "max",
        "reflect": false
      },
      "value": {
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
          "text": "Value, prop to define value of input."
        },
        "attribute": "value",
        "reflect": false,
        "defaultValue": "this.min ? this.min : 0"
      },
      "markers": {
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
          "text": "Markers, Prop to enable markers."
        },
        "attribute": "markers",
        "reflect": false,
        "defaultValue": "false"
      },
      "label": {
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
          "text": "Label, Prop to enable Label."
        },
        "attribute": "label",
        "reflect": false,
        "defaultValue": "false"
      },
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "typeRange",
          "resolved": "\"fill\" | \"no-linear\"",
          "references": {
            "typeRange": {
              "location": "import",
              "path": "./slider-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Type, prop to select type of slider."
        },
        "attribute": "type",
        "reflect": false,
        "defaultValue": "'fill'"
      },
      "dataMarkers": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string | StepOption[]",
          "resolved": "StepOption[] | string",
          "references": {
            "StepOption": {
              "location": "import",
              "path": "./slider-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Data Markers, prop to select ype of markers."
        },
        "attribute": "data-markers",
        "reflect": false
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
        "attribute": "data-test",
        "reflect": false,
        "defaultValue": "null"
      }
    };
  }
  static get states() {
    return {
      "stepArray": {},
      "internalOptions": {},
      "inputValue": {}
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
