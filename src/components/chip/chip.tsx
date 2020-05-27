import { Component, Host, h, Prop, Event, EventEmitter, Element } from '@stencil/core';

export type ChipSize = 'standard' | 'tall';
export type ChipVariant = 'primary' | 'default';

@Component({
  tag: 'bds-chip',
  styleUrl: 'chip.scss',
  shadow: true,
})
export class Chip {
  @Element() private element: HTMLElement;

  /**
   * used for add icon in left container. Uses the bds-icon component.
   */
  @Prop() icon?: string;

  /**
   * Chip size. Entered as one of the size design tokens. Can be one of:
   * "standard" and "tall"
   */
  @Prop() size?: ChipSize = 'standard';

  /**
   * Variant. Entered as one of the variant. Can be one of:
   * 'primary', 'default';
   */
  @Prop() variant?: ChipVariant = 'default';

  /**
   * Add state danger on chip, use for use feedback.
   */
  @Prop({ reflect: true }) danger? = false;

  /**
   * When 'true' and the component is using the primary variant, a hover is added
   */
  @Prop() clickable = false;

  /**
   * When 'true', the component recive remove button and dispach event onBdsDelete
   */
  @Prop() deletable = false;

  /**
   * When 'true', no events will be dispatched
   */
  @Prop() disabled = false;

  /**
   *  Triggered after a mouse click on delete icon, return id element. Only fired when deletable is true.
   */
  @Event() bdsDelete: EventEmitter;

  handleClickDelete(event) {
    if (!this.deletable || this.disabled) return;
    event.preventDefault();
    this.bdsDelete.emit({ id: this.element.id });
  }

  private getClickClass() {
    return this.clickable ? { 'chip--click': true } : {};
  }

  private getSizeClass() {
    return this.size === 'standard' ? { 'chip--standard': true } : { 'chip--tall': true };
  }

  private getStateClass() {
    if (this.disabled) {
      return { 'chip--default': true };
    }

    if (this.danger) {
      return { 'chip--danger': true };
    }

    if (this.variant === 'primary') {
      return { 'chip--primary': true };
    }

    return { 'chip--default': true };
  }

  render() {
    return (
      <Host class={{ chip: true, ...this.getClickClass(), ...this.getStateClass(), ...this.getSizeClass() }}>
        {this.icon && (
          <div class="chip__icon">
            <bds-icon size="x-small" name={this.icon}></bds-icon>
          </div>
        )}
        <slot />
        {this.deletable && (
          <div class="chip__delete" onClick={this.handleClickDelete.bind(this)}>
            <bds-icon size="x-small" theme="solid" name="error"></bds-icon>
          </div>
        )}
      </Host>
    );
  }
}
