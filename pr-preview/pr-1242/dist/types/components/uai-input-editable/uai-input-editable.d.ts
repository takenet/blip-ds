import { EventEmitter } from '../../stencil-public-runtime';
export type UaiInputEditableSize = 'short' | 'standard' | 'tall';
export type UaiInputEditableLanguage = 'pt_BR' | 'en_US' | 'es_ES';
export interface UaiInputEditableEventDetail {
    value: string;
    oldValue: string;
}
/**
 * Value shown as text that the person can edit and confirm. In reading mode it shows the value and an Edit button;
 * in editing mode it shows a field with Save and Cancel. Enter saves, Escape cancels and the focus goes back to Edit.
 * Empty values, values shorter than minlength and values with danger are not saved. It takes part in native forms
 * with the saved value. Use it to rename or adjust an existing value in place, such as a title. Pair with a label
 * that names the value. Avoid it for forms where every field is edited at once (use uai-input). Wrap the app in
 * UaiThemeProvider.
 *
 * @part input-container - The field box, in reading and editing modes.
 * @part input - The native input, in editing mode.
 * @part input__message - The helper, error or success message below the field.
 * @part edit-button - The button that starts editing.
 * @part confirm-button - The button that saves the value.
 * @part cancel-button - The button that discards the changes.
 */
export declare class UaiInputEditable {
    el: HTMLElement;
    internals: ElementInternals;
    isEditing: boolean;
    draft: string;
    validationDanger: boolean;
    disabledByForm: boolean;
    private nativeInput?;
    private editButton?;
    private formControl?;
    private defaultValue;
    private focusTarget;
    private readonly inputId;
    /**
     * Saved value, shown in reading mode and submitted with the form.
     */
    value?: string | null;
    /**
     * Label shown above the field. It also names the Edit button ("Editar <label>").
     */
    label?: string;
    /**
     * Text shown while the value is empty, in both modes.
     */
    placeholder?: string;
    /**
     * Height of the field. Can be one of: 'short', 'standard' (default), 'tall'. 'medium' is the same as 'standard'.
     */
    size?: UaiInputEditableSize | 'medium';
    /**
     * Name of the saved value in the submitted form data. Without name (or inputName), the field is not submitted.
     */
    name?: string;
    /**
     * Name of the saved value in the submitted form data. Same as name, kept from bds-input-editable.
     */
    inputName?: string;
    /**
     * Smallest number of characters to save.
     */
    minlength?: number;
    /**
     * Largest number of characters. Typing stops at the limit.
     */
    maxlength?: number;
    /**
     * If true, shows the error state and errorMessage, and saving is blocked. Has priority over success.
     */
    danger?: boolean;
    /**
     * If true, shows the success state and successMessage.
     */
    success?: boolean;
    /**
     * If true, the value is shown without the Edit button and is left out of the form data.
     */
    disabled?: boolean;
    /**
     * Message below the field that helps to fill it.
     */
    helperMessage?: string;
    /**
     * Message below the field while danger is true.
     */
    errorMessage?: string;
    /**
     * Message below the field while success is true.
     */
    successMessage?: string;
    /**
     * Message shown when saving an empty value. Without it, the default text of the language is shown.
     */
    requiredErrorMessage: string;
    /**
     * Message shown when saving a value shorter than minlength. Without it, the default text is shown.
     */
    minlengthErrorMessage: string;
    /**
     * Language of the default texts. Can be one of: 'pt_BR' (default), 'en_US', 'es_ES'.
     */
    language?: UaiInputEditableLanguage;
    /**
     * Accessible name of the field when there is no visible label.
     */
    ariaLabel: string;
    /**
     * Data test id, set on the native input.
     */
    dataTest?: string;
    /**
     * Data test id, set on the Edit button.
     */
    dtButtonEdit?: string;
    /**
     * Data test id, set on the Cancel button.
     */
    dtButtonClose?: string;
    /**
     * Data test id, set on the Save button.
     */
    dtButtonConfirm?: string;
    /**
     * @deprecated The field takes the width of its container (--uai-input-editable-width). Has no effect.
     */
    expand?: boolean;
    /**
     * Emitted when a value is saved. detail: { value (new), oldValue }.
     */
    uaiInputEditableSave: EventEmitter<UaiInputEditableEventDetail>;
    /**
     * Emitted on every keystroke while editing. detail: { value (being typed), oldValue (saved) }.
     */
    uaiChange: EventEmitter<UaiInputEditableEventDetail>;
    /**
     * Emitted on every keystroke with the native InputEvent.
     */
    uaiInput: EventEmitter<InputEvent>;
    /**
     * Emitted when the editing is cancelled.
     */
    uaiCancel: EventEmitter<void>;
    /**
     * Emitted when the field receives focus while editing.
     */
    uaiFocus: EventEmitter<void>;
    /**
     * Emitted when the field loses focus while editing.
     */
    uaiBlur: EventEmitter<void>;
    /**
     * Starts editing and moves the focus to the field.
     */
    edit(): Promise<void>;
    /**
     * Saves the value being typed. Returns false when it cannot be saved (empty, shorter than minlength or danger).
     */
    save(): Promise<boolean>;
    /**
     * Discards the value being typed and returns to reading mode.
     */
    cancel(): Promise<void>;
    /**
     * Moves the focus to the field while editing, or to the Edit button.
     */
    setFocus(): Promise<void>;
    protected valueChanged(): void;
    protected nameChanged(): void;
    protected expandChanged(): void;
    protected disabledChanged(disabled: boolean): void;
    componentWillLoad(): void;
    componentDidRender(): void;
    formResetCallback(): void;
    formDisabledCallback(disabled: boolean): void;
    formStateRestoreCallback(state: string | null): void;
    private get texts();
    private get sizeValue();
    private get isDisabled();
    private syncFormValue;
    private draftError;
    private startEditing;
    private saveDraft;
    private cancelEditing;
    private onInput;
    private onKeyDown;
    private onFocus;
    private onBlur;
    private renderView;
    private renderEdit;
    render(): any;
}
