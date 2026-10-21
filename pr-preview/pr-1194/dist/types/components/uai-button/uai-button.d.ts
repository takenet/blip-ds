import { EventEmitter } from '../../stencil-public-runtime';
import { colorsVariants, LoadingSpinnerVariant } from '../loading-spinner/loading-spinner';
export type UaiButtonVariant = 'solid' | 'outline' | 'text';
export type UaiButtonColor = 'primary' | 'content' | 'negative' | 'positive';
export type UaiButtonSize = 'compact' | 'short' | 'medium' | 'large';
export type UaiButtonType = 'button' | 'submit' | 'reset';
export type UaiButtonIconType = 'icon' | 'logo' | 'emoji';
export type UaiButtonIconTheme = 'outline' | 'solid';
export type UaiButtonJustifyContent = 'center' | 'space-between';
export type UaiButtonPosition = 'first' | 'middle' | 'last';
export type UaiButtonDirection = 'row' | 'column';
/**
 * Button that triggers an action. Use variant "solid" for the main action of a screen and "outline" or "text" for the others;
 * color says what the action does (primary, content, positive, negative). For navigation to another page, use a link.
 * The label is the children. Icons use UaiIcon names. Wrap the app in UaiThemeProvider.
 */
export declare class UaiButton {
    el: HTMLElement;
    active?: boolean;
    position?: UaiButtonPosition;
    direction: UaiButtonDirection;
    hasLabel: boolean;
    /**
     * If true, the button takes the full width of its container.
     */
    block?: boolean;
    /**
     * If true, the button takes the full width of its container with centered content.
     */
    fullWidth?: boolean;
    /**
     * Horizontal alignment of the button content. Can be one of:
     * 'center' (default), 'space-between' (left content to the left, right content to the right).
     */
    justifyContent?: UaiButtonJustifyContent;
    /**
     * @deprecated Put the left icon and the label together in the default slot instead.
     * If true, keeps the left icon together with the label when justifyContent is 'space-between'.
     */
    groupIcon?: boolean;
    /**
     * If true, the button is disabled.
     */
    disabled?: boolean;
    /**
     * Color of the button. Can be one of:
     * 'primary', 'content', 'negative', 'positive'.
     */
    color?: UaiButtonColor;
    /**
     * Size of the button. Can be one of:
     * 'compact' (24px), 'short' (32px), 'medium' (40px), 'large' (56px).
     */
    size?: UaiButtonSize;
    /**
     * Visual style of the button. Can be one of:
     * 'solid', 'outline', 'text'.
     */
    variant?: UaiButtonVariant;
    /**
     * Icon rendered before the label. Uses the bds-icon component. Takes precedence over iconLeft.
     */
    icon?: string;
    /**
     * Icon rendered before the label. Uses the bds-icon component.
     */
    iconLeft?: string;
    /**
     * Icon rendered after the label. Uses the bds-icon component.
     */
    iconRight?: string;
    /**
     * If true, renders an 'arrow-right' icon after the label.
     */
    arrow?: boolean;
    /**
     * Type of the button. Can be one of:
     * 'button', 'submit', 'reset'. 'submit' and 'reset' act on the enclosing form.
     */
    type: UaiButtonType;
    /**
     * Theme of the icons. Can be one of:
     * 'outline', 'solid'.
     */
    iconTheme: UaiButtonIconTheme;
    /**
     * Type of the icons. Can be one of:
     * 'icon', 'logo', 'emoji'.
     */
    typeIcon: UaiButtonIconType;
    /**
     * If true, shows a loading spinner and blocks uaiClick.
     */
    loading?: boolean;
    /**
     * @deprecated The spinner follows the button variant and color. This prop has no effect.
     */
    bdsLoadingVariant?: LoadingSpinnerVariant;
    /**
     * @deprecated The spinner follows the button variant and color. This prop has no effect.
     */
    bdsLoadingColor?: colorsVariants;
    /**
     * Accessible name of the button. Required when the button has no visible label.
     */
    ariaLabel: string;
    /**
     * Data test is the prop to specifically test the component action object.
     */
    dataTest?: string;
    /**
     * Emitted when the button is activated by click, Enter or Space. Carries the native click event.
     * Not emitted while the button is disabled or loading.
     */
    uaiClick: EventEmitter<MouseEvent>;
    /**
     * Sets the active (pressed) state of the button.
     */
    isActive(value: boolean): Promise<void>;
    /**
     * Sets the position of the button inside a group.
     */
    setPosition(position: UaiButtonPosition): Promise<void>;
    /**
     * Sets the direction of the group the button belongs to.
     */
    setDirection(direction: UaiButtonDirection): Promise<void>;
    /**
     * Sets the size of the button.
     */
    setSize(size: UaiButtonSize): Promise<void>;
    /**
     * Sets the color of the button.
     */
    setColor(color: UaiButtonColor): Promise<void>;
    /**
     * Sets the variant of the button.
     */
    setVariant(variant: UaiButtonVariant): Promise<void>;
    protected warnDeprecated(): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    private updateHasLabel;
    private handleClick;
    private actOnForm;
    private renderIcon;
    render(): HTMLElement;
}
