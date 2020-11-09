import { Component, h, Prop, State } from '@stencil/core';

export type TooltipPostionType =
  | 'top'
  | 'top-left'
  | 'top-right'
  | 'left'
  | 'left-top'
  | 'left-bottom'
  | 'bottom'
  | 'bottom-right'
  | 'bottom-left'
  | 'right'
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
  @Prop() position: TooltipPostionType = 'left';

  private setVisibility(value: boolean) {
    this.isMouseOver = value;
  }

  render() {
    return (
      <div
        class="tooltip__wrapper"
        onMouseOver={() => this.setVisibility(true)}
        onMouseLeave={() => this.setVisibility(false)}
      >
        <slot />
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
