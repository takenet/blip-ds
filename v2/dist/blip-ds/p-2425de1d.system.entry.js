System.register(["./p-CLAYiqZ6.system.js"],(function(t){"use strict";var e,s,i,r,o;return{setters:[function(t){e=t.r;s=t.c;i=t.h;r=t.H;o=t.g}],execute:function(){var a=function(){return":host{display:-ms-flexbox;display:flex;position:relative}:host:focus-visible{outline:none}.card{display:-ms-flexbox;display:flex;width:100%}.card_hover:hover{-webkit-transform:scale(1.02);transform:scale(1.02);-webkit-transition:all 0.3s;transition:all 0.3s;cursor:pointer}.card_hover_selectable:hover{-webkit-box-shadow:0px 0px 0px 2px rgba(30, 107, 241, 0.08);box-shadow:0px 0px 0px 2px rgba(30, 107, 241, 0.08)}.card_hover_selectable:active{-webkit-box-shadow:0px 0px 0px 2px rgba(30, 107, 241, 0.24);box-shadow:0px 0px 0px 2px rgba(30, 107, 241, 0.24)}.focus:focus-visible{display:-ms-flexbox;display:flex;position:absolute;border:2px solid var(--color-focus, rgb(194, 38, 251));border-radius:4px;width:100%;height:100%;top:-4px;left:-4px;padding-right:4px;padding-bottom:4px;outline:none}"};var n=t("bds_card",/** @class */function(){function t(t){e(this,t);this.bdsClick=s(this,"bdsClick");
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
                     */this.dataTest=null;this.isHovered=false;this.isPressed=false;this.elevation="primary"}t.prototype.componentDidLoad=function(){var t=this;this.cardElement=this.element.shadowRoot.querySelector(".card");if(this.cardElement&&(this.clickable===true||this.selectable===true)){this.cardElement.addEventListener("mouseenter",(function(){t.isHovered=true}));this.cardElement.addEventListener("mouseleave",(function(){t.isHovered=false}));this.cardElement.addEventListener("mousedown",(function(e){t.isPressed=true;t.bdsClick.emit(e)}));document.addEventListener("mouseup",(function(){t.isPressed=false}));this.cardElement.addEventListener("keydown",(function(e){if(e.key==="Enter"){t.isPressed=true;t.bdsClick.emit(e)}}));this.cardElement.addEventListener("keyup",(function(e){if(e.key==="Enter"){t.isPressed=false}}))}};t.prototype.componentDidUpdate=function(){if(this.isPressed){this.elevation="static"}else if(this.isHovered){this.elevation="secondary"}};t.prototype.handleKeyDown=function(t){if(t.key=="Enter"){this.isPressed=true;this.bdsClick.emit(t)}};t.prototype.render=function(){var t={width:this.width};return i(r,{key:"2884b553edce87425ea42003232d3427f7a4b97d",style:t},i("bds-paper",{key:"9e774fc98d7d7a4c0898c9544ac1355b3c478767",border:this.clickable?false:true,elevation:this.elevation,class:{card:true,card_hover:this.clickable,card_hover_selectable:this.isHovered&&this.selectable?true:false,card_hover_pressed:this.isHovered&&this.selectable?true:false},height:this.height,width:this.width,bgColor:this.bgColor,"data-test":this.dataTest,"border-color":this.borderColor?this.borderColor:"border-1"},i("div",{key:"a909638b7ca3e83067b643585fffae4381728530",tabindex:"0",class:"focus",onKeyDown:this.handleKeyDown.bind(this)}),i("bds-grid",{key:"079739c80a990a7b868679bfec10ede21ccca9a7",xxs:"12",direction:"column",gap:"2",padding:"2"},i("slot",{key:"e4a7c448309ce2c866f0270da0ffa34b52477632"}))))};Object.defineProperty(t.prototype,"element",{get:function(){return o(this)},enumerable:false,configurable:true});return t}());n.style=a()}}}));