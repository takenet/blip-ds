import { h } from "@stencil/core";
import { termTranslate } from "./languages";
import background from "../../assets/svg/pattern.svg";
export class BdsUpload {
    constructor() {
        this.files = [];
        this.haveFiles = false;
        this.hover = false;
        this.size = [];
        this.internalAccepts = [];
        this.formatError = false;
        /**
         * Set the language for fixed texts.
         */
        this.language = 'pt_BR';
        /**
         * Used to accept a especific type of file.
         */
        this.dataAccept = [];
        /**
         * Data test is the prop to specifically test the component action object.
         * dtInputFiles is the data-test to button clear.
         */
        this.dtInputFiles = null;
        /**
         * Data test is the prop to specifically test the component action object.
         * dtLabelAddFile is the data-test to button clear.
         */
        this.dtLabelAddFile = null;
        /**
         * Data test is the prop to specifically test the component action object.
         * dtButtonDelete is the data-test to button clear.
         */
        this.dtButtonDelete = null;
        this.validationFiles = (File, index) => {
            const filetype = `.${File.name.split('.').pop()}`;
            const validate = this.internalAccepts.includes(filetype);
            if (validate) {
                this.formatError = false;
                return;
            }
            else {
                this.formatError = true;
                this.deleteFile(index);
                return;
            }
        };
        /**
         * Recive the file data using drag and drop.
         */
        this.handleDrop = (Event) => {
            this.haveFiles = true;
            const dt = Event.dataTransfer;
            const files = dt.files;
            this.handleFiles(files);
        };
        /**
         * Verify if allow the state recive one or more items.
         */
        this.handleFiles = (files) => {
            if (!this.multiple) {
                this.files = [files[0]];
            }
            else {
                this.files = [...this.files, ...files];
            }
            this.bdsUploadChange.emit({ value: this.files });
        };
        this.refInputElement = (el) => {
            this.inputElement = el;
        };
    }
    dataAcceptChanged() {
        if (this.dataAccept) {
            if (typeof this.dataAccept === 'string') {
                try {
                    this.internalAccepts = JSON.parse(this.dataAccept);
                }
                catch (_a) {
                    this.internalAccepts = [];
                }
            }
            else {
                this.internalAccepts = this.dataAccept;
            }
        }
        else {
            this.internalAccepts = [];
        }
    }
    filesChanged() {
        if (this.files.length > 0) {
            for (let i = 0; i < this.files.length; i++) {
                if (this.internalAccepts.length > 0) {
                    this.validationFiles(this.files[i], i);
                }
            }
        }
    }
    formatErrorChanged(value) {
        if (value) {
            this.error = termTranslate(this.language, 'formatError');
            setTimeout(() => (this.error = null), 5000);
        }
    }
    componentWillLoad() {
        this.dataAcceptChanged();
    }
    componentDidLoad() {
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach((eventName) => {
            this.dropArea.shadowRoot.addEventListener(eventName, this.preventDefaults, false);
            this.dropArea.shadowRoot.addEventListener(eventName, () => this.hoverFile(true), false);
        });
        ['dragenter', 'dragover'].forEach((eventName) => {
            this.dropArea.shadowRoot.addEventListener(eventName, () => this.preventDefaults, false);
            this.dropArea.shadowRoot.addEventListener(eventName, () => this.hoverFile(true), false);
        });
        ['dragleave', 'drop'].forEach((eventName) => {
            this.dropArea.shadowRoot.addEventListener(eventName, () => this.preventDefaults, false);
            this.dropArea.shadowRoot.addEventListener(eventName, () => this.hoverFile(false), false);
        });
        this.dropArea.shadowRoot.addEventListener('drop', this.handleDrop, false);
    }
    /**
     * Prevent the screen to reload.
     */
    preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }
    /**
     * Definy if are hover to aply styles in drop area.
     */
    hoverFile(boolean) {
        this.hover = boolean;
    }
    /**
     * Recive the file data using click.
     */
    onUploadClick(files) {
        if (files.length > 0) {
            if (!this.multiple) {
                this.files = [files[0]];
            }
            else {
                this.files = [...this.files, ...files];
            }
            this.haveFiles = true;
            this.getSize();
        }
        else {
            return false;
        }
        this.bdsUploadChange.emit({ value: this.files });
    }
    /**
     * Return the size information from the file.
     */
    getSize() {
        this.files.map((size) => {
            const listSize = size.size;
            this.size.push(listSize);
        });
    }
    /**
     * Used for delete a item from the list.
     */
    async deleteFile(index) {
        const fileToDelete = this.files.filter((item, i) => i == index && item);
        this.bdsUploadDelete.emit({ value: fileToDelete });
        this.files.splice(index, 1);
        this.files = [...this.files];
        if (this.files.length === 0) {
            this.haveFiles = false;
        }
        else {
            this.haveFiles = true;
        }
        this.bdsUploadChange.emit({ value: this.files });
    }
    /**
     * Used for delete a item from the list.
     */
    async deleteAllFiles() {
        this.bdsUploadDelete.emit({ value: this.files });
        this.files = [];
        if (this.files.length === 0) {
            this.haveFiles = false;
        }
        else {
            this.haveFiles = true;
        }
        this.bdsUploadChange.emit({ value: this.files });
    }
    handleKeyDown(event) {
        if (event.key == 'Enter') {
            this.inputElement.click();
        }
    }
    render() {
        return (h("div", { key: '1f75f1bf649088e0893fe64f27a9ef37de84b78a', class: "upload" }, h("div", { key: 'b8fc280093d1fd6bdc46583c71a56a4f5a27f9e4', class: "upload-header" }, h("bds-icon", { key: '145546937a1399ef5c121b2a1c0bd2545667e987', class: "upload-header_icon", size: "xxx-large", name: "upload" }), h("div", { key: '9fff2b1c4d1c5b6a50c18c5ea8fd8a9840552263', class: "upload-header_text" }, h("bds-typo", { key: '726cf65caa77d4f372918868d050c8b69e29c038', variant: "fs-16", bold: "bold", "aria-label": this.titleName }, this.titleName), h("bds-typo", { key: '2065f3a6ad9157bc014ddb053b0fe73b0b7497b7', variant: "fs-14", bold: "regular", "aria-label": this.subtitle }, this.subtitle))), this.error ? (h("bds-banner", { context: "inside", variant: "error", "aria-label": this.error }, this.error)) : (''), this.haveFiles ? (h("div", null, h("div", { class: "list-preview" }, this.files.map((names, index) => (h("div", { class: "upload__preview", key: index, id: "drop-area" }, h("div", { class: "preview", id: "preview" }, h("bds-icon", { size: "x-small", name: "attach" }), h("p", { class: "preview-text", id: "preview-text", "aria-label": names.name }, names.name), h("bds-button-icon", { class: "preview-icon", size: "short", icon: "trash", variant: "secondary", onClick: () => this.deleteFile(index), "aria-label": `delete ${names.name}`, "data-test": `${this.dtButtonDelete}-${index}` })))))), this.multiple ? (h("bds-typo", { variant: "fs-14", italic: true, class: "preview-length", "aria-label": termTranslate(this.language, 'uploaded') }, this.files.length > 1 ? `${this.files.length} ${termTranslate(this.language, 'uploaded')}` : '')) : (''))) : (''), h("div", { key: 'd4e4954f155c51071cf3e884a73dd840b0912a8c', class: { upload__edit: true } }, h("label", { key: '27ba7a823d4d48d726706f0ab2edecd1e77a4ebf', class: { 'upload__edit--label': true, 'upload__edit--hover': this.hover }, id: "file-label", htmlFor: "file", "data-test": this.dtLabelAddFile, tabindex: "0", onKeyDown: this.handleKeyDown.bind(this) }, h("div", { key: 'c3bd4bb2ab9c02c22f12cec3e6de4fa708bcd060', class: { 'text-box': true, 'text-box--hover': this.hover }, id: "file-text_box" }, this.hover ? (h("bds-typo", { class: "text", variant: "fs-14", bold: "regular", "aria-label": termTranslate(this.language, 'dropHere') }, termTranslate(this.language, 'dropHere'))) : (h("bds-typo", { class: "text", variant: "fs-14", bold: "regular", "aria-label": termTranslate(this.language, 'dropOrClick') }, termTranslate(this.language, 'dropOrClick')))), h("img", { key: 'a38b8c18d54da95ac8f75e036f5b17035ea0cbb0', class: { 'upload__img--invisible': true, 'upload__img--visible': this.hover }, src: background })), h("input", { key: 'e7ebf4a4a9180540ee0608ab06278ce07f5db04b', ref: this.refInputElement, type: "file", name: "files[]", id: "file", class: "upload__input", multiple: this.multiple, accept: this.internalAccepts.length > 0 ? this.internalAccepts.toString() : this.accept, onChange: ($event) => this.onUploadClick($event.target.files), "data-test": this.dtInputFiles }))));
    }
    static get is() { return "bds-upload"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bds-upload.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bds-upload.css"]
        };
    }
    static get properties() {
        return {
            "language": {
                "type": "string",
                "attribute": "language",
                "mutable": false,
                "complexType": {
                    "original": "languages",
                    "resolved": "\"en_US\" | \"es_ES\" | \"pt_BR\"",
                    "references": {
                        "languages": {
                            "location": "import",
                            "path": "./languages",
                            "id": "src/components/upload/languages/index.ts::languages"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Set the language for fixed texts."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'pt_BR'"
            },
            "titleName": {
                "type": "string",
                "attribute": "title-name",
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
                    "text": "Used for add a text on title."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "subtitle": {
                "type": "string",
                "attribute": "subtitle",
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
                    "text": "Used for add a text on subtitle."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "error": {
                "type": "string",
                "attribute": "error",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Used for add a error message. In case a verify."
                },
                "getter": false,
                "setter": false,
                "reflect": true
            },
            "multiple": {
                "type": "boolean",
                "attribute": "multiple",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Used to allow upload multiple files."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "accept": {
                "type": "string",
                "attribute": "accept",
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
                    "text": "Used to accept a especific type of file."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "dataAccept": {
                "type": "string",
                "attribute": "data-accept",
                "mutable": false,
                "complexType": {
                    "original": "string[] | string",
                    "resolved": "string | string[]",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Used to accept a especific type of file."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "[]"
            },
            "dtInputFiles": {
                "type": "string",
                "attribute": "dt-input-files",
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
                    "text": "Data test is the prop to specifically test the component action object.\ndtInputFiles is the data-test to button clear."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "null"
            },
            "dtLabelAddFile": {
                "type": "string",
                "attribute": "dt-label-add-file",
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
                    "text": "Data test is the prop to specifically test the component action object.\ndtLabelAddFile is the data-test to button clear."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "null"
            },
            "dtButtonDelete": {
                "type": "string",
                "attribute": "dt-button-delete",
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
                    "text": "Data test is the prop to specifically test the component action object.\ndtButtonDelete is the data-test to button clear."
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
            "files": {},
            "haveFiles": {},
            "hover": {},
            "background": {},
            "size": {},
            "internalAccepts": {},
            "formatError": {}
        };
    }
    static get events() {
        return [{
                "method": "bdsUploadDelete",
                "name": "bdsUploadDelete",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event emited when delete a item from the list."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "bdsUploadChange",
                "name": "bdsUploadChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event emited when change the value of Upload."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "deleteFile": {
                "complexType": {
                    "signature": "(index: any) => Promise<void>",
                    "parameters": [{
                            "name": "index",
                            "type": "any",
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
                    "text": "Used for delete a item from the list.",
                    "tags": []
                }
            },
            "deleteAllFiles": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Used for delete a item from the list.",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "dropArea"; }
    static get watchers() {
        return [{
                "propName": "dataAccept",
                "methodName": "dataAcceptChanged"
            }, {
                "propName": "files",
                "methodName": "filesChanged"
            }, {
                "propName": "formatError",
                "methodName": "formatErrorChanged"
            }];
    }
}
//# sourceMappingURL=bds-upload.js.map
