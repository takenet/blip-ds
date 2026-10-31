export type IconType = 'text' | 'custom' | 'emoji' | 'collapse';
export type JustifyContent = 'left' | 'center' | 'right';
/**
 * @deprecated Use uai-table-cell with UaiThemeProvider for tokenized styling and table semantics.
 */
export declare class TableCell {
    private element;
    isDense: boolean;
    type?: string;
    sortable: boolean;
    justifyContent: JustifyContent;
    renderContent(): HTMLElement;
    componentWillLoad(): void;
    render(): HTMLElement;
}
