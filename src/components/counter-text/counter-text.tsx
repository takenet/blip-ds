import { Component, h, Prop } from "@stencil/core";
import { CounterTextRule, CounterTextState } from './counter-text-interface';

@Component({
  tag: 'bds-counter-text',
  styleUrl: 'counter-text.scss',
})
export class CounterText {
  @Prop({ mutable: true }) length!: number;
  @Prop() max?: number;
  @Prop({ mutable: true }) active?= false;

  @Prop({ mutable: true }) warning?: CounterTextRule = { max: 20, min: 2 }
  @Prop({ mutable: true }) delete?: CounterTextRule = { max: 1, min: 0 }

  getState(): string {
    const actualLength = this.getActualLength();

    if (actualLength >= this.warning.min && actualLength <= this.warning.max) {
      return CounterTextState.Warning;
    }

    if (actualLength <= this.delete.max) {
      return CounterTextState.Delete;
    }

    return CounterTextState.Default;
  }

  getActualLength(): number {
    return this.max - this.length;
  }

  render(): HTMLElement {
    const state = this.getState();
    const actualLength = this.getActualLength();

    return (
      <div class={{
        "counter-text": true,
        "counter-text--active": this.active,
        [`counter-text--${state}`]: true,
      }}>
        <bds-typo variant="fs-10">{actualLength}</bds-typo>
      </div >
    )
  }
}