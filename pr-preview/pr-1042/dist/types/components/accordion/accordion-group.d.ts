import { EventEmitter } from '../../stencil-public-runtime';
export type collapses = 'single' | 'multiple';
export declare class AccordionGroup {
    private accordionsElement?;
    private element;
    collapse?: collapses;
    divisor?: boolean;
    bdsAccordionCloseAll?: EventEmitter;
    bdsAccordionOpenAll?: EventEmitter;
    closeAll(actNumber?: any): Promise<void>;
    openAll(actNumber?: any): Promise<void>;
    divisorChanged(newValue: boolean): void;
    componentWillRender(): void;
    render(): any;
}
