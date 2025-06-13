import { EventEmitter } from '../../../stencil-public-runtime';
export type targets = 'blank' | 'self' | 'parent' | 'top' | 'framename';
export declare class BannerLink {
    el: HTMLBdsBannerElement;
    /**
     * Set the link pass.
     */
    link: string;
    /**
     * Set the link pass.
     */
    target: targets;
    /**
     * Data test is the prop to specifically test the component action object.
     */
    dataTest?: string;
    /**
     * Emitted when the link is clicked.
     */
    bdsBannerLink: EventEmitter;
    private _buttonClickHandler;
    private handleKeyDown;
    render(): HTMLElement;
}
