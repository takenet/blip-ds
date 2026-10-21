export type UaiTypoVariant = 'display' | 'heading-xl' | 'heading-lg' | 'heading-md' | 'title' | 'body-lg' | 'body-base' | 'body-sm' | 'caption' | 'overline';
export type UaiTypoBold = 'regular' | 'medium' | 'semibold' | 'bold';
export type UaiTypoLetterSpacing = 'normal' | 'expanded';
export type UaiTypoTag = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'span';
export type UaiTypoLineHeight = 'none' | 'small' | 'simple' | 'plus' | 'double';
export declare class UaiTypo {
    el: HTMLElement;
    /**
     * Text style role from the UAI typography scale. Can be one of:
     * 'display', 'heading-xl', 'heading-lg', 'heading-md', 'title', 'body-lg', 'body-base', 'body-sm', 'caption', 'overline'.
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
