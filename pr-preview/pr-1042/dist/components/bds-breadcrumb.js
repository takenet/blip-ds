import { p as proxyCustomElement, H, h } from './index.js';
import { d as defineCustomElement$7 } from './p-CMIcF8U6.js';
import { d as defineCustomElement$6 } from './p-CaSaI_wY.js';
import { d as defineCustomElement$5 } from './p-CGgHblXS.js';
import { d as defineCustomElement$4 } from './p-3JBO9P5_.js';
import { d as defineCustomElement$3 } from './p-DOQirQsC.js';
import { d as defineCustomElement$2 } from './p-BTwF0c-l.js';

const breadcrumbCss = ":host{display:block}:host *{color:var(--color-content-default, rgb(40, 40, 40))}.button--icon{-webkit-transform:rotate(180deg);transform:rotate(180deg);color:var(--color-content-ghost, rgb(140, 140, 140))}.breadcrumb__button--0{padding-left:0}.breadcrumb__button--0 .button--icon{display:none}.breadcrumb__button--1{padding-left:8px}.breadcrumb__button--2{padding-left:16px}.breadcrumb__button--3{padding-left:24px}.breadcrumb__button--4{padding-left:32px}.breadcrumb__link--text{color:var(--color-content-disable, rgb(89, 89, 89))}.breadcrumb__link{text-decoration:none}";

const Breadcrumb = /*@__PURE__*/ proxyCustomElement(class Breadcrumb extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.items = [];
        this.parsedItems = [];
        this.isDropdownOpen = false;
    }
    parseItems(newValue) {
        if (typeof newValue === 'string') {
            try {
                this.parsedItems = JSON.parse(newValue);
            }
            catch (error) {
                this.parsedItems = [];
            }
        }
        else {
            this.parsedItems = newValue;
        }
    }
    componentWillLoad() {
        this.parseItems(this.items);
    }
    toggleDropdown() {
        this.isDropdownOpen = !this.isDropdownOpen;
    }
    render() {
        if (!this.parsedItems || this.parsedItems.length === 0) {
            return h("p", null, "Sem itens para exibir no Breadcrumb.");
        }
        const visibleItems = this.parsedItems.length <= 3
            ? this.parsedItems
            : [
                this.parsedItems[0],
                { label: '...', href: null },
                this.parsedItems[this.parsedItems.length - 1],
            ];
        return (h("nav", { "aria-label": "breadcrumb" }, h("bds-grid", { direction: "row", "align-items": "center" }, visibleItems.map((item, index) => (h("bds-grid", { class: {
                breadcrumb__item: true,
                'breadcrumb__item--active': index === visibleItems.length - 1,
            }, "aria-current": index === visibleItems.length - 1 ? 'page' : null }, item.label === '...' ? (h("bds-dropdown", { "active-mode": "click", position: "auto" }, h("bds-grid", { slot: "dropdown-content" }, h("bds-grid", { direction: "column", padding: "1", gap: "half" }, this.parsedItems.slice(1, -1).map((subItem, idx) => (h("bds-grid", { class: `breadcrumb__button--${idx}` }, subItem.href ? (h("a", { href: subItem.href, class: `breadcrumb__link breadcrumb__button--${idx}` }, h("bds-grid", { "align-items": "center", gap: "half" }, h("bds-icon", { name: "reply", theme: "outline", class: "button--icon", size: "x-small" }), h("bds-button", { variant: "text", color: "content", size: "short" }, subItem.label)))) : (h("span", null, subItem.label))))))), h("bds-grid", { slot: "dropdown-activator", "align-items": "center" }, h("bds-button", { variant: "text", color: "content", size: "short", onClick: () => this.toggleDropdown(), "icon-left": "more-options-horizontal" }), h("bds-icon", { name: "arrow-right", size: "x-small" })))) : item.href ? (h("bds-grid", { direction: "row" }, h("bds-typo", { variant: "fs-12", margin: false, class: "breadcrumb__link--text" }, h("a", { href: item.href, class: "breadcrumb__link" }, item.label)), h("bds-icon", { name: "arrow-right", size: "x-small" }))) : (h("bds-grid", { direction: "row" }, h("bds-typo", { variant: "fs-12", bold: "semi-bold", margin: false }, item.label)))))))));
    }
    static get watchers() { return {
        "items": ["parseItems"]
    }; }
    static get style() { return breadcrumbCss; }
}, [1, "bds-breadcrumb", {
        "items": [1],
        "parsedItems": [32],
        "isDropdownOpen": [32]
    }, undefined, {
        "items": ["parseItems"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-breadcrumb", "bds-button", "bds-dropdown", "bds-grid", "bds-icon", "bds-loading-spinner", "bds-typo"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-breadcrumb":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Breadcrumb);
            }
            break;
        case "bds-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "bds-dropdown":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "bds-grid":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "bds-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "bds-loading-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "bds-typo":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const BdsBreadcrumb = Breadcrumb;
const defineCustomElement = defineCustomElement$1;

export { BdsBreadcrumb, defineCustomElement };
//# sourceMappingURL=bds-breadcrumb.js.map

//# sourceMappingURL=bds-breadcrumb.js.map