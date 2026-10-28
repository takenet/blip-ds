import {
  AttachInternals,
  Build,
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Method,
  Prop,
  State,
  Watch,
  h,
} from '@stencil/core';
import { warnDeprecated, warnLegacyValue, warnOnce } from '../../utils/deprecation';
import { UaiFormControl } from '../../utils/uai-form-control';

export type UaiInputEditableSize = 'short' | 'standard' | 'tall';
export type UaiInputEditableLanguage = 'pt_BR' | 'en_US' | 'es_ES';

export interface UaiInputEditableEventDetail {
  value: string;
  oldValue: string;
}

const TAG = 'uai-input-editable';
const SIZES: UaiInputEditableSize[] = ['short', 'standard', 'tall'];
const LANGUAGES: UaiInputEditableLanguage[] = ['pt_BR', 'en_US', 'es_ES'];

const TEXTS: Record<
  UaiInputEditableLanguage,
  { edit: string; save: string; cancel: string; required: string; minlength: (length: number) => string }
> = {
  pt_BR: {
    edit: 'Editar',
    save: 'Salvar',
    cancel: 'Cancelar',
    required: 'Informe um valor.',
    minlength: (length) => `Use pelo menos ${length} caracteres.`,
  },
  en_US: {
    edit: 'Edit',
    save: 'Save',
    cancel: 'Cancel',
    required: 'Enter a value.',
    minlength: (length) => `Use at least ${length} characters.`,
  },
  es_ES: {
    edit: 'Editar',
    save: 'Guardar',
    cancel: 'Cancelar',
    required: 'Ingrese un valor.',
    minlength: (length) => `Use al menos ${length} caracteres.`,
  },
};

let instances = 0;

/**
 * Value shown as text that the person can edit and confirm. In reading mode it shows the value and an Edit button;
 * in editing mode it shows a field with Save and Cancel. Enter saves, Escape cancels and the focus goes back to Edit.
 * Empty values, values shorter than minlength and values with danger are not saved. It takes part in native forms
 * with the saved value. Use it to rename or adjust an existing value in place, such as a title. Pair with a label
 * that names the value. Avoid it for forms where every field is edited at once (use uai-input). Wrap the app in
 * UaiThemeProvider.
 *
 * @part input-container - The field box, in reading and editing modes.
 * @part input - The native input, in editing mode.
 * @part input__message - The helper, error or success message below the field.
 * @part edit-button - The button that starts editing.
 * @part confirm-button - The button that saves the value.
 * @part cancel-button - The button that discards the changes.
 */
@Component({
  tag: 'uai-input-editable',
  styleUrl: 'uai-input-editable.scss',
  shadow: { delegatesFocus: true },
  formAssociated: true,
})
export class UaiInputEditable {
  @Element() el!: HTMLElement;

  @AttachInternals() internals: ElementInternals;

  @State() isEditing = false;
  @State() draft = '';
  @State() validationDanger = false;
  @State() disabledByForm = false;

  private nativeInput?: HTMLInputElement;
  private editButton?: HTMLButtonElement;
  private formControl?: UaiFormControl;
  private defaultValue = '';
  private focusTarget: 'input' | 'edit' | null = null;
  private readonly id = `uai-input-editable-${++instances}`;

  /**
   * Saved value, shown in reading mode and submitted with the form.
   */
  @Prop({ mutable: true, reflect: true }) value?: string | null = '';

  /**
   * Label shown above the field. It also names the Edit button ("Editar <label>").
   */
  @Prop() label?: string = '';

  /**
   * Text shown while the value is empty, in both modes.
   */
  @Prop() placeholder?: string = '';

  /**
   * Height of the field. Can be one of: 'short', 'standard' (default), 'tall'. 'medium' is the same as 'standard'.
   */
  @Prop({ reflect: true }) size?: UaiInputEditableSize | 'medium' = 'standard';

  /**
   * Name of the saved value in the submitted form data. Without name (or inputName), the field is not submitted.
   */
  @Prop({ reflect: true, mutable: true }) name?: string;

  /**
   * Name of the saved value in the submitted form data. Same as name, kept from bds-input-editable.
   */
  @Prop() inputName?: string = '';

  /**
   * Smallest number of characters to save.
   */
  @Prop() minlength?: number = 0;

  /**
   * Largest number of characters. Typing stops at the limit.
   */
  @Prop() maxlength?: number;

  /**
   * If true, shows the error state and errorMessage, and saving is blocked. Has priority over success.
   */
  @Prop({ mutable: true, reflect: true }) danger?: boolean = false;

  /**
   * If true, shows the success state and successMessage.
   */
  @Prop({ reflect: true, mutable: true }) success?: boolean = false;

  /**
   * If true, the value is shown without the Edit button and is left out of the form data.
   */
  @Prop({ reflect: true }) disabled?: boolean = false;

  /**
   * Message below the field that helps to fill it.
   */
  @Prop() helperMessage?: string = '';

  /**
   * Message below the field while danger is true.
   */
  @Prop() errorMessage?: string = '';

  /**
   * Message below the field while success is true.
   */
  @Prop({ mutable: true }) successMessage?: string = '';

  /**
   * Message shown when saving an empty value. Without it, the default text of the language is shown.
   */
  @Prop() requiredErrorMessage: string;

  /**
   * Message shown when saving a value shorter than minlength. Without it, the default text is shown.
   */
  @Prop() minlengthErrorMessage: string;

  /**
   * Language of the default texts. Can be one of: 'pt_BR' (default), 'en_US', 'es_ES'.
   */
  @Prop() language?: UaiInputEditableLanguage = 'pt_BR';

  /**
   * Accessible name of the field when there is no visible label.
   */
  @Prop({ attribute: 'aria-label' }) ariaLabel: string = null;

  /**
   * Data test id, set on the native input.
   */
  @Prop() dataTest?: string = null;

  /**
   * Data test id, set on the Edit button.
   */
  @Prop() dtButtonEdit?: string = null;

  /**
   * Data test id, set on the Cancel button.
   */
  @Prop() dtButtonClose?: string = null;

  /**
   * Data test id, set on the Save button.
   */
  @Prop() dtButtonConfirm?: string = null;

  /**
   * @deprecated The field takes the width of its container (--uai-input-editable-width). Has no effect.
   */
  @Prop() expand?: boolean;

  /**
   * Emitted when a value is saved. detail: { value (new), oldValue }.
   */
  @Event() uaiInputEditableSave!: EventEmitter<UaiInputEditableEventDetail>;

  /**
   * Emitted on every keystroke while editing. detail: { value (being typed), oldValue (saved) }.
   */
  @Event() uaiChange!: EventEmitter<UaiInputEditableEventDetail>;

  /**
   * Emitted on every keystroke with the native InputEvent.
   */
  @Event() uaiInput!: EventEmitter<InputEvent>;

  /**
   * Emitted when the editing is cancelled.
   */
  @Event() uaiCancel!: EventEmitter<void>;

  /**
   * Emitted when the field receives focus while editing.
   */
  @Event() uaiFocus!: EventEmitter<void>;

  /**
   * Emitted when the field loses focus while editing.
   */
  @Event() uaiBlur!: EventEmitter<void>;

  /**
   * Starts editing and moves the focus to the field.
   */
  @Method()
  async edit(): Promise<void> {
    this.startEditing();
  }

  /**
   * Saves the value being typed. Returns false when it cannot be saved (empty, shorter than minlength or danger).
   */
  @Method()
  async save(): Promise<boolean> {
    return this.saveDraft();
  }

  /**
   * Discards the value being typed and returns to reading mode.
   */
  @Method()
  async cancel(): Promise<void> {
    this.cancelEditing();
  }

  /**
   * Moves the focus to the field while editing, or to the Edit button.
   */
  @Method()
  async setFocus(): Promise<void> {
    (this.isEditing ? this.nativeInput : this.editButton)?.focus();
  }

  @Watch('value')
  protected valueChanged(): void {
    this.syncFormValue();
  }

  @Watch('name')
  @Watch('inputName')
  protected nameChanged(): void {
    if (!this.name && this.inputName) this.name = this.inputName;
  }

  @Watch('expand')
  protected expandChanged(): void {
    warnDeprecated(TAG, 'expand', 'The field takes the width of its container.');
  }

  @Watch('disabled')
  protected disabledChanged(disabled: boolean): void {
    if (disabled) this.isEditing = false;
  }

  componentWillLoad() {
    this.defaultValue = this.value || '';
    this.draft = this.defaultValue;
    if (!this.name && this.inputName) this.name = this.inputName;
    // Real browsers only: the Stencil mock DOM attaches internals without the form API.
    if (typeof this.internals?.setFormValue === 'function') {
      this.formControl = new UaiFormControl({
        internals: this.internals,
        defaultValue: () => this.defaultValue || null,
        onReset: () => {
          this.isEditing = false;
          this.validationDanger = false;
          this.draft = this.defaultValue;
          this.value = this.defaultValue;
        },
        onDisabledChange: (disabled) => {
          queueMicrotask(() => {
            const formDisabled = this.formControl?.disabled ?? disabled;
            if (!this.disabled && this.disabledByForm !== formDisabled) this.disabledByForm = formDisabled;
            if (formDisabled) this.isEditing = false;
          });
        },
      });
    }
    if (this.expand !== undefined && this.expand !== null) {
      warnDeprecated(TAG, 'expand', 'The field takes the width of its container.');
    }
    if (Build.isDev && !this.label && !this.ariaLabel) {
      warnOnce(TAG, 'accessible-name', 'Fields without a visible label require an aria-label.');
    }
  }

  componentDidRender() {
    if (this.isEditing && this.nativeInput && this.nativeInput.value !== this.draft) {
      this.nativeInput.value = this.draft;
    }
    const target = this.focusTarget;
    this.focusTarget = null;
    if (target === 'input' && this.nativeInput) {
      this.nativeInput.focus();
      this.nativeInput.select?.();
    } else if (target === 'edit') {
      this.editButton?.focus();
    }
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

  private get texts() {
    if ((LANGUAGES as string[]).includes(this.language)) return TEXTS[this.language];
    warnLegacyValue(TAG, 'language', this.language, 'pt_BR');
    return TEXTS.pt_BR;
  }

  private get sizeValue(): UaiInputEditableSize {
    if (this.size === 'medium') return 'standard';
    if ((SIZES as string[]).includes(this.size)) return this.size as UaiInputEditableSize;
    warnLegacyValue(TAG, 'size', this.size, 'standard');
    return 'standard';
  }

  private get isDisabled(): boolean {
    return this.disabled || this.disabledByForm;
  }

  private syncFormValue() {
    this.formControl?.setValue(this.value || null);
  }

  private draftError(): string {
    const texts = this.texts;
    if (!this.draft) return this.requiredErrorMessage || texts.required;
    if (this.minlength && this.draft.length < this.minlength) {
      return this.minlengthErrorMessage || texts.minlength(this.minlength);
    }
    return '';
  }

  private startEditing() {
    if (this.isDisabled || this.isEditing) return;
    this.draft = this.value || '';
    this.validationDanger = false;
    this.isEditing = true;
    this.focusTarget = 'input';
  }

  private saveDraft(): boolean {
    if (!this.isEditing) return false;
    if (this.draftError() || this.danger) {
      this.validationDanger = true;
      this.nativeInput?.focus();
      return false;
    }
    const oldValue = this.value || '';
    const value = this.draft;
    this.value = value;
    this.isEditing = false;
    this.validationDanger = false;
    this.focusTarget = 'edit';
    this.uaiInputEditableSave.emit({ value, oldValue });
    return true;
  }

  private cancelEditing() {
    if (!this.isEditing) return;
    this.draft = this.value || '';
    this.isEditing = false;
    this.validationDanger = false;
    this.focusTarget = 'edit';
    this.uaiCancel.emit();
  }

  private onInput = (event: InputEvent): void => {
    this.draft = (event.target as HTMLInputElement).value;
    this.uaiInput.emit(event);
    this.uaiChange.emit({ value: this.draft, oldValue: this.value || '' });
  };

  private onKeyDown = (event: KeyboardEvent): void => {
    if (event.isComposing) return;
    if (event.key === 'Enter') {
      event.preventDefault();
      this.saveDraft();
    } else if (event.key === 'Escape') {
      event.preventDefault();
      event.stopPropagation();
      this.cancelEditing();
    }
  };

  private onFocus = (): void => {
    this.uaiFocus.emit();
  };

  private onBlur = (): void => {
    if (this.draftError()) this.validationDanger = true;
    this.uaiBlur.emit();
  };

  private renderView(disabled: boolean) {
    const texts = this.texts;
    const value = this.value || '';
    return [
      <span class={{ view__value: true, 'view__value--placeholder': !value }} onClick={() => this.startEditing()}>
        {value || this.placeholder}
      </span>,
      !disabled && (
        <button
          type="button"
          ref={(button) => (this.editButton = button)}
          class="action"
          part="edit-button"
          aria-label={this.label || this.ariaLabel ? `${texts.edit} ${this.label || this.ariaLabel}` : texts.edit}
          data-test={this.dtButtonEdit}
          onClick={() => this.startEditing()}
        >
          <uai-icon name="edit" size="medium"></uai-icon>
        </button>
      ),
    ];
  }

  private renderEdit(invalid: boolean, describedBy: string | null) {
    const texts = this.texts;
    return [
      <input
        id={this.id}
        ref={(input) => (this.nativeInput = input)}
        class="input__native"
        part="input"
        type="text"
        value={this.draft}
        placeholder={this.placeholder}
        minLength={this.minlength || undefined}
        maxLength={this.maxlength}
        required
        aria-label={this.label ? null : this.ariaLabel}
        aria-invalid={invalid ? 'true' : null}
        aria-describedby={describedBy}
        data-test={this.dataTest}
        onInput={this.onInput}
        onKeyDown={this.onKeyDown}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
      />,
      <button
        type="button"
        class="action"
        part="confirm-button"
        aria-label={texts.save}
        data-test={this.dtButtonConfirm}
        onClick={() => this.saveDraft()}
      >
        <uai-icon name="check" size="medium"></uai-icon>
      </button>,
      <button
        type="button"
        class="action"
        part="cancel-button"
        aria-label={texts.cancel}
        data-test={this.dtButtonClose}
        onClick={() => this.cancelEditing()}
      >
        <uai-icon name="close" size="medium"></uai-icon>
      </button>,
    ];
  }

  render() {
    const disabled = this.isDisabled;
    const editing = this.isEditing && !disabled;
    const validationText = editing && this.validationDanger ? this.draftError() : '';
    const invalid = this.danger || !!validationText;
    const success = this.success && !invalid;
    const message = this.danger
      ? this.errorMessage || validationText
      : validationText
        ? validationText
        : success
          ? this.successMessage
          : this.helperMessage;
    const describedBy = message ? `${this.id}-message` : null;

    return (
      <Host
        aria-disabled={disabled ? 'true' : null}
        class={{
          [`uai-input-editable--size-${this.sizeValue}`]: true,
          'uai-input-editable--editing': editing,
          'uai-input-editable--danger': invalid,
          'uai-input-editable--success': success,
          'uai-input-editable--disabled': disabled,
        }}
      >
        <div class="input">
          {this.label && (
            <label class="input__label" {...(editing ? { for: this.id } : {})}>
              <uai-typo variant="caption" bold="semibold" tag="span" margin={false}>
                {this.label}
              </uai-typo>
            </label>
          )}
          <div class="input__control" part="input-container">
            {editing ? this.renderEdit(invalid, describedBy) : this.renderView(disabled)}
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
