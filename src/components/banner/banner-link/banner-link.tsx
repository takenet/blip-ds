import { Component, h, Element, Event, EventEmitter, Prop } from '@stencil/core';

@Component({
  tag: 'bds-banner-link',
  styleUrl: 'banner-link.scss',
  shadow: true,
})
export class BannerLink {
  @Element() el: HTMLBdsBannerElement;
  /**
   * Set the link pass.
   */
  @Prop() link: string;
  /**
   * Emitted when the link is clicked.
   */
  @Event() bdsBannerLink!: EventEmitter;

  private _buttonClickHandler = () => {
    this.bdsBannerLink.emit(this.el);
    window.open(this.link);
  };

  render(): HTMLElement {
    const Element = 'a';

    return (
      <Element class={{ banner__link: true }} onClick={() => this._buttonClickHandler()}>
        <slot></slot>
      </Element>
    );
  }
}
