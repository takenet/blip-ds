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
import { UaiFormControl } from '../../utils/uai-form-control';
import { UaiOverlay, UaiOverlayCloseReason } from '../../utils/uai-overlay';
import {
  UaiAutocompleteChange,
  UaiAutocompleteLanguage,
  UaiAutocompleteMultiselectedChange,
  UaiAutocompleteOption,
  UaiAutocompleteOptionsPosition,
  UaiAutocompleteSelectedChange,
  UaiAutocompleteSelectionType,
  autocompleteTerms,
  normalize,
} from './uai-autocomplete-interface';

export type UaiAutocompleteSize = UaiControlSize;

const TAG = 'uai-autocomplete';
const SIZES: UaiAutocompleteSize[] = ['short', 'medium'];
const LANGUAGES: UaiAutocompleteLanguage[] = ['pt_BR', 'en_US', 'es_ES'];
const SELECTION_TYPES: UaiAutocompleteSelectionType[] = ['single', 'multiple'];
const POSITIONS: UaiAutocompleteOptionsPosition[] = ['auto', 'top', 'bottom'];
// The "select all" row, first in the list of a multiple choice.
const ALL = '\u0000all';

let instances = 0;

/**
 * Field to choose from a long list by typing to search it. With selectionType "single" (default) the person picks one
 * option and the field shows its label; with "multiple" the options are checkboxes and the field shows how many are
 * checked. It takes part in native forms: give it a name to submit the value (each checked value in a multiple
 * choice). Use it for lists that are too long to scan, such as people, teams or cities. Pair with a visible label.
 * Avoid it for short lists without search (use uai-select) or for free text (use uai-input with suggestions).
 * Wrap the app in UaiThemeProvider.
 *
 * @part input-container - The field box with border, icon, the search input and the buttons.
 * @part input - The native text input used to search.
 * @part input__message - The helper, error or success message below the field.
 * @part clear-button - The button that clears the choice.
 * @part list - The floating list of options.
 * @part option - Each option in the list.
 */
@Component({
  tag: 'uai-autocomplete',
  styleUrl: 'uai-autocomplete.scss',
  shadow: { delegatesFocus: true },
  formAssociated: true,
})
export class UaiAutocomplete {
  @Element() el!: HTMLElement;

  @AttachInternals() internals: ElementInternals;

  @State() isOpen = false;
  @State() isFocused = false;
  /** The text typed to search, or null while the field shows the choice. */
  @State() term: string | null = null;
  @State() activeIndex = -1;
  @State() checkedValues: string[] = [];
  @State() validationDanger = false;
  @State() disabledByForm = false;

  private nativeInput?: HTMLInputElement;
  private control?: HTMLElement;
  private list?: HTMLElement;
  private overlay?: UaiOverlay;
  private formControl?: UaiFormControl;
  private defaultValue: string | null = null;
  private defaultChecked: string[] = [];
  private readonly inputId = `uai-autocomplete-${++instances}`;

  /** Name of the value in the submitted form data. Without it, the field is not submitted. */
  @Prop({ reflect: true, mutable: true }) name?: string;

  /**
   * The options, as an array of { value, label, icon?, disabled?, checked? } or, in HTML, a JSON array
   * (options='[{"value": "sp", "label": "São Paulo"}]'). With selectionType "multiple", checked marks the options
   * checked: change the array to control them.
   */
  @Prop() options?: string | UaiAutocompleteOption[];

  /**
   * Chosen value, with selectionType "single". Use it to preselect or control the field; pair with uaiChange. Typing
   * only searches: the value changes when the person picks or clears.
   */
  @Prop({ mutable: true }) value?: string | null;

  /**
   * One option or many. Can be one of: 'single' (default), 'multiple'. With 'multiple', options are checkboxes and
   * uaiMultiselectedChange tells the checked ones.
   */
  @Prop() selectionType?: UaiAutocompleteSelectionType = 'single';

  /** Title shown above the options of a multiple choice. */
  @Prop() selectionTitle?: string = '';

  /** With selectionType "multiple": if true (default), the first row checks or unchecks all options. */
  @Prop() selectedAll?: boolean = true;

  /** Label shown above the field. Without a visible label, set aria-label. */
  @Prop() label?: string = '';

  /** Text shown while the field is empty, such as "Buscar pessoa". Do not use it as the label. */
  @Prop() placeholder?: string = '';

  /** UaiIcon name shown before the text, for example "search". */
  @Prop({ reflect: true }) icon?: string = '';

  /** Height of the field. Can be one of: 'short', 'medium' (default). */
  @Prop({ reflect: true }) size?: UaiAutocompleteSize = 'medium';

  /** Side of the list. Can be one of: 'auto' (default, where there is room), 'top', 'bottom'. */
  @Prop() optionsPosition?: UaiAutocompleteOptionsPosition = 'auto';

  /** If true, the clear button shows only while the field has the focus. */
  @Prop() clearIconOnFocus?: boolean = false;

  /** If true, the list shows that the options are loading. Pair with uaiInput to search on a server. */
  @Prop() loading?: boolean = false;

  /** Language of the default texts. Can be one of: 'pt_BR' (default), 'en_US', 'es_ES'. */
  @Prop() language?: UaiAutocompleteLanguage = 'pt_BR';

  /** If true, the form is invalid while nothing is chosen. Pair with requiredErrorMessage. */
  @Prop() required?: boolean = false;

  /** Message shown when required and nothing is chosen. Without it, the default text of the language is shown. */
  @Prop() requiredErrorMessage?: string;

  /** If true, the field cannot be used and is left out of the form data. */
  @Prop({ reflect: true }) disabled?: boolean = false;

  /** If true, shows the error state and errorMessage. Has priority over success. */
  @Prop({ reflect: true }) danger?: boolean = false;

  /** If true, shows the success state and successMessage. */
  @Prop({ reflect: true, mutable: true }) success?: boolean = false;

  /** Message below the field that helps to fill it. */
  @Prop() helperMessage?: string = '';

  /** Message below the field while danger is true. */
  @Prop() errorMessage?: string = '';

  /** Message below the field while success is true. */
  @Prop({ mutable: true }) successMessage?: string = '';

  /** Accessible name of the field when there is no visible label. */
  @Prop({ attribute: 'aria-label' }) ariaLabel: string = null;

  /** Data test id, set on the native input. */
  @Prop() dataTest?: string = null;

  /**
   * @deprecated Options have only a label, which the search always uses. Has no effect.
   */
  @Prop() searchOnlyTitle?: boolean;

  /** Emitted when the chosen value changes, by picking or clearing (selectionType "single"). detail: { value }. */
  @Event({ bubbles: true, composed: true }) uaiChange!: EventEmitter<UaiAutocompleteChange>;

  /** Emitted when the person picks an option (selectionType "single"). detail: { value, label }. */
  @Event() uaiSelectedChange!: EventEmitter<UaiAutocompleteSelectedChange>;

  /** Emitted when the checked options change (selectionType "multiple"). detail: { value } with the checked options. */
  @Event() uaiMultiselectedChange!: EventEmitter<UaiAutocompleteMultiselectedChange>;

  /** Emitted on every keystroke in the search with the native InputEvent. */
  @Event() uaiInput!: EventEmitter<InputEvent>;

  /** Emitted when the choice is cleared with the clear button. detail: { value: '' }. */
  @Event() uaiCancel!: EventEmitter<UaiAutocompleteChange>;

  /** Emitted when the field receives focus. */
  @Event() uaiFocus!: EventEmitter<void>;

  /** Emitted when the field loses focus. */
  @Event() uaiBlur!: EventEmitter<void>;

  /** Moves the focus to the field. */
  @Method()
  async setFocus(): Promise<void> {
    this.nativeInput?.focus();
  }

  /** Opens the list. */
  @Method()
  async open(): Promise<void> {
    this.openList();
  }

  /** Closes the list. */
  @Method()
  async close(): Promise<void> {
    this.closeList();
  }

  /** Unchecks every option of a multiple choice, or clears the choice of a single one. */
  @Method()
  async cleanMultipleSelection(): Promise<void> {
    this.clearChoice();
  }

  @Watch('options')
  protected optionsChanged(): void {
    if (this.isMultiple) this.checkedValues = this.items.filter((item) => item.checked).map((item) => item.value);
    this.syncFormValue();
  }

  @Watch('value')
  protected valueChanged(): void {
    this.syncFormValue();
  }

  // Native form validation of the host (submit or checkValidity) shows the error state.
  @Listen('invalid')
  protected onInvalid(): void {
    this.showValidation(true);
  }

  @Watch('optionsPosition')
  protected positionChanged(): void {
    this.overlay?.setPlacement({ side: this.side });
  }

  componentWillLoad() {
    if (this.isMultiple) this.checkedValues = this.items.filter((item) => item.checked).map((item) => item.value);
    this.defaultValue = this.value ?? null;
    this.defaultChecked = [...this.checkedValues];
    if (typeof this.internals?.setFormValue === 'function') {
      this.formControl = new UaiFormControl({
        internals: this.internals,
        defaultValue: () => this.formValue(this.defaultValue, this.defaultChecked),
        onReset: () => {
          this.validationDanger = false;
          this.term = null;
          this.value = this.defaultValue;
          this.checkedValues = [...this.defaultChecked];
          this.syncFormValue();
        },
        onDisabledChange: (disabled) => {
          queueMicrotask(() => {
            const formDisabled = this.formControl?.disabled ?? disabled;
            if (!this.disabled && this.disabledByForm !== formDisabled) this.disabledByForm = formDisabled;
            if (formDisabled) this.closeList();
          });
        },
      });
      this.syncFormValue();
    }
    if (this.searchOnlyTitle !== undefined) warnDeprecated(TAG, 'searchOnlyTitle', 'The search always uses the label.');
    if (Build.isDev && !this.label && !this.ariaLabel) {
      warnOnce(TAG, 'accessible-name', 'Fields without a visible label require an aria-label.');
    }
  }

  componentDidLoad() {
    if (this.control && this.list) {
      this.overlay = new UaiOverlay({
        trigger: this.control,
        panel: this.list,
        matchTriggerWidth: true,
        side: this.side,
        onClose: this.onOverlayClose,
      });
    }
  }

  componentDidRender() {
    if (this.isOpen && this.overlay && !this.overlay.isOpen) this.overlay.open();
    if (this.isOpen) {
      this.overlay?.update();
      this.list?.querySelector<HTMLElement>('.option--active')?.scrollIntoView?.({ block: 'nearest' });
    }
    this.syncValidity();
  }

  disconnectedCallback() {
    this.overlay?.destroy();
  }

  formResetCallback() {
    this.formControl?.reset();
  }

  formDisabledCallback(disabled: boolean) {
    this.formControl?.setDisabled(disabled);
  }

  formStateRestoreCallback(state: string | FormData | null) {
    if (typeof state === 'string') this.value = state;
    else if (state instanceof FormData && this.name) this.checkedValues = state.getAll(this.name).map(String);
  }

  // ---- options -------------------------------------------------------------------------------

  private get items(): UaiAutocompleteOption[] {
    let options: unknown = this.options;
    if (typeof options === 'string') {
      try {
        options = JSON.parse(options);
      } catch {
        warnOnce(TAG, 'options', 'options must be an array or a JSON array of { value, label }.');
        return [];
      }
    }
    if (!Array.isArray(options)) return [];
    return options
      .filter((option) => option && option.value !== undefined && option.value !== null)
      .map((option) => ({ ...option, value: String(option.value), label: String(option.label ?? option.value) }));
  }

  private get filtered(): UaiAutocompleteOption[] {
    const term = normalize(this.term ?? '').trim();
    if (!term) return this.items;
    return this.items.filter((item) => normalize(item.label).includes(term));
  }

  // The rows the arrows go through: "select all" (multiple, without a search) and the options found.
  private get rows(): UaiAutocompleteOption[] {
    const all = this.isMultiple && this.selectedAll && !this.term ? [{ value: ALL, label: this.terms.allSelected }] : [];
    return [...all, ...this.filtered];
  }

  private get isMultiple(): boolean {
    if ((SELECTION_TYPES as string[]).includes(this.selectionType)) return this.selectionType === 'multiple';
    warnLegacyValue(TAG, 'selectionType', this.selectionType, 'single');
    return false;
  }

  private get languageValue(): UaiAutocompleteLanguage {
    if ((LANGUAGES as string[]).includes(this.language)) return this.language;
    warnLegacyValue(TAG, 'language', this.language, 'pt_BR');
    return 'pt_BR';
  }

  private get terms() {
    return autocompleteTerms(this.languageValue);
  }

  private get sizeValue(): UaiAutocompleteSize {
    if ((SIZES as string[]).includes(this.size)) return this.size;
    warnLegacyValue(TAG, 'size', this.size, 'medium');
    return 'medium';
  }

  private get side() {
    if (!(POSITIONS as string[]).includes(this.optionsPosition)) {
      warnLegacyValue(TAG, 'optionsPosition', this.optionsPosition, 'auto');
      return undefined;
    }
    return this.optionsPosition === 'auto' ? undefined : this.optionsPosition;
  }

  private get isDisabled(): boolean {
    return this.disabled || this.disabledByForm;
  }

  private get chosen(): UaiAutocompleteOption | undefined {
    if (this.value === null || this.value === undefined || this.value === '') return undefined;
    return this.items.find((item) => item.value === String(this.value));
  }

  private get checkedOptions(): UaiAutocompleteOption[] {
    return this.items.filter((item) => this.checkedValues.includes(item.value));
  }

  private get hasChoice(): boolean {
    return this.isMultiple ? this.checkedValues.length > 0 : !!this.chosen;
  }

  // What the field shows while nobody searches: the chosen label, or how many are checked.
  private get summary(): string {
    if (!this.isMultiple) return this.chosen?.label ?? '';
    const checked = this.checkedOptions;
    if (checked.length === 1) return checked[0].label;
    return checked.length ? this.terms.selected(checked.length) : '';
  }

  // ---- form ----------------------------------------------------------------------------------

  private formValue(value: string | null, checked: string[]): string | FormData | null {
    if (!this.isMultiple) return value === null || value === undefined || value === '' ? null : String(value);
    if (!this.name || !checked.length) return null;
    const data = new FormData();
    checked.forEach((item) => data.append(this.name, item));
    return data;
  }

  private syncFormValue() {
    this.formControl?.setValue(this.formValue(this.value ?? null, this.checkedValues));
  }

  private validityFlags(): { invalid: boolean; message: string } {
    return this.required && !this.hasChoice
      ? { invalid: true, message: this.requiredErrorMessage || this.terms.required }
      : { invalid: false, message: '' };
  }

  private syncValidity() {
    const { invalid, message } = this.validityFlags();
    this.formControl?.setValidity({ valueMissing: invalid }, message, this.nativeInput);
  }

  private showValidation(show: boolean) {
    const danger = show && this.validityFlags().invalid;
    if (danger !== this.validationDanger) this.validationDanger = danger;
  }

  // ---- list ----------------------------------------------------------------------------------

  private firstEnabled(from: number, step: 1 | -1): number {
    const rows = this.rows;
    for (let index = from; index >= 0 && index < rows.length; index += step) {
      if (!rows[index].disabled) return index;
    }
    return -1;
  }

  private openList() {
    if (this.isDisabled || this.isOpen) return;
    const rows = this.rows;
    const chosen = this.isMultiple ? -1 : rows.findIndex((row) => row.value === this.chosen?.value);
    this.activeIndex = chosen >= 0 ? chosen : this.firstEnabled(0, 1);
    this.isOpen = true;
  }

  private closeList(reason: UaiOverlayCloseReason = 'api') {
    if (!this.isOpen) return;
    this.isOpen = false;
    this.overlay?.close(reason);
    this.endSearch();
  }

  // Leaving the search: an emptied single choice is cleared; otherwise the field shows the choice again.
  private endSearch() {
    if (this.term === '' && !this.isMultiple && this.chosen) this.choose(null);
    this.term = null;
  }

  private onOverlayClose = (reason: UaiOverlayCloseReason): void => {
    if (this.isOpen) this.isOpen = false;
    if (reason !== 'api') this.endSearch();
    if (reason === 'escape') this.nativeInput?.focus();
    if (reason === 'outside') this.showValidation(true);
  };

  private choose(option: UaiAutocompleteOption | null) {
    const value = option ? option.value : null;
    if ((this.value ?? null) === value) return;
    this.value = value;
    this.uaiChange.emit({ value });
    if (option) this.uaiSelectedChange.emit({ value: option.value, label: option.label });
    this.showValidation(true);
  }

  private setChecked(values: string[]) {
    this.checkedValues = values;
    this.syncFormValue();
    this.uaiMultiselectedChange.emit({ value: this.checkedOptions.map((item) => ({ ...item, checked: true })) });
    this.showValidation(true);
  }

  private toggleAll() {
    const enabled = this.items.filter((item) => !item.disabled).map((item) => item.value);
    const all = enabled.every((value) => this.checkedValues.includes(value));
    const kept = this.checkedValues.filter((value) => !enabled.includes(value));
    this.setChecked(all ? kept : [...kept, ...enabled]);
  }

  private pick(index: number) {
    const row = this.rows[index];
    if (!row || row.disabled) return;
    this.activeIndex = index;
    if (!this.isMultiple) {
      this.choose(row);
      this.term = null;
      this.closeList();
      return;
    }
    if (row.value === ALL) return this.toggleAll();
    const checked = this.checkedValues.includes(row.value);
    this.setChecked(checked ? this.checkedValues.filter((value) => value !== row.value) : [...this.checkedValues, row.value]);
  }

  private clearChoice() {
    if (this.isDisabled) return;
    if (this.isMultiple) {
      if (this.checkedValues.length) this.setChecked([]);
    } else {
      this.choose(null);
    }
    this.term = null;
    this.uaiCancel.emit({ value: '' });
  }

  private moveActive(target: number, step: 1 | -1) {
    const rows = this.rows;
    if (!rows.length) return;
    const next = this.firstEnabled(Math.min(Math.max(target, 0), rows.length - 1), step);
    if (next >= 0) this.activeIndex = next;
  }

  // ---- events --------------------------------------------------------------------------------

  private onInput = (event: InputEvent): void => {
    this.term = (event.target as HTMLInputElement).value;
    if (!this.isOpen) this.openList();
    this.activeIndex = this.firstEnabled(0, 1);
    this.uaiInput.emit(event);
  };

  private onKeyDown = (event: KeyboardEvent): void => {
    if (event.isComposing) return;
    if (!this.isOpen) {
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        this.openList();
      } else if (event.key === 'Enter') {
        this.formControl?.form?.requestSubmit();
      }
      return;
    }
    const keys: Record<string, () => void> = {
      ArrowDown: () => this.moveActive(this.activeIndex + 1, 1),
      ArrowUp: () => this.moveActive(this.activeIndex - 1, -1),
      Enter: () => this.pick(this.activeIndex),
    };
    if (keys[event.key]) {
      event.preventDefault();
      keys[event.key]();
    } else if (event.key === 'Tab') {
      this.closeList();
    }
  };

  private onFocus = (): void => {
    this.isFocused = true;
    this.uaiFocus.emit();
  };

  private onBlur = (): void => {
    this.isFocused = false;
    this.closeList();
    this.showValidation(true);
    this.uaiBlur.emit();
  };

  // A click on the field opens the list; on the arrow, it opens or closes it.
  private onControlClick = (event: MouseEvent): void => {
    if (this.isDisabled) return;
    const target = event.target as HTMLElement;
    if (target?.closest?.('.clear')) return;
    if (target?.closest?.('.arrow') && this.isOpen) {
      this.closeList();
      return;
    }
    this.nativeInput?.focus();
    this.openList();
  };

  private onClear = (event: MouseEvent): void => {
    event.stopPropagation();
    this.clearChoice();
    this.nativeInput?.focus();
  };

  // ---- render --------------------------------------------------------------------------------

  private optionId(index: number): string {
    return `${this.inputId}-option-${index}`;
  }

  private renderRows() {
    if (!this.isOpen) return null;
    const terms = this.terms;
    const rows = this.rows;
    const status = (text: string) => (
      <li class="status" role="presentation">
        <uai-typo variant="body-base" tag="span" margin={false}>
          {text}
        </uai-typo>
      </li>
    );
    if (this.loading) return status(terms.loading);
    const title = this.isMultiple && this.selectionTitle && (
      <li class="title" role="presentation">
        <uai-typo variant="caption" bold="semibold" tag="span" margin={false}>
          {this.selectionTitle}
        </uai-typo>
      </li>
    );
    if (!this.filtered.length) return [title, status(terms.empty)];
    const enabled = this.items.filter((item) => !item.disabled);
    const allChecked = enabled.length > 0 && enabled.every((item) => this.checkedValues.includes(item.value));
    const someChecked = enabled.some((item) => this.checkedValues.includes(item.value));
    return [
      title,
      ...rows.map((row, index) => {
        const isAll = row.value === ALL;
        const selected = isAll
          ? allChecked
          : this.isMultiple
            ? this.checkedValues.includes(row.value)
            : row.value === this.chosen?.value;
        const mixed = isAll && !allChecked && someChecked;
        return (
          <li
            id={this.optionId(index)}
            key={row.value}
            role="option"
            part="option"
            aria-selected={selected ? 'true' : 'false'}
            aria-disabled={row.disabled ? 'true' : null}
            class={{
              option: true,
              'option--active': index === this.activeIndex,
              'option--disabled': !!row.disabled,
              'option--all': isAll,
            }}
            onClick={() => this.pick(index)}
            onPointerMove={() => {
              if (!row.disabled && this.activeIndex !== index) this.activeIndex = index;
            }}
          >
            {this.isMultiple && (
              <span
                class={{ check: true, 'check--checked': selected, 'check--mixed': mixed }}
                aria-hidden="true"
              >
                {(selected || mixed) && <uai-icon name={mixed ? 'less' : 'check'} size="small"></uai-icon>}
              </span>
            )}
            {row.icon && <uai-icon class="option__icon" name={row.icon} size="medium"></uai-icon>}
            <uai-typo class="option__label" variant="body-base" tag="span" margin={false}>
              {row.label}
            </uai-typo>
            {!this.isMultiple && selected && <uai-icon class="option__chosen" name="check" size="medium"></uai-icon>}
          </li>
        );
      }),
    ];
  }

  render() {
    const disabled = this.isDisabled;
    const validity = this.validityFlags();
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
    const listId = `${this.inputId}-list`;
    // A multiple choice searches from an empty field; a single one shows the choice until the person types.
    const shown = this.term ?? (this.isMultiple && this.isFocused ? '' : this.summary);
    const showClear = this.hasChoice && !disabled && (!this.clearIconOnFocus || this.isFocused);

    return (
      <Host
        aria-disabled={disabled ? 'true' : null}
        class={{
          [`uai-autocomplete--size-${this.sizeValue}`]: true,
          'uai-autocomplete--danger': invalid,
          'uai-autocomplete--success': success,
          'uai-autocomplete--disabled': disabled,
          'uai-autocomplete--open': this.isOpen,
        }}
      >
        <div class="input">
          {this.label && (
            <label class="input__label" {...{ for: this.inputId }}>
              <uai-typo variant="caption" bold="semibold" tag="span" margin={false}>
                {this.label}
              </uai-typo>
            </label>
          )}
          <div
            class="input__control"
            part="input-container"
            ref={(control) => (this.control = control)}
            onClick={this.onControlClick}
          >
            {this.icon && <uai-icon class="input__icon" name={this.icon} size="medium"></uai-icon>}
            <input
              id={this.inputId}
              ref={(input) => (this.nativeInput = input)}
              class="input__native"
              part="input"
              type="text"
              role="combobox"
              autocomplete="off"
              aria-autocomplete="list"
              aria-haspopup="listbox"
              aria-expanded={this.isOpen ? 'true' : 'false'}
              aria-controls={listId}
              aria-activedescendant={this.isOpen && this.activeIndex >= 0 ? this.optionId(this.activeIndex) : null}
              aria-label={this.label ? null : this.ariaLabel}
              aria-invalid={invalid ? 'true' : null}
              aria-required={this.required ? 'true' : null}
              aria-describedby={message ? `${this.inputId}-message` : null}
              value={shown}
              placeholder={this.placeholder}
              disabled={disabled}
              data-test={this.dataTest}
              onInput={this.onInput}
              onKeyDown={this.onKeyDown}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
            />
            {invalid && <uai-icon class="input__feedback" name="error" theme="outline" size="medium"></uai-icon>}
            {success && <uai-icon class="input__feedback" name="checkball" theme="solid" size="medium"></uai-icon>}
            {showClear && (
              <button
                type="button"
                class="clear"
                part="clear-button"
                aria-label={this.terms.clear}
                onPointerDown={(event) => event.preventDefault()}
                onClick={this.onClear}
              >
                <uai-icon name="close" size="small"></uai-icon>
              </button>
            )}
            <uai-icon class="arrow" name="arrow-down" size="medium" aria-hidden="true"></uai-icon>
          </div>
          {message && (
            <div id={`${this.inputId}-message`} class="input__message" part="input__message">
              <uai-typo variant="caption" tag="span" margin={false}>
                {message}
              </uai-typo>
            </div>
          )}
        </div>
        {/* The focus stays in the field: a press on the list does not take it away. */}
        <ul
          id={listId}
          ref={(list) => (this.list = list)}
          class="list"
          part="list"
          role="listbox"
          aria-label={this.label || this.ariaLabel || null}
          aria-multiselectable={this.isMultiple ? 'true' : null}
          onPointerDown={(event) => event.preventDefault()}
        >
          {this.renderRows()}
        </ul>
      </Host>
    );
  }
}
