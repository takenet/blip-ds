import { Component, Element, Host, Prop, h } from '@stencil/core';
import { warnLegacyValue } from '../../utils/deprecation';

export type UaiTableRowVariant = 'row' | 'bar';

const VARIANTS: readonly UaiTableRowVariant[] = ['row', 'bar'];

/**
 * Table row laid out on the columns of UaiTable. Use it for header, data and bulk-action rows; pair with
 * UaiTableCell or UaiTableTh; avoid nesting rows.
 *
 * @slot - UaiTableCell or UaiTableTh elements, or free content in the bar variant.
 */
@Component({
  tag: 'uai-table-row',
  styleUrl: 'uai-table-row.scss',
  shadow: true,
})
export class UaiTableRow {
  @Element() el!: HTMLElement;

  /** Marks the row as selected and sets aria-selected, with no visual change of its own. Use when the row's selection control is checked; pair with that control; avoid using it as the only selection signal. */
  @Prop({ reflect: true }) selected?: boolean = false;

  /** Makes the whole row interactive: hover style, keyboard focus and Enter or Space activation. Use for rows that open details; avoid it when the cells already hold controls. */
  @Prop({ reflect: true }) clickable?: boolean = false;

  /** Row appearance. row is a data or header row; bar is a full-width strip for bulk actions. Use bar above the rows; avoid bar for data. */
  @Prop({ reflect: true }) variant?: UaiTableRowVariant = 'row';

  /** Test selector on the row. Use for automation; pair with semantic queries. Avoid styling by it. */
  @Prop() dataTest?: string = null;

  private onKeyDown = (event: KeyboardEvent): void => {
    if (!this.clickable || event.target !== this.el) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.el.click();
    }
  };

  render(): HTMLElement {
    const variant = VARIANTS.find((candidate) => candidate === this.variant) || 'row';
    if (variant !== this.variant) warnLegacyValue('uai-table-row', 'variant', this.variant, variant);

    return (
      <Host
        role="row"
        aria-selected={this.selected ? 'true' : undefined}
        tabindex={this.clickable ? 0 : undefined}
        data-test={this.dataTest}
        onKeyDown={this.onKeyDown}
      >
        <slot />
      </Host>
    );
  }
}
