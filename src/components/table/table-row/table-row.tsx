import { Component, h, Host, Prop, Element, State } from '@stencil/core';

@Component({
  tag: 'bds-table-row',
  styleUrl: 'table-row.scss',
  scoped: true,
})
export class TableRow {
  @Element() private element: HTMLElement;
  @State() isDense = false;
  @State() collapse: boolean;
  @State() isCollapsed = true;
  @State() colspanNumber: number = null;
  /**
   * Prop to make hover animation.
   */
  @Prop() clickable?: boolean = false;
  /**
   * Prop to highlight the row selected.
   */
  @Prop() selected?: boolean = false;
  @Prop() bodyCollapse?: string;
  @Prop() dataTarget?: string;

  toggleCollapse = (target) => {
    if (this.collapse) {
      const body = document.querySelector(`[body-collapse="${target}"]`);
      const header = document.querySelector(`[data-target="${target}"]`);
      body.classList.toggle('collapse');
      this.isCollapsed = !this.isCollapsed;
    }
  };

  componentWillLoad() {
    const bdsTable = this.element.closest('bds-table');
    const collapseRow = document.querySelector(`[body-collapse="${this.dataTarget}"]`);
    const colspan = document.querySelector(`bds-table-row`).children.length;
    this.colspanNumber = colspan;
    if (bdsTable && (bdsTable.getAttribute('dense-table') === 'true' || bdsTable.denseTable === true)) {
      this.isDense = true;
    }
    if (bdsTable && (bdsTable.getAttribute('collapse') === 'true' || bdsTable.collapse === true)) {
      this.collapse = true;
    }

    collapseRow.classList.add('collapse');
    collapseRow.classList.add('collapse-body');
  }

  componentWillUpdate() {
    const bdsTable = this.element.closest('bds-table');
    if (bdsTable && (bdsTable.getAttribute('dense-table') === 'true' || bdsTable.denseTable === true)) {
      this.isDense = true;
    }
  }

  render(): HTMLElement {
    if (this.bodyCollapse) {
      return (
        <th colSpan={this.colspanNumber}>
          <div class="collapse-body">
            <slot></slot>
          </div>
        </th>
      );
    } else {
      const isFirstRow = this.element.closest('bds-table-header') === this.element.parentElement;
      return (
        <Host
          class={{
            host: true,
            [`clickable--${this.clickable}`]: true,
            [`selected--${this.selected}`]: true,
            'dense-row': this.isDense,
          }}
          onClick={() => this.toggleCollapse(this.dataTarget)}
        >
          {this.collapse && (
            <bds-table-cell type="custom">
              {!isFirstRow && <bds-icon class={{ arrow: true, active: this.isCollapsed }} name="arrow-down"></bds-icon>}
            </bds-table-cell>
          )}
          <slot />
        </Host>
      );
    }
  }
}
