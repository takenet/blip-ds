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

  private readonly CHILD_COUNT = 12;

  render() {
    return (
      <div class="sk-circle">
        {[...Array(this.CHILD_COUNT).keys()].map((_, i) => (
          <div class={`sk-circle${i + 1} sk-child sk-child--${this.variant}`} key={i}></div>
        ))}
      </div>
    );
  }
}
