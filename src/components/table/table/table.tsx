import { Component, h, Host, Prop } from '@stencil/core';

/**
 * @deprecated Use uai-table with UaiThemeProvider for tokenized styling and table semantics.
 */
@Component({
  tag: 'bds-table',
  styleUrl: 'table.scss',
  scoped: true,
})
export class Table {
  /**
   * Specifies whether the table is scrollable or not.
   */
  @Prop({ mutable: true, reflect: true }) scrollable?: boolean;
  /**
   * Specifies whether the table is scrollable or not.
   */
  @Prop({ mutable: true, reflect: true }) collapse?: boolean;

  /**
   * Determines if the table has a higher content density, typically resulting in more compact rows and cells.
   */
  @Prop({ mutable: true, reflect: true }) denseTable?: boolean;

  render(): HTMLElement {
    return (
      <Host class={{ scrollable: this.scrollable, 'dense-table': this.denseTable }}>
        <div class="bds-table">
          <slot />
        </div>
      </Host>
    );
  }
}
