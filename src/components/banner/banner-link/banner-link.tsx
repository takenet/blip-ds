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
   * Data test is the prop to specifically test the component action object.
   */
  @Prop() dataTest?: string = null;
  /**
   * Emitted when the link is clicked.
   */
  @Event() bdsBannerLink!: EventEmitter;

  private _buttonClickHandler = () => {
    this.bdsBannerLink.emit(this.el);
    window.open(this.link);
  };

  private handleKeyDown(event) {
    if (event.key == 'Enter') {
      this.bdsBannerLink.emit(this.el);
      window.open(this.link);
    }
  }

  render(): HTMLElement {
    const Element = 'a';

    return (
      <Element
        class={{ banner__link: true }}
        onClick={() => this._buttonClickHandler()}
        data-test={this.dataTest}
        tabindex="0"
        onKeyDown={this.handleKeyDown.bind(this)}
      >
        <slot></slot>
      </Element>
    );
  }
}
