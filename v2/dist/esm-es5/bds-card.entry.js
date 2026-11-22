import{r as registerInstance,c as createEvent,h,H as Host,g as getElement}from"./index-B3G05Lxx.js";var cardCss=function(){return":host{display:-ms-flexbox;display:flex;position:relative}:host:focus-visible{outline:none}.card{display:-ms-flexbox;display:flex;width:100%}.card_hover:hover{-webkit-transform:scale(1.02);transform:scale(1.02);-webkit-transition:all 0.3s;transition:all 0.3s;cursor:pointer}.card_hover_selectable:hover{-webkit-box-shadow:0px 0px 0px 2px rgba(30, 107, 241, 0.08);box-shadow:0px 0px 0px 2px rgba(30, 107, 241, 0.08)}.card_hover_selectable:active{-webkit-box-shadow:0px 0px 0px 2px rgba(30, 107, 241, 0.24);box-shadow:0px 0px 0px 2px rgba(30, 107, 241, 0.24)}.focus:focus-visible{display:-ms-flexbox;display:flex;position:absolute;border:2px solid var(--color-focus, rgb(194, 38, 251));border-radius:4px;width:100%;height:100%;top:-4px;left:-4px;padding-right:4px;padding-bottom:4px;outline:none}"};var Card=/** @class */function(){function t(t){registerInstance(this,t);this.bdsClick=createEvent(this,"bdsClick");
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
         */this.dataTest=null;this.isHovered=false;this.isPressed=false;this.elevation="primary"}t.prototype.componentDidLoad=function(){var t=this;this.cardElement=this.element.shadowRoot.querySelector(".card");if(this.cardElement&&(this.clickable===true||this.selectable===true)){this.cardElement.addEventListener("mouseenter",(function(){t.isHovered=true}));this.cardElement.addEventListener("mouseleave",(function(){t.isHovered=false}));this.cardElement.addEventListener("mousedown",(function(e){t.isPressed=true;t.bdsClick.emit(e)}));document.addEventListener("mouseup",(function(){t.isPressed=false}));this.cardElement.addEventListener("keydown",(function(e){if(e.key==="Enter"){t.isPressed=true;t.bdsClick.emit(e)}}));this.cardElement.addEventListener("keyup",(function(e){if(e.key==="Enter"){t.isPressed=false}}))}};t.prototype.componentDidUpdate=function(){if(this.isPressed){this.elevation="static"}else if(this.isHovered){this.elevation="secondary"}};t.prototype.handleKeyDown=function(t){if(t.key=="Enter"){this.isPressed=true;this.bdsClick.emit(t)}};t.prototype.render=function(){var t={width:this.width};return h(Host,{key:"ce5f5721d866ff379a0b69de2546e0339cb4a415",style:t},h("bds-paper",{key:"320add1ae78725f441841796c86b7673bbc03625",border:this.clickable?false:true,elevation:this.elevation,class:{card:true,card_hover:this.clickable,card_hover_selectable:this.isHovered&&this.selectable?true:false,card_hover_pressed:this.isHovered&&this.selectable?true:false},height:this.height,width:this.width,bgColor:this.bgColor,"data-test":this.dataTest,"border-color":this.borderColor?this.borderColor:"border-1"},h("div",{key:"9a6458612800c08fbc9e741ca1ec78d92eb7b004",tabindex:"0",class:"focus",onKeyDown:this.handleKeyDown.bind(this)}),h("bds-grid",{key:"6758f578d5252cd73926ab5cf3e32fdf5b9b9d0d",xxs:"12",direction:"column",gap:"2",padding:"2"},h("slot",{key:"3dc5bc22b915d99a9fbf7f33fa3b3ed74d6b5a47"}))))};Object.defineProperty(t.prototype,"element",{get:function(){return getElement(this)},enumerable:false,configurable:true});return t}();Card.style=cardCss();export{Card as bds_card};