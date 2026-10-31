import { Component, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import { warnLegacyValue } from '../../utils/deprecation';

export type UaiTableSortDirection = 'none' | 'ascending' | 'descending';
export type UaiTableThJustify = 'left' | 'center' | 'right';

const DIRECTIONS: readonly UaiTableSortDirection[] = ['none', 'ascending', 'descending'];
const JUSTIFY: readonly UaiTableThJustify[] = ['left', 'center', 'right'];
const NEXT: Record<UaiTableSortDirection, UaiTableSortDirection> = {
  none: 'ascending',
  ascending: 'descending',
  descending: 'ascending',
};

/**
 * Column header of UaiTableRow. Use it in the header row; pair with sortable and sortDirection for sortable
 * columns; avoid sortable on columns the consumer cannot sort.
 *
 * @slot - Column title.
 */
@Component({
  tag: 'uai-table-th',
  styleUrl: 'uai-table-th.scss',
  shadow: true,
})
export class UaiTableTh {
  /** Turns the title into a button that asks for sorting. Use only when the consumer sorts on uaiTableSort; pair with sortDirection; avoid it without a handler. */
  @Prop({ reflect: true }) sortable?: boolean = false;

  /** Current sort of the column, sets aria-sort. Use none, ascending or descending; pair with sortable; avoid setting it on several columns. */
  @Prop({ reflect: true }) sortDirection?: UaiTableSortDirection = 'none';

  /** Horizontal alignment of the title. Use right for numbers and center for controls; avoid mixing alignments in one column. */
  @Prop({ reflect: true }) justifyContent?: UaiTableThJustify = 'left';

  /** Accessible name of the sort button when the title is not enough. Use a short action; pair with sortable; avoid repeating the direction. */
  @Prop() sortLabel?: string = null;

  /** Emitted when the sort button is activated. detail: the next direction, ascending or descending. The consumer updates sortDirection. */
  @Event() uaiTableSort!: EventEmitter<UaiTableSortDirection>;

  private onSort = (): void => {
    const current = DIRECTIONS.find((candidate) => candidate === this.sortDirection) || 'none';
    this.uaiTableSort.emit(NEXT[current]);
  };

  render(): HTMLElement {
    const direction = DIRECTIONS.find((candidate) => candidate === this.sortDirection) || 'none';
    if (direction !== this.sortDirection) warnLegacyValue('uai-table-th', 'sortDirection', this.sortDirection, direction);
    const justify = JUSTIFY.find((candidate) => candidate === this.justifyContent) || 'left';
    if (justify !== this.justifyContent) warnLegacyValue('uai-table-th', 'justifyContent', this.justifyContent, justify);

    const title = (
      <uai-typo tag="span" variant="body-lg" bold="semibold" margin={false}>
        <slot />
      </uai-typo>
    );

    return (
      <Host role="columnheader" aria-sort={this.sortable ? direction : undefined}>
        {this.sortable ? (
          <button type="button" class="th__button" aria-label={this.sortLabel} onClick={this.onSort}>
            {title}
            <uai-icon
              class={{
                th__icon: true,
                'th__icon--active': direction !== 'none',
                'th__icon--descending': direction === 'descending',
              }}
              name="arrow-down"
              size="small"
              color={direction === 'none' ? 'content-secondary' : 'content-primary'}
            />
          </button>
        ) : (
          title
        )}
      </Host>
    );
  }
}
