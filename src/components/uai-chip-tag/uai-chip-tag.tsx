import { Component, Host, Prop, h } from '@stencil/core';
import { warnLegacyValue } from '../../utils/deprecation';

export type UaiChipTagColor = 'system' | 'outline' | 'info' | 'success' | 'warning' | 'danger' | 'disabled';

const COLORS: readonly UaiChipTagColor[] = ['system', 'outline', 'info', 'success', 'warning', 'danger', 'disabled'];

/**
 * Small passive label that categorizes or tags an item. Use for short keywords or statuses;
 * pair with a text label; avoid using color alone to convey meaning or using it as an action.
 *
 * @slot - The chip text.
 * @part chip - The chip container.
 */
@Component({
  tag: 'uai-chip-tag',
  styleUrl: 'uai-chip-tag.scss',
  shadow: true,
})
export class UaiChipTag {
  /** Icon name shown before the text. Use to reinforce the meaning; pair with the text; avoid decorative icons. */
  @Prop() icon?: string;

  /** Semantic color: system, outline, info, success, warning, danger or disabled. Use for status; pair with the text; avoid arbitrary colors. The legacy default value maps to system. */
  @Prop() color?: string = 'system';

  /** Test selector on the chip. Use for automation; pair with semantic queries. Avoid styling by it. */
  @Prop() dataTest?: string = null;

  private resolveColor(): UaiChipTagColor {
    if (this.color === 'default') return 'system';
    const known = COLORS.find((candidate) => candidate === this.color);
    if (known) return known;
    warnLegacyValue('uai-chip-tag', 'color', this.color, 'system');
    return 'system';
  }

  render(): HTMLElement {
    const color = this.resolveColor();
    return (
      <Host>
        <div class={{ chip: true, [`chip--${color}`]: true }} part="chip" data-test={this.dataTest}>
          {this.icon && <uai-icon class="chip__icon" size="x-small" name={this.icon} />}
          <uai-typo class="chip__text" tag="span" variant="caption" margin={false}>
            <slot />
          </uai-typo>
        </div>
      </Host>
    );
  }
}
