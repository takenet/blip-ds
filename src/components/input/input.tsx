/* eslint-disable no-console */
import { Component, h, Prop, State, Watch, Event, EventEmitter, Method, Host } from '@stencil/core';
import { InputType, InputAutocapitalize, InputAutoComplete, InputCounterLengthRules } from './input-interface';
import { emailValidation, numberValidation } from '../../utils/validations';

@Component({
  tag: 'bds-input',
  styleUrl: 'input.scss',
  shadow: true,
})
export class Input {
  private nativeInput?: HTMLInputElement;

  @State() isPressed? = false;
  @State() isPassword? = false;
  @State() validationMesage? = '';
  @State() validationDanger? = false;
  /**
   * Nome do input, usado para identificação no formulário.
   */
  @Prop() inputName? = '';

  /**
   * Define o tipo do input (por exemplo, `text`, `password`, etc).
   */
  @Prop({ reflect: true }) type?: InputType = 'text';

  /**
   * Rótulo que será exibido acima do input.
   */
  @Prop() label? = '';

  /**
   * Texto que será exibido como sugestão ou dica no input.
   */
  @Prop() placeholder?: string = '';

  /**
   * Define a capitalização automática do texto (valores possíveis: `on`, `off`).
   */
  @Prop() autoCapitalize?: InputAutocapitalize = 'off';

  /**
   * Define o comportamento de autocompletar do navegador (valores possíveis: `on`, `off`).
   */
  @Prop() autoComplete?: InputAutoComplete = 'off';

  /**
   * Define o valor máximo permitido para o input.
   */
  @Prop() max?: string;

  /**
   * Define o número máximo de caracteres permitidos no input.
   */
  @Prop() maxlength?: number;

  /**
   * Define o valor mínimo permitido para o input.
   */
  @Prop() min?: string;

  /**
   * Define o número mínimo de caracteres permitidos no input.
   */
  @Prop() minlength?: number;

  /**
   * Torna o input somente leitura.
   */
  @Prop() readonly = false;

  /**
   * Define se o input é obrigatório.
   */
  @Prop() required: boolean;

  /**
   * Define um padrão regex que o valor do input deve seguir.
   */
  @Prop() pattern?: string;

  /**
   * Mensagem de ajuda exibida abaixo do input.
   */
  @Prop() helperMessage?: string = '';

  /**
   * Mensagem de erro exibida quando o valor do input é inválido.
   */
  @Prop({ mutable: true }) errorMessage?: string = '';

  /**
   * Mensagem exibida quando o valor do input é válido.
   */
  @Prop({ mutable: true }) successMessage?: string = '';

  /**
   * Nome do ícone a ser exibido dentro do input.
   */
  @Prop({ reflect: true }) icon?: string = '';

  /**
   * Define se o input está desabilitado.
   */
  @Prop({ reflect: true, mutable: true }) disabled?: boolean = false;

  /**
   * Define se o input está em estado de erro.
   */
  @Prop({ reflect: true, mutable: true }) danger?: boolean = false;

  /**
   * Define se o input está em estado de sucesso.
   */
  @Prop({ reflect: true, mutable: true }) success?: boolean = false;

  /**
   * O valor atual do input.
   */
  @Prop({ mutable: true }) value?: string | null = '';

  /**
   * Define se será exibido um contador de comprimento de caracteres.
   */
  @Prop() counterLength? = false;

  /**
   * Define a regra do contador de comprimento de caracteres (min, max, etc).
   */
  @Prop() counterLengthRule?: InputCounterLengthRules = null;

  /**
   * Define se o input será submetido ao pressionar Enter.
   */
  @Prop() isSubmit = false;

  /**
   * Define se o input é uma área de texto (textarea).
   */
  @Prop() isTextarea = false;

  /**
   * Define a quantidade de linhas da área de texto (se for `textarea`).
   */
  @Prop() rows?: number = 1;

  /**
   * Define a quantidade de colunas da área de texto (se for `textarea`).
   */
  @Prop() cols?: number = 0;

  /**
   * Mensagem de erro exibida quando o input não é preenchido e é obrigatório.
   */
  @Prop() requiredErrorMessage: string;

  /**
   * Mensagem de erro exibida quando o valor do input não atende ao comprimento mínimo.
   */
  @Prop() minlengthErrorMessage: string;

  /**
   * Mensagem de erro exibida quando o valor do input não atende ao valor mínimo permitido.
   */
  @Prop() minErrorMessage: string;

  /**
   * Mensagem de erro exibida quando o valor do input não atende ao valor máximo permitido.
   */
  @Prop() maxErrorMessage: string;

  /**
   * Mensagem de erro exibida quando o valor do input não é um email válido.
   */
  @Prop() emailErrorMessage: string;

  /**
   * Mensagem de erro exibida quando o valor do input não é um número válido.
   */
  @Prop() numberErrorMessage: string;

  /**
   * Define se o input será exibido como chips (um tipo de entrada com múltiplos valores).
   */
  @Prop() chips: boolean;

  /**
   * Data test é a prop para testar especificamente a ação do componente.
   */
  @Prop() dataTest?: string = null;

  @Prop() encode?: boolean = false;

  /**
   * Evento disparado quando o valor do input muda.
   */
  @Event({ bubbles: true, composed: true }) bdsChange!: EventEmitter;

  /**
   * Evento disparado quando o input recebe um input (digitação).
   */
  @Event() bdsInput!: EventEmitter<KeyboardEvent>;

  /**
   * Evento disparado quando o input perde o foco.
   */
  @Event() bdsOnBlur: EventEmitter;

  /**
   * Evento disparado quando o input ganha o foco.
   */
  @Event() bdsFocus: EventEmitter;

  /**
   * Evento disparado quando o formulário é submetido.
   */
  @Event() bdsSubmit: EventEmitter;

  /**
   * Evento disparado para validação de padrão regex.
   */
  @Event() bdsPatternValidation: EventEmitter;

  /**
   * Evento disparado quando a tecla "Backspace" é pressionada.
   */
  @Event() bdsKeyDownBackspace: EventEmitter;

  /**
   * Define o foco no campo de entrada.
   */
  @Method()
  async setFocus(): Promise<void> {
    this.onClickWrapper();
  }

  /**
   * Remove o foco do campo de entrada.
   */
  @Method()
  async removeFocus(): Promise<void> {
    this.onBlur();
  }

  /**
   * Retorna o elemento de input do componente.
   */
  @Method()
  async getInputElement(): Promise<HTMLInputElement> {
    return this.nativeInput;
  }

  /**
   * Verifica se o campo de entrada é válido.
   */
  @Method()
  async isValid(): Promise<boolean> {
    return this.nativeInput.validity.valid;
  }

  /**
   * Limpa o valor do campo de entrada.
   */
  @Method()
  async clear(): Promise<void> {
    this.value = '';
  }

  /**
   * Codifica os caracteres especiais para exibição segura (evita injeção de código HTML).
   */
  private encodeValue(value?: string): string {
    const lt = /</g,
      gt = />/g,
      ap = /'/g,
      ic = /"/g,
      amp = /&/g,
      slash = /\//g;
if(!this.encode) return value;
    return (
      value &&
      value
        .toString()
        .replace(lt, '&lt;')
        .replace(gt, '&gt;')
        .replace(ap, '&#39;')
        .replace(ic, '&#34;')
        .replace(amp, '&amp;')
        .replace(slash, '&#47;')
    );
  }

  /**
   * Avisa sobre a mudança do valor do campo de entrada.
   */
  @Watch('value')
  protected valueChanged(newValue: string | null): void {
    const changeValue = this.encode ? this.encodeValue(newValue || '') : newValue || '';
    this.bdsChange.emit({ value: changeValue });
  }

  /**
   * Tratamento de eventos de pressionamento de tecla (Enter, Backspace, etc).
   */
  private keyPressWrapper = (event: KeyboardEvent): void => {
    switch (event.key) {
      case 'Enter':
        this.bdsSubmit.emit({ event, value: this.value });

        if (this.isSubmit) {
          this.clearTextInput();
          event.preventDefault();
        }
        break;
      case 'Backspace':
      case 'Delete':
        this.bdsKeyDownBackspace.emit({ event, value: this.value });
        break;
    }
  };

  /**
   * Função chamada ao digitar no campo de entrada.
   */
  private onInput = (ev: Event): void => {
    this.onBdsInputValidations();
    const input = ev.target as HTMLInputElement | null;
    if (input) {
      this.value = input.value || '';
    }
    this.bdsInput.emit(ev as KeyboardEvent);
  };

  /**
   * Função chamada ao perder o foco do campo de entrada.
   */
  private onBlur = (): void => {
    this.onBlurValidations();
    this.isPressed = false;
    this.bdsOnBlur.emit();
  };

  /**
   * Função chamada ao ganhar o foco do campo de entrada.
   */
  private onFocus = (): void => {
    this.validationDanger = false;

    this.isPressed = true;
    this.bdsFocus.emit();
  };

  /**
   * Função chamada ao clicar no campo de entrada.
   */
  private onClickWrapper = (): void => {
    this.onFocus();
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  };

  /**
   * Limpa o valor do campo de entrada.
   */
  private clearTextInput = (ev?: Event) => {
    if (!this.readonly && !this.disabled && ev) {
      ev.preventDefault();
      ev.stopPropagation();
    }

    this.value = '';

    if (this.nativeInput) {
      this.nativeInput.value = '';
    }
  };

  /**
   * Função que renderiza o ícone dentro do campo de entrada.
   */
  private renderIcon(): HTMLElement {
    return (
      this.icon && (
        <div
          class={{
            input__icon: true,
            'input__icon--large': !!this.label,
          }}
        >
          <bds-icon
            class="input__icon--color"
            size={this.label ? 'medium' : 'small'}
            name={this.icon}
            color="inherit"
          ></bds-icon>
        </div>
      )
    );
  }

  /**
   * Função que renderiza a label do campo de entrada.
   */
  private renderLabel(): HTMLElement {
    return (
      this.label && (
        <label
          class={{
            input__container__label: true,
            'input__container__label--pressed': this.isPressed && !this.disabled,
          }}
        >
          <bds-typo variant="fs-12" bold="bold">
            {this.label}
          </bds-typo>
        </label>
      )
    );
  }

  /**
   * Função que renderiza as mensagens de erro ou sucesso abaixo do campo de entrada.
   */
  private renderMessage(): HTMLElement {
    const icon = this.danger ? 'error' : this.success ? 'checkball' : 'info';
    let message = this.danger ? this.errorMessage : this.success ? this.successMessage : this.helperMessage;

    if (!message && this.validationDanger) message = this.validationMesage;

    const styles =
      this.danger || this.validationDanger
        ? 'input__message input__message--danger'
        : this.success
          ? 'input__message input__message--success'
          : 'input__message';

    if (message) {
      return (
        <div class={styles} part="input__message">
          <div class="input__message__icon">
            <bds-icon size="x-small" name={icon} theme="outline" color="inherit"></bds-icon>
          </div>
          <bds-typo class="input__message__text" variant="fs-12">
            {message}
          </bds-typo>
        </div>
      );
    }

    return undefined;
  }

  /**
   * Valida o campo de entrada ao perder o foco.
   */
  private onBlurValidations() {
    this.validationDanger = false;
    
    this.required && this.requiredValidation();
    this.pattern && this.patternValidation();
    (this.minlength || this.maxlength) && this.lengthValidation();
    (this.min || this.max) && this.minMaxValidation();
    this.checkValidity();
  }

  /**
   * Realiza as validações do campo enquanto o usuário digita.
   */
  private onBdsInputValidations() {
    this.validationDanger = false;
    
    this.type === 'email' && this.emailValidation();
    this.type === 'phonenumber' && this.numberValidation();
    this.checkValidity();
  }

  /**
   * Valida o padrão regex do campo.
   */
  private patternValidation() {
    const regex = new RegExp(this.pattern);
    this.bdsPatternValidation.emit(regex.test(this.nativeInput.value));
  }

  /**
   * Valida se o campo é obrigatório.
   */
  private requiredValidation() {
    if (this.nativeInput.validity.valueMissing) {
      this.validationMesage = this.requiredErrorMessage;
      this.validationDanger = true;
    }
  }

  /**
   * Valida o comprimento do texto no campo de entrada.
   */
  private lengthValidation() {
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
  private minMaxValidation() {
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
  private emailValidation() {
    if (this.nativeInput.value && emailValidation(this.nativeInput.value)) {
      this.validationMesage = this.emailErrorMessage;
      this.validationDanger = true;
    }
  }

  /**
   * Valida se o campo contém um número válido.
   */
  private numberValidation() {
    if (this.nativeInput.value && numberValidation(this.nativeInput.value)) {
      this.validationMesage = this.numberErrorMessage;
      this.validationDanger = true;
    }
  }

  /**
   * Verifica se o campo de entrada é válido.
   */
  private checkValidity() {
    if (this.nativeInput && this.nativeInput.validity && this.nativeInput.validity.valid) {
      this.validationDanger = false;
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

  render(): HTMLElement {
    const isPressed = this.isPressed && !this.disabled;
    const Element = this.isTextarea ? 'textarea' : 'input';

    return (
      <Host aria-disabled={this.disabled ? 'true' : null}>
        <div
          class={{
            input: true,
            'input--state-primary': !this.danger && !this.validationDanger,
            'input--state-danger': this.danger || this.validationDanger,
            'input--state-success': this.success,
            'input--state-disabled': this.disabled,
            'input--label': !!this.label,
            'input--pressed': isPressed,
          }}
          onClick={this.onClickWrapper}
          onKeyDown={this.keyPressWrapper}
          part="input-container"
        >
          {this.renderIcon()}
          <slot name="input-left"></slot>
          <div class="input__container">
            {this.renderLabel()}
            <div class={{ input__container__wrapper: !this.chips, input__container__wrapper__chips: this.chips }}>
              <slot name="inside-input-left"></slot>
              <Element
                class={{ input__container__text: true, input__container__text__chips: this.chips }}
                ref={(input) => (this.nativeInput = input)}
                rows={this.rows}
                cols={this.cols}
                autocapitalize={this.autoCapitalize}
                autocomplete={this.autoComplete}
                disabled={this.disabled}
                min={this.min}
                max={this.max}
                minLength={this.minlength}
                maxLength={this.maxlength}
                name={this.inputName}
                onBlur={this.onBlur}
                onFocus={this.onFocus}
                onInput={this.onInput}
                placeholder={this.placeholder}
                readOnly={this.readonly}
                type={this.type}
                value={this.encodeValue(this.value)}
                pattern={this.pattern}
                required={this.required}
                part="input"
                data-test={this.dataTest}
              ></Element>
            </div>
          </div>
          {this.counterLength && (
            <bds-counter-text
              length={this.value.length}
              max={this.maxlength}
              active={isPressed}
              {...this.counterLengthRule}
            />
          )}
          {this.success && <bds-icon class="icon-success" name="check" theme="outline" size="small" />}
          <slot name="input-right" />
        </div>
        {this.renderMessage()}
      </Host>
    );
  }
}
