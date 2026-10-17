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
   * Alternative text for the image.
   */
  @Prop() alt?: string;

  /**
   * Data test is the prop to specifically test the component action object.
   */
  @Prop() dataTest?: string = null;

  componentWillLoad() {
    this.setIllustrationContent();
  }

  /**Function to map the svg and call the "formatSvg" function */
  setIllustrationContent = () => {
    const tokensVersion = packageJson.dependencies['blip-tokens'].replace(/^[~^]/, '');
    const illustrationType = this.type === 'default' ? 'default' : this.type;
    const apiUrl = `https://cdn.blip.ai/blip-tokens/${tokensVersion}/illustrations/${encodeURIComponent(illustrationType)}/${encodeURIComponent(this.name)}.svg`;
    this.loadIllustration(apiUrl);
  };

  private async loadIllustration(apiUrl: string): Promise<void> {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error(`Failed to fetch illustration: ${response.status}`);
      const svg = await response.text();
      this.IllustrationContent = btoa(svg);
    } catch (_error) {
      // Keep the default placeholder when the CDN asset cannot be loaded.
    }
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
          <img
            draggable={false}
            src={`data:image/svg+xml;base64,${this.IllustrationContent}`}
            alt={this.alt}
            data-test={this.dataTest}
          />
        ) : (
          <div class="default" data-test={this.dataTest}></div>
        )}
      </Host>
    );
  }
}
