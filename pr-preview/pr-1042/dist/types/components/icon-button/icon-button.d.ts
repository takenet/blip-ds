import { EventEmitter } from '../../stencil-public-runtime';
import { IconSize } from '../icon/icon-interface';
export type IconButtonSize = 'tall' | 'standard' | 'short';
export type IconButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'secondary--white' | 'delete';
export type IconSizeMap = {
    [key in string]: IconSize;
};
export type IconButtonVariantMap = {
    [key in IconButtonVariant]: string;
};
export type ButtonIconTheme = 'outline' | 'solid';
export declare class IconButton {
    /**
     * 	If true, the base button will be disabled.
     */
    disabled?: boolean;
    /**
     * Size. Entered as one of the size. Can be one of:
     * 'tall', 'standard', 'short';
     */
    size?: IconButtonSize;
    /**
     * Variant. Entered as one of the variant. Can be one of:
     * 'primary', 'secondary', 'ghost', 'dashed';
     */
    variant?: IconButtonVariant;
    /**
     * The theme of the icon. Can be one of:
     * 'outline', 'solid';
     */
    iconTheme: ButtonIconTheme;
    /**
     * used for add icon in input left. Uses the bds-icon component.
     */
    icon?: string;
    /**
     * Data test is the prop to specifically test the component action object.
     */
    dataTest?: string;
    /**
     * Event buttom onClick.
     */
    bdsClick: EventEmitter;
    private mapSize;
    private mapVariantStyle;
    private handleClick;
    render(): HTMLElement;
}
