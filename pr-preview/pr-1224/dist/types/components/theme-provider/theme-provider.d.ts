export type Themes = 'light' | 'dark' | 'high-contrast';
export declare class ThemeProvider {
    /**
     * Set what theme will be aplyed inside the component.
     * 'light', 'dark';
     */
    theme?: Themes;
    render(): any;
}
