import { h, Host } from "@stencil/core";
export class Grid {
    render() {
        return (h(Host, { key: 'f6e365d02bef556426479c724c0a9f862eccb5f2', class: {
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
            }, style: { height: this.height } }, h("slot", { key: '326468c944d6bb073de1fd57a5c137d206d89f74' })));
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
                "attribute": "height",
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
                "reflect": false
            },
            "direction": {
                "type": "string",
                "attribute": "direction",
                "mutable": false,
                "complexType": {
                    "original": "direction",
                    "resolved": "\"column\" | \"column-reverse\" | \"row\" | \"row-reverse\"",
                    "references": {
                        "direction": {
                            "location": "import",
                            "path": "./grid-interface",
                            "id": "src/components/grid/grid-interface.ts::direction"
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
                "reflect": false
            },
            "justifyContent": {
                "type": "string",
                "attribute": "justify-content",
                "mutable": false,
                "complexType": {
                    "original": "justifyContent",
                    "resolved": "\"center\" | \"flex-end\" | \"flex-start\" | \"space-around\" | \"space-between\" | \"space-evenly\" | \"stretch\"",
                    "references": {
                        "justifyContent": {
                            "location": "import",
                            "path": "./grid-interface",
                            "id": "src/components/grid/grid-interface.ts::justifyContent"
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
                "reflect": false
            },
            "flexWrap": {
                "type": "string",
                "attribute": "flex-wrap",
                "mutable": false,
                "complexType": {
                    "original": "flexWrap",
                    "resolved": "\"wrap\" | \"wrap-reverse\"",
                    "references": {
                        "flexWrap": {
                            "location": "import",
                            "path": "./grid-interface",
                            "id": "src/components/grid/grid-interface.ts::flexWrap"
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
                "reflect": false
            },
            "alignItems": {
                "type": "string",
                "attribute": "align-items",
                "mutable": false,
                "complexType": {
                    "original": "alignItems",
                    "resolved": "\"baseline\" | \"center\" | \"flex-end\" | \"flex-start\" | \"stretch\"",
                    "references": {
                        "alignItems": {
                            "location": "import",
                            "path": "./grid-interface",
                            "id": "src/components/grid/grid-interface.ts::alignItems"
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
                "reflect": false
            },
            "container": {
                "type": "boolean",
                "attribute": "container",
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
                "reflect": false
            },
            "containerFluid": {
                "type": "boolean",
                "attribute": "container-fluid",
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
                "reflect": false
            },
            "xxs": {
                "type": "string",
                "attribute": "xxs",
                "mutable": false,
                "complexType": {
                    "original": "breakpoint",
                    "resolved": "\"1\" | \"10\" | \"11\" | \"12\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"7\" | \"8\" | \"9\" | \"auto\"",
                    "references": {
                        "breakpoint": {
                            "location": "import",
                            "path": "./grid-interface",
                            "id": "src/components/grid/grid-interface.ts::breakpoint"
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
                "reflect": false
            },
            "xs": {
                "type": "string",
                "attribute": "xs",
                "mutable": false,
                "complexType": {
                    "original": "breakpoint",
                    "resolved": "\"1\" | \"10\" | \"11\" | \"12\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"7\" | \"8\" | \"9\" | \"auto\"",
                    "references": {
                        "breakpoint": {
                            "location": "import",
                            "path": "./grid-interface",
                            "id": "src/components/grid/grid-interface.ts::breakpoint"
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
                "reflect": false
            },
            "sm": {
                "type": "string",
                "attribute": "sm",
                "mutable": false,
                "complexType": {
                    "original": "breakpoint",
                    "resolved": "\"1\" | \"10\" | \"11\" | \"12\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"7\" | \"8\" | \"9\" | \"auto\"",
                    "references": {
                        "breakpoint": {
                            "location": "import",
                            "path": "./grid-interface",
                            "id": "src/components/grid/grid-interface.ts::breakpoint"
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
                "reflect": false
            },
            "md": {
                "type": "string",
                "attribute": "md",
                "mutable": false,
                "complexType": {
                    "original": "breakpoint",
                    "resolved": "\"1\" | \"10\" | \"11\" | \"12\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"7\" | \"8\" | \"9\" | \"auto\"",
                    "references": {
                        "breakpoint": {
                            "location": "import",
                            "path": "./grid-interface",
                            "id": "src/components/grid/grid-interface.ts::breakpoint"
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
                "reflect": false
            },
            "lg": {
                "type": "string",
                "attribute": "lg",
                "mutable": false,
                "complexType": {
                    "original": "breakpoint",
                    "resolved": "\"1\" | \"10\" | \"11\" | \"12\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"7\" | \"8\" | \"9\" | \"auto\"",
                    "references": {
                        "breakpoint": {
                            "location": "import",
                            "path": "./grid-interface",
                            "id": "src/components/grid/grid-interface.ts::breakpoint"
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
                "reflect": false
            },
            "xg": {
                "type": "string",
                "attribute": "xg",
                "mutable": false,
                "complexType": {
                    "original": "breakpoint",
                    "resolved": "\"1\" | \"10\" | \"11\" | \"12\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"7\" | \"8\" | \"9\" | \"auto\"",
                    "references": {
                        "breakpoint": {
                            "location": "import",
                            "path": "./grid-interface",
                            "id": "src/components/grid/grid-interface.ts::breakpoint"
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
                "reflect": false
            },
            "xxsOffset": {
                "type": "string",
                "attribute": "xxs-offset",
                "mutable": false,
                "complexType": {
                    "original": "breakpoint",
                    "resolved": "\"1\" | \"10\" | \"11\" | \"12\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"7\" | \"8\" | \"9\" | \"auto\"",
                    "references": {
                        "breakpoint": {
                            "location": "import",
                            "path": "./grid-interface",
                            "id": "src/components/grid/grid-interface.ts::breakpoint"
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
                "reflect": false
            },
            "xsOffset": {
                "type": "string",
                "attribute": "xs-offset",
                "mutable": false,
                "complexType": {
                    "original": "breakpoint",
                    "resolved": "\"1\" | \"10\" | \"11\" | \"12\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"7\" | \"8\" | \"9\" | \"auto\"",
                    "references": {
                        "breakpoint": {
                            "location": "import",
                            "path": "./grid-interface",
                            "id": "src/components/grid/grid-interface.ts::breakpoint"
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
                "reflect": false
            },
            "smOffset": {
                "type": "string",
                "attribute": "sm-offset",
                "mutable": false,
                "complexType": {
                    "original": "breakpoint",
                    "resolved": "\"1\" | \"10\" | \"11\" | \"12\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"7\" | \"8\" | \"9\" | \"auto\"",
                    "references": {
                        "breakpoint": {
                            "location": "import",
                            "path": "./grid-interface",
                            "id": "src/components/grid/grid-interface.ts::breakpoint"
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
                "reflect": false
            },
            "mdOffset": {
                "type": "string",
                "attribute": "md-offset",
                "mutable": false,
                "complexType": {
                    "original": "breakpoint",
                    "resolved": "\"1\" | \"10\" | \"11\" | \"12\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"7\" | \"8\" | \"9\" | \"auto\"",
                    "references": {
                        "breakpoint": {
                            "location": "import",
                            "path": "./grid-interface",
                            "id": "src/components/grid/grid-interface.ts::breakpoint"
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
                "reflect": false
            },
            "lgOffset": {
                "type": "string",
                "attribute": "lg-offset",
                "mutable": false,
                "complexType": {
                    "original": "breakpoint",
                    "resolved": "\"1\" | \"10\" | \"11\" | \"12\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"7\" | \"8\" | \"9\" | \"auto\"",
                    "references": {
                        "breakpoint": {
                            "location": "import",
                            "path": "./grid-interface",
                            "id": "src/components/grid/grid-interface.ts::breakpoint"
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
                "reflect": false
            },
            "xgOffset": {
                "type": "string",
                "attribute": "xg-offset",
                "mutable": false,
                "complexType": {
                    "original": "breakpoint",
                    "resolved": "\"1\" | \"10\" | \"11\" | \"12\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"7\" | \"8\" | \"9\" | \"auto\"",
                    "references": {
                        "breakpoint": {
                            "location": "import",
                            "path": "./grid-interface",
                            "id": "src/components/grid/grid-interface.ts::breakpoint"
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
                "reflect": false
            },
            "gap": {
                "type": "string",
                "attribute": "gap",
                "mutable": false,
                "complexType": {
                    "original": "gap",
                    "resolved": "\"1\" | \"10\" | \"11\" | \"12\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"7\" | \"8\" | \"9\" | \"half\" | \"none\"",
                    "references": {
                        "gap": {
                            "location": "import",
                            "path": "./grid-interface",
                            "id": "src/components/grid/grid-interface.ts::gap"
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
                "reflect": false
            },
            "padding": {
                "type": "string",
                "attribute": "padding",
                "mutable": false,
                "complexType": {
                    "original": "padding",
                    "resolved": "\"none\" | \"half\" | \"1\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"7\" | \"8\" | \"9\" | \"10\" | \"11\" | \"12\" | \"l-none\" | \"l-half\" | \"l-1\" | \"l-2\" | \"l-3\" | \"l-4\" | \"l-5\" | \"l-6\" | \"l-7\" | \"l-8\" | \"l-9\" | \"l-10\" | \"l-11\" | \"l-12\" | \"b-none\" | \"b-half\" | \"b-1\" | \"b-2\" | \"b-3\" | \"b-4\" | \"b-5\" | \"b-6\" | \"b-7\" | \"b-8\" | \"b-9\" | \"b-10\" | \"b-11\" | \"b-12\" | \"r-none\" | \"r-half\" | \"r-1\" | \"r-2\" | \"r-3\" | \"r-4\" | \"r-5\" | \"r-6\" | \"r-7\" | \"r-8\" | \"r-9\" | \"r-10\" | \"r-11\" | \"r-12\" | \"t-none\" | \"t-half\" | \"t-1\" | \"t-2\" | \"t-3\" | \"t-4\" | \"t-5\" | \"t-6\" | \"t-7\" | \"t-8\" | \"t-9\" | \"t-10\" | \"t-11\" | \"t-12\" | \"y-none\" | \"y-half\" | \"y-1\" | \"y-2\" | \"y-3\" | \"y-4\" | \"y-5\" | \"y-6\" | \"y-7\" | \"y-8\" | \"y-9\" | \"y-10\" | \"y-11\" | \"y-12\" | \"x-none\" | \"x-half\" | \"x-1\" | \"x-2\" | \"x-3\" | \"x-4\" | \"x-5\" | \"x-6\" | \"x-7\" | \"x-8\" | \"x-9\" | \"x-10\" | \"x-11\" | \"x-12\"",
                    "references": {
                        "padding": {
                            "location": "import",
                            "path": "./grid-interface",
                            "id": "src/components/grid/grid-interface.ts::padding"
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
                "reflect": false
            },
            "margin": {
                "type": "string",
                "attribute": "margin",
                "mutable": false,
                "complexType": {
                    "original": "margin",
                    "resolved": "\"none\" | \"half\" | \"1\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"7\" | \"8\" | \"9\" | \"10\" | \"11\" | \"12\" | \"l-none\" | \"l-half\" | \"l-1\" | \"l-2\" | \"l-3\" | \"l-4\" | \"l-5\" | \"l-6\" | \"l-7\" | \"l-8\" | \"l-9\" | \"l-10\" | \"l-11\" | \"l-12\" | \"b-none\" | \"b-half\" | \"b-1\" | \"b-2\" | \"b-3\" | \"b-4\" | \"b-5\" | \"b-6\" | \"b-7\" | \"b-8\" | \"b-9\" | \"b-10\" | \"b-11\" | \"r-none\" | \"r-half\" | \"r-1\" | \"r-2\" | \"r-3\" | \"r-4\" | \"r-5\" | \"r-6\" | \"r-7\" | \"r-8\" | \"r-9\" | \"r-10\" | \"r-11\" | \"r-12\" | \"t-none\" | \"t-half\" | \"t-1\" | \"t-2\" | \"t-3\" | \"t-4\" | \"t-5\" | \"t-6\" | \"t-7\" | \"t-8\" | \"t-9\" | \"t-10\" | \"t-11\" | \"t-12\" | \"y-none\" | \"y-half\" | \"y-1\" | \"y-2\" | \"y-3\" | \"y-4\" | \"y-5\" | \"y-6\" | \"y-7\" | \"y-8\" | \"y-9\" | \"y-10\" | \"y-11\" | \"y-12\" | \"x-none\" | \"x-half\" | \"x-1\" | \"x-2\" | \"x-3\" | \"x-4\" | \"x-5\" | \"x-6\" | \"x-7\" | \"x-8\" | \"x-9\" | \"x-10\" | \"x-11\" | \"x-12\"",
                    "references": {
                        "margin": {
                            "location": "import",
                            "path": "./grid-interface",
                            "id": "src/components/grid/grid-interface.ts::margin"
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
                "reflect": false
            },
            "bgColor": {
                "type": "string",
                "attribute": "bg-color",
                "mutable": false,
                "complexType": {
                    "original": "Color",
                    "resolved": "\"$color-brand\" | \"$color-primary\" | \"$color-secondary\" | \"$color-surface-0\" | \"$color-surface-1\" | \"$color-surface-2\" | \"$color-surface-3\" | \"$color-surface-4\" | \"$color-surface-positive\" | \"$color-surface-negative\" | \"$color-surface-primary\" | \"$color-content-default\" | \"$color-content-disable\" | \"$color-content-ghost\" | \"$color-content-bright\" | \"$color-content-din\" | \"$color-border-1\" | \"$color-border-2\" | \"$color-border-3\" | \"$color-info\" | \"$color-system\" | \"$color-focus\" | \"$color-success\" | \"$color-warning\" | \"$color-error\" | \"$color-delete\" | \"$color-shadow-0\" | \"$color-shadow-1\" | \"$color-hover\" | \"$color-pressed\" | \"$color-positive\" | \"$color-negative\"",
                    "references": {
                        "Color": {
                            "location": "import",
                            "path": "./color-grid-interface",
                            "id": "src/components/grid/color-grid-interface.ts::Color"
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
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=grid.js.map
