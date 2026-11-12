/**
 * Emoji from the versioned asset catalog in blip-tokens. Set the host width to control its size;
 * the SVG keeps the aspect ratio from its viewBox. Use aria-label for a meaningful emoji, or omit it when decorative.
 *
 * @part asset - The element containing the emoji SVG.
 */
export declare class UaiEmoji {
    private requestVersion;
    private svgContent?;
    /**
     * Emoji name as listed in the blip-tokens asset catalog.
     */
    name: string;
    /**
     * Accessible name for a meaningful emoji. Without it, the emoji is decorative.
     */
    ariaLabel: string;
    /**
     * Value forwarded to the emoji SVG container's data-test attribute.
     */
    dataTest?: string;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    private loadEmoji;
    render(): HTMLElement;
}
