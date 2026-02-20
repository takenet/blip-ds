export type JustifyContent = 'left' | 'center' | 'right';
export declare class TableHeaderCell {
    private element;
    isDense: boolean;
    sortable: boolean;
    arrow: string;
    justifyContent: JustifyContent;
    componentWillLoad(): void;
    render(): HTMLElement;
}
