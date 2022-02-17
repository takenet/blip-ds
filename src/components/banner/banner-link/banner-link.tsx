import { Component, Host, h, Element, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'bds-banner-link',
  styleUrl: 'banner-link.scss',
  shadow: true,
})
export class BannerLink {
  @Element() el: HTMLBdsBannerElement;
  /**
   * Emitted when the link is clicked.
   */
  @Event() bdsBannerLink!: EventEmitter;

  private _buttonClickHandler = () => {
    this.bdsBannerLink.emit(this.el);
  };

  render() {
    return (
      <Host class={{ banner__link: true }} onClick={() => this._buttonClickHandler()}>
        <slot></slot>
      </Host>
    );
  }
}
