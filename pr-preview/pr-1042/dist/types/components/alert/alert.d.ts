import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
export type collapses = 'fixed' | 'contain';
export declare class BdsAlert implements ComponentInterface {
    /**
     * Used to open/close the alert
     */
    open?: boolean;
    /**
     * Data test is the prop to specifically test the component action object.
     */
    dataTest?: string;
    /**
     * Define whether the component will occupy the entire screen or just the parent.
     */
    position?: string;
    /**
     * Emitted when modal status has changed.
     */
    bdsAlertChanged: EventEmitter;
    /**
     * Can be used outside to open/close the alert
     */
    toggle(): Promise<void>;
    protected isOpenChanged(): void;
    private listener;
    render(): any;
}
