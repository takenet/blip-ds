System.register(["./p-Btp-603e.system.js"],(function(t){"use strict";var e,s,i,r,a;return{setters:[function(t){e=t.r;s=t.c;i=t.h;r=t.H;a=t.g}],execute:function(){var o=function(){return":host{display:-ms-flexbox;display:flex;position:relative}:host:focus-visible{outline:none}.card{display:-ms-flexbox;display:flex;width:100%}.card_hover:hover{-webkit-transform:scale(1.02);transform:scale(1.02);-webkit-transition:all 0.3s;transition:all 0.3s;cursor:pointer}.card_hover_selectable:hover{-webkit-box-shadow:0px 0px 0px 2px rgba(30, 107, 241, 0.08);box-shadow:0px 0px 0px 2px rgba(30, 107, 241, 0.08)}.card_hover_selectable:active{-webkit-box-shadow:0px 0px 0px 2px rgba(30, 107, 241, 0.24);box-shadow:0px 0px 0px 2px rgba(30, 107, 241, 0.24)}.focus:focus-visible{display:-ms-flexbox;display:flex;position:absolute;border:2px solid var(--color-focus, rgb(194, 38, 251));border-radius:4px;width:100%;height:100%;top:-4px;left:-4px;padding-right:4px;padding-bottom:4px;outline:none}"};var n=t("bds_card",/** @class */function(){function t(t){e(this,t);this.bdsClick=s(this,"bdsClick");
/**
                     * Prop for set the height of the component.
                     */this.height=null;
/**
                     * Prop for set the width of the component.
                     */this.width="fit-content";
/**
                     * If the prop is true, the component will be clickable.
                     */this.clickable=false;
/**
                     * Prop for set the background color.
                     */this.bgColor="surface-1";
/**
                     * Prop for set the background color.
                     */this.selectable=false;
/**
                     * Prop for set the border color.
                     */this.borderColor=null;
/**
                     * Data test is the prop to specifically test the component action object.
                     */this.dataTest=null;this.isHovered=false;this.isPressed=false;this.elevation="primary"}t.prototype.componentDidLoad=function(){var t=this;this.cardElement=this.element.shadowRoot.querySelector(".card");if(this.cardElement&&(this.clickable===true||this.selectable===true)){this.cardElement.addEventListener("mouseenter",(function(){t.isHovered=true}));this.cardElement.addEventListener("mouseleave",(function(){t.isHovered=false}));this.cardElement.addEventListener("mousedown",(function(e){t.isPressed=true;t.bdsClick.emit(e)}));document.addEventListener("mouseup",(function(){t.isPressed=false}));this.cardElement.addEventListener("keydown",(function(e){if(e.key==="Enter"){t.isPressed=true;t.bdsClick.emit(e)}}));this.cardElement.addEventListener("keyup",(function(e){if(e.key==="Enter"){t.isPressed=false}}))}};t.prototype.componentDidUpdate=function(){if(this.isPressed){this.elevation="static"}else if(this.isHovered){this.elevation="secondary"}};t.prototype.handleKeyDown=function(t){if(t.key=="Enter"){this.isPressed=true;this.bdsClick.emit(t)}};t.prototype.render=function(){var t={width:this.width};return i(r,{key:"2c979ffbe244f3095b86ec0b3f163d53b748fa91",style:t},i("bds-paper",{key:"024b16f3b732f6c5e8f1a1008a4a4e62c3c27525",border:this.clickable?false:true,elevation:this.elevation,class:{card:true,card_hover:this.clickable,card_hover_selectable:this.isHovered&&this.selectable?true:false,card_hover_pressed:this.isHovered&&this.selectable?true:false},height:this.height,width:this.width,bgColor:this.bgColor,"data-test":this.dataTest,"border-color":this.borderColor?this.borderColor:"border-1"},i("div",{key:"44f775ca6788ac635558b0165f848cbda4e377c1",tabindex:"0",class:"focus",onKeyDown:this.handleKeyDown.bind(this)}),i("bds-grid",{key:"e303642e609a2e10e391d2e821ce3dea1140f7e4",xxs:"12",direction:"column",gap:"2",padding:"2"},i("slot",{key:"99a558dd5a0a2778bcf567542244700aba735acc"}))))};Object.defineProperty(t.prototype,"element",{get:function(){return a(this)},enumerable:false,configurable:true});return t}());n.style=o()}}}));