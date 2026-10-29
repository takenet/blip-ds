import { EventEmitter, ComponentInterface } from '../../stencil-public-runtime';
/** @deprecated Use uai-radio-group for new work. */
export declare class RadioGroup implements ComponentInterface {
    private radioGroupElement?;
    private element;
    /**
     * The value of the selected radio
     */
    value?: string;
    /**
     * Emitted when the value has changed due to a click event.
     */
    bdsRadioGroupChange: EventEmitter<{
        value?: string;
    }>;
    valueChanged(value: string): void;
    componentWillRender(): void;
    private chagedOptions;
    private setSelectedRadio;
    render(): HTMLElement;
}
