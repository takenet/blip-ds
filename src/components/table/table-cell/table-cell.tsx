import { Component, h, Host, Prop, Element, State } from '@stencil/core';

export type IconType = 'text' | 'custom' | 'emoji' | 'collapse';

export type JustifyContent = 'left' | 'center' | 'right';

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
  @Prop() justifyContent: JustifyContent = 'left';

  renderContent(): HTMLElement {
    return this.type === 'custom' ? (
      <div class={{ cell:true, cell_custom:true, dense_cell:true, [`justify--${this.justifyContent}`]:true }}>
        <slot />
      </div>
    ) : this.type === 'text' ? (
      <div class={{ cell:true, dense_cell:true, [`justify--${this.justifyContent}`]:true }}>
        <bds-typo variant="fs-14" bold={this.sortable ? 'bold' : 'regular'}>
          <slot />
        </bds-typo>
      </div>
    ) : this.type === 'action' ? (
      <div class={{ cell:true, cell_action:true, dense_cell:true, [`justify--${this.justifyContent}`]:true }}>
        <slot />
      </div>
    ) : this.type === 'collapse' ? (
      <td colSpan={2} class={{ cell:true, cell_action:true, dense_cell:true, [`justify--${this.justifyContent}`]:true }}>
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
