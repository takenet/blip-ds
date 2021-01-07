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
  scoped: true,
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
   * Used to set tooltip position
   */
  @Prop() position: TooltipPostionType = 'left-center';

  private setVisibility(value: boolean) {
    this.isMouseOver = value;
  }

  render() {
    return (
      <div class="tooltip__wrapper">
        <div onMouseOver={() => this.setVisibility(true)} onMouseLeave={() => this.setVisibility(false)}>
          <slot />
        </div>
        <div
          class={{
            tooltip__tip: true,
            [`tooltip__tip--${this.position}`]: true,
            'tooltip__tip--visible': this.isMouseOver,
          }}
        >
          <bds-typo variant="fs-12">{this.tooltipText}</bds-typo>
        </div>
      </div>
    );
  }
}
