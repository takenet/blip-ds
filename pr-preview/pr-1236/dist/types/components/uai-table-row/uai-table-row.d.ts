export type UaiTableRowVariant = 'row' | 'bar';
/**
 * Table row laid out on the columns of UaiTable. Use it for header, data and bulk-action rows; pair with
 * UaiTableCell or UaiTableTh; avoid nesting rows.
 *
 * @slot - UaiTableCell or UaiTableTh elements, or free content in the bar variant.
 */
export declare class UaiTableRow {
    el: HTMLElement;
    /** Marks the row as selected and sets aria-selected, with no visual change of its own. Use when the row's selection control is checked; pair with that control; avoid using it as the only selection signal. */
    selected?: boolean;
    /** Makes the whole row interactive: hover style, keyboard focus and Enter or Space activation. Use for rows that open details; avoid it when the cells already hold controls. */
    clickable?: boolean;
    /** Row appearance. row is a data or header row; bar is a full-width strip for bulk actions. Use bar above the rows; avoid bar for data. */
    variant?: UaiTableRowVariant;
    /** Test selector on the row. Use for automation; pair with semantic queries. Avoid styling by it. */
    dataTest?: string;
    private onKeyDown;
    render(): HTMLElement;
}
