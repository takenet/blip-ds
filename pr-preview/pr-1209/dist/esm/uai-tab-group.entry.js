import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-CkbvGS8Z.js';
import { i as isUaiIcon } from './uai-icons-BU-ELWpE.js';
import { w as warnOnce } from './deprecation-B4L0JRQZ.js';

const UAI_TAB_ITEM_PROPS = [
    'numberElement', 'label', 'icon', 'iconPosition', 'iconTheme', 'badge', 'badgeShape', 'badgeColor',
    'badgeIcon', 'badgeAnimation', 'badgePosition', 'badgeNumber', 'disable', 'error', 'headerStyle',
    'contentStyle', 'open', 'dataTest', 'ariaLabel', 'iconOnly',
];

const uaiTabGroupCss = () => `.sc-uai-tab-group-h{display:block;width:100%;min-width:0}.uai-tabs.sc-uai-tab-group{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;min-width:0;height:100%}.uai-tabs__header.sc-uai-tab-group{display:-ms-flexbox;display:flex;min-width:0;-ms-flex-negative:0;flex-shrink:0}.uai-tabs__header--left.sc-uai-tab-group{-ms-flex-pack:start;justify-content:flex-start}.uai-tabs__header--center.sc-uai-tab-group{-ms-flex-pack:center;justify-content:center}.uai-tabs__header--right.sc-uai-tab-group{-ms-flex-pack:end;justify-content:flex-end}.uai-tabs__navigation.sc-uai-tab-group{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;min-width:0;max-width:100%;padding:var(--uai-spacing-2xs, 0.25rem);border-radius:var(--uai-radius-xl, 1rem);background:var(--uai-surface-contrast, #e4e6e7)}.uai-tabs__navigation--overflow.sc-uai-tab-group{width:100%}.uai-tabs__navigation.sc-uai-tab-group>uai-button.sc-uai-tab-group{-ms-flex-negative:0;flex-shrink:0}.uai-tabs__viewport.sc-uai-tab-group{min-width:0;padding:var(--uai-spacing-xs, 0.5rem);margin:calc(-1 * var(--uai-spacing-xs, 0.5rem));overflow:auto hidden;scrollbar-width:none}.uai-tabs__viewport.sc-uai-tab-group::-webkit-scrollbar{display:none}.uai-tabs__list.sc-uai-tab-group{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-2xs, 0.25rem);width:-webkit-max-content;width:-moz-max-content;width:max-content}.uai-tabs__tab.sc-uai-tab-group{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-ms-flex-negative:0;flex-shrink:0;gap:var(--uai-spacing-xs, 0.5rem);-webkit-box-sizing:border-box;box-sizing:border-box;min-height:var(--uai-control-height-short, 2rem);margin:0;padding:var(--uai-spacing-2xs, 0.25rem) var(--uai-spacing-sm, 0.75rem);border:0;border-radius:var(--uai-radius-lg, 0.75rem);background:transparent;color:var(--uai-content-secondary, #5f676d);white-space:nowrap;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.uai-tabs__tab.sc-uai-tab-group{-webkit-transition:none;transition:none}}.uai-tabs__tab.sc-uai-tab-group:focus-visible{outline:var(--uai-border-width-thick, 2px) solid var(--uai-border-ring, #242729);outline-offset:var(--uai-spacing-3xs, 0.125rem)}.uai-tabs__tab.sc-uai-tab-group>uai-typo.sc-uai-tab-group{--uai-typo-color:currentColor}.uai-tabs__tab.sc-uai-tab-group:hover:not([aria-disabled=true]){color:var(--uai-content-primary, #242729)}.uai-tabs__tab.sc-uai-tab-group:active:not([aria-disabled=true]),.uai-tabs__tab--open.sc-uai-tab-group{background:var(--uai-action-outline-default, #ffffff);color:var(--uai-content-primary, #242729);-webkit-box-shadow:var(--uai-elevation-tab-active, 0px 1px 4px 0px rgba(0, 0, 0, 0.1));box-shadow:var(--uai-elevation-tab-active, 0px 1px 4px 0px rgba(0, 0, 0, 0.1))}.uai-tabs__tab--error.sc-uai-tab-group:not([aria-disabled=true]){color:var(--uai-feedback-error, #cf0022)}.uai-tabs__tab--disabled.sc-uai-tab-group{color:var(--uai-content-disabled, #848e94);cursor:not-allowed}.uai-tabs__tab--icon-only.sc-uai-tab-group{min-width:var(--uai-control-height-short, 2rem);padding:var(--uai-spacing-2xs, 0.25rem)}.uai-tabs__icon.sc-uai-tab-group{-ms-flex-negative:0;flex-shrink:0;pointer-events:none}.uai-tabs__content.sc-uai-tab-group{min-height:0;height:100%}.uai-tabs__content--scrollable.sc-uai-tab-group{overflow:auto}.uai-tabs__badge.sc-uai-tab-group{-ms-flex-negative:0;flex-shrink:0}@media (forced-colors: active){.uai-tabs__tab.sc-uai-tab-group{border:var(--uai-border-width-default, 1px) solid ButtonText}.uai-tabs__tab--open.sc-uai-tab-group{border-color:Highlight;border-style:double}.uai-tabs__tab--disabled.sc-uai-tab-group{color:GrayText}}`;

const LABELS = {
    pt_BR: { previous: 'Abas anteriores', next: 'Próximas abas' },
    en_US: { previous: 'Previous tabs', next: 'Next tabs' },
    es_ES: { previous: 'Pestañas anteriores', next: 'Pestañas siguientes' },
};
let nextGroupId = 0;
let nextPanelId = 0;
const supported = (prop, value, allowed, fallback) => {
    if (allowed.some((option) => option === value))
        return value;
    return fallback;
};
const UaiTabGroup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.uaiTabChange = createEvent(this, "uaiTabChange");
        this.uaiTabDisabled = createEvent(this, "uaiTabDisabled");
        this.items = [];
        this.canScrollPrev = false;
        this.canScrollNext = false;
        this.groupId = `uai-tab-group-${nextGroupId++}`;
        this.synchronizing = false;
        this.loaded = false;
        this.revealPending = false;
        this.focusPending = false;
        /** Enables scrolling of panel content. Use for constrained containers; pair with container height; avoid nested scrolling without need. */
        this.contentScrollable = true;
        /** Header alignment: left, center or right. Use to fit the surrounding layout; pair with floating tabs; avoid unsupported values. */
        this.align = 'center';
        /** Previous scroll button data-test. Use for automation; pair with dtButtonNext; avoid using it as an accessible label. */
        this.dtButtonPrev = null;
        /** Next scroll button data-test. Use for automation; pair with dtButtonPrev; avoid using it as an accessible label. */
        this.dtButtonNext = null;
        /** Accessible tablist name. Use for distinguishing groups; pair with item labels; avoid unnamed groups when several are present. */
        this.ariaLabel = null;
        /** Accessible tablist name references. Use for an existing heading; pair with that heading's ID; avoid broken references. */
        this.ariaLabelledBy = null;
        /** Scroll control language, pt_BR, en_US or es_ES. Use for built-in labels; pair with translated item labels; avoid translating consumer content implicitly. */
        this.language = 'pt_BR';
        this.updateOverflow = () => {
            if (!this.viewport)
                return;
            this.canScrollPrev = this.viewport.scrollLeft > 0;
            this.canScrollNext = Math.ceil(this.viewport.scrollLeft + this.viewport.clientWidth) < this.viewport.scrollWidth;
        };
    }
    alignmentChanged() {
        this.updateOverflow();
    }
    itemUpdated(event) {
        if (!this.isOwnItem(event.target) || !this.loaded || this.synchronizing)
            return;
        this.syncItems(event.detail.prop === 'open' && event.target.open ? event.target : undefined);
    }
    connectedCallback() {
        if (this.loaded)
            this.connectObservers();
    }
    componentDidLoad() {
        this.loaded = true;
        this.syncItems();
        this.connectObservers();
    }
    componentDidRender() {
        if (!this.loaded)
            return;
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
    disconnectedCallback() {
        var _a, _b;
        (_a = this.observer) === null || _a === void 0 ? void 0 : _a.disconnect();
        (_b = this.resizeObserver) === null || _b === void 0 ? void 0 : _b.disconnect();
        window.removeEventListener('resize', this.updateOverflow);
    }
    isOwnItem(target) {
        return target instanceof HTMLElement && target.tagName === 'UAI-TAB-ITEM' && target.closest('uai-tab-group') === this.el;
    }
    connectObservers() {
        var _a, _b;
        (_a = this.observer) === null || _a === void 0 ? void 0 : _a.disconnect();
        if (typeof MutationObserver === 'function') {
            this.observer = new MutationObserver((records) => {
                if (records.some((record) => record.type === 'childList' &&
                    [...Array.from(record.addedNodes), ...Array.from(record.removedNodes)].some((node) => node instanceof HTMLElement && (node.tagName === 'UAI-TAB-ITEM' || !!node.querySelector('uai-tab-item')))))
                    this.syncItems();
            });
            this.observer.observe(this.el, { childList: true, subtree: true });
        }
        (_b = this.resizeObserver) === null || _b === void 0 ? void 0 : _b.disconnect();
        if (typeof ResizeObserver === 'function') {
            this.resizeObserver = new ResizeObserver(this.updateOverflow);
            if (this.viewport)
                this.resizeObserver.observe(this.viewport);
            if (this.track)
                this.resizeObserver.observe(this.track);
        }
        window.addEventListener('resize', this.updateOverflow);
        this.syncItems();
        this.updateOverflow();
    }
    snapshot(element) {
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
    syncItems(preferred) {
        var _a, _b;
        if (this.synchronizing)
            return;
        this.synchronizing = true;
        const elements = Array.from(this.el.querySelectorAll('uai-tab-item')).filter((item) => this.isOwnItem(item));
        const selected = preferred && elements.includes(preferred) && !preferred.disable ? preferred :
            elements.find((item) => item.open && !item.disable) || elements.find((item) => !item.disable);
        if (selected !== ((_a = this.items.find((item) => item.open)) === null || _a === void 0 ? void 0 : _a.element))
            this.revealPending = true;
        const hadFocus = this.el.contains(document.activeElement) &&
            ((_b = document.activeElement) === null || _b === void 0 ? void 0 : _b.getAttribute('role')) === 'tab';
        const oldFocus = this.focusedItem;
        if (!this.focusedItem || !elements.includes(this.focusedItem) || this.focusedItem.disable) {
            this.focusedItem = selected;
        }
        elements.forEach((element, index) => {
            if (element.numberElement !== index)
                element.numberElement = index;
            if (element.open !== (element === selected))
                element.open = element === selected;
            if (!element.id)
                element.id = `uai-tab-panel-${nextPanelId++}`;
            element.setAttribute('role', 'tabpanel');
            element.setAttribute('aria-labelledby', this.tabId(index));
            element.setAttribute('tabindex', '0');
            element.hidden = !element.open || element.disable;
        });
        const items = elements.map((element) => this.snapshot(element));
        if (items.length !== this.items.length || items.some((item, index) => { var _a; return item.element !== ((_a = this.items[index]) === null || _a === void 0 ? void 0 : _a.element) || UAI_TAB_ITEM_PROPS.some((prop) => item[prop] !== this.items[index][prop]); }))
            this.items = items;
        this.synchronizing = false;
        if (hadFocus && oldFocus !== this.focusedItem)
            this.focusPending = true;
    }
    tabId(index) {
        return `${this.groupId}-tab-${index}`;
    }
    activate(item) {
        if (item.element.disable) {
            this.uaiTabDisabled.emit(item.element);
            this.focusTab(this.focusedItem);
            return;
        }
        this.focusedItem = item.element;
        this.syncItems(item.element);
        this.uaiTabChange.emit(item.element);
    }
    focusTab(element) {
        var _a;
        if (!element)
            return;
        this.focusedItem = element;
        const index = this.items.findIndex((item) => item.element === element);
        (_a = this.el.querySelector(`#${this.tabId(index)}`)) === null || _a === void 0 ? void 0 : _a.focus();
        this.revealFocusedTab();
    }
    handleKeyDown(event, item) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            this.activate(item);
            return;
        }
        const enabled = this.items.filter((tab) => !tab.disable);
        if (!enabled.length)
            return;
        const index = enabled.findIndex((tab) => tab.element === item.element);
        let target;
        switch (event.key) {
            case 'ArrowRight':
                target = enabled[(index + 1) % enabled.length];
                break;
            case 'ArrowLeft':
                target = enabled[(index - 1 + enabled.length) % enabled.length];
                break;
            case 'Home':
                target = enabled[0];
                break;
            case 'End':
                target = enabled[enabled.length - 1];
                break;
            default: return;
        }
        event.preventDefault();
        this.focusTab(target.element);
    }
    scroll(direction) {
        var _a;
        if (!this.viewport)
            return;
        const reduce = (_a = window.matchMedia) === null || _a === void 0 ? void 0 : _a.call(window, '(prefers-reduced-motion: reduce)').matches;
        this.viewport.scrollBy({ left: direction * this.viewport.clientWidth, behavior: reduce ? 'auto' : 'smooth' });
    }
    revealFocusedTab() {
        if (!this.viewport || !this.focusedItem)
            return;
        const index = this.items.findIndex((item) => item.element === this.focusedItem);
        const tab = this.el.querySelector(`#${this.tabId(index)}`);
        if (!tab)
            return;
        const view = this.viewport.getBoundingClientRect();
        const rect = tab.getBoundingClientRect();
        const style = getComputedStyle(this.viewport);
        const left = view.left + parseFloat(style.paddingLeft);
        const right = view.right - parseFloat(style.paddingRight);
        if (rect.left < left)
            this.viewport.scrollLeft -= left - rect.left;
        else if (rect.right > right)
            this.viewport.scrollLeft += rect.right - right;
    }
    styles(value) {
        const style = document.createElement('div').style;
        style.cssText = value || '';
        const result = {};
        for (let index = 0; index < style.length; index++) {
            const property = style.item(index);
            result[property] = style.getPropertyValue(property);
        }
        return result;
    }
    renderIcon(name, theme = 'outline') {
        if ((theme === 'outline' || theme === 'solid') && isUaiIcon(theme, name)) {
            return h("uai-icon", { class: "uai-tabs__icon", name: name, theme: theme, size: "small", "aria-hidden": "true" });
        }
        warnOnce('uai-tab-group', `legacy-icon:${theme}:${name}`, `Using legacy icon "${name}" (${theme}) for compatibility. Prefer a UAI icon name.`);
        const legacyTheme = theme === 'solid' ? 'solid' : 'outline';
        const type = theme === 'emoji' ? 'emoji' : theme === 'logos' ? 'logo' : 'icon';
        return h("bds-icon", { class: "uai-tabs__icon", name: name, theme: legacyTheme, type: type, size: "small", "aria-hidden": "true" });
    }
    renderBadge(item) {
        const shape = supported('badgeShape', item.badgeShape, ['circle', 'square', 'triangle', 'triangle-reverse', 'polygon'], 'circle');
        return (h("uai-badge", { class: "uai-tabs__badge", shape: shape, color: item.badgeColor, number: item.badgeNumber, icon: item.badgeIcon, animation: item.badgeAnimation }));
    }
    render() {
        const align = supported('align', this.align, ['left', 'center', 'right'], 'center');
        const language = supported('language', this.language, ['pt_BR', 'en_US', 'es_ES'], 'pt_BR');
        const labels = LABELS[language];
        const selected = this.items.find((item) => item.open);
        const overflow = this.canScrollPrev || this.canScrollNext;
        return (h(Host, { key: '142a67eb63c7899dfc7ea2de7e9ef4f55f8ea41f' }, h("div", { key: '2ba1b53228811544a75c8d3d677821dc128780f6', class: "uai-tabs" }, h("div", { key: '304c742c57ac90c879a9a992d96f33523f4660c7', class: { 'uai-tabs__header': true, [`uai-tabs__header--${align}`]: true }, style: this.styles(selected === null || selected === void 0 ? void 0 : selected.headerStyle) }, h("div", { key: '73d891aff768a5cc0aecfcb9a9897b761aa1a1da', class: { 'uai-tabs__navigation': true, 'uai-tabs__navigation--overflow': overflow } }, overflow && h("uai-button", { key: '9b247eea3715dc833c975c37c07a38f0d9492cb9', variant: "text", color: "content", size: "short", icon: "arrow-left", "aria-label": labels.previous, disabled: !this.canScrollPrev, dataTest: this.dtButtonPrev, onUaiClick: () => this.scroll(-1) }), h("div", { key: '491bd45b603778bfa2e20b7d96a054db96fb3845', class: "uai-tabs__viewport", ref: (el) => this.viewport = el, onScroll: this.updateOverflow }, h("div", { key: 'bc3c945af37308bd5feb95b75e3dcc8673e643c0', class: "uai-tabs__list", role: "tablist", "aria-label": this.ariaLabel || undefined, "aria-labelledby": this.ariaLabelledBy || undefined, ref: (el) => this.track = el }, this.items.map((item, index) => {
            var _a;
            if (!((_a = (item.ariaLabel || item.label)) === null || _a === void 0 ? void 0 : _a.trim())) {
                warnOnce('uai-tab-group', `unnamed:${item.element.id}`, 'Each tab requires label or aria-label, including icon-only tabs.');
            }
            return (h("button", { key: item.element.id, id: this.tabId(index), type: "button", role: "tab", "aria-controls": item.element.id, "aria-selected": String(item.open), "aria-disabled": String(item.disable), "aria-label": item.ariaLabel || item.label || undefined, "aria-invalid": item.error ? 'true' : undefined, tabIndex: !item.disable && this.focusedItem === item.element ? 0 : -1, class: { 'uai-tabs__tab': true, 'uai-tabs__tab--open': item.open,
                    'uai-tabs__tab--disabled': item.disable, 'uai-tabs__tab--error': item.error,
                    'uai-tabs__tab--icon-only': item.iconOnly }, onFocus: () => {
                    if (!item.disable)
                        this.focusedItem = item.element;
                }, onClick: () => this.activate(item), onKeyDown: (event) => this.handleKeyDown(event, item) }, item.icon && item.iconPosition === 'left' && this.renderIcon(item.icon, item.iconTheme), item.badge && item.badgePosition === 'left' && this.renderBadge(item), !item.iconOnly && h("uai-typo", { tag: "span", variant: "body-base", bold: "medium", margin: false, noWrap: true }, item.label), item.error && h("uai-icon", { class: "uai-tabs__icon", name: "warning", size: "small", "aria-hidden": "true" }), item.icon && item.iconPosition === 'right' && this.renderIcon(item.icon, item.iconTheme), item.badge && item.badgePosition === 'right' && this.renderBadge(item)));
        }))), overflow && h("uai-button", { key: 'fded2957ae0f67b902ac7420d47d120b5f5cc2e4', variant: "text", color: "content", size: "short", icon: "arrow-right", "aria-label": labels.next, disabled: !this.canScrollNext, dataTest: this.dtButtonNext, onUaiClick: () => this.scroll(1) }))), h("div", { key: '3643d7fa72094d20446a1c7c8532e55f15be4dd8', class: { 'uai-tabs__content': true, 'uai-tabs__content--scrollable': this.contentScrollable }, style: this.styles(selected === null || selected === void 0 ? void 0 : selected.contentStyle) }, h("slot", { key: 'b488020aa340bd3d03aec265c26c07205e3b1ccc', onSlotchange: () => this.loaded && this.syncItems() })))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "align": [{
                "alignmentChanged": 0
            }]
    }; }
};
UaiTabGroup.style = uaiTabGroupCss();

export { UaiTabGroup as uai_tab_group };
