export declare class Table {
    /**
     * Specifies whether the table is scrollable or not.
     */
    scrollable?: boolean;
    /**
     * Specifies whether the table is scrollable or not.
     */
    collapse?: boolean;
    /**
     * Determines if the table has a higher content density, typically resulting in more compact rows and cells.
     */
    denseTable?: boolean;
    render(): HTMLElement;
}
