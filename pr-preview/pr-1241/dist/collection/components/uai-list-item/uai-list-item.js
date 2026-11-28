import { Host, h } from "@stencil/core";
/** Chips longer than this are cut with "..." and show the full text in a tooltip, as in bds-list-item. */
const CHIP_LIMIT = 30;
const CONTROL_TYPES = ['checkbox', 'radio', 'switch'];
const parseList = (value, current) => {
    if (!value)
        return [];
    if (typeof value !== 'string')
        return value;
    // Keep the current list if AngularJS has not interpolated the attribute yet; the watcher reloads it.
    try {
        return JSON.parse(value);
    }
    catch (_a) {
        return current;
    }
};
/**
 * One row of a uai-list: text with optional avatar or icon, chips, action buttons and a checkbox, radio or
 * switch. Use inside uai-list; pair with typeList for selection; avoid nesting other interactive rows.
 *
 * Interactive rows (clickable or with a control) are focusable and expose the checkbox, radio, switch or button
 * role; Enter and Space do the same as a click.
 *
 * @slot - Content placed before the text, after the avatar or icon.
 * @slot content-area - Content placed next to the chips; it grows to fill the row.
 * @slot action-area - Content placed with the action buttons on the right. Hidden when typeList is a control.
 * @part item - The row container.
 */
export class UaiListItem {
    constructor() {
        this.internalChips = [];
        this.internalActionsButtons = [];
        /** Selected state of the control. Use with typeList checkbox, radio or switch; pair with uaiChecked. Avoid it on default rows, where it has no visual. */
        this.checked = false;
        /** Control of the row: checkbox and radio on the left, switch on the right; default or null has none. Use the same value in every row of a list; pair with uai-list typeList. Avoid mixing controls in one list. */
        this.typeList = null;
        /** Name shown as avatar initials. Use for people or entities; pair with avatarThumbnail. Avoid it together with icon: the avatar wins. */
        this.avatarName = null;
        /** Avatar photo URL. Use for people; pair with avatarName as fallback. Avoid decorative images. */
        this.avatarThumbnail = null;
        /** UAI icon name shown before the text; solid when active. Use to identify the row type; pair with text. Avoid it with an avatar, which takes priority. */
        this.icon = null;
        /** Row identifier sent in the events. Use a unique value per list; pair with uai-list value for radios. Avoid duplicates. */
        this.value = null;
        /** Main text of the row. Use a short label; pair with secondaryText for details. Avoid long paragraphs. */
        this.text = null;
        /** Supporting text below the main text. Use for details; pair with text. Avoid repeating the main text. */
        this.secondaryText = null;
        /**
         * Chips shown after the text, as a JSON string or an array: chips='["chip1", "chip2"]'. Use for short tags;
         * pair with text. Avoid long labels: they are cut with a tooltip.
         */
        this.chips = [];
        /**
         * UAI icon names of the action buttons on the right, as a JSON string or an array:
         * actions-buttons='["copy", "settings-general", "more-options-horizontal"]'. Use with typeList null or default;
         * pair with uaiClickActionButtom. Avoid them with controls: they are not shown.
         */
        this.actionsButtons = [];
        /** Shows the hover and pressed states and makes the row focusable. Use when the row does something on click; pair with a click handler. Controls are always clickable. */
        this.clickable = false;
        /** Highlights the row as the current one: selected overlay, solid icon and bold text. Use for the current item; pair with navigation. Avoid it to mean checked. */
        this.active = false;
        /** Rounds the row corners with radius/md. Use for rows that float on a surface; pair with spacing between rows. Avoid it in full-bleed lists. */
        this.borderRadius = false;
        /** Row padding: tall, standard or short. Use standard by default; pair with the density of the screen. Avoid mixing sizes in one list. */
        this.size = 'standard';
        /** Test selector on the row. Use for automation; pair with semantic queries. Avoid styling by it. */
        this.dataTest = null;
        // SOLFAC-117 (b, bug 3): a click on an action button does not toggle checked.
        this.onClick = (event) => {
            const fromActionButton = event
                .composedPath()
                .some((node) => { var _a; return (_a = node.classList) === null || _a === void 0 ? void 0 : _a.contains('action-button'); });
            if (!fromActionButton)
                this.toggle();
        };
        // SOLFAC-117 (a): Enter and Space act like a click on focusable rows.
        this.onKeyDown = (event) => {
            if (event.composedPath()[0] !== this.itemElement)
                return;
            if (event.key !== 'Enter' && event.key !== ' ')
                return;
            event.preventDefault();
            if (!event.repeat)
                this.toggle();
        };
        this.clickActionButtons = (icon, event) => {
            const detail = { value: this.value, icon, elementButton: event.composedPath()[0] };
            this.uaiClickActionButtom.emit(detail);
            // SOLFAC-117 (c): corrected spelling, emitted with the same detail.
            this.uaiClickActionButton.emit(detail);
        };
        // Inner controls are visual only: the row owns focus, role and state, so their own change events stay inside.
        this.stopControlEvent = (event) => event.stopPropagation();
    }
    componentWillLoad() {
        this.hasActionAreaSlot = !!this.hostElement.querySelector('[slot="action-area"]');
        this.hasContentAreaSlot = !!this.hostElement.querySelector('[slot="content-area"]');
        this.chipsChanged();
        this.actionsButtonsChanged();
    }
    chipsChanged() {
        this.internalChips = parseList(this.chips, this.internalChips);
    }
    actionsButtonsChanged() {
        this.internalActionsButtons = parseList(this.actionsButtons, this.internalActionsButtons);
    }
    get isControl() {
        return CONTROL_TYPES.includes(this.typeList);
    }
    // SOLFAC-117 (b, bug 4): uaiChecked is emitted only for user interaction, never for changes made by code.
    toggle() {
        const next = this.typeList == 'radio' ? true : !this.checked;
        if (next === this.checked)
            return;
        this.checked = next;
        this.uaiChecked.emit({
            value: this.value,
            text: this.text,
            secondaryText: this.secondaryText,
            typeList: this.typeList,
            checked: next,
        });
    }
    renderChips() {
        return this.internalChips.map((chip, index) => {
            const id = index.toString();
            if (chip.length <= CHIP_LIMIT) {
                return (h("span", { class: "chip", id: id, key: id }, chip));
            }
            return (h("uai-tooltip", { key: id, position: "top-center", "tooltip-text": chip }, h("span", { class: "chip", id: id }, `${chip.slice(0, CHIP_LIMIT)} ...`)));
        });
    }
    renderActionsButtons() {
        return this.internalActionsButtons.map((button, index) => (h("uai-button", { key: index.toString(), class: "action-button", variant: "outline", color: "content", size: "short", icon: button, "aria-label": button, onClick: (event) => this.clickActionButtons(button, event) })));
    }
    renderControl() {
        const label = this.text || this.value || this.typeList;
        return (h("span", { class: `control control--${this.typeList}`, "aria-hidden": "true", inert: true }, this.typeList == 'radio' && h("uai-radio", { value: this.value, checked: this.checked, "aria-label": label, onUaiChange: this.stopControlEvent }), this.typeList == 'checkbox' && h("uai-checkbox", { checked: this.checked, "aria-label": label, onUaiChange: this.stopControlEvent }), this.typeList == 'switch' && h("uai-switch", { checked: this.checked, "aria-label": label, onUaiChange: this.stopControlEvent })));
    }
    role() {
        if (this.isControl)
            return this.typeList;
        return this.clickable ? 'button' : null;
    }
    render() {
        const interactive = this.clickable || this.isControl;
        const hasLeftInput = this.typeList == 'checkbox' || this.typeList == 'radio';
        const hasAvatar = this.avatarName || this.avatarThumbnail;
        const size = ['tall', 'standard', 'short'].includes(this.size) ? this.size : 'standard';
        // SOLFAC-117 (b, bug 5): the text grows when there are no chips and no content or action slots.
        const textGrows = !this.hasActionAreaSlot && !this.hasContentAreaSlot && this.internalChips.length === 0;
        return (h(Host, { key: 'adfc77c9d4dad1b15b807e3ba3d7afb9a9efd689' }, h("div", { key: '73a2dc73b7bf6a5acd3f832b086c7bbff54d128f', ref: (element) => (this.itemElement = element), part: "item", class: {
                'list-item': true,
                'list-item--clickable': interactive,
                'list-item--active': this.active,
                'list-item--border-radius': this.borderRadius,
                [`list-item--${size}`]: true,
            }, role: this.role(), "aria-checked": this.isControl ? String(!!this.checked) : null, "aria-labelledby": this.text ? 'list-item-text' : null, "aria-describedby": this.secondaryText ? 'list-item-secondary-text' : null, tabindex: interactive ? '0' : null, "data-test": this.dataTest, onClick: this.onClick, onKeyDown: interactive ? this.onKeyDown : null }, hasLeftInput && this.renderControl(), hasAvatar ? (h("uai-avatar", { class: "avatar-item", name: this.avatarName, thumbnail: this.avatarThumbnail, size: "extra-small" })) : (this.icon && (h("uai-icon", { class: "icon-item", size: "medium", name: this.icon, theme: this.active ? 'solid' : 'outline' }))), h("div", { key: '18cd4d49055ab256f2d5a6848c9104ae7a736abb', class: "content-slot" }, h("slot", { key: '968d5578680b58a231538f53281f513f6608fc1c' })), (this.text || this.secondaryText) && (h("div", { key: '9809ea1537c10bd49a5030ec1d75cb4b3abfa191', class: { 'content-item': true, 'grow-up': textGrows } }, this.text && (h("uai-typo", { key: 'b0ea3b0ac4cc5a6aace90a7247899c042d348a0b', id: "list-item-text", class: "title-item", variant: "body-lg", tag: "span", margin: false, bold: this.active ? 'bold' : 'regular' }, this.text)), this.secondaryText && (h("uai-typo", { key: 'ab949ab15fe5c4394dd36a57013020a18346de5f', id: "list-item-secondary-text", class: "subtitle-item", variant: "caption", tag: "span", margin: false }, this.secondaryText)))), h("div", { key: 'ffbc7e877166debd34215fdded485a4d472c82ec', class: "content-area grow-up" }, this.internalChips.length > 0 && h("div", { key: '7f42f5b32c23132d95978f1b2ca65dc0fa7e4c5b', class: "internal-chips" }, this.renderChips()), h("slot", { key: 'fbd382d47a52d2d34ad4c76726443e035f8aeb3b', name: "content-area" })), (!this.typeList || this.typeList == 'default') && (h("div", { key: '7b104542f550f45f9be76f1b8befebad847be5f8', class: "action-area" }, this.internalActionsButtons.length > 0 && (h("div", { key: '912b930e348f0b5f0412665dc58d79260f5de01f', class: "internal-actions-buttons" }, this.renderActionsButtons())), h("slot", { key: 'aae05b73e83bccc7ade3347f1bd418bc7429736d', name: "action-area" }))), this.typeList == 'switch' && this.renderControl())));
    }
    static get is() { return "uai-list-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-list-item.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-list-item.css"]
        };
    }
    static get properties() {
        return {
            "checked": {
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
                    "text": "Selected state of the control. Use with typeList checkbox, radio or switch; pair with uaiChecked. Avoid it on default rows, where it has no visual."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "checked",
                "defaultValue": "false"
            },
            "typeList": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UaiListTypeList",
                    "resolved": "\"checkbox\" | \"default\" | \"radio\" | \"switch\"",
                    "references": {
                        "UaiListTypeList": {
                            "location": "import",
                            "path": "../uai-list/uai-list-interface",
                            "id": "src/components/uai-list/uai-list-interface.ts::UaiListTypeList",
                            "referenceLocation": "UaiListTypeList"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Control of the row: checkbox and radio on the left, switch on the right; default or null has none. Use the same value in every row of a list; pair with uai-list typeList. Avoid mixing controls in one list."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "type-list",
                "defaultValue": "null"
            },
            "avatarName": {
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
                    "text": "Name shown as avatar initials. Use for people or entities; pair with avatarThumbnail. Avoid it together with icon: the avatar wins."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "avatar-name",
                "defaultValue": "null"
            },
            "avatarThumbnail": {
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
                    "text": "Avatar photo URL. Use for people; pair with avatarName as fallback. Avoid decorative images."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "avatar-thumbnail",
                "defaultValue": "null"
            },
            "icon": {
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
                    "text": "UAI icon name shown before the text; solid when active. Use to identify the row type; pair with text. Avoid it with an avatar, which takes priority."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "icon",
                "defaultValue": "null"
            },
            "value": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Row identifier sent in the events. Use a unique value per list; pair with uai-list value for radios. Avoid duplicates."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "value",
                "defaultValue": "null"
            },
            "text": {
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
                    "text": "Main text of the row. Use a short label; pair with secondaryText for details. Avoid long paragraphs."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "text",
                "defaultValue": "null"
            },
            "secondaryText": {
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
                    "text": "Supporting text below the main text. Use for details; pair with text. Avoid repeating the main text."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "secondary-text",
                "defaultValue": "null"
            },
            "chips": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string | string[]",
                    "resolved": "string | string[]",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Chips shown after the text, as a JSON string or an array: chips='[\"chip1\", \"chip2\"]'. Use for short tags;\npair with text. Avoid long labels: they are cut with a tooltip."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "chips",
                "defaultValue": "[]"
            },
            "actionsButtons": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string | string[]",
                    "resolved": "string | string[]",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "UAI icon names of the action buttons on the right, as a JSON string or an array:\nactions-buttons='[\"copy\", \"settings-general\", \"more-options-horizontal\"]'. Use with typeList null or default;\npair with uaiClickActionButtom. Avoid them with controls: they are not shown."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "actions-buttons",
                "defaultValue": "[]"
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
                    "text": "Shows the hover and pressed states and makes the row focusable. Use when the row does something on click; pair with a click handler. Controls are always clickable."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "clickable",
                "defaultValue": "false"
            },
            "active": {
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
                    "text": "Highlights the row as the current one: selected overlay, solid icon and bold text. Use for the current item; pair with navigation. Avoid it to mean checked."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "active",
                "defaultValue": "false"
            },
            "borderRadius": {
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
                    "text": "Rounds the row corners with radius/md. Use for rows that float on a surface; pair with spacing between rows. Avoid it in full-bleed lists."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "border-radius",
                "defaultValue": "false"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UaiListItemSize",
                    "resolved": "\"short\" | \"standard\" | \"tall\"",
                    "references": {
                        "UaiListItemSize": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-list-item/uai-list-item.tsx",
                            "id": "src/components/uai-list-item/uai-list-item.tsx::UaiListItemSize"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Row padding: tall, standard or short. Use standard by default; pair with the density of the screen. Avoid mixing sizes in one list."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "size",
                "defaultValue": "'standard'"
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
                    "text": "Test selector on the row. Use for automation; pair with semantic queries. Avoid styling by it."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "data-test",
                "defaultValue": "null"
            }
        };
    }
    static get states() {
        return {
            "internalChips": {},
            "internalActionsButtons": {}
        };
    }
    static get events() {
        return [{
                "method": "uaiChecked",
                "name": "uaiChecked",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Checked state changed by a click, Enter or Space. Use detail.checked; pair with checked. Not emitted for changes made by code."
                },
                "complexType": {
                    "original": "UaiListItemCheckedDetail",
                    "resolved": "UaiListItemCheckedDetail",
                    "references": {
                        "UaiListItemCheckedDetail": {
                            "location": "import",
                            "path": "../uai-list/uai-list-interface",
                            "id": "src/components/uai-list/uai-list-interface.ts::UaiListItemCheckedDetail",
                            "referenceLocation": "UaiListItemCheckedDetail"
                        }
                    }
                }
            }, {
                "method": "uaiClickActionButtom",
                "name": "uaiClickActionButtom",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Click on an action button; name kept from bdsClickActionButtom. Use detail.icon to know the button; pair with actionsButtons. Avoid toggling checked in it."
                },
                "complexType": {
                    "original": "UaiListActionButtonDetail",
                    "resolved": "UaiListActionButtonDetail",
                    "references": {
                        "UaiListActionButtonDetail": {
                            "location": "import",
                            "path": "../uai-list/uai-list-interface",
                            "id": "src/components/uai-list/uai-list-interface.ts::UaiListActionButtonDetail",
                            "referenceLocation": "UaiListActionButtonDetail"
                        }
                    }
                }
            }, {
                "method": "uaiClickActionButton",
                "name": "uaiClickActionButton",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Same as uaiClickActionButtom, with the corrected spelling; both are emitted with the same detail. Use in new code; pair with actionsButtons. Avoid listening to both."
                },
                "complexType": {
                    "original": "UaiListActionButtonDetail",
                    "resolved": "UaiListActionButtonDetail",
                    "references": {
                        "UaiListActionButtonDetail": {
                            "location": "import",
                            "path": "../uai-list/uai-list-interface",
                            "id": "src/components/uai-list/uai-list-interface.ts::UaiListActionButtonDetail",
                            "referenceLocation": "UaiListActionButtonDetail"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "hostElement"; }
    static get watchers() {
        return [{
                "propName": "chips",
                "methodName": "chipsChanged"
            }, {
                "propName": "actionsButtons",
                "methodName": "actionsButtonsChanged"
            }];
    }
}
