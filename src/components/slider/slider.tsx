import { Component, Host, h, State, Prop, EventEmitter, Event } from '@stencil/core';
import { typeRange, StepOption } from './slider-interface';

const MAX_MARKERS = 100;

@Component({
  tag: 'bds-slider',
  styleUrl: 'slider.scss',
  shadow: true,
})
export class Slider {
  private inputSlide?: HTMLInputElement;
  private bdsTooltip?: HTMLBdsTooltipElement;
  private progressBar?: HTMLElement;

  @State() stepArray?: StepOption[];
  @State() internalOptions?: StepOption[];
  @State() inputValue?: string = this.value?.toString() ?? (this.min ? this.min.toString() : '0');
  @State() tooltipPosition: 'top-center' | 'top-left' | 'top-right' = 'top-center';

  /**
   * Step, property to insert steps into the input range.
   */
  @Prop() step?: number;

  /**
   * Min, property to set the minimum value of the range.
   */
  @Prop() min?: number;

  /**
   * Max, property to set the maximum value of the range.
   */
  @Prop() max?: number;

  /**
   * Value, prop to define value of input.
   */
  @Prop() value?: number = this.min ? this.min : 0;

  /**
   * Markers, Prop to enable markers.
   */
  @Prop() markers?: boolean = false;

  /**
   * Label, Prop to enable Label.
   */
  @Prop() label?: boolean = false;
  /**
   * Type, prop to select type of slider.
   */
  @Prop() type?: typeRange = 'fill';

  /**
   * Data Markers, prop to select ype of markers.
   */
  @Prop() dataMarkers?: string | StepOption[];

  /**
   * Marker values to render for numeric ranges.
   */
  @Prop() markerValues?: string | number[];

  /**
   * Data test is the prop to specifically test the component action object.
   */
  @Prop() dataTest?: string = null;

  /**
   * bdsChange. Event to return selected date value.
   */
  @Event() bdsChange?: EventEmitter;

  componentWillLoad() {
    if (this.dataMarkers) {
      if (typeof this.dataMarkers === 'string') {
        this.internalOptions = JSON.parse(this.dataMarkers);
        this.stepArray = this.internalOptions;
      } else {
        this.internalOptions = this.dataMarkers;
        this.stepArray = this.internalOptions;
      }
      const initialIndex = this.value ?? 0;
      const initialItem = this.stepArray[initialIndex];
      if (initialItem) {
        this.inputValue = this.getTooltipText(initialItem);
      }
      const percent = this.stepArray.length > 1 ? (initialIndex / (this.stepArray.length - 1)) * 100 : 50;
      this.tooltipPosition = this.computeTooltipPosition(percent);
    } else {
      if (this.markerValues) {
        const markerValues: number[] =
          typeof this.markerValues === 'string' ? JSON.parse(this.markerValues) : this.markerValues;
        const min = this.min ?? 0;
        const max = this.max ?? 100;
        this.stepArray = Array.from(
          new Set(markerValues.filter((value) => Number.isFinite(value) && value >= min && value <= max)),
        )
          .sort((first, second) => first - second)
          .map((value) => ({ value: (value - min) / (this.step ?? 1), name: value }));
      } else {
        const min = this.min ?? 0;
        const max = this.max ?? 100;
        const step = this.step ?? 1;
        const numberOfSteps = (max - min) / step;
        this.stepArray = this.arrayToSteps(numberOfSteps, Number.isInteger(numberOfSteps)) as StepOption[];
      }
      const min = this.min ?? 0;
      const max = this.max ?? 100;
      const value = this.value ?? min;
      const percent = max !== min ? ((value - min) * 100) / (max - min) : 50;
      this.tooltipPosition = this.computeTooltipPosition(percent);
    }
  }

  componentDidLoad() {
    this.progressBar.style.width = `${this.valuePercent(this.inputSlide)}%`;
  }
  componentDidRender() {
    if (this.internalOptions) {
      this.inputSlide.min = '0';
      this.inputSlide.max = `${this.internalOptions.length - 1}`;
      this.inputSlide.step = '1';
    } else {
      this.inputSlide.min = this.min ? `${this.min}` : '';
      this.inputSlide.max = this.max ? `${this.max}` : '';
      this.inputSlide.step = this.step ? `${this.step}` : '';
    }
  }

  componentDidUpdate() {
    this.progressBar.style.width = `${this.valuePercent(this.inputSlide)}%`;
    const valueName = this.emiterChange(parseInt(this.inputSlide.value));
    this.inputValue = this.stepArray.length > 0 ? this.getTooltipText(valueName) : this.inputSlide.value;
    this.tooltipPosition = this.computeTooltipPosition(this.valuePercent(this.inputSlide));
  }

  private refInputSlide = (el: HTMLInputElement): void => {
    this.inputSlide = el;
  };

  private refBdsTooltip = (el: HTMLBdsTooltipElement): void => {
    this.bdsTooltip = el;
  };

  private refProgressBar = (el: HTMLElement): void => {
    this.progressBar = el;
  };

  private valuePercent = (element: HTMLInputElement | null): number => {
    const input = element;
    const min = input.min ? parseInt(input.min) : 0;
    const max = parseInt(input.max);
    const val = parseInt(input.value);
    const percentage = ((val - min) * 100) / (max - min);
    return percentage;
  };

  private computeTooltipPosition = (percent: number): 'top-center' | 'top-left' | 'top-right' => {
    if (percent <= 0) return 'top-left';
    if (percent >= 100) return 'top-right';
    return 'top-center';
  };

  private getTooltipText = (item: StepOption): string => {
    return item.tooltip !== undefined ? item.tooltip : item.name.toString();
  };

  private onInputSlide = (ev: Event): void => {
    const input = ev.target as HTMLInputElement | null;
    this.progressBar.style.width = `${this.valuePercent(input)}%`;
    const valueName = this.emiterChange(parseInt(input.value));
    this.inputValue = this.stepArray.length > 0 ? this.getTooltipText(valueName) : input.value;
    this.tooltipPosition = this.computeTooltipPosition(this.valuePercent(input));
    this.bdsChange.emit(valueName);
  };

  private onInputMouseEnter = (): void => {
    this.bdsTooltip.visible();
    this.progressBar.classList.add(`progress-bar-hover`);
  };

  private onInputMouseLeave = (): void => {
    this.bdsTooltip.invisible();
    this.progressBar.classList.remove(`progress-bar-hover`);
  };

  private emiterChange = (value: number): StepOption => {
    if (this.internalOptions) {
      return this.stepArray[value];
    } else {
      const min = this.min ?? 0;
      const step = this.step ?? 1;
      return { value: (value - min) / step, name: value };
    }
  };

  private arrayToSteps(value: number, int: boolean): StepOption[] {
    const numberToCalc = int ? value + 1 : value;
    const stepCount = Math.ceil(numberToCalc);
    const markerInterval = Math.max(1, Math.ceil((stepCount - 1) / (MAX_MARKERS - 1)));
    const valueSteps: number[] = [];
    for (let i = 0; i < stepCount; i += markerInterval) {
      valueSteps.push(i);
    }
    if (stepCount > 0 && valueSteps[valueSteps.length - 1] !== stepCount - 1) {
      valueSteps.push(stepCount - 1);
    }
    return valueSteps.map((term) => ({ value: term, name: term * (this.step ?? 1) + (this.min ?? 0) }));
  }

  private markerPosition = (item: StepOption): number => {
    const min = this.min ?? 0;
    const max = this.max ?? 100;
    return max !== min ? ((Number(item.name) - min) * 100) / (max - min) : 50;
  };

  render() {
    return (
      <Host>
        <input
          ref={this.refInputSlide}
          type="range"
          class={{
            input_slide: true,
          }}
          value={this.value as number}
          onInput={this.onInputSlide}
          onMouseEnter={this.onInputMouseEnter}
          onMouseLeave={this.onInputMouseLeave}
          data-test={this.dataTest}
        />
        <div class="track-bg">
          {this.markers &&
            this.stepArray.map((item, index) => (
              <div
                key={index}
                class={{
                  step: true,
                  'step--first': index === 0,
                  'step--last': index === this.stepArray.length - 1,
                  'step--custom': Boolean(this.markerValues),
                }}
                style={this.markerValues ? { left: `${this.markerPosition(item)}%` } : undefined}
              >
                {this.label && <bds-typo class="label-step" variant="fs-10">{`${item.name}`}</bds-typo>}
              </div>
            ))}
          <div
            class={{ [`progress-bar`]: true, [`progress-bar-liner`]: this.type !== 'no-linear' }}
            ref={this.refProgressBar}
          >
            <bds-tooltip
              ref={this.refBdsTooltip}
              class={{ [`progress-bar-tooltip`]: true }}
              position={this.tooltipPosition}
              tooltip-text={this.inputValue}
            >
              <div class={{ [`progress-bar-thumb`]: true }}></div>
            </bds-tooltip>
          </div>
        </div>
      </Host>
    );
  }
}
