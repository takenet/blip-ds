import { EventEmitter } from '../../stencil-public-runtime';
import { Option } from '../selects/select-interface';
export declare class InputPhoneNumber {
  private nativeInput?;
  el: HTMLBdsSelectElement;
  isOpen?: boolean;
  selectedCountry: string;
  isoCode: string;
  /**
   * Conditions the element to say whether it is pressed or not, to add styles.
   */
  isPressed?: boolean;
  /**
   * Used to set the danger behavior by the internal validators
   */
  validationDanger?: boolean;
  /**
   * Used to set the error message setted by the internal validators
   */
  validationMesage?: string;
  /**
   * The options of select.
   */
  options?: Array<Option>;
  /**
   * The value of the phone number input.
   */
  text?: string;
  /**
   * the value of the select.
   */
  value?: string | null;
  /**
   * Add state danger on input, use for use feedback.
   */
  danger?: boolean;
  /**
   * Add state success on input, use for use feedback.
   */
  success?: boolean;
  /**
   * Disabled input.
   */
  disabled?: boolean;
  /**
   * If `true`, the input value will be required.
   */
  required: boolean;
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
   * Error message when input is required
   */
  requiredErrorMessage: string;
  /**
   * Error message when input is required
   */
  numberErrorMessage: string;
  /**
   * Data test is the prop to specifically test the component action object.
   */
  dataTest?: string;
  /**
   * Data test is the prop to specifically test the component action object.
   * dtSelectFlag is the data-test to button close.
   */
  dtSelectFlag?: string;
  /**
   * Emitted when the value has changed.
   */
  bdsPhoneNumberChange: EventEmitter;
  /**
   * Emitted when the input has changed.
   */
  bdsInput: EventEmitter<KeyboardEvent>;
  /**
   * Emitted when the selection is cancelled.
   */
  bdsCancel: EventEmitter<void>;
  /**
   * Emitted when the select loses focus.
   */
  bdsFocus: EventEmitter<void>;
  /**
   * Emitted when the select loses focus.
   */
  bdsBlur: EventEmitter<void>;
  /**
   *  label in input, with he the input size increases.
   */
  label?: string;
  /**
   * used for add icon in input left. Uses the bds-icon component.
   */
  icon?: string;
  removeFocus(): Promise<void>;
  valueChanged(): void;
  handleWindow(ev: Event): void;
  componentWillRender(): void;
  connectedCallback(): Promise<void>;
  private get childOptions();
  private refNativeInput;
  private onClickWrapper;
  private onFocus;
  private onBlur;
  private changedInputValue;
  protected handleInputChange(): void;
  private numberValidation;
  private toggle;
  private handleKeyDown;
  private handler;
  changeCountry(code: any, isoCode: any, flag: any): Promise<void>;
  private setFocusWrapper;
  private removeFocusWrapper;
  private keyPressWrapper;
  private checkValidity;
  private renderIcon;
  private renderLabel;
  private renderMessage;
  render(): HTMLElement;
}
