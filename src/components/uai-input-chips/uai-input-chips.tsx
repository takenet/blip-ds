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
import { UaiControlSize } from '../input/input-interface';
import { warnDeprecated, warnLegacyValue, warnOnce } from '../../utils/deprecation';
import { emailValidation } from '../../utils/validations';
import { UaiFormControl } from '../../utils/uai-form-control';

export type UaiInputChipsType = 'text' | 'email';
export type UaiInputChipsLanguage = 'pt_BR' | 'en_US' | 'es_ES';
export type UaiInputChipsSize = UaiControlSize;

export interface UaiInputChipsChange {
  data: string[];
  value: string;
}

const TAG = 'uai-input-chips';
const SIZES: UaiInputChipsSize[] = ['short', 'medium'];
const LANGUAGES: UaiInputChipsLanguage[] = ['pt_BR', 'en_US', 'es_ES'];
const LEGACY_PROPS = ['height', 'maxHeight', 'disableSubmit'];

const TEXTS: Record<UaiInputChipsLanguage, { remove: (value: string) => string; email: string; required: string }> = {
  pt_BR: {
    remove: (value) => `Remover ${value}`,
    email: 'Use apenas e-mails válidos.',
    required: 'Adicione pelo menos um valor.',
  },
  en_US: {
    remove: (value) => `Remove ${value}`,
    email: 'Use only valid e-mails.',
    required: 'Add at least one value.',
  },
  es_ES: {
    remove: (value) => `Quitar ${value}`,
    email: 'Use solo correos electrónicos válidos.',
    required: 'Agregue al menos un valor.',
  },
};

function parseChips(chips: string[] | string | null | undefined): string[] {
  if (!chips) return [];
  if (Array.isArray(chips)) return chips.map(String);
  try {
    const parsed = JSON.parse(chips);
    return Array.isArray(parsed) ? parsed.map(String) : [];
  } catch {
    return [];
  }
}

let instances = 0;

/**
 * Field that turns free text into removable chips. The person types a value and presses Enter, or separates values
 * with comma or semicolon; Backspace on the empty field removes the last chip. It takes part in native forms: with a
 * name, each chip is submitted as one entry (read them with FormData.getAll). Use it for several open values, such as
 * e-mails or tags. Pair with UaiButton in forms. Avoid it to choose from known options (use uai-select-chips or
 * uai-autocomplete). Wrap the app in UaiThemeProvider.
 *
 * @slot input-right - Content after the chips and the text (for example a clear button). Give actions an accessible name.
 * @part input-container - The field box with border, icon, chips and the native input.
 * @part chips - The list of chips.
 * @part chip - Each chip.
 * @part chip-remove - The remove button of each chip.
 * @part input - The native input where new values are typed.
 * @part input__message - The helper, error or success message below the field.
 */
@Component({
  tag: 'uai-input-chips',
  styleUrl: 'uai-input-chips.scss',
  shadow: { delegatesFocus: true },
  formAssociated: true,
})
export class UaiInputChips {
  @Element() el!: HTMLElement;

  @AttachInternals() internals: ElementInternals;

  @State() internalChips: string[] = [];
  @State() validationDanger = false;
  @State() disabledByForm = false;

  private nativeInput?: HTMLInputElement;
  private formControl?: UaiFormControl;
  private defaultChips: string[] = [];
  private focusInputAfterRender = false;
  private reachedLimit = false;
  private readonly id = `uai-input-chips-${++instances}`;

  /**
   * Values shown as chips. Accepts an array or a JSON array string, for example '["ana@blip.ai", "bia@blip.ai"]'.
   */
  @Prop({ mutable: true }) chips: string[] | string = [];

  /**
   * Text being typed, before it becomes a chip.
   */
  @Prop({ mutable: true, reflect: true }) value?: string | null = '';

  /**
   * Characters that split the text into several chips. Default: comma and semicolon (/,|;/).
   */
  @Prop() delimiters?: RegExp = /,|;/;

  /**
   * If true, repeated values are accepted. If false (default), a value equal to an existing chip, ignoring case, is
   * ignored.
   */
  @Prop() duplicated?: boolean = false;

  /**
   * If true, leaving the field turns the typed text into a chip.
   */
  @Prop() blurCreation = false;

  /**
   * Kind of value. Can be one of: 'text' (default), 'email'. With 'email', chips that are not e-mails are marked as
   * errors and the field is invalid.
   */
  @Prop() type: UaiInputChipsType = 'text';

  /**
   * Name of the values in the submitted form data; each chip is one entry. Without name (or inputName), the field is
   * not submitted.
   */
  @Prop({ reflect: true, mutable: true }) name?: string;

  /**
   * Name of the values in the submitted form data. Same as name, kept from bds-input-chips.
   */
  @Prop() inputName?: string = '';

  /**
   * Label shown above the field. Without a visible label, set aria-label.
   */
  @Prop() label? = '';

  /**
   * Example of a value, shown while the text is empty. Do not use it as the label.
   */
  @Prop() placeholder?: string = '';

  /**
   * Minimum height of the field, which grows with the chips. Can be one of: 'short', 'medium' (default).
   */
  @Prop({ reflect: true }) size?: UaiInputChipsSize = 'medium';

  /**
   * Language of the default texts. Can be one of: 'pt_BR' (default), 'en_US', 'es_ES'.
   */
  @Prop() language?: UaiInputChipsLanguage = 'pt_BR';

  /**
   * UaiIcon name shown before the chips.
   */
  @Prop({ reflect: true }) icon?: string = '';

  /**
   * If true, the field without chips blocks the form submission.
   */
  @Prop() required: boolean;

  /**
   * If true, the chips are shown without remove buttons and no value can be typed.
   */
  @Prop() readonly = false;

  /**
   * If true, the field cannot be used and the chips are left out of the form data.
   */
  @Prop({ reflect: true }) disabled?: boolean = false;

  /**
   * If true, shows the error state and errorMessage. Has priority over success.
   */
  @Prop({ reflect: true, mutable: true }) danger? = false;

  /**
   * If true, shows the success state and successMessage.
   */
  @Prop({ reflect: true, mutable: true }) success?: boolean = false;

  /**
   * Message below the field that helps to fill it.
   */
  @Prop() helperMessage?: string = '';

  /**
   * Message below the field while danger is true.
   */
  @Prop({ mutable: true }) errorMessage? = '';

  /**
   * Message below the field while success is true.
   */
  @Prop({ mutable: true }) successMessage?: string = '';

  /**
   * Message shown when type is 'email' and a chip is not an e-mail. Without it, the default text is shown.
   */
  @Prop() emailErrorMessage: string;

  /**
   * Message shown when a required field has no chips. Without it, the default text is shown.
   */
  @Prop() requiredErrorMessage: string;

  /**
   * Largest number of characters of each chip.
   */
  @Prop() maxlength?: number;

  /**
   * Largest number of chips. When it is reached, the text input is hidden.
   */
  @Prop() maxChipsLength?: number;

  /**
   * If true, shows the number of chips and maxChipsLength.
   */
  @Prop() counterLength? = false;

  /**
   * Accessible name of the field when there is no visible label.
   */
  @Prop({ attribute: 'aria-label' }) ariaLabel: string = null;

  /**
   * Data test id, set on the native input.
   */
  @Prop() dataTest?: string = null;

  /**
   * Data test id, set on the remove button of each chip.
   */
  @Prop() dtButtonClose?: string = null;

  /**
   * @deprecated The field grows with the chips. Has no effect.
   */
  @Prop() height?: string;

  /**
   * @deprecated The field grows with the chips. Has no effect.
   */
  @Prop() maxHeight?: string;

  /**
   * @deprecated Has no effect.
   */
  @Prop() disableSubmit?: boolean;

  /**
   * Emitted when chips are added or removed. detail: { data (all chips), value (last chip) }.
   */
  @Event() uaiChange!: EventEmitter<UaiInputChipsChange>;

  /**
   * Emitted when chips are added or removed. Same as uaiChange, kept from bds-input-chips.
   */
  @Event() uaiChangeChips!: EventEmitter<UaiInputChipsChange>;

  /**
   * Emitted when the text input receives focus.
   */
  @Event() uaiInputChipsFocus!: EventEmitter<void>;

  /**
   * Emitted when the text input loses focus. detail: all chips.
   */
  @Event() uaiBlur!: EventEmitter<string[]>;

  /**
   * Emitted on every keystroke with the native InputEvent.
   */
  @Event() uaiInputChipsInput!: EventEmitter<InputEvent>;

  /**
   * Emitted when maxChipsLength is reached. detail: { value: true }.
   */
  @Event() uaiExtendedQuantityInput!: EventEmitter<{ value: boolean }>;

  /**
   * Emitted when the text input loses focus with chips. detail: { value (all chips) }.
   */
  @Event() uaiSubmit!: EventEmitter<{ value: string[] }>;

  /**
   * Returns true when the chips are valid for the type and, if required, there is at least one.
   */
  @Method()
  async isValid(): Promise<boolean> {
    return !this.validity().invalid;
  }

  /**
   * Returns the chips.
   */
  @Method()
  async get(): Promise<string[]> {
    return this.internalChips;
  }

  /**
   * Removes all chips and the typed text.
   */
  @Method()
  async clear(): Promise<void> {
    this.internalChips = [];
    this.value = '';
  }

  /**
   * Adds chips from the given text, or from the typed text when no value is given.
   */
  @Method()
  async add(value?: string): Promise<void> {
    this.addFromText(value || this.value || '');
    this.value = '';
  }

  /**
   * Moves the focus to the text input.
   */
  @Method()
  async setFocus(): Promise<void> {
    this.nativeInput?.focus();
  }

  /**
   * Removes the focus from the text input.
   */
  @Method()
  async removeFocus(): Promise<void> {
    this.nativeInput?.blur();
  }

  @Watch('chips')
  protected chipsChanged(): void {
    this.internalChips = parseChips(this.chips);
  }

  @Watch('internalChips')
  protected internalChipsChanged(): void {
    this.syncFormValue();
    this.checkLimit();
  }

  @Watch('name')
  @Watch('inputName')
  protected nameChanged(): void {
    if (!this.name && this.inputName) this.name = this.inputName;
    this.syncFormValue();
  }

  @Watch('height')
  @Watch('maxHeight')
  @Watch('disableSubmit')
  protected legacyPropChanged(_value: unknown, _old: unknown, prop: string): void {
    warnDeprecated(TAG, prop, 'The field grows with the chips.');
  }

  @Listen('invalid')
  protected onInvalid(): void {
    this.showValidation(true);
  }

  componentWillLoad() {
    this.internalChips = parseChips(this.chips);
    this.defaultChips = [...this.internalChips];
    if (!this.name && this.inputName) this.name = this.inputName;
    // Real browsers only: the Stencil mock DOM attaches internals without the form API.
    if (typeof this.internals?.setFormValue === 'function') {
      this.formControl = new UaiFormControl({
        internals: this.internals,
        defaultValue: () => this.formValue(this.defaultChips),
        onReset: () => {
          this.validationDanger = false;
          this.value = '';
          this.internalChips = [...this.defaultChips];
        },
        onDisabledChange: (disabled) => {
          queueMicrotask(() => {
            const formDisabled = this.formControl?.disabled ?? disabled;
            if (!this.disabled && this.disabledByForm !== formDisabled) this.disabledByForm = formDisabled;
          });
        },
      });
    }
    for (const prop of LEGACY_PROPS) {
      const value = (this as unknown as Record<string, unknown>)[prop];
      if (value !== undefined && value !== null) warnDeprecated(TAG, prop, 'The field grows with the chips.');
    }
    if (Build.isDev && !this.label && !this.ariaLabel) {
      warnOnce(TAG, 'accessible-name', 'Fields without a visible label require an aria-label.');
    }
    this.reachedLimit = this.isAtLimit();
  }

  componentDidRender() {
    if (this.nativeInput && this.nativeInput.value !== (this.value || '')) this.nativeInput.value = this.value || '';
    const { flags, message } = this.validity();
    this.formControl?.setValidity(flags, message, this.nativeInput);
    if (this.focusInputAfterRender) {
      this.focusInputAfterRender = false;
      this.nativeInput?.focus();
    }
  }

  formResetCallback() {
    this.formControl?.reset();
  }

  formDisabledCallback(disabled: boolean) {
    this.formControl?.setDisabled(disabled);
  }

  formStateRestoreCallback(state: string | null) {
    if (typeof state === 'string') this.internalChips = parseChips(state);
  }

  private get texts() {
    if ((LANGUAGES as string[]).includes(this.language)) return TEXTS[this.language];
    warnLegacyValue(TAG, 'language', this.language, 'pt_BR');
    return TEXTS.pt_BR;
  }

  private get sizeValue(): UaiInputChipsSize {
    if ((SIZES as string[]).includes(this.size)) return this.size;
    warnLegacyValue(TAG, 'size', this.size, 'medium');
    return 'medium';
  }

  private get isDisabled(): boolean {
    return this.disabled || this.disabledByForm;
  }

  private formValue(chips: string[]): FormData | null {
    const name = this.name || this.inputName;
    if (!name || !chips.length) return null;
    const data = new FormData();
    for (const chip of chips) data.append(name, chip);
    return data;
  }

  private syncFormValue() {
    this.formControl?.setValue(this.formValue(this.internalChips), JSON.stringify(this.internalChips));
  }

  private isAtLimit(): boolean {
    return !!this.maxChipsLength && this.internalChips.length >= this.maxChipsLength;
  }

  private checkLimit() {
    const atLimit = this.isAtLimit();
    if (atLimit && !this.reachedLimit) this.uaiExtendedQuantityInput.emit({ value: true });
    this.reachedLimit = atLimit;
  }

  private isInvalidChip(chip: string): boolean {
    return this.type === 'email' && !!emailValidation(chip.trim());
  }

  private validity(): { invalid: boolean; flags: ValidityStateFlags; message: string } {
    const texts = this.texts;
    if (this.required && !this.internalChips.length) {
      return { invalid: true, flags: { valueMissing: true }, message: this.requiredErrorMessage || texts.required };
    }
    if (this.internalChips.some((chip) => this.isInvalidChip(chip))) {
      return { invalid: true, flags: { typeMismatch: true }, message: this.emailErrorMessage || texts.email };
    }
    return { invalid: false, flags: {}, message: '' };
  }

  // Shows the validation result from now on; the message follows the chips while it stays shown.
  private showValidation(show: boolean) {
    const danger = show && this.validity().invalid;
    if (danger !== this.validationDanger) this.validationDanger = danger;
  }

  private emitChange() {
    const detail = { data: this.internalChips, value: this.internalChips[this.internalChips.length - 1] };
    this.uaiChange.emit(detail);
    this.uaiChangeChips.emit(detail);
  }

  // Adds one chip per part of the text; returns true when at least one chip was added.
  private addFromText(text: string): boolean {
    const chips = [...this.internalChips];
    for (const part of text.split(this.delimiters || /,|;/)) {
      const chip = part.trim();
      if (!chip) continue;
      if (this.maxChipsLength && chips.length >= this.maxChipsLength) break;
      if (!this.duplicated && chips.some((item) => item.toLowerCase() === chip.toLowerCase())) continue;
      chips.push(chip);
    }
    if (chips.length === this.internalChips.length) return false;
    this.internalChips = chips;
    return true;
  }

  private commitText(text: string) {
    this.value = '';
    if (this.nativeInput) this.nativeInput.value = '';
    if (this.addFromText(text)) this.emitChange();
  }

  private removeChip(index: number) {
    this.internalChips = this.internalChips.filter((_chip, position) => position !== index);
    this.focusInputAfterRender = true;
    this.emitChange();
  }

  private onInput = (event: InputEvent): void => {
    const text = (event.target as HTMLInputElement).value || '';
    if (this.delimiters?.test(text)) this.commitText(text);
    else this.value = text;
    this.uaiInputChipsInput.emit(event);
  };

  private onKeyDown = (event: KeyboardEvent): void => {
    if (event.isComposing || this.readonly || this.isDisabled) return;
    const text = this.nativeInput?.value || '';
    if (event.key === 'Enter') {
      if (text.trim()) {
        event.preventDefault();
        this.commitText(text);
      } else {
        this.formControl?.form?.requestSubmit();
      }
    } else if ((event.key === 'Backspace' || event.key === 'Delete') && !text && this.internalChips.length) {
      this.internalChips = this.internalChips.slice(0, -1);
      this.emitChange();
    }
  };

  private onFocus = (): void => {
    this.uaiInputChipsFocus.emit();
  };

  private onBlur = (): void => {
    if (this.blurCreation && this.nativeInput?.value.trim()) this.commitText(this.nativeInput.value);
    this.uaiBlur.emit(this.internalChips);
    if (this.internalChips.length) this.uaiSubmit.emit({ value: this.internalChips });
    this.showValidation(true);
  };

  // Clicks on the field box (outside chips buttons and slotted content) focus the input, as a native field does.
  private onControlClick = (event: MouseEvent): void => {
    if ((event.target as HTMLElement)?.closest?.('button')) return;
    if (!this.el.contains(event.target as Node)) this.nativeInput?.focus();
  };

  private renderChip(chip: string, index: number, removable: boolean) {
    const texts = this.texts;
    return (
      <li
        key={`${index}-${chip}`}
        part="chip"
        role="listitem"
        class={{ chip: true, 'chip--invalid': this.isInvalidChip(chip), 'chip--static': !removable }}
      >
        <span class="chip__label" title={chip}>
          {chip}
        </span>
        {removable && (
          <button
            type="button"
            class="chip__remove"
            part="chip-remove"
            aria-label={texts.remove(chip)}
            data-test={this.dtButtonClose}
            onClick={() => this.removeChip(index)}
          >
            <span aria-hidden="true">×</span>
          </button>
        )}
      </li>
    );
  }

  render() {
    const disabled = this.isDisabled;
    const validity = this.validity();
    const validationText = this.validationDanger && validity.invalid ? validity.message : '';
    const invalid = this.danger || !!validationText;
    const success = this.success && !invalid;
    const message = this.danger
      ? this.errorMessage || validationText
      : validationText
        ? validationText
        : success
          ? this.successMessage
          : this.helperMessage;
    const removable = !disabled && !this.readonly;
    const showInput = !this.isAtLimit();
    const describedBy = [message && `${this.id}-message`, this.counterLength && `${this.id}-counter`]
      .filter(Boolean)
      .join(' ');

    return (
      <Host
        aria-disabled={disabled ? 'true' : null}
        class={{
          [`uai-input-chips--size-${this.sizeValue}`]: true,
          'uai-input-chips--danger': invalid,
          'uai-input-chips--success': success,
          'uai-input-chips--disabled': disabled,
          'uai-input-chips--readonly': this.readonly && !disabled,
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
            <div class="input__field">
              <ul class="chips" part="chips" role="list" aria-label={this.label || this.ariaLabel || null}>
                {this.internalChips.map((chip, index) => this.renderChip(chip, index, removable))}
              </ul>
              {showInput && (
                <input
                  id={this.id}
                  ref={(input) => (this.nativeInput = input)}
                  class="input__native"
                  part="input"
                  type="text"
                  value={this.value || ''}
                  placeholder={this.placeholder}
                  maxLength={this.maxlength}
                  readOnly={this.readonly}
                  disabled={disabled}
                  aria-label={this.label ? null : this.ariaLabel}
                  aria-invalid={invalid ? 'true' : null}
                  aria-describedby={describedBy || null}
                  data-test={this.dataTest}
                  onInput={this.onInput}
                  onKeyDown={this.onKeyDown}
                  onFocus={this.onFocus}
                  onBlur={this.onBlur}
                />
              )}
            </div>
            {this.counterLength && (
              <uai-typo id={`${this.id}-counter`} class="input__counter" variant="caption" tag="span" margin={false}>
                {this.maxChipsLength
                  ? `${this.internalChips.length}/${this.maxChipsLength}`
                  : `${this.internalChips.length}`}
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
