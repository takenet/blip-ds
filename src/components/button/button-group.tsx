import { Component, h, Element, State, EventEmitter, Event, Host } from '@stencil/core';

interface HTMLBdsButtonElement extends HTMLElement {
  // Adicione quaisquer métodos ou propriedades adicionais que 'bds-button' tenha
  reciveNumber?(index: number): void;
  isActive(active: boolean): void;
  setPosition(index: string): void;
}

@Component({
  tag: 'bds-button-group',
  styleUrl: 'button-group.scss',
  shadow: true,
})
export class ButtonGroup {
  @Element() el!: HTMLElement;

  @State() activeIndex = -1;

  @Event() buttonSelected: EventEmitter<number>;

  private buttons: HTMLCollectionOf<HTMLBdsButtonElement>;

  componentDidLoad() {
    this.buttons = this.el.getElementsByTagName('bds-button') as HTMLCollectionOf<HTMLBdsButtonElement>;
    for (let i = 0; i < this.buttons.length; i++) {
      this.buttons[i].setAttribute('data-index', i.toString());
      this.buttons[i].addEventListener('click', () => this.selectButton(i));
      this.updateButtonPosition(i);
    }
  }

  selectButton(index: number) {
    this.activeIndex = index;
    this.buttonSelected.emit(index);
    this.updateButtonStates();
  }

  updateButtonStates() {
    for (let i = 0; i < this.buttons.length; i++) {
      const button = this.buttons[i];
      if (i === this.activeIndex) {
        button.isActive(true);
        button.classList.add('active');
      } else {
        button.isActive(false);
        button.classList.remove('active');
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

  render() {
    return (
      <Host class="button_group">
        <bds-grid direction="row">
          <slot></slot>
        </bds-grid>
      </Host>
    );
  }
}
