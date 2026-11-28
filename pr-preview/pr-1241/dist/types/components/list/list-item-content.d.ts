import { direction, justifyContent, flexWrap, alignItems, gap } from '../grid/grid-interface';
/**
 * @deprecated Use uai-list-item-content with UaiThemeProvider for tokenized styling.
 */
export declare class ListItemContent {
    hostElement: HTMLElement;
    direction?: direction;
    justifyContent?: justifyContent;
    flexWrap?: flexWrap;
    alignItems?: alignItems;
    gap?: gap;
    render(): any;
}
