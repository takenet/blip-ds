import { Component, Host, Prop, State, Watch, h } from '@stencil/core';
import { loadAssetSvg } from '../../utils/asset-loader';
import { warnOnce } from '../../utils/deprecation';
import { getEmojiName } from '../icon/utils';

/**
 * Emoji from the versioned asset catalog in blip-tokens. Set the host width to control its size;
 * the SVG keeps the aspect ratio from its viewBox. Use aria-label for a meaningful emoji, or omit it when decorative.
 *
 * @part asset - The element containing the emoji SVG.
 */
@Component({
  tag: 'uai-emoji',
  styleUrl: 'uai-emoji.scss',
  shadow: true,
})
export class UaiEmoji {
  private requestVersion = 0;

  @State() private svgContent?: string;

  /**
   * Emoji name as listed in the blip-tokens asset catalog.
   */
  @Prop({ reflect: true }) name: string;

  /**
   * Accessible name for a meaningful emoji. Without it, the emoji is decorative.
   */
  @Prop({ attribute: 'aria-label', reflect: true }) ariaLabel: string = null;

  /**
   * Value forwarded to the emoji SVG container's data-test attribute.
   */
  @Prop() dataTest?: string;

  componentDidLoad(): void {
    this.loadEmoji();
  }

  disconnectedCallback(): void {
    this.requestVersion++;
  }

  @Watch('name')
  private loadEmoji(): void {
    const version = ++this.requestVersion;
    if (!this.name) {
      this.svgContent = undefined;
      return;
    }
    this.svgContent = undefined;

    Promise.resolve()
      .then(() => loadAssetSvg(getEmojiName(this.name)))
      .then((svg) => {
        if (version === this.requestVersion) this.svgContent = svg;
      })
      .catch(() => {
        if (version !== this.requestVersion) return;
        this.svgContent = undefined;
        warnOnce('uai-emoji', `load:${this.name}`, `Failed to load emoji "${this.name}" from blip-tokens.`);
      });
  }

  render(): HTMLElement {
    return (
      <Host
        role={this.ariaLabel ? 'img' : undefined}
        aria-label={this.ariaLabel}
        aria-hidden={this.ariaLabel ? undefined : 'true'}
      >
        <div class="asset" part="asset" innerHTML={this.svgContent} data-test={this.dataTest}></div>
      </Host>
    );
  }
}
