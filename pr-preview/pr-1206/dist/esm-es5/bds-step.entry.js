import{r as registerInstance,h,g as getElement}from"./index-CkbvGS8Z.js";var stepCss=function(){return":host{padding:8px}:host .step{width:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host .step__content{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host .step__content--completed{color:var(--color-content-disable, rgb(89, 89, 89))}:host .step__content--active{color:var(--color-primary, rgb(30, 107, 241));font-weight:bold}:host .step__content--pointer{cursor:pointer}:host .step__content--disabled{cursor:no-drop}:host .step__content__ellipse{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:center;justify-content:center;border-radius:50%;background:var(--color-content-default, rgb(40, 40, 40));margin-right:4px;min-width:24px;min-height:24px}:host .step__content__ellipse bds-typo,:host .step__content__ellipse bds-icon{color:var(--color-surface-0, rgb(255, 255, 255))}:host .step__content__ellipse--completed{background:var(--color-content-ghost, rgb(140, 140, 140))}:host .step__content__ellipse--completed bds-typo,:host .step__content__ellipse--completed bds-icon{color:var(--color-surface-0, rgb(255, 255, 255))}:host .step__content__ellipse--active{background:var(--color-surface-primary, rgb(30, 107, 241))}:host .step__content__ellipse--active bds-typo,:host .step__content__ellipse--active bds-icon{color:var(--color-content-bright, rgb(255, 255, 255))}:host .step__content__ellipse--disabled{background:var(--color-content-ghost, rgb(140, 140, 140))}:host .step__content__ellipse--disabled bds-typo,:host .step__content__ellipse--disabled bds-icon{color:var(--color-surface-0, rgb(255, 255, 255))}:host .step__content__text--completed{color:var(--color-content-ghost, rgb(140, 140, 140))}:host .step__content__text--active{color:var(--color-content-default, rgb(40, 40, 40))}:host .step__content__text--disabled{color:var(--color-content-ghost, rgb(140, 140, 140))}@media (max-width: 780px){:host{display:-ms-flexbox;display:flex;-ms-flex:inherit;flex:inherit}}"};var BdsStep=/** @class */function(){function t(t){registerInstance(this,t);
/**
         * Used to define the last step component on the list
         */this.last=false;
/**
         * Used to complete the step
         */this.completed=false;
/**
         * Used to set the step as active
         */this.active=false;
/**
         * Used to set the step as disabled
         */this.disabled=false;
/**
         * Used to set the index of the steps
         */this.index=0;
/**
         * Used to set cursor pointer on the step (useful to allow clicks on the steps)
         */this.pointer=false;
/**
         * Data test is the prop to specifically test the component action object.
         */this.dataTest=null}t.prototype.render=function(){return h("div",{key:"1870ffea9de2f44efac7a505e8f895acb23828d8",class:"step"},h("div",{key:"a6ea52ba6d92f3aa4db923b5c833581a00e24e3f",class:{step__content:true,"step__content--active":this.active,"step__content--completed":this.completed,"step__content--disabled":this.disabled,"step__content--pointer":this.pointer,"step--last":this.last},"data-test":this.dataTest},h("div",{key:"302feed6fa70f05116aab453408824330252dd06",class:{step__content__ellipse:true,"step__content__ellipse--active":this.active,"step__content__ellipse--completed":this.completed,"step__content__ellipse--disabled":this.disabled}},this.completed&&h("bds-icon",{key:"64c3e21d0324c324b468dde32883c1892f6deec8",name:"true"}),!this.completed&&h("bds-typo",{key:"657b45adf7cb979fcaba98fd7973ae3a1d6f192e"},this.index+1)),h("bds-typo",{key:"3a65604fd8373f24744b26e66baa7a7236751587",variant:"fs-16",class:{step__content__text:true,"step__content__text--completed":this.completed&&!this.active,"step__content__text--active":this.active,"step__content__text--disabled":this.disabled},bold:this.active?"bold":"regular"},h("slot",{key:"79a49704141936cda1b4ff63d0b60bf898157c20"}))))};Object.defineProperty(t.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});return t}();BdsStep.style=stepCss();export{BdsStep as bds_step};