import { EventEmitter } from '../../stencil-public-runtime';
/**
 * Radio option for one choice in a mutually exclusive group. Pair radios with a labelled UaiRadioGroup.
 * Wrap the app in UaiThemeProvider.
 *
 * @slot - Additional visible label content.
 * @part label - The label and control layout.
 * @part control - The visual radio control.
 * @part input - The native radio input.
 */
export declare class UaiRadio {
    el: HTMLElement;
    internals: ElementInternals;
    groupTabIndex: number;
    groupDisabled: boolean;
    disabledByForm: boolean;
    private nativeInput?;
    private formControl?;
    private defaultValue;
    private readonly generatedId;
    /**
     * ID applied to the native radio. Kept for compatibility with bds-radio.
     */
    refer?: string;
    /**
     * Visible label for the radio.
     */
    label?: string;
    /**
     * Control size. Use standard by default; pair with equally sized selection controls.
     * Avoid changing label typography to compensate for the control size.
     */
    size: 'short' | 'standard' | 'tall';
    /**
     * Value submitted when this radio is selected.
     */
    value: string;
    /**
     * Name used in submitted form data when the radio is not inside a UaiRadioGroup.
     */
    name?: string;
    /**
     * If true, the radio is selected.
     */
    checked: boolean;
    /**
     * If true, the user cannot interact with the radio.
     */
    disabled: boolean;
    /**
     * Accessible name used when no visible label or slotted content is provided.
     */
    ariaLabel: string;
    /**
     * Value of the data-test attribute on the native radio.
     */
    dataTest?: string;
    /**
     * Emitted whenever checked changes. detail: { checked }.
     */
    uaiChange: EventEmitter<{
        checked: boolean;
    }>;
    /**
     * Emitted once when the radio is activated, including reselecting it. detail: { checked }.
     */
    uaiClickChange: EventEmitter<{
        checked: boolean;
    }>;
    /**
     * Returns the native radio input.
     */
    getInputElement(): Promise<HTMLInputElement>;
    /**
     * Returns whether the radio is selected.
     */
    getValue(): Promise<boolean>;
    /**
     * Moves focus to the native radio input.
     */
    setFocus(): Promise<void>;
    /**
     * Sets this option's position in the group's tab sequence.
     */
    setTabIndex(value: number): Promise<void>;
    /**
     * Applies the disabled state inherited from a UaiRadioGroup.
     */
    setGroupDisabled(value: boolean): Promise<void>;
    /**
     * Selects this option from a user-driven group action.
     */
    activate(): Promise<void>;
    protected checkedChanged(value: boolean): void;
    protected valueChanged(): void;
    componentWillLoad(): void;
    componentDidRender(): void;
    formResetCallback(): void;
    formDisabledCallback(disabled: boolean): void;
    formStateRestoreCallback(state: string | null): void;
    private get effectiveDisabled();
    private get isGrouped();
    private get inputId();
    private get formOwner();
    private deselectStandalonePeers;
    private syncNativeState;
    private syncFormValue;
    private onClick;
    private onKeyDown;
    render(): any;
}
