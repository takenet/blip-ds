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
  /**
   * When 'true', no events will be dispatched
   */
  @Prop() disabled = false;
  /**
   * Data test is the prop to specifically test the component action object.
   */
  @Prop() dataTest?: string = null;

  @Event() chipClick: EventEmitter;

  handleKeyDown(event) {
    if (event.key === ' ' && !this.disabled) {
      event.preventDefault();
      if (this.isSelected) {
        return (this.isSelected = false);
      } else {
        return (this.isSelected = true);
      }
    }
  }
  @Listen('click', { capture: true })
  handleClick(event) {
    if (this.disabled) return;
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

  private getDisabledChip() {
    return this.disabled ? { chip_disabled: true, [`chip_disabled--${this.size}`]: true } : {};
  }

  private getStyleChip() {
    return this.isSelected
      ? { chip_selected: true, [`chip_selected--${this.size}`]: true }
      : { [`chip--${this.color}`]: true, [`chip--${this.size}`]: true };
  }

  private getStyleText() {
    if (this.isSelected) {
      const chipSelected = { 'chip_selected--text': true };
      return chipSelected;
    }
  }

  private getSizeIconChip() {
    if (this.size === 'tall') {
      return 'medium';
    } else return 'x-small';
  }

  render() {
    return (
      <Host>
        <div
          class={{
            chip: true,
            ...this.getStyleChip(),
            ...this.getDisabledChip(),
          }}
          onClick={this.handleClick}
          data-test={this.dataTest}
        >
          {!this.disabled && <div class="chip_focus" onKeyDown={this.handleKeyDown.bind(this)} tabindex="0"></div>}
          {!this.isSelected && !this.disabled && <div class="chip_darker"></div>}
          {this.icon && !this.isSelected && (
            <div class="chip--icon">
              <bds-icon size={this.getSizeIconChip()} name={this.icon}></bds-icon>
            </div>
          )}
          {this.isSelected && (
            <div class="chip_selected--icon">
              <bds-icon size={this.getSizeIconChip()} name="checkball"></bds-icon>
            </div>
          )}
          <div class={this.isSelected ? `chip_selected--container-text--half` : `chip_selected--container-text--full`}>
            <bds-typo class={{ 'chip--text': true, ...this.getStyleText() }} variant="fs-12" no-wrap bold="bold">
              <slot></slot>
            </bds-typo>
          </div>
        </div>
      </Host>
    );
  }
}
