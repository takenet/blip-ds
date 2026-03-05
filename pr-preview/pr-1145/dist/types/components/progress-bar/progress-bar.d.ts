export type progressBarSize = 'small' | 'default';
export type progressBarColor = 'default' | 'positive' | 'information' | 'warning';
export declare class BdsProgressBar {
    /**
     * Percent, property to enter the progress bar status percentage value.
     */
    percent?: number;
    /**
     * Size, property to define size of component.
     */
    size?: progressBarSize;
    /**
     * Text, property to define status of component.
     */
    color?: progressBarColor;
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
