import { Component, h, Host } from '@stencil/core';

/**
 * @deprecated Use uai-table-header with UaiThemeProvider for tokenized styling and table semantics.
 */
@Component({
  tag: 'bds-table-header',
  styleUrl: 'table-header.scss',
  scoped: true,
})
export class TableHeader {
  render(): HTMLElement {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
