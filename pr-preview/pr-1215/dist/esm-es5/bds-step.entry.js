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
         */this.dataTest=null}t.prototype.render=function(){return h("div",{key:"34b0e5099f2cd713052f91b37d9890d77edfd880",class:"step"},h("div",{key:"fa827fb112af784727e703487cdf4f3f6d380bb4",class:{step__content:true,"step__content--active":this.active,"step__content--completed":this.completed,"step__content--disabled":this.disabled,"step__content--pointer":this.pointer,"step--last":this.last},"data-test":this.dataTest},h("div",{key:"54140aad6549e3fd6ef67c9c1ad6b97680b37d9d",class:{step__content__ellipse:true,"step__content__ellipse--active":this.active,"step__content__ellipse--completed":this.completed,"step__content__ellipse--disabled":this.disabled}},this.completed&&h("bds-icon",{key:"2e6ec70d34458eb48ad5389e84273d49e23f063f",name:"true"}),!this.completed&&h("bds-typo",{key:"eef9f9943af703c5d57435aed80fbe2cbef22f89"},this.index+1)),h("bds-typo",{key:"5cc89d7613662332bf71262fd1e496416464e38c",variant:"fs-16",class:{step__content__text:true,"step__content__text--completed":this.completed&&!this.active,"step__content__text--active":this.active,"step__content__text--disabled":this.disabled},bold:this.active?"bold":"regular"},h("slot",{key:"490b19a6c5df76860612f8e84039eb599673f198"}))))};Object.defineProperty(t.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});return t}();BdsStep.style=stepCss();export{BdsStep as bds_step};