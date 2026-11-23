import{r as registerInstance,c as createEvent,h}from"./index-B3G05Lxx.js";var uaiPageHeaderCss=function(){return":host{display:block;min-width:0}.header{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-md, 1rem);-webkit-box-sizing:border-box;box-sizing:border-box;padding:var(--uai-spacing-md, 1rem);color:var(--uai-content-primary, #242729);background:var(--uai-surface-paper, #ffffff);border-bottom:var(--uai-border-width-default, 1px) solid var(--uai-border-default, #e4e6e7)}.header__main{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex:1 1 auto;flex:1 1 auto;min-height:var(--uai-control-height-medium, 2.5rem);min-width:0;max-width:100%;overflow-wrap:anywhere}.header__actions{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem);max-width:100%;-webkit-margin-start:auto;margin-inline-start:auto}"};var UaiPageHeader=/** @class */function(){function e(e){registerInstance(this,e);this.uaiBreadcrumbItemClick=createEvent(this,"uaiBreadcrumbItemClick");this.uaiBreadcrumbItemEdit=createEvent(this,"uaiBreadcrumbItemEdit");
/**
         * Visual composition. Use primary for title and secondary for breadcrumb; pair with items; avoid treating it as a depth limit.
         */this.level="primary";
/**
         * Primary page heading. Use with level primary; pair with actions; avoid expecting a secondary breadcrumb fallback.
         */this.heading="";
/**
         * Secondary breadcrumb items, as JSON or array. Use ancestor-to-current order; pair with level secondary; avoid context selectors.
         */this.items=[];
/**
         * Collapses intermediate breadcrumb items above three. Use false to show all; pair with items; avoid imposing a depth limit.
         */this.wrapItems=true;
/**
         * Enables editing of the secondary breadcrumb's current item. Use with the edit event; pair with items; avoid editing primary title.
         */this.editable=false;
/**
         * Language for breadcrumb messages. Use a supported locale; pair with labels; avoid translating consumer-provided titles implicitly.
         */this.language="pt_BR"}e.prototype.render=function(){var e=this.level;if(e!=="primary"&&e!=="secondary"){e="primary"}return h("header",{key:"ae8fadb0047b2cd67fc5b0525450ef6add0e6b7a",class:"header"},h("div",{key:"51f43ff7cafa33bc2760492e45e4fcc26b5db78b",class:"header__main"},e==="primary"?h("uai-typo",{class:"header__title",tag:"h1",variant:"title-md",bold:"semibold",margin:false},this.heading):h("uai-breadcrumb",{items:this.items,wrapItems:this.wrapItems,editable:this.editable,language:this.language,labels:this.labels,currentHeadingLevel:1})),h("div",{key:"60b549b5591ff14c308250ebc293d6030bb45e10",class:"header__actions"},h("slot",{key:"b090a0246d03f6e6df639347403897385d9a66a3",name:"actions"})))};return e}();UaiPageHeader.style=uaiPageHeaderCss();export{UaiPageHeader as uai_page_header};