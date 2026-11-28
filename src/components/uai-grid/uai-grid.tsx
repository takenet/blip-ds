import { Component, Element, Event, EventEmitter, h, Host, Method, Prop, State, Watch } from '@stencil/core';
import type { Color } from '../grid/color-grid-interface';
import type {
  alignItems,
  breakpoint,
  direction,
  flexWrap,
  gap,
  justifyContent,
} from '../grid/grid-interface';
import { warnLegacyValue } from '../../utils/deprecation';

export type UaiGridType = 'default' | 'draggable';
export type UaiGridLanguage = 'pt_BR' | 'en_US' | 'es_ES';

export interface UaiGridReorderDetail {
  fromIndex: number;
  toIndex: number;
}

export interface UaiGridAddDetail {
  count: number;
  maxItems?: number;
}

const GRID_TYPES: readonly UaiGridType[] = ['default', 'draggable'];
const DRAG_DISTANCE_THRESHOLD = 4;

const GRID_I18N: Record<
  UaiGridLanguage,
  { drag: string; add: string; limit: (max: number) => string; moved: (pos: number, total: number) => string }
> = {
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
@Component({
  tag: 'uai-grid',
  styleUrl: 'uai-grid.scss',
  shadow: true,
})
export class UaiGrid {
  @Element() el!: HTMLElement;

  @State() slotItemCount = 0;
  @State() isDragging = false;
  @State() liveMessage = '';

  /** Sets an explicit CSS height on the grid container. Use token variables or percentages; pair with `alignItems`; avoid literal pixel strings. */
  @Prop() height?: string;

  /** Controls the flex direction of children. Use `column` for vertical stacks and `row` for horizontal rows; pair with `gap`; avoid reversing visual vs DOM focus order unnecessarily. */
  @Prop() direction?: direction;

  /** Controls how children are distributed along the main axis. Use standard flex alignment values; pair with `direction`; avoid non-standard CSS strings. */
  @Prop() justifyContent?: justifyContent;

  /** Controls whether children wrap onto multiple lines. Use `wrap` for 12-column grids; pair with `xxs`–`xg`; avoid wrapping inside fixed-slot `draggable` rows. */
  @Prop() flexWrap?: flexWrap;

  /** Controls alignment along the cross axis. Use `stretch` for equal-height cards or `center` for toolbars; pair with `direction`; avoid clipping taller items. */
  @Prop() alignItems?: alignItems;

  /** Applies a centered container capped by the UAI `width/content` token. Use for page-aligned rows; pair with `gap`; avoid combining with `containerFluid`. */
  @Prop() container?: boolean;

  /** Applies the wider responsive fluid-container max widths compatible with `bds-grid`. Use only for legacy fluid layouts; pair with `flexWrap="wrap"`; avoid combining with `container`. */
  @Prop() containerFluid?: boolean;

  /** Base 12-column span. Use values `1`–`12` or `auto`; pair with a `flexWrap="wrap"` parent `UaiGrid`; avoid combining with `type="draggable"`. */
  @Prop() xxs?: breakpoint;

  /** 12-column span from the legacy `xs` breakpoint. Use for responsive column widths; pair with `xxs`; avoid without a base span. */
  @Prop() xs?: breakpoint;

  /** 12-column span from the legacy `sm` breakpoint. Use for responsive column widths; pair with `xxs`; avoid without a base span. */
  @Prop() sm?: breakpoint;

  /** 12-column span from the legacy `md` breakpoint. Use for responsive column widths; pair with `xxs`; avoid without a base span. */
  @Prop() md?: breakpoint;

  /** 12-column span from the legacy `lg` breakpoint. Use for responsive column widths; pair with `xxs`; avoid without a base span. */
  @Prop() lg?: breakpoint;

  /** 12-column span from the legacy `xg` breakpoint. Use for responsive column widths; pair with `xxs`; avoid without a base span. */
  @Prop() xg?: breakpoint;

  /** Base left offset in the 12-column grid. Use values `1`–`12` or `auto`; pair with `xxs`; avoid in `type="draggable"` rows. */
  @Prop() xxsOffset?: breakpoint;

  /** Left offset from the legacy `xs` breakpoint. Use for responsive offsets; pair with `xs`; avoid in `type="draggable"` rows. */
  @Prop() xsOffset?: breakpoint;

  /** Left offset from the legacy `sm` breakpoint. Use for responsive offsets; pair with `sm`; avoid in `type="draggable"` rows. */
  @Prop() smOffset?: breakpoint;

  /** Left offset from the legacy `md` breakpoint. Use for responsive offsets; pair with `md`; avoid in `type="draggable"` rows. */
  @Prop() mdOffset?: breakpoint;

  /** Left offset from the legacy `lg` breakpoint. Use for responsive offsets; pair with `lg`; avoid in `type="draggable"` rows. */
  @Prop() lgOffset?: breakpoint;

  /** Left offset from the legacy `xg` breakpoint. Use for responsive offsets; pair with `xg`; avoid in `type="draggable"` rows. */
  @Prop() xgOffset?: breakpoint;

  /** Gap token alias retained for compatibility with `bds-grid` (`2` maps to `spacing/md`). Use `2` for standard card rows and vertical stacks; pair with `direction`; avoid arbitrary margins on children. */
  @Prop() gap?: gap;

  /**
   * Padding token aliases retained for compatibility with `bds-grid`. Accepts one value or a
   * space-separated list, for example `"t-2 x-3"`. Use for tokenized container spacing; pair with `gap`; avoid overriding internal `draggable` slot padding.
   */
  @Prop() padding?: string;

  /**
   * Margin token aliases retained for compatibility with `bds-grid`. Accepts one value or a
   * space-separated list, for example `"t-2 x-auto"`. Use for tokenized outer spacing; pair with `container`; avoid manual negative margins.
   */
  @Prop() margin?: string;

  /**
   * Legacy color name mapped to the closest semantic UAI background token.
   * Use surface tokens in new UAI usage; pair with `UaiThemeProvider`; avoid raw hex colors.
   */
  @Prop() bgColor?: Color;

  /**
   * Row composition mode from UAI Core (`default` or `draggable`).
   * Use `draggable` to display the lateral reorder handle and plus action while preserving slot `gap`; pair with a `sortable` parent `UaiGrid`; avoid using the native HTML `draggable` attribute.
   */
  @Prop({ reflect: true }) type?: UaiGridType;

  /**
   * Enables vertical drag-and-drop and keyboard (`Alt+ArrowUp` / `Alt+ArrowDown`) sorting of child `uai-grid[type="draggable"]` rows.
   * Use on a vertical (`direction="column"`) parent `UaiGrid`; pair with `onUaiReorder`; avoid enabling on leaf item grids.
   */
  @Prop({ reflect: true }) sortable?: boolean = false;

  /**
   * Skips automatic DOM node movement on reorder so controlled frameworks (such as React state) own child order.
   * Use `true` when rendering `draggable` rows from a reactive array in `onUaiReorder`; pair with `sortable`; avoid `true` in uncontrolled static HTML.
   */
  @Prop() controlledReorder?: boolean = false;

  /**
   * Controls whether the lateral `+` button is rendered when `type="draggable"`.
   * Use `true` when users can append items to the row; pair with `maxItems` and `onUaiAddClick`; avoid when the row has a fixed single item.
   */
  @Prop() addable?: boolean = true;

  /**
   * Maximum number of slotted items allowed in the row before marking the `+` button `aria-disabled="true"`.
   * Use `4` for dashboard KPI rows; pair with `addable` and `onUaiAddClick`; avoid setting `0`.
   */
  @Prop() maxItems?: number = 4;

  /**
   * Explicitly disables the lateral `+` button with `aria-disabled="true"` while keeping it focusable.
   * Use when external business rules block adding items; pair with `addDisabledLabel`; avoid hiding the button abruptly during keyboard navigation.
   */
  @Prop() addDisabled?: boolean = false;

  /**
   * Language for default accessible labels of the drag handle, plus button, and live announcements.
   * Use `pt_BR`, `en_US`, or `es_ES`; pair with `dragLabel` and `addLabel` for custom copy; avoid untranslated labels.
   */
  @Prop() language?: UaiGridLanguage = 'pt_BR';

  /**
   * Accessible name override for the lateral drag handle button.
   * Use to name the specific section being reordered; pair with `type="draggable"`; avoid empty strings.
   */
  @Prop() dragLabel?: string = '';

  /**
   * Accessible name override for the lateral `+` button when enabled.
   * Use to specify what kind of block will be added; pair with `type="draggable"`; avoid empty strings.
   */
  @Prop() addLabel?: string = '';

  /**
   * Accessible name and tooltip title override when the `+` button reaches `maxItems` or `addDisabled`.
   * Use to explain why no more items can be added; pair with `maxItems`; avoid generic messages.
   */
  @Prop() addDisabledLabel?: string = '';

  /**
   * Automation selector applied to the draggable container or host.
   * Use in automated tests; pair with accessible role queries; avoid styling by this attribute.
   */
  @Prop() dataTest?: string = null;

  /**
   * Emitted when the lateral `+` button of a `type="draggable"` row is activated while enabled.
   * Use to append or choose a new card/item for this row; pair with `maxItems`; avoid mutating unrelated rows.
   */
  @Event({ bubbles: true, composed: true }) uaiAddClick!: EventEmitter<UaiGridAddDetail>;

  /**
   * Emitted by a `sortable` `UaiGrid` when a child `type="draggable"` row moves to a new index via pointer or `Alt+ArrowUp`/`Alt+ArrowDown`.
   * Use to persist or sync the new section order; pair with `sortable`; avoid mutating DOM manually when `controlledReorder` is true.
   */
  @Event({ bubbles: true, composed: true }) uaiReorder!: EventEmitter<UaiGridReorderDetail>;

  private dragHandleRef?: HTMLButtonElement;
  private draggedItem: HTMLElement | null = null;
  private activePointerId: number | null = null;
  private startX = 0;
  private startY = 0;
  private pointerOffsetX = 0;
  private pointerOffsetY = 0;
  private isSortingActive = false;
  private dropTarget: HTMLElement | null = null;
  private dropPosition: 'before' | 'after' | null = null;
  private dragPreview: HTMLElement | null = null;

  /** Focuses the internal drag handle when `type="draggable"`. Use after programmatic reorder in controlled layouts; pair with `controlledReorder`; avoid calling on non-draggable grids. */
  @Method()
  async focusDragHandle(): Promise<void> {
    this.dragHandleRef?.focus({ preventScroll: true });
  }

  componentWillLoad(): void {
    this.syncSlotCount();
  }

  componentDidLoad(): void {
    if (this.sortable) {
      this.attachSortableListeners();
    }
  }

  @Watch('sortable')
  handleSortableChange(next: boolean): void {
    this.finishSorting(false);
    this.detachSortableListeners();
    if (next) {
      this.attachSortableListeners();
    }
  }

  disconnectedCallback(): void {
    this.finishSorting(false);
    this.detachSortableListeners();
  }

  private resolveLanguage(): UaiGridLanguage {
    if (this.language === 'en_US' || this.language === 'es_ES' || this.language === 'pt_BR') {
      return this.language;
    }
    warnLegacyValue('uai-grid', 'language', this.language, 'pt_BR');
    return 'pt_BR';
  }

  private resolveType(): UaiGridType | undefined {
    if (this.type === undefined || this.type === null) return undefined;
    if ((GRID_TYPES as readonly string[]).includes(this.type)) return this.type;
    warnLegacyValue('uai-grid', 'type', this.type, 'default');
    return 'default';
  }

  private syncSlotCount = (): void => {
    if (!this.el) return;
    this.slotItemCount = Array.from(this.el.children).filter(
      (child) => !child.hasAttribute('slot'),
    ).length;
  };

  private get isAtLimit(): boolean {
    if (this.addDisabled) return true;
    if (typeof this.maxItems === 'number' && this.maxItems > 0) {
      return this.slotItemCount >= this.maxItems;
    }
    return false;
  }

  private handleAddClick = (event: MouseEvent): void => {
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

  private getDraggableItems(): HTMLElement[] {
    if (!this.el) return [];
    return Array.from(this.el.children).filter(
      (child): child is HTMLElement =>
        child instanceof HTMLElement &&
        child.tagName === 'UAI-GRID' &&
        child.getAttribute('type') === 'draggable',
    );
  }

  private attachSortableListeners(): void {
    this.el.addEventListener('pointerdown', this.onListPointerDown);
    this.el.addEventListener('keydown', this.onListKeyDown);
  }

  private detachSortableListeners(): void {
    this.el?.removeEventListener('pointerdown', this.onListPointerDown);
    this.el?.removeEventListener('keydown', this.onListKeyDown);
    this.detachGlobalDragListeners();
  }

  private attachGlobalDragListeners(): void {
    if (typeof document === 'undefined') return;
    document.addEventListener('pointermove', this.onDocumentPointerMove);
    document.addEventListener('pointerup', this.onDocumentPointerUp);
    document.addEventListener('pointercancel', this.onDocumentPointerCancel);
    document.addEventListener('keydown', this.onDocumentEscape, true);
    if (typeof window !== 'undefined') {
      window.addEventListener('blur', this.onWindowBlur);
    }
  }

  private detachGlobalDragListeners(): void {
    if (typeof document === 'undefined') return;
    document.removeEventListener('pointermove', this.onDocumentPointerMove);
    document.removeEventListener('pointerup', this.onDocumentPointerUp);
    document.removeEventListener('pointercancel', this.onDocumentPointerCancel);
    document.removeEventListener('keydown', this.onDocumentEscape, true);
    if (typeof window !== 'undefined') {
      window.removeEventListener('blur', this.onWindowBlur);
    }
  }

  private findDragHandleInPath(event: Event): { handle: HTMLElement; item: HTMLElement } | null {
    const path = typeof event.composedPath === 'function' ? event.composedPath() : [];
    let handle: HTMLElement | null = null;
    let item: HTMLElement | null = null;

    for (const node of path) {
      if (node === this.el) break;
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

  private onListPointerDown = (event: PointerEvent): void => {
    if (!this.sortable) return;
    if (event.pointerType === 'mouse' && event.button !== 0) return;

    const match = this.findDragHandleInPath(event);
    if (!match) return;

    event.preventDefault();
    this.draggedItem = match.item;
    this.activePointerId = event.pointerId;
    this.startX = event.clientX;
    this.startY = event.clientY;
    this.isSortingActive = false;
    match.handle.focus({ preventScroll: true });
    match.handle.setPointerCapture?.(event.pointerId);
    this.attachGlobalDragListeners();
  };

  private createDragPreview(pointerX: number, pointerY: number): void {
    if (!this.draggedItem || this.dragPreview || typeof document === 'undefined') return;
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

  private moveDragPreview(pointerX: number, pointerY: number): void {
    if (!this.dragPreview) return;
    const left = Math.round(pointerX - this.pointerOffsetX);
    const top = Math.round(pointerY - this.pointerOffsetY);
    this.dragPreview.style.transform = `translate3d(${left}px, ${top}px, 0)`;
  }

  private clearDropIndicators(): void {
    this.getDraggableItems().forEach((item) => {
      item.removeAttribute('data-uai-drop');
    });
    this.dropTarget = null;
    this.dropPosition = null;
  }

  private updateDropTarget(pointerY: number): void {
    this.clearDropIndicators();
    const candidates = this.getDraggableItems().filter((item) => item !== this.draggedItem);
    if (!candidates.length) return;

    let target = candidates[candidates.length - 1];
    let position: 'before' | 'after' = 'after';
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

  private onDocumentPointerMove = (event: PointerEvent): void => {
    if (!this.draggedItem || event.pointerId !== this.activePointerId) return;
    const distance = Math.hypot(event.clientX - this.startX, event.clientY - this.startY);
    if (!this.isSortingActive && distance < DRAG_DISTANCE_THRESHOLD) return;

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

  private onDocumentPointerUp = (event: PointerEvent): void => {
    if (!this.draggedItem || event.pointerId !== this.activePointerId) return;
    this.finishSorting(true);
  };

  private onDocumentPointerCancel = (event: PointerEvent): void => {
    if (!this.draggedItem || event.pointerId !== this.activePointerId) return;
    this.finishSorting(false);
  };

  private onDocumentEscape = (event: KeyboardEvent): void => {
    if (event.key === 'Escape' && this.draggedItem) {
      event.preventDefault();
      event.stopPropagation();
      this.finishSorting(false);
    }
  };

  private onWindowBlur = (): void => {
    if (this.draggedItem) {
      this.finishSorting(false);
    }
  };

  private finishSorting(commit: boolean): void {
    const dragged = this.draggedItem;
    const target = this.dropTarget;
    const position = this.dropPosition;
    const wasSorting = this.isSortingActive;

    if (commit && wasSorting && dragged && target && position) {
      const itemsBefore = this.getDraggableItems();
      const fromIndex = itemsBefore.indexOf(dragged);
      const targetIndex = itemsBefore.indexOf(target);

      let toIndex = position === 'before' ? targetIndex : targetIndex + 1;
      if (fromIndex < toIndex) toIndex -= 1;

      if (fromIndex !== -1 && toIndex !== -1 && fromIndex !== toIndex) {
        if (!this.controlledReorder) {
          if (position === 'before') {
            this.el.insertBefore(dragged, target);
          } else {
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
    this.el?.removeAttribute('data-uai-sorting');
    dragged?.removeAttribute('data-uai-dragging');
    if (typeof document !== 'undefined') {
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    }

    this.draggedItem = null;
    this.activePointerId = null;
    this.isSortingActive = false;
    this.detachGlobalDragListeners();

    if (wasSorting && dragged && typeof (dragged as unknown as UaiGrid).focusDragHandle === 'function') {
      void (dragged as unknown as UaiGrid).focusDragHandle();
    }
  }

  private onListKeyDown = (event: KeyboardEvent): void => {
    if (!this.sortable || !event.altKey || (event.key !== 'ArrowUp' && event.key !== 'ArrowDown')) return;
    const match = this.findDragHandleInPath(event);
    if (!match) return;

    const items = this.getDraggableItems();
    const fromIndex = items.indexOf(match.item);
    if (fromIndex === -1) return;

    const toIndex = event.key === 'ArrowUp' ? fromIndex - 1 : fromIndex + 1;
    if (toIndex < 0 || toIndex >= items.length) return;

    event.preventDefault();
    if (!this.controlledReorder) {
      if (event.key === 'ArrowUp') {
        this.el.insertBefore(match.item, items[toIndex]);
      } else {
        this.el.insertBefore(match.item, items[toIndex].nextElementSibling);
      }
    }

    const i18n = GRID_I18N[this.resolveLanguage()];
    this.liveMessage = i18n.moved(toIndex + 1, items.length);
    this.uaiReorder.emit({ fromIndex, toIndex });

    if (typeof (match.item as unknown as UaiGrid).focusDragHandle === 'function') {
      void (match.item as unknown as UaiGrid).focusDragHandle();
    } else {
      match.handle.focus({ preventScroll: true });
    }
  };

  render() {
    const resolvedType = this.resolveType();
    const isDraggableRow = resolvedType === 'draggable';
    const isDefaultRow = resolvedType === 'default';
    const classes: Record<string, boolean> = {
      host: true,
      'row-mode': isDefaultRow || isDraggableRow,
      'row-draggable': isDraggableRow,
      'sortable-list': Boolean(this.sortable),
    };
    const addValueClass = (prefix: string, value?: string) => {
      if (value) classes[`${prefix}${value}`] = true;
    };

    const addValueClasses = (prefix: string, values?: string) => {
      values?.split(/\s+/).forEach((value) => addValueClass(prefix, value));
    };

    const effectiveGap = this.gap ?? (isDefaultRow || isDraggableRow ? '2' : undefined);

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

    if (this.container) classes.container = true;
    if (this.containerFluid) classes['container-fluid'] = true;
    if (this.bgColor) classes[`bg-color--${this.bgColor.slice(1)}`] = true;

    if (!isDraggableRow) {
      return (
        <Host class={classes} style={{ height: this.height }} data-test={this.dataTest}>
          <slot onSlotchange={this.syncSlotCount} />
          {this.sortable && (
            <span class="grid-sr-only" aria-live="polite">
              {this.liveMessage}
            </span>
          )}
        </Host>
      );
    }

    const i18n = GRID_I18N[this.resolveLanguage()];
    const atLimit = this.isAtLimit;
    const resolvedDragLabel = this.dragLabel?.trim() || i18n.drag;
    const resolvedAddLabel = this.addLabel?.trim() || i18n.add;
    const resolvedLimitLabel = this.addDisabledLabel?.trim() || i18n.limit(this.maxItems ?? 4);

    const slotClasses: Record<string, boolean> = {
      'grid-draggable__slot': true,
    };
    if (effectiveGap) {
      slotClasses[`grid-draggable__slot--gap-${effectiveGap}`] = true;
    }

    return (
      <Host class={classes} style={{ height: this.height }} data-test={this.dataTest}>
        <button
          ref={(el) => (this.dragHandleRef = el)}
          part="drag-handle"
          type="button"
          data-uai-drag-handle="true"
          aria-label={resolvedDragLabel}
          onPointerDown={() => (this.isDragging = true)}
          onPointerUp={() => (this.isDragging = false)}
          onPointerCancel={() => (this.isDragging = false)}
          onBlur={() => (this.isDragging = false)}
          class={{
            'grid-draggable__handle': true,
            'grid-draggable__handle--dragging': this.isDragging,
          }}
        >
          <uai-icon name="order-elements" size="x-small" />
        </button>

        <div class="grid-draggable__body">
          <div class={slotClasses} part="slot">
            <slot onSlotchange={this.syncSlotCount} />
          </div>
        </div>

        {this.addable !== false && (
          <button
            part="add-button"
            type="button"
            aria-label={atLimit ? resolvedLimitLabel : resolvedAddLabel}
            aria-disabled={atLimit ? 'true' : undefined}
            title={atLimit ? resolvedLimitLabel : resolvedAddLabel}
            onClick={this.handleAddClick}
            class={{
              'grid-draggable__add': true,
              'grid-draggable__add--disabled': atLimit,
            }}
          >
            <uai-icon name="plus" size="x-small" />
          </button>
        )}
      </Host>
    );
  }
}
