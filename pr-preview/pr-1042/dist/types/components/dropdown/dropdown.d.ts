import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
export type activeMode = 'hover' | 'click';
export type dropVerticalPosition = 'bottom' | 'top' | 'left' | 'right';
export type dropHorizontalPosition = 'left' | 'center' | 'right' | 'bottom' | 'top';
export type subMenuState = 'close' | 'pending' | 'open';
export type DropdownPostionType = 'auto' | 'top-center' | 'top-left' | 'top-right' | 'bottom-center' | 'bottom-right' | 'bottom-left' | 'right-center' | 'right-top' | 'right-bottom' | 'left-center' | 'left-top' | 'left-bottom';
export declare class BdsDropdown implements ComponentInterface {
    private activatorElement?;
    private dropElement?;
    hostElement: HTMLElement;
    intoView?: HTMLElement;
    stateOpenSubMenu?: boolean;
    stateSubMenu?: subMenuState;
    zIndex?: number;
    delay: any;
    /**
     * Open. Used to open/close the dropdown.
     */
    activeMode?: activeMode;
    /**
     * Open. Used to open/close the dropdown.
     */
    open?: boolean;
    /**
     * Used to set drop position
     */
    position?: DropdownPostionType;
    /**
     * Data test is the prop to specifically test the component action object.
     */
    dataTest?: string;
    /**
     * bdsToggle. Event to return selected date value.
     */
    bdsToggle?: EventEmitter;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    private setDefaultPlacement;
    private validatePositionDrop;
    protected isOpenChanged(open: boolean): void;
    protected isPositionChanged(): void;
    toggle(): Promise<void>;
    setOpen(): Promise<void>;
    setClose(): Promise<void>;
    protected openSubMenuChanged(active: boolean): void;
    protected stateSubMenuChanged(state: subMenuState): void;
    private onCloseSubMenu;
    private refDropElement;
    private onClickCloseButtom;
    private onMouseOver;
    private onMouseOut;
    private handleClickOutside;
    private centerDropElement;
    render(): any;
}
