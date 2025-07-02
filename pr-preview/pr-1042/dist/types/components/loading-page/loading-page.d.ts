export declare class BdsLoading {
    private svgContent?;
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
