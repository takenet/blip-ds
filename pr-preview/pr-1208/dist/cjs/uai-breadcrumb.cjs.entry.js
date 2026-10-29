'use strict';

var index = require('./index-BuAR9UTp.js');
var uaiOverlay = require('./uai-overlay-PZQC57dM.js');

const uaiBreadcrumbCss = () => `:host{display:block;min-width:0;color:var(--uai-content-secondary, #5f676d)}.breadcrumb__list,.breadcrumb__hidden-items{list-style:none;margin:0;padding:0}.breadcrumb__list,.breadcrumb__item,.breadcrumb__content,.breadcrumb__editor{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem);min-width:0}.breadcrumb__list{-ms-flex-wrap:wrap;flex-wrap:wrap}.breadcrumb__editor{-ms-flex-align:start;align-items:flex-start}.breadcrumb__item{max-width:100%}.breadcrumb__content{overflow-wrap:anywhere}.breadcrumb__label{min-width:0}.breadcrumb__item--current{color:var(--uai-content-primary, #242729)}.breadcrumb__link,.breadcrumb__text{display:-ms-inline-flexbox;display:inline-flex;min-width:0;padding:var(--uai-spacing-2xs, 0.25rem) var(--uai-spacing-xs, 0.5rem);overflow-wrap:anywhere}.breadcrumb__link:focus-visible{outline:var(--uai-border-width-thick, 2px) solid var(--uai-border-ring, #242729);outline-offset:var(--uai-spacing-3xs, 0.125rem)}.breadcrumb__link{-webkit-transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.breadcrumb__link{-webkit-transition:none;transition:none}}.breadcrumb__link{color:inherit;text-decoration:none;border-radius:var(--uai-radius-lg, 0.75rem);overflow-wrap:anywhere}.breadcrumb__link:hover{background:var(--uai-overlay-hover, rgba(0, 0, 0, 0.08))}.breadcrumb__separator,uai-button{-ms-flex-negative:0;flex-shrink:0}.breadcrumb__editor uai-input{-ms-flex:1 1 auto;flex:1 1 auto;min-width:0;max-width:100%}.breadcrumb__panel{--uai-overlay-gap:var(--uai-spacing-2xs, 0.25rem);--uai-overlay-margin:var(--uai-spacing-xs, 0.5rem);position:fixed;inset:auto;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0;border:0;overflow:auto;background:transparent;color:inherit;opacity:0;-webkit-transition:opacity var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), display var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete, overlay var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete;transition:opacity var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), display var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete, overlay var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete}.breadcrumb__panel:not(.uai-overlay--open){display:none}.breadcrumb__panel.uai-overlay--open{opacity:1}@starting-style{.breadcrumb__panel.uai-overlay--open{opacity:0}}@media (prefers-reduced-motion: reduce){.breadcrumb__panel{-webkit-transition:none;transition:none}}.breadcrumb__panel{background:var(--uai-surface-paper, #ffffff);color:var(--uai-content-secondary, #5f676d);border:var(--uai-border-width-default, 1px) solid var(--uai-border-default, #e4e6e7);border-radius:var(--uai-radius-lg, 0.75rem);padding:var(--uai-spacing-xs, 0.5rem)}.breadcrumb__hidden-items{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:var(--uai-spacing-xs, 0.5rem)}.breadcrumb__item--popup{padding:var(--uai-spacing-2xs, 0.25rem);overflow-wrap:anywhere}.breadcrumb__item--popup .breadcrumb__content,.breadcrumb__item--popup .breadcrumb__label{width:100%}.breadcrumb__item--popup .breadcrumb__link,.breadcrumb__item--popup .breadcrumb__text{-webkit-box-sizing:border-box;box-sizing:border-box;width:100%}`;

const TEXTS = {
    pt_BR: {
        navigation: 'breadcrumb',
        hiddenItems: 'Mostrar itens ocultos do breadcrumb',
        edit: 'Editar nome',
        input: 'Nome da página',
        confirm: 'Confirmar alteração',
        cancel: 'Cancelar edição',
        required: 'Informe um nome.',
        empty: 'Sem itens para exibir no Breadcrumb.',
    },
    en_US: {
        navigation: 'breadcrumb',
        hiddenItems: 'Show hidden breadcrumb items',
        edit: 'Edit name',
        input: 'Page name',
        confirm: 'Confirm change',
        cancel: 'Cancel editing',
        required: 'Enter a name.',
        empty: 'No items to display in the Breadcrumb.',
    },
    es_ES: {
        navigation: 'breadcrumb',
        hiddenItems: 'Mostrar elementos ocultos de la ruta de navegación',
        edit: 'Editar nombre',
        input: 'Nombre de la página',
        confirm: 'Confirmar cambio',
        cancel: 'Cancelar edición',
        required: 'Ingrese un nombre.',
        empty: 'No hay elementos para mostrar en la ruta de navegación.',
    },
};
let instances = 0;
const isItem = (value) => typeof value === 'object' &&
    value !== null &&
    'label' in value &&
    typeof value.label === 'string' &&
    (!('href' in value) || value.href === undefined || typeof value.href === 'string');
const UaiBreadcrumb = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.uaiBreadcrumbItemClick = index.createEvent(this, "uaiBreadcrumbItemClick");
        this.uaiBreadcrumbItemEdit = index.createEvent(this, "uaiBreadcrumbItemEdit");
        /**
         * Ordered page items as an array or JSON. Use label and optional href; pair with wrapItems; avoid context-selector data.
         */
        this.items = [];
        /**
         * Collapses intermediate items above three entries. Use false to show all; pair with items; avoid treating it as a depth limit.
         */
        this.wrapItems = true;
        /**
         * Allows renaming the last item. Use with the edit event; pair with UaiInput; avoid assuming the component persists changes.
         */
        this.editable = false;
        /**
         * Language for built-in messages. Use pt_BR, en_US or es_ES; pair with labels; avoid translating item labels implicitly.
         */
        this.language = 'pt_BR';
        this.parsedItems = [];
        this.editing = false;
        this.draft = '';
        this.invalid = false;
        this.opened = false;
        this.panelId = `uai-breadcrumb-panel-${++instances}`;
        this.focusEditor = false;
        this.restoreEditorFocus = false;
        this.toggleOverlay = () => {
            var _a, _b;
            if ((_a = this.overlay) === null || _a === void 0 ? void 0 : _a.isOpen) {
                this.closeOverlay();
                return;
            }
            if (!this.toggle || !this.panel)
                return;
            (_b = this.overlay) === null || _b === void 0 ? void 0 : _b.destroy();
            this.overlay = new uaiOverlay.UaiOverlay({
                trigger: this.toggle,
                panel: this.panel,
                onClose: (reason) => {
                    var _a;
                    this.opened = false;
                    if (reason === 'escape')
                        void ((_a = this.toggle) === null || _a === void 0 ? void 0 : _a.setFocus());
                },
            });
            this.overlay.open();
            this.opened = true;
            (this.panel.querySelector('a') || this.panel).focus();
        };
        this.activate = (item) => {
            this.uaiBreadcrumbItemClick.emit(Object.assign({ label: item.label }, (item.href ? { href: item.href } : {})));
            this.closeOverlay();
        };
        this.beginEditing = () => {
            const index = this.parsedItems.length - 1;
            this.original = { index, label: this.parsedItems[index].label };
            this.draft = this.original.label;
            this.invalid = false;
            this.focusEditor = true;
            this.editing = true;
            this.closeOverlay();
        };
        this.confirm = () => {
            var _a;
            if (!this.original)
                return;
            if (!this.draft.trim()) {
                this.invalid = true;
                void ((_a = this.input) === null || _a === void 0 ? void 0 : _a.setFocus());
                return;
            }
            const { index, label: oldValue } = this.original;
            const value = this.draft;
            this.cancelEditing(true);
            if (value !== oldValue)
                this.uaiBreadcrumbItemEdit.emit({ index, oldValue, value });
        };
        this.submit = (event) => {
            event.stopPropagation();
            event.detail.event.preventDefault();
            if (event.detail.event.isComposing)
                return;
            this.draft = event.detail.value;
            this.confirm();
        };
        this.editorKeydown = (event) => {
            if (event.key !== 'Escape' || event.isComposing)
                return;
            event.preventDefault();
            event.stopPropagation();
            this.cancelEditing(true);
        };
    }
    parseItems(value) {
        this.closeOverlay();
        this.cancelEditing(false);
        let parsed = value;
        if (typeof value === 'string') {
            try {
                parsed = JSON.parse(value);
            }
            catch (error) {
                console.warn('[uai-breadcrumb] Failed to parse items:', error);
                this.parsedItems = [];
                return;
            }
        }
        if (!Array.isArray(parsed) || !parsed.every(isItem)) {
            console.warn('[uai-breadcrumb] Expected items to be an array of { label: string; href?: string }.');
            this.parsedItems = [];
            return;
        }
        this.parsedItems = parsed;
    }
    wrapChanged() {
        this.closeOverlay();
    }
    editableChanged() {
        if (!this.editable)
            this.cancelEditing(false);
    }
    componentWillLoad() {
        this.parseItems(this.items);
    }
    componentDidRender() {
        var _a;
        if (this.focusEditor && this.input) {
            this.focusEditor = false;
            void this.input.setFocus();
        }
        if (this.restoreEditorFocus) {
            this.restoreEditorFocus = false;
            if ((_a = this.editButton) === null || _a === void 0 ? void 0 : _a.isConnected)
                void this.editButton.setFocus();
        }
    }
    disconnectedCallback() {
        this.closeOverlay();
    }
    get texts() {
        let language = this.language;
        if (!Object.prototype.hasOwnProperty.call(TEXTS, language)) {
            language = 'pt_BR';
        }
        return Object.assign(Object.assign({}, TEXTS[language]), this.labels);
    }
    closeOverlay() {
        var _a;
        (_a = this.overlay) === null || _a === void 0 ? void 0 : _a.destroy();
        this.overlay = undefined;
        this.opened = false;
    }
    cancelEditing(restore) {
        if (!this.editing)
            return;
        this.restoreEditorFocus = restore;
        this.focusEditor = false;
        this.original = undefined;
        this.invalid = false;
        this.editing = false;
    }
    renderEditor() {
        const texts = this.texts;
        return (index.h("div", { class: "breadcrumb__editor", onKeyDown: this.editorKeydown }, index.h("uai-input", { ref: (el) => (this.input = el), size: "short", value: this.draft, ariaLabel: texts.input, danger: this.invalid, errorMessage: texts.required, onUaiChange: (event) => {
                event.stopPropagation();
                this.draft = event.detail.value;
                this.invalid = false;
            }, onUaiSubmit: this.submit }), index.h("uai-button", { class: "breadcrumb__confirm", size: "short", variant: "text", color: "content", icon: "check", ariaLabel: texts.confirm, onUaiClick: this.confirm }), index.h("uai-button", { class: "breadcrumb__cancel", size: "short", variant: "text", color: "content", icon: "close", ariaLabel: texts.cancel, onUaiClick: () => this.cancelEditing(true) })));
    }
    renderItem(item, index$1, popup = false) {
        const current = index$1 === this.parsedItems.length - 1;
        const content = (index.h("uai-typo", { tag: "span", variant: "body-base", bold: current ? 'semibold' : 'regular', margin: false }, item.label));
        return (index.h("li", { class: { breadcrumb__item: true, 'breadcrumb__item--current': current, 'breadcrumb__item--popup': popup }, key: `${popup ? 'popup' : 'item'}-${index$1}` }, current && this.editing ? (this.renderEditor()) : (index.h("div", { class: "breadcrumb__content" }, index.h("span", { class: "breadcrumb__label", role: current && this.currentHeadingLevel ? 'heading' : undefined, "aria-level": current ? this.currentHeadingLevel : undefined }, item.href ? (index.h("a", { class: "breadcrumb__link", href: item.href, "aria-current": current ? 'page' : undefined, onClick: () => this.activate(item) }, content)) : (index.h("span", { class: "breadcrumb__text", "aria-current": current ? 'page' : undefined }, content))), current && this.editable && (index.h("uai-button", { class: "breadcrumb__edit", ref: (el) => (this.editButton = el), size: "short", variant: "text", color: "content", icon: "edit", ariaLabel: this.texts.edit, onUaiClick: this.beginEditing })))), !popup && !current && (index.h("uai-icon", { class: "breadcrumb__separator", name: "arrow-right", size: "x-small", "aria-hidden": "true" }))));
    }
    renderCollapsed() {
        return (index.h("li", { class: "breadcrumb__item", key: "collapsed" }, index.h("uai-button", { class: "breadcrumb__toggle", ref: (el) => (this.toggle = el), size: "short", variant: "text", color: "content", icon: "more-options-horizontal", ariaLabel: this.texts.hiddenItems, ariaExpanded: this.opened ? 'true' : 'false', onUaiClick: this.toggleOverlay }), index.h("uai-icon", { class: "breadcrumb__separator", name: "arrow-right", size: "x-small", "aria-hidden": "true" })));
    }
    render() {
        const collapsed = this.wrapItems && this.parsedItems.length > 3;
        const last = this.parsedItems.length - 1;
        return (index.h(index.Host, { key: 'e0fd848948ec88350f313efdc434b60d7ec9b77f' }, this.parsedItems.length === 0 ? (index.h("uai-typo", { class: "breadcrumb__empty", variant: "body-base", margin: false }, this.texts.empty)) : (index.h("nav", { "aria-label": this.texts.navigation }, index.h("ol", { class: "breadcrumb__list" }, collapsed
            ? [
                this.renderItem(this.parsedItems[0], 0),
                this.renderCollapsed(),
                this.renderItem(this.parsedItems[last], last),
            ]
            : this.parsedItems.map((item, index) => this.renderItem(item, index))), collapsed && (index.h("div", { id: this.panelId, class: "breadcrumb__panel", tabindex: "-1", ref: (el) => (this.panel = el) }, index.h("ul", { class: "breadcrumb__hidden-items" }, this.parsedItems.slice(1, -1).map((item, index) => this.renderItem(item, index + 1, true)))))))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "items": [{
                "parseItems": 0
            }],
        "wrapItems": [{
                "wrapChanged": 0
            }],
        "editable": [{
                "editableChanged": 0
            }]
    }; }
};
UaiBreadcrumb.style = uaiBreadcrumbCss();

exports.uai_breadcrumb = UaiBreadcrumb;
