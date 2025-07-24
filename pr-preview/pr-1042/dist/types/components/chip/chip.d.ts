import { EventEmitter } from '../../stencil-public-runtime';
export type ChipSize = 'standard' | 'tall';
export type ChipVariant = 'primary' | 'default' | 'watermelon';
export declare class Chip {
    private element;
    /**
     * used for add icon in left container. Uses the bds-icon component.
     */
    icon?: string;
    /**
     * Chip size. Entered as one of the size design tokens. Can be one of:
     * "standard" and "tall"
     */
    size?: ChipSize;
    /**
     * Variant. Entered as one of the variant. Can be one of:
     * 'primary', 'default';
     */
    variant?: ChipVariant;
    /**
     * Add state danger on chip, use for use feedback.
     */
    danger?: boolean;
    /**
     * Add state filter on chip whith specific color.
     */
    filter: boolean;
    /**
     * When 'true' and the component is using the primary variant, a hover is added
     */
    clickable: boolean;
    /**
     * When 'true', the component recive remove button and dispach event onBdsDelete
     */
    deletable: boolean;
    /**
     * When 'true', no events will be dispatched
     */
    disabled: boolean;
    /**
     *  Triggered after a mouse click on delete icon, return id element. Only fired when deletable is true.
     */
    bdsDelete: EventEmitter;
    handleClickDelete(event: any): void;
    private getClickClass;
    private getSizeClass;
    private getStateClass;
    render(): any;
}
