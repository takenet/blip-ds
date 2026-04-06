interface TooltipEntry {
    color: string;
    name: string;
    value: string | number;
}
export declare class ChartTooltip {
    el: HTMLElement;
    labelKey?: string;
    nameKey?: string;
    indicator: 'dot' | 'line' | 'dashed';
    hideLabel: boolean;
    hideIndicator: boolean;
    visible: boolean;
    x: number;
    y: number;
    label: string;
    content: string;
    entries: TooltipEntry[];
    private portalElement;
    private portalWrapper;
    componentDidLoad(): void;
    componentDidUpdate(): void;
    disconnectedCallback(): void;
    private initializePortal;
    private updatePortalContent;
    setTooltipState(state: {
        visible?: boolean;
        x?: number;
        y?: number;
        label?: string;
        content?: string;
        entries?: TooltipEntry[];
    }): Promise<void>;
    render(): any;
}
export {};
