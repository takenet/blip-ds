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
import { InputAutocapitalize, InputAutoComplete, UaiControlSize } from '../input/input-interface';
import { warnLegacyValue, warnOnce } from '../../utils/deprecation';
import { UaiFormControl } from '../../utils/uai-form-control';

export type UaiPasswordStrengthLevel = 'none' | 'low' | 'medium' | 'high';

const TAG = 'uai-input-password';
const SIZES: UaiControlSize[] = ['short', 'medium'];
const STRENGTH_LEVELS: UaiPasswordStrengthLevel[] = ['none', 'low', 'medium', 'high'];
const VALIDITY_FLAGS: (keyof ValidityStateFlags)[] = [
  'valueMissing',
  'tooLong',
  'tooShort',
  'rangeUnderflow',
  'rangeOverflow',
  'badInput',
];

let instances = 0;

/**
 * Password field with native form support, an accessible visibility toggle and an optional consumer-provided
 * strength indicator. The indicator never evaluates the password or guarantees security. Wrap the app in
 * UaiThemeProvider.
 *
 * @slot input-left - Content before the password text, inside the field border.
 * @slot inside-input-left - Content right before the password text.
 * @slot input-right - Content after the password text. Give actions an accessible name.
 * @part input-container - The field box with border, adornments, input and visibility button.
 * @part input - The native password input.
 * @part input__message - The helper, error or success message below the field.
 */
@Component({
  tag: 'uai-input-password',
  styleUrl: 'uai-input-password.scss',
  shadow: { delegatesFocus: true },
  formAssociated: true,
})
export class UaiInputPassword {
  @Element() el!: HTMLElement;

  @AttachInternals() internals: ElementInternals;

  @State() validationDanger = false;
  @State() validationText = '';
  @State() disabledByForm = false;

  private nativeInput?: HTMLInputElement;
  private formControl?: UaiFormControl;
  private defaultValue = '';
  private hasExplicitName = false;
  private aliasName?: string;
  private readonly inputId = `uai-input-password-${++instances}`;

  /**
   * Name of the value in submitted form data. Without name or inputName, the field is not submitted.
   */
  @Prop({ reflect: true, mutable: true }) name?: string;

  /**
   * Name of the value in submitted form data, kept from bds-input-password.
   */
  @Prop() inputName?: string = '';

  /**
   * Controls whether the password is revealed. The visibility button updates this property.
   */
  @Prop({ mutable: true }) openEyes = false;

  /**
   * Height of the field. Can be 'short' or 'medium' (default).
   */
  @Prop({ reflect: true }) size: UaiControlSize = 'medium';

  /**
   * Label shown above the field. Without a visible label, set aria-label.
   */
  @Prop() label?: string = '';

  /**
   * Example of the expected text, shown while the field is empty. Do not use it as the label.
   */
  @Prop() placeholder?: string = '';

  /**
   * Largest accepted number. Kept for compatibility; password inputs do not enforce numeric bounds.
   */
  @Prop() max?: string;

  /**
   * Largest number of characters. Typing stops at the limit.
   */
  @Prop() maxlength?: number;

  /**
   * Smallest accepted number. Kept for compatibility; password inputs do not enforce numeric bounds.
   */
  @Prop() min?: string;

  /**
   * Smallest number of characters. Checked on blur and form submission.
   */
  @Prop() minlength?: number;

  /**
   * If true, the value can be selected and copied but not edited.
   */
  @Prop() readonly = false;

  /**
   * If true, an empty field blocks form submission.
   */
  @Prop() required = false;

  /**
   * Message below the field that helps to fill it.
   */
  @Prop() helperMessage?: string = '';

  /**
   * Message below the field while danger is true.
   */
  @Prop({ mutable: true }) errorMessage?: string = '';

  /**
   * Message below the field while success is true.
   */
  @Prop({ mutable: true }) successMessage?: string = '';

  /**
   * If true, shows the error state and errorMessage. Has priority over success.
   */
  @Prop({ reflect: true, mutable: true }) danger?: boolean = false;

  /**
   * If true, shows the success state and successMessage.
   */
  @Prop({ reflect: true, mutable: true }) success?: boolean = false;

  /**
   * UaiIcon name shown before the password.
   */
  @Prop({ reflect: true }) icon?: string = '';

  /**
   * If true, the field cannot be focused or edited and is left out of the form data.
   */
  @Prop({ reflect: true, mutable: true }) disabled?: boolean = false;

  /**
   * Automatic capitalization on virtual keyboards.
   */
  @Prop() autoCapitalize?: InputAutocapitalize = 'off';

  /**
   * Browser autofill hint while the password is revealed. While masked, autocomplete is current-password.
   */
  @Prop() autoComplete?: InputAutoComplete = 'off';

  /**
   * Current password. It is not reflected to an attribute.
   */
  @Prop({ mutable: true }) value?: string | null = '';

  /**
   * Message shown when a required field is empty. Without it, the browser message is shown.
   */
  @Prop() requiredErrorMessage?: string;

  /**
   * Message shown when the password is shorter than minlength.
   */
  @Prop() minlengthErrorMessage?: string;

  /**
   * Accessible name when there is no visible label.
   */
  @Prop({ attribute: 'aria-label' }) ariaLabel: string = null;

  /**
   * Data test id, set on the native input.
   */
  @Prop() dataTest?: string = null;

  /**
   * If true, shows the visual strength indicator. The level remains consumer-provided.
   */
  @Prop() showStrength = false;

  /**
   * Consumer-provided visual level. This component does not evaluate the password.
   */
  @Prop({ reflect: true }) strengthLevel: UaiPasswordStrengthLevel = 'none';

  /**
   * Emitted when the value changes, by typing or programmatically. detail: { value }.
   */
  @Event({ bubbles: true, composed: true }) uaiInputPasswordChange!: EventEmitter<{ value: string | null }>;

  /**
   * Emitted on every keystroke with the native InputEvent.
   */
  @Event() uaiInputPasswordInput!: EventEmitter<InputEvent>;

  /**
   * Emitted when the field loses focus.
   */
  @Event() uaiInputPasswordBlur: EventEmitter<void>;

  /**
   * Emitted when the field receives focus.
   */
  @Event() uaiInputPasswordFocus: EventEmitter<void>;

  /**
   * Emitted on Enter. detail: { event, value }.
   */
  @Event({ cancelable: true })
  uaiInputPasswordSubmit: EventEmitter<{ event: KeyboardEvent; value: string | null }>;

  /**
   * Emitted on Backspace or Delete. detail: { event, value }.
   */
  @Event() uaiKeyDownBackspace: EventEmitter<{ event: KeyboardEvent; value: string | null }>;

  /**
   * Moves focus to the password field.
   */
  @Method()
  async setFocus(): Promise<void> {
    this.nativeInput?.focus();
  }

  /**
   * Removes focus from the password field.
   */
  @Method()
  async removeFocus(): Promise<void> {
    this.nativeInput?.blur();
  }

  /**
   * Returns the native input element.
   */
  @Method()
  async getInputElement(): Promise<HTMLInputElement> {
    return this.nativeInput;
  }

  /**
   * Checks the native required and character-length constraints.
   */
  @Method()
  async isValid(): Promise<boolean> {
    return this.nativeInput ? this.nativeInput.validity.valid : true;
  }

  /**
   * Clears the password.
   */
  @Method()
  async clear(): Promise<void> {
    this.value = '';
  }

  @Watch('name')
  protected nameChanged(newValue?: string): void {
    if (newValue && newValue !== this.inputName && newValue !== this.aliasName) this.hasExplicitName = true;
    if (!newValue && this.inputName && !this.hasExplicitName) this.syncInputName();
    this.aliasName = this.inputName;
  }

  @Watch('inputName')
  protected inputNameChanged(newValue?: string, oldValue?: string): void {
    if (!this.hasExplicitName && (!this.name || this.name === oldValue || this.name === this.aliasName)) {
      this.syncInputName(newValue);
    }
    this.aliasName = newValue;
  }

  @Watch('value')
  protected valueChanged(newValue: string | null): void {
    const value = newValue ?? '';
    if (this.nativeInput && this.nativeInput.value !== value) this.nativeInput.value = value;
    this.formControl?.setValue(value);
    this.uaiInputPasswordChange.emit({ value: newValue });
    if (this.validationDanger) this.showValidation(true);
    this.syncValidity();
  }

  @Listen('invalid')
  protected onInvalid(): void {
    this.showValidation(true);
  }

  componentWillLoad(): void {
    this.defaultValue = this.value ?? '';
    this.hasExplicitName = this.el.hasAttribute('name');
    this.aliasName = this.inputName;
    if (!this.hasExplicitName && this.inputName) this.syncInputName();
    if (typeof this.internals?.setFormValue === 'function') {
      this.formControl = new UaiFormControl({
        internals: this.internals,
        defaultValue: () => this.defaultValue,
        onReset: (value) => {
          this.validationDanger = false;
          this.validationText = '';
          this.value = typeof value === 'string' ? value : '';
        },
        onDisabledChange: (disabled) => {
          queueMicrotask(() => {
            const formDisabled = this.formControl?.disabled ?? disabled;
            if (!this.disabled && this.disabledByForm !== formDisabled) this.disabledByForm = formDisabled;
          });
        },
      });
    }
    this.warnForAccessibleName();
  }

  componentDidRender(): void {
    if (this.nativeInput && this.nativeInput.value !== (this.value ?? '')) {
      this.nativeInput.value = this.value ?? '';
    }
    this.syncValidity();
  }

  formResetCallback(): void {
    this.formControl?.reset();
  }

  formDisabledCallback(disabled: boolean): void {
    this.formControl?.setDisabled(disabled);
  }

  formStateRestoreCallback(state: string | null): void {
    if (typeof state === 'string') this.value = state;
  }

  private syncInputName(value = this.inputName): void {
    if (this.hasExplicitName) return;
    this.name = value || undefined;
  }

  private warnForAccessibleName(): void {
    if (Build.isDev && !this.label && !this.ariaLabel) {
      warnOnce(TAG, 'accessible-name', 'Fields without a visible label require an aria-label.');
    }
  }

  private get sizeValue(): UaiControlSize {
    if ((SIZES as string[]).includes(this.size)) return this.size;
    warnLegacyValue(TAG, 'size', this.size, 'medium');
    return 'medium';
  }

  private get strengthLevelValue(): UaiPasswordStrengthLevel {
    if (STRENGTH_LEVELS.includes(this.strengthLevel)) return this.strengthLevel;
    warnLegacyValue(TAG, 'strengthLevel', this.strengthLevel, 'none');
    return 'none';
  }

  private get strengthValue(): number {
    return { none: 0, low: 1, medium: 2, high: 3 }[this.strengthLevelValue];
  }

  private get strengthLabel(): string {
    return { none: 'Não informada', low: 'Baixa', medium: 'Média', high: 'Alta' }[this.strengthLevelValue];
  }

  private get autocompleteValue(): InputAutoComplete {
    return this.openEyes ? this.autoComplete : 'current-password';
  }

  private messageFor(validity: ValidityState): string {
    const native = this.nativeInput?.validationMessage || '';
    if (validity.valueMissing) return this.requiredErrorMessage || native;
    if (validity.tooShort) return this.minlengthErrorMessage || native;
    return native;
  }

  private syncValidity(): void {
    if (!this.nativeInput || !this.formControl) return;
    const validity = this.nativeInput.validity;
    const flags: ValidityStateFlags = {};
    for (const flag of VALIDITY_FLAGS) if (validity[flag]) flags[flag] = true;
    this.formControl.setValidity(flags, validity.valid ? '' : this.messageFor(validity), this.nativeInput);
    if (this.validationDanger) this.showValidation(!validity.valid);
  }

  private showValidation(show: boolean): void {
    const validity = this.nativeInput?.validity;
    const danger = show && !!validity && !validity.valid;
    const text = danger ? this.messageFor(validity) : '';
    if (danger !== this.validationDanger) this.validationDanger = danger;
    if (text !== this.validationText) this.validationText = text;
  }

  private onInput = (event: InputEvent): void => {
    this.value = (event.currentTarget as HTMLInputElement).value;
    this.syncValidity();
    this.uaiInputPasswordInput.emit(event);
  };

  private onBlur = (): void => {
    this.showValidation(true);
    this.uaiInputPasswordBlur.emit();
  };

  private onFocus = (): void => {
    this.uaiInputPasswordFocus.emit();
  };

  private onKeyDown = (event: KeyboardEvent): void => {
    if (event.key === 'Enter') {
      if (event.isComposing) return;
      this.uaiInputPasswordSubmit.emit({ event, value: this.value });
      if (!event.defaultPrevented) this.formControl?.form?.requestSubmit();
    } else if (event.key === 'Backspace' || event.key === 'Delete') {
      this.uaiKeyDownBackspace.emit({ event, value: this.value });
    }
  };

  private onVisibilityClick = (): void => {
    if (!this.disabled && !this.disabledByForm) this.openEyes = !this.openEyes;
  };

  private onControlClick = (event: MouseEvent): void => {
    if (event.target === event.currentTarget) this.nativeInput?.focus();
  };

  render() {
    const disabled = this.disabled || this.formControl?.disabled || this.disabledByForm;
    const invalid = this.danger || this.validationDanger;
    const success = this.success && !invalid;
    const message = this.danger
      ? this.errorMessage || this.validationText
      : this.validationDanger
        ? this.validationText
        : success
          ? this.successMessage
          : this.helperMessage;
    const describedBy = [message && `${this.inputId}-message`, this.showStrength && `${this.inputId}-strength`]
      .filter(Boolean)
      .join(' ');
    const strengthLevel = this.strengthLevelValue;
    const strengthValue = this.strengthValue;

    return (
      <Host
        aria-disabled={disabled ? 'true' : null}
        class={{
          [`uai-input-password--size-${this.sizeValue}`]: true,
          'uai-input-password--danger': invalid,
          'uai-input-password--success': success,
          'uai-input-password--disabled': disabled,
          'uai-input-password--readonly': this.readonly && !disabled,
        }}
      >
        <div class="password">
          {this.label && (
            <label class="password__label" {...{ for: this.inputId }}>
              <uai-typo variant="caption" bold="semibold" tag="span" margin={false}>
                {this.label}
              </uai-typo>
            </label>
          )}
          <div class="password__control" part="input-container" onClick={this.onControlClick}>
            {this.icon && <uai-icon class="password__icon" name={this.icon} size="medium"></uai-icon>}
            <slot name="input-left"></slot>
            <div class="password__field">
              <slot name="inside-input-left"></slot>
              <input
                id={this.inputId}
                ref={(input) => (this.nativeInput = input)}
                class="password__native"
                part="input"
                type={this.openEyes ? 'text' : 'password'}
                min={this.min}
                max={this.max}
                minLength={this.minlength}
                maxLength={this.maxlength}
                value={this.value ?? ''}
                placeholder={this.placeholder}
                autocapitalize={this.autoCapitalize}
                autocomplete={this.autocompleteValue}
                required={this.required}
                readOnly={this.readonly}
                disabled={disabled}
                aria-label={this.label ? null : this.ariaLabel}
                aria-invalid={invalid ? 'true' : null}
                aria-describedby={describedBy || null}
                data-test={this.dataTest}
                onInput={this.onInput}
                onBlur={this.onBlur}
                onFocus={this.onFocus}
                onKeyDown={this.onKeyDown}
              />
            </div>
            {invalid && <uai-icon class="password__feedback" name="error" theme="outline" size="medium"></uai-icon>}
            {success && (
              <uai-icon class="password__feedback" name="checkball" theme="solid" size="medium"></uai-icon>
            )}
            <button
              class="password__toggle"
              type="button"
              aria-label={this.openEyes ? 'Ocultar senha' : 'Mostrar senha'}
              aria-pressed={this.openEyes ? 'true' : 'false'}
              disabled={disabled}
              onClick={this.onVisibilityClick}
            >
              <uai-icon name={this.openEyes ? 'eye-open' : 'eye-closed'} size="medium"></uai-icon>
            </button>
            <slot name="input-right"></slot>
          </div>
          {message && (
            <div id={`${this.inputId}-message`} class="password__message" part="input__message">
              <uai-typo variant="caption" tag="span" margin={false}>
                {message}
              </uai-typo>
            </div>
          )}
          {this.showStrength && (
            <div class="password__strength">
              <uai-typo class="password__strength-label" variant="caption" tag="span" margin={false}>
                Força
              </uai-typo>
              <div
                id={`${this.inputId}-strength`}
                class={{ password__meter: true, [`password__meter--${strengthLevel}`]: true }}
                role="meter"
                aria-label="Força da senha"
                aria-valuemin="0"
                aria-valuemax="3"
                aria-valuenow={strengthValue}
                aria-valuetext={this.strengthLabel}
              >
                {[1, 2, 3].map((segment) => (
                  <span
                    class={{
                      password__segment: true,
                      'password__segment--active': segment <= strengthValue,
                    }}
                  />
                ))}
              </div>
              {strengthLevel !== 'none' && (
                <uai-typo class="password__strength-value" variant="caption" tag="span" margin={false}>
                  {this.strengthLabel}
                </uai-typo>
              )}
            </div>
          )}
        </div>
      </Host>
    );
  }
}
