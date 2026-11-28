import { Component, Element, Host, Prop, State, h } from '@stencil/core';
import { warnLegacyValue } from '../../utils/deprecation';

export type UaiSectionTitleHeadingTag = 'h2' | 'h3' | 'h4';

const HEADING_TAGS: readonly UaiSectionTitleHeadingTag[] = ['h2', 'h3', 'h4'];

/**
 * Semantic section header with heading, optional description, and optional trailing actions.
 * Use to introduce analytical or content blocks beneath `uai-page-header`; pair with `headingTag` matching document hierarchy;
 * avoid using `h1` here (reserve `h1` for the page title).
 *
 * @slot actions - Optional trailing actions.
 * @part container - The section header container.
 * @part heading - The semantic heading element.
 * @part description - The optional supporting description element.
 * @part actions - The trailing actions slot wrapper.
 */
@Component({
  tag: 'uai-section-title',
  styleUrl: 'uai-section-title.scss',
  shadow: true,
})
export class UaiSectionTitle {
  @Element() el!: HTMLElement;

  @State() hasActions = false;

  /**
   * Main text of the section heading.
   */
  @Prop() heading?: string = '';

  /**
   * Optional supporting description rendered below the heading when non-empty.
   */
  @Prop() description?: string = '';

  /**
   * HTML heading element tag (`h2`, `h3`, or `h4`) to preserve document outline hierarchy.
   */
  @Prop() headingTag?: UaiSectionTitleHeadingTag = 'h2';

  /**
   * Selector attribute applied to the container for automated tests.
   */
  @Prop() dataTest?: string = null;

  private childObserver?: MutationObserver;

  componentWillLoad(): void {
    this.syncActionsSlot();
  }

  connectedCallback(): void {
    if (typeof MutationObserver === 'undefined' || this.childObserver) return;
    // The actions wrapper is not rendered while empty, so `slotchange` cannot detect late-added actions.
    this.childObserver = new MutationObserver(this.syncActionsSlot);
    this.childObserver.observe(this.el, { childList: true, attributes: true, attributeFilter: ['slot'], subtree: true });
  }

  disconnectedCallback(): void {
    this.childObserver?.disconnect();
    this.childObserver = undefined;
  }

  private syncActionsSlot = (): void => {
    this.hasActions = Array.from(this.el.children).some((child) => child.getAttribute('slot') === 'actions');
  };

  private resolveHeadingTag(): UaiSectionTitleHeadingTag {
    const rawTag = String(this.headingTag ?? 'h2');
    if ((HEADING_TAGS as readonly string[]).includes(rawTag)) {
      return rawTag as UaiSectionTitleHeadingTag;
    }
    warnLegacyValue('uai-section-title', 'headingTag', rawTag, 'h2');
    return 'h2';
  }

  render(): HTMLElement {
    const HeadingTag = this.resolveHeadingTag();
    const hasDescription = Boolean(this.description && this.description.trim().length > 0);

    return (
      <Host>
        <div
          class="section-title"
          part="container"
          data-test={this.dataTest}
        >
          <div class="section-title__content">
            <HeadingTag class="section-title__heading" part="heading">
              {this.heading}
            </HeadingTag>
            {hasDescription && (
              <p class="section-title__description" part="description">
                {this.description}
              </p>
            )}
          </div>
          {this.hasActions && (
            <div class="section-title__actions" part="actions">
              <slot name="actions" onSlotchange={this.syncActionsSlot}></slot>
            </div>
          )}
        </div>
      </Host>
    );
  }
}
