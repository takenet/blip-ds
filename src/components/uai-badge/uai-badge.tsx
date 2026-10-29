import { Component, Host, Prop, h } from '@stencil/core';
import { isUaiIcon } from '../../globals/uai-icons';
import { warnLegacyValue } from '../../utils/deprecation';

export type UaiBadgeShape = 'circle' | 'triangle' | 'triangle-reverse' | 'polygon' | 'square';
export type UaiBadgeColor = 'system' | 'danger' | 'warning' | 'success' | 'neutral';
export type UaiBadgeType = 'status' | 'icon' | 'number' | 'empty';

const SHAPES: readonly UaiBadgeShape[] = ['circle', 'triangle', 'triangle-reverse', 'polygon', 'square'];
const COLORS: readonly UaiBadgeColor[] = ['system', 'danger', 'warning', 'success', 'neutral'];

const supported = <T extends string>(prop: string, value: string, values: readonly T[], fallback: T): T => {
  const known = values.find((candidate) => candidate === value);
  if (known) return known;
  warnLegacyValue('uai-badge', prop, value, fallback);
  return fallback;
};

/**
 * Passive status, icon or count indicator. Use for supplementary information;
 * pair with an explanatory label; avoid using color alone to convey meaning.
 */
@Component({
  tag: 'uai-badge',
  styleUrl: 'uai-badge.scss',
  shadow: true,
})
export class UaiBadge {
  /** Semantic color: system, danger, warning, success or neutral. Use for status; pair with a label; avoid arbitrary colors. */
  @Prop() color?: string = 'system';

  /** Indicator shape. Use for status, icon or empty badges; pair with color; avoid expecting numeric capsules to change shape. */
  @Prop() shape?: UaiBadgeShape = 'circle';

  /** UAI or legacy icon name. Use when no count is supplied; pair with ariaLabel; avoid relying on an unnamed icon for meaning. */
  @Prop() icon?: string = null;

  /** Count, visually capped at 999+ inclusively. Use zero for an empty indicator; pair with a label; avoid using counts as actions. */
  @Prop() number?: number;

  /** Enables a pulse unless reduced motion is requested. Use sparingly; pair with meaningful status; avoid continuous distraction. */
  @Prop() animation?: boolean = false;

  /** Inner visual element data-test marker. Use for automation; pair with semantic queries; avoid treating it as an accessible label. */
  @Prop() dataTest?: string = null;

  /** Accessible indicator description, mapped to aria-label. Use for standalone meaning; pair with status or icon; avoid duplicate announcements. */
  @Prop({ attribute: 'aria-label' }) ariaLabel: string = null;

  render(): HTMLElement {
    const shape = supported('shape', this.shape, SHAPES, 'circle');
    const color = supported('color', this.color, COLORS, 'system');
    const hasNumber = this.number !== null && this.number !== undefined;
    const type: UaiBadgeType = hasNumber ? (this.number === 0 ? 'empty' : 'number') : this.icon ? 'icon' : 'status';
    const compactIcon = shape === 'triangle' || shape === 'triangle-reverse' || shape === 'polygon';

    return (
      <Host role={this.ariaLabel ? 'img' : undefined} aria-label={this.ariaLabel || undefined}>
        <div
          class={{
            badge: true,
            [`badge--${color}`]: true,
            [`badge--${type}`]: true,
            [`badge--${type === 'number' ? 'circle' : shape}`]: true,
            'badge--animated': this.animation,
          }}
          data-test={this.dataTest}
          aria-hidden={this.ariaLabel ? 'true' : undefined}
        >
          <span class="badge__shape" aria-hidden="true"></span>
          {this.animation && <span class="badge__pulse" aria-hidden="true"></span>}
          <div class="badge__content">
            {type === 'number' && (
              <uai-typo tag="span" variant="caption" bold="bold" margin={false}>
                {this.number >= 999 ? '999+' : this.number}
              </uai-typo>
            )}
            {type === 'icon' &&
              (isUaiIcon('outline', this.icon) ? (
                <uai-icon class="badge__icon" name={this.icon} size="x-small" aria-hidden="true"></uai-icon>
              ) : (
                <bds-icon
                  class="badge__icon"
                  name={this.icon}
                  theme="outline"
                  size={compactIcon ? 'xx-small' : 'x-small'}
                  color="currentColor"
                  aria-hidden="true"
                ></bds-icon>
              ))}
          </div>
        </div>
      </Host>
    );
  }
}
