import { Host, h, } from "@stencil/core";
import { Editor } from "@tiptap/core";
import { Image } from "@tiptap/extension-image";
import { Table, TableCell, TableHeader, TableRow } from "@tiptap/extension-table";
import { TextAlign } from "@tiptap/extension-text-align";
import { BackgroundColor, Color, TextStyle } from "@tiptap/extension-text-style";
import { Placeholder } from "@tiptap/extensions";
import { StarterKit } from "@tiptap/starter-kit";
import { warnOnce } from "../../utils/deprecation";
import { UaiFormControl } from "../../utils/uai-form-control";
import { UAI_RICH_TEXT_HIGHLIGHT_COLORS, UAI_RICH_TEXT_TEXT_COLORS, UAI_RICH_TEXT_FEATURES, UAI_RICH_TEXT_FEATURE_GROUPS, isSafeUrl, normalizeUrl, } from "./uai-rich-text-tools";
let nextId = 0;
const isMac = () => typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform || '');
/** Text of a tool tooltip: its name and, when it has one, the keyboard shortcut (⌘ on macOS, Ctrl elsewhere). */
const tipText = (label, shortcut) => shortcut ? `${label} (${isMac() ? '⌘' : 'Ctrl'}+${shortcut})` : label;
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
export class UaiRichText {
    constructor() {
        /** HTML content. Unsafe markup (scripts, event attributes, javascript: links) is dropped when it is read. */
        this.value = '';
        /** Visible label of the field. Use a short noun phrase; without it, set aria-label. */
        this.label = '';
        /** Accessible name when there is no visible label. */
        this.ariaLabel = null;
        /** Text shown while the content is empty. */
        this.placeholder = '';
        /** Helper text under the field. */
        this.helperMessage = '';
        /** Error text under the field; it is shown while `danger` is true. */
        this.errorMessage = '';
        /** Success text under the field; it is shown while `success` is true. */
        this.successMessage = '';
        /** Marks the field as invalid and shows `errorMessage`. */
        this.danger = false;
        /** Marks the field as valid and shows `successMessage`. */
        this.success = false;
        /** Requires content to submit the form. */
        this.required = false;
        /** Message for an empty required field. */
        this.requiredErrorMessage = 'Este campo é obrigatório.';
        /** Blocks editing and the toolbar. */
        this.disabled = false;
        /** Shows the content without letting it be edited; the toolbar is hidden. */
        this.readonly = false;
        /** Shows the undo and redo buttons. Undo and redo with Ctrl/Cmd + Z always work, with or without the buttons. */
        this.history = false;
        /** Turns on headings (paragraph and levels 1 to 3), with a style selector in the toolbar. */
        this.heading = false;
        /** Turns on bold (Ctrl/Cmd + B). */
        this.bold = false;
        /** Turns on italic (Ctrl/Cmd + I). */
        this.italic = false;
        /** Turns on underline (Ctrl/Cmd + U). */
        this.underline = false;
        /** Turns on strikethrough (Ctrl/Cmd + Shift + S). */
        this.strike = false;
        /** Turns on inline code and code blocks. */
        this.code = false;
        /** Turns on the text color, from a palette. */
        this.textColor = false;
        /** Turns on the highlight color (background of the text), from a palette. */
        this.highlight = false;
        /** Turns on links, including the ones typed as an address, which are linked automatically. */
        this.link = false;
        /** Turns on images, by address with a description (alternative text). */
        this.image = false;
        /** Turns on tables, with a menu to add and remove rows and columns. */
        this.table = false;
        /** Turns on bullet lists. */
        this.bulletList = false;
        /** Turns on numbered lists. */
        this.orderedList = false;
        /** Turns on quotes. */
        this.blockquote = false;
        /** Turns on the divider line. */
        this.horizontalRule = false;
        /** Turns on text alignment (left, center and right). */
        this.textAlign = false;
        /** Shows the button that removes the formatting of the selection. */
        this.clearFormatting = false;
        /** Test selector on the content area. */
        this.dataTest = null;
        /** Changes on every editor transaction, so the toolbar shows the state of the current selection. */
        this.revision = 0;
        this.disabledByForm = false;
        this.validationDanger = false;
        this.validationText = '';
        /** Menu (dropdown) of the toolbar that is open, so its tooltip stays hidden while the panel is shown. */
        this.openMenu = null;
        this.id = `uai-rich-text-${nextId++}`;
        this.buttons = new Map();
        this.valueOnFocus = '';
        /** Value restored by a form reset: the content the field started with, after the editor normalized it. */
        this.initialValue = '';
        this.onHeadingChange = (event) => {
            var _a;
            const value = ((_a = event.detail) === null || _a === void 0 ? void 0 : _a.value) == null ? null : String(event.detail.value);
            if (!this.editor || !value || value === this.headingValue())
                return;
            if (value === 'paragraph')
                this.chain().setParagraph().run();
            else
                this.chain()
                    .toggleHeading({ level: Number(value.slice(1)) })
                    .run();
        };
        this.applyLink = (event) => {
            var _a;
            const href = normalizeUrl(((_a = this.linkInput) === null || _a === void 0 ? void 0 : _a.value) || '');
            if (!href)
                this.chain().extendMarkRange('link').unsetLink().run();
            else if (isSafeUrl(href))
                this.chain().extendMarkRange('link').setLink({ href }).run();
            this.closeDropdown(event.currentTarget);
        };
        this.removeLink = (event) => {
            this.chain().extendMarkRange('link').unsetLink().run();
            this.closeDropdown(event.currentTarget);
        };
        this.insertImage = (event) => {
            var _a, _b;
            const src = normalizeUrl(((_a = this.imageUrlInput) === null || _a === void 0 ? void 0 : _a.value) || '');
            if (src && isSafeUrl(src)) {
                this.chain()
                    .setImage({ src, alt: ((_b = this.imageAltInput) === null || _b === void 0 ? void 0 : _b.value) || '' })
                    .run();
                if (this.imageUrlInput)
                    this.imageUrlInput.value = '';
                if (this.imageAltInput)
                    this.imageAltInput.value = '';
            }
            this.closeDropdown(event.currentTarget);
        };
        this.setColor = (event, mark, value) => {
            var _a;
            if (mark === 'color') {
                if (value)
                    this.chain().setColor(value).run();
                else
                    this.chain().unsetColor().run();
            }
            else if (value) {
                // Highlights are light colors: text without its own color gets the dark text color, so it stays readable in
                // the editor (also in the dark theme) and on the published page.
                const chain = this.chain().setBackgroundColor(value);
                if (!((_a = this.editor.getAttributes('textStyle')) === null || _a === void 0 ? void 0 : _a.color))
                    chain.setColor(UAI_RICH_TEXT_TEXT_COLORS[0].value);
                chain.run();
            }
            else
                this.chain().unsetBackgroundColor().run();
            this.closeDropdown(event.currentTarget);
        };
        this.tableAction = (event, action) => {
            action(this.chain());
            this.closeDropdown(event.currentTarget);
        };
    }
    /** Focuses the content area. */
    async setFocus() {
        var _a;
        (_a = this.editor) === null || _a === void 0 ? void 0 : _a.commands.focus('end');
    }
    /** Returns the current HTML value ('' when empty). */
    async getContent() {
        return this.html();
    }
    /** Removes all the content. */
    async clear() {
        var _a;
        (_a = this.editor) === null || _a === void 0 ? void 0 : _a.commands.clearContent(true);
    }
    valueChanged(value) {
        if (!this.editor || (value || '') === this.html())
            return;
        this.editor.commands.setContent(value || '', { emitUpdate: false });
        this.syncForm();
    }
    editableChanged() {
        var _a;
        (_a = this.editor) === null || _a === void 0 ? void 0 : _a.setEditable(this.isEditable());
    }
    // A feature adds or removes parts of the editor schema, so the editor is built again, keeping the content.
    featuresChanged() {
        if (this.editor)
            this.createEditor(this.html());
    }
    requiredChanged() {
        this.syncForm();
    }
    componentWillLoad() {
        if (!this.label && !this.ariaLabel) {
            warnOnce('uai-rich-text', 'accessible-name', 'Set label or aria-label so the field has an accessible name.');
        }
    }
    componentDidLoad() {
        this.formControl = new UaiFormControl({
            internals: this.internals,
            defaultValue: () => this.initialValue,
            onReset: (value) => {
                var _a;
                (_a = this.editor) === null || _a === void 0 ? void 0 : _a.commands.setContent(typeof value === 'string' ? value : '', { emitUpdate: false });
                this.value = this.html();
                this.syncForm();
            },
            onDisabledChange: (disabled) => {
                var _a;
                this.disabledByForm = disabled;
                (_a = this.editor) === null || _a === void 0 ? void 0 : _a.setEditable(this.isEditable());
            },
        });
        this.createEditor(this.value || '');
        // Normalize the initial value to what the editor keeps (unsafe markup dropped); a form reset goes back to it.
        this.initialValue = this.html();
        this.value = this.initialValue;
        this.formControl.setValue(this.initialValue);
        this.syncForm();
        // The editable element did not exist in the first render, so its attributes are set here too.
        this.syncEditorAttributes();
    }
    features() {
        return new Set(UAI_RICH_TEXT_FEATURES.filter((feature) => this[feature] === true));
    }
    /** Builds the editor with only the extensions of the features that are on. */
    createEditor(content) {
        var _a;
        const on = this.features();
        const list = on.has('bulletList') || on.has('orderedList');
        (_a = this.editor) === null || _a === void 0 ? void 0 : _a.destroy();
        this.editor = new Editor({
            element: this.editorEl,
            injectCSS: false,
            editable: this.isEditable(),
            content,
            extensions: [
                StarterKit.configure({
                    heading: on.has('heading') ? { levels: [1, 2, 3] } : false,
                    bold: on.has('bold') ? {} : false,
                    italic: on.has('italic') ? {} : false,
                    underline: on.has('underline') ? {} : false,
                    strike: on.has('strike') ? {} : false,
                    code: on.has('code') ? {} : false,
                    codeBlock: on.has('code') ? {} : false,
                    bulletList: on.has('bulletList') ? {} : false,
                    orderedList: on.has('orderedList') ? {} : false,
                    listItem: list ? {} : false,
                    listKeymap: list ? {} : false,
                    blockquote: on.has('blockquote') ? {} : false,
                    horizontalRule: on.has('horizontalRule') ? {} : false,
                    link: on.has('link')
                        ? {
                            openOnClick: false,
                            autolink: true,
                            defaultProtocol: 'https',
                            isAllowedUri: (url, { defaultValidate }) => defaultValidate(url) && isSafeUrl(url),
                        }
                        : false,
                }),
                // Highlight sets a readable text color too, so the text color extension is needed for both.
                ...(on.has('textColor') || on.has('highlight') ? [TextStyle, Color] : []),
                ...(on.has('highlight') ? [BackgroundColor] : []),
                ...(on.has('textAlign') ? [TextAlign.configure({ types: ['heading', 'paragraph'] })] : []),
                ...(on.has('image') ? [Image.configure({ allowBase64: false })] : []),
                ...(on.has('table') ? [Table.configure({ resizable: false }), TableRow, TableHeader, TableCell] : []),
                Placeholder.configure({ placeholder: () => this.placeholder || '' }),
            ],
            editorProps: {
                attributes: {
                    role: 'textbox',
                    'aria-multiline': 'true',
                    id: `${this.id}-editor`,
                    class: 'rich-text__content',
                },
            },
            onUpdate: () => this.onEditorUpdate(),
            onTransaction: () => (this.revision += 1),
            onFocus: () => {
                this.valueOnFocus = this.html();
                this.uaiFocus.emit();
            },
            onBlur: () => {
                const value = this.html();
                if (value !== this.valueOnFocus)
                    this.uaiChange.emit({ value });
                this.uaiBlur.emit();
            },
        });
        this.revision += 1;
    }
    componentDidRender() {
        this.syncEditorAttributes();
        this.syncPressedButtons();
    }
    disconnectedCallback() {
        var _a;
        (_a = this.editor) === null || _a === void 0 ? void 0 : _a.destroy();
        this.editor = undefined;
    }
    formResetCallback() {
        var _a;
        (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.reset();
    }
    formDisabledCallback(disabled) {
        var _a;
        (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.setDisabled(disabled);
    }
    // The value is '' only for a document that is a single empty paragraph. editor.isEmpty is not used: it also counts
    // as empty a document with only an empty table, which would drop the table from the value.
    html() {
        if (!this.editor)
            return '';
        const doc = this.editor.state.doc;
        const first = doc.firstChild;
        if (doc.childCount === 1 && (first === null || first === void 0 ? void 0 : first.type.name) === 'paragraph' && first.content.size === 0)
            return '';
        return this.editor.getHTML();
    }
    isEditable() {
        return !this.disabled && !this.disabledByForm && !this.readonly;
    }
    onEditorUpdate() {
        const value = this.html();
        this.value = value;
        this.syncForm();
        this.uaiInput.emit({ value });
    }
    syncForm() {
        if (!this.formControl)
            return;
        // The value is always set; the `name` attribute decides whether the form submits it, as with native fields.
        this.formControl.setValue(this.html());
        this.formControl.validateRequired(this.required, this.requiredErrorMessage, this.editorEl);
        if (this.validationDanger && this.formControl.validity.valid) {
            this.validationDanger = false;
            this.validationText = '';
        }
    }
    /** Shows the validation message when the form finds the field invalid (submit or reportValidity). */
    onInvalid() {
        var _a;
        this.validationDanger = true;
        this.validationText = ((_a = this.formControl) === null || _a === void 0 ? void 0 : _a.validationMessage) || this.requiredErrorMessage;
    }
    // Attributes of the editable element that depend on props (it is created by the editor, not by render).
    syncEditorAttributes() {
        var _a;
        const content = (_a = this.editorEl) === null || _a === void 0 ? void 0 : _a.querySelector('.rich-text__content');
        if (!content)
            return;
        const set = (name, value) => value === null ? content.removeAttribute(name) : content.setAttribute(name, value);
        const invalid = this.danger || this.validationDanger;
        set('aria-labelledby', this.label ? `${this.id}-label` : null);
        set('aria-label', this.label ? null : this.ariaLabel);
        set('aria-invalid', invalid ? 'true' : null);
        set('aria-required', this.required ? 'true' : null);
        set('aria-readonly', this.readonly ? 'true' : null);
        set('aria-disabled', this.disabled || this.disabledByForm ? 'true' : null);
        set('aria-describedby', this.message() ? `${this.id}-message` : null);
        set('data-test', this.dataTest);
    }
    syncPressedButtons() {
        var _a, _b;
        for (const tool of this.toolButtons()) {
            if (!tool.active)
                continue;
            void ((_b = (_a = this.buttons.get(tool.tool)) === null || _a === void 0 ? void 0 : _a.isActive) === null || _b === void 0 ? void 0 : _b.call(_a, tool.active()));
        }
    }
    message() {
        const invalid = this.danger || this.validationDanger;
        if (this.danger)
            return this.errorMessage || this.validationText;
        if (invalid)
            return this.validationText;
        if (this.success)
            return this.successMessage;
        return this.helperMessage;
    }
    chain() {
        return this.editor.chain().focus();
    }
    toolButtons() {
        const editor = this.editor;
        const is = (name, attributes) => () => !!(editor === null || editor === void 0 ? void 0 : editor.isActive(name, attributes));
        const alignIs = (align) => () => !!(editor === null || editor === void 0 ? void 0 : editor.isActive({ textAlign: align }));
        return [
            {
                tool: 'undo',
                shortcut: 'Z',
                icon: 'undo',
                label: 'Desfazer',
                run: () => this.chain().undo().run(),
                disabled: () => !(editor === null || editor === void 0 ? void 0 : editor.can().undo()),
            },
            {
                tool: 'redo',
                shortcut: 'Shift+Z',
                icon: 'redo',
                label: 'Refazer',
                run: () => this.chain().redo().run(),
                disabled: () => !(editor === null || editor === void 0 ? void 0 : editor.can().redo()),
            },
            {
                tool: 'bold',
                shortcut: 'B',
                icon: 'text-style-bold',
                label: 'Negrito',
                active: is('bold'),
                run: () => this.chain().toggleBold().run(),
            },
            {
                tool: 'italic',
                shortcut: 'I',
                icon: 'text-style-italic',
                label: 'Itálico',
                active: is('italic'),
                run: () => this.chain().toggleItalic().run(),
            },
            {
                tool: 'underline',
                shortcut: 'U',
                icon: 'text-style-underline',
                label: 'Sublinhado',
                active: is('underline'),
                run: () => this.chain().toggleUnderline().run(),
            },
            {
                tool: 'strike',
                shortcut: 'Shift+S',
                icon: 'text-style-strikethrough',
                label: 'Tachado',
                active: is('strike'),
                run: () => this.chain().toggleStrike().run(),
            },
            {
                tool: 'code',
                shortcut: 'E',
                icon: 'code',
                label: 'Código',
                active: is('code'),
                run: () => this.chain().toggleCode().run(),
            },
            {
                tool: 'bulletList',
                shortcut: 'Shift+8',
                icon: 'unordered-list',
                label: 'Lista com marcadores',
                active: is('bulletList'),
                run: () => this.chain().toggleBulletList().run(),
            },
            {
                tool: 'orderedList',
                shortcut: 'Shift+7',
                icon: 'ordered-list',
                label: 'Lista numerada',
                active: is('orderedList'),
                run: () => this.chain().toggleOrderedList().run(),
            },
            {
                tool: 'blockquote',
                shortcut: 'Shift+B',
                icon: 'quote',
                label: 'Citação',
                active: is('blockquote'),
                run: () => this.chain().toggleBlockquote().run(),
            },
            {
                tool: 'horizontalRule',
                icon: 'less',
                label: 'Linha divisória',
                run: () => this.chain().setHorizontalRule().run(),
            },
            {
                tool: 'align-left',
                shortcut: 'Shift+L',
                icon: 'align-left',
                label: 'Alinhar à esquerda',
                active: alignIs('left'),
                run: () => this.chain().setTextAlign('left').run(),
            },
            {
                tool: 'align-center',
                shortcut: 'Shift+E',
                icon: 'align-center',
                label: 'Centralizar',
                active: alignIs('center'),
                run: () => this.chain().setTextAlign('center').run(),
            },
            {
                tool: 'align-right',
                shortcut: 'Shift+R',
                icon: 'align-right',
                label: 'Alinhar à direita',
                active: alignIs('right'),
                run: () => this.chain().setTextAlign('right').run(),
            },
            {
                tool: 'clearFormatting',
                icon: 'delete',
                label: 'Limpar formatação',
                run: () => this.chain().unsetAllMarks().clearNodes().run(),
            },
        ];
    }
    headingValue() {
        var _a;
        for (const level of [1, 2, 3])
            if ((_a = this.editor) === null || _a === void 0 ? void 0 : _a.isActive('heading', { level }))
                return `h${level}`;
        return 'paragraph';
    }
    closeDropdown(target) {
        var _a, _b;
        const dropdown = (_a = target === null || target === void 0 ? void 0 : target.closest) === null || _a === void 0 ? void 0 : _a.call(target, 'uai-dropdown');
        void ((_b = dropdown === null || dropdown === void 0 ? void 0 : dropdown.setClose) === null || _b === void 0 ? void 0 : _b.call(dropdown));
    }
    renderButton(tool, disabledToolbar) {
        var _a;
        const disabled = disabledToolbar || !!((_a = tool.disabled) === null || _a === void 0 ? void 0 : _a.call(tool));
        return (h("uai-tooltip", { key: tool.tool, class: "rich-text__tip", tooltipText: tipText(tool.label, tool.shortcut), position: "bottom-center" }, h("uai-button", { ref: (button) => button && this.buttons.set(tool.tool, button), class: "rich-text__tool", variant: "text", color: "content", size: "short", iconLeft: tool.icon, "aria-label": tool.label, disabled: disabled, onClick: tool.run })));
    }
    renderMenu(tool, icon, label, disabled, content) {
        // The tooltip wraps the whole dropdown (not the activator, which the dropdown needs as its direct child) and is
        // turned off while the panel is open, so it does not cover the panel.
        return (h("uai-tooltip", { key: tool, class: "rich-text__tip", tooltipText: label, position: "bottom-center", disabled: this.openMenu === tool }, h("uai-dropdown", { class: "rich-text__menu", label: label, position: "bottom-left", onUaiToggle: (event) => {
                if (event.detail.value)
                    this.openMenu = tool;
                else if (this.openMenu === tool)
                    this.openMenu = null;
            } }, h("uai-button", { slot: "activator", class: "rich-text__tool", variant: "text", color: "content", size: "short", iconLeft: icon, iconRight: "arrow-down", "aria-label": label, disabled: disabled }), content)));
    }
    renderSwatches(mark) {
        var _a, _b;
        const colors = mark === 'color' ? UAI_RICH_TEXT_TEXT_COLORS : UAI_RICH_TEXT_HIGHLIGHT_COLORS;
        const current = (_b = (_a = this.editor) === null || _a === void 0 ? void 0 : _a.getAttributes('textStyle')) === null || _b === void 0 ? void 0 : _b[mark === 'color' ? 'color' : 'backgroundColor'];
        return (h("div", { class: "rich-text__swatches", role: "group", "aria-label": mark === 'color' ? 'Cor do texto' : 'Cor de destaque' }, colors.map((color) => (h("button", { type: "button", class: { 'rich-text__swatch': true, 'rich-text__swatch--selected': current === color.value }, style: { '--swatch-color': color.value }, "aria-label": color.label, "aria-pressed": current === color.value ? 'true' : 'false', onClick: (event) => this.setColor(event, mark, color.value) }))), h("uai-button", { class: "rich-text__swatch-reset", variant: "text", color: "content", size: "short", onClick: (event) => this.setColor(event, mark, null) }, "Padr\u00E3o")));
    }
    renderToolbar(enabled, disabled) {
        var _a, _b, _c;
        const buttons = new Map(this.toolButtons().map((tool) => [tool.tool, tool]));
        const inTable = !!((_a = this.editor) === null || _a === void 0 ? void 0 : _a.isActive('table'));
        const linkHref = ((_c = (_b = this.editor) === null || _b === void 0 ? void 0 : _b.getAttributes('link')) === null || _c === void 0 ? void 0 : _c.href) || '';
        const groups = UAI_RICH_TEXT_FEATURE_GROUPS.map((group) => group
            .filter((tool) => enabled.has(tool))
            .map((tool) => {
            switch (tool) {
                case 'heading':
                    return (h("uai-select", { key: "heading", class: "rich-text__heading", size: "short", "aria-label": "Estilo do texto", value: this.headingValue(), disabled: disabled, onUaiChange: this.onHeadingChange, options: [
                            { value: 'paragraph', label: 'Parágrafo' },
                            { value: 'h1', label: 'Título 1' },
                            { value: 'h2', label: 'Título 2' },
                            { value: 'h3', label: 'Título 3' },
                        ] }));
                case 'history':
                    return ['undo', 'redo'].map((name) => this.renderButton(buttons.get(name), disabled));
                case 'textColor':
                    return this.renderMenu('color', 'paint', 'Cor do texto', disabled, this.renderSwatches('color'));
                case 'highlight':
                    return this.renderMenu('highlight', 'mark', 'Cor de destaque', disabled, this.renderSwatches('highlight'));
                case 'link':
                    return this.renderMenu('link', 'link', 'Link', disabled, h("div", { class: "rich-text__form" }, h("uai-input", { ref: (input) => (this.linkInput = input), label: "Endere\u00E7o do link", placeholder: "https://", value: linkHref }), h("div", { class: "rich-text__form-actions" }, h("uai-button", { variant: "text", color: "content", size: "short", onClick: this.removeLink }, "Remover"), h("uai-button", { size: "short", onClick: this.applyLink }, "Aplicar"))));
                case 'image':
                    return this.renderMenu('image', 'file-image', 'Imagem', disabled, h("div", { class: "rich-text__form" }, h("uai-input", { ref: (input) => (this.imageUrlInput = input), label: "Endere\u00E7o da imagem", placeholder: "https://" }), h("uai-input", { ref: (input) => (this.imageAltInput = input), label: "Descri\u00E7\u00E3o (texto alternativo)" }), h("div", { class: "rich-text__form-actions" }, h("uai-button", { size: "short", onClick: this.insertImage }, "Inserir imagem"))));
                case 'table':
                    return this.renderMenu('table', 'table', 'Tabela', disabled, h("div", { class: "rich-text__table-menu", role: "group", "aria-label": "A\u00E7\u00F5es de tabela" }, [
                        {
                            label: 'Inserir tabela 3 × 3',
                            show: !inTable,
                            run: (c) => c.insertTable({ rows: 3, cols: 3, withHeaderRow: true }),
                        },
                        { label: 'Linha acima', show: inTable, run: (c) => c.addRowBefore() },
                        { label: 'Linha abaixo', show: inTable, run: (c) => c.addRowAfter() },
                        { label: 'Coluna à esquerda', show: inTable, run: (c) => c.addColumnBefore() },
                        { label: 'Coluna à direita', show: inTable, run: (c) => c.addColumnAfter() },
                        { label: 'Alternar linha de cabeçalho', show: inTable, run: (c) => c.toggleHeaderRow() },
                        { label: 'Excluir linha', show: inTable, run: (c) => c.deleteRow() },
                        { label: 'Excluir coluna', show: inTable, run: (c) => c.deleteColumn() },
                        { label: 'Excluir tabela', show: inTable, run: (c) => c.deleteTable() },
                    ]
                        .filter((item) => item.show)
                        .map((item) => (h("uai-button", { variant: "text", color: "content", size: "short", fullWidth: true, justifyContent: "space-between", onClick: (event) => this.tableAction(event, (chain) => item.run(chain).run()) }, item.label)))));
                case 'textAlign':
                    return ['align-left', 'align-center', 'align-right'].map((name) => this.renderButton(buttons.get(name), disabled));
                default:
                    return this.renderButton(buttons.get(tool), disabled);
            }
        })).filter((group) => group.length);
        return (h("div", { class: "rich-text__toolbar", part: "toolbar", role: "toolbar", "aria-label": "Formata\u00E7\u00E3o", "aria-controls": `${this.id}-editor` }, groups.map((group, index) => [
            index > 0 && h("span", { class: "rich-text__divider", "aria-hidden": "true" }),
            group,
        ])));
    }
    render() {
        // Read so the toolbar re-renders on every transaction (selection or content change).
        void this.revision;
        const disabled = this.disabled || this.disabledByForm;
        const invalid = this.danger || this.validationDanger;
        const success = this.success && !invalid;
        const message = this.message();
        const enabled = this.features();
        return (h(Host, { key: '36567c050350b8f9af05c13772e4dd933184c96d', "aria-disabled": disabled ? 'true' : null, class: {
                'uai-rich-text--danger': invalid,
                'uai-rich-text--success': success,
                'uai-rich-text--disabled': disabled,
                'uai-rich-text--readonly': this.readonly && !disabled,
            } }, h("div", { key: '127612dd43af305ca75f98126d5b3a87d1a909a2', class: "rich-text" }, this.label && (h("span", { key: 'b1a56e7f07aa4a7fbb69819daba9fae242a243e9', id: `${this.id}-label`, class: "rich-text__label" }, h("uai-typo", { key: '71fae08b081f8cbd2e0b86c8ae2361aa233452cd', variant: "caption", bold: "semibold", tag: "span", margin: false }, this.label))), h("div", { key: '9c7568b2203b96c09c070cb5a7d8a4feba296119', class: "rich-text__control", part: "input-container" }, !this.readonly && enabled.size > 0 && this.renderToolbar(enabled, disabled), h("div", { key: 'f3609d861a5dd9a8cf80971359f1cdd4bbe76d57', class: "rich-text__editor", part: "editor", ref: (element) => (this.editorEl = element), style: Object.assign(Object.assign({}, (this.minHeight !== undefined ? { minHeight: `${this.minHeight}px` } : {})), (this.maxHeight !== undefined ? { maxHeight: `${this.maxHeight}px` } : {})) })), message && (h("div", { key: 'c9f0bb1b4ace4143b98ab83d8494528958df59ed', id: `${this.id}-message`, class: "rich-text__message", part: "input__message" }, h("uai-typo", { key: '677e616c1e3f7ac27e15c28aaa895271d7c0fcd8', variant: "caption", tag: "span", margin: false }, message))))));
    }
    static get is() { return "uai-rich-text"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-rich-text.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-rich-text.css"]
        };
    }
    static get properties() {
        return {
            "value": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "HTML content. Unsafe markup (scripts, event attributes, javascript: links) is dropped when it is read."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "value",
                "defaultValue": "''"
            },
            "name": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Name used to submit the HTML value with the form."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "name"
            },
            "label": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Visible label of the field. Use a short noun phrase; without it, set aria-label."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label",
                "defaultValue": "''"
            },
            "ariaLabel": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Accessible name when there is no visible label."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "aria-label",
                "defaultValue": "null"
            },
            "placeholder": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Text shown while the content is empty."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "placeholder",
                "defaultValue": "''"
            },
            "helperMessage": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Helper text under the field."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "helper-message",
                "defaultValue": "''"
            },
            "errorMessage": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Error text under the field; it is shown while `danger` is true."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "error-message",
                "defaultValue": "''"
            },
            "successMessage": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Success text under the field; it is shown while `success` is true."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "success-message",
                "defaultValue": "''"
            },
            "danger": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Marks the field as invalid and shows `errorMessage`."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "danger",
                "defaultValue": "false"
            },
            "success": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Marks the field as valid and shows `successMessage`."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "success",
                "defaultValue": "false"
            },
            "required": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Requires content to submit the form."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "required",
                "defaultValue": "false"
            },
            "requiredErrorMessage": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Message for an empty required field."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "required-error-message",
                "defaultValue": "'Este campo \u00E9 obrigat\u00F3rio.'"
            },
            "disabled": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Blocks editing and the toolbar."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "disabled",
                "defaultValue": "false"
            },
            "readonly": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Shows the content without letting it be edited; the toolbar is hidden."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "readonly",
                "defaultValue": "false"
            },
            "history": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Shows the undo and redo buttons. Undo and redo with Ctrl/Cmd + Z always work, with or without the buttons."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "history",
                "defaultValue": "false"
            },
            "heading": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Turns on headings (paragraph and levels 1 to 3), with a style selector in the toolbar."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "heading",
                "defaultValue": "false"
            },
            "bold": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Turns on bold (Ctrl/Cmd + B)."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "bold",
                "defaultValue": "false"
            },
            "italic": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Turns on italic (Ctrl/Cmd + I)."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "italic",
                "defaultValue": "false"
            },
            "underline": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Turns on underline (Ctrl/Cmd + U)."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "underline",
                "defaultValue": "false"
            },
            "strike": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Turns on strikethrough (Ctrl/Cmd + Shift + S)."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "strike",
                "defaultValue": "false"
            },
            "code": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Turns on inline code and code blocks."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "code",
                "defaultValue": "false"
            },
            "textColor": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Turns on the text color, from a palette."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "text-color",
                "defaultValue": "false"
            },
            "highlight": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Turns on the highlight color (background of the text), from a palette."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "highlight",
                "defaultValue": "false"
            },
            "link": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Turns on links, including the ones typed as an address, which are linked automatically."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "link",
                "defaultValue": "false"
            },
            "image": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Turns on images, by address with a description (alternative text)."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "image",
                "defaultValue": "false"
            },
            "table": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Turns on tables, with a menu to add and remove rows and columns."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "table",
                "defaultValue": "false"
            },
            "bulletList": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Turns on bullet lists."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "bullet-list",
                "defaultValue": "false"
            },
            "orderedList": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Turns on numbered lists."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "ordered-list",
                "defaultValue": "false"
            },
            "blockquote": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Turns on quotes."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "blockquote",
                "defaultValue": "false"
            },
            "horizontalRule": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Turns on the divider line."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "horizontal-rule",
                "defaultValue": "false"
            },
            "textAlign": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Turns on text alignment (left, center and right)."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "text-align",
                "defaultValue": "false"
            },
            "clearFormatting": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Shows the button that removes the formatting of the selection."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "clear-formatting",
                "defaultValue": "false"
            },
            "minHeight": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Minimum height of the content area, in pixels."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "min-height"
            },
            "maxHeight": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Maximum height of the content area, in pixels; the content scrolls beyond it."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "max-height"
            },
            "dataTest": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Test selector on the content area."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "data-test",
                "defaultValue": "null"
            }
        };
    }
    static get states() {
        return {
            "revision": {},
            "disabledByForm": {},
            "validationDanger": {},
            "validationText": {},
            "openMenu": {}
        };
    }
    static get events() {
        return [{
                "method": "uaiInput",
                "name": "uaiInput",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted on every change of the content, with the HTML value."
                },
                "complexType": {
                    "original": "{ value: string }",
                    "resolved": "{ value: string; }",
                    "references": {}
                }
            }, {
                "method": "uaiChange",
                "name": "uaiChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the field loses the focus after the content changed, with the HTML value."
                },
                "complexType": {
                    "original": "{ value: string }",
                    "resolved": "{ value: string; }",
                    "references": {}
                }
            }, {
                "method": "uaiFocus",
                "name": "uaiFocus",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the content area takes the focus."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "uaiBlur",
                "name": "uaiBlur",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the content area loses the focus."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "setFocus": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Focuses the content area.",
                    "tags": []
                }
            },
            "getContent": {
                "complexType": {
                    "signature": "() => Promise<string>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<string>"
                },
                "docs": {
                    "text": "Returns the current HTML value ('' when empty).",
                    "tags": []
                }
            },
            "clear": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Removes all the content.",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "value",
                "methodName": "valueChanged"
            }, {
                "propName": "disabled",
                "methodName": "editableChanged"
            }, {
                "propName": "readonly",
                "methodName": "editableChanged"
            }, {
                "propName": "history",
                "methodName": "featuresChanged"
            }, {
                "propName": "heading",
                "methodName": "featuresChanged"
            }, {
                "propName": "bold",
                "methodName": "featuresChanged"
            }, {
                "propName": "italic",
                "methodName": "featuresChanged"
            }, {
                "propName": "underline",
                "methodName": "featuresChanged"
            }, {
                "propName": "strike",
                "methodName": "featuresChanged"
            }, {
                "propName": "code",
                "methodName": "featuresChanged"
            }, {
                "propName": "textColor",
                "methodName": "featuresChanged"
            }, {
                "propName": "highlight",
                "methodName": "featuresChanged"
            }, {
                "propName": "link",
                "methodName": "featuresChanged"
            }, {
                "propName": "image",
                "methodName": "featuresChanged"
            }, {
                "propName": "table",
                "methodName": "featuresChanged"
            }, {
                "propName": "bulletList",
                "methodName": "featuresChanged"
            }, {
                "propName": "orderedList",
                "methodName": "featuresChanged"
            }, {
                "propName": "blockquote",
                "methodName": "featuresChanged"
            }, {
                "propName": "horizontalRule",
                "methodName": "featuresChanged"
            }, {
                "propName": "textAlign",
                "methodName": "featuresChanged"
            }, {
                "propName": "clearFormatting",
                "methodName": "featuresChanged"
            }, {
                "propName": "required",
                "methodName": "requiredChanged"
            }];
    }
    static get listeners() {
        return [{
                "name": "invalid",
                "method": "onInvalid",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
    static get attachInternalsMemberName() { return "internals"; }
}
