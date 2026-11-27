import { EventEmitter } from '../../stencil-public-runtime';
export interface UaiBreadcrumbItem {
    label: string;
    href?: string;
}
export interface UaiBreadcrumbEditDetail {
    index: number;
    oldValue: string;
    value: string;
}
export type UaiBreadcrumbLanguage = 'pt_BR' | 'en_US' | 'es_ES';
export interface UaiBreadcrumbLabels {
    navigation: string;
    hiddenItems: string;
    edit: string;
    input: string;
    confirm: string;
    cancel: string;
    required: string;
    empty: string;
}
/**
 * Hierarchical page navigation. Use items in ancestor-to-current order; pair with UaiPageHeader;
 * avoid using it as an organization or flow context switcher.
 */
export declare class UaiBreadcrumb {
    el: HTMLElement;
    /**
     * Ordered page items as an array or JSON. Use label and optional href; pair with wrapItems; avoid context-selector data.
     */
    items: string | UaiBreadcrumbItem[];
    /**
     * Collapses intermediate items above three entries. Use false to show all; pair with items; avoid treating it as a depth limit.
     */
    wrapItems: boolean;
    /**
     * Allows renaming the last item. Use with the edit event; pair with UaiInput; avoid assuming the component persists changes.
     */
    editable: boolean;
    /**
     * Language for built-in messages. Use pt_BR, en_US or es_ES; pair with labels; avoid translating item labels implicitly.
     */
    language: UaiBreadcrumbLanguage;
    /**
     * Partial overrides for built-in text. Use for accessible names and validation; pair with language; avoid empty action names.
     */
    labels?: Partial<UaiBreadcrumbLabels>;
    /**
     * Optional heading level for the current label. Use inside page headers; pair with page semantics; avoid headings on ancestors.
     */
    currentHeadingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
    /**
     * Link activation with { label, href? }. Use to observe native navigation; pair with href; avoid duplicate router navigation.
     */
    uaiBreadcrumbItemClick: EventEmitter<UaiBreadcrumbItem>;
    /**
     * Rename request with original index and old/new value. Use to update items; pair with editable; avoid mutating input data.
     */
    uaiBreadcrumbItemEdit: EventEmitter<UaiBreadcrumbEditDetail>;
    parsedItems: UaiBreadcrumbItem[];
    editing: boolean;
    draft: string;
    invalid: boolean;
    opened: boolean;
    private readonly panelId;
    private toggle?;
    private editButton?;
    private input?;
    private panel?;
    private overlay?;
    private focusEditor;
    private restoreEditorFocus;
    private original?;
    protected parseItems(value: string | UaiBreadcrumbItem[]): void;
    protected wrapChanged(): void;
    protected editableChanged(): void;
    componentWillLoad(): void;
    componentDidRender(): void;
    disconnectedCallback(): void;
    private get texts();
    private closeOverlay;
    private toggleOverlay;
    private activate;
    private beginEditing;
    private cancelEditing;
    private confirm;
    private submit;
    private editorKeydown;
    private renderEditor;
    private renderItem;
    private renderCollapsed;
    render(): any;
}
