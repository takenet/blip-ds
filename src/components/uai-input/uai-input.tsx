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
import { InputAutocapitalize, InputAutoComplete, InputCounterLengthRules, UaiControlSize } from '../input/input-interface';
import { warnDeprecated, warnLegacyValue, warnOnce } from '../../utils/deprecation';
import { escapeHtml } from '../../utils/escape-html';
import { UaiFormControl } from '../../utils/uai-form-control';

export type UaiInputType = 'text' | 'email' | 'number' | 'search';
export type UaiInputLegacyType = 'password' | 'phonenumber' | 'date';
export type UaiInputSize = UaiControlSize;

const TAG = 'uai-input';
const TYPES: UaiInputType[] = ['text', 'email', 'number', 'search'];
const SIZES: UaiInputSize[] = ['short', 'medium'];

// Legacy types keep working with the native type until their specialized UAI component exists.
const LEGACY_TYPES: Record<UaiInputLegacyType, { native: string; replacement: string }> = {
  password: { native: 'password', replacement: 'uai-input-password' },
  phonenumber: { native: 'tel', replacement: 'uai-input-phone' },
  date: { native: 'date', replacement: 'uai-input-date or uai-datepicker' },
};

// bds-input props with no place in the standard field: accepted, with a one-time warning (D-6).
const LEGACY_PROPS: [string, string | undefined][] = [
  ['isTextarea', 'Use uai-textarea for multiline text.'],
  ['rows', 'Use uai-textarea for multiline text.'],
  ['cols', 'Use uai-textarea for multiline text.'],
  ['autoResize', 'Use uai-textarea for multiline text.'],
  ['resizable', 'Use uai-textarea for multiline text.'],
  ['minHeight', 'Use uai-textarea for multiline text.'],
  ['maxHeight', 'Use uai-textarea for multiline text.'],
  ['chips', 'Use uai-input-chips.'],
  ['iconSize', 'The icon size follows the field.'],
  ['debounceDelay', undefined],
];

const VALIDITY_FLAGS: (keyof ValidityStateFlags)[] = [
  'valueMissing',
  'typeMismatch',
  'patternMismatch',
  'tooLong',
  'tooShort',
  'rangeUnderflow',
  'rangeOverflow',
  'stepMismatch',
  'badInput',
];

let instances = 0;

/**
 * Text field. Use it for short free text, e-mail, numbers and search, with an optional label above and a helper,
 * error or success message below. It takes part in native forms: give it a name to submit its value.
 * Pair with UaiButton in forms. Avoid it for multiline text (use uai-textarea) or for choosing from a list.
 * Wrap the app in UaiThemeProvider.
 *
 * @slot input-left - Content before the text, inside the field border (for example a prefix tag).
 * @slot inside-input-left - Content right before the typed text (for example a currency symbol).
 * @slot input-right - Content after the text (for example a clear button). Give actions an accessible name.
 * @part input-container - The field box with border, icon, adornments and the native input.
 * @part input - The native input element.
 * @part input__message - The helper, error or success message below the field.
 */
@Component({
  tag: 'uai-input',
  styleUrl: 'uai-input.scss',
  shadow: { delegatesFocus: true },
  formAssociated: true,
})
export class UaiInput {
  @Element() el!: HTMLElement;

  @AttachInternals() internals: ElementInternals;

  @State() validationDanger = false;
  @State() validationText = '';
  @State() disabledByForm = false;

  private nativeInput?: HTMLInputElement;
  private formControl?: UaiFormControl;
  private defaultValue = '';
  private readonly id = `uai-input-${++instances}`;

  /**
   * Name of the value in the submitted form data. Without name (or inputName), the field is not submitted.
   */
  @Prop({ reflect: true, mutable: true }) name?: string;

  /**
   * Name of the value in the submitted form data. Same as name, kept from bds-input.
   */
  @Prop() inputName?: string = '';

  /**
   * Kind of text. Can be one of: 'text' (default), 'email', 'number', 'search'.
   * 'password', 'phonenumber' and 'date' still work but are deprecated: use the specialized UAI inputs.
   */
  @Prop({ reflect: true }) type?: UaiInputType | UaiInputLegacyType = 'text';

  /**
   * Height of the field. Can be one of: 'short', 'medium' (default).
   */
  @Prop({ reflect: true }) size?: UaiInputSize = 'medium';

  /**
   * Label shown above the field. Without a visible label, set aria-label.
   */
  @Prop() label?: string = '';

  /**
   * Example of the expected text, shown while the field is empty. Do not use it as the label.
   */
  @Prop() placeholder?: string = '';

  /**
   * Automatic capitalization on virtual keyboards. Can be one of: 'off' (default), 'none', 'words', 'on', 'sentences', 'characters'.
   */
  @Prop() autoCapitalize?: InputAutocapitalize = 'off';

  /**
   * Browser autofill hint. Can be one of: 'off' (default), 'on', 'current-password', 'new-password', 'username'.
   */
  @Prop() autoComplete?: InputAutoComplete = 'off';

  /**
   * Largest accepted value for type "number".
   */
  @Prop() max?: string;

  /**
   * Largest number of characters. Typing stops at the limit.
   */
  @Prop() maxlength?: number;

  /**
   * Smallest accepted value for type "number".
   */
  @Prop() min?: string;

  /**
   * Smallest number of characters. Checked when the field loses focus and on submit.
   */
  @Prop() minlength?: number;

  /**
   * If true, the value can be selected and copied but not edited. It looks like the default state.
   */
  @Prop() readonly = false;

  /**
   * If true, an empty field blocks the form submission.
   */
  @Prop() required: boolean;

  /**
   * Regular expression the value must match. Checked when the field loses focus and on submit.
   */
  @Prop() pattern?: string;

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
   * UaiIcon name shown before the text, for example "search".
   */
  @Prop({ reflect: true }) icon?: string = '';

  /**
   * If true, the field cannot be focused or edited and is left out of the form data.
   */
  @Prop({ reflect: true, mutable: true }) disabled?: boolean = false;

  /**
   * If true, shows the error state and errorMessage. Has priority over success.
   */
  @Prop({ reflect: true, mutable: true }) danger?: boolean = false;

  /**
   * If true, shows the success state and successMessage.
   */
  @Prop({ reflect: true, mutable: true }) success?: boolean = false;

  /**
   * Current text of the field.
   */
  @Prop({ mutable: true }) value?: string | null = '';

  /**
   * If true, shows the number of characters typed and maxlength.
   */
  @Prop() counterLength? = false;

  /**
   * Ranges of remaining characters that color the counter: warning (feedback/warning) and delete (feedback/error).
   */
  @Prop() counterLengthRule?: InputCounterLengthRules = null;

  /**
   * If true, Enter clears the field after emitting uaiSubmit and does not submit the form (for chat-like fields).
   */
  @Prop() isSubmit = false;

  /**
   * Message shown when a required field is empty. Without it, the browser message is shown.
   */
  @Prop() requiredErrorMessage: string;

  /**
   * Message shown when the text is shorter than minlength. Without it, the browser message is shown.
   */
  @Prop() minlengthErrorMessage: string;

  /**
   * Message shown when the number is smaller than min. Without it, the browser message is shown.
   */
  @Prop() minErrorMessage: string;

  /**
   * Message shown when the number is larger than max. Without it, the browser message is shown.
   */
  @Prop() maxErrorMessage: string;

  /**
   * Message shown when an e-mail is invalid. Without it, the browser message is shown.
   */
  @Prop() emailErrorMessage: string;

  /**
   * Message shown when a number is invalid. Without it, the browser message is shown.
   */
  @Prop() numberErrorMessage: string;

  /**
   * If true, uaiChange emits the value with HTML special characters escaped.
   */
  @Prop() encode?: boolean = false;

  /**
   * Accessible name of the field when there is no visible label.
   */
  @Prop({ attribute: 'aria-label' }) ariaLabel: string = null;

  /**
   * Data test id, set on the native input.
   */
  @Prop() dataTest?: string = null;

  /**
   * @deprecated Use uai-textarea for multiline text. Has no effect.
   */
  @Prop() isTextarea?: boolean;

  /**
   * @deprecated Use uai-textarea. Has no effect.
   */
  @Prop() rows?: number;

  /**
   * @deprecated Use uai-textarea. Has no effect.
   */
  @Prop() cols?: number;

  /**
   * @deprecated Use uai-textarea. Has no effect.
   */
  @Prop() autoResize?: boolean;

  /**
   * @deprecated Use uai-textarea. Has no effect.
   */
  @Prop() resizable?: boolean;

  /**
   * @deprecated Use uai-textarea. Has no effect.
   */
  @Prop() minHeight?: number;

  /**
   * @deprecated Use uai-textarea. Has no effect.
   */
  @Prop() maxHeight?: number;

  /**
   * @deprecated Use uai-input-chips. Has no effect.
   */
  @Prop() chips?: boolean;

  /**
   * @deprecated The icon size follows the field. Has no effect.
   */
  @Prop() iconSize?: 'small' | 'medium';

  /**
   * @deprecated Has no effect.
   */
  @Prop() debounceDelay?: number;

  /**
   * Emitted when the value changes, by typing or programmatically. detail: { value }.
   */
  @Event({ bubbles: true, composed: true }) uaiChange!: EventEmitter<{ value: string }>;

  /**
   * Emitted on every keystroke with the native InputEvent.
   */
  @Event() uaiInput!: EventEmitter<InputEvent>;

  /**
   * Emitted when the field loses focus.
   */
  @Event() uaiOnBlur: EventEmitter<void>;

  /**
   * Emitted when the field receives focus.
   */
  @Event() uaiFocus: EventEmitter<void>;

  /**
   * Emitted on Enter. detail: { event, value }. Inside a form, call detail.event.preventDefault() to stop the submission.
   */
  @Event() uaiSubmit: EventEmitter<{ event: KeyboardEvent; value: string }>;

  /**
   * Emitted when a field with pattern loses focus. detail: true if the value matches.
   */
  @Event() uaiPatternValidation: EventEmitter<boolean>;

  /**
   * Emitted on Backspace or Delete. detail: { event, value }.
   */
  @Event() uaiKeyDownBackspace: EventEmitter<{ event: KeyboardEvent; value: string }>;

  /**
   * Moves the focus to the field.
   */
  @Method()
  async setFocus(): Promise<void> {
    this.nativeInput?.focus();
  }

  /**
   * Removes the focus from the field.
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
   * Returns true when the value meets required, minlength, maxlength, min, max, pattern and type.
   */
  @Method()
  async isValid(): Promise<boolean> {
    return this.nativeInput ? this.nativeInput.validity.valid : true;
  }

  /**
   * Clears the value.
   */
  @Method()
  async clear(): Promise<void> {
    this.value = '';
  }

  // The browser reads the host name attribute for the form data; inputName fills it when name is not set.
  @Watch('inputName')
  protected inputNameChanged(): void {
    if (!this.name && this.inputName) this.name = this.inputName;
  }

  @Watch('value')
  protected valueChanged(newValue: string | null): void {
    const value = newValue || '';
    this.formControl?.setValue(value);
    this.uaiChange.emit({ value: this.encode ? escapeHtml(value) : value });
  }

  // Native form validation of the host (submit or checkValidity) shows the error state.
  @Listen('invalid')
  protected onInvalid(): void {
    this.showValidation(true);
  }

  componentWillLoad() {
    this.defaultValue = this.value || '';
    this.inputNameChanged();
    // Real browsers only: the Stencil mock DOM attaches internals without the form API.
    if (typeof this.internals?.setFormValue === 'function') {
      this.formControl = new UaiFormControl({
        internals: this.internals,
        defaultValue: () => this.defaultValue,
        onReset: (value) => {
          this.validationDanger = false;
          this.value = value as string;
        },
        onDisabledChange: (disabled) => {
          queueMicrotask(() => {
            const formDisabled = this.formControl?.disabled ?? disabled;
            if (!this.disabled && this.disabledByForm !== formDisabled) this.disabledByForm = formDisabled;
          });
        },
      });
    }
    this.warnLegacyUsage();
  }

  componentDidRender() {
    if (this.nativeInput && this.nativeInput.value !== (this.value || '')) {
      this.nativeInput.value = this.value || '';
    }
    this.syncValidity();
  }

  formResetCallback() {
    this.formControl?.reset();
  }

  formDisabledCallback(disabled: boolean) {
    this.formControl?.setDisabled(disabled);
  }

  formStateRestoreCallback(state: string | null) {
    if (typeof state === 'string') this.value = state;
  }

  private warnLegacyUsage() {
    for (const [prop, hint] of LEGACY_PROPS) {
      const value = (this as unknown as Record<string, unknown>)[prop];
      if (value !== undefined && value !== null) warnDeprecated(TAG, prop, hint);
    }
    const legacy = LEGACY_TYPES[this.type as UaiInputLegacyType];
    if (legacy) warnDeprecated(TAG, `type=${this.type}`, `Use ${legacy.replacement}.`);
    if (Build.isDev && !this.label && !this.ariaLabel) {
      warnOnce(TAG, 'accessible-name', 'Fields without a visible label require an aria-label.');
    }
  }

  private get nativeType(): string {
    if ((TYPES as string[]).includes(this.type)) return this.type;
    const legacy = LEGACY_TYPES[this.type as UaiInputLegacyType];
    if (legacy) return legacy.native;
    warnLegacyValue(TAG, 'type', this.type, 'text');
    return 'text';
  }

  private get sizeValue(): UaiInputSize {
    if ((SIZES as string[]).includes(this.size)) return this.size;
    warnLegacyValue(TAG, 'size', this.size, 'medium');
    return 'medium';
  }

  // Message for the first failing constraint: the contract prop or, without it, the browser message.
  private messageFor(validity: ValidityState): string {
    const native = this.nativeInput.validationMessage;
    if (validity.valueMissing) return this.requiredErrorMessage || native;
    if (validity.tooShort) return this.minlengthErrorMessage || native;
    if (validity.rangeUnderflow) return this.minErrorMessage || native;
    if (validity.rangeOverflow) return this.maxErrorMessage || native;
    if (validity.typeMismatch && this.type === 'email') return this.emailErrorMessage || native;
    if (validity.badInput && this.type === 'number') return this.numberErrorMessage || native;
    return native;
  }

  private syncValidity() {
    if (!this.nativeInput || !this.formControl) return;
    const validity = this.nativeInput.validity;
    if (!validity) return;
    const flags: ValidityStateFlags = {};
    for (const flag of VALIDITY_FLAGS) if (validity[flag]) flags[flag] = true;
    this.formControl.setValidity(flags, validity.valid ? '' : this.messageFor(validity), this.nativeInput);
    if (this.validationDanger) this.showValidation(!validity.valid);
  }

  private showValidation(show: boolean) {
    const validity = this.nativeInput?.validity;
    const danger = show && !!validity && !validity.valid;
    const text = danger ? this.messageFor(validity) : '';
    if (danger !== this.validationDanger) this.validationDanger = danger;
    if (text !== this.validationText) this.validationText = text;
  }

  private onInput = (event: InputEvent): void => {
    this.value = (event.target as HTMLInputElement).value;
    if (this.type === 'email' && this.nativeInput.validity?.typeMismatch) this.showValidation(true);
    this.uaiInput.emit(event);
  };

  private onBlur = (): void => {
    if (this.pattern) this.uaiPatternValidation.emit(new RegExp(this.pattern).test(this.nativeInput.value));
    this.showValidation(true);
    this.uaiOnBlur.emit();
  };

  private onFocus = (): void => {
    this.uaiFocus.emit();
  };

  private onKeyDown = (event: KeyboardEvent): void => {
    if (event.key === 'Enter') {
      if (event.isComposing) return;
      this.uaiSubmit.emit({ event, value: this.value });
      if (this.isSubmit) {
        event.preventDefault();
        this.value = '';
        return;
      }
      if (!event.defaultPrevented) this.formControl?.form?.requestSubmit();
    } else if (event.key === 'Backspace' || event.key === 'Delete') {
      this.uaiKeyDownBackspace.emit({ event, value: this.value });
    }
  };

  // Clicks on the field box (outside slotted content) focus the native input, as clicking a native field does.
  private onControlClick = (event: MouseEvent): void => {
    if (!this.el.contains(event.target as Node)) this.nativeInput?.focus();
  };

  private counterState(length: number): string | null {
    const rule = this.counterLengthRule;
    if (!rule || !this.maxlength) return null;
    const remaining = this.maxlength - length;
    if (rule.delete && remaining <= rule.delete.max) return 'delete';
    if (rule.warning && remaining >= rule.warning.min && remaining <= rule.warning.max) return 'warning';
    return null;
  }

  render() {
    const disabled = this.disabled || this.disabledByForm;
    const invalid = this.danger || this.validationDanger;
    const success = this.success && !invalid;
    const message = this.danger
      ? this.errorMessage || this.validationText
      : this.validationDanger
        ? this.validationText
        : success
          ? this.successMessage
          : this.helperMessage;
    const length = (this.value || '').length;
    const counterState = this.counterState(length);
    const describedBy = [message && `${this.id}-message`, this.counterLength && `${this.id}-counter`]
      .filter(Boolean)
      .join(' ');

    return (
      <Host
        aria-disabled={disabled ? 'true' : null}
        class={{
          [`uai-input--size-${this.sizeValue}`]: true,
          'uai-input--danger': invalid,
          'uai-input--success': success,
          'uai-input--disabled': disabled,
          'uai-input--readonly': this.readonly && !disabled,
        }}
      >
        <div class="input">
          {this.label && (
            <label class="input__label" {...{ for: this.id }}>
              <uai-typo variant="caption" bold="semibold" tag="span" margin={false}>
                {this.label}
              </uai-typo>
            </label>
          )}
          <div class="input__control" part="input-container" onClick={this.onControlClick}>
            {this.icon && <uai-icon class="input__icon" name={this.icon} size="medium"></uai-icon>}
            <slot name="input-left"></slot>
            <div class="input__field">
              <slot name="inside-input-left"></slot>
              <input
                id={this.id}
                ref={(input) => (this.nativeInput = input)}
                class="input__native"
                part="input"
                type={this.nativeType}
                min={this.min}
                max={this.max}
                minLength={this.minlength}
                maxLength={this.maxlength}
                pattern={this.pattern}
                value={this.value || ''}
                placeholder={this.placeholder}
                autocapitalize={this.autoCapitalize}
                autocomplete={this.autoComplete}
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
            {this.counterLength && (
              <uai-typo
                id={`${this.id}-counter`}
                class={{ input__counter: true, [`input__counter--${counterState}`]: !!counterState }}
                variant="caption"
                tag="span"
                margin={false}
              >
                {this.maxlength ? `${length}/${this.maxlength}` : `${length}`}
              </uai-typo>
            )}
            {invalid && <uai-icon class="input__feedback" name="error" theme="outline" size="medium"></uai-icon>}
            {success && <uai-icon class="input__feedback" name="checkball" theme="solid" size="medium"></uai-icon>}
            <slot name="input-right"></slot>
          </div>
          {message && (
            <div id={`${this.id}-message`} class="input__message" part="input__message">
              <uai-typo variant="caption" tag="span" margin={false}>
                {message}
              </uai-typo>
            </div>
          )}
        </div>
      </Host>
    );
  }
}
