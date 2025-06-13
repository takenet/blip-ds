import { EventEmitter } from '../../stencil-public-runtime';
export type SwitchSize = 'tall' | 'standard' | 'short';
export declare class Switch {
    private nativeInput?;
    /**
     * Component identifier.
     */
    switchId?: string;
    /**
     * The refer of the control.
     */
    refer: string;
    /**
     * Size. Entered as one of the size. Can be one of:
     * 'tall', 'standard', 'short';
     */
    size?: SwitchSize;
    /**
     * The name of the control, which is submitted with the form data.
     */
    name: string;
    /**
     * If `true`, the switch is selected.
     */
    checked: boolean;
    /**
     * If `true`, the user cannot interact with the switch.
     */
    disabled: boolean;
    /**
     * Data test is the prop to specifically test the component action object.
     */
    dataTest?: string;
    connectedCallback(): void;
    protected checkedChanged(isChecked: boolean): void;
    /**
     * Emitted when the value has changed.
     */
    bdsChange: EventEmitter;
    getInputElement(): Promise<HTMLInputElement>;
    getValue(): Promise<boolean>;
    private onClick;
    private refNativeInput;
    getSizeClass(): string;
    getSizeSliderClass(): string;
    private getStyleState;
    private handleClick;
    render(): HTMLElement;
}
