import { Component, Host, Prop, State, Watch, h } from '@stencil/core';
import { loadAssetSvg } from '../../utils/asset-loader';
import { warnOnce } from '../../utils/deprecation';
import { getLogoName } from '../icon/utils';

/**
 * Brand logo from the versioned asset catalog in blip-tokens. Set the host width to control its size;
 * the SVG keeps the aspect ratio from its viewBox. Use aria-label for a meaningful logo, or omit it when decorative.
 *
 * @part asset - The element containing the logo SVG.
 */
@Component({
  tag: 'uai-logo',
  styleUrl: 'uai-logo.scss',
  shadow: true,
})
export class UaiLogo {
  private requestVersion = 0;

  @State() private svgContent?: string;

  /**
   * Logo name as listed in the blip-tokens asset catalog.
   */
  @Prop({ reflect: true }) name: string;

  /**
   * Accessible name for a meaningful logo. Without it, the logo is decorative.
   */
  @Prop({ attribute: 'aria-label', reflect: true }) ariaLabel: string = null;

  /**
   * Value forwarded to the logo SVG container's data-test attribute.
   */
  @Prop() dataTest?: string;

  connectedCallback(): void {
    this.loadLogo();
  }

  disconnectedCallback(): void {
    this.requestVersion++;
  }

  @Watch('name')
  private loadLogo(): void {
    const version = ++this.requestVersion;
    if (!this.name) {
      this.svgContent = undefined;
      return;
    }
    this.svgContent = undefined;

    Promise.resolve()
      .then(() => loadAssetSvg(getLogoName(this.name)))
      .then((svg) => {
        if (version === this.requestVersion) this.svgContent = svg;
      })
      .catch(() => {
        if (version !== this.requestVersion) return;
        this.svgContent = undefined;
        warnOnce('uai-logo', `load:${this.name}`, `Failed to load logo "${this.name}" from blip-tokens.`);
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
