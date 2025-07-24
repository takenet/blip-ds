import { EventEmitter } from '../../stencil-public-runtime';
export type ColorChipClickable = 'default' | 'info' | 'success' | 'warning' | 'danger' | 'outline';
export type Size = 'standard' | 'tall';
export declare class ChipClickable {
    private element;
    visible: boolean;
    /**
     * used for add icon in left container. Uses the bds-icon component.
     */
    icon?: string;
    /**
     * used for add avatar left container. Uses the bds-avatar component.
     */
    avatar?: string;
    /**
     * used for change the color. Uses one of them.
     */
    color?: ColorChipClickable;
    /**
     * used for change the size chip. Uses one of them.
     */
    size?: Size;
    /**
     * it makes the chip clickable.
     */
    clickable?: boolean;
    /**
     * used for delete the chip.
     */
    close?: boolean;
    /**
     * the chip gone stay disabled while this prop be true.
     */
    disabled?: boolean;
    /**
     * Data test is the prop to specifically test the component action object.
     */
    dataTest?: string;
    /**
     * Data test is the prop to specifically test the component action object.
     * dtButtonClose is the data-test to button close.
     */
    dtButtonClose?: string;
    /**
     *  Triggered after a mouse click on close icon, return id element. Only fired when close is true.
     */
    chipClickableClose: EventEmitter;
    chipClickableClick: EventEmitter;
    private handleClickKey;
    private handleClick;
    private handleCloseChip;
    private handleCloseKey;
    private getSizeAvatarChip;
    private getSizeIconChip;
    render(): any;
}
