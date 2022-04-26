import { Component, Host, h, Prop, EventEmitter, Event, State, Listen, Element } from '@stencil/core';

export type Color = 'default' | 'info' | 'success' | 'warning' | 'danger' | 'outline';
export type Size = 'standard' | 'tall';

@Component({
  tag: 'bds-chip-selected',
  styleUrl: 'chip-selected.scss',
  shadow: true,
})
export class ChipSelected {
  @Element() el?: HTMLElement;
  @State() isSelected = false;
  /**
   * used for add icon in left container. Uses the bds-icon component.
   */
  @Prop() icon?: string;
  /**
   * used for change the color. Uses one of them.
   */
  @Prop() color?: Color = 'default';
  /**
   * used for change the chip size. Use one of them;
   */
  @Prop() size?: Size = 'standard';
  /**
   * used for set the initial setup for true;
   */
  @Prop() selected?: boolean = false;

  @Event() chipClick: EventEmitter;

  @Listen('click', { capture: true })
  handleClick(event) {
    event.preventDefault();
    if (this.isSelected) {
      return (this.isSelected = false);
    } else {
      return (this.isSelected = true);
    }
  }

  componentWillLoad() {
    this.el.focus();
    this.isSelected = this.selected;
  }

  private getStyleChip() {
    if (this.isSelected) {
      const chipSelected = { chip_selected: true, [`chip_selected--${this.size}`]: true };
      return chipSelected;
    } else {
      const chipSelected = { [`chip--${this.color}`]: true, [`chip_selected--${this.size}`]: true };
      return chipSelected;
    }
  }

  private getStyleText() {
    if (this.isSelected) {
      const chipSelected = { 'chip_selected--text': true };
      return chipSelected;
    }
  }

  render() {
    return (
      <Host>
        <div
          class={{
            chip: true,
            ...this.getStyleChip(),
          }}
          onClick={this.handleClick}
          tabindex="0"
        >
          {!this.isSelected && <div class="chip_darker"></div>}
          {this.icon && !this.isSelected && (
            <div class="chip--icon">
              <bds-icon size="x-small" name={this.icon}></bds-icon>
            </div>
          )}
          {this.isSelected && (
            <div class="chip_selected--icon">
              <bds-icon size="x-small" name="checkball"></bds-icon>
            </div>
          )}
          <bds-typo class={{ 'chip--text': true, ...this.getStyleText() }} variant="fs-12" no-wrap bold="bold">
            <slot></slot>
          </bds-typo>
        </div>
      </Host>
    );
  }
}
