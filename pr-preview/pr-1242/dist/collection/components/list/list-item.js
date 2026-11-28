import { Host, h } from "@stencil/core";
export class ListItem {
    constructor() {
        this.internalChips = [];
        this.internalActionsButtons = [];
        this.checked = false;
        /**
         * Typelis. Used toselect type of item list.
         */
        this.typeList = null;
        /**
         * AvatarName. Used to enter the avatar name.
         */
        this.avatarName = null;
        /**
         * AvatarThumbnail. Used to insert the avatar photo.
         */
        this.avatarThumbnail = null;
        /**
         * Icon. Used to add icon in list item.
         */
        this.icon = null;
        /**
         * Value. Used to insert a value in list item.
         */
        this.value = null;
        /**
         * Text. Used to insert a text in the display item.
         */
        this.text = null;
        /**
         * SecondaryText. Used to insert a secondaryText in the display item.
         */
        this.secondaryText = null;
        /**
         * The chips on the component
         * Should be passed this way:
         * chips='["chip1", "chip2"]'
         */
        this.chips = [];
        /**
         * The actions buttons on the component
         * Should be passed this way:
         * actions-buttons='["copy", "settings-general", "more-options-horizontal"]'
         */
        this.actionsButtons = [];
        /**
         * Clickable. Used to define if the item is clickable or not.
         */
        this.clickable = false;
        /**
         * Active. Used to define when the item is highlighted.
         */
        this.active = false;
        /**
         * Enable rounded border on item
         */
        this.borderRadius = false;
        /**
         * Size. Entered as one of the size. Can be one of:
         * 'tall', 'standard', 'short';
         */
        this.size = 'standard';
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
        this.handler = () => {
            this.typeList == 'radio' ? (this.checked = true) : (this.checked = !this.checked);
        };
        this.clickActionButtons = (data, event) => {
            const elementButton = event.composedPath()[0];
            this.bdsClickActionButtom.emit({
                value: this.value,
                icon: data,
                elementButton: elementButton,
            });
        };
    }
    componentWillLoad() {
        this.hasActionAreaSlot = !!this.hostElement.querySelector('[slot="action-area"]');
        this.hasContentAreaSlot = !!this.hostElement.querySelector('[slot="content-area"]');
        this.chipsChanged();
        this.actionsButtonsChanged();
    }
    checkedChanged(isChecked) {
        this.bdsChecked.emit({
            value: this.value,
            text: this.text,
            secondaryText: this.secondaryText,
            typeList: this.typeList,
            checked: isChecked,
        });
    }
    chipsChanged() {
        if (this.chips) {
            if (typeof this.chips === 'string') {
                // Keep the current chips if AngularJS has not interpolated the attribute yet; @Watch('chips') reloads it.
                try {
                    this.internalChips = JSON.parse(this.chips);
                }
                catch (e) { }
            }
            else {
                this.internalChips = this.chips;
            }
        }
        else {
            this.internalChips = [];
        }
    }
    actionsButtonsChanged() {
        if (this.actionsButtons) {
            if (typeof this.actionsButtons === 'string') {
                // Keep the current buttons if AngularJS has not interpolated the attribute yet; @Watch('actionsButtons') reloads it.
                try {
                    this.internalActionsButtons = JSON.parse(this.actionsButtons);
                }
                catch (e) { }
            }
            else {
                this.internalActionsButtons = this.actionsButtons;
            }
        }
        else {
            this.internalActionsButtons = [];
        }
    }
    renderChips() {
        if (!this.internalChips.length) {
            return [];
        }
        return this.internalChips.map((chip, index) => {
            const id = index.toString();
            const limit = 30;
            if (chip.length <= limit) {
                return (h("bds-chip-clickable", { id: id, key: id, color: "default" }, chip));
            }
            else {
                return (h("bds-tooltip", { key: id, position: "top-center", "tooltip-text": chip }, h("bds-chip-clickable", { id: id, key: id, color: "default" }, `${chip.slice(0, limit)} ...`)));
            }
        });
    }
    renderActionsButtons() {
        if (!this.internalActionsButtons.length) {
            return [];
        }
        return this.internalActionsButtons.map((button, index) => {
            const id = index.toString();
            return (h("bds-button-icon", { key: id, variant: "secondary", icon: button, size: "short", onClick: (ev) => this.clickActionButtons(button, ev) }));
        });
    }
    render() {
        const hasInput = this.clickable == true || this.typeList == 'checkbox' || this.typeList == 'radio' || this.typeList == 'switch';
        const hasLeftInput = this.typeList == 'checkbox' || this.typeList == 'radio';
        const hasAvatar = this.avatarName || this.avatarThumbnail;
        return (h(Host, { key: '5d0fc6dc496c1970b60cf906f0716829207a2acf' }, h("div", { key: '9e2dc4550ef33bbd2254d89c09474c3afbe49cf3', onClick: this.handler, tabindex: "0", class: {
                list_item: true,
                clickable: hasInput,
                border_radius: this.borderRadius,
                [`list_item_${this.size}`]: true,
            }, "data-test": this.dataTest }, this.active && h("div", { key: '26af8caac0c5e6b4f9a1d9f03308a483e7955c30', class: "active" }), hasLeftInput && (h("div", { key: 'b1b867d364f731dcf90e7ce9a700598b19ce794e', class: { input_list: true } }, this.typeList == 'radio' && h("bds-radio", { key: '89692771d61ef323cc04a002f9b6dc22a755b3e1', value: this.value, checked: this.checked }), this.typeList == 'checkbox' && (h("bds-checkbox", { key: '43ecf3976d1984dce20e25425f2f9fbbcaabf95e', refer: "", label: "", name: "cb1", disabled: false, checked: this.checked })))), hasAvatar ? (h("bds-avatar", { class: "avatar-item", name: this.avatarName, thumbnail: this.avatarThumbnail, size: "extra-small" })) : (this.icon && (h("bds-icon", { class: {
                [`icon-item`]: true,
                [`icon-item-active`]: this.active,
            }, size: "medium", name: this.icon, color: "inherit", theme: this.active ? 'solid' : 'outline' }))), h("div", { key: 'c820ae9372e6a119c25bb266154549b888cafc48', class: { [`content-slot`]: true } }, h("slot", { key: '4f93ce728b872a1674b547d782f8809f2fc52f96' })), (this.text || this.secondaryText) && (h("div", { key: '600c2b3c47368fc4153712746d1dd3c7911cf29d', class: {
                [`content-item`]: true,
                [`grow-up`]: !this.hasActionAreaSlot && !this.hasContentAreaSlot && this.internalChips.length < 0,
            } }, this.text && (h("bds-typo", { key: '23ee91b19335a8eae029b38ec77e02eeeb3976c8', class: "title-item", variant: "fs-16", tag: "span", bold: this.active ? 'bold' : 'regular' }, this.text)), this.secondaryText && (h("bds-typo", { key: 'ce84fa1cbd564bb41ac53b81102d25f3a162a8ba', class: "subtitle-item", variant: "fs-12", "line-height": "small", tag: "span" }, this.secondaryText)))), h("div", { key: '5db03a578eb118dfd4957d105dd4946cb88191e7', class: { [`content-area`]: true, [`grow-up`]: true } }, this.internalChips.length > 0 && h("div", { key: '70d22430305174f9f28a5c8f0b0ed7b00832227c', class: "internal-chips" }, this.renderChips()), h("slot", { key: '159f927eb3d8912f99cbe71411c536976b8deb46', name: "content-area" })), (!this.typeList || this.typeList == 'default') && (h("div", { key: '4a710862c532d7779ce46557919e3eec9cf54d45', class: { [`action-area`]: true } }, this.internalActionsButtons.length > 0 && (h("div", { key: 'd3bb5d236a98625843c330d38dd3219ca5a4b0b2', class: "internal-actions-buttons" }, this.renderActionsButtons())), h("slot", { key: '6f955de4081d3e80a06769e2b792ef383709bc59', name: "action-area" }))), this.typeList == 'switch' && h("bds-switch", { key: 'b64a0c1f2f0b909d149e089e734c181035a467db', refer: "", name: "", checked: this.checked }))));
    }
    static get is() { return "bds-list-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["list.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["list.css"]
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
                    "text": ""
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
                    "original": "TypeList",
                    "resolved": "\"checkbox\" | \"default\" | \"radio\" | \"switch\"",
                    "references": {
                        "TypeList": {
                            "location": "import",
                            "path": "./list",
                            "id": "src/components/list/list.tsx::TypeList",
                            "referenceLocation": "TypeList"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Typelis. Used toselect type of item list."
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
                    "text": "AvatarName. Used to enter the avatar name."
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
                    "text": "AvatarThumbnail. Used to insert the avatar photo."
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
                    "text": "Icon. Used to add icon in list item."
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
                    "text": "Value. Used to insert a value in list item."
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
                    "text": "Text. Used to insert a text in the display item."
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
                    "text": "SecondaryText. Used to insert a secondaryText in the display item."
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
                    "text": "The chips on the component\nShould be passed this way:\nchips='[\"chip1\", \"chip2\"]'"
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
                    "text": "The actions buttons on the component\nShould be passed this way:\nactions-buttons='[\"copy\", \"settings-general\", \"more-options-horizontal\"]'"
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
                    "text": "Clickable. Used to define if the item is clickable or not."
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
                    "text": "Active. Used to define when the item is highlighted."
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
                    "text": "Enable rounded border on item"
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
                    "original": "ItemSize",
                    "resolved": "\"short\" | \"standard\" | \"tall\"",
                    "references": {
                        "ItemSize": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/list/list-item.tsx",
                            "id": "src/components/list/list-item.tsx::ItemSize"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Size. Entered as one of the size. Can be one of:\n'tall', 'standard', 'short';"
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
                    "text": "Data test is the prop to specifically test the component action object."
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
                "method": "bdsChecked",
                "name": "bdsChecked",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the value has changed because of a click event."
                },
                "complexType": {
                    "original": "{\n    value: string | null;\n    text: string | null;\n    secondaryText: string | null;\n    typeList: TypeList | null;\n    checked: boolean | null;\n  }",
                    "resolved": "{ value: string; text: string; secondaryText: string; typeList: TypeList; checked: boolean; }",
                    "references": {
                        "TypeList": {
                            "location": "import",
                            "path": "./list",
                            "id": "src/components/list/list.tsx::TypeList",
                            "referenceLocation": "TypeList"
                        }
                    }
                }
            }, {
                "method": "bdsClickActionButtom",
                "name": "bdsClickActionButtom",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when click in someone actions buttom insert in data."
                },
                "complexType": {
                    "original": "{\n    value: string | null;\n    icon: string;\n    elementButton: EventTarget;\n  }",
                    "resolved": "{ value: string; icon: string; elementButton: EventTarget; }",
                    "references": {
                        "EventTarget": {
                            "location": "global",
                            "id": "global::EventTarget"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "hostElement"; }
    static get watchers() {
        return [{
                "propName": "checked",
                "methodName": "checkedChanged"
            }, {
                "propName": "chips",
                "methodName": "chipsChanged"
            }, {
                "propName": "actionsButtons",
                "methodName": "actionsButtonsChanged"
            }];
    }
}
