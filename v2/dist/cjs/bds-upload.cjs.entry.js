'use strict';

var index = require('./index-DQyYkciT.js');
var assetLoader = require('./asset-loader-CbLrcrjb.js');

const ptTerms = [
    {
        uploaded: 'Arquivos enviados',
        dropHere: 'Solte aqui para anexar o arquivo',
        dropOrClick: 'Arraste e solte seus arquivos aqui ou clique para fazer upload do arquivo',
        formatError: 'Ocorreu um erro ao anexar o arquivo, tente novamente ou selecione outro arquivo',
    },
];

const esTerms = [
    {
        uploaded: 'Archivos subidos',
        dropHere: 'Soltar aquí para adjuntar archivo',
        dropOrClick: 'Arrastre y suelte sus archivos aquí o haga clic para cargar el archivo',
        formatError: 'Se produjo un error al adjuntar el archivo, inténtelo nuevamente o seleccione otro archivo',
    },
];

const enTerms = [
    {
        uploaded: 'Files uploaded',
        dropHere: 'Drop here to attach file',
        dropOrClick: 'Drag and drop your files here or click to upload file',
        formatError: 'There was an error attaching the file, please try again or select another file',
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

const bdsUploadCss = ".upload{min-width:400px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:16px}.upload .upload-header{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-align:center;align-items:center;gap:8px;color:var(--color-content-default, rgb(40, 40, 40))}.upload .upload-header_text{color:var(--color-content-default, rgb(40, 40, 40));display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.upload__edit--label{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));border-radius:8px;cursor:pointer;font-weight:normal;-webkit-box-sizing:border-box;box-sizing:border-box;padding:23px 16px;position:relative}.upload__edit--label::before{content:\"\";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px}.upload__edit--label:focus-visible{outline:none}.upload__edit--label:focus-visible::before{border-color:var(--color-focus, rgb(194, 38, 251))}.upload__edit--label .upload__img--visible{display:-ms-flexbox;display:flex;width:100%;height:100%;border-radius:8px;position:absolute;background-color:var(--color-surface-2, rgb(237, 237, 237));z-index:1}.upload__edit--label .text-box{display:-ms-flexbox;display:flex;padding:8px;width:100%;text-align:center;z-index:2}.upload__edit--label .text-box .text{color:var(--color-content-default, rgb(40, 40, 40));width:100%;-ms-flex-wrap:wrap;flex-wrap:wrap}.upload__edit--label .text-box--hover{background-color:var(--color-surface-2, rgb(237, 237, 237))}.upload__edit--label .text-box--hover .text{color:var(--color-primary, rgb(30, 107, 241))}.upload__edit--label:hover{border:2px solid var(--color-primary, rgb(30, 107, 241));-webkit-box-sizing:border-box;box-sizing:border-box;padding:22px 16px;cursor:pointer;-webkit-text-decoration:underline var(--color-primary, rgb(30, 107, 241));text-decoration:underline var(--color-primary, rgb(30, 107, 241));color:var(--color-brand, rgb(0, 150, 250))}.upload__edit--label:hover .text{color:var(--color-primary, rgb(30, 107, 241))}.upload__edit--hover{background-size:cover;border:1px dashed var(--color-surface-4, rgb(20, 20, 20));color:var(--color-primary, rgb(30, 107, 241));font-weight:bold;border-radius:8px}.upload__img--invisible{display:none}.list-preview{border-top:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));border-bottom:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));max-height:200px;overflow-y:auto}.upload__preview{-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;padding:16px 0}.upload__preview .preview{display:-ms-flexbox;display:flex;padding:0 16px;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;gap:8px}.upload__preview .preview-text{font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-size:0.875rem;font-weight:700;margin:0;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;width:100%;color:var(--color-content-default, rgb(40, 40, 40))}.upload__preview .preview-icon{color:var(--color-content-default, rgb(40, 40, 40))}.upload__preview .preview-icon:hover{cursor:pointer}.preview-length{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:end;padding-top:16px;text-align:end}.upload__edit input{position:absolute;left:0;top:0;right:0;bottom:0;opacity:0;width:0;height:100%}";

const BdsUpload = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bdsUploadDelete = index.createEvent(this, "bdsUploadDelete");
        this.bdsUploadChange = index.createEvent(this, "bdsUploadChange");
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
         * Used to show or hide the list preview of uploaded files.
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
        return (index.h("div", { key: 'ccfba8b5b8058523952eff92e900b2e47da5e92a', class: "upload" }, index.h("div", { key: '25eda2ed313d45de310ab10de5979320dd7aefec', class: "upload-header" }, index.h("bds-icon", { key: 'a9c42f7946d9c7064e7f31dc0f91cfd048ca097c', class: "upload-header_icon", size: "xxx-large", name: "upload" }), index.h("div", { key: 'c6522a2041be447f5de60ffce89be29d39540f72', class: "upload-header_text" }, index.h("bds-typo", { key: 'a1e06d14038dba1721b7c6aecee005abd1bc4f0e', variant: "fs-16", bold: "bold", "aria-label": this.titleName }, this.titleName), index.h("bds-typo", { key: '3b0e1f414998de7b965a5a4c728827fa3e4a8f19', variant: "fs-14", bold: "regular", "aria-label": this.subtitle }, this.subtitle))), this.error ? (index.h("bds-banner", { context: "inside", variant: "error", "aria-label": this.error }, this.error)) : (''), this.haveFiles && this.showListPreview ? (index.h("div", null, index.h("div", { class: "list-preview" }, this.files.map((names, index$1) => (index.h("div", { class: "upload__preview", key: index$1, id: "drop-area" }, index.h("div", { class: "preview", id: "preview" }, index.h("bds-icon", { size: "x-small", name: "attach" }), index.h("p", { class: "preview-text", id: "preview-text", "aria-label": names.name }, names.name), index.h("bds-button-icon", { class: "preview-icon", size: "short", icon: "trash", variant: "secondary", onClick: () => this.deleteFile(index$1), "aria-label": `delete ${names.name}`, "data-test": `${this.dtButtonDelete}-${index$1}` })))))), this.multiple ? (index.h("bds-typo", { variant: "fs-14", italic: true, class: "preview-length", "aria-label": termTranslate(this.language, 'uploaded') }, this.files.length > 1 ? `${this.files.length} ${termTranslate(this.language, 'uploaded')}` : '')) : (''))) : (''), index.h("div", { key: '3116869b9d53a13c322c3baba0174328275f82ec', class: { upload__edit: true } }, index.h("label", { key: '817ed8632d61d6eed99138712332837a0022e472', class: { 'upload__edit--label': true, 'upload__edit--hover': this.hover }, id: "file-label", htmlFor: "file", "data-test": this.dtLabelAddFile, tabindex: "0", onKeyDown: this.handleKeyDown.bind(this) }, index.h("div", { key: 'd9c48b3a07b587833bcea0f56cbeb33fa86e78dd', class: { 'text-box': true, 'text-box--hover': this.hover }, id: "file-text_box" }, this.hover ? (index.h("bds-typo", { class: "text", variant: "fs-14", bold: "regular", "aria-label": termTranslate(this.language, 'dropHere') }, termTranslate(this.language, 'dropHere'))) : (index.h("bds-typo", { class: "text", variant: "fs-14", bold: "regular", "aria-label": termTranslate(this.language, 'dropOrClick') }, termTranslate(this.language, 'dropOrClick')))), index.h("img", { key: '095f9651ce324e2b66f16a10dd9cc3f9f9bf1142', class: { 'upload__img--invisible': true, 'upload__img--visible': this.hover }, src: assetLoader.getAssetUrl('asset-component-upload-pattern') })), index.h("input", { key: 'da8d39b6ca9c122f66b41c33ec6c251518ad74f3', ref: this.refInputElement, type: "file", name: "files[]", id: "file", class: "upload__input", multiple: this.multiple, accept: this.internalAccepts.length > 0 ? this.internalAccepts.toString() : this.accept, onChange: ($event) => this.onUploadClick($event.target.files), "data-test": this.dtInputFiles }))));
    }
    get dropArea() { return index.getElement(this); }
    static get watchers() { return {
        "dataAccept": ["dataAcceptChanged"],
        "files": ["filesChanged"],
        "formatError": ["formatErrorChanged"]
    }; }
};
BdsUpload.style = bdsUploadCss;

exports.bds_upload = BdsUpload;
//# sourceMappingURL=bds-upload.entry.cjs.js.map

//# sourceMappingURL=bds-upload.cjs.entry.js.map