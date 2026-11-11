/**
 * Internal overlay primitive (w0-primitivas-internas). Opens a floating panel next to its trigger in the top layer
 * (Popover API, with a `position: fixed` fallback), keeps it inside the viewport, follows scroll and resize, and closes
 * it with Escape, a click outside or when the trigger leaves the visible area. Not a public component: listbox, menu,
 * datepicker, tooltip and other UAI components build on it. The panel must include the `uai-overlay-panel` mixin,
 * which provides the spacing/2xs gap, the spacing/xs viewport margin and the duration/moderate fade.
 */
export type UaiOverlayCloseReason = 'escape' | 'outside' | 'trigger-hidden' | 'api';
export interface UaiOverlayRect {
    top: number;
    right: number;
    bottom: number;
    left: number;
    width: number;
    height: number;
}
export interface UaiOverlayLayoutInput {
    trigger: UaiOverlayRect;
    panel: {
        width: number;
        height: number;
    };
    viewport: {
        width: number;
        height: number;
    };
    /** Distance between trigger and panel (spacing/2xs). */
    gap: number;
    /** Minimum distance between panel and viewport edges (spacing/xs). */
    margin: number;
    /** The panel is at least as wide as the trigger. */
    matchTriggerWidth?: boolean;
}
export interface UaiOverlayLayout {
    top: number;
    left: number;
    minWidth: number;
    maxWidth: number;
    maxHeight: number;
    side: 'top' | 'bottom';
    align: 'start' | 'end';
}
export interface UaiOverlayOptions {
    trigger: HTMLElement;
    panel: HTMLElement;
    matchTriggerWidth?: boolean;
    onClose?: (reason: UaiOverlayCloseReason) => void;
}
export declare function computeOverlayLayout(input: UaiOverlayLayoutInput): UaiOverlayLayout;
export declare const supportsPopover: () => boolean;
export declare class UaiOverlay {
    private readonly options;
    private readonly popover;
    private observer?;
    private frame;
    private opened;
    constructor(options: UaiOverlayOptions);
    get isOpen(): boolean;
    open(): void;
    close(reason?: UaiOverlayCloseReason): void;
    toggle(): void;
    /** Recomputes the position, for example after the panel content changes. */
    update(): void;
    /** True when the event path goes through this overlay's panel or trigger. */
    contains(path: EventTarget[]): boolean;
    destroy(): void;
    private readonly schedule;
}
