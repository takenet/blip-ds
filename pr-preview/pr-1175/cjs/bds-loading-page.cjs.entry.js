'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6a53aecf.js');

const blipBallonWhite = {
	"asset-brand-blip-ballon-white-svg": "PHN2ZyB3aWR0aD0iMjkwIiBoZWlnaHQ9IjI5MyIgdmlld0JveD0iMCAwIDI5MCAyOTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yODkuNzU3IDEzNy4zMDVDMjg5LjgwNyAxMzYuMTc5IDI4OS44NDkgMTM1LjA0MiAyODkuODgxIDEzMy44OTdDMjg5Ljk0OSAxMzEuNjg2IDI4OS45OTcgMTI5LjQ2MiAyODkuOTk4IDEyNy4yMDJDMjg5Ljk5OCAxMjcuMTgyIDI5MCAxMjcuMTYyIDI5MCAxMjcuMTQxVjEyNy4xMDZDMjkwIDM1LjE3NjMgMjM5LjM3MSA4LjQ1MDY3ZS0wNiAxNDQuOTggOC40NTA2N2UtMDZDNTAuNjY1IDguNDUwNjdlLTA2IDAgMzUuMTc2MyAwIDEyNy4wNjhWMTI3LjEwNkMwIDIxOS4wMjYgNTAuNjIyNiAyNTQuMjA0IDE0NS4wMDEgMjU0LjIxTDE0NC45OTkgMjg5LjU0MkMxNDQuOTk5IDI5MS40NzUgMTQ2LjU4NSAyOTMuMDcyIDE0OC41MTkgMjkyLjk5N0MxOTYuMzA0IDI5MS4xNzUgMjY3Ljk4MSAyNTIuNTc1IDI4NS44NDQgMTY4LjE0M0MyODcuOSAxNTguOTkyIDI4OS4xOTEgMTQ5LjAxOSAyODkuNzA4IDEzOC4xOTFDMjg5LjcyMyAxMzcuODk1IDI4OS43NDQgMTM3LjYwMiAyODkuNzU3IDEzNy4zMDVaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"
};

const loadingPageCss = ":host{display:block;position:fixed;top:0;left:0;height:100vh;width:100vw;z-index:999}.loading-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;background-color:var(--color-surface-4, #141414);opacity:0.65;mix-blend-mode:multiply}.page_loading{-webkit-animation:growUp 0.8s ease-in-out infinite;animation:growUp 0.8s ease-in-out infinite;width:116px;height:128px;color:var(--color-surface-1, #f6f6f6)}@-webkit-keyframes growUp{from{opacity:0}10%{opacity:1}60%{opacity:1}to{-webkit-transform:scale(1.6);transform:scale(1.6);opacity:0}}@keyframes growUp{from{opacity:0}10%{opacity:1}60%{opacity:1}to{-webkit-transform:scale(1.6);transform:scale(1.6);opacity:0}}";

const BdsLoading = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**Function to transform the svg in a div element. */
    this.formatSvg = (svgContent) => {
      const div = document.createElement('div');
      div.innerHTML = svgContent;
      const svgElm = div.firstElementChild;
      svgElm.removeAttribute('width');
      svgElm.removeAttribute('height');
      return div.innerHTML;
    };
    this.setSvgContent = () => {
      const innerHTML = blipBallonWhite['asset-brand-blip-ballon-white-svg'];
      const svg = atob(innerHTML);
      this.svgContent = this.formatSvg(svg);
    };
    this.svgContent = undefined;
    this.dataTest = null;
  }
  componentWillLoad() {
    this.setSvgContent();
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: "loading-container", "data-test": this.dataTest }, index.h("div", { class: { page_loading: true }, innerHTML: this.svgContent }))));
  }
};
BdsLoading.style = loadingPageCss;

exports.bds_loading_page = BdsLoading;
