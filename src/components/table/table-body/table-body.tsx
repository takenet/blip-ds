import { Component, h, Host, Element, State } from '@stencil/core';

@Component({
  tag: 'bds-table-body',
  styleUrl: 'table-body.scss',
  scoped: true,
})
export class TableBody {
  @Element() private element: HTMLElement;
  @State() multipleRows = false;

  componentWillLoad() {
    const bdsTable = this.element.closest('bds-table');
    if (bdsTable && (bdsTable.getAttribute('collapse') === 'true' || bdsTable.collapse === true)) {
      this.multipleRows = true;
    }
  }

  render(): HTMLElement {
    return (
      <Host class={{ host: true, multiple: this.multipleRows }}>
        <slot />
      </Host>
    );
  }
}
