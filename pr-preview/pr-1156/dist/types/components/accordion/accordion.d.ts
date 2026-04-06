import { EventEmitter } from '../../stencil-public-runtime';
export declare class Accordion {
    private accGroup?;
    private accheaders?;
    private accBodies?;
    private element;
    isOpen?: boolean;
    numberElement?: number;
    condition?: boolean;
    bdsToggle?: EventEmitter<{
        value: boolean;
    }>;
    bdsAccordionOpen?: EventEmitter<void>;
    bdsAccordionClose?: EventEmitter<void>;
    startOpen?: boolean;
    divisor?: boolean;
    toggle(): Promise<void>;
    open(): Promise<void>;
    close(): Promise<void>;
    notStart(): Promise<void>;
    reciveNumber(number: any): Promise<void>;
    isOpenChanged(value: any): void;
    divisorChanged(newValue: boolean): void;
    componentWillLoad(): void;
    render(): any;
}
