import { ComponentInterface } from '../../stencil-public-runtime';
export type UaiSparklineVariant = 'neutral' | 'positive' | 'negative';
export type UaiSparklineLanguage = 'pt_BR' | 'en_US' | 'es_ES';
/**
 * Compact responsive trend sparkline rendered in SVG without axes.
 * Use inside KPI and summary cards to illustrate directional variation; pair with a visible metric and `label`;
 * avoid using color alone to communicate positive or negative status.
 *
 * @part chart - The sparkline container with accessible image semantics.
 */
export declare class UaiSparkline implements ComponentInterface {
    private revision;
    private readonly gradientId;
    /** Numeric series as an array of numbers or a JSON-encoded array string. */
    data?: number[] | string;
    /** Semantic color variant (`neutral`, `positive`, or `negative`). Legacy aliases `green` and `red` map to `positive` and `negative`. */
    variant?: UaiSparklineVariant;
    /** Renders a monotone smooth cubic curve when `true`, or straight segments when `false`. */
    smooth?: boolean;
    /** Displays the subtle vertical gradient area under the curve for every variant, including flat `neutral` trends. */
    showArea?: boolean;
    /** Accessible description announced for the sparkline. Falls back to a localized summary when omitted. */
    label?: string;
    /** Locale used for fallback accessible announcements (`pt_BR`, `en_US`, or `es_ES`). */
    language?: UaiSparklineLanguage;
    /** Optional test identifier placed on the chart container. */
    dataTest?: string;
    protected handleDataChange(): void;
    private resolveVariant;
    private resolveLanguage;
    render(): HTMLElement;
}
