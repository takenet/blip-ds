System.register(["./p-d105fb25.system.js"],(function(t){"use strict";var i,e;return{setters:[function(t){i=t.r;e=t.h}],execute:function(){var a=".menuexibition{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:16px}.menuexibition__disabled{opacity:0.5;cursor:no-drop}.menuexibition .avatar-item{display:block;margin-right:8px}.menuexibition .content-item{width:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.menuexibition .content-item .title-item{color:var(--color-content-default, #454545)}.menuexibition .content-item .subtitle-item{color:var(--color-content-disable, #636363)}.menuexibition .content-item .description-item{color:var(--color-content-default, #454545)}";var n=t("bds_menu_exibition",function(){function t(t){i(this,t);this.avatarName=null;this.avatarThumbnail=null;this.avatarSize="standard";this.value=null;this.subtitle=null;this.description=null;this.disabled=false}t.prototype.render=function(){var t;var i=this.avatarName||this.avatarThumbnail;return e("div",{class:(t={menuexibition:true},t["menuexibition__disabled"]=this.disabled,t)},i&&e("bds-avatar",{class:"avatar-item",name:this.avatarName,thumbnail:this.avatarThumbnail,size:this.avatarSize}),e("div",{class:"content-item"},this.value&&e("bds-typo",{class:"title-item",variant:"fs-16",tag:"span"},this.value),this.subtitle&&e("bds-typo",{class:"subtitle-item",variant:"fs-10",tag:"span"},this.subtitle),this.description&&e("bds-typo",{class:"description-item",variant:"fs-10",tag:"span"},this.description)))};return t}());n.style=a}}}));