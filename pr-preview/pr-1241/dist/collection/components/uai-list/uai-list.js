import { Host, h } from "@stencil/core";
/**
 * List of uai-list-item rows, from data or from child elements. Use for plain lists and for single (radio),
 * multiple (checkbox) or on/off (switch) selection; pair with typeList; avoid it for tabular data (use uai-table).
 *
 * The host has the list role (radiogroup when typeList is radio) and each row the listitem role.
 *
 * @slot - uai-list-item children. Ignored when data is set.
 */
export class UaiList {
    constructor() {
        this.itemListElement = null;
        /** Control of every row: checkbox, radio, switch or default. Use to make the whole list selectable; pair with the change events. When null, each row keeps its own typeList. */
        this.typeList = null;
        this.changedOptions = (event) => {
            const { detail } = event;
            if (detail.typeList == 'radio' && detail.checked == true) {
                // SOLFAC-117 (b, bug 1): value keeps the value string of the selected row, not the event detail.
                this.value = detail.value;
                this.syncRadios();
                const selected = this.items('radio').find((item) => item.value == detail.value);
                if (selected)
                    this.uaiListRadioChange.emit(this.summary(selected));
            }
            if (detail.typeList == 'checkbox') {
                this.uaiListCheckboxChange.emit(this.items('checkbox').filter((item) => item.checked).map((item) => this.summary(item)));
            }
            if (detail.typeList == 'switch') {
                this.uaiListSwitchChange.emit(this.items('switch').filter((item) => item.checked).map((item) => this.summary(item)));
            }
        };
        this.onClickActionsButtons = (event) => {
            const { detail } = event;
            this.uaiClickActionsButtons.emit(detail);
            // SOLFAC-117 (c): corrected spelling, emitted with the same detail.
            this.uaiClickActionsButton.emit(detail);
        };
    }
    componentWillLoad() {
        this.data && this.dataChanged();
    }
    componentWillRender() {
        this.data && this.updateData();
        if (!this.data) {
            this.setItemListElement();
        }
    }
    componentDidRender() {
        if (this.data) {
            this.internalDataChanged();
        }
    }
    componentDidLoad() {
        this.syncRadios();
    }
    dataChanged() {
        this.updateData();
    }
    valueChanged() {
        this.syncRadios();
    }
    internalDataChanged() {
        this.itemListElement = this.element.shadowRoot.querySelectorAll('uai-list-item');
    }
    get itemRole() {
        return this.typeList == 'radio' ? 'none' : 'listitem';
    }
    setItemListElement() {
        this.itemListElement = this.element.getElementsByTagName('uai-list-item');
        for (let i = 0; i < this.itemListElement.length; i++) {
            const item = this.itemListElement[i];
            // SOLFAC-117 (b, bug 2): only a list with a typeList overrides the typeList of its rows.
            if (this.typeList)
                item.typeList = this.typeList;
            item.setAttribute('role', this.itemRole);
            item.addEventListener('uaiChecked', this.changedOptions);
        }
    }
    updateData() {
        if (this.data) {
            if (typeof this.data === 'string') {
                // Keep the current data if AngularJS has not interpolated the attribute yet; @Watch('data') reloads it.
                try {
                    this.internalData = JSON.parse(this.data);
                }
                catch (_a) {
                    // Not valid JSON yet.
                }
            }
            else {
                this.internalData = this.data;
            }
        }
    }
    items(type) {
        return Array.from(this.itemListElement || []).filter((item) => item.typeList == type);
    }
    summary(item) {
        return {
            value: item.value,
            text: item === null || item === void 0 ? void 0 : item.text,
            secondaryText: item === null || item === void 0 ? void 0 : item.secondaryText,
            avatarName: item === null || item === void 0 ? void 0 : item.avatarName,
            avatarThumbnail: item === null || item === void 0 ? void 0 : item.avatarThumbnail,
            typeList: item === null || item === void 0 ? void 0 : item.typeList,
        };
    }
    // SOLFAC-117 (b, bugs 1 and 4): a value set from outside selects the matching radio; the other radios are
    // cleared silently (uaiChecked is only for user interaction).
    syncRadios() {
        if (this.value === undefined || this.value === null || this.value === '')
            return;
        for (const radio of this.items('radio')) {
            radio.checked = radio.value == this.value;
        }
    }
    render() {
        return (h(Host, { key: 'fc0d19304b93cbd56b01b649b47e17f6e66a1f8b', role: this.typeList == 'radio' ? 'radiogroup' : 'list' }, h("div", { key: '13090c506525d625c85aea83647c4650226f08ae', class: "list" }, this.internalData ? (this.internalData.map((item, idx) => (h("uai-list-item", { key: idx, role: this.itemRole, value: item.value, text: item.text, typeList: this.typeList ? this.typeList : item.typeList, secondaryText: item.secondaryText, avatarName: item.avatarName, avatarThumbnail: item.avatarThumbnail, checked: item.checked, icon: item.icon, chips: item.chips, actionsButtons: item.actionsButtons, onUaiChecked: this.changedOptions, onUaiClickActionButtom: this.onClickActionsButtons, dataTest: item.dataTest })))) : (h("slot", null)))));
    }
    static get is() { return "uai-list"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-list.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-list.css"]
        };
    }
    static get properties() {
        return {
            "typeList": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UaiListTypeList",
                    "resolved": "\"checkbox\" | \"default\" | \"radio\" | \"switch\"",
                    "references": {
                        "UaiListTypeList": {
                            "location": "import",
                            "path": "./uai-list-interface",
                            "id": "src/components/uai-list/uai-list-interface.ts::UaiListTypeList",
                            "referenceLocation": "UaiListTypeList"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Control of every row: checkbox, radio, switch or default. Use to make the whole list selectable; pair with the change events. When null, each row keeps its own typeList."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "type-list",
                "defaultValue": "null"
            },
            "value": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Value of the selected radio row. Use to read or set the selection of a radio list; pair with uaiListRadioChange. Avoid it in other list types."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "value"
            },
            "data": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string | UaiListData[]",
                    "resolved": "UaiListData[] | string",
                    "references": {
                        "UaiListData": {
                            "location": "import",
                            "path": "./uai-list-interface",
                            "id": "src/components/uai-list/uai-list-interface.ts::UaiListData",
                            "referenceLocation": "UaiListData"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Rows as a JSON string or an array:\ndata='[{\"value\": \"01\",\"text\": \"Text\",\"secondaryText\": \"Secondary Text\",\"avatarName\": \"\",\"avatarThumbnail\": \"\",\"checked\": true,\"icon\": \"settings-builder\"}]'.\nUse for lists built from data, also in Angular; pair with typeList. When set, child uai-list-item elements are ignored."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "data"
            }
        };
    }
    static get states() {
        return {
            "internalData": {}
        };
    }
    static get events() {
        return [{
                "method": "uaiListCheckboxChange",
                "name": "uaiListCheckboxChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "A checkbox row changed by user interaction. detail: every checked checkbox row. Use to keep the selection; pair with typeList checkbox."
                },
                "complexType": {
                    "original": "UaiListChangeDetail[]",
                    "resolved": "UaiListChangeDetail[]",
                    "references": {
                        "UaiListChangeDetail": {
                            "location": "import",
                            "path": "./uai-list-interface",
                            "id": "src/components/uai-list/uai-list-interface.ts::UaiListChangeDetail",
                            "referenceLocation": "UaiListChangeDetail"
                        }
                    }
                }
            }, {
                "method": "uaiListRadioChange",
                "name": "uaiListRadioChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "A radio row was selected by user interaction. detail: the selected row. Use to keep the selection; pair with value."
                },
                "complexType": {
                    "original": "UaiListChangeDetail",
                    "resolved": "UaiListChangeDetail",
                    "references": {
                        "UaiListChangeDetail": {
                            "location": "import",
                            "path": "./uai-list-interface",
                            "id": "src/components/uai-list/uai-list-interface.ts::UaiListChangeDetail",
                            "referenceLocation": "UaiListChangeDetail"
                        }
                    }
                }
            }, {
                "method": "uaiListSwitchChange",
                "name": "uaiListSwitchChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "A switch row changed by user interaction. detail: every switch row that is on. Use to keep the settings; pair with typeList switch."
                },
                "complexType": {
                    "original": "UaiListChangeDetail[]",
                    "resolved": "UaiListChangeDetail[]",
                    "references": {
                        "UaiListChangeDetail": {
                            "location": "import",
                            "path": "./uai-list-interface",
                            "id": "src/components/uai-list/uai-list-interface.ts::UaiListChangeDetail",
                            "referenceLocation": "UaiListChangeDetail"
                        }
                    }
                }
            }, {
                "method": "uaiClickActionsButtons",
                "name": "uaiClickActionsButtons",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "An action button of a data row was clicked; name kept from bdsClickActionsButtons. detail: value, icon and elementButton. Use with data; pair with actionsButtons."
                },
                "complexType": {
                    "original": "UaiListActionButtonDetail",
                    "resolved": "UaiListActionButtonDetail",
                    "references": {
                        "UaiListActionButtonDetail": {
                            "location": "import",
                            "path": "./uai-list-interface",
                            "id": "src/components/uai-list/uai-list-interface.ts::UaiListActionButtonDetail",
                            "referenceLocation": "UaiListActionButtonDetail"
                        }
                    }
                }
            }, {
                "method": "uaiClickActionsButton",
                "name": "uaiClickActionsButton",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Same as uaiClickActionsButtons, with the corrected spelling; both are emitted with the same detail. Use in new code; avoid listening to both."
                },
                "complexType": {
                    "original": "UaiListActionButtonDetail",
                    "resolved": "UaiListActionButtonDetail",
                    "references": {
                        "UaiListActionButtonDetail": {
                            "location": "import",
                            "path": "./uai-list-interface",
                            "id": "src/components/uai-list/uai-list-interface.ts::UaiListActionButtonDetail",
                            "referenceLocation": "UaiListActionButtonDetail"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "element"; }
    static get watchers() {
        return [{
                "propName": "data",
                "methodName": "dataChanged"
            }, {
                "propName": "value",
                "methodName": "valueChanged"
            }, {
                "propName": "internalData",
                "methodName": "internalDataChanged"
            }];
    }
}
