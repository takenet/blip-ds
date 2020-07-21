/* eslint-disable no-console */
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
   * The delimiter is used to add multiple chips in the same string.
   */
  @Prop() delimiter = ',';

  /**
   * Indicated to pass an feeback to user.
   */
  @Prop({ mutable: true }) errorMessage? = '';

  /**
   * Add state danger on input, use for use feedback.
   */
  @Prop({ reflect: true, mutable: true }) danger? = false;

  /**
   * The value of the input.
   */
  @Prop({ mutable: true }) value?: string | null = '';

  /**
   * Emitted when the chip has added.
   */
  @Event() bdsChange!: EventEmitter;

  /**
   * Emitted when the chip has added.
   */
  @Event() bdsBlur!: EventEmitter;

  /**
   * Call change event before alter chips values.
   */
  @Watch('chips')
  protected valueChanged(): void {
    this.bdsChange.emit({ data: this.chips, value: this.getLastChip() });
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
    const {
      detail: { value },
    } = event;

    if (!whitespaceValidation(value)) {
      return;
    }

    if (value && value.includes(this.delimiter)) {
      this.setChipList(value.split(this.delimiter));
    } else {
      this.setChip(value);
    }
  }

  private getLastChip(): string {
    return this.chips[this.chips.length - 1];
  }

  private handleBackRemove(event: CustomEvent<{ value: string }>): void {
    const {
      detail: { value },
    } = event;

    if (value.length <= 0 && this.chips.length) {
      this.removeLastChip();
      this.bdsChange.emit(this.chips);
    }
  }

  private async handleChange(event: CustomEvent<{ value: string }>) {
    const {
      detail: { value },
    } = event;

    const term = /,|;/;
    const existTerm = value.match(term);

    if (existTerm === null) return;

    const words = value.split(term);

    words.forEach((word) => {
      if (!whitespaceValidation(word)) {
        return;
      }
      this.setChip(word);
    });

    const el = await this.nativeInput;
    el.clear();
    this.value = '';
  }

  private setChipList(names: string[]) {
    names.forEach((name) => {
      if (name) this.setChip(name);
    });
  }

  private setChip(name: string) {
    this.chips = [...this.chips, name];
  }

  private validateChip(name: string) {
    if (this.type === 'email' && emailValidation(name)) {
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
          ref={(input) => (this.nativeInput = input) as HTMLBdsInputElement}
          label={this.label}
          onBdsKeyDownBackspace={(event) => this.handleBackRemove(event)}
          onBdsSubmit={(event) => this.handleAddChip(event)}
          onBdsOnBlur={() => this.handleOnBlur()}
          onBdsChange={(event) => this.handleChange(event)}
          is-submit
          value={this.value}
          error-message={this.errorMessage}
          danger={this.danger}
          chips={true}
        >
          <span slot="input-left">{this.renderChips()}</span>
        </bds-input>
      </Host>
    );
  }
}
