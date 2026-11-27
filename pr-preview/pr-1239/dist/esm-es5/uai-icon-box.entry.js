import{r as registerInstance,h,H as Host,g as getElement}from"./index-DUwG7Zwx.js";var uaiIconBoxCss=function(){return":host{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-negative:0;flex-shrink:0;vertical-align:middle}.icon-box{--icon-box-glyph-size:var(--uai-sizing-lg, 1.5rem);display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;padding:var(--uai-spacing-xs, 0.5rem);border-radius:var(--uai-radius-md, 0.5rem);background-color:var(--uai-surface-background, #f2f3f3);color:var(--uai-content-primary, #242729)}.icon-box--size-sm{--icon-box-glyph-size:var(--uai-sizing-md, 1.25rem)}.icon-box--size-md{--icon-box-glyph-size:var(--uai-sizing-lg, 1.5rem)}.icon-box--size-lg{--icon-box-glyph-size:var(--uai-sizing-xl, 2rem)}.icon-box__icon{--uai-icon-size:var(--icon-box-glyph-size);color:inherit}::slotted(*){width:var(--icon-box-glyph-size);height:var(--icon-box-glyph-size);color:inherit}"};var SIZES=["sm","md","lg"];var THEMES=["outline","solid"];var ICON_SIZE={sm:"small",md:"medium",lg:"medium"};var UaiIconBox=/** @class */function(){function i(i){registerInstance(this,i);
/**
         * Name of the glyph from the UAI icon font. When omitted, renders the default slot content.
         */this.icon=null;
/**
         * Style of the UAI icon glyph (`outline` or `solid`).
         */this.iconTheme="outline";
/**
         * Scale of the icon container (`sm`, `md`, or `lg`).
         */this.size="md";
/**
         * Accessible label when the icon box communicates standalone meaning; otherwise the box is decorative.
         */this.ariaLabel=null;
/**
         * Selector attribute applied to the box container for automated tests.
         */this.dataTest=null}i.prototype.resolveSize=function(){var i;var e=String((i=this.size)!==null&&i!==void 0?i:"md");if(SIZES.includes(e)){return e}return"md"};i.prototype.resolveTheme=function(){var i;var e=String((i=this.iconTheme)!==null&&i!==void 0?i:"outline");if(THEMES.includes(e)){return e}return"outline"};i.prototype.render=function(){var i;var e=this.resolveSize();var n=this.resolveTheme();var r=(this.ariaLabel||this.el.getAttribute("aria-label")||"").trim();return h(Host,{key:"285f1eb9d5acd1d99fbc8290650a6912e1d5d1e3",role:r?"img":undefined,"aria-label":r||undefined,"aria-hidden":r?undefined:"true"},h("div",{key:"e8c631384032ee65cba6bd5e5f9bbaf15acd8ad3",class:(i={"icon-box":true},i["icon-box--size-".concat(e)]=true,i),part:"box","data-test":this.dataTest},this.icon?h("uai-icon",{class:"icon-box__icon",name:this.icon,theme:n,size:ICON_SIZE[e],"aria-hidden":"true"}):h("slot",null)))};Object.defineProperty(i.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});return i}();UaiIconBox.style=uaiIconBoxCss();export{UaiIconBox as uai_icon_box};