import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'bds-table-th',
  styleUrl: 'table-header-cell.scss',
  scoped: true,
})
export class TableHeaderCell {
  @Prop() sortable = false;
  @Prop() arrow = '';
  render(): HTMLElement {
    return (
      <Host>
        <div
          class={{
            th_cell: true,
            [`th_cell--sortable-${this.sortable}`]: true,
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
