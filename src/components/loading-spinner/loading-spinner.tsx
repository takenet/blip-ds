import { Component, h, Prop } from '@stencil/core';

export type LoadingSpinnerVariant = 'primary' | 'secondary' | 'ghost';

export type LoadingSpinnerColorMap = { [key in LoadingSpinnerVariant]: string };

@Component({
  tag: 'bds-loading-spinner',
  styleUrl: 'loading-spinner.scss',
  shadow: true,
})
export class BdsLoadingSpinner {
  /**
   * 	Sets the color of the spinner, can be 'primary', 'secondary' or 'ghost'
   */
  @Prop() variant: LoadingSpinnerVariant = 'primary';

  render() {
    return (
      <div class="sk-circle">
        <div class={`sk-circle1 sk-child sk-child--${this.variant}`}></div>
        <div class={`sk-circle2 sk-child sk-child--${this.variant}`}></div>
        <div class={`sk-circle3 sk-child sk-child--${this.variant}`}></div>
        <div class={`sk-circle4 sk-child sk-child--${this.variant}`}></div>
        <div class={`sk-circle5 sk-child sk-child--${this.variant}`}></div>
        <div class={`sk-circle6 sk-child sk-child--${this.variant}`}></div>
        <div class={`sk-circle7 sk-child sk-child--${this.variant}`}></div>
        <div class={`sk-circle8 sk-child sk-child--${this.variant}`}></div>
        <div class={`sk-circle9 sk-child sk-child--${this.variant}`}></div>
        <div class={`sk-circle10 sk-child sk-child--${this.variant}`}></div>
        <div class={`sk-circle11 sk-child sk-child--${this.variant}`}></div>
        <div class={`sk-circle12 sk-child sk-child--${this.variant}`}></div>
      </div>
    );
  }
}
