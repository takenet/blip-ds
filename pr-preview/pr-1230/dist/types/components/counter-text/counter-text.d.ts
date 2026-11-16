import { CounterTextRule } from './counter-text-interface';
export declare class CounterText {
    length: number;
    max?: number;
    active?: boolean;
    warning?: CounterTextRule;
    delete?: CounterTextRule;
    getState(): string;
    getActualLength(): number;
    render(): HTMLElement;
}
