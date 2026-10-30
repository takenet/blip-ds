import { Component, Element, Host, Method, Prop, State, Watch, h } from '@stencil/core';
import { warnLegacyValue } from '../../utils/deprecation';

export type UaiTooltipPositionType =
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

const POSITIONS: readonly UaiTooltipPositionType[] = [
  'top-center',
  'top-left',
  'top-right',
  'left-center',
  'left-top',
  'left-bottom',
  'bottom-center',
  'bottom-right',
  'bottom-left',
  'right-center',
  'right-top',
  'right-bottom',
];

let tooltipIds = 0;

const formatText = (text: string): string => (text ? text.replace(/<br>/gi, '\r\n') : '');

/**
 * Short supplementary text shown on hover or keyboard focus of the wrapped element.
 * Use for brief hints; pair with UaiThemeProvider; avoid essential information or interactive content.
 *
 * @slot - The element that triggers the tooltip.
 * @part tip - The floating tooltip container.
 */
@Component({
  tag: 'uai-tooltip',
  styleUrl: 'uai-tooltip.scss',
  shadow: true,
})
export class UaiTooltip {
  @Element() el!: HTMLElement;

  @State() isVisible = false;
  @State() textVerify: string;
  @State() maxWidthTooltip: string;

  private readonly tipId = `uai-tooltip-${++tooltipIds}`;

  /** Tooltip text; <br> breaks the line. Use short hints; pair with the wrapped element; avoid essential information. */
  @Prop({ mutable: true }) tooltipText = 'Tooltip';

  /** Prevents the tooltip from showing. Use when the wrapped element is unavailable; pair with explanatory text elsewhere. */
  @Prop({ reflect: true }) disabled? = false;

  /** Placement relative to the wrapped element. Use the side with free space; avoid covering related content. */
  @Prop() position: UaiTooltipPositionType = 'left-center';

  /** Maximum tooltip width as a CSS length. Defaults to the width/tooltip token; use for long text; avoid widths narrower than the content needs. */
  @Prop() maxWidth?: string = null;

  /** Test selector on the trigger wrapper. Use for automation; pair with semantic queries. Avoid styling by it. */
  @Prop() dataTest?: string = null;

  /** Shows the tooltip. Use for imperative control; pair with invisible. Avoid calling it while disabled. */
  @Method()
  async visible(): Promise<void> {
    this.isVisible = true;
  }

  /** Hides the tooltip. Use for imperative control; pair with visible. Avoid leaving it open after the task ends. */
  @Method()
  async invisible(): Promise<void> {
    this.isVisible = false;
  }

  @Watch('tooltipText')
  tooltipTextChanged(): void {
    this.textVerify = formatText(this.tooltipText);
  }

  @Watch('maxWidth')
  maxWidthChanged(): void {
    this.maxWidthTooltip = this.maxWidth;
  }

  @Watch('disabled')
  disabledChanged(): void {
    if (this.disabled) this.isVisible = false;
  }

  componentWillLoad(): void {
    this.textVerify = formatText(this.tooltipText);
    this.maxWidthTooltip = this.maxWidth;
  }

  private setVisibility(value: boolean): void {
    this.isVisible = this.disabled ? false : value;
  }

  private onKeyDown = (event: KeyboardEvent): void => {
    if (event.key === 'Escape' && this.isVisible) this.isVisible = false;
  };

  render(): HTMLElement {
    const position = POSITIONS.find((candidate) => candidate === this.position) || 'left-center';
    if (position !== this.position) warnLegacyValue('uai-tooltip', 'position', this.position, position);

    return (
      <Host>
        <div class="tooltip__wrapper">
          <div
            class="tooltip__trigger"
            onMouseEnter={() => this.setVisibility(true)}
            onMouseLeave={() => this.setVisibility(false)}
            onFocusin={() => this.setVisibility(true)}
            onFocusout={() => this.setVisibility(false)}
            onKeyDown={this.onKeyDown}
            data-test={this.dataTest}
            aria-describedby={this.tipId}
          >
            <slot />
          </div>
          <div
            id={this.tipId}
            part="tip"
            role="tooltip"
            class={{
              tooltip__tip: true,
              [`tooltip__tip--${position}`]: true,
              'tooltip__tip--visible': this.isVisible,
            }}
            style={{ maxWidth: this.maxWidthTooltip }}
          >
            <uai-typo class="tooltip__text" tag="span" variant="caption" margin={false}>
              {this.textVerify}
            </uai-typo>
          </div>
        </div>
      </Host>
    );
  }
}
