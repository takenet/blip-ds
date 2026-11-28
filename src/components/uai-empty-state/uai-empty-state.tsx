import { Component, Element, Host, Prop, State, h } from '@stencil/core';
import { warnLegacyValue } from '../../utils/deprecation';

export type UaiEmptyStateVariant = 'page' | 'inline';
export type UaiEmptyStateTone = 'neutral' | 'error';
export type UaiEmptyStateHeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

const VARIANTS: readonly UaiEmptyStateVariant[] = ['page', 'inline'];
const TONES: readonly UaiEmptyStateTone[] = ['neutral', 'error'];
const HEADING_TAGS: readonly UaiEmptyStateHeadingTag[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'];
const DEFAULT_ICON: Record<UaiEmptyStateTone, string> = { neutral: 'message-ballon', error: 'error' };

const supported = <T extends string>(prop: string, value: string, allowed: readonly T[], fallback: T): T => {
  if ((allowed as readonly string[]).includes(value)) return value as T;
  warnLegacyValue('uai-empty-state', prop, value, fallback);
  return fallback;
};

// A light child counts as content when it is an element or non-blank text.
const hasContent = (nodes: Node[]): boolean =>
  nodes.some((node) =>
    node.nodeType === Node.ELEMENT_NODE ? true : node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '',
  );

/**
 * Empty or error state of a page, panel, card or list: a decorative icon, a title, a short description and optional actions.
 * Use when a region has nothing to show or failed to load; pair with uai-button in the actions slot and uai-paper around a page state;
 * avoid it for loading (use a skeleton) and for transient feedback (use a toast).
 *
 * @slot - Rich description, such as text with a link. When filled, it replaces the description prop.
 * @slot actions - One or two uai-button (page: variant="outline" size="short"; inline: variant="text" size="short"). Hidden when empty.
 * @part icon-box - The circle around the icon.
 * @part heading - The title.
 * @part description - The description.
 * @part actions - The actions row.
 */
@Component({
  tag: 'uai-empty-state',
  styleUrl: 'uai-empty-state.scss',
  shadow: true,
})
export class UaiEmptyState {
  @Element() el!: HTMLElement;

  @State() private hasDescriptionSlot = false;
  @State() private hasActions = false;

  /** Density: 'page' for a page or panel, 'inline' for a narrow column, card or side list. Use the one that fits the region; avoid 'page' in narrow columns. */
  @Prop() variant?: UaiEmptyStateVariant = 'page';

  /** 'error' tints the icon with feedback-error and announces the state with role="alert". Use it for load failures; pair the title with what failed; avoid color alone to convey it. */
  @Prop() tone?: UaiEmptyStateTone = 'neutral';

  /** UAI icon name, always decorative. Use one that matches the situation; without it, 'message-ballon' (neutral) or 'error' (error) is used. Avoid icons that carry meaning the text does not. */
  @Prop() icon?: string = null;

  /** Visible title (required). Use a short sentence that says what happened, without a final period; avoid generic titles such as "Erro". */
  @Prop() heading?: string = null;

  /** Semantic element of the title; the look is always title-sm semibold. Use the level that fits the page outline; avoid choosing it by size. */
  @Prop() headingTag?: UaiEmptyStateHeadingTag = 'h2';

  /** Short supporting text. Use it to say what the person can do now; the default slot replaces it. Avoid long paragraphs. */
  @Prop() description?: string = null;

  /** Test selector on the host (data-test). Use for automation; pair with semantic queries. Avoid styling by it. */
  @Prop() dataTest?: string = null;

  componentWillLoad(): void {
    this.readSlots();
  }

  private readSlots = (): void => {
    const children = Array.from(this.el.childNodes);
    this.hasActions = children.some(
      (node) => node.nodeType === Node.ELEMENT_NODE && (node as HTMLElement).getAttribute('slot') === 'actions',
    );
    this.hasDescriptionSlot = hasContent(
      children.filter((node) => node.nodeType !== Node.ELEMENT_NODE || !(node as HTMLElement).hasAttribute('slot')),
    );
  };

  render(): HTMLElement {
    const variant = supported('variant', this.variant, VARIANTS, 'page');
    const tone = supported('tone', this.tone, TONES, 'neutral');
    const headingTag = supported('headingTag', this.headingTag, HEADING_TAGS, 'h2');
    const hasDescription = this.hasDescriptionSlot || !!this.description;

    return (
      <Host
        class={{ [`empty-state--${variant}`]: true, [`empty-state--${tone}`]: true }}
        role={tone === 'error' ? 'alert' : undefined}
        data-test={this.dataTest}
      >
        <div class="empty-state__icon-box" part="icon-box" aria-hidden="true">
          <uai-icon class="empty-state__icon" name={this.icon || DEFAULT_ICON[tone]}></uai-icon>
        </div>
        {this.heading && (
          <uai-typo
            class="empty-state__heading"
            part="heading"
            tag={headingTag}
            variant="title-sm"
            bold="semibold"
            margin={false}
          >
            {this.heading}
          </uai-typo>
        )}
        <uai-typo
          class="empty-state__description"
          part="description"
          tag="p"
          variant="body-base"
          hidden={!hasDescription}
        >
          {/* Not slot fallback content: blank text between tags is assigned to the slot and would hide the fallback. */}
          {!this.hasDescriptionSlot && this.description}
          <slot onSlotchange={this.readSlots}></slot>
        </uai-typo>
        <div class="empty-state__actions" part="actions" hidden={!this.hasActions}>
          <slot name="actions" onSlotchange={this.readSlots}></slot>
        </div>
      </Host>
    );
  }
}
