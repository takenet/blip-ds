import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'bds-table-body',
  styleUrl: 'table-body.scss',
  scoped: true,
})
export class TableBody {
  render(): HTMLElement {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
