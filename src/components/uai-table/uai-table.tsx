import { Component, Element, Host, Prop, h } from '@stencil/core';

/**
 * Container of a data table. Use it with UaiTableHeader, UaiTableBody, UaiTableRow, UaiTableTh and UaiTableCell;
 * pair with UaiThemeProvider and compose selection controls inside the cells; avoid using it for page layout.
 *
 * @slot - UaiTableHeader and UaiTableBody.
 */
@Component({
  tag: 'uai-table',
  styleUrl: 'uai-table.scss',
  shadow: true,
})
export class UaiTable {
  @Element() el!: HTMLElement;

  /** Column widths as a CSS grid-template-columns value, shared by every row. Use to align header and rows, such as "auto repeat(4, 1fr) auto"; avoid sizing cells one by one. */
  @Prop() columns?: string = null;

  /** Accessible name of the table. Use a short description of the data; pair with a visible title; avoid repeating the column names. */
  @Prop() label?: string = null;

  render(): HTMLElement {
    return (
      <Host
        role="table"
        aria-label={this.label}
        style={this.columns ? { '--uai-table-columns': this.columns } : undefined}
      >
        <slot />
      </Host>
    );
  }
}
