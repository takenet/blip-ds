import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'bds-table-row',
  styleUrl: 'table-row.scss',
  scoped: true,
})
export class TableRow {
  /**
   * Prop to make hover animation.
   */
  @Prop() clickable?: boolean = false;
  /**
   * Prop to highlight the row selected.
   */
  @Prop() selected?: boolean = false;

  render(): HTMLElement {
    return (
      <Host
        class={{
          host: true,
          [`clickable--${this.clickable}`]: true,
          [`selected--${this.selected}`]: true,
        }}
      >
        <slot />
      </Host>
    );
  }
}
