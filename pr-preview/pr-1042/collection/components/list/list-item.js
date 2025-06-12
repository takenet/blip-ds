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
                this.internalChips = JSON.parse(this.chips);
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
                this.internalActionsButtons = JSON.parse(this.actionsButtons);
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
        return (h(Host, { key: 'a6d9e3b7cb4afe2c38f8f8cc3ed3990584e4ead9' }, h("div", { key: 'eb056013ac62c8212eab0f4cb225385c01514995', onClick: this.handler, tabindex: "0", class: {
                list_item: true,
                clickable: hasInput,
                border_radius: this.borderRadius,
                [`list_item_${this.size}`]: true,
            }, "data-test": this.dataTest }, this.active && h("div", { key: 'da6853e7d2c10db6326c88117675c69bce8202f9', class: "active" }), hasLeftInput && (h("div", { key: '4db0938f52ca1692bbd537a91c2566dbae20c3ca', class: { input_list: true } }, this.typeList == 'radio' && h("bds-radio", { key: '57f489fb8821ab2455aa5eb86dd15590125ac22b', value: this.value, checked: this.checked }), this.typeList == 'checkbox' && (h("bds-checkbox", { key: '598edf635a689b8da58ac4bc519577f747c8e83d', refer: "", label: "", name: "cb1", disabled: false, checked: this.checked })))), hasAvatar ? (h("bds-avatar", { class: "avatar-item", name: this.avatarName, thumbnail: this.avatarThumbnail, size: "extra-small" })) : (this.icon && (h("bds-icon", { class: {
                [`icon-item`]: true,
                [`icon-item-active`]: this.active,
            }, size: "medium", name: this.icon, color: "inherit", theme: this.active ? 'solid' : 'outline' }))), h("div", { key: '1ae0b349a59a755d48be37ae134a695adbeca097', class: { [`content-slot`]: true } }, h("slot", { key: 'fbc402d3b19364b88ca4422faf0bce19bc8ddd7b' })), (this.text || this.secondaryText) && (h("div", { key: 'c62beaa04944604ebb60420a8e5a442d602dc069', class: {
                [`content-item`]: true,
                [`grow-up`]: !this.hasActionAreaSlot && !this.hasContentAreaSlot && this.internalChips.length < 0,
            } }, this.text && (h("bds-typo", { key: '2a09cec3249b786855dee7726c8a93aab52c36ad', class: "title-item", variant: "fs-16", tag: "span", bold: this.active ? 'bold' : 'regular' }, this.text)), this.secondaryText && (h("bds-typo", { key: 'cc11e020b387695073f17bd4eb1031fa79bcee31', class: "subtitle-item", variant: "fs-12", "line-height": "small", tag: "span" }, this.secondaryText)))), h("div", { key: '95cda60501981733b2ba18c911b811445932c05e', class: { [`content-area`]: true, [`grow-up`]: true } }, this.internalChips.length > 0 && h("div", { key: '9bb3319fe07b3d9576c624a49585e5770dfc88c4', class: "internal-chips" }, this.renderChips()), h("slot", { key: 'bc8ac87926604994a4f31c9c9851333fc81e4e1c', name: "content-area" })), (!this.typeList || this.typeList == 'default') && (h("div", { key: '2a313ee6974414a79945db19e3cf8c337fa30c98', class: { [`action-area`]: true } }, this.internalActionsButtons.length > 0 && (h("div", { key: '8e203aa83bdc2d0ea7d13789075ae1a645fb7879', class: "internal-actions-buttons" }, this.renderActionsButtons())), h("slot", { key: '14f729a3079c00958ec9fe2c6b8b32a3de4a3d1f', name: "action-area" }))), this.typeList == 'switch' && h("bds-switch", { key: 'ffdd4cce51fc31cef20ed9580ff1bbfb5b1268ae', refer: "", name: "", checked: this.checked }))));
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
                "attribute": "checked",
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
                "defaultValue": "false"
            },
            "typeList": {
                "type": "string",
                "attribute": "type-list",
                "mutable": false,
                "complexType": {
                    "original": "TypeList",
                    "resolved": "\"checkbox\" | \"default\" | \"radio\" | \"switch\"",
                    "references": {
                        "TypeList": {
                            "location": "import",
                            "path": "./list",
                            "id": "src/components/list/list.tsx::TypeList"
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
                "defaultValue": "null"
            },
            "avatarName": {
                "type": "string",
                "attribute": "avatar-name",
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
                "defaultValue": "null"
            },
            "avatarThumbnail": {
                "type": "string",
                "attribute": "avatar-thumbnail",
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
                "defaultValue": "null"
            },
            "icon": {
                "type": "string",
                "attribute": "icon",
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
                "defaultValue": "null"
            },
            "value": {
                "type": "string",
                "attribute": "value",
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
                "defaultValue": "null"
            },
            "text": {
                "type": "string",
                "attribute": "text",
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
                "defaultValue": "null"
            },
            "secondaryText": {
                "type": "string",
                "attribute": "secondary-text",
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
                "defaultValue": "null"
            },
            "chips": {
                "type": "string",
                "attribute": "chips",
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
                "defaultValue": "[]"
            },
            "actionsButtons": {
                "type": "string",
                "attribute": "actions-buttons",
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
                "defaultValue": "[]"
            },
            "clickable": {
                "type": "boolean",
                "attribute": "clickable",
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
                "defaultValue": "false"
            },
            "active": {
                "type": "boolean",
                "attribute": "active",
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
                "defaultValue": "false"
            },
            "borderRadius": {
                "type": "boolean",
                "attribute": "border-radius",
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
                "defaultValue": "false"
            },
            "size": {
                "type": "string",
                "attribute": "size",
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
                "defaultValue": "'standard'"
            },
            "dataTest": {
                "type": "string",
                "attribute": "data-test",
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
                    "original": "any",
                    "resolved": "any",
                    "references": {}
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
                    "original": "any",
                    "resolved": "any",
                    "references": {}
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
//# sourceMappingURL=list-item.js.map
