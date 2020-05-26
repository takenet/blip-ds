import { Component, Host, h, State } from '@stencil/core';

type ChipItem = {
  id: string;
  name: string;
  valid: boolean;
};

let chipsIds = 0;

@Component({
  tag: 'bds-input-chips',
  styleUrl: 'input-chips.scss',
  shadow: true,
})
export class InputChips {
  @State() chips: ChipItem[] = [];

  private handleAddChip(event) {
    const {
      detail: { value },
    } = event;

    this.setChip(value);
  }

  private setChip(name: string) {
    this.chips = [...this.chips, { name, id: chipsIds.toString(), valid: true }];
    chipsIds++;
  }

  private removeChip(event) {
    const {
      detail: { value },
    } = event;

    this.chips = this.chips.filter((chip) => chip.id === value);
  }

  private renderChips() {
    if (!this.chips.length) {
      return [];
    }

    return this.chips.map((chip) => (
      <bds-chip
        key={chip.id}
        id={chip.id}
        class="input-chips__chip"
        variant="primary"
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
        <bds-input label="Emails" onBdsSubmit={(event) => this.handleAddChip(event)}>
          <span slot="input-left">{this.renderChips()}</span>
        </bds-input>
      </Host>
    );
  }
}
