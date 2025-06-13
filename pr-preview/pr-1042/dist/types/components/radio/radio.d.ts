import { EventEmitter } from '../../stencil-public-runtime';
export declare class Radio {
    private nativeInput?;
    radioId?: string;
    /**
     * Refer. Field to add refer in radio buttom.
     */
    refer?: string;
    /**
     * label in radio, with he the input size increases.
     */
    label?: string;
    /**
     * The value of the input.
     */
    value: string;
    /**
     * The name of the control, which is submitted with the form data.
     */
    name?: string;
    /**
     * If `true`, the checkbox is selected.
     */
    checked?: boolean;
    /**
     * If `true`, the user cannot interact with the checkbox.
     */
    disabled?: boolean;
    /**
     * Data test is the prop to specifically test the component action object.
     */
    dataTest?: string;
    /**
     * Emitted when the value has changed.
     */
    bdsChange: EventEmitter;
    /**
     * Emitted when the value has changed because of a click event.
     */
    bdsClickChange: EventEmitter;
    protected checkedChanged(isChecked: boolean): void;
    getInputElement(): Promise<HTMLInputElement>;
    getValue(): Promise<boolean>;
    private onClick;
    private refNativeInput;
    connectedCallback(): void;
    private handleClickKey;
    render(): HTMLElement;
}
