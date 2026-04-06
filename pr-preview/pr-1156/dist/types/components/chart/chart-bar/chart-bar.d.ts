import { ChartDatum } from '../utils/chart.types';
export declare class ChartBar {
    private host;
    data: ChartDatum[] | string;
    color: string;
    barRadius: number;
    vertical: boolean;
    align: 'left' | 'center' | 'right';
    private actualWidth;
    private actualHeight;
    private hoveredIndex;
    private activeLegendItem;
    private resizeObserver;
    componentDidLoad(): void;
    componentDidRender(): void;
    disconnectedCallback(): void;
    private calculateActualDimensions;
    private readAxisConfig;
    private computeMargin;
    private handleLegendClick;
    private prepareBars;
    private emitLeave;
    private handleCanvasMouseMove;
    render(): any;
}
