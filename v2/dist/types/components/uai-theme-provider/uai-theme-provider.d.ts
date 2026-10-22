export type UaiTheme = 'light' | 'dark';
/**
 * Theme root for UAI components. Wrap the app (or an area with another theme) in it with theme="light" or "dark".
 * It sets data-uai-theme and the --uai-* tokens from blip-tokens, and does not change the layout (display: contents).
 */
export declare class UaiThemeProvider {
    /**
     * Theme applied to the UAI components inside the provider. Can be one of:
     * 'light', 'dark'. Any other value falls back to 'light' with a console warning.
     */
    theme?: UaiTheme;
    protected validateTheme(): void;
    componentWillLoad(): void;
    render(): HTMLElement;
}
