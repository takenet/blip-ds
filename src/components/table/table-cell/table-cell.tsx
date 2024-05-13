import { Component, h, Host, Prop, Element, State } from '@stencil/core';

export type IconType = 'text' | 'custom' | 'emoji' | 'collapse';

@Component({
  tag: 'bds-table-cell',
  styleUrl: 'table-cell.scss',
  scoped: true,
})
export class TableCell {
  @Element() private element: HTMLElement;
  @State() isDense = false;
  @Prop() type?: string = 'text';
  @Prop() sortable = false;

  renderContent(): HTMLElement {
    return this.type === 'custom' ? (
      <div class="cell cell-custom dense-cell">
        <slot />
      </div>
    ) : this.type === 'text' ? (
      <div class="cell dense-cell">
        <bds-typo variant="fs-14" bold={this.sortable ? 'bold' : 'regular'}>
          <slot />
        </bds-typo>
      </div>
    ) : this.type === 'action' ? (
      <div class="cell cell-action dense-cell">
        <slot />
      </div>
    ) : this.type === 'collapse' ? (
      <td colSpan={2} class="cell cell-action dense-cell">
        <slot />
      </td>
    ) : (
      <slot />
    );
  }

  componentWillLoad() {
    const bdsTable = this.element.closest('bds-table');
    if (bdsTable && bdsTable.getAttribute('dense-table') === 'true') {
      this.isDense = true;
    }
  }

  render(): HTMLElement {
    return <Host>{this.renderContent()}</Host>;
  }
}
