import { EventEmitter } from '../../stencil-public-runtime';
import { InputChipsTypes } from './input-chips-interface';
export declare class InputChips {
    private nativeInput?;
    InputSize?: number;
    /**
     * Used to set the danger behavior by the internal validators
     */
    validationDanger?: boolean;
    /**
     * Used to enable or disable input
     */
    inputAvalible?: boolean;
    /**
     * Conditions the element to say whether it is pressed or not, to add styles.
     */
    isPressed?: boolean;
    /**
     * Used to set the error message setted by the internal validators
     */
    validationMesage?: string;
    internalChips: string[];
    /**
     * The chips on the component
     * Should be passed this way:
     * chips='["chip1", "chip2"]'
     */
    chips: string[] | string;
    /**
     * When true, the press enter will be simulated on blur event.
     */
    blurCreation: boolean;
    /**
     * Defining the type is important so that it is possible to carry out validations. Can be one of:
     * 'text' and 'email;
     */
    type: InputChipsTypes;
    /**
     *  label in input, with he the input size increases.
     */
    label?: string;
    /**
     *  Set maximum length value for the chip content
     */
    maxlength?: number;
    /**
     *  Set maximum length value for chips
     */
    maxChipsLength?: number;
    /**
     * used for add icon in input left. Uses the bds-icon component.
     */
    icon?: string;
    /**
     * The delimiter is used to add multiple chips in the same string.
     */
    delimiters?: RegExp;
    /**
     * Indicated to pass an feedback to user.
     */
    errorMessage?: string;
    /**
     * Add state danger on input, use for use feedback.
     */
    danger?: boolean;
    /**
     * Add state success on input, use for use feedback.
     */
    success?: boolean;
    /**
     * The value of the input.
     */
    value?: string | null;
    /**
     * Do not accept duplicate chip elements.
     */
    duplicated?: boolean;
    /**
     * If `true`, the user cannot modify the value.
     */
    disableSubmit: boolean;
    /**
     * Disabled input
     */
    disabled?: boolean;
    /**
     * Indicated to pass a help the user in complex filling.
     */
    helperMessage?: string;
    /**
     * Indicated to pass an feeback to user.
     */
    successMessage?: string;
    /**
     * Prop to insert the name of the input
     */
    inputName?: string;
    /**
     * A tip for the user who can enter no controls.
     */
    placeholder?: string;
    /**
     * Passing true to display a counter of available size, it is necessary to
     * pass another maxlength property.
     */
    counterLength?: boolean;
    /**
     * Prop for set the height of the component.
     */
    height?: string;
    /**
     * Prop for set the max height of the component.
     */
    maxHeight?: string;
    /**
     * Data test is the prop to specifically test the component action object.
     */
    dataTest?: string;
    /**
     * Data test is the prop to specifically test the component action object.
     * dtButtonClose is the data-test to button close.
     */
    dtButtonClose?: string;
    /**
     * Emitted when the chip has added.
     */
    bdsChange: EventEmitter;
    /**
     * Emitted when the chip has added.
     */
    bdsChangeChips: EventEmitter;
    /**
     * Emitted when the chip has added.
     */
    bdsInputChipsFocus: EventEmitter;
    /**
     * Emitted when the chip has added.
     */
    bdsBlur: EventEmitter;
    /**
     * Emitted when the chip has added.
     */
    bdsInputChipsInput: EventEmitter;
    /**
     * Emitted when a maximum value defined by the "max-chips-length" prop is entered
     */
    bdsExtendedQuantityInput: EventEmitter;
    /**
     * Emitted when the chip has added.
     */
    bdsSubmit: EventEmitter;
    /**
     * Call change event before alter chips values.
     */
    protected valueChanged(): void;
    protected internalValueChanged(): void;
    /**
     * Return the validity of the input chips.
     */
    isValid(): Promise<boolean>;
    /**
     * Return the chips
     */
    get(): Promise<string[]>;
    /**
     * Clear all chips
     */
    clear(): Promise<void>;
    add(value: string): Promise<void>;
    setFocus(): Promise<void>;
    removeFocus(): Promise<void>;
    componentDidLoad(): void;
    componentWillLoad(): void;
    private validateChips;
    private onClickWrapper;
    private onFocus;
    private handleOnBlur;
    private onInput;
    private minMaxValidation;
    private getLastChip;
    private keyPressWrapper;
    private handleDelimiters;
    private verifyAndSubstituteDelimiters;
    private handleChange;
    private clearInputValues;
    private setChip;
    private validateChip;
    private removeLastChip;
    private removeChip;
    private renderChips;
    private renderIcon;
    private renderLabel;
    private renderMessage;
    render(): any;
}
