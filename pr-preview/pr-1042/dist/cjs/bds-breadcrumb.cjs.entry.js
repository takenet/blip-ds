'use strict';

var index = require('./index-DnryYWxm.js');

const breadcrumbCss = ":host{display:block}:host *{color:var(--color-content-default, rgb(40, 40, 40))}.button--icon{-webkit-transform:rotate(180deg);transform:rotate(180deg);color:var(--color-content-ghost, rgb(140, 140, 140))}.breadcrumb__button--0{padding-left:0}.breadcrumb__button--0 .button--icon{display:none}.breadcrumb__button--1{padding-left:8px}.breadcrumb__button--2{padding-left:16px}.breadcrumb__button--3{padding-left:24px}.breadcrumb__button--4{padding-left:32px}.breadcrumb__link--text{color:var(--color-content-disable, rgb(89, 89, 89))}.breadcrumb__link{text-decoration:none}";

const Breadcrumb = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
            return index.h("p", null, "Sem itens para exibir no Breadcrumb.");
        }
        const visibleItems = this.parsedItems.length <= 3
            ? this.parsedItems
            : [
                this.parsedItems[0],
                { label: '...', href: null },
                this.parsedItems[this.parsedItems.length - 1],
            ];
        return (index.h("nav", { "aria-label": "breadcrumb" }, index.h("bds-grid", { direction: "row", "align-items": "center" }, visibleItems.map((item, index$1) => (index.h("bds-grid", { class: {
                breadcrumb__item: true,
                'breadcrumb__item--active': index$1 === visibleItems.length - 1,
            }, "aria-current": index$1 === visibleItems.length - 1 ? 'page' : null }, item.label === '...' ? (index.h("bds-dropdown", { "active-mode": "click", position: "auto" }, index.h("bds-grid", { slot: "dropdown-content" }, index.h("bds-grid", { direction: "column", padding: "1", gap: "half" }, this.parsedItems.slice(1, -1).map((subItem, idx) => (index.h("bds-grid", { class: `breadcrumb__button--${idx}` }, subItem.href ? (index.h("a", { href: subItem.href, class: `breadcrumb__link breadcrumb__button--${idx}` }, index.h("bds-grid", { "align-items": "center", gap: "half" }, index.h("bds-icon", { name: "reply", theme: "outline", class: "button--icon", size: "x-small" }), index.h("bds-button", { variant: "text", color: "content", size: "short" }, subItem.label)))) : (index.h("span", null, subItem.label))))))), index.h("bds-grid", { slot: "dropdown-activator", "align-items": "center" }, index.h("bds-button", { variant: "text", color: "content", size: "short", onClick: () => this.toggleDropdown(), "icon-left": "more-options-horizontal" }), index.h("bds-icon", { name: "arrow-right", size: "x-small" })))) : item.href ? (index.h("bds-grid", { direction: "row" }, index.h("bds-typo", { variant: "fs-12", margin: false, class: "breadcrumb__link--text" }, index.h("a", { href: item.href, class: "breadcrumb__link" }, item.label)), index.h("bds-icon", { name: "arrow-right", size: "x-small" }))) : (index.h("bds-grid", { direction: "row" }, index.h("bds-typo", { variant: "fs-12", bold: "semi-bold", margin: false }, item.label)))))))));
    }
    static get watchers() { return {
        "items": ["parseItems"]
    }; }
};
Breadcrumb.style = breadcrumbCss;

exports.bds_breadcrumb = Breadcrumb;
//# sourceMappingURL=bds-breadcrumb.entry.cjs.js.map

//# sourceMappingURL=bds-breadcrumb.cjs.entry.js.map