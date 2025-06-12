import { EventEmitter } from '../../stencil-public-runtime';
import { AutocompleteOption, AutocompleteChangeEventDetail, AutocompleteSelectedChangeEventDetail, AutocompleteOptionsPositionType, AutocompleteMultiSelectedChangeEventDetail } from './autocomplete-select-interface';
export type SelectionType = 'single' | 'multiple';
export declare class BdsAutocomplete {
    private checkAllInput?;
    private nativeInput?;
    private dropElement?;
    private iconDropElement?;
    private positionHeightDrop?;
    el: HTMLBdsSelectElement;
    /**
     * Conditions the element to say whether it is pressed or not, to add styles.
     */
    intoView?: HTMLElement;
    isPressed?: boolean;
    isOpen?: boolean;
    text?: string;
    textMultiselect?: string;
    placeholderState?: string;
    internalOptions: AutocompleteOption[];
    cloneOptions: AutocompleteOption[];
    checkedOptions: AutocompleteOption[];
    isFocused?: boolean;
    /**
     * Used to set the danger behavior by the internal validators
     */
    validationDanger?: boolean;
    /**
     * Used to set the error message setted by the internal validators
     */
    validationMesage?: string;
    /**
     * The options of the select
     * Should be passed this way:
     * options='[{"value": "Cat", "label": "Meow"}, {"value": "Dog", "label": "Woof"}]'
     * Options can also be passed as child by using bds-select-option component, but passing as a child you may have some compatibility problems with Angular.
     */
    options?: string | AutocompleteOption[];
    /**
     * the value of the select.
     */
    value?: string | null;
    /**
     * the item selected.
     */
    selected?: HTMLBdsSelectOptionElement | null;
    /**
     * Add state danger on input, use for use feedback.
     */
    danger?: boolean;
    /**
     * Add state success on input, use for use feedback.
     */
    success?: boolean;
    /**
     * Disabled input.
     */
    disabled?: boolean;
    /**
     * Search only the title property
     */
    searchOnlyTitle?: boolean;
    /**
     *  label in input, with he the input size increases.
     */
    label?: string;
    /**
     * used for add icon in input left. Uses the bds-icon component.
     */
    icon?: string;
    /**
     * Placeholder for native input element.
     */
    placeholder?: string;
    /**
     * Indicated to pass a help the user in complex filling.
     */
    helperMessage?: string;
    /**
     * Indicated to pass an feeback to user.
     */
    errorMessage?: string;
    /**
     * Indicated to pass an feeback to user.
     */
    successMessage?: string;
    /**
     * Set the placement of the options menu. Can be 'bottom' or 'top'.
     */
    optionsPosition?: AutocompleteOptionsPositionType;
    /**
     * If true, the X icon will appear only when component is focused.
     */
    clearIconOnFocus?: boolean;
    /**
     * Data test is the prop to specifically test the component action object.
     */
    dataTest?: string;
    /**
     * Is Loading, is the prop to enable that the component is loading.
     */
    loading?: boolean;
    /**
     * Multiselect, Prop to enable multi selections.
     */
    selectionType?: SelectionType;
    /**
     * Selection Title, Prop to enable title to select.
     */
    selectionTitle?: string;
    /**
   * Selection Title, Prop to enable title to select.
   */
    selectedAll?: boolean;
    /**
     * Emitted when the value has changed.
     */
    bdsChange: EventEmitter<AutocompleteChangeEventDetail>;
    /**
     * Emitted when the selected value has changed.
     */
    bdsSelectedChange: EventEmitter<AutocompleteSelectedChangeEventDetail>;
    /**
     * Emitted when the selected value has changed.
     */
    bdsMultiselectedChange: EventEmitter<AutocompleteMultiSelectedChangeEventDetail>;
    /**
     * Emitted when the input has changed.
     */
    bdsInput: EventEmitter<KeyboardEvent>;
    /**
     * Emitted when the selection is cancelled.
     */
    bdsCancel: EventEmitter<AutocompleteChangeEventDetail>;
    /**
     * Emitted when the select loses focus.
     */
    bdsFocus: EventEmitter<void>;
    /**
     * Emitted when the select loses focus.
     */
    bdsBlur: EventEmitter<void>;
    protected isOpenChanged(isOpen: boolean): void;
    itemSelectedChanged(): void;
    protected valueChanged(): void;
    handleWindow(ev: Event): void;
    protected changeCheckedOptions(): void;
    parseOptions(): void;
    protected changeSelectionType(): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    private setDefaultPlacement;
    private validatePositionDrop;
    private refDropdown;
    private refIconDrop;
    private refCheckAllInput;
    private get childOptions();
    private get childOptionSelected();
    private onFocus;
    private onFocusout;
    private onBlur;
    private onClickWrapper;
    private toggle;
    private getTextFromOption;
    private getText;
    private getTextMultiselect;
    private handlerMultiselect;
    private handleCheckAll;
    private updateListChecked;
    private handler;
    private keyPressWrapper;
    private cleanInputSelection;
    cleanMultipleSelection(): Promise<void>;
    private changedInputValue;
    private setTimeoutFilter;
    private filterOptions;
    private resetFilterOptions;
    private getSelectedValue;
    private renderIcon;
    private renderLabel;
    private renderMessage;
    render(): HTMLElement;
}
