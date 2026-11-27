import { EventEmitter } from '../../stencil-public-runtime';
import { UaiIconTheme } from '../../globals/uai-icons';
export type UaiIconButtonVariant = 'solid' | 'outline' | 'ghost';
export type UaiIconButtonColor = 'primary' | 'content' | 'positive' | 'negative';
export type UaiIconButtonSize = 'compact' | 'short' | 'medium' | 'large';
export type UaiIconButtonType = 'button' | 'submit' | 'reset';
export type UaiIconButtonIconTheme = UaiIconTheme;
/**
 * Square icon-only action button for toolbars, card headers, and compact controls.
 * Use `variant="ghost"` or `variant="outline"` for secondary actions and `variant="solid"` for high-emphasis triggers;
 * pair with `aria-label` or `aria-labelledby` so assistive technologies announce the action; avoid omitting an accessible name.
 *
 * @part button - The native button element.
 */
export declare class UaiIconButton {
    el: HTMLElement;
    active?: boolean;
    /**
     * Name of the glyph from the UAI icon font. When omitted, nothing is rendered.
     */
    icon?: string;
    /**
     * Style of the UAI icon glyph (`outline` or `solid`).
     */
    iconTheme?: UaiIconButtonIconTheme;
    /**
     * Visual emphasis of the button (`solid`, `outline`, or `ghost`).
     */
    variant?: UaiIconButtonVariant;
    /**
     * Semantic color of the action (`primary`, `content`, `positive`, or `negative`).
     */
    color?: UaiIconButtonColor;
    /**
     * Control size (`compact`, `short`, `medium`, or `large`), mapped to `control-height/*` tokens.
     */
    size?: UaiIconButtonSize;
    /**
     * If true, disables the native button and prevents `uaiClick` emission.
     */
    disabled?: boolean;
    /**
     * If true, renders a loading spinner instead of the icon and prevents `uaiClick` emission.
     */
    loading?: boolean;
    /**
     * Native button type (`button`, `submit`, or `reset`).
     */
    type?: UaiIconButtonType;
    /**
     * Accessible name forwarded to the inner `<button>`. Required when `aria-labelledby` is not set.
     */
    ariaLabel: string | null;
    /**
     * ID reference forwarded to the inner `<button>` when labelled by an external element.
     */
    ariaLabelledby?: string;
    /**
     * Selector attribute forwarded to the inner `<button>` for automated tests.
     */
    dataTest?: string;
    /**
     * Emitted when the button is activated by pointer or keyboard while enabled and not loading.
     */
    uaiClick: EventEmitter<MouseEvent>;
    /**
     * Controls the visual active/pressed state of the button programmatically.
     */
    isActive(value: boolean): Promise<void>;
    private resolveVariantAndColor;
    private resolveSize;
    private resolveType;
    private resolveIconTheme;
    private handleClick;
    private actOnForm;
    render(): HTMLElement;
}
