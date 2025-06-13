import { direction, justifyContent, flexWrap, alignItems, gap } from '../grid/grid-interface';
export declare class ListItemContent {
    hostElement: HTMLElement;
    direction?: direction;
    justifyContent?: justifyContent;
    flexWrap?: flexWrap;
    alignItems?: alignItems;
    gap?: gap;
    render(): any;
}
