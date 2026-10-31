import { Component, Element, Event, EventEmitter, Host, Prop, Watch, h } from '@stencil/core';
import { warnLegacyValue } from '../../utils/deprecation';
import { UaiSelectChange } from '../uai-select/uai-select';

export type UaiPaginationLanguage = 'pt_BR' | 'en_US' | 'es_MX';

const TAG = 'uai-pagination';
const LANGUAGES: UaiPaginationLanguage[] = ['pt_BR', 'en_US', 'es_MX'];

const TEXTS: Record<
  UaiPaginationLanguage,
  {
    navigation: string;
    itemsPerPage: string;
    of: string;
    pages: string;
    page: string;
    first: string;
    previous: string;
    next: string;
    last: string;
  }
> = {
  pt_BR: {
    navigation: 'Paginação',
    itemsPerPage: 'Itens por página',
    of: 'de',
    pages: 'páginas',
    page: 'Página',
    first: 'Primeira página',
    previous: 'Página anterior',
    next: 'Próxima página',
    last: 'Última página',
  },
  en_US: {
    navigation: 'Pagination',
    itemsPerPage: 'Items per page',
    of: 'of',
    pages: 'pages',
    page: 'Page',
    first: 'First page',
    previous: 'Previous page',
    next: 'Next page',
    last: 'Last page',
  },
  es_MX: {
    navigation: 'Paginación',
    itemsPerPage: 'Elementos por página',
    of: 'de',
    pages: 'páginas',
    page: 'Página',
    first: 'Primera página',
    previous: 'Página anterior',
    next: 'Página siguiente',
    last: 'Última página',
  },
};

const toInteger = (value: unknown, fallback: number): number => {
  const number = Math.trunc(Number(value));
  return Number.isFinite(number) ? number : fallback;
};

/**
 * Navigation between pages of a list or table, with optional items per page and range. Use it below tables and lists
 * that are split into pages; the page is controlled with page and changes only on user action, announced by
 * uaiPaginationChange. Pair with UaiTable. Avoid it for infinite scrolling or for fewer than two pages. Wrap the app in
 * UaiThemeProvider.
 *
 * @part pagination - The navigation container.
 * @part page-size - The items per page selector.
 * @part page-select - The current page selector.
 */
@Component({
  tag: 'uai-pagination',
  styleUrl: 'uai-pagination.scss',
  shadow: true,
})
export class UaiPagination {
  @Element() el!: HTMLElement;

  /** Current page, starting at 1. Use it to control the page; pair with uaiPaginationChange; values outside 1..pages are clamped. */
  @Prop({ mutable: true, reflect: true }) page?: number = 1;

  /** Total number of pages. Use it when the server returns pages; ignored when total and pageSize are set. */
  @Prop() pages?: number = 0;

  /** Total number of items. Use with pageSize to derive the pages and show the "1-10 of 100" range; avoid it together with pages. */
  @Prop() total?: number = null;

  /** Items per page. Use with total and pageSizeOptions; pair with uaiPageSizeChange; avoid values missing from pageSizeOptions. */
  @Prop({ mutable: true, reflect: true }) pageSize?: number = null;

  /** Choices of items per page, such as [10, 20, 50]. Use to let people pick; leave empty to hide the selector. */
  @Prop() pageSizeOptions?: number[] = [];

  /** Shows "of N pages" next to the page selector. Use when the total of pages matters; avoid it in tight spaces. */
  @Prop() pageCounter?: boolean = false;

  /** Language of the texts: pt_BR, en_US or es_MX. Use the language of the interface; avoid mixing languages. */
  @Prop() language?: UaiPaginationLanguage = 'pt_BR';

  /** Test selector on the first page button. Use for automation; pair with semantic queries. */
  @Prop() dtButtonInitial?: string = null;

  /** Test selector on the previous page button. Use for automation; pair with semantic queries. */
  @Prop() dtButtonPrev?: string = null;

  /** Test selector on the page selector. Use for automation; pair with semantic queries. */
  @Prop() dtSelectNumber?: string = null;

  /** Test selector on the next page button. Use for automation; pair with semantic queries. */
  @Prop() dtButtonNext?: string = null;

  /** Test selector on the last page button. Use for automation; pair with semantic queries. */
  @Prop() dtButtonEnd?: string = null;

  /** Test selector on the items per page selector. Use for automation; pair with semantic queries. */
  @Prop() dtSelectSize?: string = null;

  /** Emitted when the person changes the page. detail: the new page number. */
  @Event() uaiPaginationChange!: EventEmitter<number>;

  /** Emitted when the person changes the items per page. detail: the new size. The page goes back to 1. */
  @Event() uaiPageSizeChange!: EventEmitter<number>;

  @Watch('pages')
  @Watch('total')
  @Watch('pageSize')
  @Watch('page')
  clampPage(): void {
    const clamped = this.clamp(this.page);
    if (clamped !== this.page) this.page = clamped;
  }

  componentWillLoad() {
    this.clampPage();
  }

  private get texts() {
    if ((LANGUAGES as string[]).includes(this.language)) return TEXTS[this.language];
    warnLegacyValue(TAG, 'language', this.language, 'pt_BR');
    return TEXTS.pt_BR;
  }

  private get sizes(): number[] {
    return Array.isArray(this.pageSizeOptions) ? this.pageSizeOptions.map((size) => toInteger(size, 0)).filter((size) => size > 0) : [];
  }

  private get size(): number {
    const size = toInteger(this.pageSize, 0);
    return size > 0 ? size : this.sizes[0] || 0;
  }

  private get totalPages(): number {
    const total = toInteger(this.total, -1);
    if (total >= 0 && this.size > 0) return Math.ceil(total / this.size);
    return Math.max(0, toInteger(this.pages, 0));
  }

  private clamp(page: number): number {
    return Math.min(Math.max(toInteger(page, 1), 1), Math.max(this.totalPages, 1));
  }

  private goTo(page: number) {
    const next = this.clamp(page);
    if (next === this.page) return;
    this.page = next;
    this.uaiPaginationChange.emit(next);
  }

  private onSizeChange = (event: CustomEvent<UaiSelectChange>): void => {
    event.stopPropagation();
    const size = toInteger(event.detail.value, 0);
    if (size <= 0 || size === this.size) return;
    this.pageSize = size;
    this.uaiPageSizeChange.emit(size);
    this.goTo(1);
  };

  private onPageChange = (event: CustomEvent<UaiSelectChange>): void => {
    event.stopPropagation();
    this.goTo(toInteger(event.detail.value, this.page));
  };

  private renderButton(icon: string, label: string, target: number, disabled: boolean, dataTest: string) {
    return (
      <uai-button
        variant="text"
        color="content"
        size="medium"
        icon={icon}
        aria-label={label}
        disabled={disabled}
        dataTest={dataTest}
        onUaiClick={() => this.goTo(target)}
      ></uai-button>
    );
  }

  render() {
    const { texts } = this;
    const totalPages = this.totalPages;
    const page = this.clamp(this.page);
    const size = this.size;
    const total = toInteger(this.total, -1);
    const sizes = this.sizes;
    const singlePage = totalPages <= 1;
    const atStart = singlePage || page <= 1;
    const atEnd = singlePage || page >= totalPages;
    const start = total > 0 && size > 0 ? (page - 1) * size + 1 : 0;
    const end = total > 0 && size > 0 ? Math.min(page * size, total) : 0;
    const pageOptions = Array.from({ length: totalPages }, (_, index) => ({ value: index + 1, label: String(index + 1) }));
    const sizeOptions = sizes.map((option) => ({ value: option, label: String(option) }));

    return (
      <Host>
        <nav class="pagination" part="pagination" aria-label={texts.navigation}>
          {sizes.length > 0 && (
            <div class="pagination__size">
              <uai-typo tag="span" variant="body-base" margin={false}>
                {texts.itemsPerPage}:
              </uai-typo>
              <uai-select
                class="pagination__select"
                part="page-size"
                size="medium"
                aria-label={texts.itemsPerPage}
                value={size}
                options={sizeOptions}
                dataTest={this.dtSelectSize}
                onUaiChange={this.onSizeChange}
              ></uai-select>
              {start > 0 && (
                <uai-typo class="pagination__range" tag="span" variant="body-base" margin={false}>
                  {start}-{end} {texts.of} {total}
                </uai-typo>
              )}
            </div>
          )}
          <div class="pagination__actions">
            {this.renderButton('arrow-first', texts.first, 1, atStart, this.dtButtonInitial)}
            {this.renderButton('arrow-left', texts.previous, page - 1, atStart, this.dtButtonPrev)}
            <uai-select
              class="pagination__select"
              part="page-select"
              size="medium"
              aria-label={texts.page}
              value={totalPages > 0 ? page : null}
              options={pageOptions}
              disabled={totalPages === 0}
              dataTest={this.dtSelectNumber}
              onUaiChange={this.onPageChange}
            ></uai-select>
            {this.pageCounter && (
              <uai-typo class="pagination__counter" tag="span" variant="body-base" margin={false}>
                {texts.of} {totalPages} {texts.pages}
              </uai-typo>
            )}
            {this.renderButton('arrow-right', texts.next, page + 1, atEnd, this.dtButtonNext)}
            {this.renderButton('arrow-last', texts.last, totalPages, atEnd, this.dtButtonEnd)}
          </div>
        </nav>
      </Host>
    );
  }
}
