import { Component, Host, Prop, State, h } from '@stencil/core';
import loadExtraSmall from '../../assets/svg/load-extra-small.svg';
import loadSmall from '../../assets/svg/load-small.svg';
import loadStandard from '../../assets/svg/load-standard.svg';
import messageBallon from '../../assets/svg/message-ballon.svg';

export type loadingType = 'page' | 'spinner';
export type loadingSize = 'extra-small' | 'small' | 'standard';
export type colorsVariants = 'main' | 'light';

@Component({
  tag: 'bds-loading',
  styleUrl: 'loading.scss',
  shadow: true,
})
export class BdsLoading {
  @State() private svgContent?: string;
  /**
   * Type, Entered as one of the type. Can be one of:
   * 'page' | 'spinner'.
   */
  @Prop() type?: loadingType = 'spinner';
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
      this.type == 'page'
        ? messageBallon
        : this.size == 'extra-small'
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
        {[
          this.type == 'spinner' && (
            <div
              class={{
                spinner_loading: true,
                [`spinner_loading_${this.size}`]: true,
                [`spinner_loading_${this.color}`]: true,
              }}
              innerHTML={this.svgContent}
            ></div>
          ),
          this.type == 'page' && (
            <div class={{ page_loading: true, [`page_loading_${this.color}`]: true }} innerHTML={this.svgContent}></div>
          ),
        ]}
      </Host>
    );
  }
}
