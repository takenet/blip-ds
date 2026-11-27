import { ComponentInterface } from '../../stencil-public-runtime';
export type UaiCardJustifyContent = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
/**
 * Header container for `UaiCard` when composing with subcomponents.
 * Use inside `uai-card` (or prefer `heading`/`description` and `slot="actions"` directly on `uai-card`);
 * pair with `UaiCardTitle` and `UaiCardSubtitle`; avoid using outside a card context.
 *
 * @slot - Header elements such as `uai-card-title`, `uai-card-subtitle`, and action buttons.
 */
export declare class UaiCardHeader implements ComponentInterface {
    el: HTMLElement;
    /**
     * Horizontal distribution of children inside the header.
     * Use `space-between` for title + actions or `flex-start` for stacked headings; pair with `UaiCardTitle`; avoid invalid CSS alignment values.
     */
    align?: UaiCardJustifyContent;
    componentWillLoad(): void;
    private resolveAlign;
    render(): any;
}
