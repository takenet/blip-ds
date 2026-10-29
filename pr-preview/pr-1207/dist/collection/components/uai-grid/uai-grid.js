import { h, Host } from "@stencil/core";
/**
 * UAI layout grid. The legacy bds-grid remains available; this component keeps
 * its layout props while using UAI dimensions and theme-aware color tokens.
 *
 * @slot - Grid items, including nested uai-grid elements.
 */
export class UaiGrid {
    render() {
        const classes = { host: true };
        const addValueClass = (prefix, value) => {
            if (value)
                classes[`${prefix}${value}`] = true;
        };
        const addValueClasses = (prefix, values) => {
            values === null || values === void 0 ? void 0 : values.split(/\s+/).forEach((value) => addValueClass(prefix, value));
        };
        addValueClass('direction--', this.direction);
        addValueClass('justify_content--', this.justifyContent);
        addValueClass('flex_wrap--', this.flexWrap);
        addValueClass('align_items--', this.alignItems);
        addValueClass('xxs--', this.xxs);
        addValueClass('xs--', this.xs);
        addValueClass('sm--', this.sm);
        addValueClass('md--', this.md);
        addValueClass('lg--', this.lg);
        addValueClass('xg--', this.xg);
        addValueClass('xxsoffset--', this.xxsOffset);
        addValueClass('xsoffset--', this.xsOffset);
        addValueClass('smoffset--', this.smOffset);
        addValueClass('mdoffset--', this.mdOffset);
        addValueClass('lgoffset--', this.lgOffset);
        addValueClass('xgoffset--', this.xgOffset);
        addValueClass('gap--', this.gap);
        addValueClasses('padding--', this.padding);
        addValueClasses('margin--', this.margin);
        if (this.container)
            classes.container = true;
        if (this.containerFluid)
            classes['container-fluid'] = true;
        if (this.bgColor)
            classes[`bg-color--${this.bgColor.slice(1)}`] = true;
        return (h(Host, { key: '1c377a92d328fe6f9878306807af08684ca4a0d1', class: classes, style: { height: this.height } }, h("slot", { key: '6a38a65dd05bc0ff93879847b678871dfc18bf16' })));
    }
    static get is() { return "uai-grid"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-grid.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-grid.css"]
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
                    "text": "Sets an explicit height on the grid container."
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
                            "path": "../grid/grid-interface",
                            "id": "src/components/grid/grid-interface.ts::direction",
                            "referenceLocation": "direction"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Controls the flex direction of children."
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
                            "path": "../grid/grid-interface",
                            "id": "src/components/grid/grid-interface.ts::justifyContent",
                            "referenceLocation": "justifyContent"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Controls how children are distributed along the main axis."
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
                            "path": "../grid/grid-interface",
                            "id": "src/components/grid/grid-interface.ts::flexWrap",
                            "referenceLocation": "flexWrap"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Controls whether children wrap to another line."
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
                            "path": "../grid/grid-interface",
                            "id": "src/components/grid/grid-interface.ts::alignItems",
                            "referenceLocation": "alignItems"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Controls the alignment of children along the cross axis."
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
                    "text": "Applies a centered container capped by the UAI width-content token."
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
                    "text": "Applies the wider responsive fluid-container max widths compatible with bds-grid."
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
                            "path": "../grid/grid-interface",
                            "id": "src/components/grid/grid-interface.ts::breakpoint",
                            "referenceLocation": "breakpoint"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Base 12-column span."
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
                            "path": "../grid/grid-interface",
                            "id": "src/components/grid/grid-interface.ts::breakpoint",
                            "referenceLocation": "breakpoint"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "12-column span from the legacy xs breakpoint."
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
                            "path": "../grid/grid-interface",
                            "id": "src/components/grid/grid-interface.ts::breakpoint",
                            "referenceLocation": "breakpoint"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "12-column span from the legacy sm breakpoint."
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
                            "path": "../grid/grid-interface",
                            "id": "src/components/grid/grid-interface.ts::breakpoint",
                            "referenceLocation": "breakpoint"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "12-column span from the legacy md breakpoint."
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
                            "path": "../grid/grid-interface",
                            "id": "src/components/grid/grid-interface.ts::breakpoint",
                            "referenceLocation": "breakpoint"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "12-column span from the legacy lg breakpoint."
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
                            "path": "../grid/grid-interface",
                            "id": "src/components/grid/grid-interface.ts::breakpoint",
                            "referenceLocation": "breakpoint"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "12-column span from the legacy xg breakpoint."
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
                            "path": "../grid/grid-interface",
                            "id": "src/components/grid/grid-interface.ts::breakpoint",
                            "referenceLocation": "breakpoint"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Base left offset in the 12-column grid."
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
                            "path": "../grid/grid-interface",
                            "id": "src/components/grid/grid-interface.ts::breakpoint",
                            "referenceLocation": "breakpoint"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Left offset from the legacy xs breakpoint."
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
                            "path": "../grid/grid-interface",
                            "id": "src/components/grid/grid-interface.ts::breakpoint",
                            "referenceLocation": "breakpoint"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Left offset from the legacy sm breakpoint."
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
                            "path": "../grid/grid-interface",
                            "id": "src/components/grid/grid-interface.ts::breakpoint",
                            "referenceLocation": "breakpoint"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Left offset from the legacy md breakpoint."
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
                            "path": "../grid/grid-interface",
                            "id": "src/components/grid/grid-interface.ts::breakpoint",
                            "referenceLocation": "breakpoint"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Left offset from the legacy lg breakpoint."
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
                            "path": "../grid/grid-interface",
                            "id": "src/components/grid/grid-interface.ts::breakpoint",
                            "referenceLocation": "breakpoint"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Left offset from the legacy xg breakpoint."
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
                            "path": "../grid/grid-interface",
                            "id": "src/components/grid/grid-interface.ts::gap",
                            "referenceLocation": "gap"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Gap token alias retained for compatibility with bds-grid."
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
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Padding token aliases retained for compatibility with bds-grid. Accepts one value or a\nspace-separated list, for example `\"t-2 x-3\"`. Values: `none`, `half`, `1` to `12`, optionally\nprefixed by a side (`l-`, `r-`, `t-`, `b-`) or an axis (`x-`, `y-`). When values overlap, the more\nspecific one wins: single side over axis, axis over all sides."
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
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Margin token aliases retained for compatibility with bds-grid. Accepts one value or a\nspace-separated list, for example `\"t-2 x-auto\"`. Takes the same values as `padding`, plus `auto`.\nWhen values overlap, the more specific one wins: single side over axis, axis over all sides."
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
                            "path": "../grid/color-grid-interface",
                            "id": "src/components/grid/color-grid-interface.ts::Color",
                            "referenceLocation": "Color"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Legacy color name mapped to the closest semantic UAI background token.\nPrefer surface tokens in new UAI usage."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "bg-color"
            }
        };
    }
}
