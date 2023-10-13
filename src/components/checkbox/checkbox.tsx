import { Component, h, Prop, State, Method, Event, EventEmitter } from '@stencil/core';

let checkBoxIds = 0;
@Component({
  tag: 'bds-checkbox',
  styleUrl: 'checkbox.scss',
  shadow: true,
})
export class Checkbox {
  private nativeInput?: HTMLInputElement;

  @State() checkBoxId?: string;

  @Prop() refer!: string;

  @Prop() label!: string;

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
   * Data test is the prop to specifically test the component action object.
   */
  @Prop() dataTest?: string = null;

  connectedCallback(): void {
    this.checkBoxId = this.refer || `bds-checkbox-${checkBoxIds++}`;
  }

  /**
   * Emitted when the value has changed.
   */
  @Event() bdsChange!: EventEmitter;

  /**
   * Emitted when the input has changed.
   */
  @Event() bdsInput!: EventEmitter<KeyboardEvent>;

  @Method()
  getInputElement(): Promise<HTMLInputElement> {
    return Promise.resolve(this.nativeInput);
  }

  @Method()
  getValue(): Promise<boolean> {
    return Promise.resolve(this.nativeInput.checked);
  }

  @Method()
  async toggle() {
    this.checked = !this.checked;
    this.bdsChange.emit({
      checked: this.checked,
    });
  }

  private onClick = (): void => {
    this.checked = !this.checked;
    this.bdsChange.emit({
      checked: this.checked,
    });
  };

  private refNativeInput = (input: HTMLInputElement): void => {
    this.nativeInput = input;
  };

  private getStyleState = (): string => {
    if (this.checked && !this.disabled) {
      return 'checkbox--selected';
    }

    if (!this.checked && !this.disabled) {
      return 'checkbox--deselected';
    }

    if (this.checked && this.disabled) {
      return 'checkbox--selected-disabled';
    }

    if (!this.checked && this.disabled) {
      return 'checkbox--deselected-disabled';
    }

    return '';
  };

  render(): HTMLElement {
    const styleState = this.getStyleState();

    return (
      <div
        class={{
          checkbox: true,
          [styleState]: true,
        }}
      >
        <input
          type="checkbox"
          ref={this.refNativeInput}
          id={this.checkBoxId}
          name={this.name}
          onClick={this.onClick}
          checked={this.checked}
          disabled={this.disabled}
          data-test={this.dataTest}
        ></input>
        <label class="checkbox__label" htmlFor={this.checkBoxId}>
          <div class="checkbox__icon">
            <bds-icon class="checkbox__icon__svg" size="x-small" name="true" color="inherit"></bds-icon>
          </div>
          {this.label && (
            <bds-typo class="checkbox__text" variant="fs-14" tag="span">
              {this.label}
            </bds-typo>
          )}
        </label>
      </div>
    );
  }
}
