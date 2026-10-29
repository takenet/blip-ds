import {
  AttachInternals,
  Build,
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Listen,
  Method,
  Prop,
  State,
  Watch,
  h,
} from '@stencil/core';
import { UaiFormControl } from '../../utils/uai-form-control';
import { warnOnce } from '../../utils/deprecation';

let checkboxIds = 0;

/**
 * Checkbox for selecting any combination of options. Use a visible label, and use indeterminate only to
 * represent a parent selection whose children are partially selected. Wrap the app in UaiThemeProvider.
 *
 * @part label - The label and control layout.
 * @part control - The native checkbox input.
 * @part indicator - The visual checkbox and selection mark.
 */
@Component({
  tag: 'uai-checkbox',
  styleUrl: 'uai-checkbox.scss',
  shadow: { delegatesFocus: true },
  formAssociated: true,
})
export class UaiCheckbox {
  @Element() el!: HTMLElement;

  @AttachInternals() internals: ElementInternals;

  @State() disabledByForm = false;
  @State() invalid = false;

  private nativeInput?: HTMLInputElement;
  private formControl?: UaiFormControl;
  private defaultChecked = false;
  private defaultIndeterminate = false;
  private readonly generatedId = `uai-checkbox-${++checkboxIds}`;

  /**
   * ID applied to the native checkbox. Kept for compatibility with bds-checkbox.
   */
  @Prop() refer?: string;

  /**
   * Visible label for the checkbox. Use aria-label when no visible label is appropriate.
   */
  @Prop() label?: string;

  /**
   * Control size. Use standard by default; pair with equally sized selection controls.
   * Avoid changing label typography to compensate for the control size.
   */
  @Prop() size: 'short' | 'standard' | 'tall' = 'standard';

  /**
   * Name used in submitted form data. Without a name, the checkbox is not submitted.
   */
  @Prop({ reflect: true }) name?: string;

  /**
   * If true, the checkbox is selected.
   */
  @Prop({ mutable: true, reflect: true }) checked = false;

  /**
   * If true, the checkbox represents a partially selected set of child options.
   */
  @Prop({ mutable: true, reflect: true }) indeterminate = false;

  /**
   * Value submitted when the checkbox is selected.
   */
  @Prop({ reflect: true }) value = 'on';

  /**
   * If true, an unchecked checkbox blocks form submission.
   */
  @Prop() required = false;

  /**
   * Message announced when required validation fails. Defaults to the browser's localized message.
   */
  @Prop() requiredErrorMessage?: string;

  /**
   * If true, the user cannot interact with the checkbox.
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * Accessible name used when no visible label is provided.
   */
  @Prop({ attribute: 'aria-label' }) ariaLabel: string = null;

  /**
   * Value of the data-test attribute on the native checkbox.
   */
  @Prop() dataTest?: string = null;

  /**
   * Emitted on a user-initiated change. detail: { checked, indeterminate }.
   */
  @Event({ bubbles: true, composed: true }) uaiChange!: EventEmitter<{ checked: boolean; indeterminate: boolean }>;

  /**
   * @deprecated This event was never emitted by bds-checkbox. Listen to uaiChange instead.
   */
  @Event() uaiInput!: EventEmitter<KeyboardEvent>;

  /**
   * Returns the native checkbox input.
   */
  @Method()
  async getInputElement(): Promise<HTMLInputElement> {
    return this.nativeInput;
  }

  /**
   * Returns whether the checkbox is selected.
   */
  @Method()
  async getValue(): Promise<boolean> {
    return this.nativeInput ? this.nativeInput.checked : this.checked;
  }

  /**
   * Toggles the checkbox. When indeterminate, the next state is checked.
   */
  @Method()
  async toggle(): Promise<void> {
    if (this.effectiveDisabled) return;
    this.setFromUser(this.indeterminate || !this.checked);
  }

  @Watch('checked')
  protected checkedChanged(): void {
    this.syncFormValue();
    this.syncValidity();
  }

  @Watch('indeterminate')
  protected indeterminateChanged(): void {
    this.syncNativeState();
  }

  @Watch('value')
  protected valueChanged(): void {
    this.syncFormValue();
  }

  @Watch('required')
  protected requiredChanged(): void {
    this.syncValidity();
  }

  @Watch('disabled')
  protected disabledChanged(): void {
    this.syncValidity();
  }

  @Listen('invalid')
  protected onInvalid(): void {
    this.invalid = true;
  }

  componentWillLoad(): void {
    this.defaultChecked = this.checked;
    this.defaultIndeterminate = this.indeterminate;

    if (typeof this.internals?.setFormValue === 'function') {
      this.formControl = new UaiFormControl({
        internals: this.internals,
        defaultValue: () => (this.defaultChecked ? this.value : null),
        onReset: (value) => {
          this.checked = value !== null;
          this.indeterminate = this.defaultIndeterminate;
          this.invalid = false;
        },
        onDisabledChange: (disabled) => {
          this.disabledByForm = disabled;
          this.syncValidity();
        },
      });
    }

    if (Build.isDev && !this.label && !this.ariaLabel) {
      warnOnce('uai-checkbox', 'accessible-name', 'Checkbox without a visible label requires an aria-label.');
    }
  }

  componentDidRender(): void {
    this.syncNativeState();
    this.syncFormValue();
    this.syncValidity();
  }

  formResetCallback(): void {
    this.formControl?.reset();
  }

  formDisabledCallback(disabled: boolean): void {
    this.formControl?.setDisabled(disabled);
  }

  formStateRestoreCallback(state: string | null): void {
    this.checked = state !== null;
    this.indeterminate = false;
  }

  private get effectiveDisabled(): boolean {
    return this.disabled || this.disabledByForm;
  }

  private get inputId(): string {
    return this.refer || this.generatedId;
  }

  private syncNativeState(): void {
    if (!this.nativeInput) return;
    this.nativeInput.indeterminate = this.indeterminate;
    this.nativeInput.checked = this.checked;
    this.nativeInput.disabled = this.effectiveDisabled;
  }

  private syncFormValue(): void {
    this.formControl?.setValue(this.checked ? this.value : null);
  }

  private syncValidity(): void {
    const input = this.nativeInput;
    if (!input || !this.formControl) return;

    const invalid = this.required && !this.checked && !this.effectiveDisabled;
    const message = this.requiredErrorMessage || input.validationMessage;
    this.formControl.setValidity({ valueMissing: invalid }, invalid ? message : '', input);
    if (!invalid) this.invalid = false;
  }

  private setFromUser(checked: boolean): void {
    if (this.effectiveDisabled) return;
    this.checked = checked;
    this.indeterminate = false;
    this.invalid = false;
    this.syncNativeState();
    this.uaiChange.emit({ checked: this.checked, indeterminate: this.indeterminate });
  }

  private onChange = (event: Event): void => {
    const input = event.currentTarget as HTMLInputElement;
    this.setFromUser(this.indeterminate || input.checked);
  };

  private onKeyDown = (event: KeyboardEvent): void => {
    if (event.key !== 'Enter' || event.isComposing || this.effectiveDisabled) return;
    event.preventDefault();
    void this.toggle();
  };

  render() {
    const disabled = this.effectiveDisabled;

    return (
      <Host
        aria-disabled={disabled ? 'true' : null}
        aria-invalid={this.invalid ? 'true' : null}
        class={{
          'uai-checkbox--disabled': disabled,
          'uai-checkbox--short': this.size === 'short',
          'uai-checkbox--tall': this.size === 'tall',
        }}
      >
        <label class="checkbox" part="label">
          <span class="checkbox__box">
            <input
              id={this.inputId}
              class="checkbox__control"
              part="control"
              type="checkbox"
              name={this.name}
              value={this.value}
              checked={this.checked}
              disabled={disabled}
              required={this.required}
              aria-checked={this.indeterminate ? 'mixed' : String(this.checked)}
              aria-required={this.required ? 'true' : null}
              aria-label={this.label ? null : this.ariaLabel}
              data-test={this.dataTest}
              onChange={this.onChange}
              onKeyDown={this.onKeyDown}
              ref={(input) => (this.nativeInput = input)}
            />
            <span class="checkbox__indicator" part="indicator" aria-hidden="true" />
          </span>
          {this.label && <span class="checkbox__text">{this.label}</span>}
        </label>
      </Host>
    );
  }
}
