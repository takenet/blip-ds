import { Component, Host, h, State, Prop, EventEmitter, Event } from '@stencil/core';
import { typeRange, typeMarkers, typeProgress, StepOption } from './slider-interface';

@Component({
  tag: 'bds-slider',
  styleUrl: 'slider.scss',
  shadow: true,
})
export class Slider {
  private inputSlide?: HTMLInputElement;
  private inputSlideStart?: HTMLInputElement;
  private inputSlideEnd?: HTMLInputElement;
  private progressBar?: HTMLElement;

  @State() stepArray?: StepOption[];

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
   * Type, prop to select type.
   */
  @Prop() type?: typeRange = 'default';

  /**
   * Value, prop to define value of input.
   */
  @Prop() value?: number | number[] = this.type === 'range' ? undefined : this.min ? this.min : 0;

  /**
   * Markers, prop to select ype of markers.
   */
  @Prop() markers?: typeMarkers = 'default';

  /**
   * Progress, prop to select ype of Progress.
   */
  @Prop() progress?: typeProgress = 'default';

  /**
   * Data Markers, prop to select ype of markers.
   */
  @Prop() dataMarkers?: StepOption[];

  /**
   * bdsChange. Event to return selected date value.
   */
  @Event() bdsChange?: EventEmitter;

  componentWillLoad() {
    this.stepArray = this.dataMarkers
      ? this.dataMarkers
      : (this.arraytoSteps(
          (this.max - this.min) / this.step,
          Number.isInteger((this.max - this.min) / this.step)
        ) as StepOption[]);
  }

  componentDidLoad() {
    this.valueRange(this.inputSlide);
  }
  componentDidRender() {
    if (this.dataMarkers) {
      this.inputSlide.min = '0';
      this.inputSlide.max = `${this.dataMarkers.length - 1}`;
      this.inputSlide.step = '1';
    } else {
      this.inputSlide.min = this.min ? `${this.min}` : '';
      this.inputSlide.max = this.max ? `${this.max}` : '';
      this.inputSlide.step = this.step ? `${this.step}` : '';
    }
  }

  private refInputSlide = (el: HTMLInputElement): void => {
    this.inputSlide = el;
  };

  private refInputSlideStart = (el: HTMLInputElement): void => {
    this.inputSlideStart = el;
  };

  private refInputSlideEnd = (el: HTMLInputElement): void => {
    this.inputSlideEnd = el;
  };
  private refProgressBar = (el: HTMLInputElement): void => {
    this.progressBar = el;
  };

  private valueRange = (element: HTMLInputElement | null): void => {
    const input = element;
    const min = input.min ? parseInt(input.min) : 0;
    const max = parseInt(input.max);
    const val = parseInt(input.value);
    const percentage = ((val - min) * 100) / (max - min);
    this.progressBar.style.width = `${percentage}%`;
  };

  private onInputSlide = (ev: Event): void => {
    const input = ev.target as HTMLInputElement | null;
    this.valueRange(input);
    this.bdsChange.emit(this.emiterChange(parseInt(input.value)));
  };

  private onInputSlideStart = (ev: Event): void => {
    const input = ev.target as HTMLInputElement | null;
  };

  private onInputSlideEnd = (ev: Event): void => {
    const input = ev.target as HTMLInputElement | null;
  };

  private emiterChange = (value: number): StepOption => {
    if (this.dataMarkers) {
      return this.stepArray[value];
    } else {
      return this.stepArray.find((item) => parseInt(item.name) === value);
    }
  };

  private arraytoSteps(value: number, int: boolean): unknown {
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
        <div class="track-bg">
          {this.progress !== 'no-linear' && <div class="progress-bar" ref={this.refProgressBar}></div>}
          {this.markers !== 'default' &&
            this.stepArray.map((item, index) => (
              <div key={index} class={`step`}>
                {this.markers !== 'without-subtitle' && (
                  <bds-typo class="label-step" variant="fs-10">{`${item.name}`}</bds-typo>
                )}
              </div>
            ))}
        </div>
        {this.type === 'range' ? (
          <div class="group_slide">
            <input
              ref={this.refInputSlideStart}
              type="range"
              class={{
                input_slide: true,
              }}
              onInput={this.onInputSlideStart}
            />
            <input
              ref={this.refInputSlideEnd}
              type="range"
              class={{
                input_slide: true,
              }}
              onInput={this.onInputSlideEnd}
            />
          </div>
        ) : (
          <input
            ref={this.refInputSlide}
            type="range"
            class={{
              input_slide: true,
            }}
            value={this.value as number}
            onInput={this.onInputSlide}
          />
        )}
      </Host>
    );
  }
}
