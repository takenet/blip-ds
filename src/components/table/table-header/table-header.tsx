import { Component, h, Host } from '@stencil/core';

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
