import { EventEmitter } from '../../stencil-public-runtime';
import type { Color } from '../grid/color-grid-interface';
import type { alignItems, breakpoint, direction, flexWrap, gap, justifyContent } from '../grid/grid-interface';
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
export declare class UaiGrid {
    el: HTMLElement;
    slotItemCount: number;
    isDragging: boolean;
    liveMessage: string;
    /** Sets an explicit CSS height on the grid container. Use token variables or percentages; pair with `alignItems`; avoid literal pixel strings. */
    height?: string;
    /** Controls the flex direction of children. Use `column` for vertical stacks and `row` for horizontal rows; pair with `gap`; avoid reversing visual vs DOM focus order unnecessarily. */
    direction?: direction;
    /** Controls how children are distributed along the main axis. Use standard flex alignment values; pair with `direction`; avoid non-standard CSS strings. */
    justifyContent?: justifyContent;
    /** Controls whether children wrap onto multiple lines. Use `wrap` for 12-column grids; pair with `xxs`–`xg`; avoid wrapping inside fixed-slot `draggable` rows. */
    flexWrap?: flexWrap;
    /** Controls alignment along the cross axis. Use `stretch` for equal-height cards or `center` for toolbars; pair with `direction`; avoid clipping taller items. */
    alignItems?: alignItems;
    /** Applies a centered container capped by the UAI `width/content` token. Use for page-aligned rows; pair with `gap`; avoid combining with `containerFluid`. */
    container?: boolean;
    /** Applies the wider responsive fluid-container max widths compatible with `bds-grid`. Use only for legacy fluid layouts; pair with `flexWrap="wrap"`; avoid combining with `container`. */
    containerFluid?: boolean;
    /** Base 12-column span. Use values `1`–`12` or `auto`; pair with a `flexWrap="wrap"` parent `UaiGrid`; avoid combining with `type="draggable"`. */
    xxs?: breakpoint;
    /** 12-column span from the legacy `xs` breakpoint. Use for responsive column widths; pair with `xxs`; avoid without a base span. */
    xs?: breakpoint;
    /** 12-column span from the legacy `sm` breakpoint. Use for responsive column widths; pair with `xxs`; avoid without a base span. */
    sm?: breakpoint;
    /** 12-column span from the legacy `md` breakpoint. Use for responsive column widths; pair with `xxs`; avoid without a base span. */
    md?: breakpoint;
    /** 12-column span from the legacy `lg` breakpoint. Use for responsive column widths; pair with `xxs`; avoid without a base span. */
    lg?: breakpoint;
    /** 12-column span from the legacy `xg` breakpoint. Use for responsive column widths; pair with `xxs`; avoid without a base span. */
    xg?: breakpoint;
    /** Base left offset in the 12-column grid. Use values `1`–`12` or `auto`; pair with `xxs`; avoid in `type="draggable"` rows. */
    xxsOffset?: breakpoint;
    /** Left offset from the legacy `xs` breakpoint. Use for responsive offsets; pair with `xs`; avoid in `type="draggable"` rows. */
    xsOffset?: breakpoint;
    /** Left offset from the legacy `sm` breakpoint. Use for responsive offsets; pair with `sm`; avoid in `type="draggable"` rows. */
    smOffset?: breakpoint;
    /** Left offset from the legacy `md` breakpoint. Use for responsive offsets; pair with `md`; avoid in `type="draggable"` rows. */
    mdOffset?: breakpoint;
    /** Left offset from the legacy `lg` breakpoint. Use for responsive offsets; pair with `lg`; avoid in `type="draggable"` rows. */
    lgOffset?: breakpoint;
    /** Left offset from the legacy `xg` breakpoint. Use for responsive offsets; pair with `xg`; avoid in `type="draggable"` rows. */
    xgOffset?: breakpoint;
    /** Gap token alias retained for compatibility with `bds-grid` (`2` maps to `spacing/md`). Use `2` for standard card rows and vertical stacks; pair with `direction`; avoid arbitrary margins on children. */
    gap?: gap;
    /**
     * Padding token aliases retained for compatibility with `bds-grid`. Accepts one value or a
     * space-separated list, for example `"t-2 x-3"`. Use for tokenized container spacing; pair with `gap`; avoid overriding internal `draggable` slot padding.
     */
    padding?: string;
    /**
     * Margin token aliases retained for compatibility with `bds-grid`. Accepts one value or a
     * space-separated list, for example `"t-2 x-auto"`. Use for tokenized outer spacing; pair with `container`; avoid manual negative margins.
     */
    margin?: string;
    /**
     * Legacy color name mapped to the closest semantic UAI background token.
     * Use surface tokens in new UAI usage; pair with `UaiThemeProvider`; avoid raw hex colors.
     */
    bgColor?: Color;
    /**
     * Row composition mode from UAI Core (`default` or `draggable`).
     * Use `draggable` to display the lateral reorder handle and plus action while preserving slot `gap`; pair with a `sortable` parent `UaiGrid`; avoid using the native HTML `draggable` attribute.
     */
    type?: UaiGridType;
    /**
     * Enables vertical drag-and-drop and keyboard (`Alt+ArrowUp` / `Alt+ArrowDown`) sorting of child `uai-grid[type="draggable"]` rows.
     * Use on a vertical (`direction="column"`) parent `UaiGrid`; pair with `onUaiReorder`; avoid enabling on leaf item grids.
     */
    sortable?: boolean;
    /**
     * Skips automatic DOM node movement on reorder so controlled frameworks (such as React state) own child order.
     * Use `true` when rendering `draggable` rows from a reactive array in `onUaiReorder`; pair with `sortable`; avoid `true` in uncontrolled static HTML.
     */
    controlledReorder?: boolean;
    /**
     * Controls whether the lateral `+` button is rendered when `type="draggable"`.
     * Use `true` when users can append items to the row; pair with `maxItems` and `onUaiAddClick`; avoid when the row has a fixed single item.
     */
    addable?: boolean;
    /**
     * Maximum number of slotted items allowed in the row before marking the `+` button `aria-disabled="true"`.
     * Use `4` for dashboard KPI rows; pair with `addable` and `onUaiAddClick`; avoid setting `0`.
     */
    maxItems?: number;
    /**
     * Explicitly disables the lateral `+` button with `aria-disabled="true"` while keeping it focusable.
     * Use when external business rules block adding items; pair with `addDisabledLabel`; avoid hiding the button abruptly during keyboard navigation.
     */
    addDisabled?: boolean;
    /**
     * Language for default accessible labels of the drag handle, plus button, and live announcements.
     * Use `pt_BR`, `en_US`, or `es_ES`; pair with `dragLabel` and `addLabel` for custom copy; avoid untranslated labels.
     */
    language?: UaiGridLanguage;
    /**
     * Accessible name override for the lateral drag handle button.
     * Use to name the specific section being reordered; pair with `type="draggable"`; avoid empty strings.
     */
    dragLabel?: string;
    /**
     * Accessible name override for the lateral `+` button when enabled.
     * Use to specify what kind of block will be added; pair with `type="draggable"`; avoid empty strings.
     */
    addLabel?: string;
    /**
     * Accessible name and tooltip title override when the `+` button reaches `maxItems` or `addDisabled`.
     * Use to explain why no more items can be added; pair with `maxItems`; avoid generic messages.
     */
    addDisabledLabel?: string;
    /**
     * Automation selector applied to the draggable container or host.
     * Use in automated tests; pair with accessible role queries; avoid styling by this attribute.
     */
    dataTest?: string;
    /**
     * Emitted when the lateral `+` button of a `type="draggable"` row is activated while enabled.
     * Use to append or choose a new card/item for this row; pair with `maxItems`; avoid mutating unrelated rows.
     */
    uaiAddClick: EventEmitter<UaiGridAddDetail>;
    /**
     * Emitted by a `sortable` `UaiGrid` when a child `type="draggable"` row moves to a new index via pointer or `Alt+ArrowUp`/`Alt+ArrowDown`.
     * Use to persist or sync the new section order; pair with `sortable`; avoid mutating DOM manually when `controlledReorder` is true.
     */
    uaiReorder: EventEmitter<UaiGridReorderDetail>;
    private dragHandleRef?;
    private draggedItem;
    private activePointerId;
    private startX;
    private startY;
    private pointerOffsetX;
    private pointerOffsetY;
    private isSortingActive;
    private dropTarget;
    private dropPosition;
    private dragPreview;
    /** Focuses the internal drag handle when `type="draggable"`. Use after programmatic reorder in controlled layouts; pair with `controlledReorder`; avoid calling on non-draggable grids. */
    focusDragHandle(): Promise<void>;
    componentWillLoad(): void;
    componentDidLoad(): void;
    handleSortableChange(next: boolean): void;
    disconnectedCallback(): void;
    private resolveLanguage;
    private resolveType;
    private syncSlotCount;
    private get isAtLimit();
    private handleAddClick;
    private getDraggableItems;
    private attachSortableListeners;
    private detachSortableListeners;
    private attachGlobalDragListeners;
    private detachGlobalDragListeners;
    private findDragHandleInPath;
    private onListPointerDown;
    private createDragPreview;
    private moveDragPreview;
    private clearDropIndicators;
    private updateDropTarget;
    private onDocumentPointerMove;
    private onDocumentPointerUp;
    private onDocumentPointerCancel;
    private onDocumentEscape;
    private onWindowBlur;
    private finishSorting;
    private onListKeyDown;
    render(): any;
}
