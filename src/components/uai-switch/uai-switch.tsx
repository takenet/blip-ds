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

export type UaiSwitchSize = 'tall' | 'standard' | 'short';

let switchIds = 0;

/**
 * Binary setting applied immediately. Use an accessible name; pair with UaiThemeProvider.
 * Avoid switches for submitting a form or choosing mutually exclusive options.
 *
 * @part control - The native switch input.
 * @part track - The visual track.
 * @part handle - The moving handle.
 * @part label - The label and control layout.
 */
@Component({
  tag: 'uai-switch',
  styleUrl: 'uai-switch.scss',
  shadow: { delegatesFocus: true },
  formAssociated: true,
})
export class UaiSwitch {
  @Element() el!: HTMLElement;
  @AttachInternals() internals: ElementInternals;
  @State() disabledByForm = false;

  private nativeInput?: HTMLInputElement;
  private formControl?: UaiFormControl;
  private defaultChecked = false;
  private readonly generatedId = `uai-switch-${++switchIds}`;

  /** Native input ID. Use for integration; pair with getInputElement. Avoid duplicate IDs. */
  @Prop() refer?: string;

  /** Visible setting name. Use with the control; pair with checked. Avoid unnamed settings. */
  @Prop() label?: string;

  /** Relative control size. Use standard by default; pair with adjacent controls. Avoid custom dimensions. */
  @Prop() size: UaiSwitchSize = 'standard';

  /** Submitted field name. Use inside forms; pair with value. Avoid duplicate names for unrelated settings. */
  @Prop({ reflect: true }) name?: string;

  /** Current on/off state. Use for controlled settings; pair with uaiChange. Avoid treating it as an action. */
  @Prop({ mutable: true, reflect: true }) checked = false;

  /** Prevents interaction. Use for unavailable settings; pair with explanatory text. Avoid hiding restrictions. */
  @Prop({ reflect: true }) disabled = false;

  /** Submitted value when on. Use with name; pair with form association. Avoid depending on unchecked submission. */
  @Prop() value = 'on';

  /** Accessible setting name when no visible label is provided. Avoid unnamed switches. */
  @Prop({ attribute: 'aria-label' }) ariaLabel: string = null;

  /** Test selector on the native input. Use for automation; pair with semantic queries. Avoid styling by it. */
  @Prop() dataTest?: string = null;

  /** State change, including programmatic changes. Use detail.checked; pair with checked. Avoid duplicate handlers. */
  @Event({ bubbles: true, composed: true }) uaiChange!: EventEmitter<{ checked: boolean }>;

  /** Returns the native input. Use for focus; pair with accessible naming. Avoid modifying its visual styles. */
  @Method()
  async getInputElement(): Promise<HTMLInputElement> {
    return this.nativeInput;
  }

  /** Returns the on/off state. Use for imperative consumers; pair with uaiChange. Avoid polling. */
  @Method()
  async getValue(): Promise<boolean> {
    return this.checked;
  }

  @Watch('checked')
  protected checkedChanged(): void {
    this.syncFormValue();
    this.uaiChange.emit({ checked: this.checked });
  }

  @Watch('value')
  protected valueChanged(): void {
    this.syncFormValue();
  }

  componentWillLoad(): void {
    this.defaultChecked = this.checked;
    if (typeof this.internals?.setFormValue === 'function') {
      this.formControl = new UaiFormControl({
        internals: this.internals,
        defaultValue: () => (this.defaultChecked ? this.value : null),
        onReset: (value) => {
          this.checked = value !== null;
        },
        onDisabledChange: (disabled) => {
          this.disabledByForm = disabled;
        },
      });
    }
    if (Build.isDev && !this.label && !this.ariaLabel) {
      warnOnce('uai-switch', 'accessible-name', 'Switch requires a label or aria-label describing the setting.');
    }
  }

  componentDidRender(): void {
    this.syncFormValue();
  }

  formResetCallback(): void {
    this.formControl?.reset();
  }

  formDisabledCallback(disabled: boolean): void {
    this.formControl?.setDisabled(disabled);
  }

  formStateRestoreCallback(state: string | null): void {
    this.checked = state !== null;
  }

  private syncFormValue(): void {
    this.formControl?.setValue(this.checked ? this.value : null);
  }

  private get effectiveDisabled(): boolean {
    return this.disabled || this.disabledByForm;
  }

  private onChange = (): void => {
    if (!this.effectiveDisabled) this.checked = this.nativeInput.checked;
  };

  private onKeyDown = (event: KeyboardEvent): void => {
    if (event.key !== 'Enter' || event.repeat || event.isComposing || this.effectiveDisabled) return;
    event.preventDefault();
    this.checked = !this.checked;
  };

  render() {
    const size = ['short', 'standard', 'tall'].includes(this.size) ? this.size : 'standard';
    if (Build.isDev && size !== this.size) {
      warnOnce(
        'uai-switch',
        'size',
        `Unknown size "${this.size}". Use short, standard or tall; falling back to standard.`,
      );
    }
    return (
      <Host aria-disabled={this.effectiveDisabled ? 'true' : null}>
        <label class="switch__label" part="label">
          <span class={`switch switch--${size}`}>
            <input
              ref={(input) => (this.nativeInput = input)}
              id={this.refer || this.generatedId}
              class="switch__input"
              part="control"
              type="checkbox"
              name={this.name}
              value={this.value}
              role="switch"
              checked={this.checked}
              disabled={this.effectiveDisabled}
              aria-checked={String(this.checked)}
              aria-label={this.ariaLabel}
              data-test={this.dataTest}
              onChange={this.onChange}
              onKeyDown={this.onKeyDown}
            />
            <span class="switch__track" part="track" aria-hidden="true">
              <span class="switch__handle" part="handle" />
            </span>
          </span>
          {this.label && <span class="switch__text">{this.label}</span>}
        </label>
      </Host>
    );
  }
}
