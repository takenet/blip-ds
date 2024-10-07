import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-611fd21e.js';

const colorLetter = [
  { value: 'A', color: 'system' },
  { value: 'B', color: 'success' },
  { value: 'C', color: 'warning' },
  { value: 'D', color: 'error' },
  { value: 'E', color: 'info' },
  { value: 'F', color: 'system' },
  { value: 'G', color: 'success' },
  { value: 'H', color: 'warning' },
  { value: 'I', color: 'error' },
  { value: 'J', color: 'info' },
  { value: 'K', color: 'system' },
  { value: 'L', color: 'success' },
  { value: 'M', color: 'warning' },
  { value: 'N', color: 'error' },
  { value: 'O', color: 'info' },
  { value: 'P', color: 'system' },
  { value: 'Q', color: 'success' },
  { value: 'R', color: 'warning' },
  { value: 'S', color: 'error' },
  { value: 'T', color: 'info' },
  { value: 'U', color: 'system' },
  { value: 'V', color: 'success' },
  { value: 'X', color: 'warning' },
  { value: 'Y', color: 'error' },
  { value: 'W', color: 'info' },
  { value: 'Z', color: 'system' },
];

const avatarCss = ":host{position:relative;display:block;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.avatar{position:relative;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-webkit-appearance:none;-moz-appearance:none;appearance:none;height:100%}.avatar::before{content:\"\";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px}.avatar:focus-visible{outline:none}.avatar:focus-visible::before{border-color:var(--color-focus, #c226fb)}.avatar__ellipsis{color:var(--color-surface-1, #f6f6f6)}.avatar__text{color:var(--color-content-default, #454545)}.avatar__icon{color:var(--color-content-default, #454545)}.avatar__btn{border-radius:40px;border:1px solid var(--color-border-2, #e0e0e0);-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;width:100%;height:100%;overflow:hidden;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.avatar__btn__img{background-position:center;background-size:cover}.avatar__btn__text{color:var(--color-content-default, #454545);opacity:1;-webkit-transition:all 0.5s;-moz-transition:all 0.5s;transition:all 0.5s}.avatar__btn__icon{color:var(--color-content-default, #454545);opacity:1;-webkit-transition:all 0.5s;-moz-transition:all 0.5s;transition:all 0.5s}.avatar__btn__thumb{position:absolute;width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;top:0;left:0;cursor:pointer}.avatar__btn__thumb:before{content:\"\";position:absolute;inset:0;background-color:var(--color-content-default, #454545);opacity:0;-webkit-transition:all 0.5s;transition:all 0.5s}.avatar__btn__thumb__icon{position:relative;color:var(--color-surface-1, #f6f6f6);opacity:0;-webkit-transition:all 0.5s;transition:all 0.5s}.avatar__btn__name{position:absolute;width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;top:0;left:0;cursor:pointer;opacity:0;-webkit-transition:all 0.5s;-moz-transition:all 0.5s;transition:all 0.5s}.avatar__btn__name__icon{color:var(--color-content-default, #454545)}.avatar__btn__empty{position:absolute;width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;top:0;left:0;cursor:pointer;opacity:0;-webkit-transition:all 0.5s;-moz-transition:all 0.5s;transition:all 0.5s}.avatar__btn__empty__icon{color:var(--color-content-default, #454545)}.avatar__size--micro{width:24px;height:24px;min-width:24px;min-height:24px}.avatar__size--extra-small{width:32px;height:32px;min-width:32px;min-height:32px}.avatar__size--small{width:40px;height:40px;min-width:40px;min-height:40px}.avatar__size--standard{width:56px;height:56px;min-width:56px;min-height:56px}.avatar__size--large{width:64px;height:64px;min-width:64px;min-height:64px}.avatar__size--extra-large{width:72px;height:72px;min-width:72px;min-height:72px}.avatar__color--system .avatar__btn{background-color:var(--color-system, #b2dffd)}.avatar__color--warning .avatar__btn{background-color:var(--color-warning, #fde99b)}.avatar__color--success .avatar__btn{background-color:var(--color-success, #84ebbc)}.avatar__color--info .avatar__btn{background-color:var(--color-info, #80e3eb)}.avatar__color--error .avatar__btn{background-color:var(--color-error, #f99f9f)}.avatar__color--surface .avatar__btn{background-color:var(--color-surface-2, #e0e0e0);color:var(--color-content-disable, #636363)}.avatar:hover .avatar__btn__thumb:before{opacity:0.5}.avatar:hover .avatar__btn__thumb__icon{opacity:1}.avatar:hover .avatar__btn__text{opacity:0}.avatar:hover .avatar__btn__icon{opacity:0}.avatar:hover .avatar__btn__name{opacity:1}.avatar:hover .avatar__btn__empty{opacity:1}.focus:focus-visible{display:-ms-flexbox;display:flex;position:absolute;border:2px solid var(--color-focus, #c226fb);border-radius:4px;width:100%;height:100%;top:-4px;left:-4px;padding-right:4px;padding-bottom:4px;outline:none}";

const BdsAvatar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.bdsClickAvatar = createEvent(this, "bdsClickAvatar", 7);
    this.bdsImageUpload = createEvent(this, "bdsImageUpload", 7);
    this.typoSize = 'fs-20';
    this.iconSize = 'large';
    this.handleOpenUpload = (e) => {
      const file = this.el.shadowRoot.getElementById('file-input');
      if (e.type === 'click' || (e.type === 'keydown' && (e.key === 'Enter' || e.key === ' '))) {
        file.click();
      }
    };
    this.selectTypoSize = (value) => {
      switch (value) {
        case 'micro':
          this.typoSize = 'fs-12';
          this.iconSize = 'xx-small';
          break;
        case 'extra-small':
          this.typoSize = 'fs-14';
          this.iconSize = 'x-small';
          break;
        case 'small':
          this.typoSize = 'fs-16';
          this.iconSize = 'medium';
          break;
        case 'standard':
          this.typoSize = 'fs-20';
          this.iconSize = 'x-large';
          break;
        case 'large':
          this.typoSize = 'fs-24';
          this.iconSize = 'xxx-large';
          break;
        case 'extra-large':
          this.typoSize = 'fs-32';
          this.iconSize = 'xxx-large';
          break;
        default:
          this.typoSize = 'fs-20';
          this.iconSize = 'medium';
      }
    };
    this.avatarBgColor = (letter) => {
      if (this.color != 'colorLetter') {
        return this.color;
      }
      else if (letter) {
        const currentColor = colorLetter.find((item) => item.value === letter);
        return currentColor.color;
      }
    };
    this.hasThumb = undefined;
    this.name = null;
    this.thumbnail = null;
    this.size = 'standard';
    this.color = 'colorLetter';
    this.upload = false;
    this.openUpload = false;
    this.ellipsis = null;
    this.dataTest = null;
  }
  onUploadClick(e) {
    e.preventDefault();
    this.bdsClickAvatar.emit(e);
    if (this.openUpload) {
      this.handleOpenUpload(e);
    }
  }
  onFileInputChange(event) {
    const fileInput = event.target;
    const files = fileInput.files;
    if (files && files.length > 0) {
      const selectedFile = files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target.result;
        this.thumbnail = imageUrl;
        this.bdsImageUpload.emit(imageUrl);
      };
      reader.readAsDataURL(selectedFile);
    }
  }
  componentWillRender() {
    this.hasThumb = this.thumbnail ? (this.thumbnail.length !== 0 ? true : false) : false;
  }
  render() {
    const arrayName = this.name ? this.name.split(' ') : [];
    const firstName = arrayName.length ? arrayName.shift().charAt(0).toUpperCase() : '';
    const lastName = arrayName.length ? arrayName.pop().charAt(0).toUpperCase() : '';
    this.selectTypoSize(this.size);
    const thumbnailStyle = {
      backgroundImage: `url(${this.hasThumb ? this.thumbnail : null})`,
    };
    return (h(Host, null, h("input", { type: "file", id: "file-input", accept: "image/*", onChange: (event) => this.onFileInputChange(event), style: { display: 'none' } }), h("div", { class: {
        avatar: true,
        [`avatar__color--${this.name && !this.hasThumb
          ? this.avatarBgColor(firstName)
          : this.hasThumb && !this.name
            ? 'surface'
            : !this.name && !this.hasThumb
              ? 'surface'
              : this.name && this.hasThumb
                ? this.avatarBgColor(firstName)
                : null}`]: true,
        [`avatar__size--${this.size}`]: true,
        upload: this.upload || this.openUpload,
      }, onClick: (ev) => this.onUploadClick(ev), tabindex: "0", onKeyDown: (ev) => this.onUploadClick(ev), "data-test": this.dataTest }, this.ellipsis ? (h("div", { class: "avatar__btn" }, h("bds-typo", { margin: false, variant: this.typoSize, tag: "span" }, `+${this.ellipsis}`))) : this.thumbnail ? (this.upload || this.openUpload ? (h("div", { class: "avatar__btn" }, h("div", { class: `avatar__btn__img avatar__size--${this.size}`, style: thumbnailStyle }), h("div", { class: "avatar__btn__thumb" }, h("bds-icon", { class: "avatar__btn__thumb__icon", name: "upload", theme: "outline", size: this.iconSize })))) : (h("div", { class: "avatar__btn" }, h("div", { class: `avatar__btn__img avatar__size--${this.size}`, style: thumbnailStyle })))) : this.name ? (this.upload || this.openUpload ? (h("div", { class: "avatar__btn" }, h("bds-typo", { margin: false, class: "avatar__btn__text", variant: this.typoSize, tag: "span" }, firstName + lastName), h("div", { class: "avatar__btn__name" }, h("bds-icon", { class: "avatar__btn__name__icon", name: "upload", theme: "outline", size: this.iconSize })))) : (h("div", { class: "avatar__btn" }, h("bds-typo", { margin: false, class: "avatar__text", variant: this.typoSize, tag: "span" }, firstName + lastName)))) : this.upload || this.openUpload ? (h("div", { class: "avatar__btn" }, h("bds-icon", { class: "avatar__btn__icon", name: "user-default", theme: "outline", size: this.iconSize }), h("div", { class: "avatar__btn__empty" }, h("bds-icon", { class: "avatar__btn__empty__icon", name: "upload", theme: "outline", size: this.iconSize })))) : this.name === null && !this.hasThumb ? (h("div", { class: "avatar__btn" }, h("bds-icon", { class: "avatar__icon", name: "user-default", theme: "outline", size: this.iconSize }))) : (''))));
  }
  get el() { return getElement(this); }
};
BdsAvatar.style = avatarCss;

export { BdsAvatar as bds_avatar };
