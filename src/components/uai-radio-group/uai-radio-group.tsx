import {
  AttachInternals,
  Build,
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Listen,
  Prop,
  State,
  Watch,
  h,
} from '@stencil/core';
import { UaiFormControl } from '../../utils/uai-form-control';
import { warnOnce } from '../../utils/deprecation';

interface UaiRadioOption extends HTMLElement {
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  setFocus(): Promise<void>;
  setTabIndex(value: number): Promise<void>;
  setGroupDisabled(value: boolean): Promise<void>;
  activate(): Promise<void>;
}

const isRadioOption = (target: EventTarget | null): target is UaiRadioOption =>
  target instanceof HTMLElement && target.tagName.toLowerCase() === 'uai-radio';

/**
 * Coordinates a mutually exclusive set of UaiRadio options. Provide an accessible group name with
 * aria-label or aria-labelledby. The group owns the submitted name and value.
 *
 * @slot - UaiRadio options, optionally wrapped by layout elements.
 * @part group - The radiogroup container.
 */
@Component({
  tag: 'uai-radio-group',
  styleUrl: 'uai-radio-group.scss',
  shadow: true,
  formAssociated: true,
})
export class UaiRadioGroup {
  @Element() el!: HTMLElement;

  @AttachInternals() internals: ElementInternals;

  @State() disabledByForm = false;
  @State() invalid = false;

  private formControl?: UaiFormControl;
  private validationProxy?: HTMLInputElement;
  private defaultValue: string | null = null;
  private observer?: MutationObserver;
  private suppressChangeEvent = false;

  /**
   * Selected radio value.
   */
  @Prop({ mutable: true, reflect: true }) value?: string;

  /**
   * Name used for the selected value in submitted form data.
   */
  @Prop({ reflect: true }) name?: string;

  /**
   * If true, a selection is required before form submission.
   */
  @Prop({ reflect: true }) required = false;

  /**
   * Message announced when required validation fails. Defaults to the browser's localized message.
   */
  @Prop() requiredErrorMessage?: string;

  /**
   * If true, all options are disabled.
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * Accessible name of the radio group. Use this or aria-labelledby.
   */
  @Prop({ attribute: 'aria-label' }) ariaLabel: string = null;

  /**
   * ID references for the accessible name of the radio group.
   */
  @Prop({ attribute: 'aria-labelledby' }) ariaLabelledBy?: string;

  /**
   * Emitted whenever the selected value changes. detail: { value }.
   */
  @Event({ bubbles: true, composed: true }) uaiRadioGroupChange!: EventEmitter<{ value?: string }>;

  @Watch('value')
  protected valueChanged(value?: string): void {
    this.syncRadios();
    this.syncFormValue();
    this.syncValidity();
    if (!this.suppressChangeEvent) this.uaiRadioGroupChange.emit({ value });
  }

  @Watch('disabled')
  protected disabledChanged(): void {
    this.syncRadios();
    this.syncValidity();
  }

  @Watch('required')
  protected requiredChanged(): void {
    this.syncValidity();
  }

  @Listen('uaiClickChange')
  protected onRadioClickChange(event: CustomEvent<{ checked: boolean }>): void {
    if (!event.detail?.checked || !this.isOwnRadio(event.target)) return;
    if (event.target.value !== this.value) this.value = event.target.value;
  }

  @Listen('uaiChange')
  protected onRadioChange(event: CustomEvent<{ checked: boolean }>): void {
    if (!this.isOwnRadio(event.target)) return;
    if (event.detail?.checked && event.target.value !== this.value) {
      this.value = event.target.value;
    } else if (!event.detail?.checked && event.target.value === this.value) {
      this.value = undefined;
    }
  }

  private isOwnRadio(target: EventTarget | null): target is UaiRadioOption {
    return isRadioOption(target) && target.closest('uai-radio-group') === this.el;
  }

  private isFromNestedGroup(event: Event): boolean {
    return event.composedPath().some(
      (target) => target instanceof HTMLElement && target.tagName.toLowerCase() === 'uai-radio-group' && target !== this.el,
    );
  }

  @Listen('invalid')
  protected onInvalid(): void {
    this.invalid = true;
  }

  componentWillLoad(): void {
    this.defaultValue = this.value ?? null;

    if (typeof this.internals?.setFormValue === 'function') {
      this.formControl = new UaiFormControl({
        internals: this.internals,
        defaultValue: () => this.defaultValue,
        onReset: (value) => {
          this.value = typeof value === 'string' ? value : undefined;
          this.invalid = false;
        },
        onDisabledChange: (disabled) => {
          this.disabledByForm = disabled;
          this.syncRadios();
          this.syncValidity();
        },
      });
    }

    if (Build.isDev && !this.ariaLabel && !this.ariaLabelledBy) {
      warnOnce('uai-radio-group', 'accessible-name', 'Radio groups require aria-label or aria-labelledby.');
    }
  }

  componentDidLoad(): void {
    if (typeof MutationObserver === 'function') {
      this.observer = new MutationObserver(() => this.syncRadios());
      this.observer.observe(this.el, {
        attributes: true,
        attributeFilter: ['checked', 'disabled', 'value'],
        childList: true,
        subtree: true,
      });
    }
    this.initializeSelection();
    this.syncRadios();
  }

  disconnectedCallback(): void {
    this.observer?.disconnect();
  }

  componentDidRender(): void {
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
    this.value = state === null ? undefined : state;
  }

  private get effectiveDisabled(): boolean {
    return this.disabled || this.disabledByForm;
  }

  private get radioOptions(): UaiRadioOption[] {
    return Array.from(this.el.querySelectorAll<HTMLElement>('uai-radio')).filter(
      (radio): radio is UaiRadioOption => radio.closest('uai-radio-group') === this.el,
    );
  }

  private getEnabledOptions(): UaiRadioOption[] {
    return this.radioOptions.filter((radio) => !radio.disabled && !this.effectiveDisabled);
  }

  private initializeSelection(): void {
    const radios = this.radioOptions;
    if (this.value !== undefined) {
      this.defaultValue = this.value;
      return;
    }

    const checked = radios.find((radio) => radio.checked && !radio.disabled);
    if (!checked) {
      this.defaultValue = null;
      return;
    }

    this.defaultValue = checked.value ?? null;
    this.suppressChangeEvent = true;
    this.value = checked.value;
    this.suppressChangeEvent = false;
  }

  private syncRadios(): void {
    const radios = this.radioOptions;
    if (!radios.length) return;

    let selected = this.value === undefined ? undefined : radios.find((radio) => radio.value === this.value && !radio.disabled);
    if (this.value !== undefined && !selected && !this.effectiveDisabled) {
      this.suppressChangeEvent = true;
      this.value = undefined;
      this.suppressChangeEvent = false;
      selected = undefined;
    }

    const enabled = this.getEnabledOptions();
    const activeTabStop = selected || enabled[0];
    for (const radio of radios) {
      radio.checked = radio === selected;
      void radio.setGroupDisabled(this.effectiveDisabled);
      void radio.setTabIndex(radio === activeTabStop ? 0 : -1);
    }
  }

  private syncFormValue(): void {
    this.formControl?.setValue(this.value ?? null);
  }

  private syncValidity(): void {
    const proxy = this.validationProxy;
    if (!proxy || !this.formControl) return;

    const missing = this.required && this.value == null && !this.effectiveDisabled;
    const message = this.requiredErrorMessage || proxy.validationMessage;
    const anchor = this.getEnabledOptions()[0];
    this.formControl.setValidity({ valueMissing: missing }, missing ? message : '', anchor);
    if (!missing) this.invalid = false;
  }

  private onSlotChange = (): void => {
    if (this.value === undefined) this.initializeSelection();
    this.syncRadios();
  };

  private onKeyDown = (event: KeyboardEvent): void => {
    const key = event.key;
    if (
      !['ArrowRight', 'ArrowDown', 'ArrowLeft', 'ArrowUp'].includes(key) ||
      this.effectiveDisabled ||
      this.isFromNestedGroup(event)
    ) {
      return;
    }
    const options = this.getEnabledOptions();
    if (!options.length) return;

    event.preventDefault();
    const current = isRadioOption(event.target) ? options.indexOf(event.target) : options.findIndex((radio) => radio.value === this.value);
    const direction = key === 'ArrowRight' || key === 'ArrowDown' ? 1 : -1;
    const nextIndex = current < 0 ? (direction > 0 ? 0 : options.length - 1) : (current + direction + options.length) % options.length;
    const next = options[nextIndex];
    if (next.value !== this.value) void next.activate();
    void next.setFocus();
  };

  render() {
    const disabled = this.effectiveDisabled;

    return (
      <Host
        role="radiogroup"
        tabIndex={-1}
        part="group"
        aria-label={this.ariaLabel || null}
        aria-labelledby={this.ariaLabelledBy || null}
        aria-disabled={disabled ? 'true' : null}
        aria-required={this.required ? 'true' : null}
        aria-invalid={this.invalid ? 'true' : null}
        onKeyDown={this.onKeyDown}
      >
        <slot onSlotchange={this.onSlotChange}></slot>
        <input
          class="validation-proxy"
          type="checkbox"
          required={this.required && !disabled}
          checked={this.value !== undefined && this.value !== null}
          aria-hidden="true"
          tabIndex={-1}
          ref={(input) => (this.validationProxy = input)}
        />
      </Host>
    );
  }
}
