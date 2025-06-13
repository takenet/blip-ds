import { EventEmitter } from '../../../stencil-public-runtime';
import { Option, SelectChangeEventDetail, SelectOptionsPositionType } from '../select-interface';
export declare class Select {
    private nativeInput?;
    private dropElement?;
    private iconDropElement?;
    private positionHeightDrop?;
    el: HTMLBdsSelectElement;
    intoView?: HTMLElement;
    isOpen?: boolean;
    text?: string;
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
    internalOptions: Option[];
    /**
     * The options of the select
     * Should be passed this way:
     * options='[{"value": "Cat", "label": "Meow"}, {"value": "Dog", "label": "Woof"}]'
     * Options can also be passed as child by using bds-select-option component, but passing as a child you may have some compatibility problems with Angular.
     */
    options?: string | Option[];
    /**
     * the value of the select.
     */
    value?: any | null;
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
     * Emitted when the value has changed.
     */
    bdsChange: EventEmitter<SelectChangeEventDetail>;
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
    optionsPosition?: SelectOptionsPositionType;
    /**
     * Data test is the prop to specifically test the component action object.
     */
    dataTest?: string;
    protected isOpenChanged(isOpen: boolean): void;
    valueChanged(): void;
    handleWindow(ev: Event): void;
    componentWillLoad(): void;
    componentWillRender(): void;
    componentDidLoad(): void;
    private setDefaultPlacement;
    private validatePositionDrop;
    optionsChanged(): void;
    private getValueSelected;
    private updateOptions;
    private get childOptions();
    private get childOptionSelected();
    private refNativeInput;
    private refDropdown;
    private refIconDrop;
    private onClickWrapper;
    private onFocus;
    private onBlur;
    private toggle;
    private getText;
    private handler;
    private keyPressWrapper;
    private renderIcon;
    private renderLabel;
    private renderMessage;
    render(): HTMLElement;
}
