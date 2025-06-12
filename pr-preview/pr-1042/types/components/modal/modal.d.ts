import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
export type sizes = 'fixed' | 'dynamic';
export declare class BdsModal implements ComponentInterface {
    /**
     * Used to open/close the modal
     */
    open?: boolean;
    /**
     * Used to hide or show the close button
     */
    closeButton?: boolean;
    /**
     * Used to change the modal heights.
     */
    size?: sizes;
    /**
     * If true, the modal will close clicking outside the component.
     */
    outzoneClose?: boolean;
    /**
     * If true, the modal will close keydown Enter.
     */
    enterClose?: boolean;
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
     * Emitted when modal status has changed.
     */
    bdsModalChanged: EventEmitter;
    /**
     * Can be used outside to open/close the modal
     */
    toggle(): Promise<void>;
    protected isOpenChanged(): void;
    private listener;
    private handleMouseClick;
    private onClickCloseButtom;
    render(): any;
}
