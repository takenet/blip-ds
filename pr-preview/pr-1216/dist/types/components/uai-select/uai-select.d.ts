import { EventEmitter } from '../../stencil-public-runtime';
import { UaiControlSize } from '../input/input-interface';
export type UaiSelectSize = UaiControlSize;
export type UaiSelectValue = string | number;
export interface UaiSelectOptionData {
    value: UaiSelectValue;
    label: string;
    icon?: string;
    disabled?: boolean;
}
export interface UaiSelectChange {
    value: UaiSelectValue | null;
    label: string | null;
}
/**
 * Field to choose one option from a list. Use it for 4 to about 15 mutually exclusive choices that do not fit as
 * radios: the field shows the chosen label and opens a listbox below or above it. It takes part in native forms:
 * give it a name to submit the chosen value. Pair with a visible label and UaiButton in forms. Avoid it for fewer than
 * 4 options, multiple choice, or searching a long list. Wrap the app in UaiThemeProvider.
 *
 * @slot - UaiSelectOption elements, when the options are written in markup instead of the options prop.
 * @part select-container - The field box with border, icon, chosen label and arrow.
 * @part select-button - The button that shows the chosen label and opens the list.
 * @part select-message - The helper, error or success message below the field.
 * @part select-list - The floating list of options.
 * @part select-option - Each option in the list.
 */
export declare class UaiSelect {
    el: HTMLElement;
    internals: ElementInternals;
    isOpen: boolean;
    activeIndex: number;
    slottedOptions: UaiSelectOptionData[];
    validationDanger: boolean;
    disabledByForm: boolean;
    private button?;
    private list?;
    private overlay?;
    private formControl?;
    private defaultValue;
    private observer?;
    private readonly selectId;
    /** Name of the value in the submitted form data. Without it the field is not submitted. */
    name?: string;
    /** Chosen value. Use it to preselect or control the field; pair with the uaiChange event; avoid values missing from the options. */
    value?: UaiSelectValue | null;
    /** Options as an array of { value, label, icon?, disabled? }. Use for dynamic lists; takes precedence over uai-select-option children; avoid JSON strings. */
    options?: UaiSelectOptionData[];
    /** Visible label above the field. Use a short noun; pair with helperMessage; avoid it only when aria-label names the field. */
    label?: string;
    /** Text shown while no option is chosen. Use a short prompt such as "Selecione"; avoid repeating the label. */
    placeholder?: string;
    /** Optional UAI icon name before the chosen label. Use to reinforce the topic; avoid decorative icons. */
    icon?: string;
    /** Field height. Use medium by default and short in dense areas such as table toolbars and pagination. */
    size?: UaiSelectSize;
    /** Requires a chosen option before the form is valid. Use with a visible label; pair with requiredErrorMessage. */
    required?: boolean;
    /** Prevents opening and changing the value. Use when the choice is unavailable; pair with explanatory text elsewhere. */
    disabled?: boolean;
    /** Error state. Use together with errorMessage; avoid color alone to explain the problem. */
    danger?: boolean;
    /** Success state. Use after a valid choice; pair with successMessage. */
    success?: boolean;
    /** Helper text below the field. Use for format or context; avoid long text. */
    helperMessage?: string;
    /** Error text below the field while danger is set. Use to say how to fix the choice. */
    errorMessage?: string;
    /** Success text below the field while success is set. */
    successMessage?: string;
    /** Error text when required and nothing is chosen. Use a short instruction. */
    requiredErrorMessage?: string;
    /** Accessible name when there is no visible label. Use a short noun; avoid repeating the placeholder. */
    ariaLabel: string;
    /** Test selector on the button. Use for automation; pair with semantic queries. Avoid styling by it. */
    dataTest?: string;
    /** Emitted when the person chooses an option. detail: { value, label }. */
    uaiChange: EventEmitter<UaiSelectChange>;
    /** Emitted when the list closes with Escape or a click outside, without choosing. */
    uaiCancel: EventEmitter<void>;
    /** Emitted when the button receives focus. */
    uaiFocus: EventEmitter<void>;
    /** Emitted when the button loses focus. */
    uaiBlur: EventEmitter<void>;
    /** Opens the list. Use for imperative control; pair with close; avoid calling it while disabled. */
    open(): Promise<void>;
    /** Closes the list. Use for imperative control; pair with open. */
    close(): Promise<void>;
    valueChanged(): void;
    requiredChanged(): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    componentDidRender(): void;
    disconnectedCallback(): void;
    formResetCallback(): void;
    formDisabledCallback(disabled: boolean): void;
    formStateRestoreCallback(state: string | null): void;
    private readSlotted;
    private get items();
    private get sizeValue();
    private get isDisabled();
    private get selectedIndex();
    private syncFormValue;
    private validityFlags;
    private syncValidity;
    private showValidation;
    private activeOption;
    private firstEnabled;
    private openList;
    private closeList;
    private onOverlayClose;
    private select;
    private moveActive;
    private typeAhead;
    private onButtonClick;
    private onButtonKeyDown;
    private onListKeyDown;
    private onFocus;
    private onBlur;
    private renderOptions;
    render(): any;
}
