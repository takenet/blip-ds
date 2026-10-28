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

const TAG = 'uai-textarea';
const SIZES: UaiControlSize[] = ['short', 'medium'];
const VALIDITY_FLAGS: (keyof ValidityStateFlags)[] = [
  'valueMissing',
  'tooLong',
  'tooShort',
  'badInput',
  'customError',
];

let instances = 0;

/**
 * Multiline text field. Use it for longer free text with an optional label, helper, error or success message.
 * Pair with UaiInput for single-line values in the same form. Avoid it for selecting from a list.
 * Wrap the app in UaiThemeProvider.
 *
 * @slot input-left - Content before the text, inside the field border.
 * @slot inside-input-left - Content before the editable text.
 * @slot input-right - Content after the editable text. Give actions an accessible name.
 * @part input-container - The field box with border, adornments and the native textarea.
 * @part input - The native textarea element.
 * @part input__message - The helper, error or success message below the field.
 */
@Component({
  tag: 'uai-textarea',
  styleUrl: 'uai-textarea.scss',
  shadow: { delegatesFocus: true },
  formAssociated: true,
})
export class UaiTextarea {
  @Element() el!: HTMLElement;

  @AttachInternals() internals: ElementInternals;

  @State() validationDanger = false;
  @State() validationText = '';
  @State() disabledByForm = false;

  private nativeTextarea?: HTMLTextAreaElement;
  private formControl?: UaiFormControl;
  private defaultValue = '';
  private readonly id = `uai-textarea-${++instances}`;
  private resizeTimer?: number;
  private resizeObserver?: ResizeObserver;
  private observedWidth?: number;
  private hasExplicitName = false;
  private aliasName?: string;

  /**
   * Name of the value in submitted form data. Without name or inputName, the field is not submitted.
   */
  @Prop({ reflect: true, mutable: true }) name?: string;

  /**
   * Name of the value in submitted form data, kept from bds-input.
   */
  @Prop() inputName?: string = '';

  /**
   * Label shown above the field. Without a visible label, set aria-label.
   */
  @Prop() label?: string = '';

  /**
   * Example of the expected text, shown while the field is empty. Do not use it as the label.
   */
  @Prop() placeholder?: string = '';

  /**
   * Automatic capitalization on virtual keyboards.
   */
  @Prop() autoCapitalize?: InputAutocapitalize = 'off';

  /**
   * Browser autofill hint.
   */
  @Prop() autoComplete?: InputAutoComplete = 'off';

  /**
   * Largest number of characters. Typing stops at the limit.
   */
  @Prop() maxlength?: number;

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
  @Prop() required: boolean;

  /**
   * Regular expression the value must match. Checked on blur and form submission.
   */
  @Prop() pattern?: string;

  /**
   * Message below the field that helps to fill it.
   */
  @Prop() helperMessage?: string = '';

  /**
   * Message shown while danger is true.
   */
  @Prop({ mutable: true }) errorMessage?: string = '';

  /**
   * Message shown while success is true.
   */
  @Prop({ mutable: true }) successMessage?: string = '';

  /**
   * UaiIcon name shown before the text.
   */
  @Prop({ reflect: true }) icon?: string = '';

  /**
   * Minimum control height. Short defaults to one row; medium defaults to three. Explicit rows takes precedence.
   */
  @Prop({ reflect: true }) size: UaiControlSize = 'medium';

  /**
   * If true, the field cannot be edited or submitted.
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
   * Current multiline text.
   */
  @Prop({ mutable: true }) value?: string | null = '';

  /**
   * If true, shows the number of characters typed and maxlength.
   */
  @Prop() counterLength? = false;

  /**
   * Ranges of remaining characters that color the counter.
   */
  @Prop() counterLengthRule?: InputCounterLengthRules = null;

  /**
   * If true, Enter clears the field after uaiSubmit and cancels the newline.
   */
  @Prop() isSubmit = false;

  /**
   * Initial visible line count. The browser's native row sizing supplies the default height.
   */
  @Prop() rows?: number;

  /**
   * Number of columns. Zero leaves the width fluid.
   */
  @Prop() cols = 0;

  /**
   * If true, the field grows with its content.
   */
  @Prop() autoResize = true;

  /**
   * If true and autoResize is false, the user can resize the field vertically.
   */
  @Prop() resizable = false;

  /**
   * Optional minimum height in CSS pixels. Omit to use the native height derived from rows.
   */
  @Prop() minHeight?: number;

  /**
   * Optional maximum height in CSS pixels. Omit for unbounded automatic growth.
   */
  @Prop() maxHeight?: number;

  /**
   * Optional debounce interval in milliseconds for automatic height measurement.
   */
  @Prop() debounceDelay?: number;

  /**
   * Message shown when a required field is empty. Without it, the browser message is shown.
   */
  @Prop() requiredErrorMessage: string;

  /**
   * Message shown when the text is shorter than minlength.
   */
  @Prop() minlengthErrorMessage: string;

  /**
   * Message shown when pattern does not match.
   */
  @Prop() patternErrorMessage?: string;

  /**
   * If true, uaiChange emits HTML-special characters escaped.
   */
  @Prop() encode?: boolean = false;

  /**
   * Accessible name when there is no visible label.
   */
  @Prop({ attribute: 'aria-label' }) ariaLabel: string = null;

  /**
   * Data test id, set on the native textarea.
   */
  @Prop() dataTest?: string = null;

  /**
   * @deprecated The textarea is inherently multiline. This prop has no effect.
   */
  @Prop() isTextarea?: boolean;

  /**
   * @deprecated Use the native body/base icon size. This prop has no effect.
   */
  @Prop() iconSize?: 'small' | 'medium';

  /**
   * @deprecated Textareas do not support numeric input constraints. This prop has no effect.
   */
  @Prop() min?: string;

  /**
   * @deprecated Textareas do not support numeric input constraints. This prop has no effect.
   */
  @Prop() max?: string;

  /**
   * @deprecated Textareas do not have a type. This prop has no effect.
   */
  @Prop() type?: string;

  /**
   * @deprecated Use uai-input-chips for tokenized values. This prop has no effect.
   */
  @Prop() chips?: boolean;

  /**
   * @deprecated Textarea has no native e-mail validation. This prop has no effect.
   */
  @Prop() emailErrorMessage?: string;

  /**
   * @deprecated Textarea has no native number validation. This prop has no effect.
   */
  @Prop() numberErrorMessage?: string;

  /**
   * Emitted when the value changes, by typing or programmatically. detail: { value }.
   */
  @Event({ bubbles: true, composed: true }) uaiChange!: EventEmitter<{ value: string }>;

  /**
   * Emitted on every keystroke with the native InputEvent.
   */
  @Event() uaiInput: EventEmitter<InputEvent>;

  /**
   * Emitted when the field loses focus.
   */
  @Event() uaiOnBlur: EventEmitter<void>;

  /**
   * Emitted when the field gains focus.
   */
  @Event() uaiFocus: EventEmitter<void>;

  /**
   * Emitted on Enter. detail: { event, value }. The native newline is retained unless isSubmit is true.
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
   * Moves focus to the textarea.
   */
  @Method()
  async setFocus(): Promise<void> {
    this.nativeTextarea?.focus();
  }

  private get sizeValue(): UaiControlSize {
    if ((SIZES as string[]).includes(this.size)) return this.size;
    warnLegacyValue(TAG, 'size', this.size, 'medium');
    return 'medium';
  }

  private get rowsValue(): number {
    return this.rows ?? (this.sizeValue === 'short' ? 1 : 3);
  }

  /**
   * Removes focus from the textarea.
   */
  @Method()
  async removeFocus(): Promise<void> {
    this.nativeTextarea?.blur();
  }

  /**
   * Returns the native textarea element.
   */
  @Method()
  async getInputElement(): Promise<HTMLTextAreaElement> {
    return this.nativeTextarea;
  }

  /**
   * Checks native and pattern validity.
   */
  @Method()
  async isValid(): Promise<boolean> {
    if (!this.nativeTextarea) return false;
    return (!this.nativeTextarea.validity || this.nativeTextarea.validity.valid) && this.patternIsValid();
  }

  /**
   * Clears the textarea value.
   */
  @Method()
  async clear(): Promise<void> {
    this.value = '';
  }

  @Watch('name')
  protected nameChanged(newValue: string): void {
    if (newValue && newValue !== this.inputName) this.hasExplicitName = true;
    if (!newValue && this.inputName && !this.hasExplicitName) this.syncInputName();
  }

  @Watch('inputName')
  protected inputNameChanged(newValue: string, oldValue: string): void {
    if (!this.hasExplicitName && (!this.name || this.name === oldValue || this.name === this.aliasName)) {
      this.syncInputName(newValue);
    }
    this.aliasName = newValue;
  }

  @Watch('value')
  protected valueChanged(newValue: string | null): void {
    const value = newValue || '';
    if (this.nativeTextarea && this.nativeTextarea.value !== value) this.nativeTextarea.value = value;
    this.formControl?.setValue(value);
    this.uaiChange.emit({ value: this.encode ? escapeHtml(value) : value });
    this.scheduleResize();
    if (this.validationDanger) this.showValidation(true);
    this.syncValidity();
  }

  @Watch('rows')
  @Watch('size')
  @Watch('minHeight')
  @Watch('maxHeight')
  @Watch('autoResize')
  @Watch('resizable')
  protected resizeConfigurationChanged(): void {
    this.validateResizeConfiguration();
    this.scheduleResize(true);
  }

  @Listen('invalid')
  protected onInvalid(): void {
    this.showValidation(true);
  }

  componentWillLoad(): void {
    this.defaultValue = this.value || '';
    this.hasExplicitName = this.el.hasAttribute('name');
    this.aliasName = this.inputName;
    if (!this.hasExplicitName && this.inputName) this.syncInputName();
    this.validateResizeConfiguration();
    this.warnLegacyUsage();
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
  }

  componentDidLoad(): void {
    this.observeSize();
    this.scheduleResize(true);
    this.syncValidity();
  }

  connectedCallback(): void {
    if (!this.nativeTextarea) return;
    this.observeSize();
    this.scheduleResize(true);
  }

  private observeSize(): void {
    if (!this.nativeTextarea || this.resizeObserver) return;
    if (typeof ResizeObserver === 'function') {
      this.resizeObserver = new ResizeObserver((entries) => {
        const width = entries[0]?.contentRect.width;
        if (width !== undefined && width !== this.observedWidth) {
          this.observedWidth = width;
          this.scheduleResize(true);
        }
      });
      this.resizeObserver.observe(this.nativeTextarea);
    } else {
      window.addEventListener('resize', this.onWindowResize);
    }
  }

  componentDidRender(): void {
    if (this.nativeTextarea && this.nativeTextarea.value !== (this.value || '')) {
      this.nativeTextarea.value = this.value || '';
    }
    this.syncValidity();
  }

  disconnectedCallback(): void {
    if (this.resizeTimer !== undefined) window.clearTimeout(this.resizeTimer);
    this.resizeObserver?.disconnect();
    this.resizeObserver = undefined;
    window.removeEventListener('resize', this.onWindowResize);
    this.observedWidth = undefined;
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

  private warnLegacyUsage(): void {
    const legacyProps: [string, unknown, string][] = [
      ['isTextarea', this.isTextarea, 'The textarea is inherently multiline.'],
      ['iconSize', this.iconSize, 'The icon follows the field typography.'],
      ['min', this.min, 'Textareas do not support numeric input constraints.'],
      ['max', this.max, 'Textareas do not support numeric input constraints.'],
      ['type', this.type, 'Textareas do not have a type.'],
      ['chips', this.chips, 'Use uai-input-chips.'],
      ['emailErrorMessage', this.emailErrorMessage, 'Textareas do not validate e-mail values.'],
      ['numberErrorMessage', this.numberErrorMessage, 'Textareas do not validate numeric values.'],
    ];
    for (const [prop, value, hint] of legacyProps) {
      if (value !== undefined && value !== null) warnDeprecated(TAG, prop, hint);
    }
    if (Build.isDev && !this.label && !this.ariaLabel) {
      warnOnce(TAG, 'accessible-name', 'Fields without a visible label require an aria-label.');
    }
  }

  private validateResizeConfiguration(): void {
    if (this.rows !== undefined && (!Number.isInteger(this.rows) || this.rows < 1)) {
      throw new Error(`[${TAG}] rows must be a positive integer.`);
    }
    if (this.cols !== undefined && (!Number.isInteger(this.cols) || this.cols < 0)) {
      throw new Error(`[${TAG}] cols must be a non-negative integer.`);
    }
    for (const [name, value] of [
      ['minHeight', this.minHeight],
      ['maxHeight', this.maxHeight],
      ['debounceDelay', this.debounceDelay],
    ] as const) {
      if (value !== undefined && (!Number.isFinite(value) || value < 0)) {
        throw new Error(`[${TAG}] ${name} must be a non-negative finite number.`);
      }
    }
    if (this.minHeight !== undefined && this.maxHeight !== undefined && this.minHeight > this.maxHeight) {
      throw new Error(`[${TAG}] minHeight cannot exceed maxHeight.`);
    }
  }

  private patternIsValid(): boolean {
    if (this.pattern === undefined || !this.nativeTextarea) return true;
    if (!this.nativeTextarea.value && !this.required) return true;
    try {
      return new RegExp(`^(?:${this.pattern})$`).test(this.nativeTextarea.value);
    } catch (error) {
      throw new Error(`[${TAG}] Invalid pattern "${this.pattern}": ${String(error)}`);
    }
  }

  private messageFor(validity: ValidityState): string {
    if (validity.valueMissing) return this.requiredErrorMessage || this.nativeTextarea.validationMessage;
    if (validity.tooShort) return this.minlengthErrorMessage || this.nativeTextarea.validationMessage;
    if (!this.patternIsValid()) return this.patternErrorMessage || 'Use o formato indicado.';
    return this.nativeTextarea.validationMessage;
  }

  private syncValidity(): void {
    if (!this.nativeTextarea || !this.formControl) return;
    const flags: ValidityStateFlags = {};
    for (const flag of VALIDITY_FLAGS) {
      if (flag === 'customError') continue;
      if (this.nativeTextarea.validity[flag]) flags[flag] = true;
    }
    if (!this.patternIsValid()) flags.customError = true;
    const message = Object.values(flags).some(Boolean) ? this.messageFor(this.nativeTextarea.validity) : '';
    this.formControl.setValidity(flags, message, this.nativeTextarea);
  }

  private showValidation(show: boolean): void {
    const nativeInvalid = !!this.nativeTextarea && !this.nativeTextarea.validity.valid;
    const patternInvalid = !this.patternIsValid();
    const danger = show && (nativeInvalid || patternInvalid);
    const text = danger ? this.messageFor(this.nativeTextarea.validity) : '';
    if (danger !== this.validationDanger) this.validationDanger = danger;
    if (text !== this.validationText) this.validationText = text;
  }

  private onInput = (event: InputEvent): void => {
    this.value = (event.target as HTMLTextAreaElement).value;
    if (this.validationDanger) this.showValidation(true);
    this.syncValidity();
    this.uaiInput.emit(event);
  };

  private onBlur = (): void => {
    if (this.pattern) this.uaiPatternValidation.emit(this.patternIsValid());
    this.showValidation(true);
    this.uaiOnBlur.emit();
  };

  private onFocus = (): void => {
    this.uaiFocus.emit();
  };

  private onKeyDown = (event: KeyboardEvent): void => {
    if (event.key === 'Enter' && !event.isComposing) {
      this.uaiSubmit.emit({ event, value: this.value || '' });
      if (this.isSubmit) {
        event.preventDefault();
        this.value = '';
      }
    } else if (event.key === 'Backspace' || event.key === 'Delete') {
      this.uaiKeyDownBackspace.emit({ event, value: this.value || '' });
    }
  };

  private scheduleResize(immediate = false): void {
    if (!this.nativeTextarea || !this.autoResize) return;
    if (this.resizeTimer !== undefined) window.clearTimeout(this.resizeTimer);
    if (immediate) {
      this.resizeToContent();
      return;
    }
    const delay = this.debounceDelay ?? 100;
    this.resizeTimer = window.setTimeout(() => {
      this.resizeTimer = undefined;
      this.resizeToContent();
    }, delay);
  }

  private onWindowResize = (): void => this.scheduleResize(true);

  private resizeToContent(): void {
    const textarea = this.nativeTextarea;
    if (!textarea || !this.autoResize) return;
    textarea.style.height = 'auto';
    const measuredHeight = textarea.scrollHeight;
    const constrainedHeight = Math.min(
      Math.max(measuredHeight, this.minHeight ?? 0),
      this.maxHeight ?? Number.POSITIVE_INFINITY,
    );
    textarea.style.height = `${constrainedHeight}px`;
  }

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
          'uai-textarea--danger': invalid,
          'uai-textarea--success': success,
          'uai-textarea--disabled': disabled,
          'uai-textarea--readonly': this.readonly && !disabled,
          'uai-textarea--auto-resize': this.autoResize,
          'uai-textarea--resizable': this.resizable,
          [`uai-textarea--size-${this.sizeValue}`]: true,
        }}
      >
        <div class="textarea">
          {this.label && (
            <label class="textarea__label" {...{ for: this.id }}>
              <uai-typo variant="caption" bold="semibold" tag="span" margin={false}>
                {this.label}
              </uai-typo>
            </label>
          )}
          <div class="textarea__control" part="input-container" onClick={this.onControlClick}>
            {this.icon && <uai-icon class="textarea__icon" name={this.icon} size="medium"></uai-icon>}
            <slot name="input-left"></slot>
            <div class="textarea__field">
              <slot name="inside-input-left"></slot>
              <textarea
                id={this.id}
                ref={(textarea) => (this.nativeTextarea = textarea)}
                class="textarea__native"
                part="input"
                rows={this.rowsValue}
                cols={this.cols || undefined}
                minLength={this.minlength}
                maxLength={this.maxlength}
                style={{
                  ...(this.minHeight !== undefined ? { minHeight: `${this.minHeight}px` } : {}),
                  ...(this.maxHeight !== undefined ? { maxHeight: `${this.maxHeight}px` } : {}),
                }}
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
              ></textarea>
            </div>
            {this.counterLength && (
              <uai-typo
                id={`${this.id}-counter`}
                class={{ textarea__counter: true, [`textarea__counter--${counterState}`]: !!counterState }}
                variant="caption"
                tag="span"
                margin={false}
              >
                {this.maxlength ? `${length}/${this.maxlength}` : `${length}`}
              </uai-typo>
            )}
            {invalid && <uai-icon class="textarea__feedback" name="error" theme="outline" size="medium"></uai-icon>}
            {success && (
              <uai-icon class="textarea__feedback" name="checkball" theme="solid" size="medium"></uai-icon>
            )}
            <slot name="input-right"></slot>
          </div>
          {message && (
            <div id={`${this.id}-message`} class="textarea__message" part="input__message">
              <uai-typo variant="caption" tag="span" margin={false}>
                {message}
              </uai-typo>
            </div>
          )}
        </div>
      </Host>
    );
  }

  private onControlClick = (event: MouseEvent): void => {
    if (event.target === event.currentTarget) this.nativeTextarea?.focus();
  };
}
