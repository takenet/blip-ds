import { Component, Element, Event, EventEmitter, Host, Listen, Prop, State, Watch, h } from '@stencil/core';
import { UAI_TAB_ITEM_PROPS, UaiTabItemElement, UaiTabItemOptions } from '../uai-tab-item/uai-tab-item-interface';
import { isUaiIcon } from '../../globals/uai-icons';
import { warnLegacyValue, warnOnce } from '../../utils/deprecation';

interface Tab extends UaiTabItemOptions {
  element: UaiTabItemElement;
}

const LABELS = {
  pt_BR: { previous: 'Abas anteriores', next: 'Próximas abas' },
  en_US: { previous: 'Previous tabs', next: 'Next tabs' },
  es_ES: { previous: 'Pestañas anteriores', next: 'Pestañas siguientes' },
};

let nextGroupId = 0;
let nextPanelId = 0;

const supported = <T extends string>(prop: string, value: string, allowed: readonly T[], fallback: T): T => {
  if (allowed.some((option) => option === value)) return value as T;
  warnLegacyValue('uai-tab-group', prop, value, fallback);
  return fallback;
};

/**
 * Floating tabs with manual keyboard activation. Use for alternate views of related content;
 * pair with UaiTabItem; avoid using tabs as links to unrelated pages.
 *
 * @slot - UaiTabItem panels. Use for related views; pair with item labels; avoid mixing the deprecated bds-tabs API.
 */
@Component({
  tag: 'uai-tab-group',
  styleUrl: 'uai-tab-group.scss',
  scoped: true,
})
export class UaiTabGroup {
  @Element() el!: HTMLElement;

  @State() private items: Tab[] = [];
  @State() private canScrollPrev = false;
  @State() private canScrollNext = false;
  @State() private focusedItem?: UaiTabItemElement;

  private readonly groupId = `uai-tab-group-${nextGroupId++}`;
  private viewport?: HTMLElement;
  private track?: HTMLElement;
  private observer?: MutationObserver;
  private resizeObserver?: ResizeObserver;
  private synchronizing = false;
  private loaded = false;
  private revealPending = false;
  private focusPending = false;

  /** Enables scrolling of panel content. Use for constrained containers; pair with container height; avoid nested scrolling without need. */
  @Prop() contentScrollable = true;

  /** Header alignment: left, center or right. Use to fit the surrounding layout; pair with floating tabs; avoid unsupported values. */
  @Prop() align: 'left' | 'center' | 'right' = 'center';

  /** Previous scroll button data-test. Use for automation; pair with dtButtonNext; avoid using it as an accessible label. */
  @Prop() dtButtonPrev: string = null;

  /** Next scroll button data-test. Use for automation; pair with dtButtonPrev; avoid using it as an accessible label. */
  @Prop() dtButtonNext: string = null;

  /** Accessible tablist name. Use for distinguishing groups; pair with item labels; avoid unnamed groups when several are present. */
  @Prop({ attribute: 'aria-label' }) ariaLabel: string = null;

  /** Accessible tablist name references. Use for an existing heading; pair with that heading's ID; avoid broken references. */
  @Prop({ attribute: 'aria-labelledby' }) ariaLabelledBy: string = null;

  /** Scroll control language, pt_BR, en_US or es_ES. Use for built-in labels; pair with translated item labels; avoid translating consumer content implicitly. */
  @Prop() language: 'pt_BR' | 'en_US' | 'es_ES' = 'pt_BR';

  /** Activated item element, including reactivation. Use for controlled selection; pair with item.open; avoid expecting a string group ID. */
  @Event() uaiTabChange: EventEmitter<HTMLUaiTabItemElement>;

  /** Item element whose disabled header was activated. Use for unavailable-action feedback; pair with disable; avoid treating it as a disable prop change. */
  @Event() uaiTabDisabled: EventEmitter<HTMLUaiTabItemElement>;

  @Watch('align')
  protected alignmentChanged(): void {
    this.updateOverflow();
  }

  @Listen('uaiTabItemUpdate')
  protected itemUpdated(event: CustomEvent<{ prop: keyof UaiTabItemOptions }>): void {
    if (!this.isOwnItem(event.target) || !this.loaded || this.synchronizing) return;
    this.syncItems(event.detail.prop === 'open' && event.target.open ? event.target : undefined);
  }

  connectedCallback(): void {
    if (this.loaded) this.connectObservers();
  }

  componentDidLoad(): void {
    this.loaded = true;
    this.syncItems();
    this.connectObservers();
  }

  componentDidRender(): void {
    if (!this.loaded) return;
    this.updateOverflow();
    if (this.focusPending) {
      this.focusPending = false;
      this.focusTab(this.focusedItem);
    }
    if (this.revealPending) {
      this.revealPending = false;
      this.revealFocusedTab();
    }
  }

  disconnectedCallback(): void {
    this.observer?.disconnect();
    this.resizeObserver?.disconnect();
    window.removeEventListener('resize', this.updateOverflow);
  }

  private isOwnItem(target: EventTarget | null): target is UaiTabItemElement {
    return target instanceof HTMLElement && target.tagName === 'UAI-TAB-ITEM' && target.closest('uai-tab-group') === this.el;
  }

  private connectObservers(): void {
    this.observer?.disconnect();
    if (typeof MutationObserver === 'function') {
      this.observer = new MutationObserver((records) => {
        if (records.some((record) => record.type === 'childList' &&
          [...Array.from(record.addedNodes), ...Array.from(record.removedNodes)].some(
            (node) => node instanceof HTMLElement && (node.tagName === 'UAI-TAB-ITEM' || !!node.querySelector('uai-tab-item')),
          ))) this.syncItems();
      });
      this.observer.observe(this.el, { childList: true, subtree: true });
    }
    this.resizeObserver?.disconnect();
    if (typeof ResizeObserver === 'function') {
      this.resizeObserver = new ResizeObserver(this.updateOverflow);
      if (this.viewport) this.resizeObserver.observe(this.viewport);
      if (this.track) this.resizeObserver.observe(this.track);
    }
    window.addEventListener('resize', this.updateOverflow);
    this.syncItems();
    this.updateOverflow();
  }

  private snapshot(element: UaiTabItemElement): Tab {
    return {
      element, numberElement: element.numberElement, label: element.label, icon: element.icon,
      iconPosition: element.iconPosition, iconTheme: element.iconTheme, badge: element.badge,
      badgeShape: element.badgeShape, badgeColor: element.badgeColor, badgeIcon: element.badgeIcon,
      badgeAnimation: element.badgeAnimation, badgePosition: element.badgePosition, badgeNumber: element.badgeNumber,
      disable: element.disable, error: element.error, headerStyle: element.headerStyle,
      contentStyle: element.contentStyle, open: element.open, dataTest: element.dataTest,
      ariaLabel: element.ariaLabel, iconOnly: element.iconOnly,
    };
  }

  private syncItems(preferred?: UaiTabItemElement): void {
    if (this.synchronizing) return;
    this.synchronizing = true;
    const elements = Array.from(this.el.querySelectorAll<UaiTabItemElement>('uai-tab-item')).filter(
      (item) => this.isOwnItem(item),
    );
    const selected = preferred && elements.includes(preferred) && !preferred.disable ? preferred :
      elements.find((item) => item.open && !item.disable) || elements.find((item) => !item.disable);
    if (selected !== this.items.find((item) => item.open)?.element) this.revealPending = true;
    const hadFocus = this.el.contains(document.activeElement) &&
      document.activeElement?.getAttribute('role') === 'tab';
    const oldFocus = this.focusedItem;
    if (!this.focusedItem || !elements.includes(this.focusedItem) || this.focusedItem.disable) {
      this.focusedItem = selected;
    }
    elements.forEach((element, index) => {
      if (element.numberElement !== index) element.numberElement = index;
      if (element.open !== (element === selected)) element.open = element === selected;
      if (!element.id) element.id = `uai-tab-panel-${nextPanelId++}`;
      element.setAttribute('role', 'tabpanel');
      element.setAttribute('aria-labelledby', this.tabId(index));
      element.setAttribute('tabindex', '0');
      element.hidden = !element.open || element.disable;
    });
    const items = elements.map((element) => this.snapshot(element));
    if (items.length !== this.items.length || items.some((item, index) =>
      item.element !== this.items[index]?.element || UAI_TAB_ITEM_PROPS.some((prop) => item[prop] !== this.items[index][prop]),
    )) this.items = items;
    this.synchronizing = false;
    if (hadFocus && oldFocus !== this.focusedItem) this.focusPending = true;
  }

  private tabId(index: number): string {
    return `${this.groupId}-tab-${index}`;
  }

  private activate(item: Tab): void {
    if (item.element.disable) {
      this.uaiTabDisabled.emit(item.element);
      this.focusTab(this.focusedItem);
      return;
    }
    this.focusedItem = item.element;
    this.syncItems(item.element);
    this.uaiTabChange.emit(item.element);
  }

  private focusTab(element?: UaiTabItemElement): void {
    if (!element) return;
    this.focusedItem = element;
    const index = this.items.findIndex((item) => item.element === element);
    this.el.querySelector<HTMLButtonElement>(`#${this.tabId(index)}`)?.focus();
    this.revealFocusedTab();
  }

  private handleKeyDown(event: KeyboardEvent, item: Tab): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.activate(item);
      return;
    }
    const enabled = this.items.filter((tab) => !tab.disable);
    if (!enabled.length) return;
    const index = enabled.findIndex((tab) => tab.element === item.element);
    let target: Tab;
    switch (event.key) {
      case 'ArrowRight': target = enabled[(index + 1) % enabled.length]; break;
      case 'ArrowLeft': target = enabled[(index - 1 + enabled.length) % enabled.length]; break;
      case 'Home': target = enabled[0]; break;
      case 'End': target = enabled[enabled.length - 1]; break;
      default: return;
    }
    event.preventDefault();
    this.focusTab(target.element);
  }

  private updateOverflow = (): void => {
    if (!this.viewport) return;
    this.canScrollPrev = this.viewport.scrollLeft > 0;
    this.canScrollNext = Math.ceil(this.viewport.scrollLeft + this.viewport.clientWidth) < this.viewport.scrollWidth;
  };

  private scroll(direction: -1 | 1): void {
    if (!this.viewport) return;
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    this.viewport.scrollBy({ left: direction * this.viewport.clientWidth, behavior: reduce ? 'auto' : 'smooth' });
  }

  private revealFocusedTab(): void {
    if (!this.viewport || !this.focusedItem) return;
    const index = this.items.findIndex((item) => item.element === this.focusedItem);
    const tab = this.el.querySelector<HTMLElement>(`#${this.tabId(index)}`);
    if (!tab) return;
    const view = this.viewport.getBoundingClientRect();
    const rect = tab.getBoundingClientRect();
    if (rect.left < view.left) this.viewport.scrollLeft -= view.left - rect.left;
    else if (rect.right > view.right) this.viewport.scrollLeft += rect.right - view.right;
  }

  private styles(value: string): { [key: string]: string } {
    const style = document.createElement('div').style;
    style.cssText = value || '';
    const result: { [key: string]: string } = {};
    for (let index = 0; index < style.length; index++) {
      const property = style.item(index);
      result[property] = style.getPropertyValue(property);
    }
    return result;
  }

  private renderIcon(name: string, theme = 'outline') {
    if ((theme === 'outline' || theme === 'solid') && isUaiIcon(theme, name)) {
      return <uai-icon class="uai-tabs__icon" name={name} theme={theme} size="small" aria-hidden="true"></uai-icon>;
    }
    warnOnce('uai-tab-group', `legacy-icon:${theme}:${name}`, `Using legacy icon "${name}" (${theme}) for compatibility. Prefer a UAI icon name.`);
    const legacyTheme = theme === 'solid' ? 'solid' : 'outline';
    const type = theme === 'emoji' ? 'emoji' : theme === 'logos' ? 'logo' : 'icon';
    return <bds-icon class="uai-tabs__icon" name={name} theme={legacyTheme} type={type} size="small" aria-hidden="true"></bds-icon>;
  }

  private renderBadge(item: Tab) {
    const shape = supported('badgeShape', item.badgeShape, ['circle', 'square', 'triangle', 'triangle-reverse', 'polygon'], 'circle');
    return (
      <uai-badge class="uai-tabs__badge"
        shape={shape} color={item.badgeColor}
        number={item.badgeNumber} icon={item.badgeIcon} animation={item.badgeAnimation}>
      </uai-badge>
    );
  }

  render(): HTMLElement {
    const align = supported('align', this.align, ['left', 'center', 'right'], 'center');
    const language = supported('language', this.language, ['pt_BR', 'en_US', 'es_ES'], 'pt_BR');
    const labels = LABELS[language];
    const selected = this.items.find((item) => item.open);
    const overflow = this.canScrollPrev || this.canScrollNext;
    return (
      <Host>
        <div class="uai-tabs">
          <div class={{ 'uai-tabs__header': true, [`uai-tabs__header--${align}`]: true }} style={this.styles(selected?.headerStyle)}>
            <div class={{ 'uai-tabs__navigation': true, 'uai-tabs__navigation--overflow': overflow }}>
              {overflow && <uai-button variant="text" color="content" size="short" icon="arrow-left"
                aria-label={labels.previous} disabled={!this.canScrollPrev} dataTest={this.dtButtonPrev}
                onUaiClick={() => this.scroll(-1)}></uai-button>}
              <div class="uai-tabs__viewport" ref={(el) => this.viewport = el} onScroll={this.updateOverflow}>
                <div class="uai-tabs__list" role="tablist" aria-label={this.ariaLabel || undefined}
                  aria-labelledby={this.ariaLabelledBy || undefined} ref={(el) => this.track = el}>
                  {this.items.map((item, index) => {
                    if (!(item.ariaLabel || item.label)?.trim()) {
                      warnOnce('uai-tab-group', `unnamed:${item.element.id}`, 'Each tab requires label or aria-label, including icon-only tabs.');
                    }
                    return (
                      <button key={item.element.id} id={this.tabId(index)} type="button" role="tab"
                        aria-controls={item.element.id} aria-selected={String(item.open)} aria-disabled={String(item.disable)}
                        aria-label={item.ariaLabel || item.label || undefined}
                        aria-invalid={item.error ? 'true' : undefined}
                        tabIndex={!item.disable && this.focusedItem === item.element ? 0 : -1}
                        class={{ 'uai-tabs__tab': true, 'uai-tabs__tab--open': item.open,
                          'uai-tabs__tab--disabled': item.disable, 'uai-tabs__tab--error': item.error,
                          'uai-tabs__tab--icon-only': item.iconOnly }}
                        onFocus={() => { if (!item.disable) this.focusedItem = item.element; }}
                        onClick={() => this.activate(item)} onKeyDown={(event) => this.handleKeyDown(event, item)}>
                        {item.icon && item.iconPosition === 'left' && this.renderIcon(item.icon, item.iconTheme)}
                        {item.badge && item.badgePosition === 'left' && this.renderBadge(item)}
                        {!item.iconOnly && <uai-typo tag="span" variant="body-base" bold="medium" margin={false} noWrap={true}>
                          {item.label}
                        </uai-typo>}
                        {item.error && <uai-icon class="uai-tabs__icon" name="warning" size="small" aria-hidden="true"></uai-icon>}
                        {item.icon && item.iconPosition === 'right' && this.renderIcon(item.icon, item.iconTheme)}
                        {item.badge && item.badgePosition === 'right' && this.renderBadge(item)}
                      </button>
                    );
                  })}
                </div>
              </div>
              {overflow && <uai-button variant="text" color="content" size="short" icon="arrow-right"
                aria-label={labels.next} disabled={!this.canScrollNext} dataTest={this.dtButtonNext}
                onUaiClick={() => this.scroll(1)}></uai-button>}
            </div>
          </div>
          <div class={{ 'uai-tabs__content': true, 'uai-tabs__content--scrollable': this.contentScrollable }}
            style={this.styles(selected?.contentStyle)}>
            <slot onSlotchange={() => this.loaded && this.syncItems()}></slot>
          </div>
        </div>
      </Host>
    );
  }
}
