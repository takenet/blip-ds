System.register(["./p-d105fb25.system.js"],(function(n){"use strict";var e,t,i,r;return{setters:[function(n){e=n.r;t=n.c;i=n.h;r=n.g}],execute:function(){var o=':Host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;cursor:pointer;text-decoration:underline;white-space:nowrap;margin-left:16px;-ms-flex-order:2;order:2}.banner__link{position:relative}.banner__link::before{content:"";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px}.banner__link:focus-visible{outline:none}.banner__link:focus-visible::before{border-color:var(--color-focus, #c226fb)}';var s=n("bds_banner_link",function(){function n(n){var i=this;e(this,n);this.bdsBannerLink=t(this,"bdsBannerLink",7);this._buttonClickHandler=function(){i.bdsBannerLink.emit(i.el);window.open(i.link)};this.link=undefined;this.dataTest=null}n.prototype.handleKeyDown=function(n){if(n.key=="Enter"){this.bdsBannerLink.emit(this.el);window.open(this.link)}};n.prototype.render=function(){var n=this;var e="a";return i(e,{class:{banner__link:true},onClick:function(){return n._buttonClickHandler()},"data-test":this.dataTest,tabindex:"0",onKeyDown:this.handleKeyDown.bind(this)},i("slot",null))};Object.defineProperty(n.prototype,"el",{get:function(){return r(this)},enumerable:false,configurable:true});return n}());s.style=o}}}));