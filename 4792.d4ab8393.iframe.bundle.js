"use strict";(self.webpackChunkblip_ds=self.webpackChunkblip_ds||[]).push([[4792],{"./dist/esm/bds-data-table.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{bds_data_table:()=>DataTable});var _index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-611fd21e.js");const DataTable=class{constructor(hostRef){(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.bdsTableClick=(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"bdsTableClick",7),this.bdsTableDelete=(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"bdsTableDelete",7),this.bdsTableChange=(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"bdsTableChange",7),this.newTable=[],this.headerData=[],this.tableData=[],this.sortAscending=void 0,this.headerActive=void 0,this.options=void 0,this.column=void 0,this.avatar=!1,this.chips=!1,this.actionArea=void 0,this.sorting=!1}componentWillLoad(){this.getDataFromProprety()}getDataFromProprety(){this.headerData=JSON.parse(this.column),this.tableData=JSON.parse(this.options)}renderArrow(value){return value?(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.h)("bds-icon",{name:"arrow-up",size:"small"}):null}async deleteItem(index){const itemDelete=this.tableData.filter(((item,i)=>i===index&&item));this.bdsTableDelete.emit(itemDelete[0]),this.tableData.splice(index,1),this.tableData=[...this.tableData],this.bdsTableChange.emit(this.tableData)}clickButton(item,index,btn){this.bdsTableClick.emit({item,index,nameButton:btn})}orderColumn(idx){this.headerActive=idx,this.sortAscending=!this.sortAscending,!1===this.sortAscending?this.tableData.sort((function(a,b){return a[idx]>b[idx]?1:-1})):this.tableData.sort((function(a,b){return a[idx]>b[idx]?-1:1}))}render(){return(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.H,null,(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.h)("table",{class:"table"},(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.h)("thead",{class:"thead"},(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.h)("tr",{class:"header"},this.headerData.map(((item,index)=>(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.h)("th",{class:"header-title",key:index},this.sorting?(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.h)("bds-typo",{class:"title-click",onClick:()=>this.orderColumn(item.value),variant:"fs-14",bold:this.headerActive===`${item.value}`?"bold":"semi-bold"},item.heading):(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.h)("bds-typo",{variant:"fs-14",bold:"semi-bold"},item.heading),!0===this.sortAscending&&!0===this.sorting&&this.headerActive===`${item.value}`?(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.h)("bds-icon",{class:"header-icon",name:"arrow-up",size:"small"}):!1===this.sortAscending&&!0===this.sorting&&this.headerActive===`${item.value}`?(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.h)("bds-icon",{name:"arrow-down",size:"small"}):""))))),(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.h)("tbody",null,this.tableData.map(((item,index)=>(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.h)("tr",{class:"body-row",key:index},this.headerData.map(((columnItem,idx)=>(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.h)("td",{class:"body-item",key:idx},this.actionArea&&columnItem.editAction?(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.h)("bds-button-icon",{onClick:()=>this.clickButton(item,index,columnItem.editAction),variant:"secondary",icon:item[`${columnItem.editAction}`],size:"short"}):"",this.actionArea&&columnItem.deleteAction?(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.h)("bds-button-icon",{onClick:()=>this.clickButton(item,index,columnItem.deleteAction),variant:"secondary",icon:item[`${columnItem.deleteAction}`],size:"short"}):"",this.actionArea&&columnItem.customAction?(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.h)("bds-button-icon",{onClick:()=>this.clickButton(item,index,columnItem.customAction),variant:"secondary",icon:item[`${columnItem.customAction}`],size:"short"}):"",this.chips&&columnItem.chips?(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.h)("bds-chip-tag",{color:item[`${columnItem.chips}`]?item[`${columnItem.chips}`]:"default"},item[`${columnItem.value}`]):"",this.avatar&&columnItem.img?(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.h)("bds-avatar",{size:"extra-small",thumbnail:item[`${columnItem.img}`],name:item[`${columnItem.value}`]}):"",columnItem.chips?"":(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.h)("bds-typo",{variant:"fs-14",bold:this.headerActive===`${columnItem.value}`?"bold":"regular"},item[`${columnItem.value}`]))))))))))}get el(){return(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};DataTable.style=':host{display:block;width:100%}:host .table{display:grid;font-family:"Nunito Sans", "Carbona", "Tahoma", "Helvetica", "Arial", sans-serif;color:var(--color-content-default, #454545);width:100%;border:1px solid var(--color-border-3, rgba(0, 0, 0, 0.06));border-radius:8px;overflow-x:auto;background-color:var(--color-surface-1, #f6f6f6)}:host .table .thead{border-bottom:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));padding:0 16px}:host .table .thead .header{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;text-align:left;-ms-flex-align:center;align-items:center;height:64px;gap:16px}:host .table .thead .header .header-title{height:64px;width:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start;gap:8px}:host .table .thead .header .header-title .title-click{cursor:pointer}:host .table .body-row{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;height:64px;padding:0 16px;gap:16px;border-bottom:1px solid var(--color-border-2, rgba(0, 0, 0, 0.16))}:host .table .body-row .body-item{height:48px;width:100%;gap:8px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start}:host .table .body-row:last-child{border-bottom:none}'}}]);