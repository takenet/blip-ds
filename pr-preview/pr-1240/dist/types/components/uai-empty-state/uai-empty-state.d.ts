export type UaiEmptyStateVariant = 'page' | 'inline';
export type UaiEmptyStateTone = 'neutral' | 'error';
export type UaiEmptyStateHeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
/**
 * Empty or error state of a page, panel, card or list: a decorative icon, a title, a short description and optional actions.
 * Use when a region has nothing to show or failed to load; pair with uai-button in the actions slot and uai-paper around a page state;
 * avoid it for loading (use a skeleton) and for transient feedback (use a toast).
 *
 * @slot - Rich description, such as text with a link. When filled, it replaces the description prop.
 * @slot actions - One or two uai-button (page: variant="outline" size="short"; inline: variant="text" size="short"). Hidden when empty.
 * @part icon-box - The circle around the icon.
 * @part heading - The title.
 * @part description - The description.
 * @part actions - The actions row.
 */
export declare class UaiEmptyState {
    el: HTMLElement;
    private hasDescriptionSlot;
    private hasActions;
    /** Density: 'page' for a page or panel, 'inline' for a narrow column, card or side list. Use the one that fits the region; avoid 'page' in narrow columns. */
    variant?: UaiEmptyStateVariant;
    /** 'error' tints the icon with feedback-error and announces the state with role="alert". Use it for load failures; pair the title with what failed; avoid color alone to convey it. */
    tone?: UaiEmptyStateTone;
    /** UAI icon name, always decorative. Use one that matches the situation; without it, 'message-ballon' (neutral) or 'error' (error) is used. Avoid icons that carry meaning the text does not. */
    icon?: string;
    /** Visible title (required). Use a short sentence that says what happened, without a final period; avoid generic titles such as "Erro". */
    heading?: string;
    /** Semantic element of the title; the look is always title-sm semibold. Use the level that fits the page outline; avoid choosing it by size. */
    headingTag?: UaiEmptyStateHeadingTag;
    /** Short supporting text. Use it to say what the person can do now; the default slot replaces it. Avoid long paragraphs. */
    description?: string;
    /** Test selector on the host (data-test). Use for automation; pair with semantic queries. Avoid styling by it. */
    dataTest?: string;
    componentWillLoad(): void;
    private readSlots;
    render(): HTMLElement;
}
