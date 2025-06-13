import { EventEmitter } from '../../stencil-public-runtime';
export type collapses = 'single' | 'multiple';
export declare class NavTree {
    private itemsGroup?;
    private element;
    isOpenAftAnimation?: boolean;
    navTreeChild?: any;
    numberElement?: number;
    /**
     * Focus Selected. Used to add title in header accordion.
     */
    collapse?: collapses;
    /**
     * A prop for make the nav open.
     */
    isOpen?: boolean;
    /**
     * Icon. Used to add icon in list item.
     */
    icon?: string;
    /**
     * Text. Used to insert a text in the display item.
     */
    text: string;
    /**
     * SecondaryText. Used to insert a secondaryText in the display item.
     */
    secondaryText?: string;
    /**
     * Data test is the prop to specifically test the component action object.
     */
    dataTest?: string;
    /**
     * Loading state. Indicates if the component is in a loading state.
     */
    loading?: boolean;
    /**
     * Disable state. Indicates if the component is disabled.
     */
    disable?: boolean;
    /**
     * When de open or close of component change, the event are dispache.
     */
    bdsToogleChange: EventEmitter;
    toggle(): Promise<void>;
    reciveNumber(number: any): Promise<void>;
    open(): Promise<void>;
    close(): Promise<void>;
    protected isOpenChanged(value: any): void;
    componentWillLoad(): void;
    private handler;
    private handleKeyDown;
    render(): any;
}
