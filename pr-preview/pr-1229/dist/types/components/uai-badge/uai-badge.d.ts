export type UaiBadgeShape = 'circle' | 'triangle' | 'triangle-reverse' | 'polygon' | 'square';
export type UaiBadgeColor = 'system' | 'danger' | 'warning' | 'success' | 'neutral';
export type UaiBadgeType = 'status' | 'icon' | 'number' | 'empty';
/**
 * Passive status, icon or count indicator. Use for supplementary information;
 * pair with an explanatory label; avoid using color alone to convey meaning.
 */
export declare class UaiBadge {
    /** Semantic color: system, danger, warning, success or neutral. Use for status; pair with a label; avoid arbitrary colors. */
    color?: string;
    /** Indicator shape. Use for status, icon or empty badges; pair with color; avoid expecting numeric capsules to change shape. */
    shape?: UaiBadgeShape;
    /** UAI or legacy icon name. Use when no count is supplied; pair with ariaLabel; avoid relying on an unnamed icon for meaning. */
    icon?: string;
    /** Count, visually capped at 999+ inclusively. Use zero for an empty indicator; pair with a label; avoid using counts as actions. */
    number?: number;
    /** Enables a pulse unless reduced motion is requested. Use sparingly; pair with meaningful status; avoid continuous distraction. */
    animation?: boolean;
    /** Inner visual element data-test marker. Use for automation; pair with semantic queries; avoid treating it as an accessible label. */
    dataTest?: string;
    /** Accessible indicator description, mapped to aria-label. Use for standalone meaning; pair with status or icon; avoid duplicate announcements. */
    ariaLabel: string;
    render(): HTMLElement;
}
