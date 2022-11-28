import { Component, h, Prop, State } from '@stencil/core';

export type TooltipPostionType =
  | 'top-center'
  | 'top-left'
  | 'top-right'
  | 'left-center'
  | 'left-top'
  | 'left-bottom'
  | 'bottom-center'
  | 'bottom-right'
  | 'bottom-left'
  | 'right-center'
  | 'right-top'
  | 'right-bottom';

@Component({
  tag: 'bds-tooltip',
  styleUrl: 'tooltip.scss',
  shadow: true,
})
export class Tooltip {
  /**
   * Used to set tooltip visibility
   */
  @State() isMouseOver = false;
  /**
   * Used to set tooltip text
   */
  @Prop() tooltipText = 'Tooltip';

  /**
   * Used to disable tooltip when the button are avalible
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * Used to set tooltip position
   */
  @Prop() position: TooltipPostionType = 'left-center';

  /**
   * Data test is the prop to specifically test the component action object.
   */
  @Prop() dataTest?: string = null;

  private setVisibility(value: boolean) {
    if (this.disabled) {
      this.isMouseOver = false;
      return;
    }
    this.isMouseOver = value;
  }

  render() {
    return (
      <div class="tooltip__wrapper">
        <div
          onMouseEnter={() => this.setVisibility(true)}
          onMouseLeave={() => this.setVisibility(false)}
          data-test={this.dataTest}
        >
          <slot />
        </div>
        <div
          class={{
            tooltip__tip: true,
            [`tooltip__tip--${this.position}`]: true,
            'tooltip__tip--visible': this.isMouseOver,
          }}
        >
          <div class={{ tooltip__tip__text: true }}>
            <bds-typo variant="fs-12">{this.tooltipText}</bds-typo>
          </div>
        </div>
      </div>
    );
  }
}
