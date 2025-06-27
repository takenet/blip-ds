import { EventEmitter } from '../../stencil-public-runtime';
export type TypeOption = 'checkbox' | 'default';
export declare class SelectOption {
    private nativeInput?;
    private element;
    value: any;
    /**
     * The text value of the option.
     */
    selected?: boolean;
    /**
     * If `true`, the user cannot interact with the select option.
     */
    disabled?: boolean;
    /**
     * Add state danger on input, use for use feedback.
     */
    invisible?: boolean;
    /**
     * Add state danger on input, use for use feedback.
     */
    danger?: boolean;
    /**
     *  Quantity Description on option value, this item is locate to rigth in component.
     */
    bulkOption?: string;
    /**
     *  Alignment of input-left slot. The value need to be one of the values used on flexbox align-self property.
     */
    slotAlign?: string;
    /**
     *  If set, a title will be shown under the text
     */
    titleText: string;
    /**
     *  If set, a text will be displayed on the right side of the option label
     */
    status?: string;
    /**
     * Type Option. Used toselect type of item list.
     */
    typeOption?: TypeOption;
    /**
     * If `true`, the checkbox is selected.
     */
    checked: boolean;
    /**
     * Data test is the prop to specifically test the component action object.
     */
    dataTest?: string;
    optionSelected: EventEmitter;
    optionChecked: EventEmitter;
    protected changeSelectionType(): void;
    toggle(): Promise<void>;
    toMark(): Promise<void>;
    markOff(): Promise<void>;
    private refNativeInput;
    private checkedCurrent;
    private onClickSelectOption;
    private optionHandle;
    private attachOptionKeyboardListeners;
    render(): HTMLElement;
}
