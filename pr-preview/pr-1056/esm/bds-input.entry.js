import { r as registerInstance, c as createEvent, h, H as Host } from './index-611fd21e.js';
import { e as emailValidation, n as numberValidation } from './validations-e4c049e4.js';

const inputCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative;width:100%;max-width:100%;max-height:100%}:host input,:host textarea{-webkit-box-shadow:inherit;box-shadow:inherit}:host input::-webkit-input-placeholder,:host textarea::-webkit-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}:host input::-moz-placeholder,:host textarea::-moz-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}:host input:-ms-input-placeholder,:host textarea:-ms-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}:host input::-ms-input-placeholder,:host textarea::-ms-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}:host input::placeholder,:host textarea::placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}:host input::-webkit-input-placeholder,:host textarea::-webkit-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.input{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;padding:8px 4px 8px 12px;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;gap:8px}.input .bds-icon{position:relative;z-index:1}.input--state-primary{border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary .input__icon{position:relative}.input--state-primary .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));z-index:0;border-radius:8px}.input--state-primary:hover{border:1px solid var(--color-primary, #1e6bf1);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary.input--pressed{border:1px solid var(--color-primary, #1e6bf1);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-info, #80e3eb);box-shadow:0 0 0 2px var(--color-info, #80e3eb)}.input--state-primary.input--pressed .input__icon .bds-icon{color:var(--color-primary, #1e6bf1)}.input--state-primary .input__container__label{color:var(--color-content-default, #282828)}.input--state-primary .input__container__label--pressed bds-typo{color:var(--color-primary, #1e6bf1)}.input--state-primary .input__container__text{caret-color:var(--color-primary, #1e6bf1);color:var(--color-content-default, #282828)}.input--state-danger{border:1px solid var(--color-delete, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger .input__icon{position:relative}.input--state-danger .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-surface-negative, #8a0000);z-index:0;opacity:50%;border-radius:8px}.input--state-danger:hover{border:1px solid var(--color-negative, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger.input--pressed{border:1px solid var(--color-negative, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-error, #fabebe);box-shadow:0 0 0 2px var(--color-error, #fabebe)}.input--state-danger.input--pressed .input__icon .bds-icon{color:var(--color-negative, #e60f0f)}.input--state-danger .input__container__label{color:var(--color-delete, #e60f0f)}.input--state-danger .input__container__label--pressed bds-typo{color:var(--color-negative, #e60f0f)}.input--state-danger .input__container__text{caret-color:var(--color-negative, #e60f0f);color:var(--color-content-default, #282828)}.input--state-success{border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success .input__icon{position:relative}.input--state-success .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-surface-positive, #01723e);z-index:0;border-radius:8px}.input--state-success:hover{border:1px solid var(--color-positive, #10603b);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success.input--pressed{border:1px solid var(--color-positive, #10603b);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-success, #84ebbc);box-shadow:0 0 0 2px var(--color-success, #84ebbc)}.input--state-success.input--pressed .input__icon .bds-icon{color:var(--color-positive, #10603b)}.input--state-success .input__container__label{color:var(--color-content-default, #282828)}.input--state-success .input__container__label--pressed bds-typo{color:var(--color-positive, #10603b)}.input--state-success .input__container__text{caret-color:var(--color-positive, #10603b);color:var(--color-content-default, #282828)}.input--state-disabled{opacity:50%;pointer-events:none;cursor:not-allowed}.input--state-disabled .input__icon{position:relative}.input--state-disabled .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));z-index:0;opacity:50%;border-radius:8px}.input .icon-success{color:var(--color-positive, #10603b);margin-left:4px}.input--label{padding:7px 4px 8px 12px}.input--textarea .input__container__texttextarea{resize:vertical;min-height:44px;padding:8px 12px}.input--textarea .input__container__texttextarea:focus{outline:2px solid var(--color-info, #80e3eb);outline-offset:1px}.input__icon{cursor:inherit;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:8px;padding:2px}.input__container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%}.input__container__wrapper{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.input__container__wrapper__chips{display:inline;max-height:100px;overflow:auto}.input__container__wrapper__chips::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.input__container__wrapper__chips::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.input__container__label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.input__container__text{display:inline-block;margin:0;border:0;padding:0;width:auto;vertical-align:middle;white-space:normal;line-height:inherit;background:none;color:inherit;font-size:inherit;font-family:inherit;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-size:0.875rem;line-height:22px;resize:none;cursor:inherit}.input__container__text:focus{outline:0}.input__container__text::-webkit-file-upload-button{padding:0;border:0;background:none}.input__container__text:focus{outline:0}.input__container__text[type=checkbox],.input__container__text[type=radio]{width:13px;height:13px}.input__container__text[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box}::-webkit-search-decoration{display:none}.input__container__text[type=reset],.input__container__text[type=button],.input__container__text[type=submit]{overflow:visible}.input__container__text::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.input__container__text::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.input__container__text[type=date]::-webkit-calendar-picker-indicator{opacity:0;pointer-events:none}.input__container__texttextarea{min-height:44px;line-height:1.5;vertical-align:top;overflow-y:auto;word-wrap:break-word;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-size:0.875rem}.input__container__texttextarea::-webkit-input-placeholder{line-height:1.5}.input__container__texttextarea::-moz-placeholder{line-height:1.5}.input__container__texttextarea:-ms-input-placeholder{line-height:1.5}.input__container__texttextarea::-ms-input-placeholder{line-height:1.5}.input__container__texttextarea::placeholder{line-height:1.5}.input__message{display:-ms-flexbox;display:flex;-ms-flex-align:baseline;align-items:baseline;height:20px;margin:3.7px 2.5px;gap:4px;-webkit-transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);color:var(--color-content-disable, #595959);word-break:break-word;height:auto;min-height:20px}.input__message bds-typo{margin-top:0px;-ms-flex-item-align:self-start;align-self:self-start}.input__message__icon{display:-ms-flexbox;display:flex;margin-top:0px}.input__message--danger .input__message__icon .bds-icon{color:var(--color-negative, #e60f0f)}.input__message--danger .input__message__text{color:var(--color-negative, #e60f0f)}.input__message--success .input__message__icon .bds-icon{color:var(--color-positive, #10603b)}.input__message--success .input__message__text{color:var(--color-content-default, #282828)}.input__container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%}.input__container__label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.input__container__wrapper{display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.input__container__text{display:inline-block;margin:0;border:0;padding:0;width:auto;vertical-align:middle;white-space:normal;line-height:inherit;background:none;color:inherit;font-size:inherit;font-family:inherit;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-size:0.875rem;line-height:22px;width:100%;resize:none;cursor:inherit}.input__container__text:focus{outline:0}.input__container__text::-webkit-file-upload-button{padding:0;border:0;background:none}.input__container__text:focus{outline:0}.input__container__text[type=checkbox],.input__container__text[type=radio]{width:13px;height:13px}.input__container__text[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box}::-webkit-search-decoration{display:none}.input__container__text[type=reset],.input__container__text[type=button],.input__container__text[type=submit]{overflow:visible}.input__container__text__chips{width:auto;min-width:216px;max-width:216px}";

const Input = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.bdsChange = createEvent(this, "bdsChange", 7);
    this.bdsInput = createEvent(this, "bdsInput", 7);
    this.bdsOnBlur = createEvent(this, "bdsOnBlur", 7);
    this.bdsFocus = createEvent(this, "bdsFocus", 7);
    this.bdsSubmit = createEvent(this, "bdsSubmit", 7);
    this.bdsPatternValidation = createEvent(this, "bdsPatternValidation", 7);
    this.bdsKeyDownBackspace = createEvent(this, "bdsKeyDownBackspace", 7);
    /**
     * Tratamento de eventos de pressionamento de tecla (Enter, Backspace, etc).
     */
    this.keyPressWrapper = (event) => {
      switch (event.key) {
        case 'Enter':
          this.bdsSubmit.emit({ event, value: this.value });
          if (this.isSubmit) {
            this.clearTextInput();
            event.preventDefault();
          }
          break;
        case 'Backspace' :
          this.bdsKeyDownBackspace.emit({ event, value: this.value });
          break;
      }
    };
    /**
     * Função chamada ao digitar no campo de entrada.
     */
    this.onInput = (ev) => {
      this.onBdsInputValidations();
      const input = ev.target;
      if (input) {
        this.value = input.value || '';
      }
      this.bdsInput.emit(ev);
    };
    /**
     * Função chamada ao perder o foco do campo de entrada.
     */
    this.onBlur = () => {
      this.onBlurValidations();
      this.isPressed = false;
      this.bdsOnBlur.emit();
    };
    /**
     * Função chamada ao ganhar o foco do campo de entrada.
     */
    this.onFocus = () => {
      this.isPressed = true;
      this.bdsFocus.emit();
    };
    /**
     * Função chamada ao clicar no campo de entrada.
     */
    this.onClickWrapper = () => {
      this.onFocus();
      if (this.nativeInput) {
        this.nativeInput.focus();
      }
    };
    /**
     * Limpa o valor do campo de entrada.
     */
    this.clearTextInput = (ev) => {
      if (!this.readonly && !this.disabled && ev) {
        ev.preventDefault();
        ev.stopPropagation();
      }
      this.value = '';
      if (this.nativeInput) {
        this.nativeInput.value = '';
      }
    };
    this.isPressed = false;
    this.isPassword = false;
    this.validationMesage = '';
    this.validationDanger = false;
    this.inputName = '';
    this.type = 'text';
    this.label = '';
    this.placeholder = '';
    this.autoCapitalize = 'off';
    this.autoComplete = 'off';
    this.max = undefined;
    this.maxlength = undefined;
    this.min = undefined;
    this.minlength = undefined;
    this.readonly = false;
    this.required = undefined;
    this.pattern = undefined;
    this.helperMessage = '';
    this.errorMessage = '';
    this.successMessage = '';
    this.icon = '';
    this.disabled = false;
    this.danger = false;
    this.success = false;
    this.value = '';
    this.counterLength = false;
    this.counterLengthRule = null;
    this.isSubmit = false;
    this.isTextarea = false;
    this.rows = undefined;
    this.cols = undefined;
    this.requiredErrorMessage = undefined;
    this.minlengthErrorMessage = undefined;
    this.minErrorMessage = undefined;
    this.maxErrorMessage = undefined;
    this.emailErrorMessage = undefined;
    this.numberErrorMessage = undefined;
    this.chips = undefined;
    this.dataTest = null;
    this.encode = false;
  }
  /**
   * Define o foco no campo de entrada.
   */
  async setFocus() {
    this.onClickWrapper();
  }
  /**
   * Remove o foco do campo de entrada.
   */
  async removeFocus() {
    this.onBlur();
  }
  /**
   * Retorna o elemento de input do componente.
   */
  async getInputElement() {
    return this.nativeInput;
  }
  /**
   * Verifica se o campo de entrada é válido.
   */
  async isValid() {
    return this.nativeInput.validity.valid;
  }
  /**
   * Limpa o valor do campo de entrada.
   */
  async clear() {
    this.value = '';
  }
  /**
   * Codifica os caracteres especiais para exibição segura (evita injeção de código HTML).
   */
  encodeValue(value) {
    const lt = /</g, gt = />/g, ap = /'/g, ic = /"/g, amp = /&/g, slash = /\//g;
    if (!this.encode)
      return value;
    return (value &&
      value
        .toString()
        .replace(lt, '&lt;')
        .replace(gt, '&gt;')
        .replace(ap, '&#39;')
        .replace(ic, '&#34;')
        .replace(amp, '&amp;')
        .replace(slash, '&#47;'));
  }
  /**
   * Avisa sobre a mudança do valor do campo de entrada.
   */
  valueChanged(newValue) {
    const changeValue = this.encode ? this.encodeValue(newValue || '') : newValue || '';
    this.bdsChange.emit({ value: changeValue });
  }
  /**
   * Função que renderiza o ícone dentro do campo de entrada.
   */
  renderIcon() {
    return (this.icon && (h("div", { class: {
        input__icon: true,
        'input__icon--large': !!this.label,
      } }, h("bds-icon", { class: "input__icon--color", size: this.label ? 'medium' : 'small', name: this.icon, color: "inherit" }))));
  }
  /**
   * Função que renderiza a label do campo de entrada.
   */
  renderLabel() {
    return (this.label && (h("label", { class: {
        input__container__label: true,
        'input__container__label--pressed': this.isPressed && !this.disabled,
      } }, h("bds-typo", { variant: "fs-12", bold: "bold" }, this.label))));
  }
  /**
   * Função que renderiza as mensagens de erro ou sucesso abaixo do campo de entrada.
   */
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
      return (h("div", { class: styles, part: "input__message", id: `${this.inputName}-message` }, h("div", { class: "input__message__icon" }, h("bds-icon", { size: "x-small", name: icon, theme: "outline", color: "inherit" })), h("bds-typo", { class: "input__message__text", variant: "fs-12" }, message)));
    }
    return undefined;
  }
  /**
   * Valida o campo de entrada ao perder o foco.
   */
  onBlurValidations() {
    this.required && this.requiredValidation();
    this.pattern && this.patternValidation();
    (this.minlength || this.maxlength) && this.lengthValidation();
    (this.min || this.max) && this.minMaxValidation();
    this.checkValidity();
  }
  /**
   * Realiza as validações do campo enquanto o usuário digita.
   */
  onBdsInputValidations() {
    this.type === 'email' && this.emailValidation();
    this.type === 'phonenumber' && this.numberValidation();
    this.checkValidity();
  }
  /**
   * Valida o padrão regex do campo.
   */
  patternValidation() {
    const regex = new RegExp(this.pattern);
    this.bdsPatternValidation.emit(regex.test(this.nativeInput.value));
  }
  /**
   * Valida se o campo é obrigatório.
   */
  requiredValidation() {
    if (this.nativeInput.validity.valueMissing) {
      this.validationMesage = this.requiredErrorMessage;
      this.validationDanger = true;
    }
  }
  /**
   * Valida o comprimento do texto no campo de entrada.
   */
  lengthValidation() {
    if (this.nativeInput.validity.tooShort) {
      this.validationMesage = this.minlengthErrorMessage;
      this.validationDanger = true;
      return;
    }
    if (this.nativeInput.validity.tooLong) {
      this.validationDanger = true;
      return;
    }
  }
  /**
   * Valida os valores mínimos e máximos do campo de entrada.
   */
  minMaxValidation() {
    if (this.nativeInput.validity.rangeUnderflow) {
      this.validationMesage = this.minErrorMessage;
      this.validationDanger = true;
      return;
    }
    if (this.nativeInput.validity.rangeOverflow) {
      this.validationMesage = this.maxErrorMessage;
      this.validationDanger = true;
      return;
    }
  }
  /**
   * Valida se o campo contém um email válido.
   */
  emailValidation() {
    if (emailValidation(this.nativeInput.value)) {
      this.validationMesage = this.emailErrorMessage;
      this.validationDanger = true;
    }
  }
  /**
   * Valida se o campo contém um número válido.
   */
  numberValidation() {
    if (numberValidation(this.nativeInput.value)) {
      this.validationMesage = this.numberErrorMessage;
      this.validationDanger = true;
    }
  }
  /**
   * Verifica se o campo de entrada é válido.
   */
  checkValidity() {
    if (this.nativeInput.validity.valid) {
      this.validationDanger = false;
    }
  }
  /**
   * Inicializa o componente e processa conversões de tipos necessárias.
   */
  componentWillLoad() {
    // Garante que rows e cols tenham valores padrão se não especificados
    if (this.rows === undefined) {
      this.rows = 1;
    }
    else if (typeof this.rows === 'string') {
      this.rows = parseInt(this.rows, 10) || 1;
    }
    if (this.cols === undefined) {
      this.cols = 0;
    }
    else if (typeof this.cols === 'string') {
      this.cols = parseInt(this.cols, 10) || 0;
    }
  }
  /**
   * Atualiza o valor do campo de entrada após as mudanças.
   */
  componentDidUpdate() {
    if (this.nativeInput && this.value != this.nativeInput.value) {
      this.nativeInput.value = this.value;
    }
  }
  render() {
    const isPressed = this.isPressed && !this.disabled;
    const Element = this.isTextarea ? 'textarea' : 'input';
    return (h(Host, { "aria-disabled": this.disabled ? 'true' : null }, h("div", { class: {
        input: true,
        'input--state-primary': !this.danger && !this.validationDanger,
        'input--state-danger': this.danger || this.validationDanger,
        'input--state-success': this.success,
        'input--state-disabled': this.disabled,
        'input--label': !!this.label,
        'input--pressed': isPressed,
        'input--textarea': this.isTextarea,
      }, onClick: this.onClickWrapper, onKeyDown: this.keyPressWrapper, part: "input-container" }, this.renderIcon(), h("slot", { name: "input-left" }), h("div", { class: "input__container" }, this.renderLabel(), h("div", { class: { input__container__wrapper: !this.chips, input__container__wrapper__chips: this.chips } }, h("slot", { name: "inside-input-left" }), h(Element, { class: { input__container__text: true, input__container__text__chips: this.chips }, ref: (input) => (this.nativeInput = input), rows: this.isTextarea ? this.rows : undefined, cols: this.isTextarea ? this.cols : undefined, autocapitalize: this.autoCapitalize, autocomplete: this.autoComplete, disabled: this.disabled, min: this.min, max: this.max, minLength: this.minlength, maxLength: this.maxlength, name: this.inputName, onBlur: this.onBlur, onFocus: this.onFocus, onInput: this.onInput, placeholder: this.placeholder, readOnly: this.readonly, type: this.isTextarea ? undefined : this.type, value: this.encodeValue(this.value), pattern: this.pattern, required: this.required, part: "input", "data-test": this.dataTest, "aria-label": this.label || this.placeholder, "aria-invalid": this.danger || this.validationDanger ? 'true' : 'false', "aria-describedby": this.helperMessage || this.errorMessage || this.successMessage ? `${this.inputName}-message` : undefined }))), this.counterLength && (h("bds-counter-text", { length: this.value.length, max: this.maxlength, active: isPressed, ...this.counterLengthRule })), this.success && h("bds-icon", { class: "icon-success", name: "check", theme: "outline", size: "small" }), h("slot", { name: "input-right" })), this.renderMessage()));
  }
  static get watchers() { return {
    "value": ["valueChanged"]
  }; }
};
Input.style = inputCss;

export { Input as bds_input };
