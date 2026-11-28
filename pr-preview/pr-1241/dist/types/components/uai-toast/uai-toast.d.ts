import { EventEmitter } from '../../stencil-public-runtime';
import { UaiToastCloseReason, UaiToastOptions, UaiToastPosition, UaiToastVariant } from '../../utils/uai-toast';
/**
 * Short notification that floats over the page, with the result of an action or a system message.
 * Use for transient feedback; pair with UaiToastContainer (or `show()`, which creates it) and a short text; avoid it
 * for messages the user must act on, which belong in a modal or a banner.
 *
 * @slot - Optional rich content shown after `message`, such as text with a link.
 * @part toast - The toast surface.
 * @part icon-box - The box around the variant icon.
 * @part action - The action button.
 * @part close - The close button.
 * @part progress - The line along the bottom that shrinks over the duration.
 */
export declare class UaiToast {
    el: HTMLElement;
    private timer?;
    private timerStart;
    private remaining;
    private removeOnClose;
    private loaded;
    private stack?;
    /** The time is paused: the progress line stops with it. */
    paused: boolean;
    /** A new count of the time, which restarts the progress line. */
    cycle: number;
    /** Semantic variant: system, info, success, warning or error. Use the one that matches the message; avoid color alone to convey meaning. */
    variant?: UaiToastVariant;
    /** Optional short title, without a final period. Use for the reason of the notification; avoid long titles. */
    heading?: string;
    /** Short text, preferably one line. It is plain text (never HTML); for a link, use the default slot. */
    message?: string;
    /** Whether the toast is shown. Use show() and close() to also place it and emit the events; avoid toggling it in a loop. */
    open: boolean;
    /** Time in milliseconds before the toast closes by itself; 0 keeps it open. The time pauses while the mouse or the focus is on it. */
    duration: number;
    /** Shows the close button. Keep it on unless the toast closes by itself; avoid a toast nobody can dismiss. */
    closable: boolean;
    /** Accessible name of the close button. Use a translated label; avoid leaving it generic. */
    closeLabel?: string;
    /** Text of the optional action button, such as "Desfazer". Clicking it emits uaiToastAction and closes the toast. */
    actionLabel?: string;
    /** Position used by show() when the toast is not inside a UaiToastContainer. Avoid mixing positions for the same kind of message. */
    position?: UaiToastPosition;
    /** Test selector on the close button. Use for automation; pair with semantic queries. Avoid styling by it. */
    dtButtonClose?: string;
    /** Test selector on the action button. Use for automation; pair with semantic queries. Avoid styling by it. */
    dtButtonAction?: string;
    /** Emitted when the toast opens. UaiToastContainer uses it to stay on top and announce the toast. */
    uaiToastOpen: EventEmitter<void>;
    /** Emitted when the toast closes, with the reason: close-button, action, timeout, escape or method. */
    uaiToastClose: EventEmitter<{
        reason: UaiToastCloseReason;
    }>;
    /** Emitted when the action button is clicked, before the toast closes. Use to run the action, such as undoing. */
    uaiToastAction: EventEmitter<void>;
    /**
     * Opens the toast. Outside a UaiToastContainer, it moves the toast into the container of its position (created in the
     * nearest UaiThemeProvider when there is none) and removes it from the page after it closes. Options replace the props
     * of the same name; `removeOnClose` decides whether the toast leaves the page after closing.
     */
    show(options?: UaiToastOptions): Promise<void>;
    /** Closes the toast and emits uaiToastClose with reason "method". */
    close(): Promise<void>;
    protected openChanged(open: boolean): void;
    protected durationChanged(): void;
    componentDidLoad(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private watchStack;
    private unwatchStack;
    private handleVisibility;
    private container;
    private dismiss;
    private startTimer;
    private schedule;
    private clearTimer;
    private pause;
    private resume;
    private handleFocusOut;
    private handleKeyDown;
    private handleAction;
    render(): HTMLElement;
}
