import{r as t,c as a,h as i,H as e,g as o}from"./p-93b809e8.js";const s=[{value:"A",color:"system"},{value:"B",color:"success"},{value:"C",color:"warning"},{value:"D",color:"error"},{value:"E",color:"info"},{value:"F",color:"system"},{value:"G",color:"success"},{value:"H",color:"warning"},{value:"I",color:"error"},{value:"J",color:"info"},{value:"K",color:"system"},{value:"L",color:"success"},{value:"M",color:"warning"},{value:"N",color:"error"},{value:"O",color:"info"},{value:"P",color:"system"},{value:"Q",color:"success"},{value:"R",color:"warning"},{value:"S",color:"error"},{value:"T",color:"info"},{value:"U",color:"system"},{value:"V",color:"success"},{value:"X",color:"warning"},{value:"Y",color:"error"},{value:"W",color:"info"},{value:"Z",color:"system"}],r=class{constructor(i){t(this,i),this.bdsClickAvatar=a(this,"bdsClickAvatar",7),this.bdsImageUpload=a(this,"bdsImageUpload",7),this.typoSize="fs-20",this.iconSize="large",this.handleOpenUpload=t=>{const a=this.el.shadowRoot.getElementById("file-input");"click"!==t.type&&("keydown"!==t.type||"Enter"!==t.key&&" "!==t.key)||a.click()},this.selectTypoSize=t=>{switch(t){case"micro":this.typoSize="fs-12",this.iconSize="xx-small";break;case"extra-small":this.typoSize="fs-14",this.iconSize="x-small";break;case"small":this.typoSize="fs-16",this.iconSize="medium";break;case"standard":this.typoSize="fs-20",this.iconSize="x-large";break;case"large":this.typoSize="fs-24",this.iconSize="xxx-large";break;case"extra-large":this.typoSize="fs-32",this.iconSize="xxx-large";break;default:this.typoSize="fs-20",this.iconSize="medium"}},this.avatarBgColor=t=>"colorLetter"!=this.color?this.color:t?s.find((a=>a.value===t)).color:void 0,this.hasThumb=void 0,this.name=null,this.thumbnail=null,this.size="standard",this.color="colorLetter",this.upload=!1,this.openUpload=!1,this.ellipsis=null,this.dataTest=null}onUploadClick(t){t.preventDefault(),this.bdsClickAvatar.emit(t),this.openUpload&&this.handleOpenUpload(t)}onFileInputChange(t){const a=t.target.files;if(a&&a.length>0){const t=a[0],i=new FileReader;i.onload=t=>{const a=t.target.result;this.thumbnail=a,this.bdsImageUpload.emit(a)},i.readAsDataURL(t)}}componentWillRender(){this.hasThumb=!!this.thumbnail&&0!==this.thumbnail.length}render(){const t=this.name?this.name.split(" "):[],a=t.length?t.shift().charAt(0).toUpperCase():"",o=t.length?t.pop().charAt(0).toUpperCase():"";this.selectTypoSize(this.size);const s={backgroundImage:`url(${this.hasThumb?this.thumbnail:null})`};return i(e,null,i("input",{type:"file",id:"file-input",accept:"image/*",onChange:t=>this.onFileInputChange(t),style:{display:"none"}}),i("div",{class:{avatar:!0,[`avatar__color--${this.name&&!this.hasThumb?this.avatarBgColor(a):this.hasThumb&&!this.name?"surface":this.name||this.hasThumb?this.name&&this.hasThumb?this.avatarBgColor(a):null:"surface"}`]:!0,[`avatar__size--${this.size}`]:!0,upload:this.upload||this.openUpload},onClick:t=>this.onUploadClick(t),tabindex:"0",onKeyDown:t=>this.onUploadClick(t),"data-test":this.dataTest},this.ellipsis?i("div",{class:"avatar__btn"},i("bds-typo",{margin:!1,variant:this.typoSize,tag:"span"},`+${this.ellipsis}`)):this.thumbnail?this.upload||this.openUpload?i("div",{class:"avatar__btn"},i("div",{class:`avatar__btn__img avatar__size--${this.size}`,style:s}),i("div",{class:"avatar__btn__thumb"},i("bds-icon",{class:"avatar__btn__thumb__icon",name:"upload",theme:"outline",size:this.iconSize}))):i("div",{class:"avatar__btn"},i("div",{class:`avatar__btn__img avatar__size--${this.size}`,style:s})):this.name?this.upload||this.openUpload?i("div",{class:"avatar__btn"},i("bds-typo",{margin:!1,class:"avatar__btn__text",variant:this.typoSize,tag:"span"},a+o),i("div",{class:"avatar__btn__name"},i("bds-icon",{class:"avatar__btn__name__icon",name:"upload",theme:"outline",size:this.iconSize}))):i("div",{class:"avatar__btn"},i("bds-typo",{margin:!1,class:"avatar__text",variant:this.typoSize,tag:"span"},a+o)):this.upload||this.openUpload?i("div",{class:"avatar__btn"},i("bds-icon",{class:"avatar__btn__icon",name:"user-default",theme:"outline",size:this.iconSize}),i("div",{class:"avatar__btn__empty"},i("bds-icon",{class:"avatar__btn__empty__icon",name:"upload",theme:"outline",size:this.iconSize}))):null!==this.name||this.hasThumb?"":i("div",{class:"avatar__btn"},i("bds-icon",{class:"avatar__icon",name:"user-default",theme:"outline",size:this.iconSize}))))}get el(){return o(this)}};r.style=':host{position:relative;display:block;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.avatar{position:relative;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-webkit-appearance:none;-moz-appearance:none;appearance:none;height:100%}.avatar::before{content:"";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px}.avatar:focus-visible{outline:none}.avatar:focus-visible::before{border-color:var(--color-focus, #c226fb)}.avatar__ellipsis{color:var(--color-surface-1, #f6f6f6)}.avatar__text{color:var(--color-content-default, #454545)}.avatar__icon{color:var(--color-content-default, #454545)}.avatar__btn{border-radius:40px;border:1px solid var(--color-border-2, #e0e0e0);-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;width:100%;height:100%;overflow:hidden;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.avatar__btn__img{background-position:center;background-size:cover}.avatar__btn__text{color:var(--color-content-default, #454545);opacity:1;-webkit-transition:all 0.5s;-moz-transition:all 0.5s;transition:all 0.5s}.avatar__btn__icon{color:var(--color-content-default, #454545);opacity:1;-webkit-transition:all 0.5s;-moz-transition:all 0.5s;transition:all 0.5s}.avatar__btn__thumb{position:absolute;width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;top:0;left:0;cursor:pointer}.avatar__btn__thumb:before{content:"";position:absolute;inset:0;background-color:var(--color-content-default, #454545);opacity:0;-webkit-transition:all 0.5s;transition:all 0.5s}.avatar__btn__thumb__icon{position:relative;color:var(--color-surface-1, #f6f6f6);opacity:0;-webkit-transition:all 0.5s;transition:all 0.5s}.avatar__btn__name{position:absolute;width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;top:0;left:0;cursor:pointer;opacity:0;-webkit-transition:all 0.5s;-moz-transition:all 0.5s;transition:all 0.5s}.avatar__btn__name__icon{color:var(--color-content-default, #454545)}.avatar__btn__empty{position:absolute;width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;top:0;left:0;cursor:pointer;opacity:0;-webkit-transition:all 0.5s;-moz-transition:all 0.5s;transition:all 0.5s}.avatar__btn__empty__icon{color:var(--color-content-default, #454545)}.avatar__size--micro{width:24px;height:24px;min-width:24px;min-height:24px}.avatar__size--extra-small{width:32px;height:32px;min-width:32px;min-height:32px}.avatar__size--small{width:40px;height:40px;min-width:40px;min-height:40px}.avatar__size--standard{width:56px;height:56px;min-width:56px;min-height:56px}.avatar__size--large{width:64px;height:64px;min-width:64px;min-height:64px}.avatar__size--extra-large{width:72px;height:72px;min-width:72px;min-height:72px}.avatar__color--system .avatar__btn{background-color:var(--color-system, #b2dffd)}.avatar__color--warning .avatar__btn{background-color:var(--color-warning, #fde99b)}.avatar__color--success .avatar__btn{background-color:var(--color-success, #84ebbc)}.avatar__color--info .avatar__btn{background-color:var(--color-info, #80e3eb)}.avatar__color--error .avatar__btn{background-color:var(--color-error, #f99f9f)}.avatar__color--surface .avatar__btn{background-color:var(--color-surface-2, #e0e0e0);color:var(--color-content-disable, #636363)}.avatar:hover .avatar__btn__thumb:before{opacity:0.5}.avatar:hover .avatar__btn__thumb__icon{opacity:1}.avatar:hover .avatar__btn__text{opacity:0}.avatar:hover .avatar__btn__icon{opacity:0}.avatar:hover .avatar__btn__name{opacity:1}.avatar:hover .avatar__btn__empty{opacity:1}.focus:focus-visible{display:-ms-flexbox;display:flex;position:absolute;border:2px solid var(--color-focus, #c226fb);border-radius:4px;width:100%;height:100%;top:-4px;left:-4px;padding-right:4px;padding-bottom:4px;outline:none}';export{r as bds_avatar}