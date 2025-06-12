import { EventEmitter } from '../../stencil-public-runtime';
import { languages } from './rich-text-interface';
export type positionBar = 'top' | 'bottom';
export declare class RichText {
    private buttonsListElement?;
    private buttonsEditElements?;
    private editor?;
    private dropDownLink?;
    private inputSetLink?;
    el: HTMLElement;
    buttomBoldActive?: boolean;
    buttomItalicActive?: boolean;
    buttomStrikeActive?: boolean;
    buttomUnderlineActive?: boolean;
    buttomCodeActive?: boolean;
    buttomLinkActive?: boolean;
    buttomLinkValidDisabled?: boolean;
    buttomAlignLeftActive?: boolean;
    buttomAlignCenterActive?: boolean;
    buttomAlignRightActive?: boolean;
    buttomUnorderedListActive?: boolean;
    buttomOrderedListActive?: boolean;
    buttomQuoteActive?: boolean;
    buttomH1Active?: boolean;
    buttomH2Active?: boolean;
    buttomH3Active?: boolean;
    buttomH4Active?: boolean;
    buttomH5Active?: boolean;
    buttomH6Active?: boolean;
    buttomAccordionActive?: boolean;
    headerHeight?: string;
    hasSelectionRange?: boolean;
    selectedLinesList?: {
        element: HTMLElement;
    }[];
    treeElementsEditor?: HTMLElement[];
    styleSectorActive?: string;
    styleOnHover?: string;
    whenSelectionLink?: Range;
    linkButtonInput?: string;
    insideComponent?: boolean;
    /**
     * Set the language for fixed texts.
     */
    language?: languages;
    /**
     * weightButton to define if component has Bold Control.
     */
    weightButton?: boolean;
    /**
     * italicButton to define if component has Italic Control.
     */
    italicButton?: boolean;
    /**
     * strikeThroughbutton to define if component has Strike Control.
     */
    strikeThroughButton?: boolean;
    /**
     * underlineButton to define if component has Underline Control.
     */
    underlineButton?: boolean;
    /**
     * linkButton to define if component has Link Control.
     */
    linkButton?: boolean;
    /**
     * codeButton to define if component has Code Control.
     */
    codeButton?: boolean;
    /**
     * alignmentButtons to define if component has TextAlign Control.
     */
    alignmentButtons?: boolean;
    /**
     * listButtons to define if component has List Control.
     */
    listButtons?: boolean;
    /**
     * quoteButton to define if component has Quote Control.
     */
    quoteButton?: boolean;
    /**
     * headingButtons to define if component has Heading Control.
     */
    headingButtons?: boolean;
    /**
     * unstyledButton to define if component has Unstyled Control.
     */
    unstyledButton?: boolean;
    /**
     * height is the prop to define height of component.
     */
    height?: string;
    /**
     * maxHeight is the prop to define max height of component.
     */
    maxHeight?: string;
    /**
     * positionBar is the prop to define max height of component.
     */
    positionBar?: positionBar;
    /**
     * Data test is the prop to specifically test the component action object.
     */
    dataTest?: string;
    /**
     * Emitted when the value has changed.
     */
    bdsRichTextChange: EventEmitter;
    /**
     * Emitted when the input has changed.
     */
    bdsRichTextInput: EventEmitter<KeyboardEvent>;
    /**
     * Event input onblur.
     */
    bdsBlur: EventEmitter;
    /**
     * Event input focus.
     */
    bdsFocus: EventEmitter;
    componentDidLoad(): void;
    protected buttomsHeaderChanged(): void;
    protected buttomAccordionActiveChanged(): void;
    private updateToolbarState;
    private accordionHeader;
    protected treeElementsEditorChanged(value: any): void;
    private refButtonsListElement;
    private refeditorElement;
    private refDropDownLinkElement;
    private refInputSetLink;
    private clearToolbar;
    private setheaderHeight;
    private onBlur;
    private onFocus;
    private onInput;
    private onKeydown;
    private onFocusEditorBar;
    private setCursorToEnd;
    private tagName;
    private wrapSelection;
    private wrapSelectionLine;
    private alignText;
    private createHeading;
    private createList;
    private addSelectionLink;
    private addLinkInput;
    private createLinkKeyDown;
    private createLink;
    private verifyList;
    private handlePaste;
    private clearFormatting;
    render(): any;
}
