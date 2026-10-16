export type LoadingSpinnerVariant = 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'delete';
export type loadingSize = 'extra-small' | 'small' | 'standard';
export type colorsVariants = 'main' | 'light' | 'content' | 'positive' | 'negative';
export type LoadingSpinnerColorMap = {
    [key in LoadingSpinnerVariant]: string;
};
export declare class BdsLoadingSpinner {
    private svgContent?;
    /**
     * 	Sets the color of the spinner, can be 'primary', 'secondary' or 'ghost'
     */
    variant: LoadingSpinnerVariant;
    /**
     * Size, Entered as one of the size. Can be one of:
     * 'small', 'standard', 'large'.
     */
    size?: loadingSize;
    /**
     * Color, Entered as one of the color. Can be one of:
     * 'default', 'white'.
     */
    color?: colorsVariants;
    /**
     * Data test is the prop to specifically test the component action object.
     */
    dataTest?: string;
    componentWillLoad(): void;
    /**Function to transform the svg in a div element. */
    formatSvg: (svgContent: string) => string;
    setSvgContent: () => void;
    render(): any;
}
