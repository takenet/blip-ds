import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
export interface UaiBarChartItem {
    label: string;
    value: number;
    formattedValue?: string;
}
export type UaiBarChartFormat = 'number' | 'currency' | 'percent';
export type UaiBarChartLanguage = 'pt_BR' | 'en_US' | 'es_ES';
/**
 * Responsive horizontal bar chart for comparing ranked categories against a shared numeric domain.
 * Use inside analytics cards and panels; pair with `seriesLabel` and `format` so axis ticks and keyboard tooltips remain clear;
 * avoid overcrowding with excessive categories when a paginated table is more appropriate.
 *
 * @part chart - The outer chart container.
 * @part bars - The list container holding interactive bar items.
 * @part tooltip - The floating inspection tooltip shown on hover or keyboard focus.
 * @part legend - The bottom series legend container.
 * @part empty - The empty state message when `data` has no items.
 */
export declare class UaiBarChart implements ComponentInterface {
    el: HTMLElement;
    activeIndex: number | null;
    /** Category items as an array of `{ label, value, formattedValue? }` or a JSON-encoded array string. */
    data?: UaiBarChartItem[] | string;
    /** Series name displayed in the bottom legend (for example, `ROI`). */
    seriesLabel?: string;
    /** Controls whether the bottom legend is shown when `seriesLabel` is provided. */
    showLegend?: boolean;
    /** Value formatting mode applied to horizontal axis ticks and tooltips (`number`, `currency`, or `percent`). */
    format?: UaiBarChartFormat;
    /** ISO 4217 currency code used when `format` is `currency`. */
    currency?: string;
    /** Optional explicit upper bound for the horizontal domain; computed automatically when omitted. */
    maxValue?: number;
    /** Locale used for number formatting and fallback copy (`pt_BR`, `en_US`, or `es_ES`). */
    language?: UaiBarChartLanguage;
    /** Optional custom message displayed when `data` is empty. */
    emptyText?: string;
    /** Optional test identifier placed on the chart container. */
    dataTest?: string;
    /** Emitted when a bar is hovered or focused, or `null` when inspection is cleared. */
    uaiBarHover: EventEmitter<UaiBarChartItem | null>;
    /** Emitted when a bar is activated by pointer click or keyboard (`Enter` or `Space`). */
    uaiBarClick: EventEmitter<UaiBarChartItem>;
    private resolveFormat;
    private resolveLanguage;
    private activateBar;
    private clearActiveBar;
    private handleBarBlur;
    private handleBarKeyDown;
    render(): HTMLElement;
}
