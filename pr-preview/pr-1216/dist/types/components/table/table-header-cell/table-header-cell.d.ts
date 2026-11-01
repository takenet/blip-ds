export type JustifyContent = 'left' | 'center' | 'right';
/**
 * @deprecated Use uai-table-th with UaiThemeProvider for tokenized styling and table semantics.
 */
export declare class TableHeaderCell {
    private element;
    isDense: boolean;
    sortable: boolean;
    arrow: string;
    justifyContent: JustifyContent;
    componentWillLoad(): void;
    render(): HTMLElement;
}
