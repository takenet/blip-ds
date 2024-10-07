'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6a53aecf.js');

const loadExtraSmallSvg = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoDQpkPSJNMS42IDhDMC43MTYzNDUgOCAtMC4wMTYwODY5IDcuMjc2NjggMC4xNTk0NjkgNi40MTA2NEMwLjI2MTM5MyA1LjkwNzg0IDAuNDExNjg5IDUuNDE0NzkgMC42MDg5NjQgNC45Mzg1M0MxLjAxMSAzLjk2NzkzIDEuNjAwMjggMy4wODYwMSAyLjM0MzE1IDIuMzQzMTVDMy4wODYwMiAxLjYwMDI4IDMuOTY3OTMgMS4wMTEgNC45Mzg1MyAwLjYwODk2M0M1LjQxNDggMC40MTE2ODkgNS45MDc4NCAwLjI2MTM5MyA2LjQxMDY0IDAuMTU5NDY5QzcuMjc2NjggLTAuMDE2MDg2NiA4IDAuNzE2MzQ1IDggMS42QzggMi40ODM2NSA3LjI2NDQ3IDMuMTc1MDggNi40Mjk0NiAzLjQ2NDIxQzYuMzM5ODEgMy40OTUyNSA2LjI1MDk5IDMuNTI4OTggNi4xNjMxMiAzLjU2NTM4QzUuNTgwNzYgMy44MDY2IDUuMDUxNjEgNC4xNjAxNyA0LjYwNTg5IDQuNjA1ODlDNC4xNjAxNyA1LjA1MTYxIDMuODA2NiA1LjU4MDc2IDMuNTY1MzggNi4xNjMxMkMzLjUyODk4IDYuMjUwOTkgMy40OTUyNSA2LjMzOTgxIDMuNDY0MjEgNi40Mjk0NkMzLjE3NTA4IDcuMjY0NDcgMi40ODM2NiA4IDEuNiA4WiINCmZpbGwtcnVsZT0iZXZlbm9kZCINCmZpbGw9ImN1cnJlbnRDb2xvciINCi8+DQo8L3N2Zz4=';

const loadSmallSvg = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoDQpkPSJNMiAxNkMwLjg5NTQzMSAxNiAtMC4wMTI4NzU0IDE1LjEwMTEgMC4xMjQ4MzkgMTQuMDA1MkMwLjMwMjczNiAxMi41ODk1IDAuNjY5NTk3IDExLjIwMDkgMS4yMTc5MyA5Ljg3NzA2QzIuMDIyIDcuOTM1ODUgMy4yMDA1NSA2LjE3MjAzIDQuNjg2MjkgNC42ODYyOUM2LjE3MjAzIDMuMjAwNTUgNy45MzU4NiAyLjAyMiA5Ljg3NzA3IDEuMjE3OTNDMTEuMjAwOSAwLjY2OTU5NiAxMi41ODk1IDAuMzAyNzM0IDE0LjAwNTIgMC4xMjQ4MzhDMTUuMTAxMSAtMC4wMTI4NzQ2IDE2IDAuODk1NDMgMTYgMkMxNiAzLjEwNDU3IDE1LjA5ODUgMy45ODMwNCAxNC4wMDkyIDQuMTY2MjhDMTMuMTE4OCA0LjMxNjA4IDEyLjI0NiA0LjU2NjI3IDExLjQwNzggNC45MTM0NEM5Ljk1MTg5IDUuNTE2NSA4LjYyOTAyIDYuNDAwNDIgNy41MTQ3MiA3LjUxNDcyQzYuNDAwNDIgOC42MjkwMiA1LjUxNjUgOS45NTE4OSA0LjkxMzQ1IDExLjQwNzhDNC41NjYyNyAxMi4yNDYgNC4zMTYwOCAxMy4xMTg4IDQuMTY2MjggMTQuMDA5MkMzLjk4MzA0IDE1LjA5ODUgMy4xMDQ1NyAxNiAyIDE2WiINCmZpbGwtcnVsZT0iZXZlbm9kZCINCmZpbGw9ImN1cnJlbnRDb2xvciINCi8+DQo8L3N2Zz4=';

const loadStandardSvg = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoDQpkPSJNNCAzMkMxLjc5MDg2IDMyIC0wLjAyNTc1MDcgMzAuMjAyMyAwLjI0OTY3NyAyOC4wMTA0QzAuNjA1NDcyIDI1LjE3ODkgMS4zMzkxOSAyMi40MDE3IDIuNDM1ODYgMTkuNzU0MUM0LjA0NDAxIDE1Ljg3MTcgNi40MDExMSAxMi4zNDQxIDkuMzcyNTkgOS4zNzI1OEMxMi4zNDQxIDYuNDAxMTEgMTUuODcxNyA0LjA0NCAxOS43NTQxIDIuNDM1ODVDMjIuNDAxNyAxLjMzOTE5IDI1LjE3ODkgMC42MDU0NjkgMjguMDEwNCAwLjI0OTY3NkMzMC4yMDIzIC0wLjAyNTc0OTIgMzIgMS43OTA4NiAzMiA0QzMyIDYuMjA5MTQgMzAuMTk3IDcuOTY2MDggMjguMDE4NSA4LjMzMjU3QzI2LjIzNzYgOC42MzIxNyAyNC40OTE5IDkuMTMyNTMgMjIuODE1NiA5LjgyNjg5QzE5LjkwMzggMTEuMDMzIDE3LjI1OCAxMi44MDA4IDE1LjAyOTQgMTUuMDI5NEMxMi44MDA4IDE3LjI1OCAxMS4wMzMgMTkuOTAzOCA5LjgyNjg5IDIyLjgxNTZDOS4xMzI1MyAyNC40OTE5IDguNjMyMTcgMjYuMjM3NiA4LjMzMjU3IDI4LjAxODVDNy45NjYwOCAzMC4xOTcgNi4yMDkxNCAzMiA0IDMyWiINCmZpbGwtcnVsZT0iZXZlbm9kZCINCmZpbGw9ImN1cnJlbnRDb2xvciINCi8+DQo8L3N2Zz4=';

const loadingSpinnerCss = ":host{display:block}.spinner_container{display:-ms-inline-flexbox;display:inline-flex;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.spinner_background{border-radius:50%;border:2px solid}.spinner_background_extra-small{border-width:2px;width:16px;height:16px;-webkit-box-sizing:border-box;box-sizing:border-box}.spinner_background_small{border-width:4px;width:32px;height:32px;-webkit-box-sizing:border-box;box-sizing:border-box}.spinner_background_standard{border-width:8px;width:64px;height:64px;-webkit-box-sizing:border-box;box-sizing:border-box}.spinner_background_main{border-color:var(--color-content-default, #454545);opacity:0.16}.spinner_background_light{border-color:var(--color-content-bright, #ffffff);opacity:0.16}.spinner_background_content{border-color:var(--color-surface-0, #ffffff);opacity:0.16}.spinner_background_positive{border-color:var(--color-positive, #10603b);opacity:0.16}.spinner_background_negative{border-color:var(--color-negative, #e60f0f);opacity:0.16}.spinner_loading{-webkit-animation:rotate 0.5s linear infinite;animation:rotate 0.5s linear infinite;position:absolute}.spinner_loading_extra-small{width:16px;height:16px}.spinner_loading_small{width:32px;height:32px}.spinner_loading_standard{width:64px;height:64px}.spinner_loading_main{color:var(--color-primary, #1e6bf1)}.spinner_loading_light{color:var(--color-content-bright, #ffffff)}.spinner_loading_content{color:var(--color-surface-0, #ffffff)}.spinner_loading_positive{color:var(--color-positive, #10603b)}.spinner_loading_negative{color:var(--color-negative, #e60f0f)}@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}";

const BdsLoadingSpinner = class {
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
      const innerHTML = this.size == 'extra-small'
        ? loadExtraSmallSvg
        : this.size == 'small'
          ? loadSmallSvg
          : this.size == 'standard' && loadStandardSvg;
      const svg = atob(innerHTML.replace('data:image/svg+xml;base64,', ''));
      this.svgContent = this.formatSvg(svg);
    };
    this.svgContent = undefined;
    this.variant = 'primary';
    this.size = 'standard';
    this.color = 'main';
    this.dataTest = null;
  }
  componentWillLoad() {
    this.setSvgContent();
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: {
        spinner_container: true,
        [`spinner_background_${this.size}`]: true,
      }, "data-test": this.dataTest }, index.h("div", { class: {
        spinner_background: true,
        [`spinner_background_${this.size}`]: true,
        [`spinner_background_${this.color}`]: true,
      } }), index.h("div", { class: {
        spinner_loading: true,
        [`spinner_loading_${this.size}`]: true,
        [`spinner_loading_${this.color}`]: true,
      }, innerHTML: this.svgContent }))));
  }
};
BdsLoadingSpinner.style = loadingSpinnerCss;

exports.bds_loading_spinner = BdsLoadingSpinner;
