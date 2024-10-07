'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6a53aecf.js');

const ptTerms = [
  {
    uploaded: 'Arquivos enviados',
    dropHere: 'Solte aqui para anexar o arquivo',
    dropOrClick: 'Arraste e solte seus arquivos aqui ou clique para fazer upload do arquivo',
  },
];

const esTerms = [
  {
    uploaded: 'Archivos subidos',
    dropHere: 'Soltar aquí para adjuntar archivo',
    dropOrClick: 'Arrastre y suelte sus archivos aquí o haga clic para cargar el archivo',
  },
];

const enTerms = [
  {
    uploaded: 'Files uploaded',
    dropHere: 'Drop here to attach file',
    dropOrClick: 'Drag and drop your files here or click to upload file',
  },
];

const termTranslate = (lang, string) => {
  let translate;
  switch (lang) {
    case 'pt_BR':
      translate = ptTerms.map((term) => term[string]);
      break;
    case 'es_ES':
      translate = esTerms.map((term) => term[string]);
      break;
    case 'en_US':
      translate = enTerms.map((term) => term[string]);
      break;
    default:
      translate = ptTerms.map((term) => term[string]);
  }
  return translate;
};

const patternSvg = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzg0IiBoZWlnaHQ9IjgwIiB2aWV3Qm94PSIwIDAgMzg0IDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzM3ODhfMjE1NjQwKSI+DQo8bGluZSB4MT0iLTEwLjk3NjciIHkxPSI3NC4zODQzIiB4Mj0iMjIuNzc3OCIgeTI9IjUuMTc3MTkiIHN0cm9rZT0iI0U3RURGNCIvPg0KPGxpbmUgeDE9IjIyLjc3NzciIHkxPSI3NC4zODQzIiB4Mj0iNTYuNTMyMiIgeTI9IjUuMTc3MTkiIHN0cm9rZT0iI0U3RURGNCIvPg0KPGxpbmUgeDE9IjU2LjUzMiIgeTE9Ijc0LjM4NDMiIHgyPSI5MC4yODY2IiB5Mj0iNS4xNzcxOSIgc3Ryb2tlPSIjRTdFREY0Ii8+DQo8bGluZSB4MT0iOTAuMjg2OSIgeTE9Ijc0LjM4NDMiIHgyPSIxMjQuMDQyIiB5Mj0iNS4xNzcxOSIgc3Ryb2tlPSIjRTdFREY0Ii8+DQo8bGluZSB4MT0iMTI0LjA0MSIgeTE9Ijc0LjM4NDMiIHgyPSIxNTcuNzk2IiB5Mj0iNS4xNzcxOSIgc3Ryb2tlPSIjRTdFREY0Ii8+DQo8bGluZSB4MT0iMTU3Ljc5NiIgeTE9Ijc0LjM4NDMiIHgyPSIxOTEuNTUxIiB5Mj0iNS4xNzcxOSIgc3Ryb2tlPSIjRTdFREY0Ii8+DQo8bGluZSB4MT0iMTkxLjU1MSIgeTE9Ijc0LjM4NDMiIHgyPSIyMjUuMzA1IiB5Mj0iNS4xNzcxOSIgc3Ryb2tlPSIjRTdFREY0Ii8+DQo8bGluZSB4MT0iMjI1LjMwNSIgeTE9Ijc0LjM4NDMiIHgyPSIyNTkuMDYiIHkyPSI1LjE3NzE5IiBzdHJva2U9IiNFN0VERjQiLz4NCjxsaW5lIHgxPSIyNTkuMDYiIHkxPSI3NC4zODQzIiB4Mj0iMjkyLjgxNCIgeTI9IjUuMTc3MTkiIHN0cm9rZT0iI0U3RURGNCIvPg0KPGxpbmUgeDE9IjI5Mi44MTQiIHkxPSI3NC4zODQzIiB4Mj0iMzI2LjU2OSIgeTI9IjUuMTc3MTkiIHN0cm9rZT0iI0U3RURGNCIvPg0KPGxpbmUgeDE9IjMyNi41NjkiIHkxPSI3NC4zODQzIiB4Mj0iMzYwLjMyMyIgeTI9IjUuMTc3MTkiIHN0cm9rZT0iI0U3RURGNCIvPg0KPGxpbmUgeDE9IjM2MC4zMjQiIHkxPSI3NC4zODQzIiB4Mj0iMzk0LjA3OCIgeTI9IjUuMTc3MTkiIHN0cm9rZT0iI0U3RURGNCIvPg0KPC9nPg0KPGRlZnM+DQo8Y2xpcFBhdGggaWQ9ImNsaXAwXzM3ODhfMjE1NjQwIj4NCjxyZWN0IHdpZHRoPSIzODQiIGhlaWdodD0iODAiIGZpbGw9IndoaXRlIi8+DQo8L2NsaXBQYXRoPg0KPC9kZWZzPg0KPC9zdmc+DQo=';

const bdsUploadCss = ".upload{min-width:400px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:16px}.upload .upload-header{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-align:center;align-items:center;gap:8px;color:var(--color-content-default, #454545)}.upload .upload-header_text{color:var(--color-content-default, #454545);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.upload__edit--label{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;border:1px solid var(--color-border-1, #c9c9c9);border-radius:8px;cursor:pointer;font-weight:normal;-webkit-box-sizing:border-box;box-sizing:border-box;padding:23px 16px;position:relative}.upload__edit--label::before{content:\"\";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px}.upload__edit--label:focus-visible{outline:none}.upload__edit--label:focus-visible::before{border-color:var(--color-focus, #c226fb)}.upload__edit--label .upload__img--visible{display:-ms-flexbox;display:flex;width:100%;height:100%;border-radius:8px;position:absolute;background-color:var(--color-surface-2, #e0e0e0);z-index:1}.upload__edit--label .text-box{display:-ms-flexbox;display:flex;padding:8px;width:100%;text-align:center;z-index:2}.upload__edit--label .text-box .text{color:var(--color-content-default, #454545);width:100%;-ms-flex-wrap:wrap;flex-wrap:wrap}.upload__edit--label .text-box--hover{background-color:var(--color-surface-2, #e0e0e0)}.upload__edit--label .text-box--hover .text{color:var(--color-primary, #1e6bf1)}.upload__edit--label:hover{border:2px solid var(--color-primary, #1e6bf1);-webkit-box-sizing:border-box;box-sizing:border-box;padding:22px 16px;cursor:pointer;-webkit-text-decoration:underline var(--color-primary, #1e6bf1);text-decoration:underline var(--color-primary, #1e6bf1);color:var(--color-brand, #0096fa)}.upload__edit--label:hover .text{color:var(--color-primary, #1e6bf1)}.upload__edit--hover{background-size:cover;border:1px dashed var(--color-surface-4, #141414);color:var(--color-primary, #1e6bf1);font-weight:bold;border-radius:8px}.upload__img--invisible{display:none}.list-preview{border-top:1px solid var(--color-border-1, #c9c9c9);border-bottom:1px solid var(--color-border-1, #c9c9c9);max-height:200px;overflow-y:auto}.upload__preview{-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;padding:16px 0}.upload__preview .preview{display:-ms-flexbox;display:flex;padding:0 16px;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;gap:8px}.upload__preview .preview-text{font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-size:0.875rem;font-weight:700;margin:0;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;width:100%;color:var(--color-content-default, #454545)}.upload__preview .preview-icon{color:var(--color-content-default, #454545)}.upload__preview .preview-icon:hover{cursor:pointer}.preview-length{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:end;padding-top:16px;text-align:end}.upload__edit input{position:absolute;left:0;top:0;right:0;bottom:0;opacity:0;width:0;height:100%}";

const BdsUpload = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.bdsUploadDelete = index.createEvent(this, "bdsUploadDelete", 7);
    this.bdsUploadChange = index.createEvent(this, "bdsUploadChange", 7);
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
    return (index.h("div", { class: "upload" }, index.h("div", { class: "upload-header" }, index.h("bds-icon", { class: "upload-header_icon", size: "xxx-large", name: "upload" }), index.h("div", { class: "upload-header_text" }, index.h("bds-typo", { variant: "fs-16", bold: "bold", "aria-label": this.titleName }, this.titleName), index.h("bds-typo", { variant: "fs-14", bold: "regular", "aria-label": this.subtitle }, this.subtitle))), this.error ? (index.h("bds-banner", { context: "inside", variant: "error", "aria-label": this.error }, this.error)) : (''), this.haveFiles ? (index.h("div", null, index.h("div", { class: "list-preview" }, this.files.map((names, index$1) => (index.h("div", { class: "upload__preview", key: index$1, id: "drop-area" }, index.h("div", { class: "preview", id: "preview" }, index.h("bds-icon", { size: "x-small", name: "attach" }), index.h("p", { class: "preview-text", id: "preview-text", "aria-label": names.name }, names.name), index.h("bds-button-icon", { class: "preview-icon", size: "short", icon: "trash", variant: "secondary", onClick: () => this.deleteFile(index$1), "aria-label": `delete ${names.name}`, "data-test": `${this.dtButtonDelete}-${index$1}` })))))), this.multiple ? (index.h("bds-typo", { variant: "fs-14", italic: true, class: "preview-length", "aria-label": termTranslate(this.language, 'uploaded') }, this.files.length > 1 ? `${this.files.length} ${termTranslate(this.language, 'uploaded')}` : '')) : (''))) : (''), index.h("div", { class: { upload__edit: true } }, index.h("label", { class: { 'upload__edit--label': true, 'upload__edit--hover': this.hover }, id: "file-label", htmlFor: "file", "data-test": this.dtLabelAddFile, tabindex: "0", onKeyDown: this.handleKeyDown.bind(this) }, index.h("div", { class: { 'text-box': true, 'text-box--hover': this.hover }, id: "file-text_box" }, this.hover ? (index.h("bds-typo", { class: "text", variant: "fs-14", bold: "regular", "aria-label": termTranslate(this.language, 'dropHere') }, termTranslate(this.language, 'dropHere'))) : (index.h("bds-typo", { class: "text", variant: "fs-14", bold: "regular", "aria-label": termTranslate(this.language, 'dropOrClick') }, termTranslate(this.language, 'dropOrClick')))), index.h("img", { class: { 'upload__img--invisible': true, 'upload__img--visible': this.hover }, src: patternSvg })), index.h("input", { ref: this.refInputElement, type: "file", name: "files[]", id: "file", class: "upload__input", multiple: this.multiple, accept: this.accept, onChange: ($event) => this.onUploadClick($event.target.files), "data-test": this.dtInputFiles }))));
  }
  get dropArea() { return index.getElement(this); }
};
BdsUpload.style = bdsUploadCss;

exports.bds_upload = BdsUpload;
