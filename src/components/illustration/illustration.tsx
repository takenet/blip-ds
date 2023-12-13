import { Component, h, Host, Prop, State } from '@stencil/core';
import { IllustrationType } from './illustration-interface';
import packageJson from '../../../package.json';

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
    } else if (type === 'empty-states') {
      const fullName = `asset-illustration-empty-states-${name}`;
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

  /**Function to map the svg and call the "formatSvg" function */
  setIllustrationContent = () => {
    const key = this.getIllustration();
    const tokensVersion = packageJson.dependencies['blip-tokens'].replace('^', '');
    const apiUrl = `https://cdn.jsdelivr.net/npm/blip-tokens@${tokensVersion}/build/json/assets_illustrations.json`;
    fetch(apiUrl).then((response) =>
      response.json().then((data) => {
        this.IllustrationContent = data[key];
      })
    );
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
          <img src={`data:image/svg+xml;base64,${this.IllustrationContent}`} />
        ) : (
          <div class="default" data-test={this.dataTest}></div>
        )}
      </Host>
    );
  }
}
