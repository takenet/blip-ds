import { Component, Element, Host, Listen, Prop, State, h } from '@stencil/core';
import { warnLegacyValue } from '../../utils/deprecation';
import { supportsPopover } from '../../utils/uai-overlay';
import {
  UAI_TOAST_POSITIONS,
  UaiToastPosition,
  isCreatedContainer,
  isModal,
  isOpenModal,
  toastContainerFor,
} from '../../utils/uai-toast';

type AnnouncedToast = HTMLElement & { heading?: string; message?: string; variant?: string };
type StackedToast = HTMLElement & { open?: boolean };

// How many toasts show in the collapsed stack; the ones behind them wait hidden until the front ones close.
const VISIBLE = 3;

/**
 * Stack of toasts fixed to a corner or edge of the screen. It opens in the top layer (Popover API), so the toasts
 * stay above modals, and announces each toast that opens to screen readers. With more than one toast, the older ones
 * stack behind the newest, peeking out and scaled down; the pointer or the focus on the stack unfolds it, and the
 * time of every toast pauses while it is unfolded.
 * Use one per position inside UaiThemeProvider; `uai-toast` `show()` creates it when the page has none.
 * Avoid placing other content in it.
 *
 * @slot - The uai-toast elements.
 * @part stack - The list that stacks the toasts.
 */
@Component({
  tag: 'uai-toast-container',
  styleUrl: 'uai-toast-container.scss',
  shadow: true,
})
export class UaiToastContainer {
  @Element() el!: HTMLElement;

  private modalObserver?: MutationObserver;
  private politeRegion?: HTMLElement;
  private assertiveRegion?: HTMLElement;
  private stack?: HTMLElement;
  private resizeObserver?: ResizeObserver;
  private frame = 0;

  /** The stack is unfolded, by the pointer or the focus on it. */
  @State() expanded = false;

  /** Where the toasts are stacked. Use bottom positions for feedback of an action; avoid two containers in one position. */
  @Prop({ reflect: true }) position?: UaiToastPosition = 'bottom-left';

  /** Accessible name of the notifications region. Use a translated label; avoid leaving it generic. */
  @Prop() label?: string = 'Notificações';

  componentDidLoad(): void {
    this.raise();
    this.watchModal();
    if (typeof ResizeObserver !== 'undefined') this.resizeObserver = new ResizeObserver(() => this.scheduleLayout());
    this.layout();
  }

  disconnectedCallback(): void {
    if (supportsPopover() && this.el.matches(':popover-open')) this.el.hidePopover();
    this.modalObserver?.disconnect();
    this.modalObserver = undefined;
    this.resizeObserver?.disconnect();
    cancelAnimationFrame(this.frame);
  }

  componentDidRender(): void {
    this.layout();
  }

  // ---- stack -------------------------------------------------------------------------------

  private get openToasts(): StackedToast[] {
    return Array.from(this.el.children).filter(
      (child): child is StackedToast => child.tagName.toLowerCase().endsWith('uai-toast') && !!(child as StackedToast).open,
    );
  }

  private scheduleLayout = (): void => {
    cancelAnimationFrame(this.frame);
    this.frame = requestAnimationFrame(() => this.layout());
  };

  // Places each open toast by its index from the newest (0): how far it is from the edge when unfolded (the toasts in
  // front of it and the gaps), whether its content shows, and whether it shows at all when the stack is folded. The
  // stack takes the height of what shows, so the pointer stays on it as it unfolds.
  private layout = (): void => {
    if (!this.stack) return;
    const toasts = this.openToasts.reverse();
    const gap = this.length('--toast-stack-gap');
    const peek = this.length('--toast-stack-peek');
    let offset = 0;
    toasts.forEach((toast, index) => {
      this.resizeObserver?.observe(toast);
      const style = toast.style;
      style.setProperty('--toast-index', String(index));
      style.setProperty('--toast-offset', `${offset}px`);
      style.setProperty('--toast-content-opacity', index === 0 || this.expanded ? '1' : '0');
      style.setProperty('--toast-shown', index < VISIBLE || this.expanded ? '1' : '0');
      toast.toggleAttribute('data-behind', index > 0 && !this.expanded);
      offset += toast.offsetHeight + gap;
    });
    const front = toasts[0]?.offsetHeight ?? 0;
    const height = !toasts.length
      ? 0
      : this.expanded
        ? offset - gap
        : front + peek * (Math.min(toasts.length, VISIBLE) - 1);
    this.stack.style.height = `${height}px`;
  };

  // A length custom property (rem or px) of the container, in pixels.
  private length(property: string): number {
    const value = getComputedStyle(this.el).getPropertyValue(property).trim();
    const amount = parseFloat(value);
    if (Number.isNaN(amount)) return 0;
    if (value.endsWith('rem')) return amount * parseFloat(getComputedStyle(document.documentElement).fontSize);
    return amount;
  }

  private setExpanded(expanded: boolean): void {
    if (this.expanded === expanded) return;
    // One toast has nothing to unfold.
    this.expanded = expanded && this.openToasts.length > 1;
  }

  private onPointerEnter = (): void => this.setExpanded(true);

  private onPointerLeave = (): void => {
    if (!this.el.matches(':focus-within')) this.setExpanded(false);
  };

  private onFocusOut = (event: FocusEvent): void => {
    if (!this.el.contains(event.relatedTarget as Node) && !this.el.matches(':hover')) this.setExpanded(false);
  };

  @Listen('uaiToastClose')
  protected handleToastClose(): void {
    if (this.openToasts.length <= 1) this.expanded = false;
    this.scheduleLayout();
  }

  // A container that show() created inside an open modal hands its open toasts over to the page when the modal closes,
  // so a toast shown right before closing the modal stays on the screen.
  private watchModal(): void {
    const parent = this.el.parentElement;
    if (!isCreatedContainer(this.el) || !isModal(parent)) return;
    // The modal can close before the container loads (React closes it in the same click).
    if (!isOpenModal(parent)) {
      this.handOver(parent);
      return;
    }
    // uai-modal and dialog reflect `open`; closing by the prop emits no event, so the attribute is observed.
    this.modalObserver = new MutationObserver(() => {
      if (!isOpenModal(parent)) this.handOver(parent);
    });
    this.modalObserver.observe(parent, { attributes: true, attributeFilter: ['open'] });
  }

  private handOver(modal: HTMLElement): void {
    this.modalObserver?.disconnect();
    this.modalObserver = undefined;
    const open = Array.from(this.el.children).filter((toast) => (toast as HTMLElement & { open?: boolean }).open);
    if (open.length) {
      const target = toastContainerFor(this.position, modal);
      for (const toast of open) target.appendChild(toast);
    }
    this.el.remove();
  }

  // A toast that opens moves the stack to the top of the top layer, above a modal opened after it, and is announced.
  @Listen('uaiToastOpen')
  protected handleToastOpen(event: CustomEvent<void>): void {
    this.raise();
    this.announce(event.target as AnnouncedToast);
    this.scheduleLayout();
  }

  private raise(): void {
    if (!supportsPopover() || !this.el.isConnected) return;
    // Set here too: a toast can open before the first render of the container applies the attribute.
    if (this.el.getAttribute('popover') !== 'manual') this.el.setAttribute('popover', 'manual');
    if (this.el.matches(':popover-open')) this.el.hidePopover();
    this.el.showPopover();
  }

  // Live regions only announce changes, so the text of the toast is written into a region that already exists.
  private announce(toast: AnnouncedToast): void {
    const urgent = toast.variant === 'warning' || toast.variant === 'error';
    const region = urgent ? this.assertiveRegion : this.politeRegion;
    if (!region) return;
    const text = [toast.heading, toast.message, toast.textContent]
      .map((part) => (part || '').trim())
      .filter(Boolean)
      .join('. ');
    region.textContent = '';
    requestAnimationFrame(() => requestAnimationFrame(() => (region.textContent = text)));
  }

  render(): HTMLElement {
    const known = UAI_TOAST_POSITIONS.find((candidate) => candidate === this.position);
    if (!known) warnLegacyValue('uai-toast-container', 'position', this.position, 'bottom-left');
    const position = known || 'bottom-left';

    return (
      <Host
        popover={supportsPopover() ? 'manual' : undefined}
        role="region"
        aria-label={this.label}
        class={{ [`uai-toast-container--${position}`]: true, 'uai-toast-container--expanded': this.expanded }}
        onFocusin={() => this.setExpanded(true)}
        onFocusout={this.onFocusOut}
      >
        <div
          class="stack"
          part="stack"
          ref={(stack) => (this.stack = stack)}
          onPointerEnter={this.onPointerEnter}
          onPointerLeave={this.onPointerLeave}
        >
          <slot onSlotchange={this.scheduleLayout}></slot>
        </div>
        <div class="live" aria-live="polite" ref={(el) => (this.politeRegion = el)}></div>
        <div class="live" aria-live="assertive" ref={(el) => (this.assertiveRegion = el)}></div>
      </Host>
    );
  }
}
