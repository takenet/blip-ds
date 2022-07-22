import { Component, h, Prop, Event, EventEmitter, Watch, State, Method, Host } from '@stencil/core';

let radioButtonIds = 0;
@Component({
  tag: 'bds-radio',
  styleUrl: 'radio.scss',
  shadow: true,
})
export class Radio {
  private nativeInput?: HTMLInputElement;

  @State() radioId?: string;

  /**
   * Refer. Field to add refer in radio buttom.
   */
  @Prop() refer?: string;

  /**
   * label in radio, with he the input size increases.
   */
  @Prop() label?: string;

  /**
   * The value of the input.
   */
  @Prop() value!: string;

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name?: string;

  /**
   * If `true`, the checkbox is selected.
   */
  @Prop({ mutable: true, reflect: true }) checked?: boolean = false;

  /**
   * If `true`, the user cannot interact with the checkbox.
   */
  @Prop() disabled?: boolean = false;

  /**
   * Data test is the prop to specifically test the component action object.
   */
  @Prop() dataTest?: string = null;

  /**
   * Emitted when the value has changed.
   */
  @Event() bdsChange!: EventEmitter;

  /**
   * Emitted when the value has changed because of a click event.
   */
  @Event() bdsClickChange!: EventEmitter;

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
    this.bdsClickChange.emit({ checked: this.checked });
    event.stopPropagation();
  };

  private refNativeInput = (input: HTMLInputElement): void => {
    this.nativeInput = input;
  };

  connectedCallback(): void {
    this.radioId = this.refer || `bds-radio-${radioButtonIds++}`;
  }

  private handleClickKey(event) {
    if ((event.key === 'Enter' || event.key === ' ') && !this.disabled) {
      this.onClick(event);
      event.preventDefault();
      this.bdsClickChange.emit({ checked: this.checked });
    }
  }

  render(): HTMLElement {
    return (
      <Host>
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
            data-test={this.dataTest}
          />
          <div class="radio__circle">
            {!this.disabled ? <div class="focus" tabindex="0" onKeyDown={this.handleClickKey.bind(this)}></div> : ''}
            {!this.disabled ? <div class="hover"></div> : ''}
            <div class="radio__circle__pointer"></div>
          </div>

          {this.label && (
            <bds-typo class="radio__text" variant="fs-14" bold={this.checked ? 'bold' : 'regular'} tag="span">
              {this.label}
            </bds-typo>
          )}

          <slot />
        </label>
      </Host>
    );
  }
}
