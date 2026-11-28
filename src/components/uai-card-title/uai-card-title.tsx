import { Component, ComponentInterface, Host, Prop, h } from '@stencil/core';

/**
 * Title element for `UaiCardHeader` when composing with subcomponents.
 * Use inside `uai-card-header` (or pass `heading` directly to `uai-card`);
 * pair with `UaiCardSubtitle`; avoid long sentences that wrap onto multiple lines.
 *
 * @slot - Optional title content when `text` is not provided.
 */
@Component({
  tag: 'uai-card-title',
  styleUrl: 'uai-card-title.scss',
  shadow: true,
})
export class UaiCardTitle implements ComponentInterface {
  /**
   * Text rendered as the card title.
   * Use a concise label; pair with `UaiCardHeader`; avoid duplicating the default slot content.
   */
  @Prop() text?: string = '';

  render() {
    return (
      <Host>
        <uai-typo class="card-title__text" variant="title" tag="h4" bold="medium" margin={false}>
          {this.text ? this.text : <slot />}
        </uai-typo>
      </Host>
    );
  }
}
