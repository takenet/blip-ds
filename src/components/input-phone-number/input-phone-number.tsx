import { Component, h, State, Prop, EventEmitter, Event, Method, Watch, Element, Listen, Host } from '@stencil/core';
import { Option } from '../selects/select-interface';
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
  @Element() el!: HTMLBdsSelectElement;

  @State() isOpen? = false;
  @State() selectedCountry: string;
  @State() isoCode: string;
  @State() validationDanger? = false;
  @State() validationMesage? = '';
  @State() isPressed? = false;
  @State() searchTerm: string = '';
  @State() filteredCountries: any = {};

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
  @Event({ bubbles: true, composed: true }) bdsPhoneNumberChange!: EventEmitter;
  /**
   * Evento disparado quando o input sofre alteração.
   */
  @Event() bdsInput!: EventEmitter<KeyboardEvent>;
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

  /**
   * Define o país inicial pelo nome da bandeira (ex: "brazil-flag", "united-states-flag").
   * Tem prioridade sobre o valor padrão quando especificado.
   */
  @Prop() initialCountryFlag?: string;

  /**
   * Define o país inicial pelo código ISO (ex: "BR", "US", "BR / BRA").
   * Tem prioridade sobre o valor padrão quando especificado.
   */
  @Prop() initialIsoCode?: string;

  /**
   * Habilita funcionalidade de busca no dropdown de países.
   */
  @Prop() enableSearch?: boolean = false;

  /**
   * Texto placeholder para o campo de busca.
   */
  @Prop() searchPlaceholder?: string = 'Search countries...';

  private countries: any = {};

  @Method()
  async removeFocus(): Promise<void> {
    this.onBdsInputBlur();
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

  @Watch('initialCountryFlag')
  initialCountryFlagChanged() {
    this.updateCountries();
  }

  @Watch('initialIsoCode')
  initialIsoCodeChanged() {
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
    } else if (this.initialIsoCode) {
      countryIndex = Object.values(this.countries).findIndex((country: any) => {
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
    } else if (this.value) {
      countryIndex = Object.values(this.countries).findIndex((country: any) => country.code === this.value);
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

  private get childOptions(): HTMLBdsSelectOptionElement[] {
    return Array.from(this.el.querySelectorAll('bds-select-option'));
  }

  // Event handlers for bds-input integration
  private onBdsInputChange = (event: CustomEvent): void => {
    const { value } = event.detail;
    this.text = value || '';
    // Don't call numberValidation here as bds-input handles its own validation
  };

  private onBdsInputInput = (event: CustomEvent): void => {
    this.bdsInput.emit(event.detail as KeyboardEvent);
  };

  private onBdsInputFocus = (): void => {
    this.bdsFocus.emit();
    this.isPressed = true;
  };

  private onBdsInputBlur = (): void => {
    this.bdsBlur.emit();
    this.isPressed = false;
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

  private toggle = (): void => {
    if (!this.disabled) {
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        // Reset search when opening
        this.searchTerm = '';
        this.resetFilterCountries();
      }
    }
  };

  private handleKeyDown(event) {
    if (event.key == 'Enter') {
      this.toggle();
    }
  }

  @Method()
  async getSelectedCountry(): Promise<string> {
    return this.selectedCountry;
  }

  @Method()
  async getIsoCode(): Promise<string> {
    return this.isoCode;
  }

  @Method()
  async filterCountries(term: string): Promise<void> {
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

  private internalFilterCountries = (term: string): void => {
    this.filterCountries(term);
  };

  private resetFilterCountries = (): void => {
    this.filteredCountries = { ...this.countries };
  };

  private onSearchInput = (event: Event): void => {
    const input = event.target as HTMLInputElement;
    this.searchTerm = input.value || '';
    this.internalFilterCountries(this.searchTerm);
  };

  private onSearchKeyDown = (event: KeyboardEvent): void => {
    // Prevent search input from closing the dropdown
    event.stopPropagation();
  };

  private renderSearchInput(): HTMLElement {
    return (
      this.enableSearch && (
        <div class="select-phone-number__search">
          <input
            type="text"
            placeholder={this.searchPlaceholder}
            value={this.searchTerm}
            onInput={this.onSearchInput}
            onKeyDown={this.onSearchKeyDown}
            style={{
              width: '100%',
              padding: '8px 12px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '14px'
            }}
          />
        </div>
      )
    );
  }

  private renderCountrySelector(): HTMLElement {
    const iconArrow = this.isOpen ? 'arrow-up' : 'arrow-down';
    
    return (
      <div
        onClick={this.toggle}
        onKeyDown={this.handleKeyDown.bind(this)}
        data-test={this.dtSelectFlag}
        class="input__country-selector"
        tabindex="0"
      >
        <bds-icon size="medium" theme="solid" name={this.selectedCountry} color="primary"></bds-icon>
        <bds-icon size="x-small" name={iconArrow}></bds-icon>
        <div class="input__container__country-code">
          <bds-typo no-wrap="true" variant="fs-14">
            {this.value}
          </bds-typo>
        </div>
      </div>
    );
  }

  render(): HTMLElement {
    const filteredFlagsNames = Object.keys(this.filteredCountries);

    return (
      <Host aria-disabled={this.disabled ? 'true' : null}>
        <div class={{ element_input: true }} aria-disabled={this.disabled ? 'true' : null}>
          <bds-input
            type="phonenumber"
            label={this.label}
            value={this.text}
            disabled={this.disabled}
            danger={this.danger || this.validationDanger}
            success={this.success}
            required={this.required}
            icon={this.icon}
            helperMessage={this.helperMessage}
            errorMessage={this.danger ? this.errorMessage : this.validationDanger ? this.validationMesage : ''}
            successMessage={this.successMessage}
            numberErrorMessage={this.numberErrorMessage}
            requiredErrorMessage={this.requiredErrorMessage}
            pattern="/^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$/"
            dataTest={this.dataTest}
            maxlength={this.value === '+55' ? 25 : null}
            onBdsChange={this.onBdsInputChange}
            onBdsInput={this.onBdsInputInput}
            onBdsFocus={this.onBdsInputFocus}
            onBdsOnBlur={this.onBdsInputBlur}
          >
            <div slot="inside-input-left">
              {this.renderCountrySelector()}
            </div>
          </bds-input>
        </div>
        <div
          class={{
            'select-phone-number__options': true,
            'select-phone-number__options--open': this.isOpen,
          }}
        >
          {this.isOpen && [
            this.renderSearchInput(),
            filteredFlagsNames.map((flag) => (
              <bds-select-option
                key={flag}
                onOptionSelected={this.handler}
                selected={flag === this.selectedCountry}
                value={{ code: this.filteredCountries[flag].code, isoCode: this.filteredCountries[flag].isoCode, flag }}
                status={this.filteredCountries[flag].isoCode}
              >
                {this.filteredCountries[flag].name} {this.filteredCountries[flag].code}
              </bds-select-option>
            ))
          ]}
        </div>
      </Host>
    );
  }
}
