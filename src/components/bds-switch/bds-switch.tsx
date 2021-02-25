import { Component, h, Prop, State, Method, Event, EventEmitter, Watch } from '@stencil/core';
export type SwitchSize = 'tall' | 'standard' | 'short';

let switchIds = 0;

@Component({
  tag: 'bds-switch',
  styleUrl: 'bds-switch.scss',
  shadow: true,
})
export class Switch {
  private nativeInput?: HTMLInputElement;
  /**
   * Component identifier.
   */
  @State() switchId?: string;
  /**
   * The refer of the control.
   */
  @Prop() refer!: string;

  /**
   * Size. Entered as one of the size. Can be one of:
   * 'tall', 'standard', 'short';
   */
  @Prop() size?: SwitchSize = 'standard';
  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name!: string;

  /**
   * If `true`, the switch is selected.
   */
  @Prop({ mutable: true, reflect: true }) checked = false;

  /**
   * If `true`, the user cannot interact with the switch.
   */
  @Prop() disabled = false;

  connectedCallback(): void {
    this.switchId = this.refer || `bds-switch-${switchIds++}`;
  }

  @Watch('checked')
  protected checkedChanged(isChecked: boolean): void {
    this.bdsChange.emit({
      checked: isChecked,
    });
  }

  /**
   * Emitted when the value has changed.
   */
  @Event() bdsChange!: EventEmitter;

  @Method()
  getInputElement(): Promise<HTMLInputElement> {
    return Promise.resolve(this.nativeInput);
  }

  @Method()
  getValue(): Promise<boolean> {
    return Promise.resolve(this.nativeInput.checked);
  }

  private onClick = (): void => {
    this.checked = !this.checked;
  };

  private refNativeInput = (input: HTMLInputElement): void => {
    this.nativeInput = input;
  };

  getSizeClass(): string {
    return `switch switch--size-${this.size} `;
  }

  getSizeSliderClass(): string {
    return `slider slider--size-${this.size} round `;
  }

  private getStyleState = (): string => {
    if (this.checked && !this.disabled) {
      return 'slider--selected';
    }

    if (!this.checked && !this.disabled) {
      return 'slider--deselected';
    }

    if (this.checked && this.disabled) {
      return 'slider--selected-disabled';
    }

    if (!this.checked && this.disabled) {
      return 'slider--deselected-disabled';
    }

    return '';
  };

  render(): HTMLElement {
    const sizeClass = this.getSizeClass();
    const sizeSliderClass = this.getSizeSliderClass();
    const styleState = this.getStyleState();

    return (
      <label class={{ [sizeClass]: true }}>
        <input
          type="checkbox"
          ref={this.refNativeInput}
          id={this.switchId}
          name={this.name}
          onClick={this.onClick}
          checked={this.checked}
          disabled={this.disabled}
        ></input>
        <span class={{ [sizeSliderClass]: true, [styleState]: true }}></span>
      </label>
    );
  }
}
