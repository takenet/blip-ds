import { EventEmitter } from '../../stencil-public-runtime';
export type sidebarPosition = 'left' | 'right';
export type sidebarType = 'over' | 'fixed';
export type sidebarBackground = 'surface-1' | 'surface-2' | 'surface-3' | 'surface-4';
export declare class Sidebar {
    private hasFooterSlot;
    private hasHeaderSlot;
    hostElement: HTMLElement;
    InnerSpacing?: number;
    /**;
     * isOpen. Used to open sidebar.
     */
    isOpen?: boolean;
    /**
     * sidebar position. Used to position the sidebar. Either on the left or on the right.
     */
    sidebarPosition?: sidebarPosition;
    /**
     * sidebar type. Used to define how open.
     */
    type?: sidebarType;
    /**
     * If true, a lateral margin will apear in the content.
     */
    margin?: boolean;
    /**
     * Width, number to define sidebar width.
     */
    width?: number;
    /**
     * Data test is the prop to specifically test the component action object.
     * dtOutzone is the data-test to button close.
     */
    dtOutzone?: string;
    /**
     * Data test is the prop to specifically test the component action object.
     * dtButtonClose is the data-test to button close.
     */
    dtButtonClose?: string;
    /**
     * Width, number to define sidebar width.
     */
    background?: sidebarBackground;
    /**
     * Emitted when the isOpen has changed.
     */
    bdsToggle: EventEmitter;
    toggle(): Promise<void>;
    isOpenChanged(newValue: boolean): void;
    componentWillLoad(): void;
    private listiner;
    private onClickCloseButtom;
    render(): any;
}
