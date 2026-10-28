export declare class TableRow {
    private element;
    isDense: boolean;
    collapse: boolean;
    isCollapsed: boolean;
    colspanNumber: number;
    bdsTable: HTMLBdsTableElement;
    collapseRow: HTMLBdsTableRowElement;
    /**
     * Prop to make hover animation.
     */
    clickable?: boolean;
    /**
     * Prop to highlight the row selected.
     */
    selected?: boolean;
    bodyCollapse?: string;
    dataTarget?: string;
    toggleCollapse: (target: any) => void;
    componentWillLoad(): void;
    componentWillUpdate(): void;
    render(): HTMLElement;
}
