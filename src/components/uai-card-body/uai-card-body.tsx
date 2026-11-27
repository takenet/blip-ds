import { Component, ComponentInterface, Host, h } from '@stencil/core';

/**
 * Body container for `UaiCard` when migrating from `bds-card-body`.
 * Use inside `uai-card` (or place content directly in `uai-card`'s default slot);
 * pair with `UaiCardHeader` and `UaiCardFooter`; avoid extra manual padding that duplicates the card body spacing.
 *
 * @slot - Main body elements of the card.
 */
@Component({
  tag: 'uai-card-body',
  styleUrl: 'uai-card-body.scss',
  shadow: true,
})
export class UaiCardBody implements ComponentInterface {
  render() {
    return (
      <Host>
        <uai-grid xxs="12" direction="column" gap="1">
          <slot />
        </uai-grid>
      </Host>
    );
  }
}
