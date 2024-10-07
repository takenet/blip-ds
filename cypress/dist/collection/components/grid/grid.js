import { h, Host } from '@stencil/core';
export class Grid {
  constructor() {
    this.height = undefined;
    this.direction = undefined;
    this.justifyContent = undefined;
    this.flexWrap = undefined;
    this.alignItems = undefined;
    this.container = undefined;
    this.containerFluid = undefined;
    this.xxs = undefined;
    this.xs = undefined;
    this.sm = undefined;
    this.md = undefined;
    this.lg = undefined;
    this.xg = undefined;
    this.xxsOffset = undefined;
    this.xsOffset = undefined;
    this.smOffset = undefined;
    this.mdOffset = undefined;
    this.lgOffset = undefined;
    this.xgOffset = undefined;
    this.gap = undefined;
    this.padding = undefined;
    this.margin = undefined;
  }
  render() {
    return (h(Host, { class: {
        host: true,
        [`direction--${this.direction}`]: true,
        [`justify_content--${this.justifyContent}`]: true,
        [`${this.container === true ? 'container' : ''}`]: true,
        [`${this.containerFluid === true ? 'container-fluid' : ''}`]: true,
        [`flex_wrap--${this.flexWrap}`]: true,
        [`align_items--${this.alignItems}`]: true,
        [`xxs--${this.xxs}`]: true,
        [`xs--${this.xs}`]: true,
        [`sm--${this.sm}`]: true,
        [`md--${this.md}`]: true,
        [`lg--${this.lg}`]: true,
        [`xg--${this.xg}`]: true,
        [`gap--${this.gap}`]: true,
        [`xxsoffset--${this.xxsOffset}`]: true,
        [`xsoffset--${this.xsOffset}`]: true,
        [`smoffset--${this.smOffset}`]: true,
        [`mdoffset--${this.mdOffset}`]: true,
        [`lgoffset--${this.lgOffset}`]: true,
        [`xgoffset--${this.xgOffset}`]: true,
        [`padding--${this.padding}`]: true,
        [`margin--${this.margin}`]: true,
      }, style: { height: this.height } }, h("slot", null)));
  }
  static get is() { return "bds-grid"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["grid.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["grid.css"]
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
          "text": ""
        },
        "attribute": "height",
        "reflect": false
      },
      "direction": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "direction",
          "resolved": "\"column\" | \"column-reverse\" | \"row\" | \"row-reverse\"",
          "references": {
            "direction": {
              "location": "import",
              "path": "./grid-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "direction",
        "reflect": false
      },
      "justifyContent": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "justifyContent",
          "resolved": "\"center\" | \"flex-end\" | \"flex-start\" | \"space-around\" | \"space-between\" | \"space-evenly\" | \"stretch\"",
          "references": {
            "justifyContent": {
              "location": "import",
              "path": "./grid-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "justify-content",
        "reflect": false
      },
      "flexWrap": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "flexWrap",
          "resolved": "\"wrap\" | \"wrap-reverse\"",
          "references": {
            "flexWrap": {
              "location": "import",
              "path": "./grid-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "flex-wrap",
        "reflect": false
      },
      "alignItems": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "alignItems",
          "resolved": "\"baseline\" | \"center\" | \"flex-end\" | \"flex-start\" | \"stretch\"",
          "references": {
            "alignItems": {
              "location": "import",
              "path": "./grid-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "align-items",
        "reflect": false
      },
      "container": {
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
          "text": ""
        },
        "attribute": "container",
        "reflect": false
      },
      "containerFluid": {
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
          "text": ""
        },
        "attribute": "container-fluid",
        "reflect": false
      },
      "xxs": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "breakpoint",
          "resolved": "\"1\" | \"10\" | \"11\" | \"12\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"7\" | \"8\" | \"9\" | \"auto\"",
          "references": {
            "breakpoint": {
              "location": "import",
              "path": "./grid-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "xxs",
        "reflect": false
      },
      "xs": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "breakpoint",
          "resolved": "\"1\" | \"10\" | \"11\" | \"12\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"7\" | \"8\" | \"9\" | \"auto\"",
          "references": {
            "breakpoint": {
              "location": "import",
              "path": "./grid-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "xs",
        "reflect": false
      },
      "sm": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "breakpoint",
          "resolved": "\"1\" | \"10\" | \"11\" | \"12\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"7\" | \"8\" | \"9\" | \"auto\"",
          "references": {
            "breakpoint": {
              "location": "import",
              "path": "./grid-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "sm",
        "reflect": false
      },
      "md": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "breakpoint",
          "resolved": "\"1\" | \"10\" | \"11\" | \"12\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"7\" | \"8\" | \"9\" | \"auto\"",
          "references": {
            "breakpoint": {
              "location": "import",
              "path": "./grid-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "md",
        "reflect": false
      },
      "lg": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "breakpoint",
          "resolved": "\"1\" | \"10\" | \"11\" | \"12\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"7\" | \"8\" | \"9\" | \"auto\"",
          "references": {
            "breakpoint": {
              "location": "import",
              "path": "./grid-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "lg",
        "reflect": false
      },
      "xg": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "breakpoint",
          "resolved": "\"1\" | \"10\" | \"11\" | \"12\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"7\" | \"8\" | \"9\" | \"auto\"",
          "references": {
            "breakpoint": {
              "location": "import",
              "path": "./grid-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "xg",
        "reflect": false
      },
      "xxsOffset": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "breakpoint",
          "resolved": "\"1\" | \"10\" | \"11\" | \"12\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"7\" | \"8\" | \"9\" | \"auto\"",
          "references": {
            "breakpoint": {
              "location": "import",
              "path": "./grid-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "xxs-offset",
        "reflect": false
      },
      "xsOffset": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "breakpoint",
          "resolved": "\"1\" | \"10\" | \"11\" | \"12\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"7\" | \"8\" | \"9\" | \"auto\"",
          "references": {
            "breakpoint": {
              "location": "import",
              "path": "./grid-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "xs-offset",
        "reflect": false
      },
      "smOffset": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "breakpoint",
          "resolved": "\"1\" | \"10\" | \"11\" | \"12\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"7\" | \"8\" | \"9\" | \"auto\"",
          "references": {
            "breakpoint": {
              "location": "import",
              "path": "./grid-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "sm-offset",
        "reflect": false
      },
      "mdOffset": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "breakpoint",
          "resolved": "\"1\" | \"10\" | \"11\" | \"12\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"7\" | \"8\" | \"9\" | \"auto\"",
          "references": {
            "breakpoint": {
              "location": "import",
              "path": "./grid-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "md-offset",
        "reflect": false
      },
      "lgOffset": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "breakpoint",
          "resolved": "\"1\" | \"10\" | \"11\" | \"12\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"7\" | \"8\" | \"9\" | \"auto\"",
          "references": {
            "breakpoint": {
              "location": "import",
              "path": "./grid-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "lg-offset",
        "reflect": false
      },
      "xgOffset": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "breakpoint",
          "resolved": "\"1\" | \"10\" | \"11\" | \"12\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"7\" | \"8\" | \"9\" | \"auto\"",
          "references": {
            "breakpoint": {
              "location": "import",
              "path": "./grid-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "xg-offset",
        "reflect": false
      },
      "gap": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "gap",
          "resolved": "\"1\" | \"10\" | \"11\" | \"12\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"7\" | \"8\" | \"9\" | \"half\" | \"none\"",
          "references": {
            "gap": {
              "location": "import",
              "path": "./grid-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "gap",
        "reflect": false
      },
      "padding": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "padding",
          "resolved": "\"none\" | \"half\" | \"1\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"7\" | \"8\" | \"9\" | \"10\" | \"11\" | \"12\" | \"l-none\" | \"l-half\" | \"l-1\" | \"l-2\" | \"l-3\" | \"l-4\" | \"l-5\" | \"l-6\" | \"l-7\" | \"l-8\" | \"l-9\" | \"l-10\" | \"l-11\" | \"l-12\" | \"b-none\" | \"b-half\" | \"b-1\" | \"b-2\" | \"b-3\" | \"b-4\" | \"b-5\" | \"b-6\" | \"b-7\" | \"b-8\" | \"b-9\" | \"b-10\" | \"b-11\" | \"b-12\" | \"r-none\" | \"r-half\" | \"r-1\" | \"r-2\" | \"r-3\" | \"r-4\" | \"r-5\" | \"r-6\" | \"r-7\" | \"r-8\" | \"r-9\" | \"r-10\" | \"r-11\" | \"r-12\" | \"t-none\" | \"t-half\" | \"t-1\" | \"t-2\" | \"t-3\" | \"t-4\" | \"t-5\" | \"t-6\" | \"t-7\" | \"t-8\" | \"t-9\" | \"t-10\" | \"t-11\" | \"t-12\" | \"y-none\" | \"y-half\" | \"y-1\" | \"y-2\" | \"y-3\" | \"y-4\" | \"y-5\" | \"y-6\" | \"y-7\" | \"y-8\" | \"y-9\" | \"y-10\" | \"y-11\" | \"y-12\" | \"x-none\" | \"x-half\" | \"x-1\" | \"x-2\" | \"x-3\" | \"x-4\" | \"x-5\" | \"x-6\" | \"x-7\" | \"x-8\" | \"x-9\" | \"x-10\" | \"x-11\" | \"x-12\"",
          "references": {
            "padding": {
              "location": "import",
              "path": "./grid-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "padding",
        "reflect": false
      },
      "margin": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "margin",
          "resolved": "\"none\" | \"half\" | \"1\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"7\" | \"8\" | \"9\" | \"10\" | \"11\" | \"12\" | \"l-none\" | \"l-half\" | \"l-1\" | \"l-2\" | \"l-3\" | \"l-4\" | \"l-5\" | \"l-6\" | \"l-7\" | \"l-8\" | \"l-9\" | \"l-10\" | \"l-11\" | \"l-12\" | \"b-none\" | \"b-half\" | \"b-1\" | \"b-2\" | \"b-3\" | \"b-4\" | \"b-5\" | \"b-6\" | \"b-7\" | \"b-8\" | \"b-9\" | \"b-10\" | \"b-11\" | \"r-none\" | \"r-half\" | \"r-1\" | \"r-2\" | \"r-3\" | \"r-4\" | \"r-5\" | \"r-6\" | \"r-7\" | \"r-8\" | \"r-9\" | \"r-10\" | \"r-11\" | \"r-12\" | \"t-none\" | \"t-half\" | \"t-1\" | \"t-2\" | \"t-3\" | \"t-4\" | \"t-5\" | \"t-6\" | \"t-7\" | \"t-8\" | \"t-9\" | \"t-10\" | \"t-11\" | \"t-12\" | \"y-none\" | \"y-half\" | \"y-1\" | \"y-2\" | \"y-3\" | \"y-4\" | \"y-5\" | \"y-6\" | \"y-7\" | \"y-8\" | \"y-9\" | \"y-10\" | \"y-11\" | \"y-12\" | \"x-none\" | \"x-half\" | \"x-1\" | \"x-2\" | \"x-3\" | \"x-4\" | \"x-5\" | \"x-6\" | \"x-7\" | \"x-8\" | \"x-9\" | \"x-10\" | \"x-11\" | \"x-12\"",
          "references": {
            "margin": {
              "location": "import",
              "path": "./grid-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "margin",
        "reflect": false
      }
    };
  }
}
