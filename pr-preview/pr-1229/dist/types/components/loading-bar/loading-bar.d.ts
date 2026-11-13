export type loadingBarSize = 'small' | 'default';
export declare class BdsloadingBar {
    /**
     * Percent, property to enter the loading bar status percentage value.
     */
    percent?: number;
    /**
     * Size, property to define size of component.
     */
    size?: loadingBarSize;
    /**
     * Text, property to enable the bar info text.
     */
    text?: string;
    /**
     * Data test is the prop to specifically test the component action object.
     */
    dataTest?: string;
    render(): any;
}
