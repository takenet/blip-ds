import { EventEmitter } from '../../../stencil-public-runtime';
export interface LegendItem {
    label: string;
    color: string;
}
export interface LegendState {
    items: LegendItem[];
    align: 'left' | 'center' | 'right';
    activeItem: string | null;
}
/**
 * ChartLegend — Renders the interactive legend for chart components.
 *
 * Must be used as a child of bds-chart-line or bds-chart-bar.
 * The parent chart pushes data via setLegendState() and listens to bdsLegendItemClick.
 *
 * Modes:
 *  - Series mode (no dataKey): reads bds-line/bds-bar siblings for color + label.
 *  - Category mode (dataKey set): reads unique values of dataKey from data,
 *    assigns palette colors to each category, and recolors bars/dots accordingly.
 */
export declare class ChartLegend {
    dataKey?: string;
    align: 'left' | 'center' | 'right';
    private items;
    private activeItem;
    private currentAlign;
    bdsLegendItemClick: EventEmitter<string>;
    setLegendState(state: LegendState): Promise<void>;
    render(): any;
}
