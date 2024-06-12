import { Component, h, Method, Prop, State, Watch } from '@stencil/core';

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
  @State() textVerify: string;
  @State() maxWidtTooltip: string;

  /**
   * Used to set tooltip text
   */
  @Prop({ mutable: true }) tooltipText = 'Tooltip';

  /**
   * Used to disable tooltip when the button are avalible
   */
  @Prop({ reflect: true }) disabled? = false;

  /**
   * Used to set tooltip position
   */
  @Prop() position: TooltipPostionType = 'left-center';

  /**
   * Used to set tooltip max width
   */
  @Prop() maxWidth?: string = '320px';

  /**
   * Data test is the prop to specifically test the component action object.
   */
  @Prop() dataTest?: string = null;

  /**
   * Method for change the visibility of tooltip.
   */
  @Method()
  async visible() {
    this.isMouseOver = true;
  }

  /**
   * Method for change the visibility of tooltip.
   */
  @Method()
  async invisible() {
    this.isMouseOver = false;
  }

  private setVisibility(value: boolean) {
    if (this.disabled) {
      this.isMouseOver = false;
      return;
    }
    this.isMouseOver = value;
  }

  componentWillLoad() {
    this.textVerify = this.tooltipText ? this.tooltipText.replace(/<br>/gi, '\r\n') : '';
    this.maxWidtTooltip = this.maxWidth;
  }

  @Watch('tooltipText')
  tooltipTextChanged(): void {
    this.textVerify = this.tooltipText ? this.tooltipText.replace(/<br>/gi, '\r\n') : '';
  }

  @Watch('maxWidth')
  maxWidthChanged(): void {
    this.maxWidtTooltip = this.maxWidth;
  }

  render() {
    const styleTooltip = {
      maxWidth: this.maxWidtTooltip,
    };
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
          style={styleTooltip}
        >
          <div class={{ tooltip__tip__text: true }}>
            <pre>
              <bds-typo class="text" no-wrap="false" variant="fs-12">
                {this.textVerify}
              </bds-typo>
            </pre>
          </div>
        </div>
      </div>
    );
  }
}
