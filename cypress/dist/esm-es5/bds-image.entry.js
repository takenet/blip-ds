var __awaiter=this&&this.__awaiter||function(t,e,r,i){function n(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,a){function s(t){try{h(i.next(t))}catch(e){a(e)}}function o(t){try{h(i["throw"](t))}catch(e){a(e)}}function h(t){t.done?r(t.value):n(t.value).then(s,o)}h((i=i.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var r={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},i,n,a,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(t){return function(e){return h([t,e])}}function h(o){if(i)throw new TypeError("Generator is already executing.");while(s&&(s=0,o[0]&&(r=0)),r)try{if(i=1,n&&(a=o[0]&2?n["return"]:o[0]?n["throw"]||((a=n["return"])&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;if(n=0,a)o=[o[0]&2,a.value];switch(o[0]){case 0:case 1:a=o;break;case 4:r.label++;return{value:o[1],done:false};case 5:r.label++;n=o[1];o=[0];continue;case 7:o=r.ops.pop();r.trys.pop();continue;default:if(!(a=r.trys,a=a.length>0&&a[a.length-1])&&(o[0]===6||o[0]===2)){r=0;continue}if(o[0]===3&&(!a||o[1]>a[0]&&o[1]<a[3])){r.label=o[1];break}if(o[0]===6&&r.label<a[1]){r.label=a[1];a=o;break}if(a&&r.label<a[2]){r.label=a[2];r.ops.push(o);break}if(a[2])r.ops.pop();r.trys.pop();continue}o=e.call(t,r)}catch(h){o=[6,h];n=0}finally{i=a=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};import{r as registerInstance,h}from"./index-611fd21e.js";var imageCss=":host{display:inline-block}";var Image=function(){function t(t){registerInstance(this,t);this.src=undefined;this.alt=undefined;this.width=undefined;this.height=undefined;this.objectFit="cover";this.dataTest=null;this.imageLoaded=false;this.loadError=false;this.currentSrc=undefined}t.prototype.loadImage=function(){return __awaiter(this,void 0,void 0,(function(){var t,e,r,i;return __generator(this,(function(n){switch(n.label){case 0:if(!this.src)return[3,7];n.label=1;case 1:n.trys.push([1,6,,7]);return[4,fetch(this.src)];case 2:t=n.sent();if(!t.ok)return[3,4];return[4,t.blob()];case 3:e=n.sent();r=URL.createObjectURL(e);this.currentSrc=r;this.imageLoaded=true;return[3,5];case 4:this.loadError=true;n.label=5;case 5:return[3,7];case 6:i=n.sent();this.loadError=true;return[3,7];case 7:return[2]}}))}))};t.prototype.render=function(){if(!this.imageLoaded&&!this.loadError){this.loadImage()}if(this.imageLoaded){return h("img",{src:this.currentSrc,alt:this.alt,style:{objectFit:this.objectFit,width:this.width,height:this.height},"data-test":this.dataTest,draggable:false})}else if(!this.src){return h("div",{style:{width:this.width||this.height?this.width:"100%"}},h("bds-illustration",{type:"empty-states",name:"image-not-found",alt:this.alt,"data-test":this.dataTest}))}else{return h("div",{style:{width:this.width||this.height?this.width:"100%"}},h("bds-illustration",{type:"empty-states",name:"broken-image",alt:this.alt,"data-test":this.dataTest}))}};return t}();Image.style=imageCss;export{Image as bds_image};