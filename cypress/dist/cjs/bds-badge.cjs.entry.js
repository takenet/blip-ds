'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6a53aecf.js');

const badgeCss = "@-webkit-keyframes pulse{0%{scale:100%;opacity:1}20%{scale:140%;opacity:0}21%{scale:100%;opacity:1}40%{scale:140%;opacity:0}41%{scale:140%;opacity:0}100%{scale:140%;opacity:0}}@keyframes pulse{0%{scale:100%;opacity:1}20%{scale:140%;opacity:0}21%{scale:100%;opacity:1}40%{scale:140%;opacity:0}41%{scale:140%;opacity:0}100%{scale:140%;opacity:0}}.color--system{background-color:var(--color-system, #b2dffd);color:var(--color-system, #b2dffd)}.color--danger{background-color:var(--color-error, #f99f9f);color:var(--color-error, #f99f9f)}.color--warning{background-color:var(--color-warning, #fde99b);color:var(--color-warning, #fde99b)}.color--success{background-color:var(--color-success, #84ebbc);color:var(--color-success, #84ebbc)}.color--neutral{background-color:var(--color-surface-3, #cfcfcf);color:var(--color-surface-3, #cfcfcf)}:host{display:-ms-inline-flexbox;display:inline-flex}.chip_size{min-width:24px}.chip_badge .status{width:8px;height:8px}.chip_badge .status--circle{width:0;height:0;border:4px solid;border-radius:4px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.chip_badge .status--circle-true::before{content:\"\";width:8px;height:8px;position:absolute;border:1px solid;border-radius:8px;-webkit-animation:pulse 2s ease-out infinite;animation:pulse 2s ease-out infinite}.chip_badge .status--triangle{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;width:0;height:0;border-left:4px solid transparent;border-right:4px solid transparent;border-bottom:8px solid}.chip_badge .status--triangle-reverse{width:0;height:0;border-left:4px solid transparent;border-right:4px solid transparent;border-top:8px solid}.chip_badge .status--polygon{width:0;height:0;border:4px solid;rotate:45deg}.chip_badge .status--square{width:0;height:0;border:4px solid}.chip_badge .icon{position:relative}.chip_badge .icon bds-icon{position:absolute}.chip_badge .icon .bds-icon{color:var(--color-content-default, #454545)}.chip_badge .icon--circle{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.chip_badge .icon--circle .trim{width:24px;height:24px;border-radius:16px}.chip_badge .icon--circle .trim-true::before{content:\"\";width:24px;height:24px;left:-2px;top:-2px;position:absolute;border:2px solid;border-radius:16px;-webkit-animation:pulse 2s ease-out infinite;animation:pulse 2s ease-out infinite}.chip_badge .icon--triangle{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:end;align-items:end}.chip_badge .icon--triangle .trim{width:24px;height:24px;-webkit-clip-path:polygon(50% 0, 100% 100%, 0 100%);clip-path:polygon(50% 0, 100% 100%, 0 100%)}.chip_badge .icon--triangle-reverse{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:start;align-items:start}.chip_badge .icon--triangle-reverse .trim{width:24px;height:24px;-webkit-clip-path:polygon(50% 100%, 0 0, 100% 0);clip-path:polygon(50% 100%, 0 0, 100% 0)}.chip_badge .icon--polygon{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.chip_badge .icon--polygon .trim{width:24px;height:24px;-webkit-clip-path:polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);clip-path:polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)}.chip_badge .icon--square{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.chip_badge .icon--square .trim{width:24px;height:24px}.chip_badge .number{display:-ms-flexbox;display:flex;height:24px;padding:0 8px;border-radius:16px;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;position:relative}.chip_badge .number--true::before{content:\"\";width:100%;height:24px;left:-2px;top:-2px;position:absolute;border:2px solid;border-radius:16px;-webkit-animation:pulse 2s ease-out infinite;animation:pulse 2s ease-out infinite}.chip_badge .number .number_text{color:var(--color-content-default, #454545)}.chip_badge .empty{display:-ms-flexbox;display:flex;min-height:24px;min-width:24px;position:relative}.chip_badge .empty--true::before{content:\"\";width:100%;height:24px;left:-2px;top:-2px;position:absolute;border:2px solid;border-radius:16px;-webkit-animation:pulse 2s ease-out infinite;animation:pulse 2s ease-out infinite}.chip_badge .empty--circle{border-radius:50%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.chip_badge .empty--circle .trim{width:24px;height:24px;border-radius:16px}.chip_badge .empty--circle .trim-true::before{content:\"\";width:24px;height:24px;left:-2px;top:-2px;position:absolute;border:2px solid;border-radius:16px;-webkit-animation:pulse 2s ease-out infinite;animation:pulse 2s ease-out infinite}.chip_badge .empty--triangle{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:end;align-items:end}.chip_badge .empty--triangle .trim{width:24px;height:24px;-webkit-clip-path:polygon(50% 0, 100% 100%, 0 100%);clip-path:polygon(50% 0, 100% 100%, 0 100%)}.chip_badge .empty--triangle-reverse{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:start;align-items:start}.chip_badge .empty--triangle-reverse .trim{width:24px;height:24px;-webkit-clip-path:polygon(50% 100%, 0 0, 100% 0);clip-path:polygon(50% 100%, 0 0, 100% 0)}.chip_badge .empty--polygon{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.chip_badge .empty--polygon .trim{width:24px;height:24px;-webkit-clip-path:polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);clip-path:polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)}.chip_badge .empty--square{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.chip_badge .empty--square .trim{width:24px;height:24px}";

const Badge = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.type = 'status';
    this.color = 'system';
    this.shape = 'circle';
    this.icon = null;
    this.number = undefined;
    this.animation = false;
    this.dataTest = null;
  }
  componentWillLoad() {
    if (this.icon === null && this.number) {
      this.type = 'number';
    }
    else if (!this.number && this.icon) {
      this.type = 'icon';
    }
    else if (this.number && this.icon) {
      this.type = 'number';
    }
    else if (this.number === 0) {
      this.type = 'empty';
    }
  }
  numberChanged(newNumber) {
    if (newNumber === 0) {
      this.type = 'empty';
    }
    else if (this.icon === null && newNumber !== null) {
      this.type = 'number';
    }
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: {
        chip_badge: true,
        chip_size: this.number !== 0 ? true : false,
        [`chip_badge--${this.shape}`]: true,
        [`chip_badge--${this.color}`]: true,
      }, "data-test": this.dataTest }, this.type === 'status' && (index.h("div", { class: {
        status: true,
        [`status--${this.shape}`]: true,
        [`color--${this.color}`]: true,
        [`status--circle-${this.animation}`]: true,
      } })), this.type === 'icon' && (index.h("div", { class: { icon: true, [`icon--${this.shape}`]: true } }, index.h("div", { class: { [`color--${this.color}`]: true, trim: true, [`trim-${this.animation}`]: true } }), index.h("bds-icon", { size: "xxx-small", name: this.icon }))), this.type === 'number' && (index.h("div", { class: {
        number: true,
        [`color--${this.color}`]: true,
        [`number--${this.animation}`]: true,
      } }, index.h("bds-typo", { class: "number_text", variant: "fs-12", bold: "bold", margin: false }, this.number >= 999 ? '999+' : this.number))), this.type === 'empty' && (index.h("div", { class: {
        empty: true,
        [`color--${this.color}`]: true,
        [`empty--${this.shape}`]: true,
        [`empty--${this.animation}`]: true,
      } })))));
  }
  static get watchers() { return {
    "number": ["numberChanged"]
  }; }
};
Badge.style = badgeCss;

exports.bds_badge = Badge;
