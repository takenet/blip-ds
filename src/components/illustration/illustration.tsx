import { Component, h, Host, Prop, State } from '@stencil/core';
import { IllustrationType } from './illustration-interface';
import illustrations from 'blip-tokens/build/json/assets_illustrations.json';

@Component({
  tag: 'bds-illustration',
  assetsDirs: ['svg'],
  styleUrl: 'illustration.scss',
  shadow: true,
})
export class BdsIllustration {
  @State() private IllustrationContent?: string;

  /**
   * Specifies the type to use. Can be: 'default'.
   */
  @Prop() type: IllustrationType = 'default';
  /**
   * Specifies the name of illustration. Verify the names on illustration tokens.
   */
  @Prop() name: string;

  /**
   * Data test is the prop to specifically test the component action object.
   */
  @Prop() dataTest?: string = null;

  componentWillLoad() {
    this.setIllustrationContent();
  }

  /**Function to get the name e complete with the path in tokens*/
  getIllustration = () => {
    const name = this.name;
    const type = this.type;
    if (type === 'default') {
      const fullName = `asset-illustration-${name}`;
      return fullName;
    } else if (type === 'screens') {
      const fullName = `asset-illustration-screens-${name}`;
      return fullName;
    } else if (type === 'blip-outline') {
      const fullName = `asset-illustration-blip-outline-${name}`;
      return fullName;
    } else if (type === 'blip-solid') {
      const fullName = `asset-illustration-blip-solid-${name}`;
      return fullName;
    } else if (type === 'logo-integration') {
      const fullName = `asset-illustration-logo-integration-${name}`;
      return fullName;
    } else if (type === 'brand') {
      const fullName = `asset-illustration-brand-${name}`;
      return fullName;
    } else if (type === 'segmented') {
      const fullName = `asset-illustration-segmented-${name}`;
      return fullName;
    } else if (type === 'smartphone') {
      const fullName = `asset-illustration-smartphone-${name}`;
      return fullName;
    } else if (type === 'spots') {
      const fullName = `asset-illustration-spots-${name}`;
      return fullName;
    }
  };

  /**Function to transform the svg in a div element. */
  formatSvg = (svgContent: string) => {
    const div = document.createElement('div');
    div.innerHTML = svgContent;
    const svgElm = div.firstElementChild;

    svgElm.removeAttribute('width');
    svgElm.removeAttribute('height');
    return div.innerHTML;
  };

  /**Function to map the svg and call the "formatSvg" function */
  setIllustrationContent = () => {
    let svg;
    const key = this.getIllustration();
    // eslint-disable-next-line prefer-const
    svg = atob(illustrations[key]);
    this.IllustrationContent = this.formatSvg(svg);
  };

  render(): HTMLElement {
    return (
      <Host
        role="img"
        class={{
          'bds-illustration': true,
        }}
      >
        {this.IllustrationContent ? (
          <div
            class={{
              illustration: true,
            }}
            innerHTML={this.IllustrationContent}
            data-test={this.dataTest}
          ></div>
        ) : (
          <div class="default" data-test={this.dataTest}></div>
        )}
      </Host>
    );
  }
}
