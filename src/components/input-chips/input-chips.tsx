import { Component, Host, h, Prop, Method, Event, EventEmitter, Watch, State } from '@stencil/core';
import { emailValidation, whitespaceValidation } from '../../utils/validations';
import { InputChipsTypes } from './input-chips-interface';

@Component({
  tag: 'bds-input-chips',
  styleUrl: 'input-chips.scss',
  scoped: true,
})
export class InputChips {
  private nativeInput?: HTMLBdsInputElement;

  @State() internalChips: string[] = [];

  /**
   * The chips on the component
   * Should be passed this way:
   * chips='["chip1", "chip2"]'
   */
  @Prop({ mutable: true }) chips: string[] | string = [];

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
   * Prop to insert the name of the input
   */
  @Prop() inputName?: string = '';

  /**
   * A tip for the user who can enter no controls.
   */
  @Prop() placeholder?: string = '';

  /**
   * Data test is the prop to specifically test the component action object.
   */
  @Prop() dataTest?: string = null;

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
  @Event() bdsBlur!: EventEmitter;

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
    this.setChip(value);
  }

  @Method()
  async setFocus(): Promise<void> {
    this.nativeInput.setFocus();
  }

  @Method()
  async removeFocus(): Promise<void> {
    this.nativeInput.removeFocus();
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

  private handleOnBlur(): void {
    this.bdsBlur.emit(this.internalChips);
  }

  private handleAddChip(event: CustomEvent<{ value: string }>): void {
    if (this.disableSubmit) {
      return;
    }

    const {
      detail: { value },
    } = event;
    this.setChip(value);
    this.value = '';
  }

  private getLastChip(): string {
    return this.internalChips[this.internalChips.length - 1];
  }

  private handleBackRemove(event: CustomEvent<{ value: string }>): void {
    const {
      detail: { value },
    } = event;

    if ((value === null || value.length <= 0) && this.internalChips.length) {
      this.removeLastChip();
      this.bdsChangeChips.emit({ data: this.internalChips, value });
    }
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
      this.setChip(word);
    });

    this.clearInputValues();
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
  }

  private renderChips() {
    if (!this.internalChips.length) {
      return [];
    }

    return this.internalChips.map((chip, index) => {
      const id = index.toString();

      return (
        <bds-chip
          class="input-chips__chip"
          id={id}
          key={id}
          variant="primary"
          danger={!this.validateChip(chip)}
          deletable={!this.disabled}
          onBdsDelete={(event) => this.removeChip(event)}
        >
          {chip}
        </bds-chip>
      );
    });
  }

  render() {
    return (
      <Host>
        <bds-input
          ref={(input) => (this.nativeInput = input)}
          icon={this.icon}
          label={this.label}
          onBdsKeyDownBackspace={(event) => this.handleBackRemove(event)}
          onBdsSubmit={(event) => this.handleAddChip(event)}
          onBdsOnBlur={() => this.handleOnBlur()}
          onBdsChange={(event) => this.handleChange(event)}
          maxlength={this.maxlength}
          value={this.value}
          error-message={this.errorMessage}
          helper-message={this.helperMessage}
          input-name={this.inputName}
          placeholder={this.placeholder}
          danger={this.danger}
          chips={true}
          disabled={this.disabled}
          data-test={this.dataTest}
        >
          <span slot="inside-input-left">{this.renderChips()}</span>
          <div slot="input-right">
            <slot name="input-right"></slot>
          </div>
        </bds-input>
      </Host>
    );
  }
}
