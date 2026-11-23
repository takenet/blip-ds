import { EventEmitter } from '../../stencil-public-runtime';
export type UaiBannerVariant = 'system' | 'warning' | 'info' | 'error' | 'success';
export type UaiBannerAlign = 'left' | 'right' | 'center';
export type UaiBannerButtonClose = 'true' | 'false';
export type UaiBannerContext = 'inside' | 'outside';
/**
 * Notification bar for a system, informational, success, warning or error message.
 * Use for page or section level notices; pair with UaiThemeProvider and a short text; avoid it for transient feedback.
 *
 * @slot - Short message text, preferably one line.
 * @slot link - Optional link or action shown before the close button.
 * @part holder - The banner container.
 * @part icon-box - The box around the variant icon.
 * @part close - The close button.
 */
export declare class UaiBanner {
    el: HTMLElement;
    visible: boolean;
    /** Kept for compatibility; the content always fills the available width. Avoid relying on it for layout. */
    bannerAlign?: UaiBannerAlign;
    /** Shows the close button when 'true'. Use for dismissible notices; pair with uaiBannerClose; avoid it for critical errors. */
    buttonClose?: UaiBannerButtonClose;
    /** Rounds the banner when 'inside' a container. Use 'outside' for a full-width bar; avoid mixing both in one page. */
    context?: UaiBannerContext;
    /** Semantic variant: system, info, success, warning or error. Use the one that matches the message; avoid color alone to convey meaning. */
    variant?: UaiBannerVariant;
    /** Optional short title shown above the text, without a final period. Use for the reason of the notice; avoid long titles. */
    heading?: string;
    /** Accessible name of the close button. Use a translated label; pair with buttonClose. Avoid leaving it generic. */
    closeLabel?: string;
    /** Test selector on the close button. Use for automation; pair with semantic queries. Avoid styling by it. */
    dtButtonClose?: string;
    /** Emitted when the banner is closed with the close button. Use to persist the dismissal; avoid duplicate handlers. */
    uaiBannerClose: EventEmitter<void>;
    /** Toggles the banner visibility. Use for imperative control; pair with uaiBannerClose. Avoid hiding critical errors. */
    toggle(): Promise<void>;
    componentWillLoad(): void;
    private close;
    render(): HTMLElement;
}
