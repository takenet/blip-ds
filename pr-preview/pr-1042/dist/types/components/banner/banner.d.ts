import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
export type BannerVariant = 'system' | 'warning' | 'info' | 'error' | 'success';
export type BannerAlign = 'left' | 'right' | 'center';
export type ButtonClose = 'true' | 'false';
export type Link = 'true' | 'false';
export type Context = 'inside' | 'outside';
export declare class Banner implements ComponentInterface {
    el: HTMLBdsBannerElement;
    visible: boolean;
    /**
     * Set the banner aligment, it can be one of: 'center', 'right' or 'left'.
     */
    bannerAlign?: BannerAlign;
    /**
     * Set if show up the close button.
     */
    buttonClose?: ButtonClose;
    /**
     * Set if the banner is external or internal.
     */
    context?: Context;
    /**
     * Set the banner varient, it can be 'system' or 'warning'.
     */
    variant?: BannerVariant;
    /**
     * Data test is the prop to specifically test the component action object.
     * dtButtonClose is the data-test to button close.
     */
    dtButtonClose?: string;
    /**
     * Emitted when the banner is closed.
     */
    bdsBannerClose: EventEmitter;
    toggle(): Promise<void>;
    private _buttonClickHandler;
    render(): any;
}
