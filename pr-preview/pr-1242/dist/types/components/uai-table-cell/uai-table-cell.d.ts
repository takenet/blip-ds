export type UaiTableJustify = 'left' | 'center' | 'right';
/**
 * Data cell of UaiTableRow. Use it for text or composed content such as avatars, badges and buttons;
 * pair with UaiTableRow. The content stays in its column: text wraps, even a long word such as an e-mail or a URL; a UaiTypo
 * with noWrap, a chip or a button ends with an ellipsis. Avoid long paragraphs, which make tall rows.
 *
 * @slot - Cell content.
 */
export declare class UaiTableCell {
    /** Horizontal alignment of the content. Use right for numbers and center for controls; avoid mixing alignments in one column. */
    justifyContent?: UaiTableJustify;
    render(): HTMLElement;
}
