import { IllustrationType } from './illustration-interface';
export declare class BdsIllustration {
    private IllustrationContent?;
    /**
     * Specifies the type to use. Can be: 'default'.
     */
    type: IllustrationType;
    /**
     * Specifies the name of illustration. Verify the names on illustration tokens.
     */
    name: string;
    /**
     * Alternative text for the image.
     */
    alt?: string;
    /**
     * Data test is the prop to specifically test the component action object.
     */
    dataTest?: string;
    componentWillLoad(): void;
    /**Function to map the svg and call the "formatSvg" function */
    setIllustrationContent: () => void;
    render(): HTMLElement;
}
