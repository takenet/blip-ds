System.register(["./p-CLAYiqZ6.system.js"],(function(e){"use strict";var t,s,i,r,o;return{setters:[function(e){t=e.r;s=e.c;i=e.h;r=e.H;o=e.g}],execute:function(){var a=function(){return":host{display:-ms-flexbox;display:flex;position:relative}:host:focus-visible{outline:none}.card{display:-ms-flexbox;display:flex;width:100%}.card_hover:hover{-webkit-transform:scale(1.02);transform:scale(1.02);-webkit-transition:all 0.3s;transition:all 0.3s;cursor:pointer}.card_hover_selectable:hover{-webkit-box-shadow:0px 0px 0px 2px rgba(30, 107, 241, 0.08);box-shadow:0px 0px 0px 2px rgba(30, 107, 241, 0.08)}.card_hover_selectable:active{-webkit-box-shadow:0px 0px 0px 2px rgba(30, 107, 241, 0.24);box-shadow:0px 0px 0px 2px rgba(30, 107, 241, 0.24)}.focus:focus-visible{display:-ms-flexbox;display:flex;position:absolute;border:2px solid var(--color-focus, rgb(194, 38, 251));border-radius:4px;width:100%;height:100%;top:-4px;left:-4px;padding-right:4px;padding-bottom:4px;outline:none}"};var n=e("bds_card",/** @class */function(){function e(e){t(this,e);this.bdsClick=s(this,"bdsClick");
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
                     */this.dataTest=null;this.isHovered=false;this.isPressed=false;this.elevation="primary"}e.prototype.componentDidLoad=function(){var e=this;this.cardElement=this.element.shadowRoot.querySelector(".card");if(this.cardElement&&(this.clickable===true||this.selectable===true)){this.cardElement.addEventListener("mouseenter",(function(){e.isHovered=true}));this.cardElement.addEventListener("mouseleave",(function(){e.isHovered=false}));this.cardElement.addEventListener("mousedown",(function(t){e.isPressed=true;e.bdsClick.emit(t)}));document.addEventListener("mouseup",(function(){e.isPressed=false}));this.cardElement.addEventListener("keydown",(function(t){if(t.key==="Enter"){e.isPressed=true;e.bdsClick.emit(t)}}));this.cardElement.addEventListener("keyup",(function(t){if(t.key==="Enter"){e.isPressed=false}}))}};e.prototype.componentDidUpdate=function(){if(this.isPressed){this.elevation="static"}else if(this.isHovered){this.elevation="secondary"}};e.prototype.handleKeyDown=function(e){if(e.key=="Enter"){this.isPressed=true;this.bdsClick.emit(e)}};e.prototype.render=function(){var e={width:this.width};return i(r,{key:"2e6fa752814803ae43b82ae8205d54f7da598c98",style:e},i("bds-paper",{key:"b5ab3d7af6b2f07cf5004fea3fe120ab1ef99347",border:this.clickable?false:true,elevation:this.elevation,class:{card:true,card_hover:this.clickable,card_hover_selectable:this.isHovered&&this.selectable?true:false,card_hover_pressed:this.isHovered&&this.selectable?true:false},height:this.height,width:this.width,bgColor:this.bgColor,"data-test":this.dataTest,"border-color":this.borderColor?this.borderColor:"border-1"},i("div",{key:"276e06e9172956874d4bc84d7efef761011e781d",tabindex:"0",class:"focus",onKeyDown:this.handleKeyDown.bind(this)}),i("bds-grid",{key:"1abcf0156809936b176c02d90e74c4aae0092856",xxs:"12",direction:"column",gap:"2",padding:"2"},i("slot",{key:"0e307e55eb377ad0f2ef7714084e14424c15a2b4"}))))};Object.defineProperty(e.prototype,"element",{get:function(){return o(this)},enumerable:false,configurable:true});return e}());n.style=a()}}}));