import { Component, Element, Host, Prop, State, Watch, h } from '@stencil/core';

let progressBarIds = 0;

const clampPercent = (value: unknown): number => {
  if (value === null || value === undefined || value === '') return 0;
  const numeric = typeof value === 'number' ? value : Number(value);
  if (Number.isNaN(numeric)) return 0;
  if (numeric <= 0) return 0;
  if (numeric >= 100) return 100;
  return numeric;
};

/**
 * Horizontal progress indicator with safe bounds and accessible `progressbar` semantics.
 * Single visual defined by the UAI Figma: `sizing/2xs` track on `surface/background` with an `accent/ai-start` fill.
 * Use to communicate completion percentages or quota usage; pair with `text` or `aria-label` so screen readers announce what is progressing;
 * avoid using it to communicate critical status without accompanying text.
 *
 * @part track - The background track of the progress bar.
 * @part fill - The filled portion representing current progress.
 */
@Component({
  tag: 'uai-progress-bar',
  styleUrl: 'uai-progress-bar.scss',
  shadow: true,
})
export class UaiProgressBar {
  @Element() el!: HTMLElement;

  @State() isRegression = false;

  private readonly textId = `uai-progress-bar-text-${++progressBarIds}`;

  /**
   * Completion percentage clamped safely between 0 and 100 (`NaN` is treated as 0).
   */
  @Prop() percent?: number = 0;

  /**
   * Optional descriptive label rendered alongside the progress bar.
   */
  @Prop() text?: string = '';

  /**
   * Accessible name forwarded to the `progressbar` element when no visible `text` is used.
   */
  @Prop({ attribute: 'aria-label' }) ariaLabel: string | null = null;

  /**
   * ID reference forwarded to the `progressbar` element when labelled externally.
   */
  @Prop({ attribute: 'aria-labelledby' }) ariaLabelledby?: string = null;

  /**
   * Selector attribute applied to the `progressbar` element for automated tests.
   */
  @Prop() dataTest?: string = null;

  @Watch('percent')
  protected handlePercentChange(newValue: number, oldValue: number): void {
    const next = clampPercent(newValue);
    const previous = clampPercent(oldValue);
    this.isRegression = next < previous;
  }

  render(): HTMLElement {
    const clamped = clampPercent(this.percent);
    const hasText = Boolean(this.text && this.text.trim().length > 0);
    const ariaLabel = (this.ariaLabel || this.el.getAttribute('aria-label') || '').trim();
    const ariaLabelledby = (this.ariaLabelledby || this.el.getAttribute('aria-labelledby') || '').trim();
    const resolvedLabelledby = ariaLabelledby || (!ariaLabel && hasText ? this.textId : '');

    return (
      <Host>
        <div
          class="progress"
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow={String(clamped)}
          aria-label={ariaLabel || undefined}
          aria-labelledby={resolvedLabelledby || undefined}
          data-test={this.dataTest}
        >
          <div class="progress__track" part="track">
            <div
              class={{
                progress__fill: true,
                'progress__fill--instant': this.isRegression,
              }}
              part="fill"
              style={{ width: `${clamped}%` }}
            ></div>
          </div>
          {hasText && (
            <p id={this.textId} class="progress__text">
              {this.text}
            </p>
          )}
        </div>
      </Host>
    );
  }
}
