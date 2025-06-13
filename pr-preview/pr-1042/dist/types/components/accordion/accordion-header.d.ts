export declare class AccordionHeader {
    private accordionElement?;
    private element;
    isOpen?: boolean;
    btToggleIsfocus?: boolean;
    numberElement?: number;
    /**
     * Accordion Title. Used to add title in header accordion.
     */
    accordionTitle?: string;
    /**
     * Icon. Used to add icon in header accordion.
     */
    icon?: string;
    /**
     * Avatar Name. Used to add avatar in header accordion.
     */
    avatarName?: string;
    /**
     * Avatar Thumb. Used to add avatar in header accordion.
     */
    avatarThumb?: string;
    /**
     * Data test is the prop to specifically test the component action object.
     */
    dataTest?: string;
    toggle(): Promise<void>;
    open(): Promise<void>;
    close(): Promise<void>;
    componentWillRender(): void;
    private toggleHeader;
    handleKeyDown(event: any): void;
    render(): any;
}
