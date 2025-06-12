import { EventEmitter } from '../../../stencil-public-runtime';
export declare class BdsTabItem {
    /**
     * Use to set number of tabItem.
     */
    numberElement?: number;
    /**
     * The text to be shown at the Tab item.
     */
    label?: string;
    /**
     * The icon to be shown at the Tab item.
     */
    icon?: string;
    /**
     * The position of the icon at the Tab item ('left', 'right').
     */
    iconPosition?: string;
    /**
     * The theme of the icon at the Tab item ('solid', 'outline', 'emoji', 'logos').
     */
    iconTheme?: string;
    /**
     * The shape of the badge to be shown at the Tab item ('circle', 'square', 'triangle', 'triangle-reverse', 'polygon').
     */
    badge?: boolean;
    /**
     * The shape of the badge to be shown at the Tab item ('circle', 'square', 'triangle', 'triangle-reverse', 'polygon').
     */
    badgeShape?: string;
    /**
     * The color of the badge to be shown at the Tab item.
     */
    badgeColor?: string;
    /**
     * The icon to be shown inside the badge at the Tab item ('system', 'danger', 'warning', 'success', 'neutral')
     */
    badgeIcon?: string;
    /**
     * The animation of the badge to be shown at the Tab item.
     */
    badgeAnimation?: boolean;
    /**
     * The animation of the badge to be shown at the Tab item.
     */
    badgePosition?: string;
    /**
     * The number to be shown inside the badge at the Tab item.
     */
    badgeNumber?: number;
    /**
     * Prop for disable the especific tab.
     */
    disable?: boolean;
    /**
     * Used to open/close the Tab item.
     */
    open?: boolean;
    /**
     * Data test is the prop to specifically test the component action object.
     */
    dataTest?: string;
    reciveNumber(number: any): Promise<void>;
    tabDisabled: EventEmitter;
    disableChanged(): void;
    render(): HTMLElement;
}
