import { Component, h, Host, Prop } from '@stencil/core';

export type IconType = 'text' | 'custom' | 'emoji';

@Component({
  tag: 'bds-table-cell',
  styleUrl: 'table-cell.scss',
  scoped: true,
})
export class TableCell {
  @Prop() type?: string = 'text';
  @Prop() sortable = false;

  renderContent(): HTMLElement {
    return this.type === 'custom' ? (
      <div class="cell cell-custom">
        <slot />
      </div>
    ) : this.type === 'text' ? (
      <div class="cell">
        <bds-typo variant="fs-14" bold={this.sortable ? 'bold' : 'regular'}>
          <slot />
        </bds-typo>
      </div>
    ) : this.type === 'action' ? (
      <div class="cell cell-action">
        <slot />
      </div>
    ) : (
      <slot />
    );
  }

  render(): HTMLElement {
    return <Host>{this.renderContent()}</Host>;
  }
}
