/**
 * Horizontal progress indicator with safe bounds and accessible `progressbar` semantics.
 * Single visual defined by the UAI Figma: `sizing/2xs` track on `surface/background` with an `accent/ai-start` fill.
 * Use to communicate completion percentages or quota usage; pair with `text` or `aria-label` so screen readers announce what is progressing;
 * avoid using it to communicate critical status without accompanying text.
 *
 * @part track - The background track of the progress bar.
 * @part fill - The filled portion representing current progress.
 */
export declare class UaiProgressBar {
    el: HTMLElement;
    isRegression: boolean;
    private readonly textId;
    /**
     * Completion percentage clamped safely between 0 and 100 (`NaN` is treated as 0).
     */
    percent?: number;
    /**
     * Optional descriptive label rendered alongside the progress bar.
     */
    text?: string;
    /**
     * Accessible name forwarded to the `progressbar` element when no visible `text` is used.
     */
    ariaLabel: string | null;
    /**
     * ID reference forwarded to the `progressbar` element when labelled externally.
     */
    ariaLabelledby?: string;
    /**
     * Selector attribute applied to the `progressbar` element for automated tests.
     */
    dataTest?: string;
    protected handlePercentChange(newValue: number, oldValue: number): void;
    render(): HTMLElement;
}
