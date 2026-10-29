import { Component, Element, Event, EventEmitter, Host, Prop, State, Watch, h } from '@stencil/core';
import { UaiOverlay } from '../../utils/uai-overlay';
import { warnLegacyValue } from '../../utils/deprecation';

export interface UaiBreadcrumbItem {
  label: string;
  href?: string;
}

export interface UaiBreadcrumbEditDetail {
  index: number;
  oldValue: string;
  value: string;
}

export type UaiBreadcrumbLanguage = 'pt_BR' | 'en_US' | 'es_ES';

export interface UaiBreadcrumbLabels {
  navigation: string;
  hiddenItems: string;
  edit: string;
  input: string;
  confirm: string;
  cancel: string;
  required: string;
  empty: string;
}

const TEXTS: Record<UaiBreadcrumbLanguage, UaiBreadcrumbLabels> = {
  pt_BR: {
    navigation: 'breadcrumb',
    hiddenItems: 'Mostrar itens ocultos do breadcrumb',
    edit: 'Editar nome',
    input: 'Nome da página',
    confirm: 'Confirmar alteração',
    cancel: 'Cancelar edição',
    required: 'Informe um nome.',
    empty: 'Sem itens para exibir no Breadcrumb.',
  },
  en_US: {
    navigation: 'breadcrumb',
    hiddenItems: 'Show hidden breadcrumb items',
    edit: 'Edit name',
    input: 'Page name',
    confirm: 'Confirm change',
    cancel: 'Cancel editing',
    required: 'Enter a name.',
    empty: 'No items to display in the Breadcrumb.',
  },
  es_ES: {
    navigation: 'breadcrumb',
    hiddenItems: 'Mostrar elementos ocultos de la ruta de navegación',
    edit: 'Editar nombre',
    input: 'Nombre de la página',
    confirm: 'Confirmar cambio',
    cancel: 'Cancelar edición',
    required: 'Ingrese un nombre.',
    empty: 'No hay elementos para mostrar en la ruta de navegación.',
  },
};

let instances = 0;

const isItem = (value: unknown): value is UaiBreadcrumbItem =>
  typeof value === 'object' &&
  value !== null &&
  'label' in value &&
  typeof value.label === 'string' &&
  (!('href' in value) || value.href === undefined || typeof value.href === 'string');

/**
 * Hierarchical page navigation. Use items in ancestor-to-current order; pair with UaiPageHeader;
 * avoid using it as an organization or flow context switcher.
 */
@Component({
  tag: 'uai-breadcrumb',
  styleUrl: 'uai-breadcrumb.scss',
  shadow: true,
})
export class UaiBreadcrumb {
  @Element() el!: HTMLElement;

  /**
   * Ordered page items as an array or JSON. Use label and optional href; pair with wrapItems; avoid context-selector data.
   */
  @Prop() items: string | UaiBreadcrumbItem[] = [];

  /**
   * Collapses intermediate items above three entries. Use false to show all; pair with items; avoid treating it as a depth limit.
   */
  @Prop() wrapItems: boolean = true;

  /**
   * Allows renaming the last item. Use with the edit event; pair with UaiInput; avoid assuming the component persists changes.
   */
  @Prop() editable: boolean = false;

  /**
   * Language for built-in messages. Use pt_BR, en_US or es_ES; pair with labels; avoid translating item labels implicitly.
   */
  @Prop() language: UaiBreadcrumbLanguage = 'pt_BR';

  /**
   * Partial overrides for built-in text. Use for accessible names and validation; pair with language; avoid empty action names.
   */
  @Prop() labels?: Partial<UaiBreadcrumbLabels>;

  /**
   * Optional heading level for the current label. Use inside page headers; pair with page semantics; avoid headings on ancestors.
   */
  @Prop() currentHeadingLevel?: 1 | 2 | 3 | 4 | 5 | 6;

  /**
   * Link activation with { label, href? }. Use to observe native navigation; pair with href; avoid duplicate router navigation.
   */
  @Event({ bubbles: true, composed: true }) uaiBreadcrumbItemClick!: EventEmitter<UaiBreadcrumbItem>;

  /**
   * Rename request with original index and old/new value. Use to update items; pair with editable; avoid mutating input data.
   */
  @Event({ bubbles: true, composed: true }) uaiBreadcrumbItemEdit!: EventEmitter<UaiBreadcrumbEditDetail>;

  @State() parsedItems: UaiBreadcrumbItem[] = [];
  @State() editing = false;
  @State() draft = '';
  @State() invalid = false;
  @State() opened = false;

  private readonly panelId = `uai-breadcrumb-panel-${++instances}`;
  private toggle?: HTMLUaiButtonElement;
  private editButton?: HTMLUaiButtonElement;
  private input?: HTMLUaiInputElement;
  private panel?: HTMLDivElement;
  private overlay?: UaiOverlay;
  private focusEditor = false;
  private restoreEditorFocus = false;
  private original?: { index: number; label: string };

  @Watch('items')
  protected parseItems(value: string | UaiBreadcrumbItem[]): void {
    this.closeOverlay();
    this.cancelEditing(false);
    let parsed: unknown = value;
    if (typeof value === 'string') {
      try {
        parsed = JSON.parse(value);
      } catch (error) {
        console.warn('[uai-breadcrumb] Failed to parse items:', error);
        this.parsedItems = [];
        return;
      }
    }
    if (!Array.isArray(parsed) || !parsed.every(isItem)) {
      console.warn('[uai-breadcrumb] Expected items to be an array of { label: string; href?: string }.');
      this.parsedItems = [];
      return;
    }
    this.parsedItems = parsed;
  }

  @Watch('wrapItems')
  protected wrapChanged(): void {
    this.closeOverlay();
  }

  @Watch('editable')
  protected editableChanged(): void {
    if (!this.editable) this.cancelEditing(false);
  }

  componentWillLoad(): void {
    this.parseItems(this.items);
  }

  componentDidRender(): void {
    if (this.focusEditor && this.input) {
      this.focusEditor = false;
      void this.input.setFocus();
    }
    if (this.restoreEditorFocus) {
      this.restoreEditorFocus = false;
      if (this.editButton?.isConnected) void this.editButton.setFocus();
    }
  }

  disconnectedCallback(): void {
    this.closeOverlay();
  }

  private get texts(): UaiBreadcrumbLabels {
    let language = this.language;
    if (!Object.prototype.hasOwnProperty.call(TEXTS, language)) {
      warnLegacyValue('uai-breadcrumb', 'language', language, 'pt_BR');
      language = 'pt_BR';
    }
    return { ...TEXTS[language], ...this.labels };
  }

  private closeOverlay(): void {
    this.overlay?.destroy();
    this.overlay = undefined;
    this.opened = false;
  }

  private toggleOverlay = (): void => {
    if (this.overlay?.isOpen) {
      this.closeOverlay();
      return;
    }
    if (!this.toggle || !this.panel) return;
    this.overlay?.destroy();
    this.overlay = new UaiOverlay({
      trigger: this.toggle,
      panel: this.panel,
      onClose: (reason) => {
        this.opened = false;
        if (reason === 'escape') void this.toggle?.setFocus();
      },
    });
    this.overlay.open();
    this.opened = true;
    (this.panel.querySelector<HTMLAnchorElement>('a') || this.panel).focus();
  };

  private activate = (item: UaiBreadcrumbItem): void => {
    this.uaiBreadcrumbItemClick.emit({ label: item.label, ...(item.href ? { href: item.href } : {}) });
    this.closeOverlay();
  };

  private beginEditing = (): void => {
    const index = this.parsedItems.length - 1;
    this.original = { index, label: this.parsedItems[index].label };
    this.draft = this.original.label;
    this.invalid = false;
    this.focusEditor = true;
    this.editing = true;
    this.closeOverlay();
  };

  private cancelEditing(restore: boolean): void {
    if (!this.editing) return;
    this.restoreEditorFocus = restore;
    this.focusEditor = false;
    this.original = undefined;
    this.invalid = false;
    this.editing = false;
  }

  private confirm = (): void => {
    if (!this.original) return;
    if (!this.draft.trim()) {
      this.invalid = true;
      void this.input?.setFocus();
      return;
    }
    const { index, label: oldValue } = this.original;
    const value = this.draft;
    this.cancelEditing(true);
    if (value !== oldValue) this.uaiBreadcrumbItemEdit.emit({ index, oldValue, value });
  };

  private submit = (event: CustomEvent<{ event: KeyboardEvent; value: string }>): void => {
    event.stopPropagation();
    event.detail.event.preventDefault();
    if (event.detail.event.isComposing) return;
    this.draft = event.detail.value;
    this.confirm();
  };

  private editorKeydown = (event: KeyboardEvent): void => {
    if (event.key !== 'Escape' || event.isComposing) return;
    event.preventDefault();
    event.stopPropagation();
    this.cancelEditing(true);
  };

  private renderEditor() {
    const texts = this.texts;
    return (
      <div class="breadcrumb__editor" onKeyDown={this.editorKeydown}>
        <uai-input
          ref={(el) => (this.input = el)}
          size="short"
          value={this.draft}
          ariaLabel={texts.input}
          danger={this.invalid}
          errorMessage={texts.required}
          onUaiChange={(event: CustomEvent<{ value: string }>) => {
            event.stopPropagation();
            this.draft = event.detail.value;
            this.invalid = false;
          }}
          onUaiSubmit={this.submit}
        />
        <uai-button
          class="breadcrumb__confirm"
          size="short"
          variant="text"
          color="content"
          icon="check"
          ariaLabel={texts.confirm}
          onUaiClick={this.confirm}
        />
        <uai-button
          class="breadcrumb__cancel"
          size="short"
          variant="text"
          color="content"
          icon="close"
          ariaLabel={texts.cancel}
          onUaiClick={() => this.cancelEditing(true)}
        />
      </div>
    );
  }

  private renderItem(item: UaiBreadcrumbItem, index: number, popup = false) {
    const current = index === this.parsedItems.length - 1;
    const content = (
      <uai-typo tag="span" variant="body-base" bold={current ? 'semibold' : 'regular'} margin={false}>
        {item.label}
      </uai-typo>
    );
    return (
      <li
        class={{ breadcrumb__item: true, 'breadcrumb__item--current': current, 'breadcrumb__item--popup': popup }}
        key={`${popup ? 'popup' : 'item'}-${index}`}
      >
        {current && this.editing ? (
          this.renderEditor()
        ) : (
          <div class="breadcrumb__content">
            <span
              class="breadcrumb__label"
              role={current && this.currentHeadingLevel ? 'heading' : undefined}
              aria-level={current ? this.currentHeadingLevel : undefined}
            >
              {item.href ? (
                <a
                  class="breadcrumb__link"
                  href={item.href}
                  aria-current={current ? 'page' : undefined}
                  onClick={() => this.activate(item)}
                >
                  {content}
                </a>
              ) : (
                <span class="breadcrumb__text" aria-current={current ? 'page' : undefined}>{content}</span>
              )}
            </span>
            {current && this.editable && (
              <uai-button
                class="breadcrumb__edit"
                ref={(el) => (this.editButton = el)}
                size="short"
                variant="text"
                color="content"
                icon="edit"
                ariaLabel={this.texts.edit}
                onUaiClick={this.beginEditing}
              />
            )}
          </div>
        )}
        {!popup && !current && (
          <uai-icon class="breadcrumb__separator" name="arrow-right" size="x-small" aria-hidden="true" />
        )}
      </li>
    );
  }

  private renderCollapsed() {
    return (
      <li class="breadcrumb__item" key="collapsed">
        <uai-button
          class="breadcrumb__toggle"
          ref={(el) => (this.toggle = el)}
          size="short"
          variant="text"
          color="content"
          icon="more-options-horizontal"
          ariaLabel={this.texts.hiddenItems}
          ariaExpanded={this.opened ? 'true' : 'false'}
          onUaiClick={this.toggleOverlay}
        />
        <uai-icon class="breadcrumb__separator" name="arrow-right" size="x-small" aria-hidden="true" />
      </li>
    );
  }

  render() {
    const collapsed = this.wrapItems && this.parsedItems.length > 3;
    const last = this.parsedItems.length - 1;
    return (
      <Host>
        {this.parsedItems.length === 0 ? (
          <uai-typo class="breadcrumb__empty" variant="body-base" margin={false}>
            {this.texts.empty}
          </uai-typo>
        ) : (
          <nav aria-label={this.texts.navigation}>
            <ol class="breadcrumb__list">
              {collapsed
                ? [
                    this.renderItem(this.parsedItems[0], 0),
                    this.renderCollapsed(),
                    this.renderItem(this.parsedItems[last], last),
                  ]
                : this.parsedItems.map((item, index) => this.renderItem(item, index))}
            </ol>
            {collapsed && (
              <div id={this.panelId} class="breadcrumb__panel" tabindex="-1" ref={(el) => (this.panel = el)}>
                <ul class="breadcrumb__hidden-items">
                  {this.parsedItems.slice(1, -1).map((item, index) => this.renderItem(item, index + 1, true))}
                </ul>
              </div>
            )}
          </nav>
        )}
      </Host>
    );
  }
}
