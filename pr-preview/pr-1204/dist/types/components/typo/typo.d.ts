export type FontSize = 'fs-10' | 'fs-12' | 'fs-14' | 'fs-16' | 'fs-20' | 'fs-24' | 'fs-32' | 'fs-40';
export type FontLineHeight = 'none' | 'small' | 'simple' | 'plus' | 'double';
export type Bold = 'regular' | 'semi-bold' | 'bold' | 'extra-bold';
export type Tag = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'span';
export declare class Typo {
    /**
     * Variant. Entered as one of the font size variant. Can be one of:
     * 'fs-10' ,'fs-12' ,'fs-14' ,'fs-16' ,'fs-20' ,'fs-24' ,'fs-32' ,'fs-40';
     */
    variant?: FontSize;
    /**
     * Line Height. Entered as one of the line hieght. Can be one of:
     * 'none', 'small', 'simple', 'plus', 'double'
     */
    lineHeight?: FontLineHeight;
    /**
     * Bold. Entered as one of the bold. Can be one of:
     * 'regular', 'semi-bold', 'bold', 'extra-bold';
     */
    bold?: Bold;
    /**
     * Added font style italic
     */
    italic?: boolean;
    /**
     * Added style no wrap
     */
    noWrap?: boolean;
    /**
     * Tranform text in paragraph
     */
    paragraph?: boolean;
    /**
     * If true, adds default margin values
     */
    margin?: boolean;
    /**
     * Define element tag, must be used for acessibilty
     */
    tag?: Tag;
    /**
     * Data test is the prop to specifically test the component action object.
     */
    dataTest?: string;
    render(): HTMLElement;
}
