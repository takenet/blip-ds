import { Component, Element, h, Prop, Method, Event, EventEmitter, Listen, Watch, State } from '@stencil/core';
import { Option, SelectChangeEventDetail, SelectOptionsPositionType } from '../select-interface';
import { getScrollParent, positionAbsoluteElement } from '../../../utils/position-element';
import { emailValidation, whitespaceValidation } from '../../../utils/validations';
import { InputChipsTypes } from '../../input-chips/input-chips-interface';

@Component({
  tag: 'bds-select-chips',
  styleUrl: '../select.scss',
  shadow: true,
})
export class SelectChips {
  private nativeInput?: HTMLInputElement;
  private dropElement?: HTMLElement;
  private iconDropElement?: HTMLBdsIconElement;
  private positionHeightDrop?: SelectOptionsPositionType;

  @State() internalOptions: Option[];

  @Element() el!: HTMLElement;

  @State() isOpen? = false;

  @State() intoView?: HTMLElement = null;

  /**
   * Used to set the danger behavior by the internal validators
   */
  @State() validationDanger?: boolean = false;
  /**
   * Conditions the element to say whether it is pressed or not, to add styles.
   */
  @State() isPressed? = false;

  /**
   * Used to set the error message setted by the internal validators
   */
  @State() validationMesage? = '';

  @State() internalChips: string[] = [];

  /**
   * The options of the select
   * Should be passed this way:
   * options='[{"value": "Cat", "label": "Meow"}, {"value": "Dog", "label": "Woof"}]'
   * Options can also be passed as child by using bds-select-option component, but passing as a child you may have some compatibility problems with Angular.
   */
  @Prop({ mutable: true }) options?: string | Option[];

  /**
   * The chips on the component
   * Should be passed this way:
   * chips='["chip1", "chip2"]'
   */
  @Prop({ mutable: true }) chips: string | string[] = [];

  /**
   * Used for add prefix on new option select.
   */
  @Prop({ reflect: true }) newPrefix?: string = '';

  /**
   * the value of the select.
   */
  @Prop({ mutable: true }) value?: string | null = '';

  /**
   * Add state danger on input, use for use feedback.
   */
  @Prop({ reflect: true, mutable: true }) danger? = false;
  /**
   * Add state success on input, use for use feedback.
   */
  @Prop({ reflect: true, mutable: true }) success?: boolean = false;
  /**
   * Set maximum length value for the chip content
   */

  @Prop() maxlength?: number;

  /**
   * Indicated to pass an feedback to user.
   */
  @Prop({ mutable: true }) errorMessage? = '';

  /**
   * Disabled input.
   */
  @Prop({ reflect: true }) disabled? = false;

  /**
   *  label in input, with he the input size increases.
   */
  @Prop() label? = '';

  /**
   * used for add icon in input left. Uses the bds-icon component.
   */
  @Prop({ reflect: true }) icon?: string = '';

  /**
   * Do not accept duplicate chip elements.
   */
  @Prop() duplicated?: boolean = false;

  /**
   *  Specify if is possible to create a new tag that is not on the options.
   */
  @Prop() canAddNew?: boolean = true;

  /**
   *  Specify if is possible to create a new tag that is not on the options.
   */
  @Prop() notFoundMessage?: string = 'No results found';

  /**
   * Defining the type is important so that it is possible to carry out validations. Can be one of:
   * 'text' and 'email;
   */
  @Prop() type: InputChipsTypes = 'text';

  /**
   * The delimiter is used to add multiple chips in the same string.
   */
  @Prop() delimiters? = /,|;/;

  /**
   * If `true`, the user cannot modify the value.
   */
  @Prop() disableSubmit = false;
  /**
   * Indicated to pass a help the user in complex filling.
   */
  @Prop() helperMessage?: string = '';
  /**
   * Indicated to pass an feeback to user.
   */
  @Prop({ mutable: true }) successMessage?: string = '';
  /**
   * Prop to insert the name of the input
   */
  @Prop() inputName?: string = '';

  /**
   * A tip for the user who can enter no controls.
   */
  @Prop() placeholder?: string = '';

  /**
   * Set the placement of the options menu. Can be 'bottom' or 'top'.
   */
  @Prop({ mutable: true, reflect: true }) optionsPosition?: SelectOptionsPositionType = 'auto';
  /**
   * Data test is the prop to specifically test the component action object.
   */
  @Prop() dataTest?: string = null;

  /**
   * Emitted when the value has changed.
   */
  @Event() bdsChange!: EventEmitter<SelectChangeEventDetail>;

  /**
   * Emitted when the selection is cancelled.
   */
  @Event() bdsCancel!: EventEmitter<void>;

  /**
   * Emitted when the select loses focus.
   */
  @Event() bdsFocus!: EventEmitter<void>;

  /**
   * Emitted when the select loses focus.
   */
  @Event() bdsBlur!: EventEmitter<void>;

  /**
   * Emitted when the chip has added.
   */
  @Event() bdsChangeChips!: EventEmitter;

  /**
   * Emitted when the chip has added.
   */
  @Event() bdsSelectChipsInput!: EventEmitter;

  /**
   * Emitted when the chip has added.
   */
  @Event() bdsSubmit!: EventEmitter;

  @Watch('isOpen')
  protected isOpenChanged(isOpen: boolean): void {
    if (this.positionHeightDrop == 'bottom') {
      this.iconDropElement.name = this.isOpen ? 'arrow-up' : 'arrow-down';
    } else {
      this.iconDropElement.name = this.isOpen ? 'arrow-down' : 'arrow-up';
    }
    if (isOpen)
      if (this.optionsPosition != 'auto') {
        this.setDefaultPlacement(this.optionsPosition);
      } else {
        this.validatePositionDrop();
      }
  }

  @Listen('mousedown', { target: 'window', passive: true })
  handleWindow(ev: Event) {
    if (!this.el.contains(ev.target as HTMLInputElement)) {
      this.isOpen = false;
    }
  }

  /**
   * Call change event before alter chips values.
   */
  @Watch('chips')
  protected valueChanged(): void {
    if (this.chips) {
      if (typeof this.chips === 'string') {
        try {
          this.internalChips = JSON.parse(this.chips);
        } catch {
          this.internalChips = [];
        }
      } else {
        this.internalChips = this.chips;
      }
    } else {
      this.internalChips = [];
    }
  }

  @Watch('internalChips')
  protected internalValueChanged(): void {
    this.handleChangeChipsValue();
    this.bdsChangeChips.emit({ data: this.internalChips, value: this.getLastChip() });
  }

  /**
   * Return the validity of the input chips.
   */
  @Method()
  async isValid(): Promise<boolean> {
    return this.validateChips();
  }

  /**
   * Return the chips
   */
  @Method()
  async getChips(): Promise<string[]> {
    return this.internalChips;
  }

  /**
   * Clear all chips
   */
  @Method()
  async clear(): Promise<void> {
    this.internalChips = [];
    this.value = '';
  }

  @Method()
  async add(value: string): Promise<void> {
    this.handleDelimiters();
    if (value) {
      this.setChip(value);
    } else {
      this.setChip(this.value);
    }
    this.value = '';
  }

  @Method()
  async setFocus(): Promise<void> {
    this.nativeInput.focus();
  }

  @Method()
  async removeFocus(): Promise<void> {
    this.nativeInput.blur();
  }

  componentWillLoad() {
    this.valueChanged();
    this.intoView = getScrollParent(this.el);
  }

  async componentDidLoad() {
    await this.resetFilterOptions();
    if (this.optionsPosition != 'auto') {
      this.setDefaultPlacement(this.optionsPosition);
    } else {
      this.validatePositionDrop();
    }
  }

  private setDefaultPlacement(value: SelectOptionsPositionType) {
    if (value == 'bottom') {
      this.dropElement.classList.add('select__options--position-bottom');
      this.iconDropElement.name = 'arrow-down';
    } else {
      this.dropElement.classList.add('select__options--position-top');
      this.iconDropElement.name = 'arrow-up';
    }
  }

  private validatePositionDrop() {
    const positionValue = positionAbsoluteElement({
      actionElement: this.el,
      changedElement: this.dropElement,
      intoView: this.intoView,
    });
    this.positionHeightDrop = positionValue.y as SelectOptionsPositionType;
    if (positionValue.y == 'bottom') {
      this.dropElement.classList.add('select__options--position-bottom');
      this.iconDropElement.name = 'arrow-down';
    } else {
      this.dropElement.classList.add('select__options--position-top');
      this.iconDropElement.name = 'arrow-up';
    }
  }

  async connectedCallback() {
    for (const option of this.childOptions) {
      option.addEventListener('optionSelected', this.handler);
    }
  }

  private get childOptionsEnabled(): HTMLBdsSelectOptionElement[] {
    return this.options
      ? Array.from(
          this.el.shadowRoot.querySelectorAll('bds-select-option:not([invisible]):not(#option-add):not(#no-option)')
        )
      : Array.from(this.el.querySelectorAll('bds-select-option:not([invisible]):not(#option-add):not(#no-option)'));
  }

  private get childOptions(): HTMLBdsSelectOptionElement[] {
    return this.options
      ? Array.from(this.el.shadowRoot.querySelectorAll('bds-select-option:not(#option-add):not(#no-option)'))
      : Array.from(this.el.querySelectorAll('bds-select-option:not(#option-add):not(#no-option)'));
  }

  private handleChangeChipsValue = async () => {
    await this.resetFilterOptions();
  };

  private async filterOptions(term: string) {
    if (!term) {
      await this.resetFilterOptions();
      return;
    }

    for (const option of this.childOptions) {
      const isExistsChip = this.existsChip(option.textContent, await this.getChips());
      const optionTextLower = option.textContent.toLowerCase();
      const termLower = term.toLowerCase();

      if (isExistsChip) {
        option.setAttribute('invisible', 'invisible');
      }

      if (term && optionTextLower.includes(termLower) && !isExistsChip) {
        option.removeAttribute('invisible');
      }

      if (term && !optionTextLower.includes(termLower) && !isExistsChip) {
        option.setAttribute('invisible', 'invisible');
      }
    }
  }

  private async resetFilterOptions() {
    for (const option of this.childOptions) {
      const optionText = option.querySelector('bds-typo')?.textContent;
      if (this.existsChip(optionText, await this.getChips())) {
        option.setAttribute('invisible', 'invisible');
      } else {
        option.removeAttribute('invisible');
      }
    }
  }

  private refDropdown = (el: HTMLElement): void => {
    this.dropElement = el;
  };

  private refIconDrop = (el: HTMLBdsIconElement) => {
    this.iconDropElement = el;
  };

  private existsChip(optionChip: string, chips: string[]) {
    return chips.some((chip) => optionChip === chip);
  }

  private toggle = (): void => {
    if (!this.disabled) {
      this.isOpen = !this.isOpen;
    }
  };

  private handler = async (event: CustomEvent) => {
    const {
      detail: { value },
    } = event;
    const text = this.getText(value);
    await this.addChip(text);
    this.toggle();
  };

  private handlerNewOption = async (text: string) => {
    await this.addChip(text);
    this.toggle();
  };

  private enableCreateOption(): boolean {
    return !!(this.childOptionsEnabled.length === 0 && this.nativeInput && this.nativeInput.value);
  }

  private async addChip(chip: string) {
    await this.setChip(chip);
    this.nativeInput.value = '';
  }

  private getText = (value: string) => {
    const el: HTMLBdsSelectOptionElement = this.childOptions.find((option) => option.value === value);
    return this.getTextFromOption(el);
  };

  private getTextFromOption = (opt: HTMLBdsSelectOptionElement): string => {
    if (opt?.status || opt?.bulkOption) {
      if (this.internalOptions) {
        const internalOption = this.internalOptions.find((option) => option.value == opt.value);
        if (internalOption) {
          return internalOption.label;
        }
      }
      return opt.querySelector(`#bds-typo-label-${opt.value}`).textContent;
    }
    return opt?.titleText ? opt.titleText : opt?.textContent?.trim() ?? '';
  };

  private setFocusWrapper = (): void => {
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  };

  private removeFocusWrapper = (): void => {
    this.nativeInput.blur();
  };

  private validateChips() {
    if (this.type === 'email') {
      return !this.internalChips.some((chip) => !this.validateChip(chip));
    } else {
      return true;
    }
  }

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

  private handleOnBlur(): void {
    this.bdsBlur.emit();
    this.isPressed = false;
  }

  private onInput = (ev: Event): void => {
    const input = ev.target as HTMLInputElement | null;
    if (input) {
      this.value = input.value || '';
    }
    this.bdsSelectChipsInput.emit(ev as KeyboardEvent);
    this.changedInputValue();
  };

  private getLastChip(): string {
    return this.internalChips[this.internalChips.length - 1];
  }

  private keyPressWrapper = (event: KeyboardEvent): void => {
    switch (event.key) {
      case 'Enter':
        if (this.canAddNew !== false) {
          this.handleDelimiters();
          this.setChip(this.value);
          this.value = '';
        }
        break;
      case 'Backspace' || 'Delete':
        if ((this.value === null || this.value.length <= 0) && this.internalChips.length) {
          this.removeLastChip();
          this.handleChangeChipsValue;
          this.bdsChangeChips.emit({ data: this.internalChips });
        }
        break;
    }
  };

  private verifyAndSubstituteDelimiters(value: string) {
    if (value.length === 1 && value[0].match(this.delimiters)) {
      return '';
    }

    let newValue = value.replace(/;/g, ',').replace(/\,+|;+/g, ',');

    if (newValue[0].match(this.delimiters)) {
      newValue = newValue.substring(1);
    }

    return newValue;
  }

  private handleDelimiters() {
    const value = this.nativeInput.value;
    this.value = value ? value.trim() : '';

    if (value.length === 0) return;

    const existTerm = value.match(this.delimiters);
    if (!existTerm) return;

    const newValue = this.verifyAndSubstituteDelimiters(value);
    if (!newValue) {
      this.clearInputValues();
      return;
    }

    const words = newValue.split(this.delimiters);
    words.forEach((word) => {
      this.setChip(word);
    });

    this.clearInputValues();
  }

  private async handleChange(event: CustomEvent<{ value: string }>) {
    this.changedInputValue;
    const {
      detail: { value },
    } = event;

    this.value = value ? value.trim() : '';

    if (value.length === 0) return;

    const existTerm = value.match(this.delimiters);
    if (!existTerm) return;

    const newValue = this.verifyAndSubstituteDelimiters(value);
    if (!newValue) {
      this.clearInputValues();
      return;
    }

    const words = newValue.split(this.delimiters);
    words.forEach((word) => {
      this.setChip(word);
    });

    this.clearInputValues();
  }

  private changedInputValue = async () => {
    this.value = this.nativeInput.value;

    if (this.nativeInput.value) {
      await this.filterOptions(this.nativeInput.value);
    } else {
      await this.resetFilterOptions();
    }

    if (this.value && this.isOpen === false) {
      this.isOpen = true;
    }
  };

  private clearInputValues(value = '') {
    this.nativeInput.value = value;
    this.value = value;
  }

  private setChip(name: string) {
    if (!this.duplicated) {
      const exists = this.internalChips.some((chip) => chip.toLowerCase() === name.toLowerCase());
      if (exists) return;
    }

    if (!whitespaceValidation(name)) {
      return;
    }

    this.internalChips = [...this.internalChips, name];
  }

  private validateChip(name: string) {
    const trimmedName = name.trim();
    if (this.type === 'email' && emailValidation(trimmedName)) {
      return false;
    }
    return true;
  }

  private removeLastChip() {
    this.internalChips = this.internalChips.slice(0, this.internalChips.length - 1);
  }

  private removeChip(event: CustomEvent<{ id: string }>) {
    const {
      detail: { id },
    } = event;

    this.internalChips = this.internalChips.filter((_chip, index) => index.toString() !== id);
  }

  private renderChips() {
    if (!this.internalChips.length) {
      return [];
    }

    return this.internalChips.map((chip, index) => {
      const id = index.toString();
      const limit = 30;
      if (chip.length <= limit) {
        return (
          <bds-chip-clickable
            id={id}
            key={id}
            color="outline"
            close={!this.disabled}
            onChipClickableClose={(event) => this.removeChip(event)}
          >
            {chip}
          </bds-chip-clickable>
        );
      } else {
        return (
          <bds-tooltip key={id} position="top-center" tooltip-text={chip}>
            <bds-chip-clickable
              id={id}
              key={id}
              color="outline"
              close={!this.disabled}
              onChipClickableClose={(event) => this.removeChip(event)}
            >
              {`${chip.slice(0, limit)} ...`}
            </bds-chip-clickable>
          </bds-tooltip>
        );
      }
    });
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

    if (message) {
      return (
        <div class={styles} part="input__message">
          <div class="input__message__icon">
            <bds-icon size="x-small" name={icon} theme="solid" color="inherit"></bds-icon>
          </div>
          <bds-typo class="input__message__text" variant="fs-12">
            {message}
          </bds-typo>
        </div>
      );
    }

    return undefined;
  }

  private generateKey(value: string) {
    return value.toLowerCase().replace(/ /g, '-');
  }

  render() {
    const isPressed = this.isPressed && !this.disabled;

    let internalOptions: Option[] = [];
    if (this.options) {
      if (typeof this.options === 'string') {
        try {
          internalOptions = JSON.parse(this.options);
        } catch (e) {}
      } else {
        internalOptions = this.options;
      }
    }

    return (
      <div
        class="select"
        tabindex="0"
        onFocus={this.setFocusWrapper}
        onBlur={this.removeFocusWrapper}
        onKeyPress={this.keyPressWrapper}
      >
        <div class={{ element_input: true }} aria-disabled={this.disabled ? 'true' : null} onClick={this.toggle}>
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
          >
            {this.renderIcon()}
            <div class="input__container">
              {this.renderLabel()}
              <div class={{ input__container__wrapper: true }}>
                {this.internalChips.length > 0 && <span class="inside-input-left">{this.renderChips()}</span>}
                <input
                  ref={(input) => (this.nativeInput = input)}
                  class={{ input__container__text: true }}
                  name={this.inputName}
                  maxlength={this.maxlength}
                  placeholder={this.placeholder}
                  onInput={this.onInput}
                  onFocus={this.onFocus}
                  onBlur={() => this.handleOnBlur()}
                  onChange={() => this.handleChange}
                  value={this.value}
                  disabled={this.disabled}
                  data-test={this.dataTest}
                ></input>
              </div>
            </div>
            <div class="select__icon">
              <bds-icon ref={(el) => this.refIconDrop(el)} size="small" color="inherit"></bds-icon>
            </div>
            {this.success && <bds-icon class="icon-success" name="checkball" theme="solid" size="xxx-small" />}
          </div>
          {this.renderMessage()}
        </div>
        <div
          ref={(el) => this.refDropdown(el)}
          class={{
            select__options: true,
            'select__options--open': this.isOpen,
          }}
        >
          {internalOptions.map((option) => (
            <bds-select-option
              key={this.generateKey(option.value)}
              onOptionSelected={this.handler}
              value={option.value}
              status={option.status}
            >
              {option.label}
            </bds-select-option>
          ))}
          <slot />
          {this.canAddNew === true && this.enableCreateOption() && (
            <bds-select-option
              id="option-add"
              value="add"
              onClick={() => this.handlerNewOption(this.nativeInput.value)}
            >
              {this.newPrefix}
              {this.nativeInput.value}
            </bds-select-option>
          )}
          {!this.canAddNew && this.enableCreateOption() && (
            <bds-select-option id="no-option" value="add">
              {this.notFoundMessage}
            </bds-select-option>
          )}
        </div>
      </div>
    );
  }
}
