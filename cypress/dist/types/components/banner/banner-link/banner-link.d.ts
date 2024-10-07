import { EventEmitter } from '../../../stencil-public-runtime';
export declare class BannerLink {
  el: HTMLBdsBannerElement;
  /**
   * Set the link pass.
   */
  link: string;
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
