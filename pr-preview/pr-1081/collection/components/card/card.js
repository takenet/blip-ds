import { Host, h } from '@stencil/core';
export class Card {
  constructor() {
    this.height = null;
    this.width = 'fit-content';
    this.clickable = false;
    this.bgColor = 'surface-1';
    this.selectable = false;
    this.borderColor = null;
    this.dataTest = null;
    this.isHovered = false;
    this.isPressed = false;
    this.elevation = 'primary';
  }
  componentDidLoad() {
    this.cardElement = this.element.shadowRoot.querySelector('.card');
    if (this.cardElement && (this.clickable === true || this.selectable === true)) {
      this.cardElement.addEventListener('mouseenter', () => {
        this.isHovered = true;
      });
      this.cardElement.addEventListener('mouseleave', () => {
        this.isHovered = false;
      });
      this.cardElement.addEventListener('mousedown', () => {
        this.isPressed = true;
        this.bdsClick.emit();
      });
      document.addEventListener('mouseup', () => {
        this.isPressed = false;
      });
      this.cardElement.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          this.isPressed = true;
          this.bdsClick.emit();
        }
      });
      this.cardElement.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
          this.isPressed = false;
        }
      });
    }
  }
  componentDidUpdate() {
    if (this.isPressed) {
      this.elevation = 'static';
    }
    else if (this.isHovered) {
      this.elevation = 'secondary';
    }
  }
  handleKeyDown(event) {
    if (event.key == 'Enter') {
      this.isPressed = true;
      this.bdsClick.emit(event);
    }
  }
  render() {
    const styleHost = {
      width: this.width,
    };
    return (h(Host, { style: styleHost }, h("bds-paper", { border: this.clickable ? false : true, elevation: this.elevation, class: {
        card: true,
        card_hover: this.clickable,
        card_hover_selectable: this.isHovered && this.selectable ? true : false,
        card_hover_pressed: this.isHovered && this.selectable ? true : false
      }, height: this.height, width: this.width, bgColor: this.bgColor, "data-test": this.dataTest, "border-color": this.borderColor ? this.borderColor : 'border-1' }, h("div", { tabindex: "0", class: "focus", onKeyDown: this.handleKeyDown.bind(this) }), h("bds-grid", { xxs: "12", direction: "column", gap: "2", padding: "2" }, h("slot", null)))));
  }
  static get is() { return "bds-card"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["card.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["card.css"]
    };
  }
  static get properties() {
    return {
      "height": {
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
          "text": "Prop for set the height of the component."
        },
        "attribute": "height",
        "reflect": false,
        "defaultValue": "null"
      },
      "width": {
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
          "text": "Prop for set the width of the component."
        },
        "attribute": "width",
        "reflect": false,
        "defaultValue": "'fit-content'"
      },
      "clickable": {
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
          "text": "If the prop is true, the component will be clickable."
        },
        "attribute": "clickable",
        "reflect": false,
        "defaultValue": "false"
      },
      "bgColor": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "PaperBackground",
          "resolved": "\"surface-0\" | \"surface-1\" | \"surface-2\" | \"surface-3\" | \"surface-4\"",
          "references": {
            "PaperBackground": {
              "location": "import",
              "path": "../paper/paper-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Prop for set the background color."
        },
        "attribute": "bg-color",
        "reflect": false,
        "defaultValue": "'surface-1'"
      },
      "selectable": {
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
          "text": "Prop for set the background color."
        },
        "attribute": "selectable",
        "reflect": false,
        "defaultValue": "false"
      },
      "borderColor": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "BorderColor",
          "resolved": "\"border-1\" | \"border-2\" | \"delete\" | \"error\" | \"negative\" | \"positive\" | \"primary\" | \"secondary\" | \"success\" | \"warning\"",
          "references": {
            "BorderColor": {
              "location": "import",
              "path": "../paper/paper-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Prop for set the border color."
        },
        "attribute": "border-color",
        "reflect": false,
        "defaultValue": "null"
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
      "isHovered": {},
      "isPressed": {},
      "elevation": {}
    };
  }
  static get events() {
    return [{
        "method": "bdsClick",
        "name": "bdsClick",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "This event will be dispatch when click on the component."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "element"; }
}
