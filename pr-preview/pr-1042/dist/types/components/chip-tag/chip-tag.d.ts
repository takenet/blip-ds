export type ColorChipTag = 'default' | 'info' | 'success' | 'warning' | 'danger' | 'outline' | 'disabled';
export declare class ChipTag {
    /**
     * used for add icon in left container. Uses the bds-icon component.
     */
    icon?: string;
    /**
     * used for change the color. Uses one of them.
     */
    color?: ColorChipTag;
    /**
     * Data test is the prop to specifically test the component action object.
     */
    dataTest?: string;
    render(): any;
}
