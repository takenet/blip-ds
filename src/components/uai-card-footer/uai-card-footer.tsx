import { Component, ComponentInterface, Element, Host, Prop, h } from '@stencil/core';
import { UaiCardJustifyContent } from '../uai-card-header/uai-card-header';
import { warnLegacyValue } from '../../utils/deprecation';

const ALIGNS: readonly UaiCardJustifyContent[] = [
  'flex-start',
  'center',
  'flex-end',
  'space-between',
  'space-around',
  'space-evenly',
];

/**
 * Footer container for `UaiCard` when composing with subcomponents.
 * Use inside `uai-card` (or place content directly with `slot="footer"`);
 * pair with `UaiButton` or supporting trend/goal metadata; avoid using outside a card context.
 *
 * @slot - Footer elements such as metadata labels, trend indicators, or action buttons.
 */
@Component({
  tag: 'uai-card-footer',
  styleUrl: 'uai-card-footer.scss',
  shadow: true,
})
export class UaiCardFooter implements ComponentInterface {
  @Element() el!: HTMLElement;

  /**
   * Horizontal distribution of children inside the footer.
   * Use `flex-end` for action buttons or `space-between` for dual metadata; pair with `UaiCard`; avoid invalid CSS alignment values.
   */
  @Prop() align?: UaiCardJustifyContent = 'flex-end';

  componentWillLoad(): void {
    if (this.el?.parentElement?.tagName === 'UAI-CARD' && !this.el.hasAttribute('slot')) {
      this.el.setAttribute('slot', 'footer');
    }
  }

  private resolveAlign(): UaiCardJustifyContent {
    const candidate = this.align ?? 'flex-end';
    if ((ALIGNS as readonly string[]).includes(candidate)) return candidate as UaiCardJustifyContent;
    warnLegacyValue('uai-card-footer', 'align', candidate, 'flex-end');
    return 'flex-end';
  }

  render() {
    const align = this.resolveAlign();
    return (
      <Host>
        <uai-grid xxs="12" direction="row" gap="2" justifyContent={align} alignItems="center">
          <slot />
        </uai-grid>
      </Host>
    );
  }
}
