import { Component, h, Prop } from '@stencil/core';

export type LoadingSpinnerColor = 'dark' | 'light';

export type LoadingSpinnerColorMap = { [key in LoadingSpinnerColor]: string };

@Component({
  tag: 'bds-loading-spinner',
  styleUrl: 'loading-spinner.scss',
  shadow: true,
})
export class BdsLoadingSpinner {
  /**
   * 	Sets the color of the spinner, can be 'light' or 'dark'
   */
  @Prop() color: LoadingSpinnerColor = 'light';

  private readonly CHILD_COUNT = 12;

  render() {
    return (
      <div class="sk-circle">
        {[...Array(this.CHILD_COUNT).keys()].map((_, i) => (
          <div class={`sk-circle${i + 1} sk-child sk-child--${this.color}`} key={i}></div>
        ))}
      </div>
    );
  }
}
