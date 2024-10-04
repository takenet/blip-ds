import { h } from '@stencil/core';
import { termTranslate } from './languages';
import background from '../../assets/svg/pattern.svg';
export class BdsUpload {
  constructor() {
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
    this.files = [];
    this.haveFiles = false;
    this.hover = false;
    this.background = undefined;
    this.size = [];
    this.language = 'pt_BR';
    this.titleName = undefined;
    this.subtitle = undefined;
    this.error = undefined;
    this.multiple = undefined;
    this.accept = undefined;
    this.dtInputFiles = null;
    this.dtLabelAddFile = null;
    this.dtButtonDelete = null;
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
    return (h("div", { class: "upload" }, h("div", { class: "upload-header" }, h("bds-icon", { class: "upload-header_icon", size: "xxx-large", name: "upload" }), h("div", { class: "upload-header_text" }, h("bds-typo", { variant: "fs-16", bold: "bold", "aria-label": this.titleName }, this.titleName), h("bds-typo", { variant: "fs-14", bold: "regular", "aria-label": this.subtitle }, this.subtitle))), this.error ? (h("bds-banner", { context: "inside", variant: "error", "aria-label": this.error }, this.error)) : (''), this.haveFiles ? (h("div", null, h("div", { class: "list-preview" }, this.files.map((names, index) => (h("div", { class: "upload__preview", key: index, id: "drop-area" }, h("div", { class: "preview", id: "preview" }, h("bds-icon", { size: "x-small", name: "attach" }), h("p", { class: "preview-text", id: "preview-text", "aria-label": names.name }, names.name), h("bds-button-icon", { class: "preview-icon", size: "short", icon: "trash", variant: "secondary", onClick: () => this.deleteFile(index), "aria-label": `delete ${names.name}`, "data-test": `${this.dtButtonDelete}-${index}` })))))), this.multiple ? (h("bds-typo", { variant: "fs-14", italic: true, class: "preview-length", "aria-label": termTranslate(this.language, 'uploaded') }, this.files.length > 1 ? `${this.files.length} ${termTranslate(this.language, 'uploaded')}` : '')) : (''))) : (''), h("div", { class: { upload__edit: true } }, h("label", { class: { 'upload__edit--label': true, 'upload__edit--hover': this.hover }, id: "file-label", htmlFor: "file", "data-test": this.dtLabelAddFile, tabindex: "0", onKeyDown: this.handleKeyDown.bind(this) }, h("div", { class: { 'text-box': true, 'text-box--hover': this.hover }, id: "file-text_box" }, this.hover ? (h("bds-typo", { class: "text", variant: "fs-14", bold: "regular", "aria-label": termTranslate(this.language, 'dropHere') }, termTranslate(this.language, 'dropHere'))) : (h("bds-typo", { class: "text", variant: "fs-14", bold: "regular", "aria-label": termTranslate(this.language, 'dropOrClick') }, termTranslate(this.language, 'dropOrClick')))), h("img", { class: { 'upload__img--invisible': true, 'upload__img--visible': this.hover }, src: background })), h("input", { ref: this.refInputElement, type: "file", name: "files[]", id: "file", class: "upload__input", multiple: this.multiple, accept: this.accept, onChange: ($event) => this.onUploadClick($event.target.files), "data-test": this.dtInputFiles }))));
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
        "mutable": false,
        "complexType": {
          "original": "languages",
          "resolved": "\"en_US\" | \"es_ES\" | \"pt_BR\"",
          "references": {
            "languages": {
              "location": "import",
              "path": "./languages"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Set the language for fixed texts."
        },
        "attribute": "language",
        "reflect": false,
        "defaultValue": "'pt_BR'"
      },
      "titleName": {
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
          "text": "Used for add a text on title."
        },
        "attribute": "title-name",
        "reflect": false
      },
      "subtitle": {
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
          "text": "Used for add a text on subtitle."
        },
        "attribute": "subtitle",
        "reflect": false
      },
      "error": {
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
          "text": "Used for add a error message. In case a verify."
        },
        "attribute": "error",
        "reflect": false
      },
      "multiple": {
        "type": "boolean",
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
        "attribute": "multiple",
        "reflect": false
      },
      "accept": {
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
          "text": "Used to accept a especific type of file."
        },
        "attribute": "accept",
        "reflect": false
      },
      "dtInputFiles": {
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
          "text": "Data test is the prop to specifically test the component action object.\r\ndtInputFiles is the data-test to button clear."
        },
        "attribute": "dt-input-files",
        "reflect": false,
        "defaultValue": "null"
      },
      "dtLabelAddFile": {
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
          "text": "Data test is the prop to specifically test the component action object.\r\ndtLabelAddFile is the data-test to button clear."
        },
        "attribute": "dt-label-add-file",
        "reflect": false,
        "defaultValue": "null"
      },
      "dtButtonDelete": {
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
          "text": "Data test is the prop to specifically test the component action object.\r\ndtButtonDelete is the data-test to button clear."
        },
        "attribute": "dt-button-delete",
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
      "size": {}
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
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
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
              "location": "global"
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
}
