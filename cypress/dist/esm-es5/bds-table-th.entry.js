import{r as registerInstance,h,H as Host,g as getElement}from"./index-611fd21e.js";var tableHeaderCellCss='.sc-bds-table-th-h{display:table-cell;padding:0px 8px}.th_cell.sc-bds-table-th{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:64px;gap:8px;font-family:"Nunito Sans", "Carbona", "Tahoma", "Helvetica", "Arial", sans-serif;-webkit-box-sizing:border-box;box-sizing:border-box}.th_cell--sortable-true.sc-bds-table-th:hover,.th_cell--sortable-false.sc-bds-table-th:hover{cursor:pointer}.justify--left.sc-bds-table-th{-ms-flex-pack:start;justify-content:flex-start}.justify--center.sc-bds-table-th{-ms-flex-pack:center;justify-content:center}.justify--right.sc-bds-table-th{-ms-flex-pack:end;justify-content:flex-end}.dense-th.sc-bds-table-th{min-height:48px;height:auto}.sc-bds-table-th-h:first-child{padding-left:16px}.sc-bds-table-th-h:last-child{padding-right:16px}';var TableHeaderCell=function(){function e(e){registerInstance(this,e);this.isDense=false;this.sortable=false;this.arrow="";this.justifyContent="left"}e.prototype.componentWillLoad=function(){var e=this.element.closest("bds-table");if(e&&(e.getAttribute("dense-table")==="true"||e.denseTable===true)){this.isDense=true}};e.prototype.render=function(){var e;return h(Host,null,h("div",{class:(e={th_cell:true},e["th_cell--sortable-".concat(this.sortable)]=true,e["dense-th"]=this.isDense,e["justify--".concat(this.justifyContent)]=true,e)},h("bds-typo",{bold:this.sortable?"bold":"semi-bold",variant:"fs-14"},h("slot",null)),this.sortable?h("bds-icon",{size:"small",name:this.arrow==="asc"?"arrow-down":this.arrow==="dsc"?"arrow-up":""}):""))};Object.defineProperty(e.prototype,"element",{get:function(){return getElement(this)},enumerable:false,configurable:true});return e}();TableHeaderCell.style=tableHeaderCellCss;export{TableHeaderCell as bds_table_th};