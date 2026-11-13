/**
 * Brand logo from the versioned asset catalog in blip-tokens. Set the host width to control its size;
 * the SVG keeps the aspect ratio from its viewBox. Use aria-label for a meaningful logo, or omit it when decorative.
 *
 * @part asset - The element containing the logo SVG.
 */
export declare class UaiLogo {
    private requestVersion;
    private svgContent?;
    /**
     * Logo name as listed in the blip-tokens asset catalog.
     */
    name: string;
    /**
     * Accessible name for a meaningful logo. Without it, the logo is decorative.
     */
    ariaLabel: string;
    /**
     * Value forwarded to the logo SVG container's data-test attribute.
     */
    dataTest?: string;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private loadLogo;
    render(): HTMLElement;
}
