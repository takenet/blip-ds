import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import { ActionType, VariantType, ButtonActionType, CreateToastType, PositionType } from './toast-interface';
export declare class BdsToast implements ComponentInterface {
    el: HTMLBdsToastElement;
    /**
     * used for add the icon. Uses the bds-icon component.
     */
    icon?: string;
    /**
     * ActionType. Defines if the button should have a button or an icon. Can be one of:
     * 'icon', 'button';
     */
    actionType: ActionType;
    /**
     * Variant. Defines the color of the toast. Can be one of:
     * 'system', 'error', 'success', 'warning', 'undo', 'redo';
     */
    variant: VariantType;
    /**
     * The title of the component:
     */
    toastTitle: string;
    /**
     * The text content of the component:
     */
    toastText: string;
    /**
     * If the action type is button, this will be the text of the button:
     */
    buttonText: string;
    /**
     * Time to close the toast in seconds
     * 0 = never close automatically (default value)
     */
    duration: number;
    /**
     * Define an action to the button toast. Can be one of:
     * 'close', 'custom';
     * if the action type is set to close, the button will close automatically.
     * if the action type is set to custom, a function need to be passed when the toastButtonClick is emitted.
     */
    buttonAction: ButtonActionType;
    /**
     * Controls the open event of the component:
     */
    show: boolean;
    /**
     * Controls the hide event of the component:
     */
    hide: boolean;
    /**
     * The toast position on the screen. Can be one of:
     * 'top-right', 'top-left', 'bottom-right', 'bottom-left' (default value);
     */
    position: PositionType;
    /**
     * Data test is the prop to specifically test the component action object.
     * dtButtonAction is the data-test to button action.
     */
    dtButtonAction?: string;
    /**
     * Data test is the prop to specifically test the component action object.
     * dtButtonClose is the data-test to button close.
     */
    dtButtonClose?: string;
    /**
     * Event used to execute some action when the action button on the toast is clicked
     */
    toastButtonClick: EventEmitter;
    /**
     * Sends an event to be used when creating an action when clicking the toast button
     */
    private _buttonClickHandler;
    private _keyPressHandler;
    /**
     * Can be used outside to open the toast
     */
    create({ actionType, buttonAction, buttonText, icon, toastText, toastTitle, variant, duration, }: CreateToastType): Promise<void>;
    /**
     * Can be used outside the component to close the toast
     */
    close(): Promise<void>;
    private mapIconName;
    render(): any;
}
