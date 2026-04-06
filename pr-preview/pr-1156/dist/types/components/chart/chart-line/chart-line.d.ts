import { ChartDatum } from '../utils/chart.types';
export declare class ChartLine {
    private host;
    data: ChartDatum[] | string;
    color: string;
    strokeWidth: number;
    curve: 'linear' | 'monotone';
    circleRadius: number;
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
    private prepareLine;
    private emitLeave;
    private handleCanvasMouseMove;
    render(): any;
}
