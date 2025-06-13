import { EventEmitter } from '../../stencil-public-runtime';
import { direction } from '../grid/grid-interface';
import { ButtonSize } from './button';
export declare class ButtonGroup {
    el: HTMLElement;
    activeIndexes: Set<number>;
    /**
     * Size of the buttons. Can be one of:
     * 'medium', 'large'.
     */
    size?: ButtonSize;
    /**
     * Direction of the button group layout. Can be one of:
     * 'row', 'column'.
     */
    direction?: direction;
    /**
     * Color scheme for the buttons. Default is 'primary'.
     */
    color?: string;
    /**
     * Allows multiple buttons to be selected simultaneously if true.
     */
    multiple?: boolean;
    buttonSelected: EventEmitter;
    private buttons;
    componentDidLoad(): void;
    componentDidUpdate(): void;
    handlePropChanges(): void;
    setupButtons(): void;
    activateButton(index: number): Promise<void>;
    selectButton(index: number): void;
    updateButtonStates(clickedIndex: number): void;
    updateButtonPosition(index: number): void;
    updateButtonDirection(index: number): void;
    updateButtonSize(index: number): void;
    updateButtonColor(index: number): void;
    render(): any;
}
