import { EventEmitter } from '../../../stencil-public-runtime';
import { Option, SelectChangeEvent, SelectOptionsPositionType } from '../select-interface';
import { InputChipsTypes } from '../../input-chips/input-chips-interface';
export declare class SelectChips {
    private nativeInput?;
    private dropElement?;
    private iconDropElement?;
    private positionHeightDrop?;
    internalOptions: Option[];
    el: HTMLElement;
    isOpen?: boolean;
    intoView?: HTMLElement;
    selectedOptions: {
        label: string;
        value: any;
    }[];
    /**
     * Used to set the danger behavior by the internal validators
     */
    validationDanger?: boolean;
    /**
     * Conditions the element to say whether it is pressed or not, to add styles.
     */
    isPressed?: boolean;
    /**
     * Used to set the error message setted by the internal validators
     */
    validationMesage?: string;
    internalChips: string[];
    selectedOption: number;
    /**
     * The options of the select
     * Should be passed this way:
     * options='[{"value": "Cat", "label": "Meow"}, {"value": "Dog", "label": "Woof"}]'
     * Options can also be passed as child by using bds-select-option component, but passing as a child you may have some compatibility problems with Angular.
     */
    options?: string | Option[];
    /**
     * The chips on the component
     * Should be passed this way:
     * chips='["chip1", "chip2"]'
     */
    chips: string | string[];
    /**
     * Used for add prefix on new option select.
     */
    newPrefix?: string;
    /**
     * the value of the select.
     */
    value?: string | null;
    /**
     * Add state danger on input, use for use feedback.
     */
    danger?: boolean;
    /**
     * Add state success on input, use for use feedback.
     */
    success?: boolean;
    /**
     * Set maximum length value for the chip content
     */
    maxlength?: number;
    /**
     * Indicated to pass an feedback to user.
     */
    errorMessage?: string;
    /**
     * Disabled input.
     */
    disabled?: boolean;
    /**
     *  label in input, with he the input size increases.
     */
    label?: string;
    /**
     * used for add icon in input left. Uses the bds-icon component.
     */
    icon?: string;
    /**
     * Do not accept duplicate chip elements.
     */
    duplicated?: boolean;
    /**
     *  Specify if is possible to create a new tag that is not on the options.
     */
    canAddNew?: boolean;
    /**
     *  Specify if is possible to create a new tag that is not on the options.
     */
    notFoundMessage?: string;
    /**
     * Defining the type is important so that it is possible to carry out validations. Can be one of:
     * 'text' and 'email;
     */
    type: InputChipsTypes;
    /**
     * The delimiter is used to add multiple chips in the same string.
     */
    delimiters?: RegExp;
    /**
     * If `true`, the user cannot modify the value.
     */
    disableSubmit: boolean;
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
     * Set the placement of the options menu. Can be 'bottom' or 'top'.
     */
    optionsPosition?: SelectOptionsPositionType;
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
     * Emitted when the value has changed.
     */
    bdsChange: EventEmitter<SelectChangeEvent>;
    /**
     * Emitted when the selection is cancelled.
     */
    bdsCancel: EventEmitter<void>;
    /**
     * Emitted when the select loses focus.
     */
    bdsFocus: EventEmitter<void>;
    /**
     * Emitted when the select loses focus.
     */
    bdsBlur: EventEmitter<void>;
    /**
     * Emitted when the chip has added.
     */
    bdsChangeChips: EventEmitter;
    /**
     * Emitted when the chip has added.
     */
    bdsSelectChipsInput: EventEmitter;
    /**
     * Emitted when the chip has added.
     */
    bdsSubmit: EventEmitter;
    protected isOpenChanged(isOpen: boolean): void;
    handleWindow(ev: Event): void;
    protected optionsChanged(): void;
    /**
     * Call change event before alter chips values.
     */
    protected valueChanged(): void;
    protected internalValueChanged(): void;
    private validValueChip;
    /**
     * Return the validity of the input chips.
     */
    isValid(): Promise<boolean>;
    /**
     * Return the chips
     */
    getChips(): Promise<string[]>;
    /**
     * Clear all chips
     */
    clear(): Promise<void>;
    add(value: string): Promise<void>;
    setFocus(): Promise<void>;
    removeFocus(): Promise<void>;
    componentWillLoad(): void;
    componentDidLoad(): Promise<void>;
    private setDefaultPlacement;
    private validatePositionDrop;
    connectedCallback(): Promise<void>;
    private get childOptionsEnabled();
    private get childOptions();
    private handleChangeChipsValue;
    private filterOptions;
    private resetFilterOptions;
    private refDropdown;
    private refIconDrop;
    private existsChip;
    private toggle;
    private handler;
    private handlerNewOption;
    private enableCreateOption;
    private addChip;
    private getText;
    private getTextFromOption;
    private setFocusWrapper;
    private removeFocusWrapper;
    private validateChips;
    private onClickWrapper;
    private onFocus;
    private handleOnBlur;
    private onInput;
    private keyPressWrapper;
    private verifyAndSubstituteDelimiters;
    private handleDelimiters;
    private handleChange;
    private changedInputValue;
    private clearInputValues;
    private setChip;
    private validateChip;
    private removeLastChip;
    private removeChip;
    private renderChips;
    private renderIcon;
    private renderLabel;
    private renderMessage;
    private generateKey;
    render(): any;
}
