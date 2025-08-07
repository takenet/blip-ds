export interface Position {
    top: number;
    left: number;
}
export type reference = 'top' | 'bottom' | 'left' | 'right';
export interface BreakPostion {
    x: reference | string;
    y: reference | string;
}
export declare const getScrollParent: (node: HTMLElement) => any;
export declare function getParentsUntil(element: HTMLElement, stopSelector: string): HTMLElement[];
export declare function positionElement({ actionElement, changedElement, intoView, }: {
    actionElement: HTMLElement;
    changedElement: HTMLElement;
    intoView: HTMLElement;
}): Position;
export declare function positionAbsoluteElement({ actionElement, changedElement, intoView, }: {
    actionElement: HTMLElement;
    changedElement: HTMLElement;
    intoView: HTMLElement;
}): BreakPostion;
export declare const getItems: (itenslenght: number) => any[];
export declare const getHighestItem: (items: any) => any;
export declare const gapChanged: (gap: string) => any;
