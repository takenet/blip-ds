import { h, Host } from '@stencil/core';
import { colorLetter } from './color-letter';
export class BdsAvatar {
  constructor() {
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
  static get is() { return "bds-avatar"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["avatar.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["avatar.css"]
    };
  }
  static get properties() {
    return {
      "name": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Name, Inserted for highlighted osuary name. Enter the full name."
        },
        "attribute": "name",
        "reflect": false,
        "defaultValue": "null"
      },
      "thumbnail": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Thumbnail, Inserted to highlight user image. Url field."
        },
        "attribute": "thumbnail",
        "reflect": false,
        "defaultValue": "null"
      },
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "avatarSize",
          "resolved": "\"extra-large\" | \"extra-small\" | \"large\" | \"micro\" | \"small\" | \"standard\"",
          "references": {
            "avatarSize": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Size, Entered as one of the size. Can be one of:\n'extra-small', 'small', 'standard', 'large', 'extra-large'."
        },
        "attribute": "size",
        "reflect": false,
        "defaultValue": "'standard'"
      },
      "color": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "colors",
          "resolved": "\"colorLetter\" | \"error\" | \"info\" | \"success\" | \"surface\" | \"system\" | \"warning\"",
          "references": {
            "colors": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Color, Entered as one of the color. Can be one of:\n'system', 'success', 'warning', 'error', 'info'."
        },
        "attribute": "color",
        "reflect": false,
        "defaultValue": "'colorLetter'"
      },
      "upload": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Upload, Serve to enable upload function on avatar."
        },
        "attribute": "upload",
        "reflect": false,
        "defaultValue": "false"
      },
      "openUpload": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "When set to true, allows the avatar to be clicked to select and upload an image."
        },
        "attribute": "open-upload",
        "reflect": false,
        "defaultValue": "false"
      },
      "ellipsis": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Ellipses, serves to indicate the user number in the listing."
        },
        "attribute": "ellipsis",
        "reflect": false,
        "defaultValue": "null"
      },
      "dataTest": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Data test is the prop to specifically test the component action object."
        },
        "attribute": "data-test",
        "reflect": false,
        "defaultValue": "null"
      }
    };
  }
  static get states() {
    return {
      "hasThumb": {}
    };
  }
  static get events() {
    return [{
        "method": "bdsClickAvatar",
        "name": "bdsClickAvatar",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "bdsImageUpload",
        "name": "bdsImageUpload",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "el"; }
}
