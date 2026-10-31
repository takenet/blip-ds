import { Component, Host, h } from '@stencil/core';

/**
 * Table header group. Use it inside UaiTable; pair with UaiTableRow; avoid placing other content here.
 *
 * @slot - UaiTableRow elements.
 */
@Component({
  tag: 'uai-table-header',
  styleUrl: 'uai-table-header.scss',
  shadow: true,
})
export class UaiTableHeader {
  render(): HTMLElement {
    return (
      <Host role="rowgroup">
        <slot />
      </Host>
    );
  }
}
