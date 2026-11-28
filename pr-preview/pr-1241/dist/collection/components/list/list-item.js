import { Host, h } from "@stencil/core";
/**
 * @deprecated Use uai-list-item with UaiThemeProvider for tokenized styling.
 */
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
        return (h(Host, { key: 'd600d912649d0b08d5651ca1555c5c7876d920a7' }, h("div", { key: 'd6d4452533d2133bc09cdfea18a747e6afb9f746', onClick: this.handler, tabindex: "0", class: {
                list_item: true,
                clickable: hasInput,
                border_radius: this.borderRadius,
                [`list_item_${this.size}`]: true,
            }, "data-test": this.dataTest }, this.active && h("div", { key: '7ad20188d17a4d5a730138dfc6f90c01cd8c7088', class: "active" }), hasLeftInput && (h("div", { key: 'db7bcc82fa6d18e30d7a7a2a1f02fde67da008d1', class: { input_list: true } }, this.typeList == 'radio' && h("bds-radio", { key: '911fd0b3f4afa37c5d29dc05142b72915cd3b587', value: this.value, checked: this.checked }), this.typeList == 'checkbox' && (h("bds-checkbox", { key: '7d3302b473eb14c735ec7b361ca2d9798f221772', refer: "", label: "", name: "cb1", disabled: false, checked: this.checked })))), hasAvatar ? (h("bds-avatar", { class: "avatar-item", name: this.avatarName, thumbnail: this.avatarThumbnail, size: "extra-small" })) : (this.icon && (h("bds-icon", { class: {
                [`icon-item`]: true,
                [`icon-item-active`]: this.active,
            }, size: "medium", name: this.icon, color: "inherit", theme: this.active ? 'solid' : 'outline' }))), h("div", { key: '0208ccc5ebe83b0bafab22cc00977eb21ce5b444', class: { [`content-slot`]: true } }, h("slot", { key: '8a82be329cf5eb11aee6b1dd6c1871c9c027ac08' })), (this.text || this.secondaryText) && (h("div", { key: '1d9f9ba78777a7a3a784c7f00bdb691486d6bf81', class: {
                [`content-item`]: true,
                [`grow-up`]: !this.hasActionAreaSlot && !this.hasContentAreaSlot && this.internalChips.length < 0,
            } }, this.text && (h("bds-typo", { key: '5e550c977c4538659565d38f3e00766d8df033c2', class: "title-item", variant: "fs-16", tag: "span", bold: this.active ? 'bold' : 'regular' }, this.text)), this.secondaryText && (h("bds-typo", { key: 'f22dd9ee97fe5c98e8670a3e4e9bb9508f4e49aa', class: "subtitle-item", variant: "fs-12", "line-height": "small", tag: "span" }, this.secondaryText)))), h("div", { key: 'ae8c89251f7c659c0135f8a33cb1b851085f07f6', class: { [`content-area`]: true, [`grow-up`]: true } }, this.internalChips.length > 0 && h("div", { key: '9653c75b61c6d51ac7bcc0eab2dbb486c73a5152', class: "internal-chips" }, this.renderChips()), h("slot", { key: 'c2d533c42a85edf8c67cd2b072529fde92e54b92', name: "content-area" })), (!this.typeList || this.typeList == 'default') && (h("div", { key: 'afb2cbb68a0fa6d7912972ff2615243020961df9', class: { [`action-area`]: true } }, this.internalActionsButtons.length > 0 && (h("div", { key: '65e127f8829a4e608bfb9c9bd3df19b5741e9d47', class: "internal-actions-buttons" }, this.renderActionsButtons())), h("slot", { key: '6528ee22785ce57631292de08531159cf850b780', name: "action-area" }))), this.typeList == 'switch' && h("bds-switch", { key: 'dd748b5c9707a7bfa7dc5abf061ea14a660d9979', refer: "", name: "", checked: this.checked }))));
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
