import { Component, Prop, State, Event, EventEmitter, Element, h, Host } from '@stencil/core';
import { FontSize } from '../typo/typo';

export type SizeInputEditable = 'short' | 'standard' | 'tall';
export interface InputEditableEventDetail {
  value: string;
  oldValue: string;
}

@Component({
  tag: 'bds-input-editable',
  styleUrl: 'input-editable.scss',
  shadow: true,
})
export class InputEditable {
  private nativeInput?: HTMLInputElement;

  @Element() el!: HTMLBdsInputEditableElement;
  /**
   * Value to keep the old value of the input.
   */
  @State() oldValue: string;
  /**
   * Conditions the element to say whether it is pressed or not, to add styles.
   */
  @State() isEditing = false;

  /**
   * Used to block the confirm icon.
   */
  @State() isValid = true;

  /**
   * Used to validate it is pressed.
   */
  @State() isPressed? = false;

  /**
   * Used to validate it is focused.
   */
  @State() isFocused?: boolean = false;

  /**
   * Used to set the error message setted by the internal validators
   */
  @State() validationMesage? = '';

  /**
   * Used to set the danger behavior by the internal validators
   */
  @State() validationDanger? = false;

  /**
   * Set the component size. Can be one of:
   * 'short' | 'standard' | 'tall';
   */
  @Prop() size?: SizeInputEditable = 'standard';

  /**
   * Defines whether the component will be expandable
   */
  @Prop() expand?: boolean = false;

  /**
   * Data test is the prop to specifically test the component action object.
   */
  @Prop() dataTest?: string = null;
  /**
   * Input Name
   */
  @Prop() inputName?: string = '';

  /**
   * The value of the input.
   */
  @Prop({ mutable: true, reflect: true }) value?: string | null = '';

  /**
   * Error message when input is required
   */
  @Prop() requiredErrorMessage: string;

  /**
   * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter.
   */
  @Prop() minlength?: number = 0;

  /**
   * Error message when the value is lower than the minlength
   */
  @Prop() minlengthErrorMessage: string;

  /**
   * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter.
   */
  @Prop() maxlength?: number;

  /**
   * Indicated to pass an feeback to user.
   */
  @Prop() errorMessage?: string = '';
  /**
   * Indicated to pass an feeback to user.
   */
  @Prop({ mutable: true }) successMessage?: string = '';
  /**
   * Indicated to pass a help to the user in complex filling.
   */
  @Prop() helperMessage?: string = '';

  /**
   * Placeholder for native input element.
   */
  @Prop() placeholder?: string = '';

  /**
   * Add state danger on input, use for use feedback. If true avoid save confirmation.
   */
  @Prop({ mutable: true, reflect: true }) danger?: boolean = false;
  /**
   * Add state success on input, use for use feedback.
   */
  @Prop({ reflect: true, mutable: true }) success?: boolean = false;
  /**
   * Data test is the prop to specifically test the component action object.
   * dtButtonEdit is the data-test to button edit.
   */
  @Prop() dtButtonEdit?: string = null;
  /**
   * Data test is the prop to specifically test the component action object.
   * dtButtonClose is the data-test to button close.
   */
  @Prop() dtButtonClose?: string = null;
  /**
   * Data test is the prop to specifically test the component action object.
   * dtButtonConfirm is the data-test to button confirm.
   */
  @Prop() dtButtonConfirm?: string = null;
  /**
   * Emitted when input text confirm.
   */
  @Event() bdsInputEditableSave: EventEmitter<InputEditableEventDetail>;

  /**
   * Emitted when the value has changed.
   */
  @Event() bdsChange!: EventEmitter<InputEditableEventDetail>;

  /**
   * Emitted when the input has changed.
   */
  @Event() bdsInput!: EventEmitter<InputEvent>;

  /**
   * Emitted when the selection is cancelled.
   */
  @Event() bdsCancel!: EventEmitter<void>;

  /**
   * Emitted when the select loses focus.
   */
  @Event() bdsFocus!: EventEmitter<void>;

  /**
   * Emitted when the select loses focus.
   */
  @Event() bdsBlur!: EventEmitter<void>;

  private handleEditing = (): void => {
    this.toggleEditing();
  };

  private toggleEditing = (): void => {
    this.isEditing = !this.isEditing;
  };

  componentWillLoad() {
    this.oldValue = this.value;
  }

  private handleSaveText = (): void => {
    const newValue = this.nativeInput.value;
    if (newValue.length > 0 && newValue.length >= this.minlength && !this.danger) {
      this.bdsInputEditableSave.emit({ value: newValue, oldValue: this.oldValue });
      this.oldValue = newValue;
      this.value = newValue;
      this.toggleEditing();
    }
  };

  private changedInputValue = async (ev: InputEvent) => {
    const input = ev.target as HTMLInputElement | null;
    this.checkValidity();
    if (input) {
      if (input.value.length < Number(this.minlength)) {
        this.isValid = false;
      } else {
        this.isValid = true;
      }
    }
    this.bdsInput.emit(ev);
    this.bdsChange.emit({ value: this.nativeInput.value, oldValue: this.oldValue });
  };

  private onFocus = (): void => {
    this.isFocused = true;
    this.isPressed = true;
    this.bdsFocus.emit();
  };

  private onBlur = (): void => {
    this.onBlurValidations();
    this.bdsBlur.emit();
    this.isPressed = false;
  };

  private onClickWrapper = (): void => {
    this.onFocus();
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  };

  private onBlurValidations() {
    this.requiredValidation();
    (this.minlength || this.maxlength) && this.lengthValidation();
    this.checkValidity();
  }

  private requiredValidation() {
    if (this.nativeInput.validity.valueMissing) {
      this.validationMesage = this.requiredErrorMessage;
      this.validationDanger = true;
    }
  }

  private lengthValidation() {
    if (this.nativeInput.validity.tooShort) {
      this.validationMesage = this.minlengthErrorMessage;
      this.validationDanger = true;
      return;
    }

    if (this.nativeInput.validity.tooLong) {
      this.validationDanger = true;
      return;
    }
  }

  private checkValidity() {
    if (this.nativeInput.validity.valid) {
      this.validationDanger = false;
    }
  }

  private handleKeyDownToggle(event) {
    if (event.key == 'Enter') {
      this.toggleEditing();
    }
  }

  private handleKeyDownSave(event) {
    if (event.key == 'Enter') {
      this.handleSaveText();
    }
  }

  getFontSizeClass(): FontSize {
    if (this.size == 'short') {
      return 'fs-16';
    } else if (this.size == 'standard') {
      return 'fs-24';
    } else if (this.size == 'tall') {
      return 'fs-40';
    } else {
      return 'fs-24';
    }
  }
  private getExpand = (): string => {
    if (this.expand) {
      return 'expanded';
    } else {
      return 'fixed';
    }
  };
  private renderMessage(): HTMLElement {
    const icon = this.danger ? 'error' : this.success ? 'checkball' : 'info';
    let message = this.danger ? this.errorMessage : this.success ? this.successMessage : this.helperMessage;

    if (!message && this.validationDanger) message = this.validationMesage;

    const styles =
      this.danger || this.validationDanger
        ? 'input__message input__message--danger'
        : this.success
          ? 'input__message input__message--success'
          : 'input__message';

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
  render() {
    const variant = this.getFontSizeClass();
    const inputExpand = this.getExpand();
    return (
      <Host>
        <div class="input__editable">
          <div
            class={{ 'input__editable--static': true, 'input__editable--hidden': this.isEditing }}
            onClick={this.handleEditing}
            data-test={this.dtButtonEdit}
            tabindex="0"
            onKeyDown={this.handleKeyDownToggle.bind(this)}
          >
            <bds-typo
              tag="span"
              part="input__editable--static__typo"
              class="input__editable--static__typo"
              variant={variant}
            >
              {this.value}
            </bds-typo>
            <bds-icon key="edit-icon" class="input__editable--static__icon" name="edit"></bds-icon>
          </div>
          <div class={{ 'input__editable--active': true, 'input__editable--hidden': !this.isEditing }}>
            <div class={{ element_input: true, [inputExpand]: true, [this.size]: true }}>
              <div
                class={{
                  input: true,
                  select: true,
                  'input--state-primary': !this.danger && !this.validationDanger,
                  'input--state-danger': this.danger || this.validationDanger,
                  'input--state-success': this.success,
                  'input--pressed': this.isPressed,
                }}
                onClick={this.onClickWrapper}
              >
                <div class="input__container">
                  <input
                    class={{ input__container__text: true }}
                    ref={(input) => (this.nativeInput = input)}
                    minLength={this.minlength}
                    maxLength={this.maxlength}
                    name={this.inputName}
                    onBlur={this.onBlur}
                    onFocus={this.onFocus}
                    onInput={this.changedInputValue}
                    placeholder={this.placeholder}
                    value={this.value}
                    required={true}
                    part="input"
                    data-test={this.dataTest}
                  ></input>
                </div>
                {this.success && <bds-icon class="icon-success" name="checkball" theme="solid" size="xxx-small" />}
              </div>
              {this.renderMessage()}
            </div>
            <div class="input__editable--active__icon">
              <bds-icon
                key="error-icon"
                class="input__editable--active__icon--error"
                theme="solid"
                name="error"
                onClick={this.handleEditing}
                tabindex="0"
                onKeyDown={this.handleKeyDownToggle.bind(this)}
                dataTest={this.dtButtonClose}
              ></bds-icon>
              <bds-icon
                key="checkball-icon"
                class={{
                  'input__editable--active__icon--checkball': true,
                  'input__editable--active__icon--checkball--error': !this.isValid,
                }}
                theme="solid"
                name="checkball"
                onClick={this.handleSaveText}
                tabindex="0"
                onKeyDown={this.handleKeyDownSave.bind(this)}
                dataTest={this.dtButtonConfirm}
              ></bds-icon>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
