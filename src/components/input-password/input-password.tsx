import { Component, Prop, h, Host, Event, EventEmitter } from '@stencil/core';
import { InputAutocapitalize, InputAutoComplete } from '../input/input-interface';

@Component({
  tag: 'bds-input-password',
  styleUrl: 'input-password.scss',
  scoped: true,
})
export class InputPassword {
  @Prop() openEyes? = false;

  /**
   * The value of the input.
   */
  @Prop({ mutable: true, reflect: true }) value?: string | null = '';

  /**
   *  label in input, with he the input size increases.
   */
  @Prop() label?: string = '';

  /**
   * Input Name
   */
  @Prop() inputName?: string = '';

  /**
   * The maximum value, which must not be less than its minimum (min attribute) value.
   */
  @Prop() max?: string;

  /**
   * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter.
   */
  @Prop() maxlength?: number;

  /**
   * The minimum value, which must not be greater than its maximum (max attribute) value.
   */
  @Prop() min?: string;

  /**
   * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter.
   */
  @Prop() minlength?: number;

  /**
   * If `true`, the user cannot modify the value.
   */
  @Prop() readonly = false;

  /**
   * Indicated to pass a help the user in complex filling.
   */
  @Prop() helperMessage?: string = '';

  /**
   * Indicated to pass an feeback to user.
   */
  @Prop() errorMessage?: string = '';

  /**
   * Add state danger on input, use for use feedback.
   */
  @Prop({ reflect: true }) danger?: boolean = false;

  /**
   * used for add icon in input left. Uses the bds-icon component.
   */
  @Prop({ reflect: true }) icon?: string = '';

  /**
   * Disabled input.
   */
  @Prop() disabled? = false;

  /**
   * Capitalizes every word's second character.
   */
  @Prop() autoCapitalize?: InputAutocapitalize = 'off';

  /**
   * Hint for form autofill feature
   */
  @Prop() autoComplete?: InputAutoComplete = 'off';

  /**
   * A tip for the user who can enter no controls.
   */
  @Prop() placeholder?: string = '';

  /**
   * Data test is the prop to specifically test the component action object.
   */
  @Prop() dataTest?: string = null;

  /**
   * Emitted when the value has changed.
   */
  @Event({ bubbles: true, composed: true }) bdsInputPasswordChange!: EventEmitter;

  /**
   * Emitted when the input has changed.
   */
  @Event() bdsInputPasswordInput!: EventEmitter<KeyboardEvent>;

  /**
   * Event input onblur.
   */
  @Event() bdsInputPasswordBlur: EventEmitter;

  /**
   * Event input focus.
   */
  @Event() bdsInputPasswordFocus: EventEmitter;

  /**
   * Event input enter.
   */
  @Event() bdsInputPasswordSubmit: EventEmitter;

  /**
   * Event input key down backspace.
   */
  @Event() bdsKeyDownBackspace: EventEmitter;

  private toggleEyePassword = (): void => {
    if (!this.disabled) {
      this.openEyes = !this.openEyes;
    }
  };

  private getAutoComplete(): string {
    if (!this.openEyes) return 'current-password';
    return this.autoComplete;
  }

  private onChange = (ev: Event): void => {
    const input = ev.target as HTMLInputElement | null;
    if (input) {
      this.value = input.value || '';
    }
    this.bdsInputPasswordChange.emit({ value: this.value == null ? this.value : this.value.toString() });
  };

  private onInput = (ev: Event): void => {
    const input = ev.target as HTMLInputElement | null;
    if (input) {
      this.value = input.value || '';
    }
    this.bdsInputPasswordInput.emit(ev as KeyboardEvent);
  };

  private onBlur = (): void => {
    this.bdsInputPasswordBlur.emit();
  };

  private onFocus = (): void => {
    this.bdsInputPasswordFocus.emit();
  };

  private onSubmit = (): void => {
    this.bdsInputPasswordSubmit.emit();
  };

  private keyPressWrapper = (ev: Event): void => {
    this.bdsKeyDownBackspace.emit({ ev, value: this.value });
  };

  render(): HTMLElement {
    const iconPassword = this.openEyes ? 'eye-open' : 'eye-closed';
    const type = this.openEyes ? 'text' : 'password';
    const autocomplete = this.getAutoComplete();

    return (
      <Host>
        <bds-input
          type={type}
          input-name={this.inputName}
          value={this.value}
          label={this.label}
          min={this.min}
          max={this.max}
          minlength={this.minlength}
          maxlength={this.maxlength}
          helper-message={this.helperMessage}
          error-message={this.errorMessage}
          danger={this.danger}
          icon={this.icon}
          disabled={this.disabled}
          readonly={this.readonly}
          auto-complete={autocomplete}
          auto-capitalize={this.autoCapitalize}
          placeholder={this.placeholder}
          data-test={this.dataTest}
          onBdsChange={this.onChange}
          onBdsInput={this.onInput}
          onBdsOnBlur={this.onBlur}
          onBdsFocus={this.onFocus}
          onBdsSubmit={this.onSubmit}
          onBdsKeyDownBackspace={this.keyPressWrapper}
        >
          <div slot="input-right" class="input__password--icon" onClick={this.toggleEyePassword}>
            <bds-icon size="small" name={iconPassword} color="inherit"></bds-icon>
          </div>
        </bds-input>
      </Host>
    );
  }
}
