import{r as registerInstance,c as createEvent,h,H as Host,g as getElement}from"./index-CkbvGS8Z.js";var cardCss=function(){return":host{display:-ms-flexbox;display:flex;position:relative}:host:focus-visible{outline:none}.card{display:-ms-flexbox;display:flex;width:100%}.card_hover:hover{-webkit-transform:scale(1.02);transform:scale(1.02);-webkit-transition:all 0.3s;transition:all 0.3s;cursor:pointer}.card_hover_selectable:hover{-webkit-box-shadow:0px 0px 0px 2px rgba(30, 107, 241, 0.08);box-shadow:0px 0px 0px 2px rgba(30, 107, 241, 0.08)}.card_hover_selectable:active{-webkit-box-shadow:0px 0px 0px 2px rgba(30, 107, 241, 0.24);box-shadow:0px 0px 0px 2px rgba(30, 107, 241, 0.24)}.focus:focus-visible{display:-ms-flexbox;display:flex;position:absolute;border:2px solid var(--color-focus, rgb(194, 38, 251));border-radius:4px;width:100%;height:100%;top:-4px;left:-4px;padding-right:4px;padding-bottom:4px;outline:none}"};var Card=/** @class */function(){function e(e){registerInstance(this,e);this.bdsClick=createEvent(this,"bdsClick");
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
         */this.dataTest=null;this.isHovered=false;this.isPressed=false;this.elevation="primary"}e.prototype.componentDidLoad=function(){var e=this;this.cardElement=this.element.shadowRoot.querySelector(".card");if(this.cardElement&&(this.clickable===true||this.selectable===true)){this.cardElement.addEventListener("mouseenter",(function(){e.isHovered=true}));this.cardElement.addEventListener("mouseleave",(function(){e.isHovered=false}));this.cardElement.addEventListener("mousedown",(function(t){e.isPressed=true;e.bdsClick.emit(t)}));document.addEventListener("mouseup",(function(){e.isPressed=false}));this.cardElement.addEventListener("keydown",(function(t){if(t.key==="Enter"){e.isPressed=true;e.bdsClick.emit(t)}}));this.cardElement.addEventListener("keyup",(function(t){if(t.key==="Enter"){e.isPressed=false}}))}};e.prototype.componentDidUpdate=function(){if(this.isPressed){this.elevation="static"}else if(this.isHovered){this.elevation="secondary"}};e.prototype.handleKeyDown=function(e){if(e.key=="Enter"){this.isPressed=true;this.bdsClick.emit(e)}};e.prototype.render=function(){var e={width:this.width};return h(Host,{key:"86a05da7b1a0f205f21acd8f41d6aa47bb56e1ed",style:e},h("bds-paper",{key:"ed2a07a0fe65c80cdad627fa8e42799b4880daab",border:this.clickable?false:true,elevation:this.elevation,class:{card:true,card_hover:this.clickable,card_hover_selectable:this.isHovered&&this.selectable?true:false,card_hover_pressed:this.isHovered&&this.selectable?true:false},height:this.height,width:this.width,bgColor:this.bgColor,"data-test":this.dataTest,"border-color":this.borderColor?this.borderColor:"border-1"},h("div",{key:"0a4a5f654f4c235dc1a4334dfbd3ac4b98290f6f",tabindex:"0",class:"focus",onKeyDown:this.handleKeyDown.bind(this)}),h("bds-grid",{key:"5d4cb65b1637a226b2b11b0e2bab3c45485aca94",xxs:"12",direction:"column",gap:"2",padding:"2"},h("slot",{key:"dbf54ebc7f9ec0fe57fdaf3202500e6b355aa5e5"}))))};Object.defineProperty(e.prototype,"element",{get:function(){return getElement(this)},enumerable:false,configurable:true});return e}();Card.style=cardCss();export{Card as bds_card};