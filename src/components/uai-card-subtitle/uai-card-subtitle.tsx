import { Component, ComponentInterface, Host, Prop, h } from '@stencil/core';

/**
 * Subtitle element for `UaiCardHeader` when composing with subcomponents.
 * Use inside `uai-card-header` (or pass `description` directly to `uai-card`);
 * pair with `UaiCardTitle`; avoid using without a corresponding title.
 *
 * @slot - Optional subtitle content when `text` is not provided.
 */
@Component({
  tag: 'uai-card-subtitle',
  styleUrl: 'uai-card-subtitle.scss',
  shadow: true,
})
export class UaiCardSubtitle implements ComponentInterface {
  /**
   * Text rendered as the card subtitle.
   * Use for secondary context such as timestamps or scope; pair with `UaiCardTitle`; avoid duplicating the default slot.
   */
  @Prop() text?: string = '';

  render() {
    return (
      <Host>
        <uai-typo variant="body-base" tag="p" bold="regular" margin={false}>
          {this.text ? this.text : <slot />}
        </uai-typo>
      </Host>
    );
  }
}
