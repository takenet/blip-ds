import { Component, h, State, Prop, EventEmitter, Event, Method, Watch, Element, Listen, Host } from '@stencil/core';
import { Option } from '../selects/select-interface';
import { numberValidation } from '../../utils/validations';
import * as countriesDefault from './countries.json';
import * as countriesPtBR from './countries-pt_BR.json';
import * as countriesEnUS from './countries-en_US.json';
import * as countriesEsES from './countries-es_ES.json';

export type languages = 'pt_BR' | 'es_ES' | 'en_US';
@Component({
  tag: 'bds-input-phone-number',
  styleUrl: 'input-phone-number.scss',
  shadow: true,
})
export class InputPhoneNumber {
  private nativeInput?: HTMLInputElement;

  @Element() el!: HTMLBdsSelectElement;

  @State() isOpen? = false;
  @State() selectedCountry: string;
  @State() isoCode: string;
  @State() validationDanger? = false;
  @State() validationMesage? = '';
  @State() isPressed? = false;

  /**
   * Lista de opções do select.
   */
  @Prop() options?: Array<Option> = [];

  /**
   * Valor do input de telefone.
   */
  @Prop() text? = '';

  /**
   * Valor do select.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Prop({ mutable: true }) value?: string | null = '+55';

  /**
   * Habilita o estado "danger" no input.
   */
  @Prop({ mutable: true, reflect: true }) danger? = false;
  /**
   * Habilita o estado "success" no input.
   */
  @Prop({ reflect: true, mutable: true }) success?: boolean = false;
  /**
   * Desabilita o input.
   */
  @Prop({ reflect: true }) disabled? = false;

  /**
   * Se `true`, o valor do input será obrigatório.
   */
  @Prop() required: boolean;

  /**
   * Mensagem de ajuda para o usuário.
   */
  @Prop() helperMessage?: string = '';
  /**
   * Mensagem de erro a ser exibida.
   */
  @Prop({ mutable: true }) errorMessage?: string = '';
  /**
   * Mensagem de sucesso a ser exibida.
   */
  @Prop({ mutable: true }) successMessage?: string = '';
  /**
   * Mensagem de erro para campo obrigatório.
   */
  @Prop() requiredErrorMessage: string;
  /**
   * Mensagem de erro para validação numérica.
   */
  @Prop() numberErrorMessage: string;

  /**
   * Data-test para identificar o componente.
   */
  @Prop() dataTest?: string = null;
  /**
   * Data-test para o botão de seleção de bandeira.
   */
  @Prop() dtSelectFlag?: string = null;

  /**
   * Evento disparado quando o valor é alterado.
   */
  @Event({ bubbles: true, composed: true }) bdsPhoneNumberChange!: EventEmitter<{
    value: string | null;
    code: string | null;
    isoCode: string | null;
    country: string | null;
  }>;

  /**
   * Evento disparado quando o input sofre alteração.
   */
  @Event() bdsInput!: EventEmitter<InputEvent>;
  /**
   * Evento disparado quando a seleção é cancelada.
   */
  @Event() bdsCancel!: EventEmitter<void>;
  /**
   * Evento disparado quando o select ganha foco.
   */
  @Event() bdsFocus!: EventEmitter<void>;
  /**
   * Evento disparado quando o select perde o foco.
   */
  @Event() bdsBlur!: EventEmitter<void>;

  /**
   * Label do input.
   */
  @Prop() label? = 'Phone number';
  /**
   * Ícone à esquerda do input.
   */
  @Prop({ reflect: true }) icon?: string = '';
  /**
   * Valores possíveis: "pt_BR", "en_US", "es_ES".
   * Se nenhum for informado, utiliza o arquivo padrão (countries.json).
   */
  @Prop({ mutable: true }) language?: languages = 'pt_BR';

  private countries: any = {};

  @Method()
  async removeFocus(): Promise<void> {
    this.onBlur();
  }

  @Watch('value')
  valueChanged(): void {
    for (const option of this.childOptions) {
      option.selected = this.value === option.value;
    }
  }

  @Listen('mousedown', { target: 'window', passive: true })
  handleWindow(ev: Event) {
    if (!this.el.contains(ev.target as HTMLInputElement)) {
      this.isOpen = false;
    }
  }

  @Watch('language')
  languageChanged() {
    this.updateCountries();
  }

  private updateCountries() {
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

    const flagsNames = Object.keys(this.countries);
  
    const countryIndex = Object.values(this.countries).findIndex((country: any) => country.code === this.value);
  
    if (countryIndex !== -1) {
      this.selectedCountry = flagsNames[countryIndex];
    } else {
      this.selectedCountry = this.selectedCountry || flagsNames[0];
    }
    this.isoCode = this.isoCode || flagsNames[0];
  }

  componentWillRender() {
    this.updateCountries();
  }

  private get childOptions(): HTMLBdsSelectOptionElement[] {
    return Array.from(this.el.querySelectorAll('bds-select-option'));
  }

  private refNativeInput = (el: HTMLInputElement): void => {
    this.nativeInput = el;
  };

  private onClickWrapper = (): void => {
    this.onFocus();
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  };

  private onFocus = (): void => {
    this.bdsFocus.emit();
    this.isPressed = true;
  };

  private onBlur = (): void => {
    this.bdsBlur.emit();
    this.isPressed = false;
  };

  private changedInputValue = async (ev: InputEvent) => {
    const input = ev.target as HTMLInputElement | null;
    this.checkValidity();
    if (input) {
      this.text = input.value || '';
      this.numberValidation();
    }
    this.bdsInput.emit(ev);
  };

  @Watch('text')
  protected handleInputChange(): void {
    this.bdsPhoneNumberChange.emit({
      value: this.text,
      code: this.value,
      isoCode: this.isoCode,
      country: this.selectedCountry,
    });
  }

  private numberValidation() {
    if (numberValidation(this.nativeInput.value)) {
      this.validationMesage = this.numberErrorMessage;
      this.validationDanger = true;
    } else {
      this.validationDanger = false;
    }
  }

  private toggle = (): void => {
    if (!this.disabled) {
      this.isOpen = !this.isOpen;
    }
  };

  private handleKeyDown(event) {
    if (event.key == 'Enter') {
      this.toggle();
    }
  }

  private handler = (event: CustomEvent): void => {
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

  @Method()
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

  private keyPressWrapper = (event: KeyboardEvent): void => {
    const isSelectElement = (event.target as Element).localName === 'bds-select';
    const isInputElement = (event.target as Element).localName === 'input';

    if (event.key === 'Enter' && !this.isOpen && (isSelectElement || isInputElement)) {
      this.toggle();
    }
  };

  private checkValidity() {
    if (this.nativeInput.validity.valid) {
      this.validationDanger = false;
    }
  }

  private renderIcon(): HTMLElement {
    return (
      this.icon && (
        <div
          class={{
            input__icon: true,
            'input__icon--large': !!this.label,
          }}
        >
          <bds-icon size={this.label ? 'medium' : 'small'} name={this.icon} color="inherit"></bds-icon>
        </div>
      )
    );
  }

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

    return message ? (
      <div class={styles} part="input__message">
        <div class="input__message__icon">
          <bds-icon size="x-small" name={icon} theme="outline" color="inherit"></bds-icon>
        </div>
        <bds-typo class="input__message__text" variant="fs-12">
          {message}
        </bds-typo>
      </div>
    ) : null;
  }

  render(): HTMLElement {
    const isPressed = this.isPressed && !this.disabled;
    const iconArrow = this.isOpen ? 'arrow-up' : 'arrow-down';
    const flagsNames = Object.keys(this.countries);

    return (
      <Host aria-disabled={this.disabled ? 'true' : null}>
        <div class={{ element_input: true }} aria-disabled={this.disabled ? 'true' : null}>
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
            <div
              onClick={this.toggle}
              onKeyDown={this.handleKeyDown.bind(this)}
              data-test={this.dtSelectFlag}
              class="input__icon"
              tabindex="0"
            >
              <bds-icon size="medium" theme="solid" name={this.selectedCountry} color="primary"></bds-icon>
              <bds-icon size="x-small" name={iconArrow}></bds-icon>
            </div>
            <div class="input__container">
              {this.renderLabel()}
              <div class={{ input__container__wrapper: true }}>
                <div class="input__container__country-code">
                  <bds-typo no-wrap="true" variant="fs-14">
                    {this.value}
                  </bds-typo>
                </div>
                <input
                  class={{ input__container__text: true }}
                  type="phonenumber"
                  required={this.required}
                  pattern="/^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$/"
                  ref={this.refNativeInput}
                  onInput={this.changedInputValue}
                  onFocus={this.onFocus}
                  onBlur={this.onBlur}
                  value={this.text}
                  disabled={this.disabled}
                  data-test={this.dataTest}
                  {...{ maxlength: this.value === '+55' ? 25 : null }}
                ></input>
              </div>
            </div>
            {this.success && <bds-icon class="icon-success" name="check" theme="outline" size="xxx-small" />}
            <slot name="input-right" />
          </div>
          {this.renderMessage()}
        </div>
        <div
          class={{
            'select-phone-number__options': true,
            'select-phone-number__options--open': this.isOpen,
          }}
        >
          {this.isOpen &&
            flagsNames.map((flag) => (
              <bds-select-option
                key={flag}
                onOptionSelected={this.handler}
                selected={flag === this.selectedCountry}
                value={{ code: this.countries[flag].code, isoCode: this.countries[flag].isoCode, flag }}
                status={this.countries[flag].isoCode}
              >
                {this.countries[flag].name} {this.countries[flag].code}
              </bds-select-option>
            ))}
        </div>
      </Host>
    );
  }
}
