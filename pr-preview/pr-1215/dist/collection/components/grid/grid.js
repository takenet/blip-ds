import { h, Host } from "@stencil/core";
export class Grid {
    render() {
        return (h(Host, { key: 'c6834a598fc5689af287c8f0e3c7cf0e41dac3fe', class: {
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
                [this.bgColor || '']: true,
            }, style: { height: this.height } }, h("slot", { key: '8b71a287254dc0e4bdeb39e0dc34ad26fe31e31a' })));
    }
    static get is() { return "bds-grid"; }
    static get encapsulation() { return "shadow"; }
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "height"
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
                            "path": "./grid-interface",
                            "id": "src/components/grid/grid-interface.ts::direction",
                            "referenceLocation": "direction"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "direction"
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
                            "path": "./grid-interface",
                            "id": "src/components/grid/grid-interface.ts::justifyContent",
                            "referenceLocation": "justifyContent"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "justify-content"
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
                            "path": "./grid-interface",
                            "id": "src/components/grid/grid-interface.ts::flexWrap",
                            "referenceLocation": "flexWrap"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "flex-wrap"
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
                            "path": "./grid-interface",
                            "id": "src/components/grid/grid-interface.ts::alignItems",
                            "referenceLocation": "alignItems"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "align-items"
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "container"
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "container-fluid"
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
                            "path": "./grid-interface",
                            "id": "src/components/grid/grid-interface.ts::breakpoint",
                            "referenceLocation": "breakpoint"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "xxs"
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
                            "path": "./grid-interface",
                            "id": "src/components/grid/grid-interface.ts::breakpoint",
                            "referenceLocation": "breakpoint"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "xs"
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
                            "path": "./grid-interface",
                            "id": "src/components/grid/grid-interface.ts::breakpoint",
                            "referenceLocation": "breakpoint"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "sm"
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
                            "path": "./grid-interface",
                            "id": "src/components/grid/grid-interface.ts::breakpoint",
                            "referenceLocation": "breakpoint"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "md"
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
                            "path": "./grid-interface",
                            "id": "src/components/grid/grid-interface.ts::breakpoint",
                            "referenceLocation": "breakpoint"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "lg"
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
                            "path": "./grid-interface",
                            "id": "src/components/grid/grid-interface.ts::breakpoint",
                            "referenceLocation": "breakpoint"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "xg"
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
                            "path": "./grid-interface",
                            "id": "src/components/grid/grid-interface.ts::breakpoint",
                            "referenceLocation": "breakpoint"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "xxs-offset"
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
                            "path": "./grid-interface",
                            "id": "src/components/grid/grid-interface.ts::breakpoint",
                            "referenceLocation": "breakpoint"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "xs-offset"
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
                            "path": "./grid-interface",
                            "id": "src/components/grid/grid-interface.ts::breakpoint",
                            "referenceLocation": "breakpoint"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "sm-offset"
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
                            "path": "./grid-interface",
                            "id": "src/components/grid/grid-interface.ts::breakpoint",
                            "referenceLocation": "breakpoint"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "md-offset"
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
                            "path": "./grid-interface",
                            "id": "src/components/grid/grid-interface.ts::breakpoint",
                            "referenceLocation": "breakpoint"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "lg-offset"
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
                            "path": "./grid-interface",
                            "id": "src/components/grid/grid-interface.ts::breakpoint",
                            "referenceLocation": "breakpoint"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "xg-offset"
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
                            "path": "./grid-interface",
                            "id": "src/components/grid/grid-interface.ts::gap",
                            "referenceLocation": "gap"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "gap"
            },
            "padding": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "padding",
                    "resolved": "\"1\" | \"10\" | \"11\" | \"12\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"7\" | \"8\" | \"9\" | \"b-1\" | \"b-10\" | \"b-11\" | \"b-12\" | \"b-2\" | \"b-3\" | \"b-4\" | \"b-5\" | \"b-6\" | \"b-7\" | \"b-8\" | \"b-9\" | \"b-half\" | \"b-none\" | \"half\" | \"l-1\" | \"l-10\" | \"l-11\" | \"l-12\" | \"l-2\" | \"l-3\" | \"l-4\" | \"l-5\" | \"l-6\" | \"l-7\" | \"l-8\" | \"l-9\" | \"l-half\" | \"l-none\" | \"none\" | \"r-1\" | \"r-10\" | \"r-11\" | \"r-12\" | \"r-2\" | \"r-3\" | \"r-4\" | \"r-5\" | \"r-6\" | \"r-7\" | \"r-8\" | \"r-9\" | \"r-half\" | \"r-none\" | \"t-1\" | \"t-10\" | \"t-11\" | \"t-12\" | \"t-2\" | \"t-3\" | \"t-4\" | \"t-5\" | \"t-6\" | \"t-7\" | \"t-8\" | \"t-9\" | \"t-half\" | \"t-none\" | \"x-1\" | \"x-10\" | \"x-11\" | \"x-12\" | \"x-2\" | \"x-3\" | \"x-4\" | \"x-5\" | \"x-6\" | \"x-7\" | \"x-8\" | \"x-9\" | \"x-half\" | \"x-none\" | \"y-1\" | \"y-10\" | \"y-11\" | \"y-12\" | \"y-2\" | \"y-3\" | \"y-4\" | \"y-5\" | \"y-6\" | \"y-7\" | \"y-8\" | \"y-9\" | \"y-half\" | \"y-none\"",
                    "references": {
                        "padding": {
                            "location": "import",
                            "path": "./grid-interface",
                            "id": "src/components/grid/grid-interface.ts::padding",
                            "referenceLocation": "padding"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "padding"
            },
            "margin": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "margin",
                    "resolved": "\"1\" | \"10\" | \"11\" | \"12\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"7\" | \"8\" | \"9\" | \"b-1\" | \"b-10\" | \"b-11\" | \"b-2\" | \"b-3\" | \"b-4\" | \"b-5\" | \"b-6\" | \"b-7\" | \"b-8\" | \"b-9\" | \"b-half\" | \"b-none\" | \"half\" | \"l-1\" | \"l-10\" | \"l-11\" | \"l-12\" | \"l-2\" | \"l-3\" | \"l-4\" | \"l-5\" | \"l-6\" | \"l-7\" | \"l-8\" | \"l-9\" | \"l-half\" | \"l-none\" | \"none\" | \"r-1\" | \"r-10\" | \"r-11\" | \"r-12\" | \"r-2\" | \"r-3\" | \"r-4\" | \"r-5\" | \"r-6\" | \"r-7\" | \"r-8\" | \"r-9\" | \"r-half\" | \"r-none\" | \"t-1\" | \"t-10\" | \"t-11\" | \"t-12\" | \"t-2\" | \"t-3\" | \"t-4\" | \"t-5\" | \"t-6\" | \"t-7\" | \"t-8\" | \"t-9\" | \"t-half\" | \"t-none\" | \"x-1\" | \"x-10\" | \"x-11\" | \"x-12\" | \"x-2\" | \"x-3\" | \"x-4\" | \"x-5\" | \"x-6\" | \"x-7\" | \"x-8\" | \"x-9\" | \"x-half\" | \"x-none\" | \"y-1\" | \"y-10\" | \"y-11\" | \"y-12\" | \"y-2\" | \"y-3\" | \"y-4\" | \"y-5\" | \"y-6\" | \"y-7\" | \"y-8\" | \"y-9\" | \"y-half\" | \"y-none\"",
                    "references": {
                        "margin": {
                            "location": "import",
                            "path": "./grid-interface",
                            "id": "src/components/grid/grid-interface.ts::margin",
                            "referenceLocation": "margin"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "margin"
            },
            "bgColor": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "Color",
                    "resolved": "\"$color-border-1\" | \"$color-border-2\" | \"$color-border-3\" | \"$color-brand\" | \"$color-content-bright\" | \"$color-content-default\" | \"$color-content-din\" | \"$color-content-disable\" | \"$color-content-ghost\" | \"$color-delete\" | \"$color-error\" | \"$color-focus\" | \"$color-hover\" | \"$color-info\" | \"$color-negative\" | \"$color-positive\" | \"$color-pressed\" | \"$color-primary\" | \"$color-secondary\" | \"$color-shadow-0\" | \"$color-shadow-1\" | \"$color-success\" | \"$color-surface-0\" | \"$color-surface-1\" | \"$color-surface-2\" | \"$color-surface-3\" | \"$color-surface-4\" | \"$color-surface-negative\" | \"$color-surface-positive\" | \"$color-surface-primary\" | \"$color-system\" | \"$color-warning\"",
                    "references": {
                        "Color": {
                            "location": "import",
                            "path": "./color-grid-interface",
                            "id": "src/components/grid/color-grid-interface.ts::Color",
                            "referenceLocation": "Color"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "bg-color"
            }
        };
    }
}
