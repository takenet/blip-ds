export type TooltipPostionType = 'top-center' | 'top-left' | 'top-right' | 'left-center' | 'left-top' | 'left-bottom' | 'bottom-center' | 'bottom-right' | 'bottom-left' | 'right-center' | 'right-top' | 'right-bottom';
export declare class Tooltip {
    /**
     * Used to set tooltip visibility
     */
    isMouseOver: boolean;
    textVerify: string;
    maxWidtTooltip: string;
    /**
     * Used to set tooltip text
     */
    tooltipText: string;
    /**
     * Used to disable tooltip when the button are avalible
     */
    disabled?: boolean;
    /**
     * Used to set tooltip position
     */
    position: TooltipPostionType;
    /**
     * Used to set tooltip max width
     */
    maxWidth?: string;
    /**
     * Data test is the prop to specifically test the component action object.
     */
    dataTest?: string;
    /**
     * Method for change the visibility of tooltip.
     */
    visible(): Promise<void>;
    /**
     * Method for change the visibility of tooltip.
     */
    invisible(): Promise<void>;
    private setVisibility;
    componentWillLoad(): void;
    tooltipTextChanged(): void;
    maxWidthChanged(): void;
    render(): any;
}
