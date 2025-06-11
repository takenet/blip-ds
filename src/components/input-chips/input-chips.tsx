import { Component, Host, h, Prop, Method, Event, EventEmitter, Watch, State } from '@stencil/core';
import { emailValidation, whitespaceValidation } from '../../utils/validations';
import { InputChipsTypes } from './input-chips-interface';

@Component({
  tag: 'bds-input-chips',
  styleUrl: 'input-chips.scss',
  shadow: true,
})
export class InputChips {
  private nativeInput?: HTMLInputElement;

  @State() InputSize?: number = null;

  /**
   * Used to set the danger behavior by the internal validators
   */
  @State() validationDanger?: boolean = false;
  /**
   * Used to enable or disable input
   */
  @State() inputAvalible?: boolean = true;
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
   * The chips on the component
   * Should be passed this way:
   * chips='["chip1", "chip2"]'
   */
  @Prop({ mutable: true }) chips: string[] | string = [];

  /**
   * When true, the press enter will be simulated on blur event.
   */
  @Prop() blurCreation = false;

  /**
   * Defining the type is important so that it is possible to carry out validations. Can be one of:
   * 'text' and 'email;
   */
  @Prop() type: InputChipsTypes = 'text';

  /**
   *  label in input, with he the input size increases.
   */
  @Prop() label? = '';

  /**
   *  Set maximum length value for the chip content
   */
  @Prop() maxlength?: number;

  /**
   *  Set maximum length value for chips
   */
  @Prop() maxChipsLength?: number;
  /**
   * used for add icon in input left. Uses the bds-icon component.
   */
  @Prop({ reflect: true }) icon?: string = '';

  /**
   * The delimiter is used to add multiple chips in the same string.
   */
  @Prop() delimiters? = /,|;/;

  /**
   * Indicated to pass an feedback to user.
   */
  @Prop({ mutable: true }) errorMessage? = '';

  /**
   * Add state danger on input, use for use feedback.
   */
  @Prop({ reflect: true, mutable: true }) danger? = false;
  /**
   * Add state success on input, use for use feedback.
   */
  @Prop({ reflect: true, mutable: true }) success?: boolean = false;
  /**
   * The value of the input.
   */
  @Prop({ mutable: true, reflect: true }) value?: string | null = '';

  /**
   * Do not accept duplicate chip elements.
   */
  @Prop() duplicated?: boolean = false;

  /**
   * If `true`, the user cannot modify the value.
   */
  @Prop() disableSubmit = false;

  /**
   * Disabled input
   */
  @Prop({ reflect: true }) disabled?: boolean = false;

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
   * Passing true to display a counter of available size, it is necessary to
   * pass another maxlength property.
   */
  @Prop() counterLength? = false;
  /**
   * Prop for set the height of the component.
   */
  @Prop() height?: string;
  /**
   * Prop for set the max height of the component.
   */
  @Prop() maxHeight?: string;
  /**
   * Data test is the prop to specifically test the component action object.
   */
  @Prop() dataTest?: string = null;
  /**
   * Data test is the prop to specifically test the component action object.
   * dtButtonClose is the data-test to button close.
   */
  @Prop() dtButtonClose?: string = null;
  /**
   * Emitted when the chip has added.
   */
  @Event() bdsChange!: EventEmitter;

  /**
   * Emitted when the chip has added.
   */
  @Event() bdsChangeChips!: EventEmitter;

  /**
   * Emitted when the chip has added.
   */
  @Event() bdsInputChipsFocus!: EventEmitter;

  /**
   * Emitted when the chip has added.
   */
  @Event() bdsBlur!: EventEmitter;

  /**
   * Emitted when the chip has added.
   */
  @Event() bdsInputChipsInput!: EventEmitter;

  /**
   * Emitted when a maximum value defined by the "max-chips-length" prop is entered
   */
  @Event() bdsExtendedQuantityInput!: EventEmitter;
  /**
   * Emitted when the chip has added.
   */
  @Event() bdsSubmit!: EventEmitter;

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
    this.minMaxValidation();
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
  async get(): Promise<string[]> {
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

  componentDidLoad() {
    this.minMaxValidation();
  }

  componentWillLoad() {
    this.valueChanged();
  }

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
    this.bdsInputChipsFocus.emit();
    this.isPressed = true;
  };

  private handleOnBlur(): void {
    this.bdsBlur.emit(this.internalChips);
    if (this.internalChips.length > 0) {
      this.bdsSubmit.emit({ value: this.internalChips });
    }
    this.handleDelimiters();
    this.isPressed = false;
    if (this.blurCreation) {
      this.setChip(this.value);
      this.value = '';
    }
  }

  private onInput = (ev: Event): void => {
    const input = ev.target as HTMLInputElement | null;
    if (input) {
      this.value = input.value || '';
    }
    this.bdsInputChipsInput.emit(ev as KeyboardEvent);
  };

  private minMaxValidation() {
    if (!this.maxChipsLength == undefined) {
      this.inputAvalible = true;
    } else if (this.internalChips.length >= this.maxChipsLength) {
      this.inputAvalible = false;
      this.bdsExtendedQuantityInput.emit({ value: !this.inputAvalible });
    } else {
      this.inputAvalible = true;
    }
  }

  private getLastChip(): string {
    return this.internalChips[this.internalChips.length - 1];
  }

  private keyPressWrapper = (event: KeyboardEvent): void => {
    switch (event.key) {
      case 'Enter':
        this.handleDelimiters();
        this.setChip(this.value);
        this.value = '';
        this.bdsChange.emit({ data: this.internalChips, value: this.getLastChip() });
        this.bdsChangeChips.emit({ data: this.internalChips, value: this.getLastChip() });
        break;
      case 'Backspace' || 'Delete':
        if ((this.value === null || this.value.length <= 0) && this.internalChips.length) {
          this.removeLastChip();
          this.bdsChange.emit({ data: this.internalChips, value: this.getLastChip() });
          this.bdsChangeChips.emit({ data: this.internalChips, value: this.getLastChip() });
        }
        break;
    }
  };

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

  private async handleChange(event: CustomEvent<{ value: string }>) {
    const {
      detail: { value },
    } = event;

    // console.log('TRACE [input-chips] handleChange 1:', { value });

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
      this.setChip(word.trimStart());
    });

    this.clearInputValues();
    this.bdsChange.emit({ data: this.internalChips, value: this.getLastChip() });
    this.bdsChangeChips.emit({ data: this.internalChips, value: this.getLastChip() });
  }

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
    this.bdsChange.emit({ data: this.internalChips, value: this.getLastChip() });
    this.bdsChangeChips.emit({ data: this.internalChips, value: this.getLastChip() });
  }

  private renderChips() {
    if (!this.internalChips.length) {
      return [];
    }

    return this.internalChips.map((chip, index) => {
      const id = index.toString();
      // Reduce the limit to prevent chips from being too wide and causing scroll issues
      const limit = 20;
      if (chip.length <= limit) {
        return (
          <bds-chip-clickable
            id={id}
            key={id}
            color="outline"
            close={!this.disabled}
            onChipClickableClose={(event) => this.removeChip(event)}
            dtButtonClose={this.dtButtonClose}
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
              dtButtonClose={this.dtButtonClose}
            >
              {`${chip.slice(0, limit)}...`}
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

  render() {
    const isPressed = this.isPressed && !this.disabled;
    // Set default maxHeight if not provided to prevent UI breaking
    const defaultMaxHeight = this.maxHeight || '80px';
    
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
          <div class="input__container">
            {this.renderLabel()}
            <div 
              class="input__container__wrapper"
              style={{ maxHeight: defaultMaxHeight }}
            >
              {/* Chips and input are now siblings in the same flex container */}
              {this.internalChips.length > 0 && this.renderChips()}
              {this.inputAvalible && (
                <input
                  ref={(input) => (this.nativeInput = input)}
                  class="input__container__text"
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
                />
              )}
            </div>
          </div>
          {this.counterLength && (
            <bds-counter-text length={this.internalChips.length} max={this.maxChipsLength} active={isPressed} />
          )}
          {this.success && <bds-icon class="icon-success" name="checkb" theme="outline" size="xxx-small" />}
          <slot name="input-right"></slot>
        </div>
        {this.renderMessage()}
      </Host>
    );
  }
}
