/**
 * Internal overlay primitive (w0-primitivas-internas). Opens a floating panel next to its trigger in the top layer
 * (Popover API, with a `position: fixed` fallback), keeps it inside the viewport, follows scroll and resize, and closes
 * it with Escape, a click outside or when the trigger leaves the visible area. Not a public component: listbox, menu,
 * datepicker, tooltip and other UAI components build on it. The panel must include the `uai-overlay-panel` mixin,
 * which provides the spacing/2xs gap, the spacing/xs viewport margin and the duration/moderate fade.
 */

export type UaiOverlaySide = 'top' | 'bottom';
export type UaiOverlayAlign = 'start' | 'end';

export type UaiOverlayCloseReason = 'escape' | 'outside' | 'trigger-hidden' | 'api';

export interface UaiOverlayRect {
  top: number;
  right: number;
  bottom: number;
  left: number;
  width: number;
  height: number;
}

export interface UaiOverlayLayoutInput {
  trigger: UaiOverlayRect;
  panel: { width: number; height: number };
  viewport: { width: number; height: number };
  /** Distance between trigger and panel (spacing/2xs). */
  gap: number;
  /** Minimum distance between panel and viewport edges (spacing/xs). */
  margin: number;
  /** The panel is at least as wide as the trigger. */
  matchTriggerWidth?: boolean;
  /** Preferred side. The panel still flips when it does not fit and the other side has more room. */
  side?: UaiOverlaySide;
  /** Preferred alignment with the trigger. The panel still moves to the other edge when it would leave the viewport. */
  align?: UaiOverlayAlign;
}

export interface UaiOverlayLayout {
  top: number;
  left: number;
  minWidth: number;
  maxWidth: number;
  maxHeight: number;
  side: UaiOverlaySide;
  align: UaiOverlayAlign;
}

export interface UaiOverlayOptions {
  trigger: HTMLElement;
  panel: HTMLElement;
  matchTriggerWidth?: boolean;
  /** Preferred side; without it the side is chosen by the room available. */
  side?: UaiOverlaySide;
  /** Preferred alignment; without it the panel aligns to the half of the viewport the trigger is in. */
  align?: UaiOverlayAlign;
  onClose?: (reason: UaiOverlayCloseReason) => void;
}

const OPEN_CLASS = 'uai-overlay--open';

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), Math.max(min, max));

export function computeOverlayLayout(input: UaiOverlayLayoutInput): UaiOverlayLayout {
  const { trigger, panel, viewport, gap, margin } = input;
  const maxWidth = Math.max(0, viewport.width - 2 * margin);
  const minWidth = input.matchTriggerWidth ? Math.min(trigger.width, maxWidth) : 0;
  const width = clamp(panel.width, minWidth, maxWidth);

  const below = viewport.height - trigger.bottom - gap - margin;
  const above = trigger.top - gap - margin;
  const preferredSide = input.side;
  let side: UaiOverlaySide = panel.height > below && above > below ? 'top' : 'bottom';
  if (preferredSide) {
    const room = preferredSide === 'top' ? above : below;
    const otherRoom = preferredSide === 'top' ? below : above;
    const other: UaiOverlaySide = preferredSide === 'top' ? 'bottom' : 'top';
    side = panel.height <= room || room >= otherRoom ? preferredSide : other;
  }
  const maxHeight = Math.max(0, side === 'top' ? above : below);
  const height = Math.min(panel.height, maxHeight);
  const top = side === 'top' ? trigger.top - gap - height : trigger.bottom + gap;

  const inRightHalf = trigger.left + trigger.width / 2 > viewport.width / 2;
  const fitsFromStart = trigger.left + width <= viewport.width - margin;
  const fitsFromEnd = trigger.right - width >= margin;
  let align: UaiOverlayAlign = inRightHalf || !fitsFromStart ? 'end' : 'start';
  if (input.align) {
    const preferredFits = input.align === 'start' ? fitsFromStart : fitsFromEnd;
    const otherFits = input.align === 'start' ? fitsFromEnd : fitsFromStart;
    align = preferredFits || !otherFits ? input.align : input.align === 'start' ? 'end' : 'start';
  }
  const preferredLeft = align === 'end' ? trigger.right - width : trigger.left;
  const left = clamp(preferredLeft, margin, viewport.width - margin - width);

  return { top, left, minWidth, maxWidth, maxHeight, side, align };
}

export const supportsPopover = () => typeof HTMLElement !== 'undefined' && 'popover' in HTMLElement.prototype;

// Resolves a length custom property (rem or px) set by the uai-overlay-panel mixin.
function readLength(element: HTMLElement, property: string): number {
  const value = getComputedStyle(element).getPropertyValue(property).trim();
  const amount = parseFloat(value);
  if (Number.isNaN(amount)) return 0;
  if (value.endsWith('rem')) return amount * parseFloat(getComputedStyle(document.documentElement).fontSize);
  return amount;
}

// Open overlays, oldest first. Escape and outside clicks act on the most recent one.
const stack: UaiOverlay[] = [];

function onKeydown(event: KeyboardEvent) {
  if (event.key !== 'Escape' || !stack.length) return;
  event.stopPropagation();
  event.preventDefault();
  stack[stack.length - 1].close('escape');
}

function onPointerdown(event: Event) {
  const path = event.composedPath();
  for (const overlay of [...stack].reverse()) {
    if (overlay.contains(path)) break;
    overlay.close('outside');
  }
}

function listen(active: boolean) {
  const method = active ? 'addEventListener' : 'removeEventListener';
  document[method]('keydown', onKeydown, true);
  document[method]('pointerdown', onPointerdown, true);
}

export class UaiOverlay {
  private readonly options: UaiOverlayOptions;
  private readonly popover = supportsPopover();
  private observer?: IntersectionObserver;
  private frame = 0;
  private opened = false;

  constructor(options: UaiOverlayOptions) {
    this.options = options;
    if (this.popover) options.panel.setAttribute('popover', 'manual');
  }

  get isOpen() {
    return this.opened;
  }

  open() {
    if (this.opened) return;
    const { panel, trigger } = this.options;
    this.opened = true;
    panel.classList.add(OPEN_CLASS);
    if (this.popover) panel.showPopover();
    this.update();

    if (!stack.length) listen(true);
    stack.push(this);
    window.addEventListener('scroll', this.schedule, { capture: true, passive: true });
    window.addEventListener('resize', this.schedule, { passive: true });
    if (typeof IntersectionObserver !== 'undefined') {
      this.observer = new IntersectionObserver((entries) => {
        if (entries.some((entry) => !entry.isIntersecting)) this.close('trigger-hidden');
      });
      this.observer.observe(trigger);
    }
  }

  close(reason: UaiOverlayCloseReason = 'api') {
    if (!this.opened) return;
    const { panel, trigger, onClose } = this.options;
    this.opened = false;
    stack.splice(stack.indexOf(this), 1);
    if (!stack.length) listen(false);
    window.removeEventListener('scroll', this.schedule, { capture: true });
    window.removeEventListener('resize', this.schedule);
    cancelAnimationFrame(this.frame);
    this.observer?.disconnect();
    this.observer = undefined;

    panel.classList.remove(OPEN_CLASS);
    if (this.popover && panel.matches(':popover-open')) panel.hidePopover();
    if (reason === 'escape') trigger.focus({ preventScroll: true });
    onClose?.(reason);
  }

  toggle() {
    if (this.opened) this.close();
    else this.open();
  }

  /** Recomputes the position, for example after the panel content changes. */
  update() {
    if (!this.opened) return;
    const { panel, trigger, matchTriggerWidth } = this.options;
    const style = panel.style;
    // Measure the natural size from the viewport origin, without the limits of the previous position.
    style.minWidth = style.maxWidth = style.maxHeight = '';
    const maxHeight = getComputedStyle(panel).maxHeight;
    style.top = style.left = '0';
    const size = panel.getBoundingClientRect();
    const layout = computeOverlayLayout({
      trigger: trigger.getBoundingClientRect(),
      panel: { width: size.width, height: size.height },
      viewport: { width: document.documentElement.clientWidth, height: document.documentElement.clientHeight },
      gap: readLength(panel, '--uai-overlay-gap'),
      margin: readLength(panel, '--uai-overlay-margin'),
      matchTriggerWidth,
      side: this.options.side,
      align: this.options.align,
    });
    style.top = `${layout.top}px`;
    style.left = `${layout.left}px`;
    style.minWidth = `${layout.minWidth}px`;
    style.maxWidth = `${layout.maxWidth}px`;
    style.maxHeight = maxHeight === 'none' ? `${layout.maxHeight}px` : `min(${layout.maxHeight}px, ${maxHeight})`;
    panel.dataset.side = layout.side;
    panel.dataset.align = layout.align;
  }

  /** Changes the preferred side and alignment, and repositions when open. `undefined` goes back to automatic. */
  setPlacement(placement: { side?: UaiOverlaySide; align?: UaiOverlayAlign }) {
    this.options.side = placement.side;
    this.options.align = placement.align;
    this.update();
  }

  /** True when the event path goes through this overlay's panel or trigger. */
  contains(path: EventTarget[]) {
    return path.includes(this.options.panel) || path.includes(this.options.trigger);
  }

  destroy() {
    this.close();
    this.options.panel.removeAttribute('popover');
  }

  private readonly schedule = () => {
    cancelAnimationFrame(this.frame);
    this.frame = requestAnimationFrame(() => this.update());
  };
}
