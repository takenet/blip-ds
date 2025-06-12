import { EventEmitter } from '../../stencil-public-runtime';
import { InputAutocapitalize, InputAutoComplete } from '../input/input-interface';
export declare class InputPassword {
    private nativeInput?;
    /**
     * Used to set the danger behavior by the internal validators
     */
    validationDanger?: boolean;
    /**
     * Conditions the element to say whether it is pressed or not, to add styles.
     */
    isPressed?: boolean;
    /**
     * Used to set the error message setted by the internal validators
     */
    validationMesage?: string;
    openEyes?: boolean;
    /**
     * The value of the input.
     */
    value?: string | null;
    /**
     *  label in input, with he the input size increases.
     */
    label?: string;
    /**
     * Input Name
     */
    inputName?: string;
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
     * Add state danger on input, use for use feedback.
     */
    danger?: boolean;
    /**
     * Add state success on input, use for use feedback.
     */
    success?: boolean;
    /**
     * used for add icon in input left. Uses the bds-icon component.
     */
    icon?: string;
    /**
     * Disabled input.
     */
    disabled?: boolean;
    /**
     * Capitalizes every word's second character.
     */
    autoCapitalize?: InputAutocapitalize;
    /**
     * Hint for form autofill feature
     */
    autoComplete?: InputAutoComplete;
    /**
     * A tip for the user who can enter no controls.
     */
    placeholder?: string;
    /**
     * Data test is the prop to specifically test the component action object.
     */
    dataTest?: string;
    /**
     * Emitted when the value has changed.
     */
    bdsInputPasswordChange: EventEmitter;
    /**
     * Emitted when the input has changed.
     */
    bdsInputPasswordInput: EventEmitter<KeyboardEvent>;
    /**
     * Event input onblur.
     */
    bdsInputPasswordBlur: EventEmitter;
    /**
     * Event input focus.
     */
    bdsInputPasswordFocus: EventEmitter;
    /**
     * Event input enter.
     */
    bdsInputPasswordSubmit: EventEmitter;
    /**
     * Event input key down backspace.
     */
    bdsKeyDownBackspace: EventEmitter;
    private refNativeInput;
    private toggleEyePassword;
    private handleKeyDown;
    private getAutoComplete;
    private onClickWrapper;
    protected onChange(): void;
    private onInput;
    private onBlur;
    private onFocus;
    private onSubmit;
    private keyPressWrapper;
    private renderIcon;
    private renderLabel;
    private renderMessage;
    render(): HTMLElement;
}
