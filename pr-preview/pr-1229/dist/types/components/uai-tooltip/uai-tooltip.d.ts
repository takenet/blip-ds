export type UaiTooltipPositionType = 'top-center' | 'top-left' | 'top-right' | 'left-center' | 'left-top' | 'left-bottom' | 'bottom-center' | 'bottom-right' | 'bottom-left' | 'right-center' | 'right-top' | 'right-bottom';
/**
 * Short supplementary text shown on hover or keyboard focus of the wrapped element.
 * Use for brief hints; pair with UaiThemeProvider; avoid essential information or interactive content.
 *
 * @slot - The element that triggers the tooltip.
 * @part tip - The floating tooltip container.
 */
export declare class UaiTooltip {
    el: HTMLElement;
    isVisible: boolean;
    textVerify: string;
    maxWidthTooltip: string;
    private readonly tipId;
    /** Tooltip text; <br> breaks the line. Use short hints; pair with the wrapped element; avoid essential information. */
    tooltipText: string;
    /** Prevents the tooltip from showing. Use when the wrapped element is unavailable; pair with explanatory text elsewhere. */
    disabled?: boolean;
    /** Placement relative to the wrapped element. Use the side with free space; avoid covering related content. */
    position: UaiTooltipPositionType;
    /** Maximum tooltip width as a CSS length. Defaults to the width/tooltip token; use for long text; avoid widths narrower than the content needs. */
    maxWidth?: string;
    /** Test selector on the trigger wrapper. Use for automation; pair with semantic queries. Avoid styling by it. */
    dataTest?: string;
    /** Shows the tooltip. Use for imperative control; pair with invisible. Avoid calling it while disabled. */
    visible(): Promise<void>;
    /** Hides the tooltip. Use for imperative control; pair with visible. Avoid leaving it open after the task ends. */
    invisible(): Promise<void>;
    tooltipTextChanged(): void;
    maxWidthChanged(): void;
    disabledChanged(): void;
    componentWillLoad(): void;
    private setVisibility;
    private onKeyDown;
    render(): HTMLElement;
}
