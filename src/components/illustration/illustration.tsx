import { Component, h, Host, Prop, State, Watch } from '@stencil/core';
import { IllustrationType } from './illustration-interface';
import { getAssetUrl } from '../../utils/asset-loader';

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

  @Watch('name')
  @Watch('type')
  setIllustrationContent(): void {
    try {
      this.IllustrationContent = this.name ? getAssetUrl(`illustration/${this.type}/${this.name}`) : undefined;
    } catch {
      this.IllustrationContent = undefined;
    }
  }

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
            src={this.IllustrationContent}
            onError={() => { this.IllustrationContent = undefined; }}
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
