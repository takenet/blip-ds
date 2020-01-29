import { Component, h, Prop, State, Method, Event, EventEmitter, Watch } from '@stencil/core';
import uuidv4 from 'uuid/v4';

@Component({
  tag: 'bds-checkbox',
  styleUrl: 'checkbox.scss',
  shadow: true
})
export class Checkbox {
  private nativeInput?: HTMLInputElement;

  @State() checkBoxId?: string;

  @Prop() refer!: string;

  @Prop() label!: string;

  @Prop() group!: string;

  /**
   * If `true`, the checkbox is selected.
   */
  @Prop({ mutable: true }) checked = false;

  /**
   * If `true`, the user cannot interact with the checkbox.
   */
  @Prop() disabled = false;

  connectedCallback(): void {
    this.checkBoxId = this.refer || uuidv4();
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
    return Promise.resolve(this.nativeInput.checked)
  }

  private onClick = (): void => {
    this.checked = !this.checked;
  }

  private refNativeInput = (input: HTMLInputElement): void => { this.nativeInput = input }

  render(): HTMLElement {
    return (
      <div class="checkbox">
        <input
          ref={this.refNativeInput}
          id={this.checkBoxId}
          name={this.group}
          type="checkbox"
          onClick={this.onClick}
          checked={this.checked}
        >
        </input>
        <label class="checkbox__label" htmlFor={this.checkBoxId}>
          <div class="checkbox__icon">
            <bds-icon size="x-small" name="true" color="inherit"></bds-icon>
          </div>
          <bds-typo class="checkbox__text" variant="fs-14" tag="span">{this.label}</bds-typo>
        </label>
      </div>
    );
  }

}
