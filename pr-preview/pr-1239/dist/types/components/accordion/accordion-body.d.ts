export declare class AccordionBody {
    private container?;
    isOpen?: boolean;
    isOpenAftAnimation?: boolean;
    heightContainer?: number;
    numberElement?: number;
    hasDivisor?: boolean;
    /**
     * Data test is the prop to specifically test the component action object.
     */
    dataTest?: string;
    toggle(): Promise<void>;
    open(): Promise<void>;
    close(): Promise<void>;
    divisor(valor: any): Promise<void>;
    isOpenChanged(): void;
    private refContainer;
    render(): any;
}
