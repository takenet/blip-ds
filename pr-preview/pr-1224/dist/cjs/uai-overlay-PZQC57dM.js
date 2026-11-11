'use strict';

/**
 * Internal overlay primitive (w0-primitivas-internas). Opens a floating panel next to its trigger in the top layer
 * (Popover API, with a `position: fixed` fallback), keeps it inside the viewport, follows scroll and resize, and closes
 * it with Escape, a click outside or when the trigger leaves the visible area. Not a public component: listbox, menu,
 * datepicker, tooltip and other UAI components build on it. The panel must include the `uai-overlay-panel` mixin,
 * which provides the spacing/2xs gap, the spacing/xs viewport margin and the duration/moderate fade.
 */
const OPEN_CLASS = 'uai-overlay--open';
const clamp = (value, min, max) => Math.min(Math.max(value, min), Math.max(min, max));
function computeOverlayLayout(input) {
    const { trigger, panel, viewport, gap, margin } = input;
    const maxWidth = Math.max(0, viewport.width - 2 * margin);
    const minWidth = input.matchTriggerWidth ? Math.min(trigger.width, maxWidth) : 0;
    const width = clamp(panel.width, minWidth, maxWidth);
    const below = viewport.height - trigger.bottom - gap - margin;
    const above = trigger.top - gap - margin;
    const side = panel.height > below && above > below ? 'top' : 'bottom';
    const maxHeight = Math.max(0, side === 'top' ? above : below);
    const height = Math.min(panel.height, maxHeight);
    const top = side === 'top' ? trigger.top - gap - height : trigger.bottom + gap;
    const inRightHalf = trigger.left + trigger.width / 2 > viewport.width / 2;
    const fitsFromStart = trigger.left + width <= viewport.width - margin;
    const align = inRightHalf || !fitsFromStart ? 'end' : 'start';
    const preferredLeft = align === 'end' ? trigger.right - width : trigger.left;
    const left = clamp(preferredLeft, margin, viewport.width - margin - width);
    return { top, left, minWidth, maxWidth, maxHeight, side, align };
}
const supportsPopover = () => typeof HTMLElement !== 'undefined' && 'popover' in HTMLElement.prototype;
// Resolves a length custom property (rem or px) set by the uai-overlay-panel mixin.
function readLength(element, property) {
    const value = getComputedStyle(element).getPropertyValue(property).trim();
    const amount = parseFloat(value);
    if (Number.isNaN(amount))
        return 0;
    if (value.endsWith('rem'))
        return amount * parseFloat(getComputedStyle(document.documentElement).fontSize);
    return amount;
}
// Open overlays, oldest first. Escape and outside clicks act on the most recent one.
const stack = [];
function onKeydown(event) {
    if (event.key !== 'Escape' || !stack.length)
        return;
    event.stopPropagation();
    event.preventDefault();
    stack[stack.length - 1].close('escape');
}
function onPointerdown(event) {
    const path = event.composedPath();
    for (const overlay of [...stack].reverse()) {
        if (overlay.contains(path))
            break;
        overlay.close('outside');
    }
}
function listen(active) {
    const method = active ? 'addEventListener' : 'removeEventListener';
    document[method]('keydown', onKeydown, true);
    document[method]('pointerdown', onPointerdown, true);
}
class UaiOverlay {
    constructor(options) {
        this.popover = supportsPopover();
        this.frame = 0;
        this.opened = false;
        this.schedule = () => {
            cancelAnimationFrame(this.frame);
            this.frame = requestAnimationFrame(() => this.update());
        };
        this.options = options;
        if (this.popover)
            options.panel.setAttribute('popover', 'manual');
    }
    get isOpen() {
        return this.opened;
    }
    open() {
        if (this.opened)
            return;
        const { panel, trigger } = this.options;
        this.opened = true;
        panel.classList.add(OPEN_CLASS);
        if (this.popover)
            panel.showPopover();
        this.update();
        if (!stack.length)
            listen(true);
        stack.push(this);
        window.addEventListener('scroll', this.schedule, { capture: true, passive: true });
        window.addEventListener('resize', this.schedule, { passive: true });
        if (typeof IntersectionObserver !== 'undefined') {
            this.observer = new IntersectionObserver((entries) => {
                if (entries.some((entry) => !entry.isIntersecting))
                    this.close('trigger-hidden');
            });
            this.observer.observe(trigger);
        }
    }
    close(reason = 'api') {
        var _a;
        if (!this.opened)
            return;
        const { panel, trigger, onClose } = this.options;
        this.opened = false;
        stack.splice(stack.indexOf(this), 1);
        if (!stack.length)
            listen(false);
        window.removeEventListener('scroll', this.schedule, { capture: true });
        window.removeEventListener('resize', this.schedule);
        cancelAnimationFrame(this.frame);
        (_a = this.observer) === null || _a === void 0 ? void 0 : _a.disconnect();
        this.observer = undefined;
        panel.classList.remove(OPEN_CLASS);
        if (this.popover && panel.matches(':popover-open'))
            panel.hidePopover();
        if (reason === 'escape')
            trigger.focus({ preventScroll: true });
        onClose === null || onClose === void 0 ? void 0 : onClose(reason);
    }
    toggle() {
        if (this.opened)
            this.close();
        else
            this.open();
    }
    /** Recomputes the position, for example after the panel content changes. */
    update() {
        if (!this.opened)
            return;
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
        });
        style.top = `${layout.top}px`;
        style.left = `${layout.left}px`;
        style.minWidth = `${layout.minWidth}px`;
        style.maxWidth = `${layout.maxWidth}px`;
        style.maxHeight =
            maxHeight === 'none' ? `${layout.maxHeight}px` : `min(${layout.maxHeight}px, ${maxHeight})`;
        panel.dataset.side = layout.side;
        panel.dataset.align = layout.align;
    }
    /** True when the event path goes through this overlay's panel or trigger. */
    contains(path) {
        return path.includes(this.options.panel) || path.includes(this.options.trigger);
    }
    destroy() {
        this.close();
        this.options.panel.removeAttribute('popover');
    }
}

exports.UaiOverlay = UaiOverlay;
