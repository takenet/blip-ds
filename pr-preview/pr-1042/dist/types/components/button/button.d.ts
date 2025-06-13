import { EventEmitter } from '../../stencil-public-runtime';
import { LoadingSpinnerVariant } from '../loading-spinner/loading-spinner';
import { colorsVariants } from '../loading-spinner/loading-spinner';
export type ButtonSize = 'tall' | 'standard' | 'short' | 'medium' | 'large';
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'delete' | 'secondary--white' | 'ghost' | 'dashed' | 'facebook' | 'solid' | 'outline' | 'text';
export type ButtonType = 'button' | 'submit' | 'reset';
export type IconType = 'icon' | 'logo' | 'emoji';
export type IconTheme = 'outline' | 'solid';
export declare class Button {
    el: HTMLElement;
    slotText: string;
    active: boolean;
    position: string;
    direction: string;
    group: boolean;
    loadingColor: colorsVariants;
    /**
     * 	If true, the base button will be disabled.
     */
    block?: boolean;
    /**
     * 	If true, the base button will be disabled.
     */
    disabled?: boolean;
    color?: string;
    /**
     * Size. Entered as one of the size. Can be one of:
     * 'tall', 'standard', 'short';
     */
    size?: ButtonSize;
    /**
     * Variant. Entered as one of the variant. Can be one of:
     * 'primary', 'secondary', 'ghost', 'dashed';
     */
    variant?: ButtonVariant;
    /**
     * used for add icon in input left. Uses the bds-icon component.
     */
    icon?: string;
    /**
     * used for add icon in input left. Uses the bds-icon component.
     */
    iconLeft?: string;
    /**
     * used for add icon in input left. Uses the bds-icon component.
     */
    iconRight?: string;
    /**
     * The arrow button
     */
    arrow?: boolean;
    /**
     * The type of the button. Can be one of:
     * 'button', 'submit', 'reset';
     */
    type: ButtonType;
    /**
     * The theme of the icon. Can be one of:
     * 'outline', 'solid';
     */
    iconTheme: IconTheme;
    /**
     * The type of the icon. Can be one of:
     * 'icon', 'logo', 'emoji';
     */
    typeIcon: IconType;
    /**
     * 	If true, shows the loading spinner
     */
    bdsLoading?: boolean;
    /**
     * 	If not empty, Sets the color of the spinner, can be 'primary','secondary' or 'ghost'
     */
    bdsLoadingVariant?: LoadingSpinnerVariant;
    /**
     * 	If not empty, Sets the color of the spinner, can be 'primary','secondary' or 'ghost'
     */
    bdsLoadingColor?: colorsVariants;
    /**
     * Data test is the prop to specifically test the component action object.
     */
    dataTest?: string;
    /**
     * Event buttom onClick.
     */
    bdsClick: EventEmitter;
    isActive(value: any): Promise<void>;
    setPosition(position: 'first' | 'last' | 'middle'): Promise<void>;
    setDirection(direction: 'row' | 'column'): Promise<void>;
    setSize(size: ButtonSize): Promise<void>;
    setColor(color: 'primary' | 'content' | 'negative' | 'positive'): Promise<void>;
    setVariant(variant: ButtonVariant): Promise<void>;
    componentDidRender(): void;
    buttonLegacy(): void;
    logSlotText(): void;
    renderLoadingSpinner(): HTMLBdsLoadingSpinnerElement;
    private handleClick;
    render(): HTMLElement;
}
