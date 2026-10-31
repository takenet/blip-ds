import { Component, Host, Prop, h } from '@stencil/core';
import { warnLegacyValue } from '../../utils/deprecation';

export type UaiTableJustify = 'left' | 'center' | 'right';

const JUSTIFY: readonly UaiTableJustify[] = ['left', 'center', 'right'];

/**
 * Data cell of UaiTableRow. Use it for text or composed content such as avatars, badges and buttons;
 * pair with UaiTableRow; avoid long paragraphs, which are truncated with an ellipsis.
 *
 * @slot - Cell content.
 */
@Component({
  tag: 'uai-table-cell',
  styleUrl: 'uai-table-cell.scss',
  shadow: true,
})
export class UaiTableCell {
  /** Horizontal alignment of the content. Use right for numbers and center for controls; avoid mixing alignments in one column. */
  @Prop({ reflect: true }) justifyContent?: UaiTableJustify = 'left';

  render(): HTMLElement {
    const justify = JUSTIFY.find((candidate) => candidate === this.justifyContent) || 'left';
    if (justify !== this.justifyContent) warnLegacyValue('uai-table-cell', 'justifyContent', this.justifyContent, justify);

    return (
      <Host role="cell">
        <uai-typo class="cell__text" tag="span" variant="body-base" margin={false}>
          <slot />
        </uai-typo>
      </Host>
    );
  }
}
