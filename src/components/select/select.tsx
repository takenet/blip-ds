import { Component, h, State, Prop, EventEmitter, Event, Method, Watch } from '@stencil/core';
import { Option, SelectChangeEventDetail } from './select-interface';

@Component({
  tag: 'bds-select',
  styleUrl: 'select.scss',
  shadow: true
})
export class Select {
  @State() isOpen?= false;

  @Prop() options?: Array<Option> = [];

  /**
   * the value of the select.
   */
  @Prop({ mutable: true }) value?: any | null;

  /**
   * If `true`, the user cannot interact with the select.
   */
  @Prop() disabled = false;

  /**
   * Emitted when the value has changed.
   */
  @Event() bdsChange!: EventEmitter<SelectChangeEventDetail>;

  /**
   * Emitted when the selection is cancelled.
   */
  @Event() bdsCancel!: EventEmitter<void>;

  /**
   * Emitted when the select loses focus.
   */
  @Event() bdsFocus!: EventEmitter<void>;

  /**
   * Emitted when the select loses focus.
   */
  @Event() bdsBlur!: EventEmitter<void>;

  @Watch('value')
  valueChanged(): void {
    this.bdsChange.emit({ value: this.value })
  }

  private onFocus = (): void => {
    this.bdsFocus.emit();
  }

  private onBlur = (): void => {
    this.bdsBlur.emit();
  }

  private toggle = (): void => {
    this.isOpen = !this.isOpen;
  }

  private getText = (): string => {
    const opt = this.options.find(option => option.value == this.value)
    return opt ? opt.label : '';
  }

  private handler = (event: CustomEvent): void => {
    const { detail: { value } } = event;
    this.value = value;
    this.toggle();
  }

  private getSelectOptions = (): Array<HTMLElement> => {
    const options = this.options.map(option => {
      return (
        <bds-select-option
          key={`select-option-${option.value}`}
          value={option.value}
          label={option.label}
          onOptionSelected={this.handler}
          selected={this.value === option.value}
        >
        </bds-select-option>
      );
    })
    return options;
  };

  render(): HTMLElement {
    const iconArrow = this.isOpen ? 'arrow-up' : 'arrow-down';
    const selectText = this.getText();

    return (
      <div class="select">
        <bds-input
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onClick={this.toggle}
          value={selectText}
          interface="text"
        >
          <div
            slot="input-right"
            class="select__icon"
          >
            <bds-icon
              size="small"
              name={iconArrow}
              color="inherit"
            >
            </bds-icon>
          </div>
        </bds-input>
        <div
          class={{
            "select__options": true,
            "select__options--open": this.isOpen
          }}>
          {this.getSelectOptions()}
        </div>
      </div>
    )
  }
}