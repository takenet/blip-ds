import { UaiIconTheme } from '../../globals/uai-icons';
export type UaiIconBoxSize = 'sm' | 'md' | 'lg';
export type UaiIconBoxTheme = UaiIconTheme;
/**
 * Passive rounded surface container that frames a UAI icon or custom slotted graphic.
 * Use alongside card headings or KPI indicators; pair with `aria-label` only when the icon conveys standalone meaning;
 * avoid using it as an interactive button (use `uai-icon-button` instead).
 *
 * @slot - Optional custom icon content.
 * @part box - The icon box container.
 */
export declare class UaiIconBox {
    el: HTMLElement;
    /**
     * Name of the glyph from the UAI icon font. When omitted, renders the default slot content.
     */
    icon?: string;
    /**
     * Style of the UAI icon glyph (`outline` or `solid`).
     */
    iconTheme?: UaiIconBoxTheme;
    /**
     * Scale of the icon container (`sm`, `md`, or `lg`).
     */
    size?: UaiIconBoxSize;
    /**
     * Accessible label when the icon box communicates standalone meaning; otherwise the box is decorative.
     */
    ariaLabel: string | null;
    /**
     * Selector attribute applied to the box container for automated tests.
     */
    dataTest?: string;
    private resolveSize;
    private resolveTheme;
    render(): HTMLElement;
}
