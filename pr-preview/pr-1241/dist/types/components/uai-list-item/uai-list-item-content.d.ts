import type { alignItems, direction, flexWrap, gap, justifyContent } from '../grid/grid-interface';
/**
 * Flex wrapper for custom content inside a uai-list-item slot. Use to stack or align extra content; pair with
 * the content-area or action-area slots; avoid it for whole page layouts (use uai-grid).
 *
 * @slot - Content laid out by the inner uai-grid.
 */
export declare class UaiListItemContent {
    hostElement: HTMLElement;
    /** Flex direction of the content. Use column for stacked text; pair with gap. Avoid reverse directions for reading order. */
    direction?: direction;
    /** Main-axis alignment. Use flex-start by default; pair with direction. Avoid space-around in narrow rows. */
    justifyContent?: justifyContent;
    /** Wrapping of the content. Use wrap by default; pair with gap. Avoid nowrap with long content. */
    flexWrap?: flexWrap;
    /** Cross-axis alignment. Use flex-start by default; pair with direction. Avoid stretch with icons. */
    alignItems?: alignItems;
    /** Space between children, in the uai-grid gap scale. Use for separated content; pair with direction. Avoid margins on the children. */
    gap?: gap;
    render(): any;
}
