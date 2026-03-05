import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
export type menuPosition = 'bottom' | 'right';
export declare class BdsMenu implements ComponentInterface {
    private menuElement?;
    refElement?: HTMLElement;
    intoView?: HTMLElement;
    menupositionTop?: number;
    menupositionLeft?: number;
    /**
     * Menu. Used to link the minus with the action button.
     */
    menu?: string;
    /**
     * Position. Used to position the Menu. Either on the left or on the bottom.
     */
    position?: menuPosition;
    /**
     * Open. Used to open/close the menu.
     */
    open?: boolean;
    /**
     * bdsToggle. Event to return selected date value.
     */
    bdsToggle?: EventEmitter;
    componentWillLoad(): void;
    toggle(): Promise<void>;
    protected openMenu(): void;
    private refMenuElement;
    private onClickCloseButtom;
    render(): any;
}
