import { EventEmitter } from '../../stencil-public-runtime';
import { UaiControlSize } from '../input/input-interface';
import { UaiAutocompleteChange, UaiAutocompleteLanguage, UaiAutocompleteMultiselectedChange, UaiAutocompleteOption, UaiAutocompleteOptionsPosition, UaiAutocompleteSelectedChange, UaiAutocompleteSelectionType } from './uai-autocomplete-interface';
export type UaiAutocompleteSize = UaiControlSize;
/**
 * Field to choose from a long list by typing to search it. With selectionType "single" (default) the person picks one
 * option and the field shows its label; with "multiple" the options are checkboxes and the field shows how many are
 * checked. It takes part in native forms: give it a name to submit the value (each checked value in a multiple
 * choice). Use it for lists that are too long to scan, such as people, teams or cities. Pair with a visible label.
 * Avoid it for short lists without search (use uai-select) or for free text (use uai-input with suggestions).
 * Wrap the app in UaiThemeProvider.
 *
 * @part input-container - The field box with border, icon, the search input and the buttons.
 * @part input - The native text input used to search.
 * @part input__message - The helper, error or success message below the field.
 * @part clear-button - The button that clears the choice.
 * @part list - The floating list of options.
 * @part option - Each option in the list.
 */
export declare class UaiAutocomplete {
    el: HTMLElement;
    internals: ElementInternals;
    isOpen: boolean;
    isFocused: boolean;
    /** The text typed to search, or null while the field shows the choice. */
    term: string | null;
    activeIndex: number;
    checkedValues: string[];
    validationDanger: boolean;
    disabledByForm: boolean;
    private nativeInput?;
    private control?;
    private list?;
    private overlay?;
    private formControl?;
    private defaultValue;
    private defaultChecked;
    private readonly inputId;
    /** Name of the value in the submitted form data. Without it, the field is not submitted. */
    name?: string;
    /**
     * The options, as an array of { value, label, icon?, disabled?, checked? } or, in HTML, a JSON array
     * (options='[{"value": "sp", "label": "São Paulo"}]'). With selectionType "multiple", checked marks the options
     * checked: change the array to control them.
     */
    options?: string | UaiAutocompleteOption[];
    /**
     * Chosen value, with selectionType "single". Use it to preselect or control the field; pair with uaiChange. Typing
     * only searches: the value changes when the person picks or clears.
     */
    value?: string | null;
    /**
     * One option or many. Can be one of: 'single' (default), 'multiple'. With 'multiple', options are checkboxes and
     * uaiMultiselectedChange tells the checked ones.
     */
    selectionType?: UaiAutocompleteSelectionType;
    /** Title shown above the options of a multiple choice. */
    selectionTitle?: string;
    /** With selectionType "multiple": if true (default), the first row checks or unchecks all options. */
    selectedAll?: boolean;
    /** Label shown above the field. Without a visible label, set aria-label. */
    label?: string;
    /** Text shown while the field is empty, such as "Buscar pessoa". Do not use it as the label. */
    placeholder?: string;
    /** UaiIcon name shown before the text, for example "search". */
    icon?: string;
    /** Height of the field. Can be one of: 'short', 'medium' (default). */
    size?: UaiAutocompleteSize;
    /** Side of the list. Can be one of: 'auto' (default, where there is room), 'top', 'bottom'. */
    optionsPosition?: UaiAutocompleteOptionsPosition;
    /** If true, the clear button shows only while the field has the focus. */
    clearIconOnFocus?: boolean;
    /** If true, the list shows that the options are loading. Pair with uaiInput to search on a server. */
    loading?: boolean;
    /** Language of the default texts. Can be one of: 'pt_BR' (default), 'en_US', 'es_ES'. */
    language?: UaiAutocompleteLanguage;
    /** If true, the form is invalid while nothing is chosen. Pair with requiredErrorMessage. */
    required?: boolean;
    /** Message shown when required and nothing is chosen. Without it, the default text of the language is shown. */
    requiredErrorMessage?: string;
    /** If true, the field cannot be used and is left out of the form data. */
    disabled?: boolean;
    /** If true, shows the error state and errorMessage. Has priority over success. */
    danger?: boolean;
    /** If true, shows the success state and successMessage. */
    success?: boolean;
    /** Message below the field that helps to fill it. */
    helperMessage?: string;
    /** Message below the field while danger is true. */
    errorMessage?: string;
    /** Message below the field while success is true. */
    successMessage?: string;
    /** Accessible name of the field when there is no visible label. */
    ariaLabel: string;
    /** Data test id, set on the native input. */
    dataTest?: string;
    /**
     * @deprecated Options have only a label, which the search always uses. Has no effect.
     */
    searchOnlyTitle?: boolean;
    /** Emitted when the chosen value changes, by picking or clearing (selectionType "single"). detail: { value }. */
    uaiChange: EventEmitter<UaiAutocompleteChange>;
    /** Emitted when the person picks an option (selectionType "single"). detail: { value, label }. */
    uaiSelectedChange: EventEmitter<UaiAutocompleteSelectedChange>;
    /** Emitted when the checked options change (selectionType "multiple"). detail: { value } with the checked options. */
    uaiMultiselectedChange: EventEmitter<UaiAutocompleteMultiselectedChange>;
    /** Emitted on every keystroke in the search with the native InputEvent. */
    uaiInput: EventEmitter<InputEvent>;
    /** Emitted when the choice is cleared with the clear button. detail: { value: '' }. */
    uaiCancel: EventEmitter<UaiAutocompleteChange>;
    /** Emitted when the field receives focus. */
    uaiFocus: EventEmitter<void>;
    /** Emitted when the field loses focus. */
    uaiBlur: EventEmitter<void>;
    /** Moves the focus to the field. */
    setFocus(): Promise<void>;
    /** Opens the list. */
    open(): Promise<void>;
    /** Closes the list. */
    close(): Promise<void>;
    /** Unchecks every option of a multiple choice, or clears the choice of a single one. */
    cleanMultipleSelection(): Promise<void>;
    protected optionsChanged(): void;
    protected valueChanged(): void;
    protected onInvalid(): void;
    protected positionChanged(): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    componentDidRender(): void;
    disconnectedCallback(): void;
    formResetCallback(): void;
    formDisabledCallback(disabled: boolean): void;
    formStateRestoreCallback(state: string | FormData | null): void;
    private get items();
    private get filtered();
    private get rows();
    private get isMultiple();
    private get languageValue();
    private get terms();
    private get sizeValue();
    private get side();
    private get isDisabled();
    private get chosen();
    private get checkedOptions();
    private get hasChoice();
    private get summary();
    private formValue;
    private syncFormValue;
    private validityFlags;
    private syncValidity;
    private showValidation;
    private firstEnabled;
    private openList;
    private closeList;
    private endSearch;
    private onOverlayClose;
    private choose;
    private setChecked;
    private toggleAll;
    private pick;
    private clearChoice;
    private moveActive;
    private onInput;
    private onKeyDown;
    private onFocus;
    private onBlur;
    private onControlClick;
    private onClear;
    private optionId;
    private renderRows;
    render(): any;
}
