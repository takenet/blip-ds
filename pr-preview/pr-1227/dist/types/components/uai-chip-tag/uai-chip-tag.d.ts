export type UaiChipTagColor = 'system' | 'outline' | 'info' | 'success' | 'warning' | 'danger' | 'disabled';
/**
 * Small passive label that categorizes or tags an item. Use for short keywords or statuses;
 * pair with a text label; avoid using color alone to convey meaning or using it as an action.
 *
 * @slot - The chip text.
 * @part chip - The chip container.
 */
export declare class UaiChipTag {
    /** Icon name shown before the text. Use to reinforce the meaning; pair with the text; avoid decorative icons. */
    icon?: string;
    /** Semantic color: system, outline, info, success, warning, danger or disabled. Use for status; pair with the text; avoid arbitrary colors. The legacy default value maps to system. */
    color?: string;
    /** Test selector on the chip. Use for automation; pair with semantic queries. Avoid styling by it. */
    dataTest?: string;
    private resolveColor;
    render(): HTMLElement;
}
