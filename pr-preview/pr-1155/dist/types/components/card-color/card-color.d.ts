export declare class CardColor {
    showMessage: boolean;
    /**
     * Specifies name color, use Figma docs in Blip DS.
     */
    name: string;
    /**
     * Specifies HEX color, use Figma docs in Blip DS.
     */
    hex?: string;
    /**
     * Specifies if the hex is a linear gradient
     */
    gradient: boolean;
    /**
     * Specifies variabel sass color, _variables.scss.
     */
    variable: string;
    /**
     * If true, the text will be white
     */
    lightText: boolean;
    handleCopyVariable: (variable: any) => void;
    render(): HTMLDivElement;
}
