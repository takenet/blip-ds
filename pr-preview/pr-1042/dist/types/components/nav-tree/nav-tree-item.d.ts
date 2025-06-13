import { EventEmitter } from '../../stencil-public-runtime';
export type collapses = 'single' | 'multiple';
export declare class NavTreeItem {
    private navTreeParent?;
    private navTreeChild?;
    private itensElement?;
    private element;
    /**
     * Focus Selected. Used to add title in header accordion.
     */
    collapse?: collapses;
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
     * Active. Used to define when the item is highlighted.
     */
    isOpen?: boolean;
    /**
     * Loading state. Indicates if the component is in a loading state.
     */
    loading?: boolean;
    /**
     * Disable state. Indicates if the component is disabled.
     */
    disable?: boolean;
    /**
     * Data test is the prop to specifically test the component action object.
     */
    dataTest?: string;
    /**
     * When de activation of component change, the event are dispache.
     */
    bdsToogleChange: EventEmitter;
    toggle(): Promise<void>;
    protected isOpenChanged(value: any): void;
    componentWillLoad(): void;
    componentWillRender(): void;
    private handler;
    private handleKeyDown;
    render(): any;
}
