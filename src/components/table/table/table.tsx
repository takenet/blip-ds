import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'bds-table',
  styleUrl: 'table.scss',
  scoped: true,
})
export class Table {
  render(): HTMLElement {
    return (
      <Host>
        <div class="bds-table">
          <slot />
        </div>
      </Host>
    );
  }
}
