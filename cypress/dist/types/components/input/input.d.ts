import { EventEmitter } from '../../stencil-public-runtime';
import { InputType, InputAutocapitalize, InputAutoComplete, InputCounterLengthRules } from './input-interface';
export declare class Input {
  private nativeInput?;
  /**
   * Conditions the element to say whether it is pressed or not, to add styles.
   */
  isPressed?: boolean;
  /**
   * Indicates if the input is password, adding the eye icon.
   */
  isPassword?: boolean;
  /**
   * Used to set the error message setted by the internal validators
   */
  validationMesage?: string;
  /**
   * Used to set the danger behavior by the internal validators
   */
  validationDanger?: boolean;
  /**
   * Input Name
   */
  inputName?: string;
  /**
   * Input type. Can be one of: "text", "password", "number" or "email".
   */
  type?: InputType;
  /**
   *  label in input, with he the input size increases.
   */
  label?: string;
  /**
   * A tip for the user who can enter no controls.
   */
  placeholder?: string;
  /**
   * Capitalizes every word's second character.
   */
  autoCapitalize?: InputAutocapitalize;
  /**
   * Hint for form autofill feature
   */
  autoComplete?: InputAutoComplete;
  /**
   * The maximum value, which must not be less than its minimum (min attribute) value.
   */
  max?: string;
  /**
   * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter.
   */
  maxlength?: number;
  /**
   * The minimum value, which must not be greater than its maximum (max attribute) value.
   */
  min?: string;
  /**
   * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter.
   */
  minlength?: number;
  /**
   * If `true`, the user cannot modify the value.
   */
  readonly: boolean;
  /**
   * If `true`, the input value will be required.
   */
  required: boolean;
  /**
   * Indicated to pass a regex pattern to input
   */
  pattern?: string;
  /**
   * Indicated to pass a help the user in complex filling.
   */
  helperMessage?: string;
  /**
   * Indicated to pass an feeback to user.
   */
  errorMessage?: string;
  /**
   * Indicated to pass an feeback to user.
   */
  successMessage?: string;
  /**
   * used for add icon in input left. Uses the bds-icon component.
   */
  icon?: string;
  /**
   * Disabled input.
   */
  disabled?: boolean;
  /**
   * Add state danger on input, use for use feedback.
   */
  danger?: boolean;
  /**
   * Add state success on input, use for use feedback.
   */
  success?: boolean;
  /**
   * The value of the input.
   */
  value?: string | null;
  /**
   * Passing true to display a counter of available size, it is necessary to
   * pass another maxlength property.
   */
  counterLength?: boolean;
  /**
   * Make it possible to pass the base values to the warning level and exclude,
   * using the values between min and max.
   */
  counterLengthRule?: InputCounterLengthRules;
  /**
   * If `true`, the user cannot modify the value.
   */
  isSubmit: boolean;
  /**
   * if `true` input switched to textarea
   */
  isTextarea: boolean;
  /**
   * The rows and cols attributes allow you to specify an exact size for the <textarea> to get. Setting this is a good idea for consistency, as the browser defaults may differ.
   */
  rows?: number;
  /**
   * The rows and cols attributes allow you to specify an exact size for the <textarea> to get. Setting this is a good idea for consistency, as the browser defaults may differ.
   */
  cols?: number;
  /**
   * Error message when input is required
   */
  requiredErrorMessage: string;
  /**
   * Error message when the value is lower than the minlength
   */
  minlengthErrorMessage: string;
  /**
   * Error message when the value is lower than the min value
   */
  minErrorMessage: string;
  /**
   * Error message when the value is higher than the max value
   */
  maxErrorMessage: string;
  /**
   * Error message when the value isn't an email
   */
  emailErrorMessage: string;
  /**
   * Error message when the value isn't an email
   */
  numberErrorMessage: string;
  /**
   * Internal prop to identify input chips
   */
  chips: boolean;
  /**
   * Id to support Cypress.
   */
  dataTest?: string;
  /**
   * Update the native input element when the value changes
   */
  protected valueChanged(): void;
  /**
   * Emitted when the value has changed.
   */
  bdsChange: EventEmitter;
  /**
   * Emitted when the input has changed.
   */
  bdsInput: EventEmitter<KeyboardEvent>;
  /**
   * Event input onblur.
   */
  bdsOnBlur: EventEmitter;
  /**
   * Event input focus.
   */
  bdsFocus: EventEmitter;
  /**
   * Event input enter.
   */
  bdsSubmit: EventEmitter;
  /**
   * Event pattern validation.
   */
  bdsPatternValidation: EventEmitter;
  /**
   * Event input key down backspace.
   */
  bdsKeyDownBackspace: EventEmitter;
  /**
   * Sets focus on the specified `ion-input`. Use this method instead of the global
   * `input.focus()`.
   */
  setFocus(): Promise<void>;
  removeFocus(): Promise<void>;
  /**
   * Returns the native `<input>` element used under the hood.
   */
  getInputElement(): Promise<HTMLInputElement>;
  /**
   * Return the validity of the input.
   */
  isValid(): Promise<boolean>;
  /**
   * Return the validity of the input.
   */
  clear(): Promise<void>;
  private keyPressWrapper;
  private onInput;
  private onBlur;
  private onFocus;
  private onClickWrapper;
  private clearTextInput;
  private renderIcon;
  private renderLabel;
  private renderMessage;
  private onBlurValidations;
  private onBdsInputValidations;
  private patternValidation;
  private requiredValidation;
  private lengthValidation;
  private minMaxValidation;
  private emailValidation;
  private numberValidation;
  private checkValidity;
  componentDidUpdate(): void;
  render(): HTMLElement;
}
