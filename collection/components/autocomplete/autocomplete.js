import { h, Host } from '@stencil/core';
import { getScrollParent, positionAbsoluteElement } from '../../utils/position-element';
export class BdsAutocomplete {
  constructor() {
    this.refDropdown = (el) => {
      this.dropElement = el;
    };
    this.refIconDrop = (el) => {
      this.iconDropElement = el;
    };
    this.refCheckAllInput = (input) => {
      this.checkAllInput = input;
    };
    this.onFocus = () => {
      this.isFocused = true;
      this.isPressed = true;
      this.bdsFocus.emit();
    };
    this.onFocusout = () => {
      if (!this.isOpen) {
        this.nativeInput.value = this.getText();
      }
    };
    this.onBlur = () => {
      this.bdsBlur.emit();
      this.isPressed = false;
      if (!this.isOpen) {
        this.isFocused = false;
        this.nativeInput.value = this.getText();
        if (this.selectionType == 'multiple')
          this.cleanInputSelection();
      }
      if (this.selectionType == 'multiple' && this.checkedOptions?.length > 0)
        this.getTextMultiselect(this.checkedOptions);
    };
    this.onClickWrapper = () => {
      this.onFocus();
      this.toggle();
      if (this.nativeInput) {
        this.nativeInput.focus();
      }
    };
    this.toggle = () => {
      if (!this.disabled) {
        this.isOpen = !this.isOpen;
      }
    };
    this.getTextFromOption = (opt) => {
      if (this.internalOptions) {
        const internalOption = this.internalOptions.find((option) => option.value == opt?.value);
        if (internalOption) {
          return internalOption.label;
        }
      }
      return opt?.titleText ? opt.titleText : (opt?.innerText ?? '');
    };
    this.getText = () => {
      const opt = this.childOptions.find((option) => option.value == this.value);
      return this.getTextFromOption(opt);
    };
    this.getTextMultiselect = (data) => {
      const valueInput = data?.length > 0 && `${data?.length} selecionados`;
      this.textMultiselect = valueInput;
    };
    this.handlerMultiselect = () => {
      this.updateListChecked(this.childOptions);
      this.nativeInput.value = '';
      this.value = undefined;
      this.resetFilterOptions();
      if (this.childOptions.length != this.checkedOptions.length) {
        setTimeout(() => {
          this.checkAllInput.checked = false;
        }, 10);
      }
    };
    this.handleCheckAll = (event) => {
      const { detail: { checked }, } = event;
      for (const option of this.childOptions) {
        if (checked) {
          option.toMark();
        }
        else {
          option.markOff();
        }
      }
      setTimeout(() => {
        this.updateListChecked(this.childOptions);
      }, 10);
    };
    this.updateListChecked = (data) => {
      for (const option of data) {
        option.checked ? option.classList.add('option-checked') : option.classList.remove('option-checked');
      }
      const defaultCheckedOptions = Array.from(data).filter((item) => item.checked == true);
      const value = defaultCheckedOptions.map((term) => ({
        value: term.value,
        label: term.textContent,
        checked: term.checked,
      }));
      this.checkedOptions = value;
    };
    this.handler = (event) => {
      const { detail: { value }, } = event;
      this.value = value;
      this.toggle();
    };
    this.cleanInputSelection = async () => {
      if (!this.disabled) {
        this.value = '';
        this.nativeInput.value = '';
        this.isOpen = false;
        this.bdsCancel.emit({ value: '' });
        await this.resetFilterOptions();
      }
    };
    this.changedInputValue = async (ev) => {
      const input = ev.target;
      if (input) {
        this.value = input.value || '';
      }
      this.bdsInput.emit(ev);
      if (this.nativeInput.value) {
        // Open dropdown when typing to show filtered options
        if (!this.disabled && !this.isOpen) {
          this.isOpen = true;
        }
        await this.filterOptions(this.nativeInput.value);
      }
      else {
        this.value = '';
        if (this.isOpen) {
          await this.resetFilterOptions();
        }
        else {
          this.setTimeoutFilter();
        }
      }
    };
    this.intoView = null;
    this.isPressed = false;
    this.isOpen = false;
    this.text = '';
    this.textMultiselect = '';
    this.placeholderState = this.placeholder;
    this.internalOptions = undefined;
    this.cloneOptions = undefined;
    this.checkedOptions = undefined;
    this.isFocused = false;
    this.validationDanger = false;
    this.validationMesage = '';
    this.options = undefined;
    this.value = undefined;
    this.selected = undefined;
    this.danger = false;
    this.success = false;
    this.disabled = false;
    this.searchOnlyTitle = true;
    this.label = '';
    this.icon = '';
    this.placeholder = '';
    this.helperMessage = '';
    this.errorMessage = '';
    this.successMessage = '';
    this.optionsPosition = 'auto';
    this.clearIconOnFocus = false;
    this.dataTest = null;
    this.loading = false;
    this.selectionType = 'single';
    this.selectionTitle = '';
    this.selectedAll = true;
  }
  isOpenChanged(isOpen) {
    if (this.positionHeightDrop == 'bottom') {
      this.iconDropElement.name = this.isOpen ? 'arrow-up' : 'arrow-down';
    }
    else {
      this.iconDropElement.name = this.isOpen ? 'arrow-down' : 'arrow-up';
    }
    if (isOpen)
      if (this.optionsPosition != 'auto') {
        this.setDefaultPlacement(this.optionsPosition);
      }
      else {
        this.validatePositionDrop();
      }
  }
  itemSelectedChanged() {
    this.bdsSelectedChange.emit(this.selected);
  }
  valueChanged() {
    this.bdsChange.emit({ value: this.value == null ? this.value : this.value.toString() });
    for (const option of this.childOptions) {
      option.selected = this.value === option.value;
    }
    this.selected = this.childOptionSelected;
    this.text = this.getText();
  }
  handleWindow(ev) {
    if (!this.el.contains(ev.target)) {
      this.isOpen = false;
    }
  }
  changeCheckedOptions() {
    this.placeholderState =
      this.selectionType === 'multiple'
        ? this.checkedOptions?.length === 0 || this.checkedOptions === null
          ? this.placeholder
          : ''
        : this.placeholder;
    this.getTextMultiselect(this.checkedOptions);
    this.bdsMultiselectedChange.emit({ value: this.checkedOptions });
  }
  parseOptions() {
    if (this.options) {
      this.resetFilterOptions();
      try {
        this.internalOptions = typeof this.options === 'string' ? JSON.parse(this.options) : this.options;
      }
      catch (e) {
        this.internalOptions = [];
      }
    }
  }
  changeSelectionType() {
    if (!this.options) {
      for (const option of this.childOptions) {
        if (this.selectionType === 'multiple') {
          option.typeOption = 'checkbox';
          option.addEventListener('optionChecked', this.handlerMultiselect);
        }
        else {
          option.typeOption = 'default';
          option.selected = this.value === option.value;
          option.addEventListener('optionSelected', this.handler);
        }
      }
    }
  }
  componentWillLoad() {
    this.intoView = getScrollParent(this.el);
    this.options && this.parseOptions();
  }
  componentDidLoad() {
    if (!this.options) {
      for (const option of this.childOptions) {
        if (this.selectionType === 'multiple') {
          option.typeOption = 'checkbox';
          option.addEventListener('optionChecked', this.handlerMultiselect);
        }
        else {
          option.typeOption = 'default';
          option.selected = this.value === option.value;
          option.addEventListener('optionSelected', this.handler);
        }
      }
    }
    this.text = this.getText();
    if (this.optionsPosition != 'auto') {
      this.setDefaultPlacement(this.optionsPosition);
    }
    else {
      this.validatePositionDrop();
    }
  }
  setDefaultPlacement(value) {
    if (value == 'bottom') {
      this.dropElement.classList.add('select__options--position-bottom');
      this.iconDropElement.name = 'arrow-down';
    }
    else {
      this.dropElement.classList.add('select__options--position-top');
      this.iconDropElement.name = 'arrow-up';
    }
  }
  validatePositionDrop() {
    const positionValue = positionAbsoluteElement({
      actionElement: this.el,
      changedElement: this.dropElement,
      intoView: this.intoView,
    });
    this.positionHeightDrop = positionValue.y;
    if (positionValue.y == 'bottom') {
      this.dropElement.classList.add('select__options--position-bottom');
      this.iconDropElement.name = 'arrow-down';
    }
    else {
      this.dropElement.classList.add('select__options--position-top');
      this.iconDropElement.name = 'arrow-up';
    }
  }
  get childOptions() {
    return this.options
      ? Array.from(this.el.shadowRoot.querySelectorAll('bds-select-option'))
      : Array.from(this.el.querySelectorAll('bds-select-option'));
  }
  get childOptionSelected() {
    return this.options
      ? Array.from(this.el.shadowRoot.querySelectorAll('bds-select-option')).find((option) => option.selected)
      : Array.from(this.el.querySelectorAll('bds-select-option')).find((option) => option.selected);
  }
  keyPressWrapper(event) {
    switch (event.key) {
      case 'Enter':
        this.toggle();
        break;
      case 'ArrowDown':
        if (!this.disabled) {
          this.isOpen = true;
        }
        if (this.childOptionSelected) {
          this.value = this.childOptionSelected.nextSibling?.value;
          return;
        }
        this.value = this.el.firstElementChild?.value;
        break;
      case 'ArrowUp':
        if (this.childOptionSelected) {
          this.value = this.childOptionSelected.previousSibling?.value;
          return;
        }
        this.value = this.el.lastElementChild?.value;
        break;
    }
  }
  async cleanMultipleSelection() {
    if (this.selectionType === 'multiple' && this.checkedOptions?.length > 0) {
      for (const option of this.childOptions) {
        option.checked = false;
        option.classList.remove('option-checked');
      }
      this.checkedOptions = [];
      this.checkAllInput.checked = false;
      this.nativeInput.value = '';
      this.value = undefined;
      this.resetFilterOptions();
    }
    else {
      this.cleanInputSelection();
    }
  }
  ;
  setTimeoutFilter() {
    setTimeout(() => {
      this.resetFilterOptions();
    }, 500);
  }
  async filterOptions(term) {
    if (!term) {
      await this.resetFilterOptions();
    }
    for (const option of this.childOptions) {
      const optionTextLowercase = this.searchOnlyTitle
        ? this.getTextFromOption(option).toLowerCase()
        : option.textContent.toLowerCase();
      const termLower = term.toLowerCase();
      optionTextLowercase.includes(termLower)
        ? option.removeAttribute('invisible')
        : option.setAttribute('invisible', 'invisible');
    }
  }
  async resetFilterOptions() {
    const childOptions = this.childOptions;
    for (const option of childOptions) {
      option.removeAttribute('invisible');
    }
  }
  renderIcon() {
    return (this.icon && (h("div", { class: {
        input__icon: true,
        'input__icon--large': !!this.label,
      } }, h("bds-icon", { size: this.label ? 'medium' : 'small', name: this.icon, color: "inherit" }))));
  }
  renderLabel() {
    return (this.label && (h("label", { class: {
        input__container__label: true,
        'input__container__label--pressed': this.isPressed && !this.disabled,
      } }, h("bds-typo", { variant: "fs-12", bold: "bold" }, this.label))));
  }
  renderMessage() {
    const icon = this.danger ? 'error' : this.success ? 'checkball' : 'info';
    let message = this.danger ? this.errorMessage : this.success ? this.successMessage : this.helperMessage;
    if (!message && this.validationDanger)
      message = this.validationMesage;
    const styles = this.danger || this.validationDanger
      ? 'input__message input__message--danger'
      : this.success
        ? 'input__message input__message--success'
        : 'input__message';
    if (message) {
      return (h("div", { class: styles, part: "input__message" }, h("div", { class: "input__message__icon" }, h("bds-icon", { size: "x-small", name: icon, theme: "outline", color: "inherit" })), h("bds-typo", { class: "input__message__text", variant: "fs-12" }, message)));
    }
    return undefined;
  }
  render() {
    return (h(Host, { "aria-disabled": this.disabled ? 'true' : null }, h("div", { class: {
        input: true,
        select: true,
        'input--state-primary': !this.danger,
        'input--state-danger': this.danger || this.validationDanger,
        'input--state-success': this.success,
        'input--state-disabled': this.disabled,
        'input--label': !!this.label,
        'input--pressed': this.isPressed,
      }, onClick: this.onClickWrapper }, this.renderIcon(), h("div", { class: "input__container", tabindex: "0", onFocusout: this.onFocusout }, this.renderLabel(), h("div", { class: { input__container__wrapper: true } }, this.textMultiselect?.length > 0 && (h("bds-typo", { variant: "fs-14", class: "inside-input-left" }, this.textMultiselect)), h("input", { class: { input__container__text: true }, ref: (input) => (this.nativeInput = input), disabled: this.disabled, onBlur: this.onBlur, onFocus: this.onFocus, onInput: this.changedInputValue, placeholder: this.placeholderState, type: "text", value: this.text, "data-test": this.dataTest, onKeyDown: this.keyPressWrapper.bind(this) }))), h("div", { class: "select__icon" }, h("bds-icon", { size: "small", name: "error", theme: "solid", onClick: this.cleanInputSelection, class: {
        'icon-hidden': (this.clearIconOnFocus && (!this.isFocused || !this.isOpen)) || !this.value,
      } }), h("bds-icon", { ref: (el) => this.refIconDrop(el), size: "small", color: "inherit" }))), this.renderMessage(), this.loading ? (h("div", { ref: (el) => this.refDropdown(el), class: {
        select__options: true,
        'select__options--open': this.isOpen,
      } }, h("bds-loading-spinner", { class: "load-spinner", size: "small" }))) : (h("div", { ref: (el) => this.refDropdown(el), class: {
        select__options: true,
        'select__options--open': this.isOpen,
      } }, this.selectionTitle && this.selectionType == 'multiple' && (h("bds-typo", { class: "selection-title", variant: "fs-10", bold: "bold" }, this.selectionTitle)), this.selectionType == 'multiple' && this.selectedAll && (h("bds-checkbox", { ref: this.refCheckAllInput, refer: `refer-multiselect`, label: `Selecionar Todos`, name: "chack-all", class: "select-all", onBdsChange: (ev) => this.handleCheckAll(ev) })), this.checkedOptions?.length > 0 && (h("span", { class: "content-divisor" }, h("span", { class: "divisor" }))), this.internalOptions ? (this.internalOptions.map((option, idx) => (h("bds-select-option", { onOptionSelected: this.handler, onOptionChecked: this.handlerMultiselect, selected: this.value === option.value, value: option.value, key: idx, bulkOption: option.bulkOption, status: option.status, "type-option": this.selectionType == 'multiple' ? 'checkbox' : 'default' }, option.label)))) : (h("slot", null))))));
  }
  static get is() { return "bds-autocomplete"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["autocomplete.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["autocomplete.css"]
    };
  }
  static get properties() {
    return {
      "options": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string | AutocompleteOption[]",
          "resolved": "AutocompleteOption[] | string",
          "references": {
            "AutocompleteOption": {
              "location": "import",
              "path": "./autocomplete-select-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The options of the select\nShould be passed this way:\noptions='[{\"value\": \"Cat\", \"label\": \"Meow\"}, {\"value\": \"Dog\", \"label\": \"Woof\"}]'\nOptions can also be passed as child by using bds-select-option component, but passing as a child you may have some compatibility problems with Angular."
        },
        "attribute": "options",
        "reflect": false
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
          "text": "the value of the select."
        },
        "attribute": "value",
        "reflect": false
      },
      "selected": {
        "type": "unknown",
        "mutable": true,
        "complexType": {
          "original": "HTMLBdsSelectOptionElement | null",
          "resolved": "HTMLBdsSelectOptionElement",
          "references": {
            "HTMLBdsSelectOptionElement": {
              "location": "global"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "the item selected."
        }
      },
      "danger": {
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
          "text": "Add state danger on input, use for use feedback."
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
          "text": "Add state success on input, use for use feedback."
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
          "text": "Disabled input."
        },
        "attribute": "disabled",
        "reflect": true,
        "defaultValue": "false"
      },
      "searchOnlyTitle": {
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
          "text": "Search only the title property"
        },
        "attribute": "search-only-title",
        "reflect": true,
        "defaultValue": "true"
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
          "text": "label in input, with he the input size increases."
        },
        "attribute": "label",
        "reflect": false,
        "defaultValue": "''"
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
          "text": "used for add icon in input left. Uses the bds-icon component."
        },
        "attribute": "icon",
        "reflect": true,
        "defaultValue": "''"
      },
      "placeholder": {
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
          "text": "Placeholder for native input element."
        },
        "attribute": "placeholder",
        "reflect": false,
        "defaultValue": "''"
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
          "text": "Indicated to pass a help the user in complex filling."
        },
        "attribute": "helper-message",
        "reflect": false,
        "defaultValue": "''"
      },
      "errorMessage": {
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
          "text": "Indicated to pass an feeback to user."
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
          "text": "Indicated to pass an feeback to user."
        },
        "attribute": "success-message",
        "reflect": false,
        "defaultValue": "''"
      },
      "optionsPosition": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "AutocompleteOptionsPositionType",
          "resolved": "\"auto\" | \"bottom\" | \"top\"",
          "references": {
            "AutocompleteOptionsPositionType": {
              "location": "import",
              "path": "./autocomplete-select-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Set the placement of the options menu. Can be 'bottom' or 'top'."
        },
        "attribute": "options-position",
        "reflect": false,
        "defaultValue": "'auto'"
      },
      "clearIconOnFocus": {
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
          "text": "If true, the X icon will appear only when component is focused."
        },
        "attribute": "clear-icon-on-focus",
        "reflect": false,
        "defaultValue": "false"
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
      },
      "loading": {
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
          "text": "Is Loading, is the prop to enable that the component is loading."
        },
        "attribute": "loading",
        "reflect": false,
        "defaultValue": "false"
      },
      "selectionType": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "SelectionType",
          "resolved": "\"multiple\" | \"single\"",
          "references": {
            "SelectionType": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Multiselect, Prop to enable multi selections."
        },
        "attribute": "selection-type",
        "reflect": false,
        "defaultValue": "'single'"
      },
      "selectionTitle": {
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
          "text": "Selection Title, Prop to enable title to select."
        },
        "attribute": "selection-title",
        "reflect": false,
        "defaultValue": "''"
      },
      "selectedAll": {
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
          "text": "Selection Title, Prop to enable title to select."
        },
        "attribute": "selected-all",
        "reflect": false,
        "defaultValue": "true"
      }
    };
  }
  static get states() {
    return {
      "intoView": {},
      "isPressed": {},
      "isOpen": {},
      "text": {},
      "textMultiselect": {},
      "placeholderState": {},
      "internalOptions": {},
      "cloneOptions": {},
      "checkedOptions": {},
      "isFocused": {},
      "validationDanger": {},
      "validationMesage": {}
    };
  }
  static get events() {
    return [{
        "method": "bdsChange",
        "name": "bdsChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the value has changed."
        },
        "complexType": {
          "original": "AutocompleteChangeEventDetail",
          "resolved": "AutocompleteChangeEventDetail",
          "references": {
            "AutocompleteChangeEventDetail": {
              "location": "import",
              "path": "./autocomplete-select-interface"
            }
          }
        }
      }, {
        "method": "bdsSelectedChange",
        "name": "bdsSelectedChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the selected value has changed."
        },
        "complexType": {
          "original": "AutocompleteSelectedChangeEventDetail",
          "resolved": "AutocompleteSelectedChangeEventDetail",
          "references": {
            "AutocompleteSelectedChangeEventDetail": {
              "location": "import",
              "path": "./autocomplete-select-interface"
            }
          }
        }
      }, {
        "method": "bdsMultiselectedChange",
        "name": "bdsMultiselectedChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the selected value has changed."
        },
        "complexType": {
          "original": "AutocompleteMultiSelectedChangeEventDetail",
          "resolved": "AutocompleteMultiSelectedChangeEventDetail",
          "references": {
            "AutocompleteMultiSelectedChangeEventDetail": {
              "location": "import",
              "path": "./autocomplete-select-interface"
            }
          }
        }
      }, {
        "method": "bdsInput",
        "name": "bdsInput",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the input has changed."
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
          "text": "Emitted when the selection is cancelled."
        },
        "complexType": {
          "original": "AutocompleteChangeEventDetail",
          "resolved": "AutocompleteChangeEventDetail",
          "references": {
            "AutocompleteChangeEventDetail": {
              "location": "import",
              "path": "./autocomplete-select-interface"
            }
          }
        }
      }, {
        "method": "bdsFocus",
        "name": "bdsFocus",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the select loses focus."
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
          "text": "Emitted when the select loses focus."
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
      "cleanMultipleSelection": {
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
      }
    };
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "isOpen",
        "methodName": "isOpenChanged"
      }, {
        "propName": "selected",
        "methodName": "itemSelectedChanged"
      }, {
        "propName": "value",
        "methodName": "valueChanged"
      }, {
        "propName": "checkedOptions",
        "methodName": "changeCheckedOptions"
      }, {
        "propName": "options",
        "methodName": "parseOptions"
      }, {
        "propName": "selectionType",
        "methodName": "changeSelectionType"
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
