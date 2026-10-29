import { Component, Element, Event, EventEmitter, Host, Method, Prop, Watch, h } from '@stencil/core';
import { warnDeprecated } from '../../utils/deprecation';
import { UaiTabItemOptions } from './uai-tab-item-interface';

/**
 * Content panel and configuration of one tab. Use inside UaiTabGroup. Pair with a label;
 * avoid using open panels as independent navigation controls.
 *
 * @slot - Panel content. Use for the selected tab's content; pair with label; avoid putting tab headers here.
 */
@Component({
  tag: 'uai-tab-item',
  styleUrl: 'uai-tab-item.scss',
  shadow: true,
})
export class UaiTabItem implements UaiTabItemOptions {
  @Element() el!: HTMLElement;

  /** Position assigned by the group. Use for event correlation; pair with reciveNumber; avoid treating it as a stable ID. */
  @Prop({ mutable: true, reflect: true }) numberElement: number = null;

  /** Tab label. Use a short name; pair with panel content; avoid unnamed tabs. */
  @Prop() label: string = null;

  /** Optional tab icon. Use a UAI icon name; pair with label; avoid using an icon as the only accessible name. */
  @Prop() icon: string = null;

  /** Icon side, left or right. Use to preserve layout; pair with icon; avoid unsupported positions. */
  @Prop() iconPosition: string = 'left';

  /** Icon theme, outline, solid, emoji or logos. Use UAI themes first; pair with icon; avoid new legacy icon names. */
  @Prop() iconTheme: string = 'outline';

  /** Shows an optional internal indicator. Use for status or counts; pair with badge props; avoid mandatory decoration. */
  @Prop() badge = false;

  /** Indicator shape: circle, square, triangle, triangle-reverse or polygon. Use for status; pair with badge; avoid color-only meaning. */
  @Prop() badgeShape: string = 'circle';

  /** Indicator color: system, danger, warning, success or neutral. Use semantic status; pair with a label; avoid arbitrary colors. */
  @Prop() badgeColor: string = 'system';

  /** Optional indicator icon. Use for status; pair with badge; avoid relying on an unnamed icon for meaning. */
  @Prop() badgeIcon: string = null;

  /** Animates the indicator unless reduced motion is requested. Use sparingly; pair with badge; avoid continuous distraction. */
  @Prop() badgeAnimation = false;

  /** Indicator side, left or right. Use to preserve layout; pair with badge; avoid unsupported positions. */
  @Prop() badgePosition: string = 'left';

  /** Indicator count, capped visually at 999+. Use null for status and zero for an empty indicator; pair with badge; avoid negative counts. */
  @Prop() badgeNumber: number = null;

  /** Disables activation. Use for unavailable tabs; pair with a meaningful label; avoid renaming this inherited prop to disabled. */
  @Prop({ mutable: true, reflect: true }) disable = false;

  /** Marks an error with a semantic color and icon. Use for a panel requiring attention; pair with explanatory panel content; avoid color alone. */
  @Prop() error = false;

  /**
   * Custom group header styles when this item is open. Use token-based declarations for compatibility;
   * pair with contentStyle; avoid overriding component internals.
   * @deprecated Prefer token-based composition around the group. The inherited style string remains functional.
   */
  @Prop() headerStyle: string = null;

  /**
   * Custom group content styles when this item is open. Use token-based declarations for compatibility;
   * pair with headerStyle; avoid overriding component internals.
   * @deprecated Prefer token-based composition around the group. The inherited style string remains functional.
   */
  @Prop() contentStyle: string = null;

  /** Selects this tab. Use for initial or controlled selection; pair with uaiTabChange; avoid opening multiple items. */
  @Prop({ mutable: true, reflect: true }) open = false;

  /** Panel data-test marker. Use in automated tests; pair with dtButtonPrev/Next on the group; avoid using it as an accessible name. */
  @Prop() dataTest: string = null;

  /** Accessible tab name overriding label. Use for icon-only tabs; pair with iconOnly; avoid empty names. */
  @Prop({ attribute: 'aria-label' }) ariaLabel: string = null;

  /** Hides the visible label, not its accessible name. Use for the Intelligence icon layout; pair with icon and label; avoid unnamed actions. */
  @Prop() iconOnly = false;

  /** Availability change with the current index. Use for observing disable changes; pair with uaiTabDisabled on the group; avoid confusing it with activation. */
  @Event() uaiDisabled: EventEmitter<{ item: number; disable: boolean }>;

  /** Assigns the item index, preserving the legacy spelling. Use for compatibility; pair with numberElement; avoid using the index as a persistent identifier. */
  @Method()
  async reciveNumber(number: number): Promise<void> {
    this.numberElement = number;
  }

  @Watch('disable')
  protected disabledChanged(): void {
    this.uaiDisabled.emit({ item: this.numberElement, disable: this.disable });
  }

  @Watch('numberElement')
  @Watch('label')
  @Watch('icon')
  @Watch('iconPosition')
  @Watch('iconTheme')
  @Watch('badge')
  @Watch('badgeShape')
  @Watch('badgeColor')
  @Watch('badgeIcon')
  @Watch('badgeAnimation')
  @Watch('badgePosition')
  @Watch('badgeNumber')
  @Watch('disable')
  @Watch('error')
  @Watch('headerStyle')
  @Watch('contentStyle')
  @Watch('open')
  @Watch('dataTest')
  @Watch('ariaLabel')
  @Watch('iconOnly')
  protected configurationChanged(_value: unknown, _oldValue: unknown, prop: keyof UaiTabItemOptions): void {
    this.warnStyles();
    this.el.dispatchEvent(new CustomEvent('uaiTabItemUpdate', { bubbles: true, detail: { prop } }));
  }

  componentWillLoad(): void {
    this.warnStyles();
  }

  private warnStyles(): void {
    for (const prop of ['headerStyle', 'contentStyle'] as const) {
      if (this[prop]) warnDeprecated('uai-tab-item', prop, 'Prefer token-based composition around UaiTabGroup. The style remains functional.');
    }
  }

  render(): HTMLElement {
    return (
      <Host class={{ 'is-open': this.open && !this.disable }} hidden={!this.open || this.disable}>
        <div class="uai-tab-item__content" data-test={this.dataTest}>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
