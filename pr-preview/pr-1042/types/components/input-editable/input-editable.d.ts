import { EventEmitter } from '../../stencil-public-runtime';
import { FontSize } from '../typo/typo';
export type SizeInputEditable = 'short' | 'standard' | 'tall';
export interface InputEditableEventDetail {
    value: string;
    oldValue: string;
}
export declare class InputEditable {
    private nativeInput?;
    el: HTMLBdsInputEditableElement;
    /**
     * Value to keep the old value of the input.
     */
    oldValue: string;
    /**
     * Conditions the element to say whether it is pressed or not, to add styles.
     */
    isEditing: boolean;
    /**
     * Used to block the confirm icon.
     */
    isValid: boolean;
    /**
     * Used to validate it is pressed.
     */
    isPressed?: boolean;
    /**
     * Used to validate it is focused.
     */
    isFocused?: boolean;
    /**
     * Used to set the error message setted by the internal validators
     */
    validationMesage?: string;
    /**
     * Used to set the danger behavior by the internal validators
     */
    validationDanger?: boolean;
    /**
     * Set the component size. Can be one of:
     * 'short' | 'standard' | 'tall';
     */
    size?: SizeInputEditable;
    /**
     * Defines whether the component will be expandable
     */
    expand?: boolean;
    /**
     * Data test is the prop to specifically test the component action object.
     */
    dataTest?: string;
    /**
     * Input Name
     */
    inputName?: string;
    /**
     * The value of the input.
     */
    value?: string | null;
    /**
     * Error message when input is required
     */
    requiredErrorMessage: string;
    /**
     * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter.
     */
    minlength?: number;
    /**
     * Error message when the value is lower than the minlength
     */
    minlengthErrorMessage: string;
    /**
     * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter.
     */
    maxlength?: number;
    /**
     * Indicated to pass an feeback to user.
     */
    errorMessage?: string;
    /**
     * Indicated to pass an feeback to user.
     */
    successMessage?: string;
    /**
     * Indicated to pass a help to the user in complex filling.
     */
    helperMessage?: string;
    /**
     * Placeholder for native input element.
     */
    placeholder?: string;
    /**
     * Add state danger on input, use for use feedback. If true avoid save confirmation.
     */
    danger?: boolean;
    /**
     * Add state success on input, use for use feedback.
     */
    success?: boolean;
    /**
     * Data test is the prop to specifically test the component action object.
     * dtButtonEdit is the data-test to button edit.
     */
    dtButtonEdit?: string;
    /**
     * Data test is the prop to specifically test the component action object.
     * dtButtonClose is the data-test to button close.
     */
    dtButtonClose?: string;
    /**
     * Data test is the prop to specifically test the component action object.
     * dtButtonConfirm is the data-test to button confirm.
     */
    dtButtonConfirm?: string;
    /**
     * Emitted when input text confirm.
     */
    bdsInputEditableSave: EventEmitter<InputEditableEventDetail>;
    /**
     * Emitted when the value has changed.
     */
    bdsChange: EventEmitter<InputEditableEventDetail>;
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
    private handleEditing;
    private toggleEditing;
    componentWillLoad(): void;
    private handleSaveText;
    private changedInputValue;
    private onFocus;
    private onBlur;
    private onClickWrapper;
    private onBlurValidations;
    private requiredValidation;
    private lengthValidation;
    private checkValidity;
    private handleKeyDownToggle;
    private handleKeyDownSave;
    getFontSizeClass(): FontSize;
    private getExpand;
    private renderMessage;
    render(): any;
}
