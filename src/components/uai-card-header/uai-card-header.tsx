import { Component, ComponentInterface, Element, Host, Prop, h } from '@stencil/core';
import { warnLegacyValue } from '../../utils/deprecation';

export type UaiCardJustifyContent =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

const ALIGNS: readonly UaiCardJustifyContent[] = [
  'flex-start',
  'center',
  'flex-end',
  'space-between',
  'space-around',
  'space-evenly',
];

/**
 * Header container for `UaiCard` when composing with subcomponents.
 * Use inside `uai-card` (or prefer `heading`/`description` and `slot="actions"` directly on `uai-card`);
 * pair with `UaiCardTitle` and `UaiCardSubtitle`; avoid using outside a card context.
 *
 * @slot - Header elements such as `uai-card-title`, `uai-card-subtitle`, and action buttons.
 */
@Component({
  tag: 'uai-card-header',
  styleUrl: 'uai-card-header.scss',
  shadow: true,
})
export class UaiCardHeader implements ComponentInterface {
  @Element() el!: HTMLElement;

  /**
   * Horizontal distribution of children inside the header.
   * Use `space-between` for title + actions or `flex-start` for stacked headings; pair with `UaiCardTitle`; avoid invalid CSS alignment values.
   */
  @Prop() align?: UaiCardJustifyContent = 'space-between';

  componentWillLoad(): void {
    if (this.el?.parentElement?.tagName === 'UAI-CARD' && !this.el.hasAttribute('slot')) {
      this.el.setAttribute('slot', 'header');
    }
  }

  private resolveAlign(): UaiCardJustifyContent {
    const candidate = this.align ?? 'space-between';
    if ((ALIGNS as readonly string[]).includes(candidate)) return candidate as UaiCardJustifyContent;
    warnLegacyValue('uai-card-header', 'align', candidate, 'space-between');
    return 'space-between';
  }

  render() {
    const align = this.resolveAlign();
    return (
      <Host>
        <uai-grid xxs="12" direction="row" gap="1" justifyContent={align} alignItems="center">
          <slot />
        </uai-grid>
      </Host>
    );
  }
}
