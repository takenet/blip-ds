import { Component, ComponentInterface, Host, h, Prop, Event, Element, State, EventEmitter } from '@stencil/core';
import { PaperBackground, BorderColor } from '../paper/paper-interface';

export type elevationType = 'primary' | 'secondary' | 'static' | 'none';

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
  /**
   * Prop for set the background color.
   */
  @Prop() bgColor?: PaperBackground = 'surface-1';
  
  /**
   * Prop for set the background color.
   */
   @Prop() selectable?: boolean = false;
  /**
   * Prop for set the border color.
   */
  @Prop({ mutable: true }) borderColor?: BorderColor = null;
  /**
   * Data test is the prop to specifically test the component action object.
   */
  @Prop() dataTest?: string = null;

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

    if (this.cardElement && (this.clickable === true || this.selectable === true)) {
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

      this.cardElement.addEventListener('keydown', (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
          this.isPressed = true;
          this.bdsClick.emit();
        }
      });

      this.cardElement.addEventListener('keyup', (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
          this.isPressed = false;
        }
      });
    }
  }

  componentDidUpdate() {
    if (this.isPressed) {
      this.elevation = 'static';
    } else if (this.isHovered) {
      this.elevation = 'secondary';
    }
  }

  private handleKeyDown(event) {
    if (event.key == 'Enter') {
      this.isPressed = true;
      this.bdsClick.emit(event);
    }
  }

  render() {
    const styleHost = {
      width: this.width,
    };

    return (
      <Host style={styleHost}>
        <bds-paper
          border={this.clickable ? false : true}
          elevation={this.elevation}
          class={{
            card: true,
            card_hover: this.clickable,
            card_hover_selectable: this.isHovered && this.selectable ? true : false,
            card_hover_pressed: this.isHovered && this.selectable ? true : false
          }}
          height={this.height}
          width={this.width}
          bgColor={this.bgColor}
          data-test={this.dataTest}
          border-color={this.borderColor ? this.borderColor : 'border-1'}
        >
          <div tabindex="0" class="focus" onKeyDown={this.handleKeyDown.bind(this)}></div>
          <bds-grid xxs="12" direction="column" gap="2" padding="2">
            <slot></slot>
          </bds-grid>
        </bds-paper>
      </Host>
    );
  }
}
