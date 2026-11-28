export type Shape = 'circle' | 'square';
/**
 * @deprecated Use uai-skeleton with UaiThemeProvider for tokenized styling.
 */
export declare class Skeleton {
    shape?: Shape;
    height?: string;
    width?: string;
    /**
     * Data test is the prop to specifically test the component action object.
     */
    dataTest?: string;
    render(): any;
}
