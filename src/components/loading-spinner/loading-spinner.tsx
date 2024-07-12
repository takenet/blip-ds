import { Component, h, Host, Prop, State } from '@stencil/core';
import loadExtraSmall from '../../assets/svg/load-extra-small.svg';
import loadSmall from '../../assets/svg/load-small.svg';
import loadStandard from '../../assets/svg/load-standard.svg';

export type LoadingSpinnerVariant = 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'delete';
export type loadingSize = 'extra-small' | 'small' | 'standard';
export type colorsVariants = 'main' | 'light' | 'content';

export type LoadingSpinnerColorMap = { [key in LoadingSpinnerVariant]: string };

@Component({
  tag: 'bds-loading-spinner',
  styleUrl: 'loading-spinner.scss',
  shadow: true,
})
export class BdsLoadingSpinner {
  @State() private svgContent?: string;
  /**
   * 	Sets the color of the spinner, can be 'primary', 'secondary' or 'ghost'
   */
  @Prop() variant: LoadingSpinnerVariant = 'primary';
  /**
   * Size, Entered as one of the size. Can be one of:
   * 'small', 'standard', 'large'.
   */
  @Prop() size?: loadingSize = 'standard';
  /**
   * Color, Entered as one of the color. Can be one of:
   * 'default', 'white'.
   */
  @Prop() color?: colorsVariants = 'main';

  /**
   * Data test is the prop to specifically test the component action object.
   */
  @Prop() dataTest?: string = null;

  componentWillLoad() {
    this.setSvgContent();
  }

  /**Function to transform the svg in a div element. */
  formatSvg = (svgContent: string) => {
    const div = document.createElement('div');
    div.innerHTML = svgContent;
    const svgElm = div.firstElementChild;

    svgElm.removeAttribute('width');
    svgElm.removeAttribute('height');
    return div.innerHTML;
  };

  setSvgContent = () => {
    const innerHTML =
      this.size == 'extra-small'
        ? loadExtraSmall
        : this.size == 'small'
          ? loadSmall
          : this.size == 'standard' && loadStandard;

    const svg = atob(innerHTML.replace('data:image/svg+xml;base64,', ''));
    this.svgContent = this.formatSvg(svg);
  };

  render() {
    return (
      <Host>
        <div
          class={{
            spinner_container: true,
            [`spinner_background_${this.size}`]: true,
          }}
          data-test={this.dataTest}
        >
          <div
            class={{
              spinner_background: true,
              [`spinner_background_${this.size}`]: true,
              [`spinner_background_${this.color}`]: true,
            }}
          ></div>
          <div
            class={{
              spinner_loading: true,
              [`spinner_loading_${this.size}`]: true,
              [`spinner_loading_${this.color}`]: true,
            }}
            innerHTML={this.svgContent}
          ></div>
        </div>
      </Host>
    );
  }
}
