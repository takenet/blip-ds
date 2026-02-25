import { EventEmitter } from '../../stencil-public-runtime';
import { InputType, InputAutocapitalize, InputAutoComplete, InputCounterLengthRules } from './input-interface';
export declare class Input {
  private nativeInput?;
  private autoResizeDebounceTimer?;
  isPressed?: boolean;
  isPassword?: boolean;
  validationMesage?: string;
  validationDanger?: boolean;
  /**
   * Input name, used for form identification.
   */
  inputName?: string;
  /**
   * Defines the input type (e.g., `text`, `password`, etc).
   */
  type?: InputType;
  /**
   * Label to be displayed above the input.
   */
  label?: string;
  /**
   * Text to be displayed as a hint or placeholder in the input.
   */
  placeholder?: string;
  /**
   * Defines automatic text capitalization (possible values: `on`, `off`).
   */
  autoCapitalize?: InputAutocapitalize;
  /**
   * Defines browser autocomplete behavior (possible values: `on`, `off`).
   */
  autoComplete?: InputAutoComplete;
  /**
   * Defines the maximum allowed value for the input.
   */
  max?: string;
  /**
   * Defines the maximum number of characters allowed in the input.
   */
  maxlength?: number;
  /**
   * Defines the minimum allowed value for the input.
   */
  min?: string;
  /**
   * Defines the minimum number of characters allowed in the input.
   */
  minlength?: number;
  /**
   * Makes the input read-only.
   */
  readonly: boolean;
  /**
   * Defines if the input is required.
   */
  required: boolean;
  /**
   * Defines a regex pattern that the input value must follow.
   */
  pattern?: string;
  /**
   * Help message displayed below the input.
   */
  helperMessage?: string;
  /**
   * Error message displayed when the input value is invalid.
   */
  errorMessage?: string;
  /**
   * Message displayed when the input value is valid.
   */
  successMessage?: string;
  /**
   * Name of the icon to be displayed inside the input.
   */
  icon?: string;
  /**
   * Defines if the input is disabled.
   */
  disabled?: boolean;
  /**
   * Defines if the input is in error state.
   */
  danger?: boolean;
  /**
   * Defines if the input is in success state.
   */
  success?: boolean;
  /**
   * The current value of the input.
   */
  value?: string | null;
  /**
   * Defines whether a character length counter will be displayed.
   */
  counterLength?: boolean;
  /**
   * Defines the character length counter rule (min, max, etc).
   */
  counterLengthRule?: InputCounterLengthRules;
  /**
   * Defines whether the input will be submitted when pressing Enter.
   */
  isSubmit: boolean;
  /**
   * Defines whether the input is a textarea.
   */
  isTextarea: boolean;
  /**
   * Defines the number of lines for the textarea (if `textarea`).
   */
  rows?: number;
  /**
   * Defines the number of columns for the textarea (if `textarea`).
   */
  cols?: number;
  /**
   * Defines whether the textarea should automatically resize based on content.
   */
  autoResize: boolean;
  /**
   * Defines whether the textarea can be manually resized by the user.
   */
  resizable: boolean;
  /**
   * Defines the minimum height of the textarea in pixels.
   */
  minHeight?: number;
  /**
   * Defines the maximum height of the textarea in pixels.
   */
  maxHeight?: number;
  /**
   * Defines the icon size (small or medium).
   */
  iconSize?: 'small' | 'medium';
  /**
   * Error message displayed when the input is not filled and is required.
   */
  requiredErrorMessage: string;
  /**
   * Error message displayed when the input value doesn't meet the minimum length requirement.
   */
  minlengthErrorMessage: string;
  /**
   * Error message displayed when the input value doesn't meet the minimum allowed value.
   */
  minErrorMessage: string;
  /**
   * Error message displayed when the input value doesn't meet the maximum allowed value.
   */
  maxErrorMessage: string;
  /**
   * Error message displayed when the input value is not a valid email.
   */
  emailErrorMessage: string;
  /**
   * Error message displayed when the input value is not a valid number.
   */
  numberErrorMessage: string;
  /**
   * Defines if the input will be displayed as chips (a type of input with multiple values).
   */
  chips: boolean;
  /**
   * Defines the debounce delay in milliseconds for textarea auto-resize.
   */
  debounceDelay?: number;
  /**
   * Data test is the prop to specifically test the component action.
   */
  dataTest?: string;
  encode?: boolean;
  /**
   * Event emitted when the input value changes.
   */
  bdsChange: EventEmitter;
  /**
   * Event emitted when the input receives input (typing).
   */
  bdsInput: EventEmitter<KeyboardEvent>;
  /**
   * Event emitted when the input loses focus.
   */
  bdsOnBlur: EventEmitter;
  /**
   * Event emitted when the input gains focus.
   */
  bdsFocus: EventEmitter;
  /**
   * Event emitted when the form is submitted.
   */
  bdsSubmit: EventEmitter;
  /**
   * Event emitted for regex pattern validation.
   */
  bdsPatternValidation: EventEmitter;
  /**
   * Event emitted when the "Backspace" key is pressed.
   */
  bdsKeyDownBackspace: EventEmitter;
  /**
   * Sets focus to the input field.
   */
  setFocus(): Promise<void>;
  /**
   * Removes focus from the input field.
   */
  removeFocus(): Promise<void>;
  /**
   * Returns the input element of the component.
   */
  getInputElement(): Promise<HTMLInputElement | HTMLTextAreaElement>;
  /**
   * Checks if the input field is valid.
   */
  isValid(): Promise<boolean>;
  /**
   * Clears the input field value.
   */
  clear(): Promise<void>;
  /**
   * Encodes special characters for safe display (prevents HTML code injection).
   */
  private encodeValue;
  /**
   * Notifies about the input field value change.
   */
  protected valueChanged(newValue: string | null): void;
  /**
   * Key press event handling (Enter, Backspace, etc).
   */
  private keyPressWrapper;
  /**
   * Auto-resizes the textarea based on content.
   */
  private autoResizeTextarea;
  /**
   * Debounced version of auto-resize to improve performance during rapid input events.
   */
  private debouncedAutoResize;
  /**
   * Centralizes all necessary updates for the textarea, including auto-resize.
   */
  private updateTextarea;
  /**
   * Function called when typing in the input field.
   */
  private onInput;
  /**
   * Function called when the input field loses focus.
   */
  private onBlur;
  /**
   * Function called when the input field gains focus.
   */
  private onFocus;
  /**
   * Function called when clicking on the input field.
   */
  private onClickWrapper;
  /**
   * Clears the input field value.
   */
  private clearTextInput;
  /**
   * Function that renders the icon inside the input field.
   */
  private renderIcon;
  /**
   * Function that renders the label of the input field.
   */
  private renderLabel;
  /**
   * Function that renders error or success messages below the input field.
   */
  private renderMessage;
  /**
   * Validates the input field when it loses focus.
   */
  private onBlurValidations;
  /**
   * Performs field validations while the user types.
   */
  private onBdsInputValidations;
  /**
   * Validates the regex pattern of the field.
   */
  private patternValidation;
  /**
   * Validates if the field is required.
   */
  private requiredValidation;
  /**
   * Validates the text length in the input field.
   */
  private lengthValidation;
  /**
   * Validates the minimum and maximum values of the input field.
   */
  private minMaxValidation;
  /**
   * Validates if the field contains a valid email.
   */
  private emailValidation;
  /**
   * Validates if the field contains a valid number.
   */
  private numberValidation;
  /**
   * Checks if the input field is valid.
   */
  private checkValidity;
  /**
   * Updates the input field value after changes.
   */
  componentDidUpdate(): void;
  /**
   * Initial configurations after the component loads.
   */
  componentDidLoad(): void;
  /**
   * Cleanup when component is destroyed.
   */
  disconnectedCallback(): void;
  render(): HTMLElement;
}
