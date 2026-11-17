export type Shape = 'circle' | 'square';
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
