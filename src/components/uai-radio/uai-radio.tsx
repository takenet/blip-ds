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
import { UaiFormControl } from '../../utils/uai-form-control';
import { warnOnce } from '../../utils/deprecation';

interface UaiRadioGroupHost extends HTMLElement {
  disabled?: boolean;
}

interface UaiRadioOption extends HTMLElement {
  checked?: boolean;
  name?: string;
}

let radioIds = 0;

/**
 * Radio option for one choice in a mutually exclusive group. Pair radios with a labelled UaiRadioGroup.
 * Wrap the app in UaiThemeProvider.
 *
 * @slot - Additional visible label content.
 * @part label - The label and control layout.
 * @part control - The visual radio control.
 * @part input - The native radio input.
 */
@Component({
  tag: 'uai-radio',
  styleUrl: 'uai-radio.scss',
  shadow: { delegatesFocus: true },
  formAssociated: true,
})
export class UaiRadio {
  @Element() el!: HTMLElement;

  @AttachInternals() internals: ElementInternals;

  @State() groupTabIndex = 0;
  @State() groupDisabled = false;
  @State() disabledByForm = false;

  private nativeInput?: HTMLInputElement;
  private formControl?: UaiFormControl;
  private defaultValue: string | null = null;
  private readonly generatedId = `uai-radio-${++radioIds}`;

  /**
   * ID applied to the native radio. Kept for compatibility with bds-radio.
   */
  @Prop() refer?: string;

  /**
   * Visible label for the radio.
   */
  @Prop() label?: string;

  /**
   * Control size. Use standard by default; pair with equally sized selection controls.
   * Avoid changing label typography to compensate for the control size.
   */
  @Prop() size: 'short' | 'standard' | 'tall' = 'standard';

  /**
   * Value submitted when this radio is selected.
   */
  @Prop({ reflect: true }) value!: string;

  /**
   * Name used in submitted form data when the radio is not inside a UaiRadioGroup.
   */
  @Prop({ reflect: true }) name?: string;

  /**
   * If true, the radio is selected.
   */
  @Prop({ mutable: true, reflect: true }) checked = false;

  /**
   * If true, the user cannot interact with the radio.
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * Accessible name used when no visible label or slotted content is provided.
   */
  @Prop({ attribute: 'aria-label' }) ariaLabel: string = null;

  /**
   * Value of the data-test attribute on the native radio.
   */
  @Prop() dataTest?: string = null;

  /**
   * Emitted whenever checked changes. detail: { checked }.
   */
  @Event({ bubbles: true, composed: true }) uaiChange!: EventEmitter<{ checked: boolean }>;

  /**
   * Emitted once when the radio is activated, including reselecting it. detail: { checked }.
   */
  @Event({ bubbles: true, composed: true }) uaiClickChange!: EventEmitter<{ checked: boolean }>;

  /**
   * Returns the native radio input.
   */
  @Method()
  async getInputElement(): Promise<HTMLInputElement> {
    return this.nativeInput;
  }

  /**
   * Returns whether the radio is selected.
   */
  @Method()
  async getValue(): Promise<boolean> {
    return this.nativeInput ? this.nativeInput.checked : this.checked;
  }

  /**
   * Moves focus to the native radio input.
   */
  @Method()
  async setFocus(): Promise<void> {
    this.nativeInput?.focus();
  }

  /**
   * Sets this option's position in the group's tab sequence.
   */
  @Method()
  async setTabIndex(value: number): Promise<void> {
    this.groupTabIndex = value;
  }

  /**
   * Applies the disabled state inherited from a UaiRadioGroup.
   */
  @Method()
  async setGroupDisabled(value: boolean): Promise<void> {
    this.groupDisabled = value;
  }

  /**
   * Selects this option from a user-driven group action.
   */
  @Method()
  async activate(): Promise<void> {
    if (this.effectiveDisabled) return;
    this.checked = true;
    this.uaiClickChange.emit({ checked: true });
  }

  @Watch('checked')
  protected checkedChanged(value: boolean): void {
    if (value) this.deselectStandalonePeers();
    this.syncFormValue();
    this.uaiChange.emit({ checked: value });
  }

  @Watch('value')
  protected valueChanged(): void {
    this.syncFormValue();
  }

  componentWillLoad(): void {
    this.defaultValue = this.checked && !this.isGrouped ? this.value : null;

    if (typeof this.internals?.setFormValue === 'function') {
      this.formControl = new UaiFormControl({
        internals: this.internals,
        defaultValue: () => this.defaultValue,
        onReset: (value) => {
          if (!this.isGrouped) this.checked = value !== null;
        },
        onDisabledChange: (disabled) => {
          this.disabledByForm = disabled;
        },
      });
    }

    if (Build.isDev && !this.label && !this.ariaLabel && !this.el.textContent?.trim()) {
      warnOnce('uai-radio', 'accessible-name', 'Radio without visible label content requires an aria-label.');
    }
  }

  componentDidRender(): void {
    if (this.checked) this.deselectStandalonePeers();
    this.syncNativeState();
    this.syncFormValue();
  }

  formResetCallback(): void {
    if (!this.isGrouped) this.formControl?.reset();
  }

  formDisabledCallback(disabled: boolean): void {
    this.formControl?.setDisabled(disabled);
  }

  formStateRestoreCallback(state: string | null): void {
    if (!this.isGrouped) this.checked = state !== null;
  }

  private get effectiveDisabled(): boolean {
    const group = this.el.closest('uai-radio-group') as UaiRadioGroupHost | null;
    return this.disabled || this.groupDisabled || this.disabledByForm || !!group?.disabled;
  }

  private get isGrouped(): boolean {
    return !!this.el.closest('uai-radio-group');
  }

  private get inputId(): string {
    return this.refer || this.generatedId;
  }

  private get formOwner(): HTMLFormElement | null {
    const formId = this.el.getAttribute('form');
    const form = formId ? this.el.ownerDocument.getElementById(formId) : this.el.closest('form');
    return form instanceof HTMLFormElement ? form : null;
  }

  private deselectStandalonePeers(): void {
    if (!this.name || this.isGrouped) return;
    const root = this.el.getRootNode();
    if (!(root instanceof Document || root instanceof ShadowRoot)) return;

    for (const radio of Array.from(root.querySelectorAll<UaiRadioOption>('uai-radio'))) {
      const formId = radio.getAttribute('form');
      const form = formId ? radio.ownerDocument.getElementById(formId) : radio.closest('form');
      if (
        radio !== this.el &&
        !radio.closest('uai-radio-group') &&
        radio.name === this.name &&
        form === this.formOwner
      ) {
        radio.checked = false;
      }
    }
  }

  private syncNativeState(): void {
    if (!this.nativeInput) return;
    this.nativeInput.checked = this.checked;
    this.nativeInput.disabled = this.effectiveDisabled;
    this.nativeInput.tabIndex = this.groupTabIndex;
  }

  private syncFormValue(): void {
    this.formControl?.setValue(this.checked && !this.isGrouped ? this.value : null);
  }

  private onClick = (event: Event): void => {
    if (this.effectiveDisabled) return;
    event.stopPropagation();
    void this.activate();
  };

  private onKeyDown = (event: KeyboardEvent): void => {
    if (event.key !== 'Enter' || event.isComposing || this.effectiveDisabled) return;
    event.preventDefault();
    void this.activate();
  };

  render() {
    const disabled = this.effectiveDisabled;
    const hasVisibleName = !!(this.label || this.el.textContent?.trim());

    return (
      <Host
        aria-disabled={disabled ? 'true' : null}
        class={{
          'uai-radio--disabled': disabled,
          'uai-radio--checked': this.checked,
          'uai-radio--short': this.size === 'short',
          'uai-radio--tall': this.size === 'tall',
        }}
      >
        <label class="radio" part="label">
          <span class="radio__control" part="control">
            <input
              id={this.inputId}
              class="radio__input"
              part="input"
              type="radio"
              value={this.value}
              name={this.isGrouped ? undefined : this.name}
              checked={this.checked}
              disabled={disabled}
              tabIndex={this.groupTabIndex}
              aria-label={hasVisibleName ? null : this.ariaLabel}
              data-test={this.dataTest}
              onClick={this.onClick}
              onKeyDown={this.onKeyDown}
              ref={(input) => (this.nativeInput = input)}
            />
            <span class="radio__dot" aria-hidden="true"></span>
          </span>
          <span class="radio__text">
            {this.label}
            <slot />
          </span>
        </label>
      </Host>
    );
  }
}
