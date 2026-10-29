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
         */this.dataTest=null}t.prototype.render=function(){return h("div",{key:"7f334348944ac74ec38a9326f46d68663fe401b9",class:"step"},h("div",{key:"8710a828064e5e7d30d105d3aadd5d1200e89776",class:{step__content:true,"step__content--active":this.active,"step__content--completed":this.completed,"step__content--disabled":this.disabled,"step__content--pointer":this.pointer,"step--last":this.last},"data-test":this.dataTest},h("div",{key:"fc41b45e3567dfa02d5dd4e255181b92c1574711",class:{step__content__ellipse:true,"step__content__ellipse--active":this.active,"step__content__ellipse--completed":this.completed,"step__content__ellipse--disabled":this.disabled}},this.completed&&h("bds-icon",{key:"6814dfe5c351f98bf400fce4af8b4b49eecbd364",name:"true"}),!this.completed&&h("bds-typo",{key:"8cee97ae5499dfd84ad693cdf1e33061ecf97e3b"},this.index+1)),h("bds-typo",{key:"11ec614037089e38ae3fec41a56dfbb59a96a7f5",variant:"fs-16",class:{step__content__text:true,"step__content__text--completed":this.completed&&!this.active,"step__content__text--active":this.active,"step__content__text--disabled":this.disabled},bold:this.active?"bold":"regular"},h("slot",{key:"f89443e2ae3aba9ba420be18c9bc51d3d087ff02"}))))};Object.defineProperty(t.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});return t}();BdsStep.style=stepCss();export{BdsStep as bds_step};