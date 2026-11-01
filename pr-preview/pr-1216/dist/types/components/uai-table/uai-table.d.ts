/**
 * Container of a data table. Use it with UaiTableHeader, UaiTableBody, UaiTableRow, UaiTableTh and UaiTableCell;
 * pair with UaiThemeProvider and compose selection controls inside the cells; avoid using it for page layout.
 *
 * @slot - UaiTableHeader and UaiTableBody.
 */
export declare class UaiTable {
    el: HTMLElement;
    /** Column widths as a CSS grid-template-columns value, shared by every row. Use to align header and rows, such as "auto repeat(4, 1fr) auto"; avoid sizing cells one by one. */
    columns?: string;
    /** Accessible name of the table. Use a short description of the data; pair with a visible title; avoid repeating the column names. */
    label?: string;
    render(): HTMLElement;
}
