import { Component, Host, h, State, Prop, Method, Event, EventEmitter } from '@stencil/core';
import { emailValidation } from '../../utils/validations';
import { ChipItem, InputChipsTypes } from './input-chips-interface';

@Component({
  tag: 'bds-input-chips',
  styleUrl: 'input-chips.scss',
  shadow: true,
})
export class InputChips {
  @State() chips: ChipItem[] = [];

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
  @Prop() errorMessage? = '';

  /**
   * Add state danger on input, use for use feedback.
   */
  @Prop({ reflect: true }) danger? = false;

  /**
   * Emitted when the chip has added.
   */
  @Event() bdsChange!: EventEmitter;

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
  async get(): Promise<ChipItem[]> {
    return this.chips;
  }

  private validateChips() {
    if (this.type === 'email') {
      return !this.chips.some((chip) => !chip.valid);
    } else {
      return true;
    }
  }

  private handleAddChip(event: CustomEvent<{ value: string }>): void {
    const {
      detail: { value },
    } = event;

    if (value && value.includes(this.delimiter)) {
      this.setChipList(value.split(this.delimiter));
    } else {
      this.setChip(value);
    }

    this.bdsChange.emit(this.chips);
  }

  private handleBackRemove(event: CustomEvent<{ value: string }>): void {
    const {
      detail: { value },
    } = event;

    if (value.length <= 1 && this.chips.length) {
      this.removeLastChip();
      this.bdsChange.emit(this.chips);
    }
  }

  private getChipId() {
    return (this.chips.length++).toString();
  }

  private setChipList(names: string[]) {
    names.forEach((name) => {
      if (name) this.setChip(name);
    });
  }

  private setChip(name: string) {
    if (!name) return;

    const isValid = this.validateChip(name);
    this.chips = [...this.chips, { name, id: this.getChipId(), valid: isValid }];
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

    this.chips = this.chips.filter((chip) => chip.id !== id);
  }

  private renderChips() {
    if (!this.chips.length) {
      return [];
    }

    return this.chips.map((chip) => (
      <bds-chip
        class="input-chips__chip"
        key={chip.id}
        id={chip.id}
        variant="primary"
        danger={!chip.valid}
        deletable
        onBdsDelete={(event) => this.removeChip(event)}
      >
        {chip.name}
      </bds-chip>
    ));
  }

  render() {
    return (
      <Host>
        <bds-input
          label={this.label}
          onBdsKeyDownBackspace={(event) => this.handleBackRemove(event)}
          onBdsSubmit={(event) => this.handleAddChip(event)}
          is-submit
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
