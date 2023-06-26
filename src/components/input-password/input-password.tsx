import { Component, State, Prop, h, Host, Event, EventEmitter, Watch } from '@stencil/core';
import { InputAutocapitalize, InputAutoComplete } from '../input/input-interface';

@Component({
  tag: 'bds-input-password',
  styleUrl: 'input-password.scss',
  scoped: true,
})
export class InputPassword {
  private nativeInput?: HTMLInputElement;
  /**
   * Used to set the danger behavior by the internal validators
   */
  @State() validationDanger?: boolean = false;
  /**
   * Conditions the element to say whether it is pressed or not, to add styles.
   */
  @State() isPressed? = false;

  /**
   * Used to set the error message setted by the internal validators
   */
  @State() validationMesage? = '';

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

  private refNativeInput = (el: HTMLInputElement): void => {
    this.nativeInput = el;
  };

  private toggleEyePassword = (): void => {
    if (!this.disabled) {
      this.openEyes = !this.openEyes;
    }
  };

  private getAutoComplete(): string {
    if (!this.openEyes) return 'current-password';
    return this.autoComplete;
  }

  private onClickWrapper = (): void => {
    this.onFocus();
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  };

  @Watch('value')
  protected onChange(): void {
    this.bdsInputPasswordChange.emit({ value: this.value == null ? this.value : this.value.toString() });
  }

  private onInput = (ev: Event): void => {
    const input = ev.target as HTMLInputElement | null;
    if (input) {
      this.value = input.value || '';
    }
    this.bdsInputPasswordInput.emit(ev as KeyboardEvent);
  };

  private onBlur = (): void => {
    this.bdsInputPasswordBlur.emit();
    this.isPressed = false;
  };

  private onFocus = (): void => {
    this.bdsInputPasswordFocus.emit();
    this.isPressed = true;
  };

  private onSubmit = (): void => {
    this.bdsInputPasswordSubmit.emit();
  };

  private keyPressWrapper = (ev: Event): void => {
    this.bdsKeyDownBackspace.emit({ ev, value: this.value });
  };

  private renderIcon(): HTMLElement {
    return (
      this.icon && (
        <div
          class={{
            input__icon: true,
            'input__icon--large': !!this.label,
          }}
        >
          <bds-icon size={this.label ? 'medium' : 'small'} name={this.icon} color="inherit"></bds-icon>
        </div>
      )
    );
  }

  private renderLabel(): HTMLElement {
    return (
      this.label && (
        <label
          class={{
            input__container__label: true,
            'input__container__label--pressed': this.isPressed && !this.disabled,
          }}
        >
          <bds-typo variant="fs-12" bold="bold">
            {this.label}
          </bds-typo>
        </label>
      )
    );
  }

  private renderMessage(): HTMLElement {
    const icon = this.danger ? 'error' : 'info';
    let message = this.danger ? this.errorMessage : this.helperMessage;

    if (!message && this.validationDanger) message = this.validationMesage;

    const styles = this.danger || this.validationDanger ? 'input__message input__message--danger' : 'input__message';

    if (message) {
      return (
        <div class={styles} part="input__message">
          <div class="input__message__icon">
            <bds-icon size="x-small" name={icon} theme="solid" color="inherit"></bds-icon>
          </div>
          <bds-typo class="input__message__text" variant="fs-12">
            {message}
          </bds-typo>
        </div>
      );
    }

    return undefined;
  }

  render(): HTMLElement {
    const isPressed = this.isPressed && !this.disabled;
    const iconPassword = this.openEyes ? 'eye-open' : 'eye-closed';
    const type = this.openEyes ? 'text' : 'password';
    const autocomplete = this.getAutoComplete();

    return (
      <Host>
        <div class={{ element_input: true }} aria-disabled={this.disabled ? 'true' : null}>
          <div
            class={{
              input: true,
              'input--state-primary': !this.danger && !this.validationDanger,
              'input--state-danger': this.danger || this.validationDanger,
              'input--state-disabled': this.disabled,
              'input--label': !!this.label,
              'input--pressed': isPressed,
            }}
            onClick={this.onClickWrapper}
            onKeyDown={this.keyPressWrapper}
            part="input-container"
          >
            {this.renderIcon()}
            <div class="input__container">
              {this.renderLabel()}
              <div class={{ input__container__wrapper: true }}>
                <input
                  ref={this.refNativeInput}
                  class={{ input__container__text: true }}
                  type={type}
                  name={this.inputName}
                  min={this.min}
                  max={this.max}
                  minLength={this.minlength}
                  maxLength={this.maxlength}
                  readOnly={this.readonly}
                  autocomplete={autocomplete}
                  autocapitalize={this.autoCapitalize}
                  placeholder={this.placeholder}
                  onInput={this.onInput}
                  onFocus={this.onFocus}
                  onBlur={this.onBlur}
                  onSubmit={this.onSubmit}
                  value={this.value}
                  disabled={this.disabled}
                  data-test={this.dataTest}
                ></input>
              </div>
            </div>
            <div class="input__password--icon" onClick={this.toggleEyePassword}>
              <bds-icon size="small" name={iconPassword} color="inherit"></bds-icon>
            </div>
          </div>
          {this.renderMessage()}
        </div>
      </Host>
    );
  }
}
