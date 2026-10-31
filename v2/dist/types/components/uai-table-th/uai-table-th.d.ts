import { EventEmitter } from '../../stencil-public-runtime';
export type UaiTableSortDirection = 'none' | 'ascending' | 'descending';
export type UaiTableThJustify = 'left' | 'center' | 'right';
/**
 * Column header of UaiTableRow. Use it in the header row; pair with sortable and sortDirection for sortable
 * columns; avoid sortable on columns the consumer cannot sort.
 *
 * @slot - Column title.
 */
export declare class UaiTableTh {
    /** Turns the title into a button that asks for sorting. Use only when the consumer sorts on uaiTableSort; pair with sortDirection; avoid it without a handler. */
    sortable?: boolean;
    /** Current sort of the column, sets aria-sort. Use none, ascending or descending; pair with sortable; avoid setting it on several columns. */
    sortDirection?: UaiTableSortDirection;
    /** Horizontal alignment of the title. Use right for numbers and center for controls; avoid mixing alignments in one column. */
    justifyContent?: UaiTableThJustify;
    /** Accessible name of the sort button when the title is not enough. Use a short action; pair with sortable; avoid repeating the direction. */
    sortLabel?: string;
    /** Emitted when the sort button is activated. detail: the next direction, ascending or descending. The consumer updates sortDirection. */
    uaiTableSort: EventEmitter<UaiTableSortDirection>;
    private onSort;
    render(): HTMLElement;
}
