import { Component, h, Prop, State, Watch, Event, EventEmitter, Method } from "@stencil/core";
import { InputType, InputAutocapitalize, InputAutoComplete, InputInterface } from './input-interface';

@Component({
  tag: 'bds-input',
  styleUrl: 'input.scss',
  shadow: true
})
export class Input {
  private nativeInput?: HTMLInputElement;

  /**
   * Conditions the element to say whether it is pressed or not, to add styles.
   */
  @State() isPressed?= false;

  /**
   * Indicates if the input is password, adding the eye icon.
   */
  @State() isPassword?= false;

  /**
   * Input Name
   */
  @Prop() inputName?: string = '';

  /**
   * Input type. Can be one of: "text" or "password".
   */
  @Prop({ reflect: true }) type?: InputType = 'text';

  /**
   *  label in input, with he the input size increases.
   */
  @Prop() label?: string = '';

  /**
   * A tip for the user who can enter no controls.
   */
  @Prop() placeholder?: string = '';

  /**
   * Capitalizes every word's second character.
   */
  @Prop() autoCapitalize?: InputAutocapitalize = 'off';

  /**
   * Hint for form autofill feature
   */
  @Prop() autoComplete?: InputAutoComplete = 'off';

  /**
   * Indicated to pass a help the user in complex filling.
   */
  @Prop() helperMessage?: string = '';

  /**
   * Indicated to pass an feeback to user.
   */
  @Prop() errorMessage?: string = '';

  /**
   * used for add icon in input left. Uses the bds-icon component.
   */
  @Prop({ reflect: true }) icon?: string = '';

  /**
   * Disabled input.
   */
  @Prop({ reflect: true }) disabled?: boolean = false;


  /**
   * Add state danger on input, use for use feedback.
   */
  @Prop({ reflect: true }) danger?: boolean = false;

  /**
   * The value of the input.
   */
  @Prop({ mutable: true, reflect: true }) value?: string | null = '';

  @Prop() interface?: InputInterface = 'input';

  /**
   * Update the native input element when the value changes
   */
  @Watch('value')
  protected valueChanged(): void {
    this.bdsChange.emit({ value: this.value });
  }

  /**
   * Emitted when the value has changed.
   */
  @Event() bdsChange!: EventEmitter;

  /**
   * Emitted when the input has changed.
   */
  @Event() bdsInput!: EventEmitter<KeyboardEvent>;

  /**
   * Sets focus on the specified `ion-input`. Use this method instead of the global
   * `input.focus()`.
   */
  @Method()
  async setFocus(): Promise<void> {
    this.onClickWrapper();
  }

  @Method()
  async removeFocus(): Promise<void> {
    this.onBlur();
  }

  /**
   * Returns the native `<input>` element used under the hood.
   */
  @Method()
  async getInputElement(): Promise<HTMLInputElement> {
    return this.nativeInput;
  }

  private onInput = (ev: Event): void => {
    const input = ev.target as HTMLInputElement | null;
    if (input) {
      this.value = input.value || '';
    }
    this.bdsInput.emit(ev as KeyboardEvent);
  }

  private onBlur = (): void => {
    this.isPressed = false;
  }

  private onFocus = (): void => {
    this.isPressed = true;
  }

  private onClickWrapper = (): void => {
    this.onFocus();
    if (this.nativeInput) { this.nativeInput.focus(); }
  }

  private refNativeInput = (input: HTMLInputElement): void => {
    this.nativeInput = input
  }

  private renderIcon(): HTMLElement {
    return this.icon && (
      <div class={{
        "input__icon": true,
        "input__icon--large": !!this.label,
      }}>
        <bds-icon
          size={this.label ? "medium" : "small"}
          name={this.icon}
          color="inherit">
        </bds-icon>
      </div>
    )
  }

  private renderLabel(): HTMLElement {
    return this.label && (
      <label class={{
        "input__container__label": true,
        "input__container__label--pressed": this.isPressed && !this.disabled,
      }}>
        <bds-typo variant="fs-12" bold="bold">{this.label}</bds-typo>
      </label>
    )
  }

  private renderMessage(): HTMLElement {
    const icon = this.danger ? 'error' : 'info';
    const message = this.danger ? this.errorMessage : this.helperMessage;
    const styles = this.danger ? 'input__message input__message--danger' : 'input__message';


    if ((this.danger && this.errorMessage) ||
      (!this.danger && this.helperMessage)) {
      return (
        <div class={styles}>
          <div class="input__message__icon">
            <bds-icon
              size="x-small"
              name={icon}
              theme="solid"
              color="inherit">
            </bds-icon>
          </div>
          <bds-typo variant="fs-12">{message}</bds-typo>
        </div>
      )
    }

    return undefined;
  }

  private renderInterface = (): HTMLElement => {
    if (this.interface === 'input') {
      return (
        <input
          class="input__container__text"
          autocapitalize={this.autoCapitalize}
          autocomplete={this.autoComplete}
          disabled={this.disabled}
          name={this.inputName}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          onInput={this.onInput}
          placeholder={this.placeholder}
          ref={this.refNativeInput}
          type={this.type}
          value={this.value}
        />
      )
    }

    if (this.interface === 'text') {
      return (
        <bds-typo
          class="input__container__text input__container__text--text"
          variant="fs-14"
          tag="span"
        >
          {this.value}
        </bds-typo>
      )
    }

    return undefined;
  }

  render(): HTMLElement {
    console.log('RENDER:' + this.label, { isPressed: this.isPressed })
    return (
      <div
        class={{
          "input": true,
          "input--state-primary": !this.danger,
          "input--state-danger": this.danger,
          "input--state-disabled": this.disabled,
          "input--label": !!this.label,
          "input--pressed": this.isPressed && !this.disabled,
        }}
        onClick={this.onClickWrapper}
      >
        {this.renderIcon()}
        <div class="input__container">
          {this.renderLabel()}
          {this.renderInterface()}
        </div>
        <slot name="input-right" />
        {this.renderMessage()}
      </div>
    )
  }
}
