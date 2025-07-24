import { Event, EventEmitter } from '../../stencil-public-runtime';
export type PaginationOptionsPositionType = 'auto' | 'top' | 'bottom';
export declare class Pagination {
  private el;
  private selectRef?;
  /**
   * Estado que armazena o valor selecionado no seletor de página.
   * Inicialmente, é configurado com a página inicial (startedPage).
   */
  value: number;
  itemValue: number;
  /**
   * Estado que controla se o seletor de opções de página está aberto ou fechado.
   */
  openSelect: boolean;
  /**
   * Estado que armazena o número de páginas, gerado com base no total de itens e itens por página.
   */
  paginationNumbers: any[];
  /**
   * Estado que controla o range de páginas carregadas para otimização de performance.
   */
  loadedPageRange: {
    start: number;
    end: number;
  };
  /**
   * Tamanho do batch de páginas carregadas por vez.
   */
  private pageLoadSize;
  itemsPerPage: number;
  intoView?: HTMLElement;
  /**
   * Propriedade para receber o número total de páginas, baseado no total de itens e itens por página.
   */
  pages?: number;
  /**
   * Propriedade que define a página inicial ao renderizar o componente.
   */
  startedPage?: number;
  /**
   * Define a posição do menu de opções. Pode ser 'bottom' ou 'top'.
   * Padrão é 'auto', que ajusta automaticamente a posição.
   */
  optionsPosition?: PaginationOptionsPositionType;
  pageCounter?: boolean;
  itemsPage?: any;
  numberItems?: number;
  language?: string;
  /**
   * Propriedade de teste para especificamente testar a ação do botão inicial.
   * dtButtonInitial é o data-test para o botão inicial.
   */
  dtButtonInitial?: string;
  /**
   * Propriedade de teste para especificamente testar a ação do botão de página anterior.
   * dtButtonPrev é o data-test para o botão anterior.
   */
  dtButtonPrev?: string;
  /**
   * Propriedade de teste para especificamente testar o seletor de número de páginas.
   * dtSelectNumber é o data-test para o seletor de número de páginas.
   */
  dtSelectNumber?: string;
  /**
   * Propriedade de teste para especificamente testar a ação do botão de próxima página.
   * dtButtonNext é o data-test para o botão próximo.
   */
  dtButtonNext?: string;
  /**
   * Propriedade de teste para especificamente testar a ação do botão final.
   * dtButtonEnd é o data-test para o botão final.
   */
  dtButtonEnd?: string;
  /**
   * Evento emitido quando o valor da página atual é alterado.
   * Pode ser escutado para realizar ações específicas ao mudar de página.
   */
  bdsPaginationChange: EventEmitter;
  /**
   * Evento emitido quando o valor da página atual é alterado.
   * Pode ser escutado para realizar ações específicas ao mudar de página.
   */
  bdsItemsPerPageChange: EventEmitter;
  startItem: number;
  endItem: number;
  componentWillLoad(): void;
  componentDidRender(): void;
  disconnectedCallback(): void;
  /**
   * Anexa o listener de scroll ao dropdown do select quando ele está disponível
   */
  private attachScrollListener;
  /**
   * Handle when select dropdown opens
   */
  private handleSelectOpen;
  /**
   * Scroll dropdown to the currently selected option when it opens
   */
  scrollToSelectedOption(): void;
  /**
   * Remove o listener de scroll do dropdown
   */
  private removeScrollListener;
  pagesChanged(): void;
  valueChanged(): void;
  processItemsPage(): void;
  countItem(): void;
  /**
   * Carrega um range específico de páginas centrado na página fornecida
   */
  loadPageRange(targetPage: number): void;
  /**
   * Carrega mais páginas baseado na direção da navegação
   */
  loadMorePages(direction: 'next' | 'prev' | 'first' | 'last'): void;
  countPage(): void;
  nextPage: (event: Event) => void;
  previewPage: (event: Event) => void;
  firstPage: (event: Event) => void;
  lastPage: (event: Event) => void;
  openOptions: () => void;
  onBlur: () => void;
  optionSelected(index: any): void;
  /**
   * Manipula o scroll no dropdown de páginas para carregar mais opções
   */
  handleSelectScroll: (event: Event) => void;
  /**
   * Carrega mais páginas para scroll (mantém as páginas existentes e adiciona novas)
   */
  loadMorePagesForScroll(direction: 'next' | 'prev'): void;
  itemSelected(index: any): void;
  updateItemRange(): void;
  get currentLanguage(): {
    itemsPerPage: string;
    of: string;
    items: string;
    pages: string;
  };
  render(): any;
}
