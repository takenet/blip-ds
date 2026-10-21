export type UaiTheme = 'light' | 'dark';
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
