"use strict";(self.webpackChunkblip_ds=self.webpackChunkblip_ds||[]).push([[1618],{"./dist/esm/bds-table-body.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{bds_table_body:()=>TableBody});var _index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-611fd21e.js");const TableBody=class{constructor(hostRef){(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.multipleRows=!1}componentWillLoad(){const bdsTable=this.element.closest("bds-table");!bdsTable||"true"!==bdsTable.getAttribute("collapse")&&!0!==bdsTable.collapse||(this.multipleRows=!0)}render(){return(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{host:!0,multiple:this.multipleRows}},(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))}get element(){return(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};TableBody.style=".sc-bds-table-body-h{display:table-row-group;height:64px}.multiple.sc-bds-table-body-h{border-bottom:1px solid var(--color-border-2, rgba(0, 0, 0, 0.16))}.sc-bds-table-body-h:last-child{border-bottom:none}"}}]);