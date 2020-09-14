import { Component, h, Prop, Event, EventEmitter, Watch, State, Method } from '@stencil/core';

let radioButtonIds = 0;
@Component({
  tag: 'bds-radio',
  styleUrl: 'radio.scss',
  shadow: false,
})
export class Radio {
  private nativeInput?: HTMLInputElement;

  @State() radioId?: string;

  @Prop() refer!: string;

  @Prop() label!: string;

  @Prop() value!: string;

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name!: string;

  /**
   * If `true`, the checkbox is selected.
   */
  @Prop({ mutable: true, reflect: true }) checked = false;

  /**
   * If `true`, the user cannot interact with the checkbox.
   */
  @Prop() disabled = false;

  /**
   * Emitted when the value has changed.
   */
  @Event() bdsChange!: EventEmitter;

  /**
   * Emitted when the input has changed.
   */
  @Event() bdsInput!: EventEmitter<KeyboardEvent>;

  @Watch('checked')
  protected checkedChanged(isChecked: boolean): void {
    this.bdsChange.emit({ checked: isChecked });
  }

  @Method()
  getInputElement(): Promise<HTMLInputElement> {
    return Promise.resolve(this.nativeInput);
  }

  @Method()
  getValue(): Promise<boolean> {
    return Promise.resolve(this.nativeInput.checked);
  }

  private onClick = (event: Event): void => {
    this.checked = !this.checked;
    (event.target as HTMLInputElement).checked = this.checked;
  };

  private refNativeInput = (input: HTMLInputElement): void => {
    this.nativeInput = input;
  };

  connectedCallback(): void {
    this.radioId = this.refer || `bds-radio-${radioButtonIds++}`;
  }

  render(): HTMLElement {
    return (
      <label class="radio" htmlFor={this.radioId}>
        <input
          class="radio__input"
          type="radio"
          ref={this.refNativeInput}
          id={this.radioId}
          onClick={this.onClick}
          disabled={this.disabled}
          checked={this.checked}
          value={this.value}
          name={this.name}
        />
        <div class="radio__circle">
          <div class="radio__circle__pointer"></div>
        </div>
        <bds-typo class="radio__text" variant="fs-14" tag="span">
          {this.label}
        </bds-typo>
      </label>
    );
  }
}
