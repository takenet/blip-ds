import { h, Host } from '@stencil/core';
import * as countriesDefault from './countries.json';
import * as countriesPtBR from './countries-pt_BR.json';
import * as countriesEnUS from './countries-en_US.json';
import * as countriesEsES from './countries-es_ES.json';
export class InputPhoneNumber {
  constructor() {
    this.countries = {};
    // Event handlers for bds-input integration
    this.onBdsInputChange = (event) => {
      const { value } = event.detail;
      this.text = value || '';
      // Don't call numberValidation here as bds-input handles its own validation
    };
    this.onBdsInputInput = (event) => {
      this.bdsInput.emit(event.detail);
    };
    this.onBdsInputFocus = () => {
      this.bdsFocus.emit();
      this.isPressed = true;
    };
    this.onBdsInputBlur = () => {
      this.bdsBlur.emit();
      this.isPressed = false;
    };
    this.handler = (event) => {
      const { value } = event.detail;
      this.value = value.code;
      this.selectedCountry = value.flag;
      this.isoCode = value.isoCode;
      this.bdsPhoneNumberChange.emit({
        value: this.text,
        code: this.value,
        isoCode: this.isoCode,
        country: this.selectedCountry,
      });
      this.toggle();
    };
    this.toggle = () => {
      if (!this.disabled) {
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
          // Reset search when opening
          this.searchTerm = '';
          this.resetFilterCountries();
        }
      }
    };
    this.internalFilterCountries = (term) => {
      this.filterCountries(term);
    };
    this.resetFilterCountries = () => {
      this.filteredCountries = { ...this.countries };
    };
    this.onSearchInput = (event) => {
      const input = event.target;
      this.searchTerm = input.value || '';
      this.internalFilterCountries(this.searchTerm);
    };
    this.onSearchKeyDown = (event) => {
      // Prevent search input from closing the dropdown
      event.stopPropagation();
    };
    this.isOpen = false;
    this.selectedCountry = undefined;
    this.isoCode = undefined;
    this.validationDanger = false;
    this.validationMesage = '';
    this.isPressed = false;
    this.searchTerm = '';
    this.filteredCountries = {};
    this.options = [];
    this.text = '';
    this.value = '+55';
    this.danger = false;
    this.success = false;
    this.disabled = false;
    this.required = undefined;
    this.helperMessage = '';
    this.errorMessage = '';
    this.successMessage = '';
    this.requiredErrorMessage = undefined;
    this.numberErrorMessage = undefined;
    this.dataTest = null;
    this.dtSelectFlag = null;
    this.label = 'Phone number';
    this.icon = '';
    this.language = 'pt_BR';
    this.initialCountryFlag = undefined;
    this.initialIsoCode = undefined;
    this.enableSearch = false;
    this.searchPlaceholder = 'Search countries...';
  }
  async removeFocus() {
    this.onBdsInputBlur();
  }
  valueChanged() {
    for (const option of this.childOptions) {
      option.selected = this.value === option.value;
    }
  }
  handleWindow(ev) {
    if (!this.el.contains(ev.target)) {
      this.isOpen = false;
    }
  }
  languageChanged() {
    this.updateCountries();
  }
  initialCountryFlagChanged() {
    this.updateCountries();
  }
  initialIsoCodeChanged() {
    this.updateCountries();
  }
  updateCountries() {
    switch (this.language) {
      case 'pt_BR':
        this.countries = countriesPtBR['default'];
        break;
      case 'en_US':
        this.countries = countriesEnUS['default'];
        break;
      case 'es_ES':
        this.countries = countriesEsES['default'];
        break;
      default:
        this.countries = countriesDefault['default'];
        break;
    }
    // Reset filtered countries to show all initially
    this.filteredCountries = { ...this.countries };
    const flagsNames = Object.keys(this.countries);
    // Priority order for setting initial country:
    // 1. initialCountryFlag prop
    // 2. initialIsoCode prop  
    // 3. value prop (country code)
    // 4. default (first country)
    let countryIndex = -1;
    if (this.initialCountryFlag && flagsNames.includes(this.initialCountryFlag)) {
      countryIndex = flagsNames.indexOf(this.initialCountryFlag);
      this.selectedCountry = this.initialCountryFlag;
      this.value = this.countries[this.initialCountryFlag].code;
      this.isoCode = this.countries[this.initialCountryFlag].isoCode;
    }
    else if (this.initialIsoCode) {
      countryIndex = Object.values(this.countries).findIndex((country) => {
        const isoUpper = this.initialIsoCode.toUpperCase();
        // Check for exact match first, then partial match
        return country.isoCode === isoUpper ||
          country.isoCode.startsWith(isoUpper + ' ') ||
          country.isoCode.endsWith(' ' + isoUpper) ||
          country.isoCode === `${isoUpper} / ${isoUpper}` ||
          country.isoCode.includes(`${isoUpper} /`);
      });
      if (countryIndex !== -1) {
        this.selectedCountry = flagsNames[countryIndex];
        this.value = this.countries[flagsNames[countryIndex]].code;
        this.isoCode = this.countries[flagsNames[countryIndex]].isoCode;
      }
    }
    else if (this.value) {
      countryIndex = Object.values(this.countries).findIndex((country) => country.code === this.value);
      if (countryIndex !== -1) {
        this.selectedCountry = flagsNames[countryIndex];
        this.isoCode = this.countries[flagsNames[countryIndex]].isoCode;
      }
    }
    // Fallback to first country if none found
    if (countryIndex === -1) {
      this.selectedCountry = this.selectedCountry || flagsNames[0];
      this.isoCode = this.isoCode || this.countries[flagsNames[0]].isoCode;
      this.value = this.value || this.countries[flagsNames[0]].code;
    }
  }
  componentWillLoad() {
    this.updateCountries();
  }
  get childOptions() {
    return Array.from(this.el.querySelectorAll('bds-select-option'));
  }
  handleInputChange() {
    this.bdsPhoneNumberChange.emit({
      value: this.text,
      code: this.value,
      isoCode: this.isoCode,
      country: this.selectedCountry,
    });
  }
  async changeCountry(code, isoCode, flag) {
    this.value = code;
    this.selectedCountry = flag;
    this.isoCode = isoCode;
    this.bdsPhoneNumberChange.emit({
      value: this.text,
      code: this.value,
      isoCode: this.isoCode,
      country: this.selectedCountry,
    });
  }
  handleKeyDown(event) {
    if (event.key == 'Enter') {
      this.toggle();
    }
  }
  async getSelectedCountry() {
    return this.selectedCountry;
  }
  async getIsoCode() {
    return this.isoCode;
  }
  async filterCountries(term) {
    if (!term || term.trim() === '') {
      this.resetFilterCountries();
      return;
    }
    const termLower = term.toLowerCase().trim();
    const newFilteredCountries = {};
    Object.keys(this.countries).forEach(flagKey => {
      const country = this.countries[flagKey];
      const matchesName = country.name.toLowerCase().includes(termLower);
      const matchesCode = country.code.toLowerCase().includes(termLower);
      const matchesIsoCode = country.isoCode.toLowerCase().includes(termLower);
      if (matchesName || matchesCode || matchesIsoCode) {
        newFilteredCountries[flagKey] = country;
      }
    });
    // Set to new object to trigger reactivity
    this.filteredCountries = newFilteredCountries;
  }
  renderSearchInput() {
    return (this.enableSearch && (h("div", { class: "select-phone-number__search" }, h("input", { type: "text", placeholder: this.searchPlaceholder, value: this.searchTerm, onInput: this.onSearchInput, onKeyDown: this.onSearchKeyDown, style: {
        width: '100%',
        padding: '8px 12px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '14px'
      } }))));
  }
  renderCountrySelector() {
    const iconArrow = this.isOpen ? 'arrow-up' : 'arrow-down';
    return (h("div", { onClick: this.toggle, onKeyDown: this.handleKeyDown.bind(this), "data-test": this.dtSelectFlag, class: "input__country-selector", tabindex: "0" }, h("bds-icon", { size: "medium", theme: "solid", name: this.selectedCountry, color: "primary" }), h("bds-icon", { size: "x-small", name: iconArrow }), h("div", { class: "input__container__country-code" }, h("bds-typo", { "no-wrap": "true", variant: "fs-14" }, this.value))));
  }
  render() {
    const filteredFlagsNames = Object.keys(this.filteredCountries);
    return (h(Host, { "aria-disabled": this.disabled ? 'true' : null }, h("div", { class: { element_input: true }, "aria-disabled": this.disabled ? 'true' : null }, h("bds-input", { type: "phonenumber", label: this.label, value: this.text, disabled: this.disabled, danger: this.danger || this.validationDanger, success: this.success, required: this.required, icon: this.icon, helperMessage: this.helperMessage, errorMessage: this.danger ? this.errorMessage : this.validationDanger ? this.validationMesage : '', successMessage: this.successMessage, numberErrorMessage: this.numberErrorMessage, requiredErrorMessage: this.requiredErrorMessage, pattern: "/^(\\(?\\+?[0-9]*\\)?)?[0-9_\\- \\(\\)]*$/", dataTest: this.dataTest, maxlength: this.value === '+55' ? 25 : null, onBdsChange: this.onBdsInputChange, onBdsInput: this.onBdsInputInput, onBdsFocus: this.onBdsInputFocus, onBdsOnBlur: this.onBdsInputBlur }, h("div", { slot: "inside-input-left" }, this.renderCountrySelector()))), h("div", { class: {
        'select-phone-number__options': true,
        'select-phone-number__options--open': this.isOpen,
      } }, this.isOpen && [
      this.renderSearchInput(),
      filteredFlagsNames.map((flag) => (h("bds-select-option", { key: flag, onOptionSelected: this.handler, selected: flag === this.selectedCountry, value: { code: this.filteredCountries[flag].code, isoCode: this.filteredCountries[flag].isoCode, flag }, status: this.filteredCountries[flag].isoCode }, this.filteredCountries[flag].name, " ", this.filteredCountries[flag].code)))
    ])));
  }
  static get is() { return "bds-input-phone-number"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["input-phone-number.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["input-phone-number.css"]
    };
  }
  static get properties() {
    return {
      "options": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "Array<Option>",
          "resolved": "Option[]",
          "references": {
            "Array": {
              "location": "global"
            },
            "Option": {
              "location": "import",
              "path": "../selects/select-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Lista de op\u00E7\u00F5es do select."
        },
        "defaultValue": "[]"
      },
      "text": {
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
          "text": "Valor do input de telefone."
        },
        "attribute": "text",
        "reflect": false,
        "defaultValue": "''"
      },
      "value": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "string | null",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Valor do select."
        },
        "attribute": "value",
        "reflect": false,
        "defaultValue": "'+55'"
      },
      "danger": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Habilita o estado \"danger\" no input."
        },
        "attribute": "danger",
        "reflect": true,
        "defaultValue": "false"
      },
      "success": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Habilita o estado \"success\" no input."
        },
        "attribute": "success",
        "reflect": true,
        "defaultValue": "false"
      },
      "disabled": {
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
          "text": "Desabilita o input."
        },
        "attribute": "disabled",
        "reflect": true,
        "defaultValue": "false"
      },
      "required": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Se `true`, o valor do input ser\u00E1 obrigat\u00F3rio."
        },
        "attribute": "required",
        "reflect": false
      },
      "helperMessage": {
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
          "text": "Mensagem de ajuda para o usu\u00E1rio."
        },
        "attribute": "helper-message",
        "reflect": false,
        "defaultValue": "''"
      },
      "errorMessage": {
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
          "text": "Mensagem de erro a ser exibida."
        },
        "attribute": "error-message",
        "reflect": false,
        "defaultValue": "''"
      },
      "successMessage": {
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
          "text": "Mensagem de sucesso a ser exibida."
        },
        "attribute": "success-message",
        "reflect": false,
        "defaultValue": "''"
      },
      "requiredErrorMessage": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Mensagem de erro para campo obrigat\u00F3rio."
        },
        "attribute": "required-error-message",
        "reflect": false
      },
      "numberErrorMessage": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Mensagem de erro para valida\u00E7\u00E3o num\u00E9rica."
        },
        "attribute": "number-error-message",
        "reflect": false
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
          "text": "Data-test para identificar o componente."
        },
        "attribute": "data-test",
        "reflect": false,
        "defaultValue": "null"
      },
      "dtSelectFlag": {
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
          "text": "Data-test para o bot\u00E3o de sele\u00E7\u00E3o de bandeira."
        },
        "attribute": "dt-select-flag",
        "reflect": false,
        "defaultValue": "null"
      },
      "label": {
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
          "text": "Label do input."
        },
        "attribute": "label",
        "reflect": false,
        "defaultValue": "'Phone number'"
      },
      "icon": {
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
          "text": "\u00CDcone \u00E0 esquerda do input."
        },
        "attribute": "icon",
        "reflect": true,
        "defaultValue": "''"
      },
      "language": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "languages",
          "resolved": "\"en_US\" | \"es_ES\" | \"pt_BR\"",
          "references": {
            "languages": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Valores poss\u00EDveis: \"pt_BR\", \"en_US\", \"es_ES\".\nSe nenhum for informado, utiliza o arquivo padr\u00E3o (countries.json)."
        },
        "attribute": "language",
        "reflect": false,
        "defaultValue": "'pt_BR'"
      },
      "initialCountryFlag": {
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
          "text": "Define o pa\u00EDs inicial pelo nome da bandeira (ex: \"brazil-flag\", \"united-states-flag\").\nTem prioridade sobre o valor padr\u00E3o quando especificado."
        },
        "attribute": "initial-country-flag",
        "reflect": false
      },
      "initialIsoCode": {
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
          "text": "Define o pa\u00EDs inicial pelo c\u00F3digo ISO (ex: \"BR\", \"US\", \"BR / BRA\").\nTem prioridade sobre o valor padr\u00E3o quando especificado."
        },
        "attribute": "initial-iso-code",
        "reflect": false
      },
      "enableSearch": {
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
          "text": "Habilita funcionalidade de busca no dropdown de pa\u00EDses."
        },
        "attribute": "enable-search",
        "reflect": false,
        "defaultValue": "false"
      },
      "searchPlaceholder": {
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
          "text": "Texto placeholder para o campo de busca."
        },
        "attribute": "search-placeholder",
        "reflect": false,
        "defaultValue": "'Search countries...'"
      }
    };
  }
  static get states() {
    return {
      "isOpen": {},
      "selectedCountry": {},
      "isoCode": {},
      "validationDanger": {},
      "validationMesage": {},
      "isPressed": {},
      "searchTerm": {},
      "filteredCountries": {}
    };
  }
  static get events() {
    return [{
        "method": "bdsPhoneNumberChange",
        "name": "bdsPhoneNumberChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Evento disparado quando o valor \u00E9 alterado."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "bdsInput",
        "name": "bdsInput",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Evento disparado quando o input sofre altera\u00E7\u00E3o."
        },
        "complexType": {
          "original": "KeyboardEvent",
          "resolved": "KeyboardEvent",
          "references": {
            "KeyboardEvent": {
              "location": "global"
            }
          }
        }
      }, {
        "method": "bdsCancel",
        "name": "bdsCancel",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Evento disparado quando a sele\u00E7\u00E3o \u00E9 cancelada."
        },
        "complexType": {
          "original": "void",
          "resolved": "void",
          "references": {}
        }
      }, {
        "method": "bdsFocus",
        "name": "bdsFocus",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Evento disparado quando o select ganha foco."
        },
        "complexType": {
          "original": "void",
          "resolved": "void",
          "references": {}
        }
      }, {
        "method": "bdsBlur",
        "name": "bdsBlur",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Evento disparado quando o select perde o foco."
        },
        "complexType": {
          "original": "void",
          "resolved": "void",
          "references": {}
        }
      }];
  }
  static get methods() {
    return {
      "removeFocus": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "",
          "tags": []
        }
      },
      "changeCountry": {
        "complexType": {
          "signature": "(code: any, isoCode: any, flag: any) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }, {
              "tags": [],
              "text": ""
            }, {
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "",
          "tags": []
        }
      },
      "getSelectedCountry": {
        "complexType": {
          "signature": "() => Promise<string>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<string>"
        },
        "docs": {
          "text": "",
          "tags": []
        }
      },
      "getIsoCode": {
        "complexType": {
          "signature": "() => Promise<string>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<string>"
        },
        "docs": {
          "text": "",
          "tags": []
        }
      },
      "filterCountries": {
        "complexType": {
          "signature": "(term: string) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "",
          "tags": []
        }
      }
    };
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "value",
        "methodName": "valueChanged"
      }, {
        "propName": "language",
        "methodName": "languageChanged"
      }, {
        "propName": "initialCountryFlag",
        "methodName": "initialCountryFlagChanged"
      }, {
        "propName": "initialIsoCode",
        "methodName": "initialIsoCodeChanged"
      }, {
        "propName": "text",
        "methodName": "handleInputChange"
      }];
  }
  static get listeners() {
    return [{
        "name": "mousedown",
        "method": "handleWindow",
        "target": "window",
        "capture": false,
        "passive": true
      }];
  }
}
