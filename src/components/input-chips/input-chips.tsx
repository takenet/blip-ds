import { Component, Host, h, State, Prop, Method } from '@stencil/core';
import { emailValidation } from '../../utils/validations';
import { ChipItem, InputChipsTypes } from './input-chips-interface';

@Component({
  tag: 'bds-input-chips',
  styleUrl: 'input-chips.scss',
  shadow: true,
})
export class InputChips {
  @State() chips: ChipItem[] = [];

  @Prop() danger: false;

  @Prop() label: string;

  @Prop() type: InputChipsTypes = 'text';

  /**
   * Return the validity of the input chips.
   */
  @Method()
  async isValid(): Promise<boolean> {
    return this.validateChips();
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

    if (value) this.setChip(value);
  }

  private handleBackRemove(event: CustomEvent<{ value: string }>): void {
    const {
      detail: { value },
    } = event;

    if (value.length <= 1) {
      this.removeLastChip();
    }
  }

  private getChipId() {
    return (this.chips.length++).toString();
  }

  private setChip(name: string) {
    let valid = true;

    if (this.type === 'email' && emailValidation(name)) {
      valid = false;
    }

    this.chips = [...this.chips, { name, id: this.getChipId(), valid }];
  }

  private removeLastChip() {
    this.chips = [];
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
          danger={this.danger}
        >
          <span slot="input-left">{this.renderChips()}</span>
        </bds-input>
      </Host>
    );
  }
}
