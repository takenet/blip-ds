import { Component, h, Element, State, Event, EventEmitter, Prop, Host, Watch, Method } from '@stencil/core';
import { direction } from '../grid/grid-interface';
import { ButtonSize } from './button';

interface HTMLBdsButtonElement extends HTMLElement {
  setVariant(variant: string): void;
  setColor(color: string): void;
  setSize(size: string): void;
  setDirection(direction: string): void;
  isActive(active: boolean): void;
  setPosition(position: string): void;
}

@Component({
  tag: 'bds-button-group',
  styleUrl: 'button-group.scss',
  shadow: true,
})
export class ButtonGroup {
  @Element() el!: HTMLElement;

  @State() activeIndexes: Set<number> = new Set();

  /**
   * Size of the buttons. Can be one of:
   * 'medium', 'large'.
   */
  @Prop({ mutable: true }) size?: ButtonSize = 'medium';

  /**
   * Direction of the button group layout. Can be one of:
   * 'row', 'column'.
   */
  @Prop({ mutable: true }) direction?: direction = 'row';

  /**
   * Color scheme for the buttons. Default is 'primary'.
   */
  @Prop({ mutable: true }) color?: string = 'primary';

  /**
   * Allows multiple buttons to be selected simultaneously if true.
   */
  @Prop({ mutable: true }) multiple? = false;

  @Event() buttonSelected: EventEmitter;

  private buttons: HTMLCollectionOf<HTMLBdsButtonElement>;

  componentDidLoad() {
    this.buttons = this.el.getElementsByTagName('bds-button') as HTMLCollectionOf<HTMLBdsButtonElement>;
    this.setupButtons();
  }

  componentDidUpdate() {
    this.setupButtons();
  }

  @Watch('size')
  @Watch('direction')
  @Watch('color')
  @Watch('multiple')
  handlePropChanges() {
    // Re-setup buttons when props change
    this.setupButtons();
  }

  setupButtons() {
    for (let i = 0; i < this.buttons.length; i++) {
      const button = this.buttons[i];
      button.setAttribute('data-index', i.toString());
      button.addEventListener('click', () => this.selectButton(i));
      button.setVariant('outline');
      this.updateButtonPosition(i);
      this.updateButtonDirection(i);
      this.updateButtonSize(i);
      this.updateButtonColor(i);
    }
  }

  @Method()
  async activateButton(index: number) {
    if (index >= 0 && index < this.buttons.length) {
      this.selectButton(index);
    }
  }

  selectButton(index: number) {
    if (this.multiple) {
      if (this.activeIndexes.has(index)) {
        this.activeIndexes.delete(index);
      } else {
        this.activeIndexes.add(index);
      }
    } else {
      if (this.activeIndexes.has(index)) {
        this.activeIndexes.clear();
      } else {
        this.activeIndexes.clear();
        this.activeIndexes.add(index);
      }
    }
    this.updateButtonStates(index);
  }

  updateButtonStates(clickedIndex: number) {
    for (let i = 0; i < this.buttons.length; i++) {
      const button = this.buttons[i];
      if (this.activeIndexes.has(i)) {
        button.isActive(true);
        button.setVariant('solid');
        button.classList.add('active');
      } else {
        button.isActive(false);
        button.setVariant('outline');
        button.classList.remove('active');
      }
      if (i === clickedIndex) {
        this.buttonSelected.emit(button.id);
      }
    }
  }

  updateButtonPosition(index: number) {
    const button = this.buttons[index];
    if (index === 0) {
      button.setPosition('first');
    } else if (index === this.buttons.length - 1) {
      button.setPosition('last');
    } else {
      button.setPosition('middle');
    }
  }

  updateButtonDirection(index: number) {
    const button = this.buttons[index];
    this.direction === 'row' ? button.setDirection('row') : button.setDirection('column');
  }

  updateButtonSize(index: number) {
    const button = this.buttons[index];
    this.size === 'medium' ? button.setSize('medium') : button.setSize('large');
  }

  updateButtonColor(index: number) {
    const button = this.buttons[index];
    button.setColor(this.color);
  }

  render() {
    return (
      <Host class="button_group">
        <bds-grid direction={this.direction}>
          <slot></slot>
        </bds-grid>
      </Host>
    );
  }
}
