var __awaiter=this&&this.__awaiter||function(e,t,i,n){function s(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function o(e){try{l(n.next(e))}catch(t){r(t)}}function a(e){try{l(n["throw"](e))}catch(t){r(t)}}function l(e){e.done?i(e.value):s(e.value).then(o,a)}l((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var i={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},n,s,r,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(e){return function(t){return l([e,t])}}function l(a){if(n)throw new TypeError("Generator is already executing.");while(o&&(o=0,a[0]&&(i=0)),i)try{if(n=1,s&&(r=a[0]&2?s["return"]:a[0]?s["throw"]||((r=s["return"])&&r.call(s),0):s.next)&&!(r=r.call(s,a[1])).done)return r;if(s=0,r)a=[a[0]&2,r.value];switch(a[0]){case 0:case 1:r=a;break;case 4:i.label++;return{value:a[1],done:false};case 5:i.label++;s=a[1];a=[0];continue;case 7:a=i.ops.pop();i.trys.pop();continue;default:if(!(r=i.trys,r=r.length>0&&r[r.length-1])&&(a[0]===6||a[0]===2)){i=0;continue}if(a[0]===3&&(!r||a[1]>r[0]&&a[1]<r[3])){i.label=a[1];break}if(a[0]===6&&i.label<r[1]){i.label=r[1];r=a;break}if(r&&i.label<r[2]){i.label=r[2];i.ops.push(a);break}if(r[2])i.ops.pop();i.trys.pop();continue}a=t.call(e,i)}catch(l){a=[6,l];s=0}finally{n=r=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};var __spreadArray=this&&this.__spreadArray||function(e,t,i){if(i||arguments.length===2)for(var n=0,s=t.length,r;n<s;n++){if(r||!(n in t)){if(!r)r=Array.prototype.slice.call(t,0,n);r[n]=t[n]}}return e.concat(r||Array.prototype.slice.call(t))};System.register(["./p-d105fb25.system.js","./p-aa2c9d5b.system.js"],(function(e){"use strict";var t,i,n,s,r,o,a;return{setters:[function(e){t=e.r;i=e.c;n=e.h;s=e.g},function(e){r=e.a;o=e.b;a=e.c}],execute:function(){var l=":host{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;position:relative}.carousel{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;max-width:1920px;position:relative}.carousel_slide{width:100%;position:relative;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 56px}.carousel_slide_fullwidth{padding:0}.carousel_slide_frame{width:100%;display:-ms-flexbox;display:flex;overflow:hidden;-webkit-transition:height ease-in-out 0.5s;-moz-transition:height ease-in-out 0.5s;transition:height ease-in-out 0.5s}.carousel_slide_frame_loading{opacity:0;pointer-events:none}.carousel_slide_frame *{-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;-webkit-user-drag:none;-khtml-user-drag:none;-moz-user-drag:none;-o-user-drag:none}.carousel_slide_frame *[slot=loop]{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:relative;right:0;-webkit-transition:right ease-in-out 0.75s;-moz-transition:right ease-in-out 0.75s;transition:right ease-in-out 0.75s}.carousel_slide_frame_repeater{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:relative;right:0;-webkit-transition:right ease-in-out 0.75s;-moz-transition:right ease-in-out 0.75s;transition:right ease-in-out 0.75s}.carousel_slide_loading{opacity:0;pointer-events:none;position:absolute;inset:0}.carousel_slide_loading_visible{opacity:1;pointer-events:all}.carousel_loading_bar{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 60px;margin-top:8px}.carousel_loading_bar_fullwidth{padding:0 4px}.carousel_buttons{position:absolute;width:100%;height:0px;top:calc(50% - 20px);left:0;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-sizing:border-box;box-sizing:border-box}.carousel_buttons_fullwidth{padding:0 16px}.carousel_bullets{margin-top:16px;margin-bottom:16px}";var u=e("bds_carousel",function(){function e(e){var n=this;t(this,e);this.bdsChangeCarousel=i(this,"bdsChangeCarousel",7);this.itemsElement=null;this.setInternalItens=function(e){var t=Math.floor(e.length/n.slidePerPage);var i=e.length/n.slidePerPage;var s=a(i);n.internalItens=s;n.isWhole=e.length-n.slidePerPage*t};this.startCountSeconds=function(){if(n.autoplay){n.incrementSeconds=setInterval((function(){n.seconds+=.1}),100)}};this.updateHeight=function(e){var t=e[n.itemActivated*n.slidePerPage-n.slidePerPage];var i=240;if(n.slidePerPage>1){var s=n.isWhole>0&&n.itemActivated==n.internalItens.length?e.slice(n.internalItens.length-n.internalItens.length-n.slidePerPage,n.itemActivated*n.slidePerPage):e.slice(n.itemActivated*n.slidePerPage-n.slidePerPage,n.itemActivated*n.slidePerPage);i=r(s)[0]}else{i=t.offsetHeight}n.frame.style.height="".concat(i,"px")};this.refFrame=function(e){n.frame=e};this.refFrameRepeater=function(e){n.frameRepeater=e};this.onMouseOver=function(){if(n.autoplayHoverPause){n.pauseAutoplay()}};this.onMouseOut=function(){if(n.autoplayHoverPause){n.runAutoplay()}};this.onMouseDown=function(e){if(n.grab){n.framePressed=true;var t=n.frame.offsetLeft+n.element.offsetLeft;n.startX=e.pageX-t;n.endX=e.pageX-t;n.frame.style.cursor="grabbing"}};this.onMouseEnter=function(){if(n.grab){n.frame.style.cursor="grab"}};this.onMouseUp=function(){if(n.grab){n.framePressed=false;n.frame.style.cursor="grab";n.boundItems();if(n.autoplayHoverPause){n.pauseAutoplay()}}};this.onMouseMove=function(e){if(n.grab){if(!n.framePressed)return;e.preventDefault();var t=n.frame.offsetLeft+n.element.offsetLeft;n.endX=e.pageX-t}};this.boundItems=function(){if(n.endX<n.startX){n.nextSlide();n.seconds=0}else if(n.endX>n.startX){n.prevSlide();n.seconds=0}};this.itemActivated=1;this.seconds=0;this.internalItens=undefined;this.isWhole=0;this.heightCarousel=240;this.framePressed=false;this.startX=undefined;this.endX=undefined;this.autoplay=false;this.autoplayTimeout=5e3;this.autoplayHoverPause=false;this.autoHeight=false;this.bullets=true;this.infiniteLoop=false;this.arrows="outside";this.slidePerPage=1;this.gap="none";this.grab=true;this.loading=false;this.secondsLimit=this.autoplayTimeout/1e3}e.prototype.componentWillLoad=function(){this.itemsElement=this.element.getElementsByTagName("bds-carousel-item");this.setInternalItens(Array.from(this.itemsElement))};e.prototype.componentDidRender=function(){if(!this.loading){if(this.gap!="none"){this.frame.style.width="calc(100% + ".concat(o(this.gap),"px)");this.frame.style.marginLeft="-".concat(o(this.gap)/2,"px")}for(var e=0;e<this.itemsElement.length;e++){var t=this.frame.offsetWidth>=1920?1920:this.frame.offsetWidth;this.itemsElement[e].style.width="".concat(t/this.slidePerPage,"px");this.itemsElement[e].style.padding="0 ".concat(o(this.gap)/2,"px")}if(this.autoHeight)this.updateHeight(Array.from(this.itemsElement))}};e.prototype.componentDidLoad=function(){this.startCountSeconds()};e.prototype.itemActivatedChanged=function(){var e=this;var t=this.internalItens.find((function(t){return t.id===e.itemActivated}));var i=!this.frame?0:this.frame.offsetWidth*(this.itemActivated-1);if(this.frameRepeater){if(t.isWhole){var n=this.itemsElement[1].offsetWidth*(this.slidePerPage-this.isWhole);this.frameRepeater.style.right="".concat(i-n,"px")}else{this.frameRepeater.style.right="".concat(i,"px")}}this.bdsChangeCarousel.emit({value:t})};e.prototype.autoplayTimeoutChanged=function(){this.secondsLimit=this.autoplayTimeout/1e3};e.prototype.secondsChanged=function(){if(this.seconds>=this.secondsLimit){this.nextSlide();this.seconds=0}};e.prototype.isWholeChanged=function(){var e,t;if(this.internalItens!=undefined){if(this.isWhole>0){var i={id:((e=this.internalItens)===null||e===void 0?void 0:e.length)+1,label:"Frame - ".concat(((t=this.internalItens)===null||t===void 0?void 0:t.length)+1),isWhole:true};this.internalItens=__spreadArray(__spreadArray([],this.internalItens,true),[i],false)}}};e.prototype.buildCarousel=function(){return __awaiter(this,void 0,void 0,(function(){var e=this;return __generator(this,(function(t){this.itemsElement=this.element.getElementsByTagName("bds-carousel-item");this.loading=true;setTimeout((function(){return e.setInternalItens(Array.from(e.itemsElement)),e.loading=false,e.setActivated(1)}),1e3);return[2]}))}))};e.prototype.nextSlide=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){if(this.itemActivated==this.internalItens.length){if(this.infiniteLoop||this.autoplay){this.itemActivated=1}else{this.itemActivated=this.itemActivated}}else{this.itemActivated=this.itemActivated+1}clearInterval(this.incrementSeconds);this.seconds=0;this.startCountSeconds();return[2]}))}))};e.prototype.prevSlide=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){if(this.itemActivated==1){if(this.infiniteLoop||this.autoplay){this.itemActivated=this.internalItens.length}else{this.itemActivated=this.itemActivated}}else{this.itemActivated=this.itemActivated-1}clearInterval(this.incrementSeconds);this.seconds=0;this.startCountSeconds();return[2]}))}))};e.prototype.setActivated=function(e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.itemActivated=e;clearInterval(this.incrementSeconds);this.seconds=0;this.startCountSeconds();return[2]}))}))};e.prototype.pauseAutoplay=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){clearInterval(this.incrementSeconds);return[2]}))}))};e.prototype.runAutoplay=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.startCountSeconds();return[2]}))}))};e.prototype.render=function(){var e=this;return n("div",{class:{carousel:true}},n("div",{class:{carousel_slide:true,carousel_slide_fullwidth:this.arrows!="outside"}},n("div",{ref:function(t){return e.refFrame(t)},class:{carousel_slide_frame:true,carousel_slide_frame_loading:this.loading},onMouseOver:function(){return e.onMouseOver()},onMouseOut:function(){return e.onMouseOut()},onMouseDown:function(t){return e.onMouseDown(t)},onMouseEnter:function(){return e.onMouseEnter()},onMouseUp:function(){return e.onMouseUp()},onMouseMove:function(t){return e.onMouseMove(t)},tabindex:"0"},n("div",{ref:function(t){return e.refFrameRepeater(t)},class:{carousel_slide_frame_repeater:true},tabindex:"0",role:"tabpanel"},n("slot",null))),n("bds-grid",{class:{carousel_slide_loading:true,carousel_slide_loading_visible:this.loading}},n("bds-skeleton",{height:"100%",shape:"square",width:"100%"})),this.arrows!="none"&&!this.loading&&n("div",{class:{carousel_buttons:true,carousel_buttons_fullwidth:this.arrows=="inside"}},n("bds-button-icon",{variant:"tertiary",icon:"arrow-left",size:"short",onBdsClick:function(){return e.prevSlide()},disabled:!this.infiniteLoop&&this.itemActivated<=1}),n("bds-button-icon",{variant:"tertiary",icon:"arrow-right",size:"short",onBdsClick:function(){return e.nextSlide()},disabled:!this.infiniteLoop&&this.itemActivated>=this.internalItens.length}))),this.autoplay&&(this.loading?n("bds-skeleton",{class:{carousel_loading_bar:true,carousel_loading_bar_fullwidth:this.arrows!="outside"},height:"8px",width:"100%",shape:"square"}):n("bds-loading-bar",{class:{carousel_loading_bar:true,carousel_loading_bar_fullwidth:this.arrows!="outside"},percent:this.seconds*100/this.secondsLimit,size:"small"})),this.bullets&&n("div",{class:{carousel_bullets:true}},this.loading?n("bds-grid",{gap:"2","justify-content":"center"},n("bds-skeleton",{height:"24px",width:"24px",shape:"circle"}),n("bds-skeleton",{height:"24px",width:"24px",shape:"circle"}),n("bds-skeleton",{height:"24px",width:"24px",shape:"circle"})):this.internalItens&&n("bds-radio-group",null,n("bds-grid",{gap:"2","justify-content":"center"},this.internalItens.map((function(t,i){return n("bds-radio",{key:i,checked:t.id==e.itemActivated,value:t.id.toString(),onBdsClickChange:function(){return e.setActivated(t.id)}})}))))),n("slot",{name:"after"}))};Object.defineProperty(e.prototype,"element",{get:function(){return s(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{itemActivated:["itemActivatedChanged"],autoplayTimeout:["autoplayTimeoutChanged"],seconds:["secondsChanged"],isWhole:["isWholeChanged"]}},enumerable:false,configurable:true});return e}());u.style=l}}}));