import { Component, h, Host, Prop, Element, State } from '@stencil/core';

@Component({
  tag: 'bds-table-th',
  styleUrl: 'table-header-cell.scss',
  scoped: true,
})
export class TableHeaderCell {
  @Element() private element: HTMLElement;
  @State() isDense = false;
  @Prop() sortable = false;
  @Prop() arrow = '';

  componentWillLoad() {
    const bdsTable = this.element.closest('bds-table');
    if (bdsTable && (bdsTable.getAttribute('dense-table') === 'true' || bdsTable.denseTable === true)) {
      this.isDense = true;
    }
  }
  render(): HTMLElement {
    return (
      <Host>
        <div
          class={{
            th_cell: true,
            [`th_cell--sortable-${this.sortable}`]: true,
            'dense-th': this.isDense,
          }}
        >
          <bds-typo bold={this.sortable ? 'bold' : 'semi-bold'} variant="fs-14">
            <slot />
          </bds-typo>
          {this.sortable ? (
            <bds-icon
              size="small"
              name={this.arrow === 'asc' ? 'arrow-down' : this.arrow === 'dsc' ? 'arrow-up' : ''}
            ></bds-icon>
          ) : (
            <div style={{ width: '20px' }}></div>
          )}
        </div>
      </Host>
    );
  }
}
