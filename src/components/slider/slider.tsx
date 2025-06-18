import { Component, Host, h, State, Prop, EventEmitter, Event } from '@stencil/core';
import { typeRange, StepOption } from './slider-interface';

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
    } else {
      this.stepArray = this.arrayToSteps(
        (this.max - this.min) / this.step,
        Number.isInteger((this.max - this.min) / this.step),
      ) as StepOption[];
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
    this.inputValue = this.stepArray.length > 0 ? valueName.name : this.inputSlide.value;
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

  private onInputSlide = (ev: Event): void => {
    const input = ev.target as HTMLInputElement | null;
    this.progressBar.style.width = `${this.valuePercent(input)}%`;
    const valueName = this.emiterChange(parseInt(input.value));
    this.inputValue = this.stepArray.length > 0 ? valueName.name : input.value;
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
      return this.stepArray.find((item) => parseInt(item.name) === value);
    }
  };

  private arrayToSteps(value: number, int: boolean): unknown {
    const numberToCalc = int ? value + 1 : value;
    const valueSteps = [];
    for (let i = 0; i < numberToCalc; i++) {
      valueSteps.push(i);
    }
    return valueSteps.map((term) => ({ value: term, name: term * this.step + this.min }));
  }

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
          <div
            class={{ [`progress-bar`]: true, [`progress-bar-liner`]: this.type !== 'no-linear' }}
            ref={this.refProgressBar}
          >
            <bds-tooltip
              ref={this.refBdsTooltip}
              class={{ [`progress-bar-tooltip`]: true }}
              position="top-center"
              tooltip-text={this.inputValue}
            >
              <div class={{ [`progress-bar-thumb`]: true }}></div>
            </bds-tooltip>
          </div>
          {this.markers &&
            this.stepArray.map((item, index) => (
              <div key={index} class={`step`}>
                {this.label && <bds-typo class="label-step" variant="fs-10">{`${item.name}`}</bds-typo>}
              </div>
            ))}
        </div>
      </Host>
    );
  }
}
