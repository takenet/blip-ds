import { r as registerInstance, c as createEvent, h } from './index-CkbvGS8Z.js';

const uaiPageHeaderCss = () => `:host{display:block;min-width:0}.header{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-md, 1rem);-webkit-box-sizing:border-box;box-sizing:border-box;padding:var(--uai-spacing-md, 1rem);color:var(--uai-content-primary, #242729);background:var(--uai-surface-paper, #ffffff);border-bottom:var(--uai-border-width-default, 1px) solid var(--uai-border-default, #e4e6e7)}.header__main{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex:1 1 auto;flex:1 1 auto;min-height:var(--uai-control-height-medium, 2.5rem);min-width:0;max-width:100%;overflow-wrap:anywhere}.header__actions{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem);max-width:100%;-webkit-margin-start:auto;margin-inline-start:auto}`;

const UaiPageHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.uaiBreadcrumbItemClick = createEvent(this, "uaiBreadcrumbItemClick");
        this.uaiBreadcrumbItemEdit = createEvent(this, "uaiBreadcrumbItemEdit");
        /**
         * Visual composition. Use primary for title and secondary for breadcrumb; pair with items; avoid treating it as a depth limit.
         */
        this.level = 'primary';
        /**
         * Primary page title. Use with level primary; pair with actions; avoid expecting a secondary breadcrumb fallback.
         */
        this.title = '';
        /**
         * Secondary breadcrumb items, as JSON or array. Use ancestor-to-current order; pair with level secondary; avoid context selectors.
         */
        this.items = [];
        /**
         * Collapses intermediate breadcrumb items above three. Use false to show all; pair with items; avoid imposing a depth limit.
         */
        this.wrapItems = true;
        /**
         * Enables editing of the secondary breadcrumb's current item. Use with the edit event; pair with items; avoid editing primary title.
         */
        this.editable = false;
        /**
         * Language for breadcrumb messages. Use a supported locale; pair with labels; avoid translating consumer-provided titles implicitly.
         */
        this.language = 'pt_BR';
    }
    render() {
        let level = this.level;
        if (level !== 'primary' && level !== 'secondary') {
            level = 'primary';
        }
        return (h("header", { key: 'dbe6f35b31fe5f5db1fa4d2b2b1e20bbbaff5be9', class: "header" }, h("div", { key: 'c6f248a8fad36ff8eebef6a7f0666b9cf7aa9571', class: "header__main" }, level === 'primary' ? (h("uai-typo", { class: "header__title", tag: "h1", variant: "title-md", bold: "semibold", margin: false }, this.title)) : (h("uai-breadcrumb", { items: this.items, wrapItems: this.wrapItems, editable: this.editable, language: this.language, labels: this.labels, currentHeadingLevel: 1 }))), h("div", { key: '8b91396c36166ca6c0745ec5fbd2152c2e3c6b45', class: "header__actions" }, h("slot", { key: '3cfe2a33763cbadaf8df92e6f8a786cc63cb823e', name: "actions" }))));
    }
};
UaiPageHeader.style = uaiPageHeaderCss();

export { UaiPageHeader as uai_page_header };
