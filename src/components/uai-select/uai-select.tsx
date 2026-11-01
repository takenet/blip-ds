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
import { UaiControlSize } from '../input/input-interface';
import { warnLegacyValue, warnOnce } from '../../utils/deprecation';
import { UaiFormControl } from '../../utils/uai-form-control';
import { UaiOverlay, UaiOverlayCloseReason } from '../../utils/uai-overlay';

export type UaiSelectSize = UaiControlSize;
export type UaiSelectValue = string | number;

export interface UaiSelectOptionData {
  value: UaiSelectValue;
  label: string;
  icon?: string;
  disabled?: boolean;
}

export interface UaiSelectChange {
  value: UaiSelectValue | null;
  label: string | null;
}

const TAG = 'uai-select';
const SIZES: UaiSelectSize[] = ['short', 'medium'];

let instances = 0;

const sameValue = (a: unknown, b: unknown) => a !== null && a !== undefined && b !== null && b !== undefined && String(a) === String(b);

const normalize = (text: string) =>
  String(text)
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();

/**
 * Field to choose one option from a list. Use it for 4 to about 15 mutually exclusive choices that do not fit as
 * radios: the field shows the chosen label and opens a listbox below or above it. It takes part in native forms:
 * give it a name to submit the chosen value. Pair with a visible label and UaiButton in forms. Avoid it for fewer than
 * 4 options, multiple choice, or searching a long list. Wrap the app in UaiThemeProvider.
 *
 * @slot - UaiSelectOption elements, when the options are written in markup instead of the options prop.
 * @part select-container - The field box with border, icon, chosen label and arrow.
 * @part select-button - The button that shows the chosen label and opens the list.
 * @part select-message - The helper, error or success message below the field.
 * @part select-list - The floating list of options.
 * @part select-option - Each option in the list.
 */
@Component({
  tag: 'uai-select',
  styleUrl: 'uai-select.scss',
  shadow: { delegatesFocus: true },
  formAssociated: true,
})
export class UaiSelect {
  @Element() el!: HTMLElement;

  @AttachInternals() internals: ElementInternals;

  @State() isOpen = false;
  @State() activeIndex = -1;
  @State() slottedOptions: UaiSelectOptionData[] = [];
  @State() validationDanger = false;
  @State() disabledByForm = false;

  private button?: HTMLButtonElement;
  private list?: HTMLElement;
  private overlay?: UaiOverlay;
  private formControl?: UaiFormControl;
  private defaultValue: UaiSelectValue | null = null;
  private observer?: MutationObserver;
  private readonly id = `uai-select-${++instances}`;

  /** Name of the value in the submitted form data. Without it the field is not submitted. */
  @Prop({ reflect: true, mutable: true }) name?: string;

  /** Chosen value. Use it to preselect or control the field; pair with the uaiChange event; avoid values missing from the options. */
  @Prop({ mutable: true }) value?: UaiSelectValue | null = null;

  /** Options as an array of { value, label, icon?, disabled? }. Use for dynamic lists; takes precedence over uai-select-option children; avoid JSON strings. */
  @Prop() options?: UaiSelectOptionData[] = null;

  /** Visible label above the field. Use a short noun; pair with helperMessage; avoid it only when aria-label names the field. */
  @Prop() label?: string = '';

  /** Text shown while no option is chosen. Use a short prompt such as "Selecione"; avoid repeating the label. */
  @Prop() placeholder?: string = '';

  /** Optional UAI icon name before the chosen label. Use to reinforce the topic; avoid decorative icons. */
  @Prop({ reflect: true }) icon?: string = '';

  /** Field height. Use medium by default and short in dense areas such as table toolbars and pagination. */
  @Prop({ reflect: true }) size?: UaiSelectSize = 'medium';

  /** Requires a chosen option before the form is valid. Use with a visible label; pair with requiredErrorMessage. */
  @Prop() required?: boolean = false;

  /** Prevents opening and changing the value. Use when the choice is unavailable; pair with explanatory text elsewhere. */
  @Prop({ reflect: true }) disabled?: boolean = false;

  /** Error state. Use together with errorMessage; avoid color alone to explain the problem. */
  @Prop({ reflect: true }) danger?: boolean = false;

  /** Success state. Use after a valid choice; pair with successMessage. */
  @Prop({ reflect: true }) success?: boolean = false;

  /** Helper text below the field. Use for format or context; avoid long text. */
  @Prop() helperMessage?: string = '';

  /** Error text below the field while danger is set. Use to say how to fix the choice. */
  @Prop() errorMessage?: string = '';

  /** Success text below the field while success is set. */
  @Prop() successMessage?: string = '';

  /** Error text when required and nothing is chosen. Use a short instruction. */
  @Prop() requiredErrorMessage?: string = 'Selecione uma opção.';

  /** Accessible name when there is no visible label. Use a short noun; avoid repeating the placeholder. */
  @Prop({ attribute: 'aria-label' }) ariaLabel: string = null;

  /** Test selector on the button. Use for automation; pair with semantic queries. Avoid styling by it. */
  @Prop() dataTest?: string = null;

  /** Emitted when the person chooses an option. detail: { value, label }. */
  @Event({ bubbles: true, composed: true }) uaiChange!: EventEmitter<UaiSelectChange>;

  /** Emitted when the list closes with Escape or a click outside, without choosing. */
  @Event() uaiCancel!: EventEmitter<void>;

  /** Emitted when the button receives focus. */
  @Event() uaiFocus!: EventEmitter<void>;

  /** Emitted when the button loses focus. */
  @Event() uaiBlur!: EventEmitter<void>;

  /** Opens the list. Use for imperative control; pair with close; avoid calling it while disabled. */
  @Method()
  async open(): Promise<void> {
    this.openList();
  }

  /** Closes the list. Use for imperative control; pair with open. */
  @Method()
  async close(): Promise<void> {
    this.closeList();
  }

  @Watch('value')
  valueChanged(): void {
    this.syncFormValue();
  }

  @Watch('required')
  requiredChanged(): void {
    this.syncValidity();
  }

  componentWillLoad() {
    this.defaultValue = this.value ?? null;
    this.readSlotted();
    if (typeof this.internals?.setFormValue === 'function') {
      this.formControl = new UaiFormControl({
        internals: this.internals,
        defaultValue: () => (this.defaultValue === null ? null : String(this.defaultValue)),
        onReset: () => {
          this.validationDanger = false;
          this.value = this.defaultValue;
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
    if (Build.isDev && !this.label && !this.ariaLabel) {
      warnOnce(TAG, 'accessible-name', 'Fields without a visible label require an aria-label.');
    }
  }

  componentDidLoad() {
    if (this.button && this.list) {
      this.overlay = new UaiOverlay({
        trigger: this.button,
        panel: this.list,
        matchTriggerWidth: true,
        onClose: this.onOverlayClose,
      });
    }
    if (typeof MutationObserver !== 'undefined') {
      this.observer = new MutationObserver(() => this.readSlotted());
      this.observer.observe(this.el, {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true,
        attributeFilter: ['value', 'disabled', 'icon'],
      });
    }
  }

  componentDidRender() {
    if (this.isOpen && this.overlay && !this.overlay.isOpen) {
      this.overlay.open();
      this.list?.focus({ preventScroll: true });
    }
    if (this.isOpen) {
      this.overlay?.update();
      this.activeOption()?.scrollIntoView?.({ block: 'nearest' });
    }
    this.syncValidity();
  }

  disconnectedCallback() {
    this.overlay?.destroy();
    this.observer?.disconnect();
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

  private readSlotted() {
    const children = Array.from(this.el.querySelectorAll('uai-select-option'));
    this.slottedOptions = children.map((child) => ({
      value: child.getAttribute('value') ?? '',
      label: (child.textContent || '').trim(),
      icon: child.getAttribute('icon') || undefined,
      disabled: child.hasAttribute('disabled') && child.getAttribute('disabled') !== 'false',
    }));
  }

  private get items(): UaiSelectOptionData[] {
    return Array.isArray(this.options) && this.options.length ? this.options : this.slottedOptions;
  }

  private get sizeValue(): UaiSelectSize {
    if ((SIZES as string[]).includes(this.size)) return this.size;
    warnLegacyValue(TAG, 'size', this.size, 'medium');
    return 'medium';
  }

  private get isDisabled(): boolean {
    return this.disabled || this.disabledByForm;
  }

  private get selectedIndex(): number {
    return this.items.findIndex((item) => sameValue(item.value, this.value));
  }

  private syncFormValue() {
    this.formControl?.setValue(this.value === null || this.value === undefined ? null : String(this.value));
  }

  private validityFlags(): { invalid: boolean; message: string } {
    const empty = this.value === null || this.value === undefined || this.value === '';
    return this.required && empty
      ? { invalid: true, message: this.requiredErrorMessage }
      : { invalid: false, message: '' };
  }

  private syncValidity() {
    const { invalid, message } = this.validityFlags();
    this.formControl?.setValidity({ valueMissing: invalid }, message, this.button);
  }

  private showValidation(show: boolean) {
    const danger = show && this.validityFlags().invalid;
    if (danger !== this.validationDanger) this.validationDanger = danger;
  }

  private activeOption(): HTMLElement | null {
    return this.list?.querySelector('.option--active') || null;
  }

  private firstEnabled(from: number, step: 1 | -1): number {
    const items = this.items;
    for (let index = from; index >= 0 && index < items.length; index += step) {
      if (!items[index].disabled) return index;
    }
    return -1;
  }

  private openList() {
    if (this.isDisabled || this.isOpen || !this.items.length) return;
    const selected = this.selectedIndex;
    this.activeIndex = selected >= 0 ? selected : this.firstEnabled(0, 1);
    this.isOpen = true;
  }

  private closeList(reason: UaiOverlayCloseReason = 'api') {
    if (!this.isOpen) return;
    this.isOpen = false;
    this.overlay?.close(reason);
  }

  private onOverlayClose = (reason: UaiOverlayCloseReason): void => {
    if (this.isOpen) this.isOpen = false;
    if (reason === 'escape' || reason === 'outside') this.uaiCancel.emit();
    this.showValidation(true);
  };

  private select(index: number) {
    const item = this.items[index];
    if (!item || item.disabled) return;
    this.closeList();
    this.button?.focus();
    if (sameValue(item.value, this.value)) return;
    this.value = item.value;
    this.showValidation(true);
    this.uaiChange.emit({ value: item.value, label: item.label });
  }

  private moveActive(target: number, step: 1 | -1) {
    const next = this.firstEnabled(Math.min(Math.max(target, 0), this.items.length - 1), step);
    if (next >= 0) this.activeIndex = next;
  }

  // Activates the next enabled option whose label starts with the typed letter, cycling from the active one.
  private typeAhead(letter: string) {
    const items = this.items;
    const target = normalize(letter);
    for (let step = 1; step <= items.length; step++) {
      const index = (this.activeIndex + step) % items.length;
      if (!items[index].disabled && normalize(items[index].label).startsWith(target)) {
        this.activeIndex = index;
        return;
      }
    }
  }

  private onButtonClick = (): void => {
    if (this.isOpen) this.closeList();
    else this.openList();
  };

  private onButtonKeyDown = (event: KeyboardEvent): void => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      this.openList();
    }
  };

  private onListKeyDown = (event: KeyboardEvent): void => {
    const last = this.items.length - 1;
    const keys: Record<string, () => void> = {
      ArrowDown: () => this.moveActive(this.activeIndex + 1, 1),
      ArrowUp: () => this.moveActive(this.activeIndex - 1, -1),
      Home: () => this.moveActive(0, 1),
      End: () => this.moveActive(last, -1),
      Enter: () => this.select(this.activeIndex),
      ' ': () => this.select(this.activeIndex),
    };
    if (keys[event.key]) {
      event.preventDefault();
      keys[event.key]();
    } else if (event.key === 'Tab') {
      this.closeList();
    } else if (event.key.length === 1 && /\p{L}/u.test(event.key)) {
      event.preventDefault();
      this.typeAhead(event.key);
    }
  };

  private onFocus = (): void => {
    this.uaiFocus.emit();
  };

  private onBlur = (): void => {
    if (!this.isOpen) this.showValidation(true);
    this.uaiBlur.emit();
  };

  private renderOptions() {
    if (!this.isOpen) return null;
    return this.items.map((item, index) => {
      const selected = sameValue(item.value, this.value);
      return (
        <li
          id={`${this.id}-option-${index}`}
          key={`${item.value}`}
          role="option"
          part="select-option"
          aria-selected={selected ? 'true' : 'false'}
          aria-disabled={item.disabled ? 'true' : null}
          class={{ option: true, 'option--active': index === this.activeIndex, 'option--disabled': !!item.disabled }}
          onClick={() => this.select(index)}
          onPointerMove={() => {
            if (!item.disabled && this.activeIndex !== index) this.activeIndex = index;
          }}
        >
          {item.icon && <uai-icon class="option__icon" name={item.icon} size="medium"></uai-icon>}
          <uai-typo class="option__label" variant="body-base" tag="span" margin={false}>
            {item.label}
          </uai-typo>
        </li>
      );
    });
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
    const selected = this.items[this.selectedIndex];

    return (
      <Host
        aria-disabled={disabled ? 'true' : null}
        class={{
          [`uai-select--size-${this.sizeValue}`]: true,
          'uai-select--danger': invalid,
          'uai-select--success': success,
          'uai-select--disabled': disabled,
          'uai-select--open': this.isOpen,
          'uai-select--filled': !!selected,
        }}
      >
        <div class="select">
          {this.label && (
            <label class="select__label" {...{ for: this.id }}>
              <uai-typo variant="caption" bold="semibold" tag="span" margin={false}>
                {this.label}
              </uai-typo>
            </label>
          )}
          <div class="select__control" part="select-container">
            <button
              id={this.id}
              type="button"
              ref={(button) => (this.button = button)}
              class="select__button"
              part="select-button"
              role="combobox"
              aria-haspopup="listbox"
              aria-expanded={this.isOpen ? 'true' : 'false'}
              aria-controls={`${this.id}-list`}
              aria-label={this.ariaLabel || null}
              aria-invalid={invalid ? 'true' : null}
              aria-required={this.required ? 'true' : null}
              aria-describedby={message ? `${this.id}-message` : null}
              disabled={disabled}
              data-test={this.dataTest}
              onClick={this.onButtonClick}
              onKeyDown={this.onButtonKeyDown}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
            >
              {this.icon && <uai-icon class="select__icon" name={this.icon} size="medium"></uai-icon>}
              <uai-typo
                class={{ select__value: true, 'select__value--placeholder': !selected }}
                variant="body-base"
                tag="span"
                margin={false}
              >
                {selected ? selected.label : this.placeholder}
              </uai-typo>
              {invalid && <uai-icon class="select__feedback" name="error" theme="outline" size="medium"></uai-icon>}
              {success && <uai-icon class="select__feedback" name="checkball" theme="solid" size="medium"></uai-icon>}
              <uai-icon class="select__arrow" name="arrow-down" size="medium"></uai-icon>
            </button>
          </div>
          {message && (
            <div id={`${this.id}-message`} class="select__message" part="select-message">
              <uai-typo variant="caption" tag="span" margin={false}>
                {message}
              </uai-typo>
            </div>
          )}
        </div>
        <ul
          id={`${this.id}-list`}
          ref={(list) => (this.list = list)}
          class="list"
          part="select-list"
          role="listbox"
          tabindex="-1"
          aria-label={this.label || this.ariaLabel || null}
          aria-activedescendant={this.isOpen && this.activeIndex >= 0 ? `${this.id}-option-${this.activeIndex}` : null}
          onKeyDown={this.onListKeyDown}
        >
          {this.renderOptions()}
        </ul>
        <slot />
      </Host>
    );
  }
}
