import { Component, ComponentInterface, Element, Host, Prop, State, h } from '@stencil/core';
import { warnLegacyValue } from '../../utils/deprecation';

export type UaiCardSize = 'sm' | 'md';

const SIZES: readonly UaiCardSize[] = ['sm', 'md'];
/**
 * Structured surface for grouping related information, metrics, charts, and actions.
 * Use with `heading`, `description`, and named slots (`icon`, `actions`, `media`, `footer`) or `uai-card-*` subcomponents;
 * pair with `UaiGrid` for multi-card rows; to make a whole card navigable, wrap it in a link or button instead of making the card itself interactive.
 *
 * @slot - Main body content of the card (metrics, progress bars, charts, text, or `uai-card-body`).
 * @slot media - Optional top media or cover image.
 * @slot icon - Optional leading icon or `uai-icon-box` in the header.
 * @slot header - Optional custom header content or `uai-card-header`.
 * @slot actions - Optional trailing action controls (such as `uai-icon-button`) in the header.
 * @slot footer - Optional footer content or `uai-card-footer`.
 * @part card - The card surface container.
 * @part media - The top media container when rendered.
 * @part header - The header region when rendered.
 * @part body - The main content slot container.
 * @part footer - The footer region when rendered.
 */
@Component({
  tag: 'uai-card',
  styleUrl: 'uai-card.scss',
  shadow: true,
})
export class UaiCard implements ComponentInterface {
  @Element() el!: HTMLElement;

  @State() hasMediaSlot = false;
  @State() hasIconSlot = false;
  @State() hasHeaderSlot = false;
  @State() hasActionsSlot = false;
  @State() hasFooterSlot = false;

  /**
   * Spacing preset of the card layout (`sm` or `md`).
   * Use `sm` for compact KPI/indicator cards and `md` for cards with subtitle or full charts; pair with `heading` and `description`; avoid arbitrary padding overrides.
   */
  @Prop() size?: UaiCardSize = 'sm';

  /**
   * Primary title displayed in the card header.
   * Use a short noun phrase; pair with `description` or `slot="actions"`; avoid duplicating a `uai-card-title` inside `slot="header"`.
   */
  @Prop() heading?: string = '';

  /**
   * Supporting description displayed below `heading` in the card header.
   * Use to clarify metric scope or period; pair with `heading` and `size="md"`; avoid long paragraphs.
   */
  @Prop() description?: string = '';

  /**
   * Optional cover image URL rendered in the top media region.
   * Use for illustrated or editorial cards; pair with `imageAlt` when informative; avoid combining with `slot="media"`.
   */
  @Prop() imageSrc?: string = null;

  /**
   * Accessible alternative text for `imageSrc` (empty string when decorative).
   * Use to describe informative media; pair with `imageSrc`; avoid repeating the `heading` text.
   */
  @Prop() imageAlt?: string = '';

  /**
   * Explicit CSS height applied to the card host.
   * Use token-based values or `100%` when stretching in a grid; pair with `width`; avoid hardcoded pixel heights that clip dynamic content.
   */
  @Prop() height?: string = null;

  /**
   * Explicit CSS width applied to the card host.
   * Use `100%` or `fit-content` according to layout; pair with `UaiGrid` in multi-column rows; avoid fixed pixel widths in responsive layouts.
   */
  @Prop() width?: string = null;

  /**
   * Automation selector applied to the inner card surface.
   * Use in automated tests; pair with accessible role queries; avoid styling by this attribute.
   */
  @Prop() dataTest?: string = null;


  componentWillLoad(): void {
    this.routeLegacySubcomponents();
    this.syncSlotFlags();
  }

  private routeLegacySubcomponents(): void {
    if (!this.el?.children) return;
    Array.from(this.el.children).forEach((child) => {
      if (child.hasAttribute('slot')) return;
      if (child.tagName === 'UAI-CARD-HEADER') child.setAttribute('slot', 'header');
      if (child.tagName === 'UAI-CARD-FOOTER') child.setAttribute('slot', 'footer');
    });
  }

  private syncSlotFlags = (): void => {
    if (!this.el) return;
    this.routeLegacySubcomponents();
    this.hasMediaSlot = Boolean(this.el.querySelector('[slot="media"]'));
    this.hasIconSlot = Boolean(this.el.querySelector('[slot="icon"]'));
    this.hasHeaderSlot = Boolean(this.el.querySelector('[slot="header"]'));
    this.hasActionsSlot = Boolean(this.el.querySelector('[slot="actions"]'));
    this.hasFooterSlot = Boolean(this.el.querySelector('[slot="footer"]'));
  };

  private resolveSize(): UaiCardSize {
    const candidate = this.size ?? 'sm';
    if ((SIZES as readonly string[]).includes(candidate)) return candidate as UaiCardSize;
    warnLegacyValue('uai-card', 'size', candidate, 'sm');
    return 'sm';
  }

  render() {
    const size = this.resolveSize();
    const hasMedia = Boolean(this.imageSrc) || this.hasMediaSlot;
    const hasHeadingText = Boolean(this.heading && this.heading.trim());
    const hasDescriptionText = Boolean(this.description && this.description.trim());
    const showHeader = hasHeadingText || hasDescriptionText || this.hasIconSlot || this.hasHeaderSlot || this.hasActionsSlot;
    const showFooter = this.hasFooterSlot;

    const hostStyle: Record<string, string> = {};
    if (this.width) hostStyle.width = this.width;
    if (this.height) hostStyle.height = this.height;

    return (
      <Host style={hostStyle}>
        <div
          part="card"
          data-test={this.dataTest}
          class={{
            card: true,
            [`card--size-${size}`]: true,
            'card--has-header': showHeader,
            'card--has-footer': showFooter,
          }}
        >
          {hasMedia ? (
            <div class="card__media" part="media">
              {this.imageSrc ? <img class="card__image" src={this.imageSrc} alt={this.imageAlt ?? ''} /> : null}
              <slot name="media" onSlotchange={this.syncSlotFlags} />
            </div>
          ) : (
            <slot name="media" onSlotchange={this.syncSlotFlags} />
          )}

          {showHeader ? (
            <div
              class={{
                card__header: true,
                'card__header--with-actions': this.hasActionsSlot,
              }}
              part="header"
            >
              {this.hasIconSlot ? (
                <div class="card__icon">
                  <slot name="icon" onSlotchange={this.syncSlotFlags} />
                </div>
              ) : (
                <slot name="icon" onSlotchange={this.syncSlotFlags} />
              )}

              <div class="card__header-main">
                <slot name="header" onSlotchange={this.syncSlotFlags}>
                  {hasHeadingText && <p class="card__heading">{this.heading}</p>}
                  {hasDescriptionText && <p class="card__description">{this.description}</p>}
                </slot>
              </div>

              {this.hasActionsSlot ? (
                <div class="card__actions">
                  <slot name="actions" onSlotchange={this.syncSlotFlags} />
                </div>
              ) : (
                <slot name="actions" onSlotchange={this.syncSlotFlags} />
              )}
            </div>
          ) : (
            <div class="card__region--empty" hidden>
              <slot name="icon" onSlotchange={this.syncSlotFlags} />
              <slot name="header" onSlotchange={this.syncSlotFlags} />
              <slot name="actions" onSlotchange={this.syncSlotFlags} />
            </div>
          )}

          <div class="card__body" part="body">
            <slot onSlotchange={this.syncSlotFlags} />
          </div>

          {showFooter ? (
            <div class="card__footer" part="footer">
              <slot name="footer" onSlotchange={this.syncSlotFlags} />
            </div>
          ) : (
            <div class="card__region--empty" hidden>
              <slot name="footer" onSlotchange={this.syncSlotFlags} />
            </div>
          )}
        </div>
      </Host>
    );
  }
}
