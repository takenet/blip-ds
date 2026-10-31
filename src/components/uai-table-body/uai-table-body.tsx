import { Component, Host, h } from '@stencil/core';

/**
 * Table body group. Use it inside UaiTable; pair with UaiTableRow; avoid placing other content here.
 *
 * @slot - UaiTableRow elements.
 */
@Component({
  tag: 'uai-table-body',
  styleUrl: 'uai-table-body.scss',
  shadow: true,
})
export class UaiTableBody {
  render(): HTMLElement {
    return (
      <Host role="rowgroup">
        <slot />
      </Host>
    );
  }
}
