import { h, Host } from "@stencil/core";
import { warnLegacyValue } from "../../utils/deprecation";
const GRID_TYPES = ['default', 'draggable'];
const DRAG_DISTANCE_THRESHOLD = 4;
const GRID_I18N = {
    pt_BR: {
        drag: 'Arrastar ou usar Alt e setas para reordenar esta seção',
        add: 'Adicionar item a esta seção',
        limit: (max) => `Limite de ${max} itens por seção atingido`,
        moved: (pos, total) => `Seção movida para a posição ${pos} de ${total}`,
    },
    en_US: {
        drag: 'Drag or press Alt and arrow keys to reorder this section',
        add: 'Add item to this section',
        limit: (max) => `Limit of ${max} items per section reached`,
        moved: (pos, total) => `Section moved to position ${pos} of ${total}`,
    },
    es_ES: {
        drag: 'Arrastrar o usar Alt y flechas para reordenar esta sección',
        add: 'Añadir elemento a esta sección',
        limit: (max) => `Límite de ${max} elementos por sección alcanzado`,
        moved: (pos, total) => `Sección movida a la posición ${pos} de ${total}`,
    },
};
/**
 * UAI layout grid and reorderable section row. Keeps legacy `bds-grid` 12-column props while adding
 * UAI Core row composition (`type="default" | "draggable"`) and vertical block sorting (`sortable`).
 * Use `type="draggable"` inside a `sortable` column `UaiGrid` to let people reorder whole rows and add items;
 * pair with `UaiCard` and `UaiSectionTitle`; avoid nesting `draggable` rows inside another `draggable` row.
 *
 * @slot - Grid items, `UaiCard` elements, or nested `uai-grid` rows.
 * @part drag-handle - Lateral drag handle button rendered when `type="draggable"`.
 * @part slot - Inner row slot container rendered when `type="draggable"`.
 * @part add-button - Lateral plus button rendered when `type="draggable"` and `addable` is true.
 */
export class UaiGrid {
    constructor() {
        this.slotItemCount = 0;
        this.isDragging = false;
        this.liveMessage = '';
        /**
         * Enables vertical drag-and-drop and keyboard (`Alt+ArrowUp` / `Alt+ArrowDown`) sorting of child `uai-grid[type="draggable"]` rows.
         * Use on a vertical (`direction="column"`) parent `UaiGrid`; pair with `onUaiReorder`; avoid enabling on leaf item grids.
         */
        this.sortable = false;
        /**
         * Skips automatic DOM node movement on reorder so controlled frameworks (such as React state) own child order.
         * Use `true` when rendering `draggable` rows from a reactive array in `onUaiReorder`; pair with `sortable`; avoid `true` in uncontrolled static HTML.
         */
        this.controlledReorder = false;
        /**
         * Controls whether the lateral `+` button is rendered when `type="draggable"`.
         * Use `true` when users can append items to the row; pair with `maxItems` and `onUaiAddClick`; avoid when the row has a fixed single item.
         */
        this.addable = true;
        /**
         * Maximum number of slotted items allowed in the row before marking the `+` button `aria-disabled="true"`.
         * Use `4` for dashboard KPI rows; pair with `addable` and `onUaiAddClick`; avoid setting `0`.
         */
        this.maxItems = 4;
        /**
         * Explicitly disables the lateral `+` button with `aria-disabled="true"` while keeping it focusable.
         * Use when external business rules block adding items; pair with `addDisabledLabel`; avoid hiding the button abruptly during keyboard navigation.
         */
        this.addDisabled = false;
        /**
         * Language for default accessible labels of the drag handle, plus button, and live announcements.
         * Use `pt_BR`, `en_US`, or `es_ES`; pair with `dragLabel` and `addLabel` for custom copy; avoid untranslated labels.
         */
        this.language = 'pt_BR';
        /**
         * Accessible name override for the lateral drag handle button.
         * Use to name the specific section being reordered; pair with `type="draggable"`; avoid empty strings.
         */
        this.dragLabel = '';
        /**
         * Accessible name override for the lateral `+` button when enabled.
         * Use to specify what kind of block will be added; pair with `type="draggable"`; avoid empty strings.
         */
        this.addLabel = '';
        /**
         * Accessible name and tooltip title override when the `+` button reaches `maxItems` or `addDisabled`.
         * Use to explain why no more items can be added; pair with `maxItems`; avoid generic messages.
         */
        this.addDisabledLabel = '';
        /**
         * Automation selector applied to the draggable container or host.
         * Use in automated tests; pair with accessible role queries; avoid styling by this attribute.
         */
        this.dataTest = null;
        this.draggedItem = null;
        this.activePointerId = null;
        this.startX = 0;
        this.startY = 0;
        this.pointerOffsetX = 0;
        this.pointerOffsetY = 0;
        this.isSortingActive = false;
        this.dropTarget = null;
        this.dropPosition = null;
        this.dragPreview = null;
        this.syncSlotCount = () => {
            if (!this.el)
                return;
            this.slotItemCount = Array.from(this.el.children).filter((child) => !child.hasAttribute('slot')).length;
        };
        this.handleAddClick = (event) => {
            event.stopPropagation();
            if (this.isAtLimit) {
                event.preventDefault();
                return;
            }
            this.uaiAddClick.emit({
                count: this.slotItemCount,
                maxItems: this.maxItems,
            });
        };
        this.onListPointerDown = (event) => {
            var _a, _b;
            if (!this.sortable)
                return;
            if (event.pointerType === 'mouse' && event.button !== 0)
                return;
            const match = this.findDragHandleInPath(event);
            if (!match)
                return;
            event.preventDefault();
            this.draggedItem = match.item;
            this.activePointerId = event.pointerId;
            this.startX = event.clientX;
            this.startY = event.clientY;
            this.isSortingActive = false;
            match.handle.focus({ preventScroll: true });
            (_b = (_a = match.handle).setPointerCapture) === null || _b === void 0 ? void 0 : _b.call(_a, event.pointerId);
            this.attachGlobalDragListeners();
        };
        this.onDocumentPointerMove = (event) => {
            if (!this.draggedItem || event.pointerId !== this.activePointerId)
                return;
            const distance = Math.hypot(event.clientX - this.startX, event.clientY - this.startY);
            if (!this.isSortingActive && distance < DRAG_DISTANCE_THRESHOLD)
                return;
            event.preventDefault();
            if (!this.isSortingActive) {
                this.isSortingActive = true;
                this.el.setAttribute('data-uai-sorting', 'true');
                this.draggedItem.setAttribute('data-uai-dragging', 'true');
                if (typeof document !== 'undefined') {
                    document.body.style.cursor = 'grabbing';
                    document.body.style.userSelect = 'none';
                }
                this.createDragPreview(event.clientX, event.clientY);
            }
            this.moveDragPreview(event.clientX, event.clientY);
            this.updateDropTarget(event.clientY);
        };
        this.onDocumentPointerUp = (event) => {
            if (!this.draggedItem || event.pointerId !== this.activePointerId)
                return;
            this.finishSorting(true);
        };
        this.onDocumentPointerCancel = (event) => {
            if (!this.draggedItem || event.pointerId !== this.activePointerId)
                return;
            this.finishSorting(false);
        };
        this.onDocumentEscape = (event) => {
            if (event.key === 'Escape' && this.draggedItem) {
                event.preventDefault();
                event.stopPropagation();
                this.finishSorting(false);
            }
        };
        this.onWindowBlur = () => {
            if (this.draggedItem) {
                this.finishSorting(false);
            }
        };
        this.onListKeyDown = (event) => {
            if (!this.sortable || !event.altKey || (event.key !== 'ArrowUp' && event.key !== 'ArrowDown'))
                return;
            const match = this.findDragHandleInPath(event);
            if (!match)
                return;
            const items = this.getDraggableItems();
            const fromIndex = items.indexOf(match.item);
            if (fromIndex === -1)
                return;
            const toIndex = event.key === 'ArrowUp' ? fromIndex - 1 : fromIndex + 1;
            if (toIndex < 0 || toIndex >= items.length)
                return;
            event.preventDefault();
            if (!this.controlledReorder) {
                if (event.key === 'ArrowUp') {
                    this.el.insertBefore(match.item, items[toIndex]);
                }
                else {
                    this.el.insertBefore(match.item, items[toIndex].nextElementSibling);
                }
            }
            const i18n = GRID_I18N[this.resolveLanguage()];
            this.liveMessage = i18n.moved(toIndex + 1, items.length);
            this.uaiReorder.emit({ fromIndex, toIndex });
            if (typeof match.item.focusDragHandle === 'function') {
                void match.item.focusDragHandle();
            }
            else {
                match.handle.focus({ preventScroll: true });
            }
        };
    }
    /** Focuses the internal drag handle when `type="draggable"`. Use after programmatic reorder in controlled layouts; pair with `controlledReorder`; avoid calling on non-draggable grids. */
    async focusDragHandle() {
        var _a;
        (_a = this.dragHandleRef) === null || _a === void 0 ? void 0 : _a.focus({ preventScroll: true });
    }
    componentWillLoad() {
        this.syncSlotCount();
    }
    componentDidLoad() {
        if (this.sortable) {
            this.attachSortableListeners();
        }
    }
    handleSortableChange(next) {
        this.finishSorting(false);
        this.detachSortableListeners();
        if (next) {
            this.attachSortableListeners();
        }
    }
    disconnectedCallback() {
        this.finishSorting(false);
        this.detachSortableListeners();
    }
    resolveLanguage() {
        if (this.language === 'en_US' || this.language === 'es_ES' || this.language === 'pt_BR') {
            return this.language;
        }
        warnLegacyValue('uai-grid', 'language', this.language, 'pt_BR');
        return 'pt_BR';
    }
    resolveType() {
        if (this.type === undefined || this.type === null)
            return undefined;
        if (GRID_TYPES.includes(this.type))
            return this.type;
        warnLegacyValue('uai-grid', 'type', this.type, 'default');
        return 'default';
    }
    get isAtLimit() {
        if (this.addDisabled)
            return true;
        if (typeof this.maxItems === 'number' && this.maxItems > 0) {
            return this.slotItemCount >= this.maxItems;
        }
        return false;
    }
    getDraggableItems() {
        if (!this.el)
            return [];
        return Array.from(this.el.children).filter((child) => child instanceof HTMLElement &&
            child.tagName === 'UAI-GRID' &&
            child.getAttribute('type') === 'draggable');
    }
    attachSortableListeners() {
        this.el.addEventListener('pointerdown', this.onListPointerDown);
        this.el.addEventListener('keydown', this.onListKeyDown);
    }
    detachSortableListeners() {
        var _a, _b;
        (_a = this.el) === null || _a === void 0 ? void 0 : _a.removeEventListener('pointerdown', this.onListPointerDown);
        (_b = this.el) === null || _b === void 0 ? void 0 : _b.removeEventListener('keydown', this.onListKeyDown);
        this.detachGlobalDragListeners();
    }
    attachGlobalDragListeners() {
        if (typeof document === 'undefined')
            return;
        document.addEventListener('pointermove', this.onDocumentPointerMove);
        document.addEventListener('pointerup', this.onDocumentPointerUp);
        document.addEventListener('pointercancel', this.onDocumentPointerCancel);
        document.addEventListener('keydown', this.onDocumentEscape, true);
        if (typeof window !== 'undefined') {
            window.addEventListener('blur', this.onWindowBlur);
        }
    }
    detachGlobalDragListeners() {
        if (typeof document === 'undefined')
            return;
        document.removeEventListener('pointermove', this.onDocumentPointerMove);
        document.removeEventListener('pointerup', this.onDocumentPointerUp);
        document.removeEventListener('pointercancel', this.onDocumentPointerCancel);
        document.removeEventListener('keydown', this.onDocumentEscape, true);
        if (typeof window !== 'undefined') {
            window.removeEventListener('blur', this.onWindowBlur);
        }
    }
    findDragHandleInPath(event) {
        const path = typeof event.composedPath === 'function' ? event.composedPath() : [];
        let handle = null;
        let item = null;
        for (const node of path) {
            if (node === this.el)
                break;
            if (node instanceof HTMLElement) {
                if (!handle && node.hasAttribute('data-uai-drag-handle')) {
                    handle = node;
                }
                if (node.tagName === 'UAI-GRID' && node.parentElement === this.el && node.getAttribute('type') === 'draggable') {
                    item = node;
                }
            }
        }
        return handle && item ? { handle, item } : null;
    }
    createDragPreview(pointerX, pointerY) {
        if (!this.draggedItem || this.dragPreview || typeof document === 'undefined')
            return;
        const rect = this.draggedItem.getBoundingClientRect();
        this.pointerOffsetX = pointerX - rect.left;
        this.pointerOffsetY = pointerY - rect.top;
        const preview = document.createElement('div');
        preview.className = 'uai-grid-drag-preview';
        preview.setAttribute('aria-hidden', 'true');
        preview.style.position = 'fixed';
        preview.style.top = '0';
        preview.style.left = '0';
        preview.style.width = `${Math.round(rect.width)}px`;
        preview.style.height = `${Math.round(rect.height)}px`;
        preview.style.pointerEvents = 'none';
        preview.style.zIndex = 'var(--uai-layer-navigation-overlay)';
        preview.style.borderRadius = 'var(--uai-radius-md)';
        preview.style.background = 'var(--uai-surface-contrast)';
        preview.style.boxShadow = 'var(--uai-elevation-3)';
        document.body.appendChild(preview);
        this.dragPreview = preview;
        this.moveDragPreview(pointerX, pointerY);
    }
    moveDragPreview(pointerX, pointerY) {
        if (!this.dragPreview)
            return;
        const left = Math.round(pointerX - this.pointerOffsetX);
        const top = Math.round(pointerY - this.pointerOffsetY);
        this.dragPreview.style.transform = `translate3d(${left}px, ${top}px, 0)`;
    }
    clearDropIndicators() {
        this.getDraggableItems().forEach((item) => {
            item.removeAttribute('data-uai-drop');
        });
        this.dropTarget = null;
        this.dropPosition = null;
    }
    updateDropTarget(pointerY) {
        this.clearDropIndicators();
        const candidates = this.getDraggableItems().filter((item) => item !== this.draggedItem);
        if (!candidates.length)
            return;
        let target = candidates[candidates.length - 1];
        let position = 'after';
        for (const candidate of candidates) {
            const rect = candidate.getBoundingClientRect();
            if (pointerY < rect.top + rect.height / 2) {
                target = candidate;
                position = 'before';
                break;
            }
        }
        this.dropTarget = target;
        this.dropPosition = position;
        target.setAttribute('data-uai-drop', position);
    }
    finishSorting(commit) {
        var _a;
        const dragged = this.draggedItem;
        const target = this.dropTarget;
        const position = this.dropPosition;
        const wasSorting = this.isSortingActive;
        if (commit && wasSorting && dragged && target && position) {
            const itemsBefore = this.getDraggableItems();
            const fromIndex = itemsBefore.indexOf(dragged);
            const targetIndex = itemsBefore.indexOf(target);
            let toIndex = position === 'before' ? targetIndex : targetIndex + 1;
            if (fromIndex < toIndex)
                toIndex -= 1;
            if (fromIndex !== -1 && toIndex !== -1 && fromIndex !== toIndex) {
                if (!this.controlledReorder) {
                    if (position === 'before') {
                        this.el.insertBefore(dragged, target);
                    }
                    else {
                        this.el.insertBefore(dragged, target.nextElementSibling);
                    }
                }
                const i18n = GRID_I18N[this.resolveLanguage()];
                this.liveMessage = i18n.moved(toIndex + 1, itemsBefore.length);
                this.uaiReorder.emit({ fromIndex, toIndex });
            }
        }
        this.clearDropIndicators();
        if (this.dragPreview) {
            this.dragPreview.remove();
            this.dragPreview = null;
        }
        (_a = this.el) === null || _a === void 0 ? void 0 : _a.removeAttribute('data-uai-sorting');
        dragged === null || dragged === void 0 ? void 0 : dragged.removeAttribute('data-uai-dragging');
        if (typeof document !== 'undefined') {
            document.body.style.cursor = '';
            document.body.style.userSelect = '';
        }
        this.draggedItem = null;
        this.activePointerId = null;
        this.isSortingActive = false;
        this.detachGlobalDragListeners();
        if (wasSorting && dragged && typeof dragged.focusDragHandle === 'function') {
            void dragged.focusDragHandle();
        }
    }
    render() {
        var _a, _b, _c, _d, _e;
        const resolvedType = this.resolveType();
        const isDraggableRow = resolvedType === 'draggable';
        const isDefaultRow = resolvedType === 'default';
        const classes = {
            host: true,
            'row-mode': isDefaultRow || isDraggableRow,
            'row-draggable': isDraggableRow,
            'sortable-list': Boolean(this.sortable),
        };
        const addValueClass = (prefix, value) => {
            if (value)
                classes[`${prefix}${value}`] = true;
        };
        const addValueClasses = (prefix, values) => {
            values === null || values === void 0 ? void 0 : values.split(/\s+/).forEach((value) => addValueClass(prefix, value));
        };
        const effectiveGap = (_a = this.gap) !== null && _a !== void 0 ? _a : (isDefaultRow || isDraggableRow ? '2' : undefined);
        addValueClass('direction--', this.direction);
        addValueClass('justify_content--', this.justifyContent);
        addValueClass('flex_wrap--', this.flexWrap);
        addValueClass('align_items--', this.alignItems);
        addValueClass('xxs--', this.xxs);
        addValueClass('xs--', this.xs);
        addValueClass('sm--', this.sm);
        addValueClass('md--', this.md);
        addValueClass('lg--', this.lg);
        addValueClass('xg--', this.xg);
        addValueClass('xxsoffset--', this.xxsOffset);
        addValueClass('xsoffset--', this.xsOffset);
        addValueClass('smoffset--', this.smOffset);
        addValueClass('mdoffset--', this.mdOffset);
        addValueClass('lgoffset--', this.lgOffset);
        addValueClass('xgoffset--', this.xgOffset);
        if (!isDraggableRow) {
            addValueClass('gap--', effectiveGap);
        }
        addValueClasses('padding--', this.padding);
        addValueClasses('margin--', this.margin);
        if (this.container)
            classes.container = true;
        if (this.containerFluid)
            classes['container-fluid'] = true;
        if (this.bgColor)
            classes[`bg-color--${this.bgColor.slice(1)}`] = true;
        if (!isDraggableRow) {
            return (h(Host, { class: classes, style: { height: this.height }, "data-test": this.dataTest }, h("slot", { onSlotchange: this.syncSlotCount }), this.sortable && (h("span", { class: "grid-sr-only", "aria-live": "polite" }, this.liveMessage))));
        }
        const i18n = GRID_I18N[this.resolveLanguage()];
        const atLimit = this.isAtLimit;
        const resolvedDragLabel = ((_b = this.dragLabel) === null || _b === void 0 ? void 0 : _b.trim()) || i18n.drag;
        const resolvedAddLabel = ((_c = this.addLabel) === null || _c === void 0 ? void 0 : _c.trim()) || i18n.add;
        const resolvedLimitLabel = ((_d = this.addDisabledLabel) === null || _d === void 0 ? void 0 : _d.trim()) || i18n.limit((_e = this.maxItems) !== null && _e !== void 0 ? _e : 4);
        const slotClasses = {
            'grid-draggable__slot': true,
        };
        if (effectiveGap) {
            slotClasses[`grid-draggable__slot--gap-${effectiveGap}`] = true;
        }
        return (h(Host, { class: classes, style: { height: this.height }, "data-test": this.dataTest }, h("button", { ref: (el) => (this.dragHandleRef = el), part: "drag-handle", type: "button", "data-uai-drag-handle": "true", "aria-label": resolvedDragLabel, onPointerDown: () => (this.isDragging = true), onPointerUp: () => (this.isDragging = false), onPointerCancel: () => (this.isDragging = false), onBlur: () => (this.isDragging = false), class: {
                'grid-draggable__handle': true,
                'grid-draggable__handle--dragging': this.isDragging,
            } }, h("uai-icon", { name: "order-elements", size: "x-small" })), h("div", { class: "grid-draggable__body" }, h("div", { class: slotClasses, part: "slot" }, h("slot", { onSlotchange: this.syncSlotCount }))), this.addable !== false && (h("button", { part: "add-button", type: "button", "aria-label": atLimit ? resolvedLimitLabel : resolvedAddLabel, "aria-disabled": atLimit ? 'true' : undefined, title: atLimit ? resolvedLimitLabel : resolvedAddLabel, onClick: this.handleAddClick, class: {
                'grid-draggable__add': true,
                'grid-draggable__add--disabled': atLimit,
            } }, h("uai-icon", { name: "plus", size: "x-small" })))));
    }
    static get is() { return "uai-grid"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-grid.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-grid.css"]
        };
    }
    static get properties() {
        return {
            "height": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Sets an explicit CSS height on the grid container. Use token variables or percentages; pair with `alignItems`; avoid literal pixel strings."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "height"
            },
            "direction": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "direction",
                    "resolved": "\"column\" | \"column-reverse\" | \"row\" | \"row-reverse\"",
                    "references": {
                        "direction": {
                            "location": "import",
                            "path": "../grid/grid-interface",
                            "id": "src/components/grid/grid-interface.ts::direction",
                            "referenceLocation": "direction"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Controls the flex direction of children. Use `column` for vertical stacks and `row` for horizontal rows; pair with `gap`; avoid reversing visual vs DOM focus order unnecessarily."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "direction"
            },
            "justifyContent": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "justifyContent",
                    "resolved": "\"center\" | \"flex-end\" | \"flex-start\" | \"space-around\" | \"space-between\" | \"space-evenly\" | \"stretch\"",
                    "references": {
                        "justifyContent": {
                            "location": "import",
                            "path": "../grid/grid-interface",
                            "id": "src/components/grid/grid-interface.ts::justifyContent",
                            "referenceLocation": "justifyContent"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Controls how children are distributed along the main axis. Use standard flex alignment values; pair with `direction`; avoid non-standard CSS strings."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "justify-content"
            },
            "flexWrap": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "flexWrap",
                    "resolved": "\"wrap\" | \"wrap-reverse\"",
                    "references": {
                        "flexWrap": {
                            "location": "import",
                            "path": "../grid/grid-interface",
                            "id": "src/components/grid/grid-interface.ts::flexWrap",
                            "referenceLocation": "flexWrap"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Controls whether children wrap onto multiple lines. Use `wrap` for 12-column grids; pair with `xxs`\u2013`xg`; avoid wrapping inside fixed-slot `draggable` rows."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "flex-wrap"
            },
            "alignItems": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "alignItems",
                    "resolved": "\"baseline\" | \"center\" | \"flex-end\" | \"flex-start\" | \"stretch\"",
                    "references": {
                        "alignItems": {
                            "location": "import",
                            "path": "../grid/grid-interface",
                            "id": "src/components/grid/grid-interface.ts::alignItems",
                            "referenceLocation": "alignItems"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Controls alignment along the cross axis. Use `stretch` for equal-height cards or `center` for toolbars; pair with `direction`; avoid clipping taller items."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "align-items"
            },
            "container": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Applies a centered container capped by the UAI `width/content` token. Use for page-aligned rows; pair with `gap`; avoid combining with `containerFluid`."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "container"
            },
            "containerFluid": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Applies the wider responsive fluid-container max widths compatible with `bds-grid`. Use only for legacy fluid layouts; pair with `flexWrap=\"wrap\"`; avoid combining with `container`."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "container-fluid"
            },
            "xxs": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "breakpoint",
                    "resolved": "\"1\" | \"10\" | \"11\" | \"12\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"7\" | \"8\" | \"9\" | \"auto\"",
                    "references": {
                        "breakpoint": {
                            "location": "import",
                            "path": "../grid/grid-interface",
                            "id": "src/components/grid/grid-interface.ts::breakpoint",
                            "referenceLocation": "breakpoint"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Base 12-column span. Use values `1`\u2013`12` or `auto`; pair with a `flexWrap=\"wrap\"` parent `UaiGrid`; avoid combining with `type=\"draggable\"`."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "xxs"
            },
            "xs": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "breakpoint",
                    "resolved": "\"1\" | \"10\" | \"11\" | \"12\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"7\" | \"8\" | \"9\" | \"auto\"",
                    "references": {
                        "breakpoint": {
                            "location": "import",
                            "path": "../grid/grid-interface",
                            "id": "src/components/grid/grid-interface.ts::breakpoint",
                            "referenceLocation": "breakpoint"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "12-column span from the legacy `xs` breakpoint. Use for responsive column widths; pair with `xxs`; avoid without a base span."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "xs"
            },
            "sm": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "breakpoint",
                    "resolved": "\"1\" | \"10\" | \"11\" | \"12\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"7\" | \"8\" | \"9\" | \"auto\"",
                    "references": {
                        "breakpoint": {
                            "location": "import",
                            "path": "../grid/grid-interface",
                            "id": "src/components/grid/grid-interface.ts::breakpoint",
                            "referenceLocation": "breakpoint"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "12-column span from the legacy `sm` breakpoint. Use for responsive column widths; pair with `xxs`; avoid without a base span."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "sm"
            },
            "md": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "breakpoint",
                    "resolved": "\"1\" | \"10\" | \"11\" | \"12\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"7\" | \"8\" | \"9\" | \"auto\"",
                    "references": {
                        "breakpoint": {
                            "location": "import",
                            "path": "../grid/grid-interface",
                            "id": "src/components/grid/grid-interface.ts::breakpoint",
                            "referenceLocation": "breakpoint"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "12-column span from the legacy `md` breakpoint. Use for responsive column widths; pair with `xxs`; avoid without a base span."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "md"
            },
            "lg": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "breakpoint",
                    "resolved": "\"1\" | \"10\" | \"11\" | \"12\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"7\" | \"8\" | \"9\" | \"auto\"",
                    "references": {
                        "breakpoint": {
                            "location": "import",
                            "path": "../grid/grid-interface",
                            "id": "src/components/grid/grid-interface.ts::breakpoint",
                            "referenceLocation": "breakpoint"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "12-column span from the legacy `lg` breakpoint. Use for responsive column widths; pair with `xxs`; avoid without a base span."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "lg"
            },
            "xg": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "breakpoint",
                    "resolved": "\"1\" | \"10\" | \"11\" | \"12\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"7\" | \"8\" | \"9\" | \"auto\"",
                    "references": {
                        "breakpoint": {
                            "location": "import",
                            "path": "../grid/grid-interface",
                            "id": "src/components/grid/grid-interface.ts::breakpoint",
                            "referenceLocation": "breakpoint"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "12-column span from the legacy `xg` breakpoint. Use for responsive column widths; pair with `xxs`; avoid without a base span."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "xg"
            },
            "xxsOffset": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "breakpoint",
                    "resolved": "\"1\" | \"10\" | \"11\" | \"12\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"7\" | \"8\" | \"9\" | \"auto\"",
                    "references": {
                        "breakpoint": {
                            "location": "import",
                            "path": "../grid/grid-interface",
                            "id": "src/components/grid/grid-interface.ts::breakpoint",
                            "referenceLocation": "breakpoint"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Base left offset in the 12-column grid. Use values `1`\u2013`12` or `auto`; pair with `xxs`; avoid in `type=\"draggable\"` rows."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "xxs-offset"
            },
            "xsOffset": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "breakpoint",
                    "resolved": "\"1\" | \"10\" | \"11\" | \"12\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"7\" | \"8\" | \"9\" | \"auto\"",
                    "references": {
                        "breakpoint": {
                            "location": "import",
                            "path": "../grid/grid-interface",
                            "id": "src/components/grid/grid-interface.ts::breakpoint",
                            "referenceLocation": "breakpoint"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Left offset from the legacy `xs` breakpoint. Use for responsive offsets; pair with `xs`; avoid in `type=\"draggable\"` rows."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "xs-offset"
            },
            "smOffset": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "breakpoint",
                    "resolved": "\"1\" | \"10\" | \"11\" | \"12\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"7\" | \"8\" | \"9\" | \"auto\"",
                    "references": {
                        "breakpoint": {
                            "location": "import",
                            "path": "../grid/grid-interface",
                            "id": "src/components/grid/grid-interface.ts::breakpoint",
                            "referenceLocation": "breakpoint"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Left offset from the legacy `sm` breakpoint. Use for responsive offsets; pair with `sm`; avoid in `type=\"draggable\"` rows."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "sm-offset"
            },
            "mdOffset": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "breakpoint",
                    "resolved": "\"1\" | \"10\" | \"11\" | \"12\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"7\" | \"8\" | \"9\" | \"auto\"",
                    "references": {
                        "breakpoint": {
                            "location": "import",
                            "path": "../grid/grid-interface",
                            "id": "src/components/grid/grid-interface.ts::breakpoint",
                            "referenceLocation": "breakpoint"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Left offset from the legacy `md` breakpoint. Use for responsive offsets; pair with `md`; avoid in `type=\"draggable\"` rows."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "md-offset"
            },
            "lgOffset": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "breakpoint",
                    "resolved": "\"1\" | \"10\" | \"11\" | \"12\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"7\" | \"8\" | \"9\" | \"auto\"",
                    "references": {
                        "breakpoint": {
                            "location": "import",
                            "path": "../grid/grid-interface",
                            "id": "src/components/grid/grid-interface.ts::breakpoint",
                            "referenceLocation": "breakpoint"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Left offset from the legacy `lg` breakpoint. Use for responsive offsets; pair with `lg`; avoid in `type=\"draggable\"` rows."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "lg-offset"
            },
            "xgOffset": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "breakpoint",
                    "resolved": "\"1\" | \"10\" | \"11\" | \"12\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"7\" | \"8\" | \"9\" | \"auto\"",
                    "references": {
                        "breakpoint": {
                            "location": "import",
                            "path": "../grid/grid-interface",
                            "id": "src/components/grid/grid-interface.ts::breakpoint",
                            "referenceLocation": "breakpoint"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Left offset from the legacy `xg` breakpoint. Use for responsive offsets; pair with `xg`; avoid in `type=\"draggable\"` rows."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "xg-offset"
            },
            "gap": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "gap",
                    "resolved": "\"1\" | \"10\" | \"11\" | \"12\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"7\" | \"8\" | \"9\" | \"half\" | \"none\"",
                    "references": {
                        "gap": {
                            "location": "import",
                            "path": "../grid/grid-interface",
                            "id": "src/components/grid/grid-interface.ts::gap",
                            "referenceLocation": "gap"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Gap token alias retained for compatibility with `bds-grid` (`2` maps to `spacing/md`). Use `2` for standard card rows and vertical stacks; pair with `direction`; avoid arbitrary margins on children."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "gap"
            },
            "padding": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Padding token aliases retained for compatibility with `bds-grid`. Accepts one value or a\nspace-separated list, for example `\"t-2 x-3\"`. Use for tokenized container spacing; pair with `gap`; avoid overriding internal `draggable` slot padding."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "padding"
            },
            "margin": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Margin token aliases retained for compatibility with `bds-grid`. Accepts one value or a\nspace-separated list, for example `\"t-2 x-auto\"`. Use for tokenized outer spacing; pair with `container`; avoid manual negative margins."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "margin"
            },
            "bgColor": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "Color",
                    "resolved": "\"$color-border-1\" | \"$color-border-2\" | \"$color-border-3\" | \"$color-brand\" | \"$color-content-bright\" | \"$color-content-default\" | \"$color-content-din\" | \"$color-content-disable\" | \"$color-content-ghost\" | \"$color-delete\" | \"$color-error\" | \"$color-focus\" | \"$color-hover\" | \"$color-info\" | \"$color-negative\" | \"$color-positive\" | \"$color-pressed\" | \"$color-primary\" | \"$color-secondary\" | \"$color-shadow-0\" | \"$color-shadow-1\" | \"$color-success\" | \"$color-surface-0\" | \"$color-surface-1\" | \"$color-surface-2\" | \"$color-surface-3\" | \"$color-surface-4\" | \"$color-surface-negative\" | \"$color-surface-positive\" | \"$color-surface-primary\" | \"$color-system\" | \"$color-warning\"",
                    "references": {
                        "Color": {
                            "location": "import",
                            "path": "../grid/color-grid-interface",
                            "id": "src/components/grid/color-grid-interface.ts::Color",
                            "referenceLocation": "Color"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Legacy color name mapped to the closest semantic UAI background token.\nUse surface tokens in new UAI usage; pair with `UaiThemeProvider`; avoid raw hex colors."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "bg-color"
            },
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UaiGridType",
                    "resolved": "\"default\" | \"draggable\"",
                    "references": {
                        "UaiGridType": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-grid/uai-grid.tsx",
                            "id": "src/components/uai-grid/uai-grid.tsx::UaiGridType"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Row composition mode from UAI Core (`default` or `draggable`).\nUse `draggable` to display the lateral reorder handle and plus action while preserving slot `gap`; pair with a `sortable` parent `UaiGrid`; avoid using the native HTML `draggable` attribute."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "type"
            },
            "sortable": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Enables vertical drag-and-drop and keyboard (`Alt+ArrowUp` / `Alt+ArrowDown`) sorting of child `uai-grid[type=\"draggable\"]` rows.\nUse on a vertical (`direction=\"column\"`) parent `UaiGrid`; pair with `onUaiReorder`; avoid enabling on leaf item grids."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "sortable",
                "defaultValue": "false"
            },
            "controlledReorder": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Skips automatic DOM node movement on reorder so controlled frameworks (such as React state) own child order.\nUse `true` when rendering `draggable` rows from a reactive array in `onUaiReorder`; pair with `sortable`; avoid `true` in uncontrolled static HTML."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "controlled-reorder",
                "defaultValue": "false"
            },
            "addable": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Controls whether the lateral `+` button is rendered when `type=\"draggable\"`.\nUse `true` when users can append items to the row; pair with `maxItems` and `onUaiAddClick`; avoid when the row has a fixed single item."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "addable",
                "defaultValue": "true"
            },
            "maxItems": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Maximum number of slotted items allowed in the row before marking the `+` button `aria-disabled=\"true\"`.\nUse `4` for dashboard KPI rows; pair with `addable` and `onUaiAddClick`; avoid setting `0`."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "max-items",
                "defaultValue": "4"
            },
            "addDisabled": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Explicitly disables the lateral `+` button with `aria-disabled=\"true\"` while keeping it focusable.\nUse when external business rules block adding items; pair with `addDisabledLabel`; avoid hiding the button abruptly during keyboard navigation."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "add-disabled",
                "defaultValue": "false"
            },
            "language": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UaiGridLanguage",
                    "resolved": "\"en_US\" | \"es_ES\" | \"pt_BR\"",
                    "references": {
                        "UaiGridLanguage": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-grid/uai-grid.tsx",
                            "id": "src/components/uai-grid/uai-grid.tsx::UaiGridLanguage"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Language for default accessible labels of the drag handle, plus button, and live announcements.\nUse `pt_BR`, `en_US`, or `es_ES`; pair with `dragLabel` and `addLabel` for custom copy; avoid untranslated labels."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "language",
                "defaultValue": "'pt_BR'"
            },
            "dragLabel": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Accessible name override for the lateral drag handle button.\nUse to name the specific section being reordered; pair with `type=\"draggable\"`; avoid empty strings."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "drag-label",
                "defaultValue": "''"
            },
            "addLabel": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Accessible name override for the lateral `+` button when enabled.\nUse to specify what kind of block will be added; pair with `type=\"draggable\"`; avoid empty strings."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "add-label",
                "defaultValue": "''"
            },
            "addDisabledLabel": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Accessible name and tooltip title override when the `+` button reaches `maxItems` or `addDisabled`.\nUse to explain why no more items can be added; pair with `maxItems`; avoid generic messages."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "add-disabled-label",
                "defaultValue": "''"
            },
            "dataTest": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Automation selector applied to the draggable container or host.\nUse in automated tests; pair with accessible role queries; avoid styling by this attribute."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "data-test",
                "defaultValue": "null"
            }
        };
    }
    static get states() {
        return {
            "slotItemCount": {},
            "isDragging": {},
            "liveMessage": {}
        };
    }
    static get events() {
        return [{
                "method": "uaiAddClick",
                "name": "uaiAddClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the lateral `+` button of a `type=\"draggable\"` row is activated while enabled.\nUse to append or choose a new card/item for this row; pair with `maxItems`; avoid mutating unrelated rows."
                },
                "complexType": {
                    "original": "UaiGridAddDetail",
                    "resolved": "UaiGridAddDetail",
                    "references": {
                        "UaiGridAddDetail": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-grid/uai-grid.tsx",
                            "id": "src/components/uai-grid/uai-grid.tsx::UaiGridAddDetail"
                        }
                    }
                }
            }, {
                "method": "uaiReorder",
                "name": "uaiReorder",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted by a `sortable` `UaiGrid` when a child `type=\"draggable\"` row moves to a new index via pointer or `Alt+ArrowUp`/`Alt+ArrowDown`.\nUse to persist or sync the new section order; pair with `sortable`; avoid mutating DOM manually when `controlledReorder` is true."
                },
                "complexType": {
                    "original": "UaiGridReorderDetail",
                    "resolved": "UaiGridReorderDetail",
                    "references": {
                        "UaiGridReorderDetail": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-grid/uai-grid.tsx",
                            "id": "src/components/uai-grid/uai-grid.tsx::UaiGridReorderDetail"
                        }
                    }
                }
            }];
    }
    static get methods() {
        return {
            "focusDragHandle": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Focuses the internal drag handle when `type=\"draggable\"`. Use after programmatic reorder in controlled layouts; pair with `controlledReorder`; avoid calling on non-draggable grids.",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "sortable",
                "methodName": "handleSortableChange"
            }];
    }
}
