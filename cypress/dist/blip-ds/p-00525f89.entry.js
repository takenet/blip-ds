import{r as t,h as e}from"./p-93b809e8.js";var o;!function(t){t.Default="default",t.Warning="warning",t.Delete="delete"}(o||(o={}));const n=class{constructor(e){t(this,e),this.length=void 0,this.max=void 0,this.active=!1,this.warning={max:20,min:2},this.delete={max:1,min:0}}getState(){const t=this.getActualLength();return t>=this.warning.min&&t<=this.warning.max?o.Warning:t<=this.delete.max?o.Delete:o.Default}getActualLength(){return this.max-this.length}render(){const t=this.getState(),o=this.getActualLength();return e("div",{class:{"counter-text":!0,"counter-text--active":this.active,[`counter-text--${t}`]:!0}},e("bds-typo",{variant:"fs-10"},o))}};n.style=".counter-text{background:var(--color-surface-2, #e0e0e0);color:var(--color-content-disable, #636363);-webkit-box-sizing:content-box;box-sizing:content-box;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;border-radius:11px;padding:0 8px;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-ms-user-select:none;user-select:none}.counter-text--active{background:var(--color-system, #b2dffd);color:var(--color-content-din, #000000)}.counter-text--warning{background:var(--color-warning, #fde99b);color:var(--color-content-din, #000000)}.counter-text--delete{background:var(--color-delete, #e60f0f);color:var(--color-content-bright, #ffffff)}";export{n as bds_counter_text}