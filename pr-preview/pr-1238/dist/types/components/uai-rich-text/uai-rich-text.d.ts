import { EventEmitter } from '../../stencil-public-runtime';
export type UaiRichTextHeading = 'paragraph' | 'h1' | 'h2' | 'h3';
/**
 * Rich text field for editing HTML content, such as a page, with a toolbar for headings, text styles, colors, links,
 * images, tables, lists, alignment and history. It is a form field like uai-textarea: label, helper, error and success
 * messages, required, disabled and readonly, and its HTML value is submitted with the form.
 * Use for formatted content that will be shown as HTML; pair with UaiThemeProvider; avoid it for plain text (use
 * uai-textarea) or for message formats such as WhatsApp markup.
 *
 * @part toolbar - The toolbar.
 * @part editor - The editable content area.
 * @part input-container - The bordered box with the toolbar and the content.
 */
export declare class UaiRichText {
    el: HTMLElement;
    internals: ElementInternals;
    /** HTML content. Unsafe markup (scripts, event attributes, javascript: links) is dropped when it is read. */
    value?: string;
    /** Name used to submit the HTML value with the form. */
    name?: string;
    /** Visible label of the field. Use a short noun phrase; without it, set aria-label. */
    label?: string;
    /** Accessible name when there is no visible label. */
    ariaLabel: string;
    /** Text shown while the content is empty. */
    placeholder?: string;
    /** Helper text under the field. */
    helperMessage?: string;
    /** Error text under the field; it is shown while `danger` is true. */
    errorMessage?: string;
    /** Success text under the field; it is shown while `success` is true. */
    successMessage?: string;
    /** Marks the field as invalid and shows `errorMessage`. */
    danger?: boolean;
    /** Marks the field as valid and shows `successMessage`. */
    success?: boolean;
    /** Requires content to submit the form. */
    required: boolean;
    /** Message for an empty required field. */
    requiredErrorMessage?: string;
    /** Blocks editing and the toolbar. */
    disabled?: boolean;
    /** Shows the content without letting it be edited; the toolbar is hidden. */
    readonly: boolean;
    /** Shows the undo and redo buttons. Undo and redo with Ctrl/Cmd + Z always work, with or without the buttons. */
    history?: boolean;
    /** Turns on headings (paragraph and levels 1 to 3), with a style selector in the toolbar. */
    heading?: boolean;
    /** Turns on bold (Ctrl/Cmd + B). */
    bold?: boolean;
    /** Turns on italic (Ctrl/Cmd + I). */
    italic?: boolean;
    /** Turns on underline (Ctrl/Cmd + U). */
    underline?: boolean;
    /** Turns on strikethrough (Ctrl/Cmd + Shift + S). */
    strike?: boolean;
    /** Turns on inline code and code blocks. */
    code?: boolean;
    /** Turns on the text color, from a palette. */
    textColor?: boolean;
    /** Turns on the highlight color (background of the text), from a palette. */
    highlight?: boolean;
    /** Turns on links, including the ones typed as an address, which are linked automatically. */
    link?: boolean;
    /** Turns on images, by address with a description (alternative text). */
    image?: boolean;
    /** Turns on tables, with a menu to add and remove rows and columns. */
    table?: boolean;
    /** Turns on bullet lists. */
    bulletList?: boolean;
    /** Turns on numbered lists. */
    orderedList?: boolean;
    /** Turns on quotes. */
    blockquote?: boolean;
    /** Turns on the divider line. */
    horizontalRule?: boolean;
    /** Turns on text alignment (left, center and right). */
    textAlign?: boolean;
    /** Shows the button that removes the formatting of the selection. */
    clearFormatting?: boolean;
    /** Minimum height of the content area, in pixels. */
    minHeight?: number;
    /** Maximum height of the content area, in pixels; the content scrolls beyond it. */
    maxHeight?: number;
    /** Test selector on the content area. */
    dataTest?: string;
    /** Emitted on every change of the content, with the HTML value. */
    uaiInput: EventEmitter<{
        value: string;
    }>;
    /** Emitted when the field loses the focus after the content changed, with the HTML value. */
    uaiChange: EventEmitter<{
        value: string;
    }>;
    /** Emitted when the content area takes the focus. */
    uaiFocus: EventEmitter<void>;
    /** Emitted when the content area loses the focus. */
    uaiBlur: EventEmitter<void>;
    /** Changes on every editor transaction, so the toolbar shows the state of the current selection. */
    private revision;
    private disabledByForm;
    private validationDanger;
    private validationText;
    /** Menu (dropdown) of the toolbar that is open, so its tooltip stays hidden while the panel is shown. */
    private openMenu;
    private editor?;
    private editorEl?;
    private formControl?;
    private readonly id;
    private readonly buttons;
    private valueOnFocus;
    /** Value restored by a form reset: the content the field started with, after the editor normalized it. */
    private initialValue;
    private linkInput?;
    private imageUrlInput?;
    private imageAltInput?;
    /** Focuses the content area. */
    setFocus(): Promise<void>;
    /** Returns the current HTML value ('' when empty). */
    getContent(): Promise<string>;
    /** Removes all the content. */
    clear(): Promise<void>;
    protected valueChanged(value: string): void;
    protected editableChanged(): void;
    protected featuresChanged(): void;
    protected requiredChanged(): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    private features;
    /** Builds the editor with only the extensions of the features that are on. */
    private createEditor;
    componentDidRender(): void;
    disconnectedCallback(): void;
    formResetCallback(): void;
    formDisabledCallback(disabled: boolean): void;
    private html;
    private isEditable;
    private onEditorUpdate;
    private syncForm;
    /** Shows the validation message when the form finds the field invalid (submit or reportValidity). */
    protected onInvalid(): void;
    private syncEditorAttributes;
    private syncPressedButtons;
    private message;
    private chain;
    private toolButtons;
    private headingValue;
    private onHeadingChange;
    private closeDropdown;
    private applyLink;
    private removeLink;
    private insertImage;
    private setColor;
    private tableAction;
    private renderButton;
    private renderMenu;
    private renderSwatches;
    private renderToolbar;
    render(): HTMLElement;
}
