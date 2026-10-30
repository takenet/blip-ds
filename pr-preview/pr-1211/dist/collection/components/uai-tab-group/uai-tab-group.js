import { Host, h } from "@stencil/core";
import { UAI_TAB_ITEM_PROPS } from "../uai-tab-item/uai-tab-item-interface";
import { isUaiIcon } from "../../globals/uai-icons";
import { warnLegacyValue, warnOnce } from "../../utils/deprecation";
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
    warnLegacyValue('uai-tab-group', prop, value, fallback);
    return fallback;
};
/**
 * Floating tabs with manual keyboard activation. Use for alternate views of related content;
 * pair with UaiTabItem; avoid using tabs as links to unrelated pages.
 *
 * @slot - UaiTabItem panels. Use for related views; pair with item labels; avoid mixing the deprecated bds-tabs API.
 */
export class UaiTabGroup {
    constructor() {
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
        return (h(Host, { key: 'a961537ddc9dfbaa1882585df56ffd86495862d7' }, h("div", { key: '2b53d455141bef22e9706048c3623e607490ab86', class: "uai-tabs" }, h("div", { key: '9e3751e85c189ced3a78bbbfe78b668052c2ec27', class: { 'uai-tabs__header': true, [`uai-tabs__header--${align}`]: true }, style: this.styles(selected === null || selected === void 0 ? void 0 : selected.headerStyle) }, h("div", { key: '42ce4c3dfa1f11956238913927cd72f37c054711', class: { 'uai-tabs__navigation': true, 'uai-tabs__navigation--overflow': overflow } }, overflow && h("uai-button", { key: '1b7474c59382d277670812fbab2b7664bef4de77', variant: "text", color: "content", size: "short", icon: "arrow-left", "aria-label": labels.previous, disabled: !this.canScrollPrev, dataTest: this.dtButtonPrev, onUaiClick: () => this.scroll(-1) }), h("div", { key: 'a520d1e689e76a10fb3133757b343fc9ccb58684', class: "uai-tabs__viewport", ref: (el) => this.viewport = el, onScroll: this.updateOverflow }, h("div", { key: '8e1fb4a409cbda25c8855bde29ddf14058928cb7', class: "uai-tabs__list", role: "tablist", "aria-label": this.ariaLabel || undefined, "aria-labelledby": this.ariaLabelledBy || undefined, ref: (el) => this.track = el }, this.items.map((item, index) => {
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
        }))), overflow && h("uai-button", { key: '1a8d83f746c1a91974d74c21437bf11550b23539', variant: "text", color: "content", size: "short", icon: "arrow-right", "aria-label": labels.next, disabled: !this.canScrollNext, dataTest: this.dtButtonNext, onUaiClick: () => this.scroll(1) }))), h("div", { key: '1128e880a3e61e15caccb696480e6330f987a12c', class: { 'uai-tabs__content': true, 'uai-tabs__content--scrollable': this.contentScrollable }, style: this.styles(selected === null || selected === void 0 ? void 0 : selected.contentStyle) }, h("slot", { key: '4e91738a0a711cdd8f11c4f13d28c654bfebb2b1', onSlotchange: () => this.loaded && this.syncItems() })))));
    }
    static get is() { return "uai-tab-group"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-tab-group.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-tab-group.css"]
        };
    }
    static get properties() {
        return {
            "contentScrollable": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Enables scrolling of panel content. Use for constrained containers; pair with container height; avoid nested scrolling without need."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "content-scrollable",
                "defaultValue": "true"
            },
            "align": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'left' | 'center' | 'right'",
                    "resolved": "\"center\" | \"left\" | \"right\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Header alignment: left, center or right. Use to fit the surrounding layout; pair with floating tabs; avoid unsupported values."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "align",
                "defaultValue": "'center'"
            },
            "dtButtonPrev": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Previous scroll button data-test. Use for automation; pair with dtButtonNext; avoid using it as an accessible label."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "dt-button-prev",
                "defaultValue": "null"
            },
            "dtButtonNext": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Next scroll button data-test. Use for automation; pair with dtButtonPrev; avoid using it as an accessible label."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "dt-button-next",
                "defaultValue": "null"
            },
            "ariaLabel": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Accessible tablist name. Use for distinguishing groups; pair with item labels; avoid unnamed groups when several are present."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "aria-label",
                "defaultValue": "null"
            },
            "ariaLabelledBy": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Accessible tablist name references. Use for an existing heading; pair with that heading's ID; avoid broken references."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "aria-labelledby",
                "defaultValue": "null"
            },
            "language": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'pt_BR' | 'en_US' | 'es_ES'",
                    "resolved": "\"en_US\" | \"es_ES\" | \"pt_BR\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Scroll control language, pt_BR, en_US or es_ES. Use for built-in labels; pair with translated item labels; avoid translating consumer content implicitly."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "language",
                "defaultValue": "'pt_BR'"
            }
        };
    }
    static get states() {
        return {
            "items": {},
            "canScrollPrev": {},
            "canScrollNext": {},
            "focusedItem": {}
        };
    }
    static get events() {
        return [{
                "method": "uaiTabChange",
                "name": "uaiTabChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Activated item element, including reactivation. Use for controlled selection; pair with item.open; avoid expecting a string group ID."
                },
                "complexType": {
                    "original": "HTMLUaiTabItemElement",
                    "resolved": "HTMLUaiTabItemElement",
                    "references": {
                        "HTMLUaiTabItemElement": {
                            "location": "global",
                            "id": "global::HTMLUaiTabItemElement"
                        }
                    }
                }
            }, {
                "method": "uaiTabDisabled",
                "name": "uaiTabDisabled",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Item element whose disabled header was activated. Use for unavailable-action feedback; pair with disable; avoid treating it as a disable prop change."
                },
                "complexType": {
                    "original": "HTMLUaiTabItemElement",
                    "resolved": "HTMLUaiTabItemElement",
                    "references": {
                        "HTMLUaiTabItemElement": {
                            "location": "global",
                            "id": "global::HTMLUaiTabItemElement"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "align",
                "methodName": "alignmentChanged"
            }];
    }
    static get listeners() {
        return [{
                "name": "uaiTabItemUpdate",
                "method": "itemUpdated",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
