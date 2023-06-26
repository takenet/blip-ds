import { Component, Host, h, Prop, Event, EventEmitter, Element, State } from '@stencil/core';

export type Color = 'default' | 'info' | 'success' | 'warning' | 'danger' | 'outline';
export type Size = 'standard' | 'tall';

@Component({
  tag: 'bds-chip-clickable',
  styleUrl: 'chip-clickable.scss',
  shadow: true,
})
export class ChipClickable {
  @Element() private element: HTMLElement;
  @State() visible = true;
  /**
   * used for add icon in left container. Uses the bds-icon component.
   */
  @Prop() icon?: string;
  /**
   * used for add avatar left container. Uses the bds-avatar component.
   */
  @Prop() avatar?: string;
  /**
   * used for change the color. Uses one of them.
   */
  @Prop() color?: Color = 'default';
  /**
   * used for change the size chip. Uses one of them.
   */
  @Prop() size?: Size = 'standard';
  /**
   * it makes the chip clickable.
   */
  @Prop() clickable?: boolean = false;
  /**
   * used for delete the chip.
   */
  @Prop() close?: boolean = false;
  /**
   * the chip gone stay disabled while this prop be true.
   */
  @Prop() disabled?: boolean = false;
  /**
   * Data test is the prop to specifically test the component action object.
   */
  @Prop() dataTest?: string = null;
  /**
   *  Triggered after a mouse click on close icon, return id element. Only fired when close is true.
   */
  @Event() chipClickableClose: EventEmitter;
  @Event() chipClickableClick: EventEmitter;

  private handleClickKey(event) {
    if ((event.key === 'Enter' || event.key === ' ') && !this.disabled) {
      event.preventDefault();
      this.chipClickableClick.emit();
    }
  }

  private handleClick(event) {
    if (!this.disabled) {
      event.preventDefault();
      this.chipClickableClick.emit();
    }
  }

  private handleCloseChip(event) {
    event.preventDefault();
    this.chipClickableClose.emit({ id: this.element.id });
  }

  private handleCloseKey(event) {
    if ((event.key === 'Enter' || event.key === ' ') && !this.disabled) {
      event.preventDefault();
      this.chipClickableClose.emit({ id: this.element.id });
    }
  }

  private getSizeAvatarChip() {
    if (this.size === 'tall') {
      return 'extra-small';
    } else return 'micro';
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
            chip_clickable: true,
            [`chip_clickable--${this.color}`]: true && !this.disabled,
            [`chip_clickable--${this.size}`]: true,
            'chip_clickable--hide': !this.visible,
            'chip_clickable--click': this.clickable,
            'chip_clickable--disabled': this.disabled,
          }}
          onClick={this.handleClick.bind(this)}
          data-test={this.dataTest}
        >
          {this.clickable && !this.disabled && (
            <div class="chip_focus" onKeyDown={this.handleClickKey.bind(this)} tabindex="0"></div>
          )}
          {this.clickable && !this.disabled && <div class="chip_darker"></div>}
          {this.icon && !this.avatar && (
            <div class="chip_clickable--icon">
              <bds-icon size={this.getSizeIconChip()} name={this.icon}></bds-icon>
            </div>
          )}
          {this.avatar && (
            <div class="chip_clickable--avatar">
              <bds-avatar size={this.getSizeAvatarChip()} thumbnail={this.avatar}></bds-avatar>
            </div>
          )}
          <div
            class={
              this.close && (this.icon || this.avatar)
                ? `chip_clickable--container-text--min`
                : !this.close && !this.icon && !this.avatar
                ? `chip_clickable--container-text--full`
                : `chip_clickable--container-text--half`
            }
          >
            <bds-typo no-wrap="true" class="chip_clickable--text" variant="fs-12" bold="bold">
              <slot></slot>
            </bds-typo>
          </div>
          {this.close && (
            <div class="chip_clickable--close" onClick={this.handleCloseChip.bind(this)}>
              {!this.disabled && (
                <div class="close_focus" onKeyDown={this.handleCloseKey.bind(this)} tabindex="0"></div>
              )}
              <bds-icon size="x-small" theme="solid" name="error"></bds-icon>
            </div>
          )}
        </div>
      </Host>
    );
  }
}
