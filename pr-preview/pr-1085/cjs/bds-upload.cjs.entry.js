'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6a53aecf.js');

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

const patternSvg = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzg0IiBoZWlnaHQ9IjgwIiB2aWV3Qm94PSIwIDAgMzg0IDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMzc4OF8yMTU2NDApIj4KPGxpbmUgeDE9Ii0xMC45NzY3IiB5MT0iNzQuMzg0MyIgeDI9IjIyLjc3NzgiIHkyPSI1LjE3NzE5IiBzdHJva2U9IiNFN0VERjQiLz4KPGxpbmUgeDE9IjIyLjc3NzciIHkxPSI3NC4zODQzIiB4Mj0iNTYuNTMyMiIgeTI9IjUuMTc3MTkiIHN0cm9rZT0iI0U3RURGNCIvPgo8bGluZSB4MT0iNTYuNTMyIiB5MT0iNzQuMzg0MyIgeDI9IjkwLjI4NjYiIHkyPSI1LjE3NzE5IiBzdHJva2U9IiNFN0VERjQiLz4KPGxpbmUgeDE9IjkwLjI4NjkiIHkxPSI3NC4zODQzIiB4Mj0iMTI0LjA0MiIgeTI9IjUuMTc3MTkiIHN0cm9rZT0iI0U3RURGNCIvPgo8bGluZSB4MT0iMTI0LjA0MSIgeTE9Ijc0LjM4NDMiIHgyPSIxNTcuNzk2IiB5Mj0iNS4xNzcxOSIgc3Ryb2tlPSIjRTdFREY0Ii8+CjxsaW5lIHgxPSIxNTcuNzk2IiB5MT0iNzQuMzg0MyIgeDI9IjE5MS41NTEiIHkyPSI1LjE3NzE5IiBzdHJva2U9IiNFN0VERjQiLz4KPGxpbmUgeDE9IjE5MS41NTEiIHkxPSI3NC4zODQzIiB4Mj0iMjI1LjMwNSIgeTI9IjUuMTc3MTkiIHN0cm9rZT0iI0U3RURGNCIvPgo8bGluZSB4MT0iMjI1LjMwNSIgeTE9Ijc0LjM4NDMiIHgyPSIyNTkuMDYiIHkyPSI1LjE3NzE5IiBzdHJva2U9IiNFN0VERjQiLz4KPGxpbmUgeDE9IjI1OS4wNiIgeTE9Ijc0LjM4NDMiIHgyPSIyOTIuODE0IiB5Mj0iNS4xNzcxOSIgc3Ryb2tlPSIjRTdFREY0Ii8+CjxsaW5lIHgxPSIyOTIuODE0IiB5MT0iNzQuMzg0MyIgeDI9IjMyNi41NjkiIHkyPSI1LjE3NzE5IiBzdHJva2U9IiNFN0VERjQiLz4KPGxpbmUgeDE9IjMyNi41NjkiIHkxPSI3NC4zODQzIiB4Mj0iMzYwLjMyMyIgeTI9IjUuMTc3MTkiIHN0cm9rZT0iI0U3RURGNCIvPgo8bGluZSB4MT0iMzYwLjMyNCIgeTE9Ijc0LjM4NDMiIHgyPSIzOTQuMDc4IiB5Mj0iNS4xNzcxOSIgc3Ryb2tlPSIjRTdFREY0Ii8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMzc4OF8yMTU2NDAiPgo8cmVjdCB3aWR0aD0iMzg0IiBoZWlnaHQ9IjgwIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=';

const bdsUploadCss = ":root{--space-0:0px;--space-0-5:4px;--space-1:8px;--space-2:16px;--space-3:24px;--space-4:32px;--space-5:40px;--space-6:48px;--space-7:56px;--space-8:64px;--space-9:72px;--space-10:80px;--space-11:88px;--space-12:96px}.m-0{margin:var(--space-0) !important}.m-0\\.5{margin:var(--space-0-5) !important}.m-1{margin:var(--space-1) !important}.m-2{margin:var(--space-2) !important}.m-3{margin:var(--space-3) !important}.m-4{margin:var(--space-4) !important}.m-5{margin:var(--space-5) !important}.m-6{margin:var(--space-6) !important}.m-7{margin:var(--space-7) !important}.m-8{margin:var(--space-8) !important}.m-9{margin:var(--space-9) !important}.m-10{margin:var(--space-10) !important}.m-11{margin:var(--space-11) !important}.m-12{margin:var(--space-12) !important}.mx-0{margin-left:var(--space-0) !important;margin-right:var(--space-0) !important}.mx-0\\.5{margin-left:var(--space-0-5) !important;margin-right:var(--space-0-5) !important}.mx-1{margin-left:var(--space-1) !important;margin-right:var(--space-1) !important}.mx-2{margin-left:var(--space-2) !important;margin-right:var(--space-2) !important}.mx-3{margin-left:var(--space-3) !important;margin-right:var(--space-3) !important}.mx-4{margin-left:var(--space-4) !important;margin-right:var(--space-4) !important}.mx-5{margin-left:var(--space-5) !important;margin-right:var(--space-5) !important}.mx-6{margin-left:var(--space-6) !important;margin-right:var(--space-6) !important}.mx-7{margin-left:var(--space-7) !important;margin-right:var(--space-7) !important}.mx-8{margin-left:var(--space-8) !important;margin-right:var(--space-8) !important}.mx-9{margin-left:var(--space-9) !important;margin-right:var(--space-9) !important}.mx-10{margin-left:var(--space-10) !important;margin-right:var(--space-10) !important}.mx-11{margin-left:var(--space-11) !important;margin-right:var(--space-11) !important}.mx-12{margin-left:var(--space-12) !important;margin-right:var(--space-12) !important}.my-0{margin-top:var(--space-0) !important;margin-bottom:var(--space-0) !important}.my-0\\.5{margin-top:var(--space-0-5) !important;margin-bottom:var(--space-0-5) !important}.my-1{margin-top:var(--space-1) !important;margin-bottom:var(--space-1) !important}.my-2{margin-top:var(--space-2) !important;margin-bottom:var(--space-2) !important}.my-3{margin-top:var(--space-3) !important;margin-bottom:var(--space-3) !important}.my-4{margin-top:var(--space-4) !important;margin-bottom:var(--space-4) !important}.my-5{margin-top:var(--space-5) !important;margin-bottom:var(--space-5) !important}.my-6{margin-top:var(--space-6) !important;margin-bottom:var(--space-6) !important}.my-7{margin-top:var(--space-7) !important;margin-bottom:var(--space-7) !important}.my-8{margin-top:var(--space-8) !important;margin-bottom:var(--space-8) !important}.my-9{margin-top:var(--space-9) !important;margin-bottom:var(--space-9) !important}.my-10{margin-top:var(--space-10) !important;margin-bottom:var(--space-10) !important}.my-11{margin-top:var(--space-11) !important;margin-bottom:var(--space-11) !important}.my-12{margin-top:var(--space-12) !important;margin-bottom:var(--space-12) !important}.mt-0{margin-top:var(--space-0) !important}.mt-0\\.5{margin-top:var(--space-0-5) !important}.mt-1{margin-top:var(--space-1) !important}.mt-2{margin-top:var(--space-2) !important}.mt-3{margin-top:var(--space-3) !important}.mt-4{margin-top:var(--space-4) !important}.mt-5{margin-top:var(--space-5) !important}.mt-6{margin-top:var(--space-6) !important}.mt-7{margin-top:var(--space-7) !important}.mt-8{margin-top:var(--space-8) !important}.mt-9{margin-top:var(--space-9) !important}.mt-10{margin-top:var(--space-10) !important}.mt-11{margin-top:var(--space-11) !important}.mt-12{margin-top:var(--space-12) !important}.mr-0{margin-right:var(--space-0) !important}.mr-0\\.5{margin-right:var(--space-0-5) !important}.mr-1{margin-right:var(--space-1) !important}.mr-2{margin-right:var(--space-2) !important}.mr-3{margin-right:var(--space-3) !important}.mr-4{margin-right:var(--space-4) !important}.mr-5{margin-right:var(--space-5) !important}.mr-6{margin-right:var(--space-6) !important}.mr-7{margin-right:var(--space-7) !important}.mr-8{margin-right:var(--space-8) !important}.mr-9{margin-right:var(--space-9) !important}.mr-10{margin-right:var(--space-10) !important}.mr-11{margin-right:var(--space-11) !important}.mr-12{margin-right:var(--space-12) !important}.mb-0{margin-bottom:var(--space-0) !important}.mb-0\\.5{margin-bottom:var(--space-0-5) !important}.mb-1{margin-bottom:var(--space-1) !important}.mb-2{margin-bottom:var(--space-2) !important}.mb-3{margin-bottom:var(--space-3) !important}.mb-4{margin-bottom:var(--space-4) !important}.mb-5{margin-bottom:var(--space-5) !important}.mb-6{margin-bottom:var(--space-6) !important}.mb-7{margin-bottom:var(--space-7) !important}.mb-8{margin-bottom:var(--space-8) !important}.mb-9{margin-bottom:var(--space-9) !important}.mb-10{margin-bottom:var(--space-10) !important}.mb-11{margin-bottom:var(--space-11) !important}.mb-12{margin-bottom:var(--space-12) !important}.ml-0{margin-left:var(--space-0) !important}.ml-0\\.5{margin-left:var(--space-0-5) !important}.ml-1{margin-left:var(--space-1) !important}.ml-2{margin-left:var(--space-2) !important}.ml-3{margin-left:var(--space-3) !important}.ml-4{margin-left:var(--space-4) !important}.ml-5{margin-left:var(--space-5) !important}.ml-6{margin-left:var(--space-6) !important}.ml-7{margin-left:var(--space-7) !important}.ml-8{margin-left:var(--space-8) !important}.ml-9{margin-left:var(--space-9) !important}.ml-10{margin-left:var(--space-10) !important}.ml-11{margin-left:var(--space-11) !important}.ml-12{margin-left:var(--space-12) !important}.p-0{padding:var(--space-0) !important}.p-0\\.5{padding:var(--space-0-5) !important}.p-1{padding:var(--space-1) !important}.p-2{padding:var(--space-2) !important}.p-3{padding:var(--space-3) !important}.p-4{padding:var(--space-4) !important}.p-5{padding:var(--space-5) !important}.p-6{padding:var(--space-6) !important}.p-7{padding:var(--space-7) !important}.p-8{padding:var(--space-8) !important}.p-9{padding:var(--space-9) !important}.p-10{padding:var(--space-10) !important}.p-11{padding:var(--space-11) !important}.p-12{padding:var(--space-12) !important}.px-0{padding-left:var(--space-0) !important;padding-right:var(--space-0) !important}.px-0\\.5{padding-left:var(--space-0-5) !important;padding-right:var(--space-0-5) !important}.px-1{padding-left:var(--space-1) !important;padding-right:var(--space-1) !important}.px-2{padding-left:var(--space-2) !important;padding-right:var(--space-2) !important}.px-3{padding-left:var(--space-3) !important;padding-right:var(--space-3) !important}.px-4{padding-left:var(--space-4) !important;padding-right:var(--space-4) !important}.px-5{padding-left:var(--space-5) !important;padding-right:var(--space-5) !important}.px-6{padding-left:var(--space-6) !important;padding-right:var(--space-6) !important}.px-7{padding-left:var(--space-7) !important;padding-right:var(--space-7) !important}.px-8{padding-left:var(--space-8) !important;padding-right:var(--space-8) !important}.px-9{padding-left:var(--space-9) !important;padding-right:var(--space-9) !important}.px-10{padding-left:var(--space-10) !important;padding-right:var(--space-10) !important}.px-11{padding-left:var(--space-11) !important;padding-right:var(--space-11) !important}.px-12{padding-left:var(--space-12) !important;padding-right:var(--space-12) !important}.py-0{padding-top:var(--space-0) !important;padding-bottom:var(--space-0) !important}.py-0\\.5{padding-top:var(--space-0-5) !important;padding-bottom:var(--space-0-5) !important}.py-1{padding-top:var(--space-1) !important;padding-bottom:var(--space-1) !important}.py-2{padding-top:var(--space-2) !important;padding-bottom:var(--space-2) !important}.py-3{padding-top:var(--space-3) !important;padding-bottom:var(--space-3) !important}.py-4{padding-top:var(--space-4) !important;padding-bottom:var(--space-4) !important}.py-5{padding-top:var(--space-5) !important;padding-bottom:var(--space-5) !important}.py-6{padding-top:var(--space-6) !important;padding-bottom:var(--space-6) !important}.py-7{padding-top:var(--space-7) !important;padding-bottom:var(--space-7) !important}.py-8{padding-top:var(--space-8) !important;padding-bottom:var(--space-8) !important}.py-9{padding-top:var(--space-9) !important;padding-bottom:var(--space-9) !important}.py-10{padding-top:var(--space-10) !important;padding-bottom:var(--space-10) !important}.py-11{padding-top:var(--space-11) !important;padding-bottom:var(--space-11) !important}.py-12{padding-top:var(--space-12) !important;padding-bottom:var(--space-12) !important}.pt-0{padding-top:var(--space-0) !important}.pt-0\\.5{padding-top:var(--space-0-5) !important}.pt-1{padding-top:var(--space-1) !important}.pt-2{padding-top:var(--space-2) !important}.pt-3{padding-top:var(--space-3) !important}.pt-4{padding-top:var(--space-4) !important}.pt-5{padding-top:var(--space-5) !important}.pt-6{padding-top:var(--space-6) !important}.pt-7{padding-top:var(--space-7) !important}.pt-8{padding-top:var(--space-8) !important}.pt-9{padding-top:var(--space-9) !important}.pt-10{padding-top:var(--space-10) !important}.pt-11{padding-top:var(--space-11) !important}.pt-12{padding-top:var(--space-12) !important}.pr-0{padding-right:var(--space-0) !important}.pr-0\\.5{padding-right:var(--space-0-5) !important}.pr-1{padding-right:var(--space-1) !important}.pr-2{padding-right:var(--space-2) !important}.pr-3{padding-right:var(--space-3) !important}.pr-4{padding-right:var(--space-4) !important}.pr-5{padding-right:var(--space-5) !important}.pr-6{padding-right:var(--space-6) !important}.pr-7{padding-right:var(--space-7) !important}.pr-8{padding-right:var(--space-8) !important}.pr-9{padding-right:var(--space-9) !important}.pr-10{padding-right:var(--space-10) !important}.pr-11{padding-right:var(--space-11) !important}.pr-12{padding-right:var(--space-12) !important}.pb-0{padding-bottom:var(--space-0) !important}.pb-0\\.5{padding-bottom:var(--space-0-5) !important}.pb-1{padding-bottom:var(--space-1) !important}.pb-2{padding-bottom:var(--space-2) !important}.pb-3{padding-bottom:var(--space-3) !important}.pb-4{padding-bottom:var(--space-4) !important}.pb-5{padding-bottom:var(--space-5) !important}.pb-6{padding-bottom:var(--space-6) !important}.pb-7{padding-bottom:var(--space-7) !important}.pb-8{padding-bottom:var(--space-8) !important}.pb-9{padding-bottom:var(--space-9) !important}.pb-10{padding-bottom:var(--space-10) !important}.pb-11{padding-bottom:var(--space-11) !important}.pb-12{padding-bottom:var(--space-12) !important}.pl-0{padding-left:var(--space-0) !important}.pl-0\\.5{padding-left:var(--space-0-5) !important}.pl-1{padding-left:var(--space-1) !important}.pl-2{padding-left:var(--space-2) !important}.pl-3{padding-left:var(--space-3) !important}.pl-4{padding-left:var(--space-4) !important}.pl-5{padding-left:var(--space-5) !important}.pl-6{padding-left:var(--space-6) !important}.pl-7{padding-left:var(--space-7) !important}.pl-8{padding-left:var(--space-8) !important}.pl-9{padding-left:var(--space-9) !important}.pl-10{padding-left:var(--space-10) !important}.pl-11{padding-left:var(--space-11) !important}.pl-12{padding-left:var(--space-12) !important}.upload{min-width:400px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:16px}.upload .upload-header{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-align:center;align-items:center;gap:8px;color:var(--color-content-default, #282828)}.upload .upload-header_text{color:var(--color-content-default, #282828);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.upload__edit--label{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));border-radius:8px;cursor:pointer;font-weight:normal;-webkit-box-sizing:border-box;box-sizing:border-box;padding:23px 16px;position:relative}.upload__edit--label::before{content:\"\";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px}.upload__edit--label:focus-visible{outline:none}.upload__edit--label:focus-visible::before{border-color:var(--color-focus, #c226fb)}.upload__edit--label .upload__img--visible{display:-ms-flexbox;display:flex;width:100%;height:100%;border-radius:8px;position:absolute;background-color:var(--color-surface-2, #ededed);z-index:1}.upload__edit--label .text-box{display:-ms-flexbox;display:flex;padding:8px;width:100%;text-align:center;z-index:2}.upload__edit--label .text-box .text{color:var(--color-content-default, #282828);width:100%;-ms-flex-wrap:wrap;flex-wrap:wrap}.upload__edit--label .text-box--hover{background-color:var(--color-surface-2, #ededed)}.upload__edit--label .text-box--hover .text{color:var(--color-primary, #1e6bf1)}.upload__edit--label:hover{border:2px solid var(--color-primary, #1e6bf1);-webkit-box-sizing:border-box;box-sizing:border-box;padding:22px 16px;cursor:pointer;-webkit-text-decoration:underline var(--color-primary, #1e6bf1);text-decoration:underline var(--color-primary, #1e6bf1);color:var(--color-brand, #0096fa)}.upload__edit--label:hover .text{color:var(--color-primary, #1e6bf1)}.upload__edit--hover{background-size:cover;border:1px dashed var(--color-surface-4, #141414);color:var(--color-primary, #1e6bf1);font-weight:bold;border-radius:8px}.upload__img--invisible{display:none}.list-preview{border-top:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));border-bottom:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));max-height:200px;overflow-y:auto}.upload__preview{-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;padding:16px 0}.upload__preview .preview{display:-ms-flexbox;display:flex;padding:0 16px;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;gap:8px}.upload__preview .preview-text{font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-size:0.875rem;font-weight:700;margin:0;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;width:100%;color:var(--color-content-default, #282828)}.upload__preview .preview-icon{color:var(--color-content-default, #282828)}.upload__preview .preview-icon:hover{cursor:pointer}.preview-length{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:end;padding-top:16px;text-align:end}.upload__edit input{position:absolute;left:0;top:0;right:0;bottom:0;opacity:0;width:0;height:100%}";

const BdsUpload = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.bdsUploadDelete = index.createEvent(this, "bdsUploadDelete", 7);
    this.bdsUploadChange = index.createEvent(this, "bdsUploadChange", 7);
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
    this.files = [];
    this.haveFiles = false;
    this.hover = false;
    this.background = undefined;
    this.size = [];
    this.internalAccepts = [];
    this.formatError = false;
    this.language = 'pt_BR';
    this.titleName = undefined;
    this.subtitle = undefined;
    this.error = undefined;
    this.multiple = undefined;
    this.accept = undefined;
    this.dataAccept = [];
    this.dtInputFiles = null;
    this.dtLabelAddFile = null;
    this.dtButtonDelete = null;
  }
  dataAcceptChanged() {
    if (this.dataAccept) {
      if (typeof this.dataAccept === 'string') {
        try {
          this.internalAccepts = JSON.parse(this.dataAccept);
        }
        catch {
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
    return (index.h("div", { class: "upload" }, index.h("div", { class: "upload-header" }, index.h("bds-icon", { class: "upload-header_icon", size: "xxx-large", name: "upload" }), index.h("div", { class: "upload-header_text" }, index.h("bds-typo", { variant: "fs-16", bold: "bold", "aria-label": this.titleName }, this.titleName), index.h("bds-typo", { variant: "fs-14", bold: "regular", "aria-label": this.subtitle }, this.subtitle))), this.error ? (index.h("bds-banner", { context: "inside", variant: "error", "aria-label": this.error }, this.error)) : (''), this.haveFiles ? (index.h("div", null, index.h("div", { class: "list-preview" }, this.files.map((names, index$1) => (index.h("div", { class: "upload__preview", key: index$1, id: "drop-area" }, index.h("div", { class: "preview", id: "preview" }, index.h("bds-icon", { size: "x-small", name: "attach" }), index.h("p", { class: "preview-text", id: "preview-text", "aria-label": names.name }, names.name), index.h("bds-button-icon", { class: "preview-icon", size: "short", icon: "trash", variant: "secondary", onClick: () => this.deleteFile(index$1), "aria-label": `delete ${names.name}`, "data-test": `${this.dtButtonDelete}-${index$1}` })))))), this.multiple ? (index.h("bds-typo", { variant: "fs-14", italic: true, class: "preview-length", "aria-label": termTranslate(this.language, 'uploaded') }, this.files.length > 1 ? `${this.files.length} ${termTranslate(this.language, 'uploaded')}` : '')) : (''))) : (''), index.h("div", { class: { upload__edit: true } }, index.h("label", { class: { 'upload__edit--label': true, 'upload__edit--hover': this.hover }, id: "file-label", htmlFor: "file", "data-test": this.dtLabelAddFile, tabindex: "0", onKeyDown: this.handleKeyDown.bind(this) }, index.h("div", { class: { 'text-box': true, 'text-box--hover': this.hover }, id: "file-text_box" }, this.hover ? (index.h("bds-typo", { class: "text", variant: "fs-14", bold: "regular", "aria-label": termTranslate(this.language, 'dropHere') }, termTranslate(this.language, 'dropHere'))) : (index.h("bds-typo", { class: "text", variant: "fs-14", bold: "regular", "aria-label": termTranslate(this.language, 'dropOrClick') }, termTranslate(this.language, 'dropOrClick')))), index.h("img", { class: { 'upload__img--invisible': true, 'upload__img--visible': this.hover }, src: patternSvg })), index.h("input", { ref: this.refInputElement, type: "file", name: "files[]", id: "file", class: "upload__input", multiple: this.multiple, accept: this.internalAccepts.length > 0 ? this.internalAccepts.toString() : this.accept, onChange: ($event) => this.onUploadClick($event.target.files), "data-test": this.dtInputFiles }))));
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
