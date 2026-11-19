import { EventEmitter } from '../../stencil-public-runtime';
import { UaiTabItemOptions } from './uai-tab-item-interface';
/**
 * Content panel and configuration of one tab. Use inside UaiTabGroup. Pair with a label;
 * avoid using open panels as independent navigation controls.
 *
 * @slot - Panel content. Use for the selected tab's content; pair with label; avoid putting tab headers here.
 */
export declare class UaiTabItem implements UaiTabItemOptions {
    el: HTMLElement;
    /** Position assigned by the group. Use for event correlation; pair with reciveNumber; avoid treating it as a stable ID. */
    numberElement: number;
    /** Tab label. Use a short name; pair with panel content; avoid unnamed tabs. */
    label: string;
    /** Optional tab icon. Use a UAI icon name; pair with label; avoid using an icon as the only accessible name. */
    icon: string;
    /** Icon side, left or right. Use to preserve layout; pair with icon; avoid unsupported positions. */
    iconPosition: string;
    /** Icon theme, outline, solid, emoji or logos. Use UAI themes first; pair with icon; avoid new legacy icon names. */
    iconTheme: string;
    /** Shows an optional internal indicator. Use for status or counts; pair with badge props; avoid mandatory decoration. */
    badge: boolean;
    /** Indicator shape: circle, square, triangle, triangle-reverse or polygon. Use for status; pair with badge; avoid color-only meaning. */
    badgeShape: string;
    /** Indicator color: system, danger, warning, success or neutral. Use semantic status; pair with a label; avoid arbitrary colors. */
    badgeColor: string;
    /** Optional indicator icon. Use for status; pair with badge; avoid relying on an unnamed icon for meaning. */
    badgeIcon: string;
    /** Animates the indicator unless reduced motion is requested. Use sparingly; pair with badge; avoid continuous distraction. */
    badgeAnimation: boolean;
    /** Indicator side, left or right. Use to preserve layout; pair with badge; avoid unsupported positions. */
    badgePosition: string;
    /** Indicator count, capped visually at 999+. Use null for status and zero for an empty indicator; pair with badge; avoid negative counts. */
    badgeNumber: number;
    /** Disables activation. Use for unavailable tabs; pair with a meaningful label; avoid renaming this inherited prop to disabled. */
    disable: boolean;
    /** Marks an error with a semantic color and icon. Use for a panel requiring attention; pair with explanatory panel content; avoid color alone. */
    error: boolean;
    /**
     * Custom group header styles when this item is open. Use token-based declarations for compatibility;
     * pair with contentStyle; avoid overriding component internals.
     * @deprecated Prefer token-based composition around the group. The inherited style string remains functional.
     */
    headerStyle: string;
    /**
     * Custom group content styles when this item is open. Use token-based declarations for compatibility;
     * pair with headerStyle; avoid overriding component internals.
     * @deprecated Prefer token-based composition around the group. The inherited style string remains functional.
     */
    contentStyle: string;
    /** Selects this tab. Use for initial or controlled selection; pair with uaiTabChange; avoid opening multiple items. */
    open: boolean;
    /** Panel data-test marker. Use in automated tests; pair with dtButtonPrev/Next on the group; avoid using it as an accessible name. */
    dataTest: string;
    /** Accessible tab name overriding label. Use for icon-only tabs; pair with iconOnly; avoid empty names. */
    ariaLabel: string;
    /** Hides the visible label, not its accessible name. Use for the Intelligence icon layout; pair with icon and label; avoid unnamed actions. */
    iconOnly: boolean;
    /** Availability change with the current index. Use for observing disable changes; pair with uaiTabDisabled on the group; avoid confusing it with activation. */
    uaiDisabled: EventEmitter<{
        item: number;
        disable: boolean;
    }>;
    /** Assigns the item index, preserving the legacy spelling. Use for compatibility; pair with numberElement; avoid using the index as a persistent identifier. */
    reciveNumber(number: number): Promise<void>;
    protected disabledChanged(): void;
    protected configurationChanged(_value: unknown, _oldValue: unknown, prop: keyof UaiTabItemOptions): void;
    componentWillLoad(): void;
    private warnStyles;
    render(): HTMLElement;
}
