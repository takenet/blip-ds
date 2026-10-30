import { EventEmitter } from '../../stencil-public-runtime';
/**
 * Coordinates a mutually exclusive set of UaiRadio options. Provide an accessible group name with
 * aria-label or aria-labelledby. The group owns the submitted name and value.
 *
 * @slot - UaiRadio options, optionally wrapped by layout elements.
 * @part group - The radiogroup container.
 */
export declare class UaiRadioGroup {
    el: HTMLElement;
    internals: ElementInternals;
    disabledByForm: boolean;
    invalid: boolean;
    private formControl?;
    private validationProxy?;
    private defaultValue;
    private observer?;
    private suppressChangeEvent;
    /**
     * Selected radio value.
     */
    value?: string;
    /**
     * Name used for the selected value in submitted form data.
     */
    name?: string;
    /**
     * If true, a selection is required before form submission.
     */
    required: boolean;
    /**
     * Message announced when required validation fails. Defaults to the browser's localized message.
     */
    requiredErrorMessage?: string;
    /**
     * If true, all options are disabled.
     */
    disabled: boolean;
    /**
     * Accessible name of the radio group. Use this or aria-labelledby.
     */
    ariaLabel: string;
    /**
     * ID references for the accessible name of the radio group.
     */
    ariaLabelledBy?: string;
    /**
     * Emitted whenever the selected value changes. detail: { value }.
     */
    uaiRadioGroupChange: EventEmitter<{
        value?: string;
    }>;
    protected valueChanged(value?: string): void;
    protected disabledChanged(): void;
    protected requiredChanged(): void;
    protected onRadioClickChange(event: CustomEvent<{
        checked: boolean;
    }>): void;
    protected onRadioChange(event: CustomEvent<{
        checked: boolean;
    }>): void;
    private isOwnRadio;
    private isFromNestedGroup;
    protected onInvalid(): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    componentDidRender(): void;
    formResetCallback(): void;
    formDisabledCallback(disabled: boolean): void;
    formStateRestoreCallback(state: string | null): void;
    private get effectiveDisabled();
    private get radioOptions();
    private getEnabledOptions;
    private initializeSelection;
    private syncRadios;
    private syncFormValue;
    private syncValidity;
    private onSlotChange;
    private onKeyDown;
    render(): any;
}
