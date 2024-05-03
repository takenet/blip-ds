import { Component, h, Host, Prop, Element, State } from '@stencil/core';

@Component({
  tag: 'bds-table-row',
  styleUrl: 'table-row.scss',
  scoped: true,
})
export class TableRow {
  @Element() private element: HTMLElement;
  @State() isDense = false;
  @State() isCollapsed = true;
  /**
   * Prop to make hover animation.
   */
  @Prop() clickable?: boolean = false;
  /**
   * Prop to highlight the row selected.
   */
  @Prop() selected?: boolean = false;

  @Prop() collapse?: boolean = false;
  @Prop() bodyCollapse?: boolean = false;

  toggleCollapse = () => {
    this.isCollapsed = !this.isCollapsed;
  };

  componentWillLoad() {
    const bdsTable = this.element.closest('bds-table');
    if (bdsTable && (bdsTable.getAttribute('dense-table') === 'true' || bdsTable.denseTable === true)) {
      this.isDense = true;
    }
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
        <th colSpan={4}>
          <slot></slot>
        </th>
      );
    } else {
      return (
        <Host
          class={{
            host: true,
            [`clickable--${this.clickable}`]: true,
            [`selected--${this.selected}`]: true,
            'dense-row': this.isDense,
            collapsed: this.isCollapsed && this.collapse,
          }}
        >
          <slot />
        </Host>
      );
    }
  }
}
