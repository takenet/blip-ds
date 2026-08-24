import { h, Host } from '@stencil/core';
import loadExtraSmall from '../../assets/svg/load-extra-small.svg';
import loadSmall from '../../assets/svg/load-small.svg';
import loadStandard from '../../assets/svg/load-standard.svg';
export class BdsLoadingSpinner {
  constructor() {
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
        ? loadExtraSmall
        : this.size == 'small'
          ? loadSmall
          : this.size == 'standard' && loadStandard;
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
    return (h(Host, null, h("div", { class: {
        spinner_container: true,
        [`spinner_background_${this.size}`]: true,
      }, "data-test": this.dataTest }, h("div", { class: {
        spinner_background: true,
        [`spinner_background_${this.size}`]: true,
        [`spinner_background_${this.color}`]: true,
      } }), h("div", { class: {
        spinner_loading: true,
        [`spinner_loading_${this.size}`]: true,
        [`spinner_loading_${this.color}`]: true,
      }, innerHTML: this.svgContent }))));
  }
  static get is() { return "bds-loading-spinner"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["loading-spinner.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["loading-spinner.css"]
    };
  }
  static get properties() {
    return {
      "variant": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "LoadingSpinnerVariant",
          "resolved": "\"delete\" | \"ghost\" | \"primary\" | \"secondary\" | \"tertiary\"",
          "references": {
            "LoadingSpinnerVariant": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Sets the color of the spinner, can be 'primary', 'secondary' or 'ghost'"
        },
        "attribute": "variant",
        "reflect": false,
        "defaultValue": "'primary'"
      },
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "loadingSize",
          "resolved": "\"extra-small\" | \"small\" | \"standard\"",
          "references": {
            "loadingSize": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Size, Entered as one of the size. Can be one of:\n'small', 'standard', 'large'."
        },
        "attribute": "size",
        "reflect": false,
        "defaultValue": "'standard'"
      },
      "color": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "colorsVariants",
          "resolved": "\"content\" | \"light\" | \"main\" | \"negative\" | \"positive\"",
          "references": {
            "colorsVariants": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Color, Entered as one of the color. Can be one of:\n'default', 'white'."
        },
        "attribute": "color",
        "reflect": false,
        "defaultValue": "'main'"
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
      "svgContent": {}
    };
  }
}
