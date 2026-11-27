import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
export type UaiChartSeriesColor = 'ai-start' | 'ai-middle' | 'ai-end' | 'blue' | 'success' | 'warning' | 'error';
export interface UaiLineChartSeries {
    key: string;
    label: string;
    color?: UaiChartSeriesColor;
}
export type UaiLineChartDatum = Record<string, string | number>;
export type UaiLineChartFormat = 'number' | 'currency' | 'percent';
export type UaiLineChartLanguage = 'pt_BR' | 'en_US' | 'es_ES';
/**
 * Responsive multi-series line chart in SVG with UAI semantic palette, axes, legend, and keyboard/pointer inspection.
 * Use to visualize temporal evolution across one or more series; pair with `series`, `tooltipTitle`, and `format`;
 * avoid plotting unrelated scales on a single vertical axis.
 *
 * @part chart - The outer line chart container.
 * @part plot - The focusable interactive SVG plot area.
 * @part tooltip - The floating multi-series tooltip card shown on hover or keyboard inspection.
 * @part legend - The bottom series legend container.
 * @part empty - The empty state message when `data` or `series` is empty.
 */
export declare class UaiLineChart implements ComponentInterface {
    el: HTMLElement;
    activeIndex: number | null;
    private revision;
    /** Series definitions (`{ key, label, color? }`) as an array or a JSON-encoded array string. */
    series?: UaiLineChartSeries[] | string;
    /** Data points (`Record<string, string | number>`) as an array or a JSON-encoded array string. */
    data?: UaiLineChartDatum[] | string;
    /** Property name in each datum used for horizontal axis labels (automatically falls back to `key`, `label`, or `name`). */
    xKey?: string;
    /** Optional title displayed at the top of the inspection tooltip card. */
    tooltipTitle?: string;
    /** Value formatting mode applied to vertical axis ticks and tooltip rows (`number`, `currency`, or `percent`). */
    format?: UaiLineChartFormat;
    /** ISO 4217 currency code used when `format` is `currency`. */
    currency?: string;
    /** Locale used for number formatting and fallback copy (`pt_BR`, `en_US`, or `es_ES`). */
    language?: UaiLineChartLanguage;
    /** Controls whether the bottom series legend is rendered. */
    showLegend?: boolean;
    /** Optional custom message displayed when `data` or `series` is empty. */
    emptyText?: string;
    /** Optional test identifier placed on the chart container. */
    dataTest?: string;
    protected handleDataChange(): void;
    /** Emitted when an X index is inspected by pointer or keyboard, or `null` when inspection is cleared. */
    uaiPointHover: EventEmitter<{
        index: number;
        datum: UaiLineChartDatum;
    } | null>;
    private resolveFormat;
    private resolveLanguage;
    private resolveSeriesColor;
    private setActivePoint;
    private clearActivePoint;
    private handlePlotKeyDown;
    render(): HTMLElement;
}
