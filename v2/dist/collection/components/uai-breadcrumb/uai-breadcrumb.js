import { Host, h } from "@stencil/core";
import { UaiOverlay } from "../../utils/uai-overlay";
import { warnLegacyValue } from "../../utils/deprecation";
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
/**
 * Hierarchical page navigation. Use items in ancestor-to-current order; pair with UaiPageHeader;
 * avoid using it as an organization or flow context switcher.
 */
export class UaiBreadcrumb {
    constructor() {
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
            this.overlay = new UaiOverlay({
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
            warnLegacyValue('uai-breadcrumb', 'language', language, 'pt_BR');
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
        return (h("div", { class: "breadcrumb__editor", onKeyDown: this.editorKeydown }, h("uai-input", { ref: (el) => (this.input = el), size: "short", value: this.draft, ariaLabel: texts.input, danger: this.invalid, errorMessage: texts.required, onUaiChange: (event) => {
                event.stopPropagation();
                this.draft = event.detail.value;
                this.invalid = false;
            }, onUaiSubmit: this.submit }), h("uai-button", { class: "breadcrumb__confirm", size: "short", variant: "text", color: "content", icon: "check", ariaLabel: texts.confirm, onUaiClick: this.confirm }), h("uai-button", { class: "breadcrumb__cancel", size: "short", variant: "text", color: "content", icon: "close", ariaLabel: texts.cancel, onUaiClick: () => this.cancelEditing(true) })));
    }
    renderItem(item, index, popup = false) {
        const current = index === this.parsedItems.length - 1;
        const content = (h("uai-typo", { tag: "span", variant: "body-base", bold: current ? 'semibold' : 'regular', margin: false }, item.label));
        return (h("li", { class: { breadcrumb__item: true, 'breadcrumb__item--current': current, 'breadcrumb__item--popup': popup }, key: `${popup ? 'popup' : 'item'}-${index}` }, current && this.editing ? (this.renderEditor()) : (h("div", { class: "breadcrumb__content" }, h("span", { class: "breadcrumb__label", role: current && this.currentHeadingLevel ? 'heading' : undefined, "aria-level": current ? this.currentHeadingLevel : undefined }, item.href ? (h("a", { class: "breadcrumb__link", href: item.href, "aria-current": current ? 'page' : undefined, onClick: () => this.activate(item) }, content)) : (h("span", { class: "breadcrumb__text", "aria-current": current ? 'page' : undefined }, content))), current && this.editable && (h("uai-button", { class: "breadcrumb__edit", ref: (el) => (this.editButton = el), size: "short", variant: "text", color: "content", icon: "edit", ariaLabel: this.texts.edit, onUaiClick: this.beginEditing })))), !popup && !current && (h("uai-icon", { class: "breadcrumb__separator", name: "arrow-right", size: "x-small", "aria-hidden": "true" }))));
    }
    renderCollapsed() {
        return (h("li", { class: "breadcrumb__item", key: "collapsed" }, h("uai-button", { class: "breadcrumb__toggle", ref: (el) => (this.toggle = el), size: "short", variant: "text", color: "content", icon: "more-options-horizontal", ariaLabel: this.texts.hiddenItems, ariaExpanded: this.opened ? 'true' : 'false', onUaiClick: this.toggleOverlay }), h("uai-icon", { class: "breadcrumb__separator", name: "arrow-right", size: "x-small", "aria-hidden": "true" })));
    }
    render() {
        const collapsed = this.wrapItems && this.parsedItems.length > 3;
        const last = this.parsedItems.length - 1;
        return (h(Host, { key: '8585e5349a38224ae41c491ef030e6079e02a565' }, this.parsedItems.length === 0 ? (h("uai-typo", { class: "breadcrumb__empty", variant: "body-base", margin: false }, this.texts.empty)) : (h("nav", { "aria-label": this.texts.navigation }, h("ol", { class: "breadcrumb__list" }, collapsed
            ? [
                this.renderItem(this.parsedItems[0], 0),
                this.renderCollapsed(),
                this.renderItem(this.parsedItems[last], last),
            ]
            : this.parsedItems.map((item, index) => this.renderItem(item, index))), collapsed && (h("div", { id: this.panelId, class: "breadcrumb__panel", tabindex: "-1", ref: (el) => (this.panel = el) }, h("ul", { class: "breadcrumb__hidden-items" }, this.parsedItems.slice(1, -1).map((item, index) => this.renderItem(item, index + 1, true)))))))));
    }
    static get is() { return "uai-breadcrumb"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-breadcrumb.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-breadcrumb.css"]
        };
    }
    static get properties() {
        return {
            "items": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string | UaiBreadcrumbItem[]",
                    "resolved": "UaiBreadcrumbItem[] | string",
                    "references": {
                        "UaiBreadcrumbItem": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-breadcrumb/uai-breadcrumb.tsx",
                            "id": "src/components/uai-breadcrumb/uai-breadcrumb.tsx::UaiBreadcrumbItem"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Ordered page items as an array or JSON. Use label and optional href; pair with wrapItems; avoid context-selector data."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "items",
                "defaultValue": "[]"
            },
            "wrapItems": {
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
                    "text": "Collapses intermediate items above three entries. Use false to show all; pair with items; avoid treating it as a depth limit."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "wrap-items",
                "defaultValue": "true"
            },
            "editable": {
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
                    "text": "Allows renaming the last item. Use with the edit event; pair with UaiInput; avoid assuming the component persists changes."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "editable",
                "defaultValue": "false"
            },
            "language": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UaiBreadcrumbLanguage",
                    "resolved": "\"en_US\" | \"es_ES\" | \"pt_BR\"",
                    "references": {
                        "UaiBreadcrumbLanguage": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-breadcrumb/uai-breadcrumb.tsx",
                            "id": "src/components/uai-breadcrumb/uai-breadcrumb.tsx::UaiBreadcrumbLanguage"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Language for built-in messages. Use pt_BR, en_US or es_ES; pair with labels; avoid translating item labels implicitly."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "language",
                "defaultValue": "'pt_BR'"
            },
            "labels": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Partial<UaiBreadcrumbLabels>",
                    "resolved": "UaiBreadcrumbLabels",
                    "references": {
                        "Partial": {
                            "location": "global",
                            "id": "global::Partial"
                        },
                        "UaiBreadcrumbLabels": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-breadcrumb/uai-breadcrumb.tsx",
                            "id": "src/components/uai-breadcrumb/uai-breadcrumb.tsx::UaiBreadcrumbLabels"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Partial overrides for built-in text. Use for accessible names and validation; pair with language; avoid empty action names."
                },
                "getter": false,
                "setter": false
            },
            "currentHeadingLevel": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "1 | 2 | 3 | 4 | 5 | 6",
                    "resolved": "1 | 2 | 3 | 4 | 5 | 6",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Optional heading level for the current label. Use inside page headers; pair with page semantics; avoid headings on ancestors."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "current-heading-level"
            }
        };
    }
    static get states() {
        return {
            "parsedItems": {},
            "editing": {},
            "draft": {},
            "invalid": {},
            "opened": {}
        };
    }
    static get events() {
        return [{
                "method": "uaiBreadcrumbItemClick",
                "name": "uaiBreadcrumbItemClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Link activation with { label, href? }. Use to observe native navigation; pair with href; avoid duplicate router navigation."
                },
                "complexType": {
                    "original": "UaiBreadcrumbItem",
                    "resolved": "UaiBreadcrumbItem",
                    "references": {
                        "UaiBreadcrumbItem": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-breadcrumb/uai-breadcrumb.tsx",
                            "id": "src/components/uai-breadcrumb/uai-breadcrumb.tsx::UaiBreadcrumbItem"
                        }
                    }
                }
            }, {
                "method": "uaiBreadcrumbItemEdit",
                "name": "uaiBreadcrumbItemEdit",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Rename request with original index and old/new value. Use to update items; pair with editable; avoid mutating input data."
                },
                "complexType": {
                    "original": "UaiBreadcrumbEditDetail",
                    "resolved": "UaiBreadcrumbEditDetail",
                    "references": {
                        "UaiBreadcrumbEditDetail": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-breadcrumb/uai-breadcrumb.tsx",
                            "id": "src/components/uai-breadcrumb/uai-breadcrumb.tsx::UaiBreadcrumbEditDetail"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "items",
                "methodName": "parseItems"
            }, {
                "propName": "wrapItems",
                "methodName": "wrapChanged"
            }, {
                "propName": "editable",
                "methodName": "editableChanged"
            }];
    }
}
