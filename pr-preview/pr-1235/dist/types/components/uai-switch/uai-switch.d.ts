import { EventEmitter } from '../../stencil-public-runtime';
export type UaiSwitchSize = 'tall' | 'standard' | 'short';
/**
 * Binary setting applied immediately. Use an accessible name; pair with UaiThemeProvider.
 * Avoid switches for submitting a form or choosing mutually exclusive options.
 *
 * @part control - The native switch input.
 * @part track - The visual track.
 * @part handle - The moving handle.
 * @part label - The label and control layout.
 */
export declare class UaiSwitch {
    el: HTMLElement;
    internals: ElementInternals;
    disabledByForm: boolean;
    private nativeInput?;
    private formControl?;
    private defaultChecked;
    private readonly generatedId;
    /** Native input ID. Use for integration; pair with getInputElement. Avoid duplicate IDs. */
    refer?: string;
    /** Visible setting name. Use with the control; pair with checked. Avoid unnamed settings. */
    label?: string;
    /** Relative control size. Use standard by default; pair with adjacent controls. Avoid custom dimensions. */
    size: UaiSwitchSize;
    /** Submitted field name. Use inside forms; pair with value. Avoid duplicate names for unrelated settings. */
    name?: string;
    /** Current on/off state. Use for controlled settings; pair with uaiChange. Avoid treating it as an action. */
    checked: boolean;
    /** Prevents interaction. Use for unavailable settings; pair with explanatory text. Avoid hiding restrictions. */
    disabled: boolean;
    /** Submitted value when on. Use with name; pair with form association. Avoid depending on unchecked submission. */
    value: string;
    /** Accessible setting name when no visible label is provided. Avoid unnamed switches. */
    ariaLabel: string;
    /** Test selector on the native input. Use for automation; pair with semantic queries. Avoid styling by it. */
    dataTest?: string;
    /** State change, including programmatic changes. Use detail.checked; pair with checked. Avoid duplicate handlers. */
    uaiChange: EventEmitter<{
        checked: boolean;
    }>;
    /** Returns the native input. Use for focus; pair with accessible naming. Avoid modifying its visual styles. */
    getInputElement(): Promise<HTMLInputElement>;
    /** Returns the on/off state. Use for imperative consumers; pair with uaiChange. Avoid polling. */
    getValue(): Promise<boolean>;
    protected checkedChanged(): void;
    protected valueChanged(): void;
    componentWillLoad(): void;
    componentDidRender(): void;
    formResetCallback(): void;
    formDisabledCallback(disabled: boolean): void;
    formStateRestoreCallback(state: string | null): void;
    private syncFormValue;
    private get effectiveDisabled();
    private onChange;
    private onKeyDown;
    render(): any;
}
