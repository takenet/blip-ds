export type UaiTypoVariant = 'display' | 'heading-xl' | 'heading-lg' | 'heading-md' | 'title-lg' | 'title-md' | 'title-sm' | 'title' | 'body-lg' | 'body-base' | 'body-sm' | 'caption' | 'overline';
export type UaiTypoBold = 'regular' | 'medium' | 'semibold' | 'bold';
export type UaiTypoLetterSpacing = 'normal' | 'expanded';
export type UaiTypoTag = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'span';
export type UaiTypoLineHeight = 'none' | 'small' | 'simple' | 'plus' | 'double';
/**
 * Text with the UAI type scale. variant and bold are the Figma text styles (heading/lg/semibold is variant="heading-lg" bold="semibold");
 * tag sets the HTML element, so use h1-h4 for titles. Default: body-base, regular, <p>. Wrap the app in UaiThemeProvider.
 *
 * @slot - Text content.
 * @part uai-typo__text - The text element.
 */
export declare class UaiTypo {
    el: HTMLElement;
    /**
     * Text style role from the UAI typography scale. Can be one of:
     * 'display', 'heading-xl', 'heading-lg', 'heading-md', 'title-lg', 'title-md', 'title-sm', 'title',
     * 'body-lg', 'body-base', 'body-sm', 'caption', 'overline'.
     */
    variant?: UaiTypoVariant;
    /**
     * Font weight. Can be one of: 'regular', 'medium', 'semibold', 'bold'.
     */
    bold?: UaiTypoBold;
    /**
     * Letter spacing. 'expanded' matches the spaced body text style.
     */
    letterSpacing?: UaiTypoLetterSpacing;
    /**
     * @deprecated The line height comes from the variant. This prop has no effect.
     */
    lineHeight?: UaiTypoLineHeight;
    /**
     * Adds font style italic.
     */
    italic?: boolean;
    /**
     * Keeps the text on one line and truncates it with an ellipsis.
     */
    noWrap?: boolean;
    /**
     * Adds a bottom margin for paragraphs.
     */
    paragraph?: boolean;
    /**
     * If true, adds the default bottom margin to display and heading variants.
     */
    margin?: boolean;
    /**
     * Element tag. Use it to give the text the right semantics.
     */
    tag?: UaiTypoTag;
    /**
     * Data test is the prop to specifically test the component action object.
     */
    dataTest?: string;
    protected warnDeprecated(): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    render(): HTMLElement;
}
