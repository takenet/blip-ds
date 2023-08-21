import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'bds-table-row',
  styleUrl: 'table-row.scss',
  scoped: true,
})
export class TableRow {
  render(): HTMLElement {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
