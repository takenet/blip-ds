import { Host, h } from "@stencil/core";
import { warnLegacyValue } from "../../utils/deprecation";
const DIRECTIONS = ['row', 'column'];
/**
 * Set of joined uai-button toggles for picking one option, or several with `multiple`. Selected buttons turn solid and
 * expose aria-pressed. Use for a few related options such as views or filters; pair each icon-only button with an
 * aria-label; avoid it for actions that do not keep a selected state (use separate uai-button).
 *
 * @slot - The uai-button elements of the group.
 * @part group - The container that lays the buttons out in a row or a column.
 */
export class UaiButtonGroup {
    constructor() {
        /** Size of every button in the group. Use the same size as the controls around the group. */
        this.size = 'medium';
        /** Layout of the group: 'row' or 'column'. Use 'column' for vertical toolbars. */
        this.direction = 'row';
        /** Color of every button in the group. Use 'content' for neutral toolbars. */
        this.color = 'primary';
        /** Allows several buttons to be selected at once. Use for independent filters; avoid for mutually exclusive views. */
        this.multiple = false;
        /** Indexes of the selected buttons. */
        this.selected = [];
        // One listener on the group: the clicked button is found in the event path, so buttons added later work and a
        // button never gets more than one handler.
        this.onClick = (event) => {
            const buttons = this.buttons();
            const path = typeof event.composedPath === 'function' ? event.composedPath() : [];
            for (let node = event.target; !path.length && node; node = node.parentNode)
                path.push(node);
            const button = path.find((node) => buttons.includes(node));
            if (button)
                this.select(buttons.indexOf(button));
        };
        this.onSlotChange = () => {
            void this.syncButtons();
        };
    }
    /** Selects or unselects the button at `index`, as a click would. Ignored for an index outside the group. */
    async activateButton(index) {
        if (index >= 0 && index < this.buttons().length)
            this.select(index);
    }
    appearanceChanged() {
        void this.syncButtons();
    }
    multipleChanged() {
        // Going back to single selection keeps only the first selected button.
        if (!this.multiple && this.selected.length > 1)
            this.selected = this.selected.slice(0, 1);
        void this.syncButtons();
    }
    componentDidLoad() {
        void this.syncButtons();
    }
    buttons() {
        return Array.from(this.el.querySelectorAll('uai-button'));
    }
    layoutDirection() {
        if (DIRECTIONS.includes(this.direction))
            return this.direction;
        warnLegacyValue('uai-button-group', 'direction', this.direction, 'row');
        return 'row';
    }
    // Applies the group layout and the selection to every button. Buttons that are not hydrated yet are awaited, so
    // a group rendered together with its buttons is set up once they can receive the calls.
    async syncButtons() {
        const buttons = this.buttons();
        const direction = this.layoutDirection();
        this.selected = this.selected.filter((index) => index < buttons.length);
        await Promise.all(buttons.map(async (button, index) => {
            var _a;
            await ((_a = button.componentOnReady) === null || _a === void 0 ? void 0 : _a.call(button));
            if (typeof button.setPosition !== 'function')
                return;
            const active = this.selected.includes(index);
            const last = buttons.length - 1;
            await Promise.all([
                button.setPosition(index === 0 ? 'first' : index === last ? 'last' : 'middle'),
                button.setDirection(direction),
                button.setSize(this.size),
                button.setColor(this.color),
                button.setVariant(active ? 'solid' : 'outline'),
                button.isActive(active),
            ]);
            button.classList.toggle('active', active);
            button.setAttribute('data-index', String(index));
        }));
    }
    select(index) {
        const was = this.selected.includes(index);
        if (this.multiple) {
            this.selected = was ? this.selected.filter((i) => i !== index) : [...this.selected, index].sort((a, b) => a - b);
        }
        else {
            this.selected = was ? [] : [index];
        }
        void this.syncButtons();
        const button = this.buttons()[index];
        this.uaiButtonSelected.emit({ id: (button === null || button === void 0 ? void 0 : button.id) || '', index, active: !was, selected: [...this.selected] });
    }
    render() {
        const direction = DIRECTIONS.includes(this.direction) ? this.direction : 'row';
        return (h(Host, { key: 'ba9836e73573d9182996b5713304d75d1531ec01', role: "group", "aria-label": this.label, onClick: this.onClick }, h("div", { key: '672859bab0915909eed20078ee402eeb6431b6e4', class: { 'button-group': true, [`button-group--${direction}`]: true }, part: "group" }, h("slot", { key: '0b5376e64805f356f9a9ca18c640381e498c556a', onSlotchange: this.onSlotChange }))));
    }
    static get is() { return "uai-button-group"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-button-group.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-button-group.css"]
        };
    }
    static get properties() {
        return {
            "size": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "UaiButtonSize",
                    "resolved": "\"compact\" | \"large\" | \"medium\" | \"short\"",
                    "references": {
                        "UaiButtonSize": {
                            "location": "import",
                            "path": "../uai-button/uai-button",
                            "id": "src/components/uai-button/uai-button.tsx::UaiButtonSize",
                            "referenceLocation": "UaiButtonSize"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Size of every button in the group. Use the same size as the controls around the group."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "size",
                "defaultValue": "'medium'"
            },
            "direction": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "UaiButtonDirection",
                    "resolved": "\"column\" | \"row\"",
                    "references": {
                        "UaiButtonDirection": {
                            "location": "import",
                            "path": "../uai-button/uai-button",
                            "id": "src/components/uai-button/uai-button.tsx::UaiButtonDirection",
                            "referenceLocation": "UaiButtonDirection"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Layout of the group: 'row' or 'column'. Use 'column' for vertical toolbars."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "direction",
                "defaultValue": "'row'"
            },
            "color": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "UaiButtonColor",
                    "resolved": "\"content\" | \"negative\" | \"positive\" | \"primary\"",
                    "references": {
                        "UaiButtonColor": {
                            "location": "import",
                            "path": "../uai-button/uai-button",
                            "id": "src/components/uai-button/uai-button.tsx::UaiButtonColor",
                            "referenceLocation": "UaiButtonColor"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Color of every button in the group. Use 'content' for neutral toolbars."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "color",
                "defaultValue": "'primary'"
            },
            "multiple": {
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
                    "text": "Allows several buttons to be selected at once. Use for independent filters; avoid for mutually exclusive views."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "multiple",
                "defaultValue": "false"
            },
            "label": {
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
                    "text": "Accessible name of the group. Use a short noun phrase that says what the buttons choose, such as \"Visualiza\u00E7\u00E3o\"."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label"
            }
        };
    }
    static get states() {
        return {
            "selected": {}
        };
    }
    static get events() {
        return [{
                "method": "uaiButtonSelected",
                "name": "uaiButtonSelected",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when a button is clicked, with its id and index, whether it is now selected, and every selected index."
                },
                "complexType": {
                    "original": "UaiButtonGroupSelectedDetail",
                    "resolved": "UaiButtonGroupSelectedDetail",
                    "references": {
                        "UaiButtonGroupSelectedDetail": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-button-group/uai-button-group.tsx",
                            "id": "src/components/uai-button-group/uai-button-group.tsx::UaiButtonGroupSelectedDetail"
                        }
                    }
                }
            }];
    }
    static get methods() {
        return {
            "activateButton": {
                "complexType": {
                    "signature": "(index: number) => Promise<void>",
                    "parameters": [{
                            "name": "index",
                            "type": "number",
                            "docs": ""
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
                    "text": "Selects or unselects the button at `index`, as a click would. Ignored for an index outside the group.",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "size",
                "methodName": "appearanceChanged"
            }, {
                "propName": "direction",
                "methodName": "appearanceChanged"
            }, {
                "propName": "color",
                "methodName": "appearanceChanged"
            }, {
                "propName": "multiple",
                "methodName": "multipleChanged"
            }];
    }
}
