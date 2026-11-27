export type UaiSectionTitleHeadingTag = 'h2' | 'h3' | 'h4';
/**
 * Semantic section header with heading, optional description, and optional trailing actions.
 * Use to introduce analytical or content blocks beneath `uai-page-header`; pair with `headingTag` matching document hierarchy;
 * avoid using `h1` here (reserve `h1` for the page title).
 *
 * @slot actions - Optional trailing actions.
 * @part container - The section header container.
 * @part heading - The semantic heading element.
 * @part description - The optional supporting description element.
 * @part actions - The trailing actions slot wrapper.
 */
export declare class UaiSectionTitle {
    el: HTMLElement;
    hasActions: boolean;
    /**
     * Main text of the section heading.
     */
    heading?: string;
    /**
     * Optional supporting description rendered below the heading when non-empty.
     */
    description?: string;
    /**
     * HTML heading element tag (`h2`, `h3`, or `h4`) to preserve document outline hierarchy.
     */
    headingTag?: UaiSectionTitleHeadingTag;
    /**
     * Selector attribute applied to the container for automated tests.
     */
    dataTest?: string;
    private childObserver?;
    componentWillLoad(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private syncActionsSlot;
    private resolveHeadingTag;
    render(): HTMLElement;
}
