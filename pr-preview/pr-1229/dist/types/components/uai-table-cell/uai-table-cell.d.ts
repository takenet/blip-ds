export type UaiTableJustify = 'left' | 'center' | 'right';
/**
 * Data cell of UaiTableRow. Use it for text or composed content such as avatars, badges and buttons;
 * pair with UaiTableRow; avoid long paragraphs, which are truncated with an ellipsis.
 *
 * @slot - Cell content.
 */
export declare class UaiTableCell {
    /** Horizontal alignment of the content. Use right for numbers and center for controls; avoid mixing alignments in one column. */
    justifyContent?: UaiTableJustify;
    render(): HTMLElement;
}
