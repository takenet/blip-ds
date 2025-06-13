export type closeSubMenuState = 'close' | 'pending' | 'open';
export type positionSubMenuState = 'right' | 'left';
export declare class BdsMenuAction {
    private menuElement?;
    private element;
    openParentMenu?: boolean;
    openSubMenu?: boolean;
    positionSubMenu?: positionSubMenuState;
    stateSubMenu?: closeSubMenuState;
    delaySubMenu?: boolean;
    zIndex?: number;
    delay: any;
    /**
     * ButtonText. Used to enter the display text for the item.
     */
    buttonText?: string;
    /**
     * SubMenu. Used to declare that the button will have a submenu.
     */
    subMenu?: boolean;
    /**
     * Iconleft. Used to insert the string icon and make the icon available to the left of the item.
     */
    iconLeft?: string;
    /**
     * Subtitle. Used to insert a subtitle in the display item.
     */
    subtitle?: string;
    /**
     * Description. Used to insert a subtitle in the display item.
     */
    description?: string;
    /**
     * Lipstick. Used to declare that the item will be a negative/error action.
     */
    lipstick?: boolean;
    /**
     * Disabled. Used to declare that the item will be disabled.
     */
    disabled?: boolean;
    private onCloseSubMenu;
    componentWillLoad(): void;
    protected openParentMenuChanged(active: boolean): void;
    protected openSubMenuChanged(active: boolean): void;
    protected stateSubMenuChanged(state: closeSubMenuState): void;
    private onChangeOpenParent;
    render(): any;
}
