import { EventEmitter } from '../../stencil-public-runtime';
export declare class Checkbox {
    private nativeInput?;
    checkBoxId?: string;
    refer: string;
    label: string;
    /**
     * The name of the control, which is submitted with the form data.
     */
    name: string;
    /**
     * If `true`, the checkbox is selected.
     */
    checked: boolean;
    /**
     * If `true`, the checkbox is in an indeterminate state.
     * This is used when the checkbox is a parent of a list of checkboxes
     * and some (but not all) of the child checkboxes are selected.
     * Clicking when indeterminate will set the checkbox to checked.
     */
    indeterminate: boolean;
    /**
     * If `true`, the user cannot interact with the checkbox.
     */
    disabled: boolean;
    /**
     * Data test is the prop to specifically test the component action object.
     */
    dataTest?: string;
    connectedCallback(): void;
    /**
     * Emitted when the value has changed.
     */
    bdsChange: EventEmitter;
    /**
     * Emitted when the input has changed.
     */
    bdsInput: EventEmitter<KeyboardEvent>;
    getInputElement(): Promise<HTMLInputElement>;
    getValue(): Promise<boolean>;
    toggle(): Promise<void>;
    private onClick;
    private refNativeInput;
    private getStyleState;
    private handleKeyDown;
    private getIconName;
    render(): HTMLElement;
}
