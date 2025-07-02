import { EventEmitter } from '../../stencil-public-runtime';
export type ColorChipSelected = 'default' | 'info' | 'success' | 'warning' | 'danger' | 'outline';
export type Size = 'standard' | 'tall';
export declare class ChipSelected {
    el?: HTMLElement;
    isSelected: boolean;
    /**
     * used for add icon in left container. Uses the bds-icon component.
     */
    icon?: string;
    /**
     * used for change the color. Uses one of them.
     */
    color?: ColorChipSelected;
    /**
     * used for change the chip size. Use one of them;
     */
    size?: Size;
    /**
     * used for set the initial setup for true;
     */
    selected?: boolean;
    /**
     * When 'true', no events will be dispatched
     */
    disabled?: boolean;
    /**
     * Data test is the prop to specifically test the component action object.
     */
    dataTest?: string;
    chipClick: EventEmitter;
    private handleKeyDown;
    private handleClick;
    componentWillLoad(): void;
    private getDisabledChip;
    private getStyleChip;
    private getStyleText;
    private getSizeIconChip;
    render(): any;
}
