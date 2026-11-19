import {
  AttachInternals,
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Listen,
  Method,
  Prop,
  State,
  Watch,
  h,
} from '@stencil/core';
import { Editor } from '@tiptap/core';
import { Image } from '@tiptap/extension-image';
import { Table, TableCell, TableHeader, TableRow } from '@tiptap/extension-table';
import { TextAlign } from '@tiptap/extension-text-align';
import { BackgroundColor, Color, TextStyle } from '@tiptap/extension-text-style';
import { Placeholder } from '@tiptap/extensions';
import { StarterKit } from '@tiptap/starter-kit';
import { warnOnce } from '../../utils/deprecation';
import { UaiFormControl } from '../../utils/uai-form-control';
import type { UaiSelectChange } from '../uai-select/uai-select';
import {
  UAI_RICH_TEXT_HIGHLIGHT_COLORS,
  UAI_RICH_TEXT_TEXT_COLORS,
  UAI_RICH_TEXT_FEATURES,
  UAI_RICH_TEXT_FEATURE_GROUPS,
  UaiRichTextFeature,
  isSafeUrl,
  normalizeUrl,
} from './uai-rich-text-tools';

export type UaiRichTextHeading = 'paragraph' | 'h1' | 'h2' | 'h3';

interface ToolButton {
  tool: string;
  icon: string;
  label: string;
  /** Keyboard shortcut after the modifier key, such as "B" for Ctrl/Cmd + B. Shown in the tooltip. */
  shortcut?: string;
  active?: () => boolean;
  disabled?: () => boolean;
  run: () => void;
}

type UaiPressableButton = HTMLElement & { isActive?: (value: boolean) => Promise<void> };
type UaiValueField = HTMLElement & { value?: string | null };
type UaiDropdownHost = HTMLElement & { setClose?: () => Promise<void> };

let nextId = 0;

const isMac = (): boolean => typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform || '');

/** Text of a tool tooltip: its name and, when it has one, the keyboard shortcut (⌘ on macOS, Ctrl elsewhere). */
const tipText = (label: string, shortcut?: string): string =>
  shortcut ? `${label} (${isMac() ? '⌘' : 'Ctrl'}+${shortcut})` : label;

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
@Component({
  tag: 'uai-rich-text',
  styleUrl: 'uai-rich-text.scss',
  shadow: { delegatesFocus: true },
  formAssociated: true,
})
export class UaiRichText {
  @Element() el!: HTMLElement;
  @AttachInternals() internals: ElementInternals;

  /** HTML content. Unsafe markup (scripts, event attributes, javascript: links) is dropped when it is read. */
  @Prop({ mutable: true }) value?: string = '';

  /** Name used to submit the HTML value with the form. */
  @Prop({ reflect: true }) name?: string;

  /** Visible label of the field. Use a short noun phrase; without it, set aria-label. */
  @Prop() label?: string = '';

  /** Accessible name when there is no visible label. */
  @Prop({ attribute: 'aria-label' }) ariaLabel: string = null;

  /** Text shown while the content is empty. */
  @Prop() placeholder?: string = '';

  /** Helper text under the field. */
  @Prop() helperMessage?: string = '';

  /** Error text under the field; it is shown while `danger` is true. */
  @Prop({ mutable: true }) errorMessage?: string = '';

  /** Success text under the field; it is shown while `success` is true. */
  @Prop({ mutable: true }) successMessage?: string = '';

  /** Marks the field as invalid and shows `errorMessage`. */
  @Prop({ reflect: true, mutable: true }) danger?: boolean = false;

  /** Marks the field as valid and shows `successMessage`. */
  @Prop({ reflect: true, mutable: true }) success?: boolean = false;

  /** Requires content to submit the form. */
  @Prop() required = false;

  /** Message for an empty required field. */
  @Prop() requiredErrorMessage?: string = 'Este campo é obrigatório.';

  /** Blocks editing and the toolbar. */
  @Prop({ reflect: true, mutable: true }) disabled?: boolean = false;

  /** Shows the content without letting it be edited; the toolbar is hidden. */
  @Prop({ reflect: true }) readonly = false;

  /** Shows the undo and redo buttons. Undo and redo with Ctrl/Cmd + Z always work, with or without the buttons. */
  @Prop() history?: boolean = false;

  /** Turns on headings (paragraph and levels 1 to 3), with a style selector in the toolbar. */
  @Prop() heading?: boolean = false;

  /** Turns on bold (Ctrl/Cmd + B). */
  @Prop() bold?: boolean = false;

  /** Turns on italic (Ctrl/Cmd + I). */
  @Prop() italic?: boolean = false;

  /** Turns on underline (Ctrl/Cmd + U). */
  @Prop() underline?: boolean = false;

  /** Turns on strikethrough (Ctrl/Cmd + Shift + S). */
  @Prop() strike?: boolean = false;

  /** Turns on inline code and code blocks. */
  @Prop() code?: boolean = false;

  /** Turns on the text color, from a palette. */
  @Prop() textColor?: boolean = false;

  /** Turns on the highlight color (background of the text), from a palette. */
  @Prop() highlight?: boolean = false;

  /** Turns on links, including the ones typed as an address, which are linked automatically. */
  @Prop() link?: boolean = false;

  /** Turns on images, by address with a description (alternative text). */
  @Prop() image?: boolean = false;

  /** Turns on tables, with a menu to add and remove rows and columns. */
  @Prop() table?: boolean = false;

  /** Turns on bullet lists. */
  @Prop() bulletList?: boolean = false;

  /** Turns on numbered lists. */
  @Prop() orderedList?: boolean = false;

  /** Turns on quotes. */
  @Prop() blockquote?: boolean = false;

  /** Turns on the divider line. */
  @Prop() horizontalRule?: boolean = false;

  /** Turns on text alignment (left, center and right). */
  @Prop() textAlign?: boolean = false;

  /** Shows the button that removes the formatting of the selection. */
  @Prop() clearFormatting?: boolean = false;

  /** Minimum height of the content area, in pixels. */
  @Prop() minHeight?: number;

  /** Maximum height of the content area, in pixels; the content scrolls beyond it. */
  @Prop() maxHeight?: number;

  /** Test selector on the content area. */
  @Prop() dataTest?: string = null;

  /** Emitted on every change of the content, with the HTML value. */
  @Event({ bubbles: true, composed: true }) uaiInput!: EventEmitter<{ value: string }>;

  /** Emitted when the field loses the focus after the content changed, with the HTML value. */
  @Event({ bubbles: true, composed: true }) uaiChange!: EventEmitter<{ value: string }>;

  /** Emitted when the content area takes the focus. */
  @Event({ bubbles: true, composed: true }) uaiFocus!: EventEmitter<void>;

  /** Emitted when the content area loses the focus. */
  @Event({ bubbles: true, composed: true }) uaiBlur!: EventEmitter<void>;

  /** Changes on every editor transaction, so the toolbar shows the state of the current selection. */
  @State() private revision = 0;
  @State() private disabledByForm = false;
  @State() private validationDanger = false;
  @State() private validationText = '';
  /** Menu (dropdown) of the toolbar that is open, so its tooltip stays hidden while the panel is shown. */
  @State() private openMenu: string | null = null;

  private editor?: Editor;
  private editorEl?: HTMLDivElement;
  private formControl?: UaiFormControl;
  private readonly id = `uai-rich-text-${nextId++}`;
  private readonly buttons = new Map<string, UaiPressableButton>();
  private valueOnFocus = '';
  /** Value restored by a form reset: the content the field started with, after the editor normalized it. */
  private initialValue = '';
  private linkInput?: UaiValueField;
  private imageUrlInput?: UaiValueField;
  private imageAltInput?: UaiValueField;

  /** Focuses the content area. */
  @Method()
  async setFocus(): Promise<void> {
    this.editor?.commands.focus('end');
  }

  /** Returns the current HTML value ('' when empty). */
  @Method()
  async getContent(): Promise<string> {
    return this.html();
  }

  /** Removes all the content. */
  @Method()
  async clear(): Promise<void> {
    this.editor?.commands.clearContent(true);
  }

  @Watch('value')
  protected valueChanged(value: string): void {
    if (!this.editor || (value || '') === this.html()) return;
    this.editor.commands.setContent(value || '', { emitUpdate: false });
    this.syncForm();
  }

  @Watch('disabled')
  @Watch('readonly')
  protected editableChanged(): void {
    this.editor?.setEditable(this.isEditable());
  }

  // A feature adds or removes parts of the editor schema, so the editor is built again, keeping the content.
  @Watch('history')
  @Watch('heading')
  @Watch('bold')
  @Watch('italic')
  @Watch('underline')
  @Watch('strike')
  @Watch('code')
  @Watch('textColor')
  @Watch('highlight')
  @Watch('link')
  @Watch('image')
  @Watch('table')
  @Watch('bulletList')
  @Watch('orderedList')
  @Watch('blockquote')
  @Watch('horizontalRule')
  @Watch('textAlign')
  @Watch('clearFormatting')
  protected featuresChanged(): void {
    if (this.editor) this.createEditor(this.html());
  }

  @Watch('required')
  protected requiredChanged(): void {
    this.syncForm();
  }

  componentWillLoad(): void {
    if (!this.label && !this.ariaLabel) {
      warnOnce('uai-rich-text', 'accessible-name', 'Set label or aria-label so the field has an accessible name.');
    }
  }

  componentDidLoad(): void {
    this.formControl = new UaiFormControl({
      internals: this.internals,
      defaultValue: () => this.initialValue,
      onReset: (value) => {
        this.editor?.commands.setContent(typeof value === 'string' ? value : '', { emitUpdate: false });
        this.value = this.html();
        this.syncForm();
      },
      onDisabledChange: (disabled) => {
        this.disabledByForm = disabled;
        this.editor?.setEditable(this.isEditable());
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

  private features(): Set<UaiRichTextFeature> {
    return new Set(UAI_RICH_TEXT_FEATURES.filter((feature) => this[feature] === true));
  }

  /** Builds the editor with only the extensions of the features that are on. */
  private createEditor(content: string): void {
    const on = this.features();
    const list = on.has('bulletList') || on.has('orderedList');
    this.editor?.destroy();
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
        if (value !== this.valueOnFocus) this.uaiChange.emit({ value });
        this.uaiBlur.emit();
      },
    });
    this.revision += 1;
  }

  componentDidRender(): void {
    this.syncEditorAttributes();
    this.syncPressedButtons();
  }

  disconnectedCallback(): void {
    this.editor?.destroy();
    this.editor = undefined;
  }

  formResetCallback(): void {
    this.formControl?.reset();
  }

  formDisabledCallback(disabled: boolean): void {
    this.formControl?.setDisabled(disabled);
  }

  // The value is '' only for a document that is a single empty paragraph. editor.isEmpty is not used: it also counts
  // as empty a document with only an empty table, which would drop the table from the value.
  private html(): string {
    if (!this.editor) return '';
    const doc = this.editor.state.doc;
    const first = doc.firstChild;
    if (doc.childCount === 1 && first?.type.name === 'paragraph' && first.content.size === 0) return '';
    return this.editor.getHTML();
  }

  private isEditable(): boolean {
    return !this.disabled && !this.disabledByForm && !this.readonly;
  }

  private onEditorUpdate(): void {
    const value = this.html();
    this.value = value;
    this.syncForm();
    this.uaiInput.emit({ value });
  }

  private syncForm(): void {
    if (!this.formControl) return;
    // The value is always set; the `name` attribute decides whether the form submits it, as with native fields.
    this.formControl.setValue(this.html());
    this.formControl.validateRequired(this.required, this.requiredErrorMessage, this.editorEl);
    if (this.validationDanger && this.formControl.validity.valid) {
      this.validationDanger = false;
      this.validationText = '';
    }
  }

  /** Shows the validation message when the form finds the field invalid (submit or reportValidity). */
  @Listen('invalid')
  protected onInvalid(): void {
    this.validationDanger = true;
    this.validationText = this.formControl?.validationMessage || this.requiredErrorMessage;
  }

  // Attributes of the editable element that depend on props (it is created by the editor, not by render).
  private syncEditorAttributes(): void {
    const content = this.editorEl?.querySelector<HTMLElement>('.rich-text__content');
    if (!content) return;
    const set = (name: string, value: string | null) =>
      value === null ? content.removeAttribute(name) : content.setAttribute(name, value);
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

  private syncPressedButtons(): void {
    for (const tool of this.toolButtons()) {
      if (!tool.active) continue;
      void this.buttons.get(tool.tool)?.isActive?.(tool.active());
    }
  }

  private message(): string {
    const invalid = this.danger || this.validationDanger;
    if (this.danger) return this.errorMessage || this.validationText;
    if (invalid) return this.validationText;
    if (this.success) return this.successMessage;
    return this.helperMessage;
  }

  private chain() {
    return this.editor.chain().focus();
  }

  private toolButtons(): ToolButton[] {
    const editor = this.editor;
    const is = (name: string, attributes?: Record<string, unknown>) => () => !!editor?.isActive(name, attributes);
    const alignIs = (align: string) => () => !!editor?.isActive({ textAlign: align });
    return [
      {
        tool: 'undo',
        shortcut: 'Z',
        icon: 'undo',
        label: 'Desfazer',
        run: () => this.chain().undo().run(),
        disabled: () => !editor?.can().undo(),
      },
      {
        tool: 'redo',
        shortcut: 'Shift+Z',
        icon: 'redo',
        label: 'Refazer',
        run: () => this.chain().redo().run(),
        disabled: () => !editor?.can().redo(),
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

  private headingValue(): UaiRichTextHeading {
    for (const level of [1, 2, 3] as const) if (this.editor?.isActive('heading', { level })) return `h${level}`;
    return 'paragraph';
  }

  private onHeadingChange = (event: CustomEvent<UaiSelectChange>): void => {
    const value = event.detail?.value == null ? null : String(event.detail.value);
    if (!this.editor || !value || value === this.headingValue()) return;
    if (value === 'paragraph') this.chain().setParagraph().run();
    else
      this.chain()
        .toggleHeading({ level: Number(value.slice(1)) as 1 | 2 | 3 })
        .run();
  };

  private closeDropdown(target: EventTarget | null): void {
    const dropdown = (target as HTMLElement | null)?.closest?.('uai-dropdown') as UaiDropdownHost | null;
    void dropdown?.setClose?.();
  }

  private applyLink = (event: Event): void => {
    const href = normalizeUrl(this.linkInput?.value || '');
    if (!href) this.chain().extendMarkRange('link').unsetLink().run();
    else if (isSafeUrl(href)) this.chain().extendMarkRange('link').setLink({ href }).run();
    this.closeDropdown(event.currentTarget);
  };

  private removeLink = (event: Event): void => {
    this.chain().extendMarkRange('link').unsetLink().run();
    this.closeDropdown(event.currentTarget);
  };

  private insertImage = (event: Event): void => {
    const src = normalizeUrl(this.imageUrlInput?.value || '');
    if (src && isSafeUrl(src)) {
      this.chain()
        .setImage({ src, alt: this.imageAltInput?.value || '' })
        .run();
      if (this.imageUrlInput) this.imageUrlInput.value = '';
      if (this.imageAltInput) this.imageAltInput.value = '';
    }
    this.closeDropdown(event.currentTarget);
  };

  private setColor = (event: Event, mark: 'color' | 'highlight', value: string | null): void => {
    if (mark === 'color') {
      if (value) this.chain().setColor(value).run();
      else this.chain().unsetColor().run();
    } else if (value) {
      // Highlights are light colors: text without its own color gets the dark text color, so it stays readable in
      // the editor (also in the dark theme) and on the published page.
      const chain = this.chain().setBackgroundColor(value);
      if (!this.editor.getAttributes('textStyle')?.color) chain.setColor(UAI_RICH_TEXT_TEXT_COLORS[0].value);
      chain.run();
    } else this.chain().unsetBackgroundColor().run();
    this.closeDropdown(event.currentTarget);
  };

  private tableAction = (event: Event, action: (chain: ReturnType<Editor['chain']>) => unknown): void => {
    action(this.chain() as ReturnType<Editor['chain']>);
    this.closeDropdown(event.currentTarget);
  };

  private renderButton(tool: ToolButton, disabledToolbar: boolean): HTMLElement {
    const disabled = disabledToolbar || !!tool.disabled?.();
    return (
      <uai-tooltip
        key={tool.tool}
        class="rich-text__tip"
        tooltipText={tipText(tool.label, tool.shortcut)}
        position="bottom-center"
      >
        <uai-button
          ref={(button) => button && this.buttons.set(tool.tool, button as UaiPressableButton)}
          class="rich-text__tool"
          variant="text"
          color="content"
          size="short"
          iconLeft={tool.icon}
          aria-label={tool.label}
          disabled={disabled}
          onClick={tool.run}
        ></uai-button>
      </uai-tooltip>
    );
  }

  private renderMenu(tool: string, icon: string, label: string, disabled: boolean, content: HTMLElement): HTMLElement {
    // The tooltip wraps the whole dropdown (not the activator, which the dropdown needs as its direct child) and is
    // turned off while the panel is open, so it does not cover the panel.
    return (
      <uai-tooltip
        key={tool}
        class="rich-text__tip"
        tooltipText={label}
        position="bottom-center"
        disabled={this.openMenu === tool}
      >
        <uai-dropdown
          class="rich-text__menu"
          label={label}
          position="bottom-left"
          onUaiToggle={(event: CustomEvent<{ value: boolean }>) => {
            if (event.detail.value) this.openMenu = tool;
            else if (this.openMenu === tool) this.openMenu = null;
          }}
        >
          <uai-button
            slot="activator"
            class="rich-text__tool"
            variant="text"
            color="content"
            size="short"
            iconLeft={icon}
            iconRight="arrow-down"
            aria-label={label}
            disabled={disabled}
          ></uai-button>
          {content}
        </uai-dropdown>
      </uai-tooltip>
    );
  }

  private renderSwatches(mark: 'color' | 'highlight'): HTMLElement {
    const colors = mark === 'color' ? UAI_RICH_TEXT_TEXT_COLORS : UAI_RICH_TEXT_HIGHLIGHT_COLORS;
    const current = this.editor?.getAttributes('textStyle')?.[mark === 'color' ? 'color' : 'backgroundColor'];
    return (
      <div class="rich-text__swatches" role="group" aria-label={mark === 'color' ? 'Cor do texto' : 'Cor de destaque'}>
        {colors.map((color) => (
          <button
            type="button"
            class={{ 'rich-text__swatch': true, 'rich-text__swatch--selected': current === color.value }}
            style={{ '--swatch-color': color.value }}
            aria-label={color.label}
            aria-pressed={current === color.value ? 'true' : 'false'}
            onClick={(event) => this.setColor(event, mark, color.value)}
          ></button>
        ))}
        <uai-button
          class="rich-text__swatch-reset"
          variant="text"
          color="content"
          size="short"
          onClick={(event) => this.setColor(event, mark, null)}
        >
          Padrão
        </uai-button>
      </div>
    );
  }

  private renderToolbar(enabled: Set<UaiRichTextFeature>, disabled: boolean): HTMLElement {
    const buttons = new Map(this.toolButtons().map((tool) => [tool.tool, tool]));
    const inTable = !!this.editor?.isActive('table');
    const linkHref = this.editor?.getAttributes('link')?.href || '';
    const groups = UAI_RICH_TEXT_FEATURE_GROUPS.map((group) =>
      group
        .filter((tool) => enabled.has(tool))
        .map((tool) => {
          switch (tool) {
            case 'heading':
              return (
                <uai-select
                  key="heading"
                  class="rich-text__heading"
                  size="short"
                  aria-label="Estilo do texto"
                  value={this.headingValue()}
                  disabled={disabled}
                  onUaiChange={this.onHeadingChange}
                  options={[
                    { value: 'paragraph', label: 'Parágrafo' },
                    { value: 'h1', label: 'Título 1' },
                    { value: 'h2', label: 'Título 2' },
                    { value: 'h3', label: 'Título 3' },
                  ]}
                ></uai-select>
              );
            case 'history':
              return ['undo', 'redo'].map((name) => this.renderButton(buttons.get(name), disabled));
            case 'textColor':
              return this.renderMenu('color', 'paint', 'Cor do texto', disabled, this.renderSwatches('color'));
            case 'highlight':
              return this.renderMenu(
                'highlight',
                'mark',
                'Cor de destaque',
                disabled,
                this.renderSwatches('highlight'),
              );
            case 'link':
              return this.renderMenu(
                'link',
                'link',
                'Link',
                disabled,
                <div class="rich-text__form">
                  <uai-input
                    ref={(input) => (this.linkInput = input as UaiValueField)}
                    label="Endereço do link"
                    placeholder="https://"
                    value={linkHref}
                  ></uai-input>
                  <div class="rich-text__form-actions">
                    <uai-button variant="text" color="content" size="short" onClick={this.removeLink}>
                      Remover
                    </uai-button>
                    <uai-button size="short" onClick={this.applyLink}>
                      Aplicar
                    </uai-button>
                  </div>
                </div>,
              );
            case 'image':
              return this.renderMenu(
                'image',
                'file-image',
                'Imagem',
                disabled,
                <div class="rich-text__form">
                  <uai-input
                    ref={(input) => (this.imageUrlInput = input as UaiValueField)}
                    label="Endereço da imagem"
                    placeholder="https://"
                  ></uai-input>
                  <uai-input
                    ref={(input) => (this.imageAltInput = input as UaiValueField)}
                    label="Descrição (texto alternativo)"
                  ></uai-input>
                  <div class="rich-text__form-actions">
                    <uai-button size="short" onClick={this.insertImage}>
                      Inserir imagem
                    </uai-button>
                  </div>
                </div>,
              );
            case 'table':
              return this.renderMenu(
                'table',
                'table',
                'Tabela',
                disabled,
                <div class="rich-text__table-menu" role="group" aria-label="Ações de tabela">
                  {[
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
                    .map((item) => (
                      <uai-button
                        variant="text"
                        color="content"
                        size="short"
                        fullWidth
                        justifyContent="space-between"
                        onClick={(event) =>
                          this.tableAction(event, (chain) => (item.run(chain as never) as { run: () => boolean }).run())
                        }
                      >
                        {item.label}
                      </uai-button>
                    ))}
                </div>,
              );
            case 'textAlign':
              return ['align-left', 'align-center', 'align-right'].map((name) =>
                this.renderButton(buttons.get(name), disabled),
              );
            default:
              return this.renderButton(buttons.get(tool), disabled);
          }
        }),
    ).filter((group) => group.length);

    return (
      <div
        class="rich-text__toolbar"
        part="toolbar"
        role="toolbar"
        aria-label="Formatação"
        aria-controls={`${this.id}-editor`}
      >
        {groups.map((group, index) => [
          index > 0 && <span class="rich-text__divider" aria-hidden="true"></span>,
          group,
        ])}
      </div>
    );
  }

  render(): HTMLElement {
    // Read so the toolbar re-renders on every transaction (selection or content change).
    void this.revision;
    const disabled = this.disabled || this.disabledByForm;
    const invalid = this.danger || this.validationDanger;
    const success = this.success && !invalid;
    const message = this.message();
    const enabled = this.features();

    return (
      <Host
        aria-disabled={disabled ? 'true' : null}
        class={{
          'uai-rich-text--danger': invalid,
          'uai-rich-text--success': success,
          'uai-rich-text--disabled': disabled,
          'uai-rich-text--readonly': this.readonly && !disabled,
        }}
      >
        <div class="rich-text">
          {this.label && (
            <span id={`${this.id}-label`} class="rich-text__label">
              <uai-typo variant="caption" bold="semibold" tag="span" margin={false}>
                {this.label}
              </uai-typo>
            </span>
          )}
          <div class="rich-text__control" part="input-container">
            {!this.readonly && enabled.size > 0 && this.renderToolbar(enabled, disabled)}
            <div
              class="rich-text__editor"
              part="editor"
              ref={(element) => (this.editorEl = element)}
              style={{
                ...(this.minHeight !== undefined ? { minHeight: `${this.minHeight}px` } : {}),
                ...(this.maxHeight !== undefined ? { maxHeight: `${this.maxHeight}px` } : {}),
              }}
            ></div>
          </div>
          {message && (
            <div id={`${this.id}-message`} class="rich-text__message" part="input__message">
              <uai-typo variant="caption" tag="span" margin={false}>
                {message}
              </uai-typo>
            </div>
          )}
        </div>
      </Host>
    );
  }
}
