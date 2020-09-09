import { Component, Host, h, Prop, Method, Event, EventEmitter, Watch } from '@stencil/core';
import { emailValidation, whitespaceValidation } from '../../utils/validations';
import { InputChipsTypes } from './input-chips-interface';

@Component({
  tag: 'bds-input-chips',
  styleUrl: 'input-chips.scss',
  scoped: true,
})
export class InputChips {
  private nativeInput?: HTMLBdsInputElement;

  @Prop({ mutable: true }) chips: string[] = [];

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
   * used for add icon in input left. Uses the bds-icon component.
   */
  @Prop({ reflect: true }) icon?: string = '';

  /**
   * The delimiter is used to add multiple chips in the same string.
   */
  @Prop() delimiters = /,|;/;

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
    this.bdsChangeChips.emit({ data: this.chips, value: this.getLastChip() });
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
    return this.chips;
  }

  /**
   * Clear all chips
   */
  @Method()
  async clear(): Promise<void> {
    this.chips = [];
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

  private validateChips() {
    if (this.type === 'email') {
      return !this.chips.some((chip) => !this.validateChip(chip));
    } else {
      return true;
    }
  }

  private handleOnBlur(): void {
    this.bdsBlur.emit(this.chips);
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
    return this.chips[this.chips.length - 1];
  }

  private handleBackRemove(event: CustomEvent<{ value: string }>): void {
    const {
      detail: { value },
    } = event;

    if ((value === null || value.length <= 0) && this.chips.length) {
      this.removeLastChip();
      this.bdsChangeChips.emit({ data: this.chips, value });
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
      const exists = this.chips.some((chip) => chip.toLowerCase() === name.toLowerCase());
      if (exists) return;
    }

    if (!whitespaceValidation(name)) {
      return;
    }

    this.chips = [...this.chips, name];
  }

  private validateChip(name: string) {
    const trimmedName = name.trim();
    if (this.type === 'email' && emailValidation(trimmedName)) {
      return false;
    }
    return true;
  }

  private removeLastChip() {
    this.chips = this.chips.slice(0, this.chips.length - 1);
  }

  private removeChip(event: CustomEvent<{ id: string }>) {
    const {
      detail: { id },
    } = event;

    this.chips = this.chips.filter((_chip, index) => index.toString() !== id);
  }

  private renderChips() {
    if (!this.chips.length) {
      return [];
    }

    return this.chips.map((chip, index) => {
      const id = index.toString();

      return (
        <bds-chip
          class="input-chips__chip"
          id={id}
          key={id}
          variant="primary"
          danger={!this.validateChip(chip)}
          deletable
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
          value={this.value}
          error-message={this.errorMessage}
          danger={this.danger}
          chips={true}
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
