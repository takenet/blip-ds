"use strict";(self.webpackChunkblip_ds=self.webpackChunkblip_ds||[]).push([[4136],{"./dist/esm/bds-upload.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{bds_upload:()=>BdsUpload});var _index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-611fd21e.js");const ptTerms=[{uploaded:"Arquivos enviados",dropHere:"Solte aqui para anexar o arquivo",dropOrClick:"Arraste e solte seus arquivos aqui ou clique para fazer upload do arquivo",formatError:"Ocorreu um erro ao anexar o arquivo, tente novamente ou selecione outro arquivo"}],esTerms=[{uploaded:"Archivos subidos",dropHere:"Soltar aquí para adjuntar archivo",dropOrClick:"Arrastre y suelte sus archivos aquí o haga clic para cargar el archivo",formatError:"Se produjo un error al adjuntar el archivo, inténtelo nuevamente o seleccione otro archivo"}],enTerms=[{uploaded:"Files uploaded",dropHere:"Drop here to attach file",dropOrClick:"Drag and drop your files here or click to upload file",formatError:"There was an error attaching the file, please try again or select another file"}],termTranslate=(lang,string)=>{let translate;switch(lang){case"pt_BR":default:translate=ptTerms.map((term=>term[string]));break;case"es_ES":translate=esTerms.map((term=>term[string]));break;case"en_US":translate=enTerms.map((term=>term[string]))}return translate},BdsUpload=class{constructor(hostRef){(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.bdsUploadDelete=(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"bdsUploadDelete",7),this.bdsUploadChange=(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"bdsUploadChange",7),this.validationFiles=(File,index)=>{const filetype=`.${File.name.split(".").pop()}`;return this.internalAccepts.includes(filetype)?void(this.formatError=!1):(this.formatError=!0,void this.deleteFile(index))},this.handleDrop=Event=>{this.haveFiles=!0;const files=Event.dataTransfer.files;this.handleFiles(files)},this.handleFiles=files=>{this.multiple?this.files=[...this.files,...files]:this.files=[files[0]],this.bdsUploadChange.emit({value:this.files})},this.refInputElement=el=>{this.inputElement=el},this.files=[],this.haveFiles=!1,this.hover=!1,this.background=void 0,this.size=[],this.internalAccepts=[],this.formatError=!1,this.language="pt_BR",this.titleName=void 0,this.subtitle=void 0,this.error=void 0,this.multiple=void 0,this.accept=void 0,this.dataAccept=[],this.dtInputFiles=null,this.dtLabelAddFile=null,this.dtButtonDelete=null}dataAcceptChanged(){if(this.dataAccept)if("string"==typeof this.dataAccept)try{this.internalAccepts=JSON.parse(this.dataAccept)}catch{this.internalAccepts=[]}else this.internalAccepts=this.dataAccept;else this.internalAccepts=[]}filesChanged(){if(this.files.length>0)for(let i=0;i<this.files.length;i++)this.internalAccepts.length>0&&this.validationFiles(this.files[i],i)}formatErrorChanged(value){value&&(this.error=termTranslate(this.language,"formatError"),setTimeout((()=>this.error=null),5e3))}componentWillLoad(){this.dataAcceptChanged()}componentDidLoad(){["dragenter","dragover","dragleave","drop"].forEach((eventName=>{this.dropArea.shadowRoot.addEventListener(eventName,this.preventDefaults,!1),this.dropArea.shadowRoot.addEventListener(eventName,(()=>this.hoverFile(!0)),!1)})),["dragenter","dragover"].forEach((eventName=>{this.dropArea.shadowRoot.addEventListener(eventName,(()=>this.preventDefaults),!1),this.dropArea.shadowRoot.addEventListener(eventName,(()=>this.hoverFile(!0)),!1)})),["dragleave","drop"].forEach((eventName=>{this.dropArea.shadowRoot.addEventListener(eventName,(()=>this.preventDefaults),!1),this.dropArea.shadowRoot.addEventListener(eventName,(()=>this.hoverFile(!1)),!1)})),this.dropArea.shadowRoot.addEventListener("drop",this.handleDrop,!1)}preventDefaults(e){e.preventDefault(),e.stopPropagation()}hoverFile(boolean){this.hover=boolean}onUploadClick(files){if(!(files.length>0))return!1;this.multiple?this.files=[...this.files,...files]:this.files=[files[0]],this.haveFiles=!0,this.getSize(),this.bdsUploadChange.emit({value:this.files})}getSize(){this.files.map((size=>{const listSize=size.size;this.size.push(listSize)}))}async deleteFile(index){const fileToDelete=this.files.filter(((item,i)=>i==index&&item));this.bdsUploadDelete.emit({value:fileToDelete}),this.files.splice(index,1),this.files=[...this.files],0===this.files.length?this.haveFiles=!1:this.haveFiles=!0,this.bdsUploadChange.emit({value:this.files})}async deleteAllFiles(){this.bdsUploadDelete.emit({value:this.files}),this.files=[],0===this.files.length?this.haveFiles=!1:this.haveFiles=!0,this.bdsUploadChange.emit({value:this.files})}handleKeyDown(event){"Enter"==event.key&&this.inputElement.click()}render(){return(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"upload"},(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"upload-header"},(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.h)("bds-icon",{class:"upload-header_icon",size:"xxx-large",name:"upload"}),(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"upload-header_text"},(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.h)("bds-typo",{variant:"fs-16",bold:"bold","aria-label":this.titleName},this.titleName),(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.h)("bds-typo",{variant:"fs-14",bold:"regular","aria-label":this.subtitle},this.subtitle))),this.error?(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.h)("bds-banner",{context:"inside",variant:"error","aria-label":this.error},this.error):"",this.haveFiles?(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",null,(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"list-preview"},this.files.map(((names,index)=>(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"upload__preview",key:index,id:"drop-area"},(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"preview",id:"preview"},(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.h)("bds-icon",{size:"x-small",name:"attach"}),(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.h)("p",{class:"preview-text",id:"preview-text","aria-label":names.name},names.name),(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.h)("bds-button-icon",{class:"preview-icon",size:"short",icon:"trash",variant:"secondary",onClick:()=>this.deleteFile(index),"aria-label":`delete ${names.name}`,"data-test":`${this.dtButtonDelete}-${index}`})))))),this.multiple?(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.h)("bds-typo",{variant:"fs-14",italic:!0,class:"preview-length","aria-label":termTranslate(this.language,"uploaded")},this.files.length>1?`${this.files.length} ${termTranslate(this.language,"uploaded")}`:""):""):"",(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{upload__edit:!0}},(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.h)("label",{class:{"upload__edit--label":!0,"upload__edit--hover":this.hover},id:"file-label",htmlFor:"file","data-test":this.dtLabelAddFile,tabindex:"0",onKeyDown:this.handleKeyDown.bind(this)},(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{"text-box":!0,"text-box--hover":this.hover},id:"file-text_box"},this.hover?(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.h)("bds-typo",{class:"text",variant:"fs-14",bold:"regular","aria-label":termTranslate(this.language,"dropHere")},termTranslate(this.language,"dropHere")):(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.h)("bds-typo",{class:"text",variant:"fs-14",bold:"regular","aria-label":termTranslate(this.language,"dropOrClick")},termTranslate(this.language,"dropOrClick"))),(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.h)("img",{class:{"upload__img--invisible":!0,"upload__img--visible":this.hover},src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzg0IiBoZWlnaHQ9IjgwIiB2aWV3Qm94PSIwIDAgMzg0IDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMzc4OF8yMTU2NDApIj4KPGxpbmUgeDE9Ii0xMC45NzY3IiB5MT0iNzQuMzg0MyIgeDI9IjIyLjc3NzgiIHkyPSI1LjE3NzE5IiBzdHJva2U9IiNFN0VERjQiLz4KPGxpbmUgeDE9IjIyLjc3NzciIHkxPSI3NC4zODQzIiB4Mj0iNTYuNTMyMiIgeTI9IjUuMTc3MTkiIHN0cm9rZT0iI0U3RURGNCIvPgo8bGluZSB4MT0iNTYuNTMyIiB5MT0iNzQuMzg0MyIgeDI9IjkwLjI4NjYiIHkyPSI1LjE3NzE5IiBzdHJva2U9IiNFN0VERjQiLz4KPGxpbmUgeDE9IjkwLjI4NjkiIHkxPSI3NC4zODQzIiB4Mj0iMTI0LjA0MiIgeTI9IjUuMTc3MTkiIHN0cm9rZT0iI0U3RURGNCIvPgo8bGluZSB4MT0iMTI0LjA0MSIgeTE9Ijc0LjM4NDMiIHgyPSIxNTcuNzk2IiB5Mj0iNS4xNzcxOSIgc3Ryb2tlPSIjRTdFREY0Ii8+CjxsaW5lIHgxPSIxNTcuNzk2IiB5MT0iNzQuMzg0MyIgeDI9IjE5MS41NTEiIHkyPSI1LjE3NzE5IiBzdHJva2U9IiNFN0VERjQiLz4KPGxpbmUgeDE9IjE5MS41NTEiIHkxPSI3NC4zODQzIiB4Mj0iMjI1LjMwNSIgeTI9IjUuMTc3MTkiIHN0cm9rZT0iI0U3RURGNCIvPgo8bGluZSB4MT0iMjI1LjMwNSIgeTE9Ijc0LjM4NDMiIHgyPSIyNTkuMDYiIHkyPSI1LjE3NzE5IiBzdHJva2U9IiNFN0VERjQiLz4KPGxpbmUgeDE9IjI1OS4wNiIgeTE9Ijc0LjM4NDMiIHgyPSIyOTIuODE0IiB5Mj0iNS4xNzcxOSIgc3Ryb2tlPSIjRTdFREY0Ii8+CjxsaW5lIHgxPSIyOTIuODE0IiB5MT0iNzQuMzg0MyIgeDI9IjMyNi41NjkiIHkyPSI1LjE3NzE5IiBzdHJva2U9IiNFN0VERjQiLz4KPGxpbmUgeDE9IjMyNi41NjkiIHkxPSI3NC4zODQzIiB4Mj0iMzYwLjMyMyIgeTI9IjUuMTc3MTkiIHN0cm9rZT0iI0U3RURGNCIvPgo8bGluZSB4MT0iMzYwLjMyNCIgeTE9Ijc0LjM4NDMiIHgyPSIzOTQuMDc4IiB5Mj0iNS4xNzcxOSIgc3Ryb2tlPSIjRTdFREY0Ii8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMzc4OF8yMTU2NDAiPgo8cmVjdCB3aWR0aD0iMzg0IiBoZWlnaHQ9IjgwIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="})),(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.h)("input",{ref:this.refInputElement,type:"file",name:"files[]",id:"file",class:"upload__input",multiple:this.multiple,accept:this.internalAccepts.length>0?this.internalAccepts.toString():this.accept,onChange:$event=>this.onUploadClick($event.target.files),"data-test":this.dtInputFiles})))}get dropArea(){return(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{dataAccept:["dataAcceptChanged"],files:["filesChanged"],formatError:["formatErrorChanged"]}}};BdsUpload.style='.upload{min-width:400px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:16px}.upload .upload-header{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-align:center;align-items:center;gap:8px;color:var(--color-content-default, #454545)}.upload .upload-header_text{color:var(--color-content-default, #454545);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.upload__edit--label{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));border-radius:8px;cursor:pointer;font-weight:normal;-webkit-box-sizing:border-box;box-sizing:border-box;padding:23px 16px;position:relative}.upload__edit--label::before{content:"";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px}.upload__edit--label:focus-visible{outline:none}.upload__edit--label:focus-visible::before{border-color:var(--color-focus, #c226fb)}.upload__edit--label .upload__img--visible{display:-ms-flexbox;display:flex;width:100%;height:100%;border-radius:8px;position:absolute;background-color:var(--color-surface-2, #e0e0e0);z-index:1}.upload__edit--label .text-box{display:-ms-flexbox;display:flex;padding:8px;width:100%;text-align:center;z-index:2}.upload__edit--label .text-box .text{color:var(--color-content-default, #454545);width:100%;-ms-flex-wrap:wrap;flex-wrap:wrap}.upload__edit--label .text-box--hover{background-color:var(--color-surface-2, #e0e0e0)}.upload__edit--label .text-box--hover .text{color:var(--color-primary, #1e6bf1)}.upload__edit--label:hover{border:2px solid var(--color-primary, #1e6bf1);-webkit-box-sizing:border-box;box-sizing:border-box;padding:22px 16px;cursor:pointer;-webkit-text-decoration:underline var(--color-primary, #1e6bf1);text-decoration:underline var(--color-primary, #1e6bf1);color:var(--color-brand, #0096fa)}.upload__edit--label:hover .text{color:var(--color-primary, #1e6bf1)}.upload__edit--hover{background-size:cover;border:1px dashed var(--color-surface-4, #141414);color:var(--color-primary, #1e6bf1);font-weight:bold;border-radius:8px}.upload__img--invisible{display:none}.list-preview{border-top:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));border-bottom:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));max-height:200px;overflow-y:auto}.upload__preview{-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;padding:16px 0}.upload__preview .preview{display:-ms-flexbox;display:flex;padding:0 16px;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;gap:8px}.upload__preview .preview-text{font-family:"Nunito Sans", "Carbona", "Tahoma", "Helvetica", "Arial", sans-serif;font-size:0.875rem;font-weight:700;margin:0;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;width:100%;color:var(--color-content-default, #454545)}.upload__preview .preview-icon{color:var(--color-content-default, #454545)}.upload__preview .preview-icon:hover{cursor:pointer}.preview-length{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:end;padding-top:16px;text-align:end}.upload__edit input{position:absolute;left:0;top:0;right:0;bottom:0;opacity:0;width:0;height:100%}'}}]);