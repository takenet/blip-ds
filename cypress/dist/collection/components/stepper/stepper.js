import { h } from '@stencil/core';
export class BdsStepper {
  connectedCallback() {
    this.childOptions.forEach((option, index) => {
      option.index = index;
      if (index === this.childOptions.length - 1) {
        option.last = true;
      }
    });
  }
  componentDidLoad() {
    this.renderLine();
  }
  /**
   * Set the active step
   *
   * @param index The index of the step to be set as active
   * @returns void
   */
  async setActiveStep(index) {
    this.resetActiveSteps();
    this.childOptions[index].active = true;
  }
  /**
   * Set the completed step
   *
   * @param index The index of the step to be set as completed
   * @returns void
   */
  async setCompletedStep(index) {
    this.childOptions[index].completed = true;
  }
  /**
   * Returns the active step
   *
   * @returns HTMLBdsStepElement
   */
  async getActiveStep() {
    return this.childOptions.find((step) => step.active === true).index;
  }
  /**
   * Reset all active steps
   *
   * @returns void
   */
  async resetActiveSteps() {
    for (const step of this.childOptions) {
      step.active = false;
    }
  }
  /**
   * Reset all completed steps
   *
   * @returns void
   */
  async resetCompletedSteps() {
    for (const step of this.childOptions) {
      step.completed = false;
    }
  }
  get childOptions() {
    return Array.from(this.el.querySelectorAll('bds-step'));
  }
  renderLine() {
    const line = document.createElement('div');
    line.classList.add('stepper__container__divisor');
    Array.from(this.childOptions).forEach((item, idx) => {
      if (this.childOptions.length - 1 != idx) {
        item.insertAdjacentHTML('afterend', line.outerHTML);
      }
    });
  }
  render() {
    return (h("div", { class: "stepper__container" }, h("slot", null)));
  }
  static get is() { return "bds-stepper"; }
  static get originalStyleUrls() {
    return {
      "$": ["stepper.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["stepper.css"]
    };
  }
  static get methods() {
    return {
      "setActiveStep": {
        "complexType": {
          "signature": "(index: number) => Promise<void>",
          "parameters": [{
              "tags": [{
                  "name": "param",
                  "text": "index The index of the step to be set as active"
                }],
              "text": "The index of the step to be set as active"
            }],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Set the active step",
          "tags": [{
              "name": "param",
              "text": "index The index of the step to be set as active"
            }, {
              "name": "returns",
              "text": "void"
            }]
        }
      },
      "setCompletedStep": {
        "complexType": {
          "signature": "(index: number) => Promise<void>",
          "parameters": [{
              "tags": [{
                  "name": "param",
                  "text": "index The index of the step to be set as completed"
                }],
              "text": "The index of the step to be set as completed"
            }],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Set the completed step",
          "tags": [{
              "name": "param",
              "text": "index The index of the step to be set as completed"
            }, {
              "name": "returns",
              "text": "void"
            }]
        }
      },
      "getActiveStep": {
        "complexType": {
          "signature": "() => Promise<number>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<number>"
        },
        "docs": {
          "text": "Returns the active step",
          "tags": [{
              "name": "returns",
              "text": "HTMLBdsStepElement"
            }]
        }
      },
      "resetActiveSteps": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Reset all active steps",
          "tags": [{
              "name": "returns",
              "text": "void"
            }]
        }
      },
      "resetCompletedSteps": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Reset all completed steps",
          "tags": [{
              "name": "returns",
              "text": "void"
            }]
        }
      }
    };
  }
  static get elementRef() { return "el"; }
}
