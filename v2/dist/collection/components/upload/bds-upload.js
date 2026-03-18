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
        /**
         * Used to show or hide the file list preview.
         */
        this.showListPreview = true;
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
        return (h("div", { key: '57a3f8000951bb514d506fb9a9a714875106ce79', class: "upload" }, h("div", { key: '9f4ff0110236f6fa7e78dbfb16a359af99395703', class: "upload-header" }, h("bds-icon", { key: '1a91869433c88a3eaf2b682a265e2be35ddfc73e', class: "upload-header_icon", size: "xxx-large", name: "upload" }), h("div", { key: 'c784f12fff1c8e0b3e78bf08ad3dd224baeca6bc', class: "upload-header_text" }, h("bds-typo", { key: '48043b1469b874235cddd0b1d8a14631292b959b', variant: "fs-16", bold: "bold", "aria-label": this.titleName }, this.titleName), h("bds-typo", { key: '11e5dd12a780c6fca131de9cf2d9f99997552925', variant: "fs-14", bold: "regular", "aria-label": this.subtitle }, this.subtitle))), this.error ? (h("bds-banner", { context: "inside", variant: "error", "aria-label": this.error }, this.error)) : (''), this.haveFiles && this.showListPreview ? (h("div", null, h("div", { class: "list-preview" }, this.files.map((names, index) => (h("div", { class: "upload__preview", key: index, id: "drop-area" }, h("div", { class: "preview", id: "preview" }, h("bds-icon", { size: "x-small", name: "attach" }), h("p", { class: "preview-text", id: "preview-text", "aria-label": names.name }, names.name), h("bds-button-icon", { class: "preview-icon", size: "short", icon: "trash", variant: "secondary", onClick: () => this.deleteFile(index), "aria-label": `delete ${names.name}`, "data-test": `${this.dtButtonDelete}-${index}` })))))), this.multiple ? (h("bds-typo", { variant: "fs-14", italic: true, class: "preview-length", "aria-label": termTranslate(this.language, 'uploaded') }, this.files.length > 1 ? `${this.files.length} ${termTranslate(this.language, 'uploaded')}` : '')) : (''))) : (''), h("div", { key: 'd5fb0f98e0ae2743ccc18e9db1d46187d5c354d0', class: { upload__edit: true } }, h("label", { key: '508b93e2d9a8cf556656bb7168c6015c46e62021', class: { 'upload__edit--label': true, 'upload__edit--hover': this.hover }, id: "file-label", htmlFor: "file", "data-test": this.dtLabelAddFile, tabindex: "0", onKeyDown: this.handleKeyDown.bind(this) }, h("div", { key: '92526010d017ca8a475ae594d7ed89bbc20c9d5a', class: { 'text-box': true, 'text-box--hover': this.hover }, id: "file-text_box" }, this.hover ? (h("bds-typo", { class: "text", variant: "fs-14", bold: "regular", "aria-label": termTranslate(this.language, 'dropHere') }, termTranslate(this.language, 'dropHere'))) : (h("bds-typo", { class: "text", variant: "fs-14", bold: "regular", "aria-label": termTranslate(this.language, 'dropOrClick') }, termTranslate(this.language, 'dropOrClick')))), h("img", { key: 'ff56d13fdbae4430fa36fc62c2c7f08b3b2d8b32', class: { 'upload__img--invisible': true, 'upload__img--visible': this.hover }, src: background })), h("input", { key: 'c176470c040b0e07895a7d84b62c75c26eb77331', ref: this.refInputElement, type: "file", name: "files[]", id: "file", class: "upload__input", multiple: this.multiple, accept: this.internalAccepts.length > 0 ? this.internalAccepts.toString() : this.accept, onChange: ($event) => this.onUploadClick($event.target.files), "data-test": this.dtInputFiles }))));
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
            },
            "showListPreview": {
                "type": "boolean",
                "attribute": "show-list-preview",
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
                    "text": "Used to show or hide the file list preview."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
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
                    "original": "{ value: File[] }",
                    "resolved": "{ value: File[]; }",
                    "references": {
                        "File": {
                            "location": "global",
                            "id": "global::File"
                        }
                    }
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
                    "original": "{ value: File[] }",
                    "resolved": "{ value: File[]; }",
                    "references": {
                        "File": {
                            "location": "global",
                            "id": "global::File"
                        }
                    }
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
