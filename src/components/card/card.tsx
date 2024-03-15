import { Component, ComponentInterface, Host, h, Prop, Event, Element, State, EventEmitter } from '@stencil/core';

export type elevationType = 'primary' | 'secondary' | 'static';

@Component({
  tag: 'bds-card',
  styleUrl: 'card.scss',
  shadow: true,
})
export class Card implements ComponentInterface {
  /**
   * Prop for set the height of the component.
   */
  @Prop() height?: string = null;

  /**
   * Prop for set the width of the component.
   */
  @Prop() width?: string = 'fit-content';
  /**
   * If the prop is true, the component will be clickable.
   */
  @Prop() clickable?: boolean = false;

  @State() isHovered = false;
  @State() isPressed = false;
  @State() elevation: elevationType = 'primary';
  /**
   * This event will be dispatch when click on the component.
   */
  @Event() bdsClick: EventEmitter;

  @Element() element: HTMLElement;

  private cardElement: HTMLElement;

  componentDidLoad() {
    this.cardElement = this.element.shadowRoot.querySelector('.card');

    if (this.cardElement && this.clickable === true) {
      this.cardElement.addEventListener('mouseenter', () => {
        this.isHovered = true;
      });

      this.cardElement.addEventListener('mouseleave', () => {
        this.isHovered = false;
      });

      this.cardElement.addEventListener('mousedown', () => {
        this.isPressed = true;
        this.bdsClick.emit();
      });

      document.addEventListener('mouseup', () => {
        this.isPressed = false;
      });
    }
  }

  render() {
    if (this.isPressed) {
      this.elevation = 'static';
    } else if (this.isHovered) {
      this.elevation = 'secondary';
    }

    const styleHost = {
      width: this.width,
    };

    return (
      <Host style={styleHost}>
        <bds-paper elevation={this.elevation} class={{ card: true, card_hover: this.clickable }} height={this.height}>
          <bds-grid xxs="12" direction="column" gap="2" padding="2">
            <slot></slot>
          </bds-grid>
        </bds-paper>
      </Host>
    );
  }
}
