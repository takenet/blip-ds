import{r as registerInstance,h}from"./index-CkbvGS8Z.js";var menuExibitionCss=function(){return".menuexibition{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:16px}.menuexibition__disabled{opacity:0.5;cursor:no-drop}.menuexibition .avatar-item{display:block;margin-right:8px}.menuexibition .content-item{width:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.menuexibition .content-item .title-item{color:var(--color-content-default, rgb(40, 40, 40))}.menuexibition .content-item .subtitle-item{color:var(--color-content-disable, rgb(89, 89, 89))}.menuexibition .content-item .description-item{color:var(--color-content-default, rgb(40, 40, 40))}"};var BdsMenuExibition=/** @class */function(){function i(i){registerInstance(this,i);
/**
         * AvatarName. Used to enter the avatar name.
         */this.avatarName=null;
/**
         * AvatarThumbnail. Used to insert the avatar photo.
         */this.avatarThumbnail=null;
/**
         * AvatarSize. Used to set avatar size.
         */this.avatarSize="standard";
/**
         * Value. Used to insert a title in the display item.
         */this.value=null;
/**
         * Subtitle. Used to insert a subtitle in the display item.
         */this.subtitle=null;
/**
         * Description. Used to insert a subtitle in the display item.
         */this.description=null;
/**
         * Disabled. Used to declare that the item will be disabled.
         */this.disabled=false}i.prototype.render=function(){var i;var t=this.avatarName||this.avatarThumbnail;return h("div",{key:"34c5a7e8e9b55d43c6309ad684fa7af359a11d23",class:(i={menuexibition:true},i["menuexibition__disabled"]=this.disabled,i)},t&&h("bds-avatar",{key:"c485d7a4248a4a34553ef499ba60cabc6b580036",class:"avatar-item",name:this.avatarName,thumbnail:this.avatarThumbnail,size:this.avatarSize}),h("div",{key:"5b41a63882e63541b2315cba00ba981c2167e403",class:"content-item"},this.value&&h("bds-typo",{key:"2214b9f2a065e365065e7beca3dfa7664dedcd59",class:"title-item",variant:"fs-16",tag:"span"},this.value),this.subtitle&&h("bds-typo",{key:"fd08dfd0153a07bd3095ca258f5501fc92e28c67",class:"subtitle-item",variant:"fs-10",tag:"span"},this.subtitle),this.description&&h("bds-typo",{key:"e607923f89a5b744d79b62ee220003f36ac2b3a8",class:"description-item",variant:"fs-10",tag:"span"},this.description)))};return i}();BdsMenuExibition.style=menuExibitionCss();export{BdsMenuExibition as bds_menu_exibition};