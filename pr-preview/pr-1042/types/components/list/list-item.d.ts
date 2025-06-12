import { EventEmitter } from '../../stencil-public-runtime';
import { TypeList } from './list';
export type ItemSize = 'tall' | 'standard' | 'short';
export declare class ListItem {
    private hasActionAreaSlot;
    private hasContentAreaSlot;
    hostElement: HTMLElement;
    internalChips: string[];
    internalActionsButtons: string[];
    checked?: boolean;
    /**
     * Typelis. Used toselect type of item list.
     */
    typeList?: TypeList;
    /**
     * AvatarName. Used to enter the avatar name.
     */
    avatarName?: string;
    /**
     * AvatarThumbnail. Used to insert the avatar photo.
     */
    avatarThumbnail?: string;
    /**
     * Icon. Used to add icon in list item.
     */
    icon?: string;
    /**
     * Value. Used to insert a value in list item.
     */
    value: string;
    /**
     * Text. Used to insert a text in the display item.
     */
    text?: string;
    /**
     * SecondaryText. Used to insert a secondaryText in the display item.
     */
    secondaryText?: string;
    /**
     * The chips on the component
     * Should be passed this way:
     * chips='["chip1", "chip2"]'
     */
    chips: string | string[];
    /**
     * The actions buttons on the component
     * Should be passed this way:
     * actions-buttons='["copy", "settings-general", "more-options-horizontal"]'
     */
    actionsButtons: string | string[];
    /**
     * Clickable. Used to define if the item is clickable or not.
     */
    clickable?: boolean;
    /**
     * Active. Used to define when the item is highlighted.
     */
    active?: boolean;
    /**
     * Enable rounded border on item
     */
    borderRadius?: boolean;
    /**
     * Size. Entered as one of the size. Can be one of:
     * 'tall', 'standard', 'short';
     */
    size?: ItemSize;
    /**
     * Data test is the prop to specifically test the component action object.
     */
    dataTest?: string;
    /**
     * Emitted when the value has changed because of a click event.
     */
    bdsChecked: EventEmitter;
    /**
     * Emitted when click in someone actions buttom insert in data.
     */
    bdsClickActionButtom: EventEmitter;
    componentWillLoad(): void;
    protected checkedChanged(isChecked: boolean): void;
    protected chipsChanged(): void;
    protected actionsButtonsChanged(): void;
    private handler;
    private clickActionButtons;
    private renderChips;
    private renderActionsButtons;
    render(): any;
}
