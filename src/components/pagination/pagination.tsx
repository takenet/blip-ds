import { Component, Host, h, Element, Prop, State, Event, EventEmitter, Watch } from '@stencil/core';
import { getScrollParent } from '../../utils/position-element';
import { pt_BR, en_US, es_MX } from './languages';

export type PaginationOptionsPositionType = 'auto' | 'top' | 'bottom';

// Constante que define o tamanho do chunk de páginas a serem carregadas por vez
const PAGE_LOAD_CHUNK_SIZE = 100;

@Component({
  tag: 'bds-pagination',
  styleUrl: 'pagination.scss',
  shadow: true,
})
export class Pagination {
  // Elemento HTML nativo onde o componente será renderizado
  @Element() private el!: HTMLElement;

  /**
   * Estado que armazena o valor selecionado no seletor de página.
   * Inicialmente, é configurado com a página inicial (startedPage).
   */
  @State() value: number = this.startedPage;

  // Estado que armazena o valor selecionado no seletor de itens por página
  @State() itemValue: number;

  /**
   * Estado que controla se o seletor de opções de página está aberto ou fechado.
   */
  @State() openSelect: boolean;

  /**
   * Estado que armazena o número de páginas, gerado com base no total de itens e itens por página.
   */
  @State() paginationNumbers = [];

  /**
   * Estado que armazena apenas as opções de página visíveis para renderização otimizada.
   */
  @State() visiblePageOptions = [];

  /**
   * Estado que controla quantas páginas foram carregadas no select (para lazy loading).
   * Começa com PAGE_LOAD_CHUNK_SIZE páginas conforme solicitado.
   */
  @State() loadedPagesCount = PAGE_LOAD_CHUNK_SIZE;

  /**
   * Estado que controla se estamos no modo de paginação reversa (carregando do final para o início).
   */
  @State() isReversePaginationMode = false;

  // Estado que armazena o número de itens por página selecionado
  @State() itemsPerPage: number;

  // Estado que guarda o elemento pai com rolagem (se houver)
  @State() intoView?: HTMLElement = null;

  /**
   * Propriedade para receber o número total de páginas, baseado no total de itens e itens por página.
   */
  @Prop({ mutable: true, reflect: true }) pages?: number;

  /**
   * Propriedade que define a página inicial ao renderizar o componente.
   */
  @Prop() startedPage?: number;

  /**
   * Define a posição do menu de opções. Pode ser 'bottom' ou 'top'.
   * Padrão é 'auto', que ajusta automaticamente a posição.
   */
  @Prop() optionsPosition?: PaginationOptionsPositionType = 'auto';

  // Propriedade que controla se o contador de páginas será exibido
  @Prop() pageCounter?: boolean = false;

  // Propriedade para receber as opções de itens por página (por exemplo, [10, 20, 30])
  @Prop({ mutable: true, reflect: true }) itemsPage?: any;

  // Propriedade que define o número total de itens que serão paginados
  @Prop() numberItems?: number;

  // Propriedade para definir o idioma do componente (opcional)
  @Prop() language?: string = 'pt_BR';

  /**
   * Propriedade de teste para especificamente testar a ação do botão inicial.
   * dtButtonInitial é o data-test para o botão inicial.
   */
  @Prop() dtButtonInitial?: string = null;

  /**
   * Propriedade de teste para especificamente testar a ação do botão de página anterior.
   * dtButtonPrev é o data-test para o botão anterior.
   */
  @Prop() dtButtonPrev?: string = null;

  /**
   * Propriedade de teste para especificamente testar o seletor de número de páginas.
   * dtSelectNumber é o data-test para o seletor de número de páginas.
   */
  @Prop() dtSelectNumber?: string = null;

  /**
   * Propriedade de teste para especificamente testar a ação do botão de próxima página.
   * dtButtonNext é o data-test para o botão próximo.
   */
  @Prop() dtButtonNext?: string = null;

  /**
   * Propriedade de teste para especificamente testar a ação do botão final.
   * dtButtonEnd é o data-test para o botão final.
   */
  @Prop() dtButtonEnd?: string = null;

  /**
   * Evento emitido quando o valor da página atual é alterado.
   * Pode ser escutado para realizar ações específicas ao mudar de página.
   */
  @Event() bdsPaginationChange: EventEmitter;
  /**
   * Evento emitido quando o valor da página atual é alterado.
   * Pode ser escutado para realizar ações específicas ao mudar de página.
   */
  @Event() bdsItemsPerPageChange: EventEmitter;

  // Variável que armazena o número do primeiro item sendo exibido na página atual
  startItem: number;

  // Variável que armazena o número do último item sendo exibido na página atual
  endItem: number;

  // Referência para o elemento select de páginas
  private selectElement?: HTMLBdsSelectElement;

  componentWillLoad() {
    this.countPage();
    this.intoView = getScrollParent(this.el);
    this.processItemsPage();
    if (this.pageCounter) {
      this.itemValue = this.itemsPage[0];
    }
    this.itemSelected(this.itemValue);
    this.countItem();
  }

  componentDidLoad() {
    this.setupSelectScrollListener();
  }

  componentDidUpdate() {
    this.setupSelectScrollListener();
  }

  /**
   * Configura o event listener de scroll no dropdown do select.
   */
  setupSelectScrollListener() {
    if (this.selectElement) {
      // Remove listener existente para evitar duplicatas
      this.removeSelectScrollListener();
      
      // Adiciona listener ao dropdown do select
      const dropdown = this.selectElement.shadowRoot?.querySelector('.select__options');
      if (dropdown) {
        dropdown.addEventListener('scroll', this.onSelectScroll);
      }
    }
  }

  /**
   * Remove o event listener de scroll.
   */
  removeSelectScrollListener() {
    if (this.selectElement) {
      const dropdown = this.selectElement.shadowRoot?.querySelector('.select__options');
      if (dropdown) {
        dropdown.removeEventListener('scroll', this.onSelectScroll);
      }
    }
  }

  disconnectedCallback() {
    this.removeSelectScrollListener();
  }

  @Watch('pages')
  @Watch('startedPage')
  pagesChanged(): void {
    this.loadedPagesCount = PAGE_LOAD_CHUNK_SIZE; // Reset para PAGE_LOAD_CHUNK_SIZE páginas conforme solicitado
    this.isReversePaginationMode = false; // Reset para modo normal
    this.countPage();
  }

  @Watch('value')
  valueChanged(): void {
    this.bdsPaginationChange.emit(this.value);
    this.updateVisiblePageOptions();
  }

  processItemsPage() {
    if (typeof this.itemsPage === 'string') {
      try {
        this.itemsPage = JSON.parse(this.itemsPage.replace(/'/g, '"'));
      } catch (error) {
        this.itemsPage = [];
      }
    }
  }

  countItem() {
    if (this.pageCounter) {
      const pages = this.numberItems / this.itemValue;
      this.pages = Math.ceil(pages);
    }
  }

  countPage() {
    if (this.paginationNumbers.length !== 0) {
      this.paginationNumbers = [];
    }
    if (this.paginationNumbers.length === 0) {
      for (let i = 1; i <= this.pages; i++) {
        this.paginationNumbers.push(i);
      }
      if (this.startedPage && this.startedPage < this.pages) {
        this.value = this.startedPage;
      } else {
        this.value = this.paginationNumbers[0];
      }
    }
    this.updateVisiblePageOptions();
  }

  /**
   * Atualiza as opções de página visíveis para renderização otimizada.
   * Implementa lazy loading com modo normal (do início) e modo reverso (do final).
   * 
   * Comportamento:
   * - Para ≤100 páginas: mostra todas
   * - Para >100 páginas no modo normal: mostra páginas 1 até loadedPagesCount
   * - Para >100 páginas no modo reverso: mostra últimas loadedPagesCount páginas
   * - Garante que a página atual esteja sempre visível nas opções
   */
  updateVisiblePageOptions() {
    if (!this.pages || this.pages <= 0) {
      this.visiblePageOptions = [];
      return;
    }

    // Para um número pequeno de páginas (≤PAGE_LOAD_CHUNK_SIZE), mostra todas
    if (this.pages <= PAGE_LOAD_CHUNK_SIZE) {
      this.visiblePageOptions = [...this.paginationNumbers];
      this.isReversePaginationMode = false;
      return;
    }

    const currentPage = this.value || 1;

    // Determinar se devemos usar modo reverso baseado na página atual
    // Se a página atual está próxima do final (últimas 50 páginas), usar modo reverso
    const shouldUseReverseMode = currentPage > (this.pages - 50);

    if (shouldUseReverseMode) {
      this.isReversePaginationMode = true;
      this.updateVisiblePageOptionsReverse();
    } else {
      // Verificar se a página atual está além das páginas carregadas no modo normal
      if (currentPage > this.loadedPagesCount) {
        // Expandir o range para incluir a página atual
        this.loadedPagesCount = Math.max(this.loadedPagesCount, currentPage);
      }
      this.isReversePaginationMode = false;
      this.updateVisiblePageOptionsNormal();
    }
  }

  /**
   * Atualiza as opções no modo normal (do início para o final).
   */
  private updateVisiblePageOptionsNormal() {
    const maxPagesToShow = Math.min(this.loadedPagesCount, this.pages);
    
    this.visiblePageOptions = [];
    for (let i = 1; i <= maxPagesToShow; i++) {
      this.visiblePageOptions.push(i);
    }
  }

  /**
   * Atualiza as opções no modo reverso (do final para o início).
   */
  private updateVisiblePageOptionsReverse() {
    const maxPagesToShow = Math.min(this.loadedPagesCount, this.pages);
    const startPage = Math.max(1, this.pages - maxPagesToShow + 1);
    
    this.visiblePageOptions = [];
    for (let i = startPage; i <= this.pages; i++) {
      this.visiblePageOptions.push(i);
    }
  }

  nextPage = (event: Event) => {
    const el = this.value;
    if (el < this.pages) {
      event.preventDefault();
      const newValue = this.value + 1;
      
      // Update visible options BEFORE changing value to ensure select component can find the option
      this.ensurePageIsVisible(newValue);
      
      this.value = newValue;
      this.updateItemRange();
    }
  };

  previewPage = (event: Event) => {
    const el = this.value;
    if (el > 1) {
      event.preventDefault();
      const newValue = this.value - 1;
      
      // Update visible options BEFORE changing value to ensure select component can find the option
      this.ensurePageIsVisible(newValue);
      
      this.value = newValue;
      this.updateItemRange();
    }
  };

  firstPage = (event: Event) => {
    const el = this.value;
    if (el > 1) {
      event.preventDefault();
      const newValue = this.paginationNumbers[0];
      
      // Update visible options BEFORE changing value to ensure select component can find the option
      this.ensurePageIsVisible(newValue);
      
      this.value = newValue;
      this.updateItemRange();
    }
  };

  lastPage = (event: Event) => {
    const el = this.value;
    if (el < this.pages) {
      event.preventDefault();
      const newValue = this.pages;
      
      // Update visible options BEFORE changing value to ensure select component can find the option
      this.ensurePageIsVisible(newValue);
      
      // Implementar novo comportamento: ao clicar na última página,
      // carregar apenas as últimas PAGE_LOAD_CHUNK_SIZE páginas
      if (this.pages > PAGE_LOAD_CHUNK_SIZE) {
        this.isReversePaginationMode = true;
        this.loadedPagesCount = PAGE_LOAD_CHUNK_SIZE;
        this.updateVisiblePageOptions();
      }
      
      this.value = newValue;
      this.updateItemRange();
    }
  };

  openOptions = () => {
    this.openSelect = !this.openSelect;
  };

  onBlur = () => {
    this.openSelect = false;
  };

  optionSelected(index) {
    // No need to call ensurePageIsVisible here since the option is already visible
    // (user selected it from the dropdown)
    this.value = index;
    this.openOptions();
    this.updateItemRange();
  }

  /**
   * Ensures that a specific page number is visible in the visiblePageOptions.
   * This method should be called BEFORE changing the value to prevent the select 
   * component from trying to display a value that doesn't have a corresponding option.
   */
  private ensurePageIsVisible(pageNumber: number) {
    if (!pageNumber || pageNumber < 1 || pageNumber > this.pages) {
      return;
    }

    // If the page is already visible, no need to update
    if (this.visiblePageOptions.includes(pageNumber)) {
      return;
    }

    // Determine if we should use reverse mode based on the target page
    const shouldUseReverseMode = pageNumber > (this.pages - 50);

    if (shouldUseReverseMode) {
      this.isReversePaginationMode = true;
      // Ensure we load enough pages to include the target page
      const minPagesNeeded = this.pages - pageNumber + 1;
      if (this.loadedPagesCount < minPagesNeeded) {
        this.loadedPagesCount = Math.min(this.pages, Math.max(PAGE_LOAD_CHUNK_SIZE, minPagesNeeded));
      }
    } else {
      this.isReversePaginationMode = false;
      // Ensure we load enough pages to include the target page
      if (this.loadedPagesCount < pageNumber) {
        this.loadedPagesCount = Math.max(this.loadedPagesCount, pageNumber);
      }
    }

    // Update the visible options with the new configuration
    this.updateVisiblePageOptions();
  }

  /**
   * Allows navigation to a specific page even if not in visible options.
   */
  navigateToPage(pageNumber: number) {
    const page = Math.max(1, Math.min(pageNumber, this.pages));
    if (page !== this.value) {
      // Update visible options BEFORE changing value to ensure select component can find the option
      this.ensurePageIsVisible(page);
      
      this.value = page;
      this.updateItemRange();
    }
  }

  /**
   * Manipula o evento de scroll no select para implementar lazy loading bidirecional.
   */
  onSelectScroll = (event: Event) => {
    const target = event.target as HTMLElement;
    const threshold = 50; // Pixels do final/início para carregar mais
    
    if (this.isReversePaginationMode) {
      // No modo reverso, verifica se o usuário está no topo para carregar páginas anteriores
      if (target.scrollTop <= threshold) {
        this.loadPreviousPages();
      }
    } else {
      // No modo normal, verifica se o usuário está no final para carregar mais páginas
      if (target.scrollTop + target.clientHeight >= target.scrollHeight - threshold) {
        this.loadMorePages();
      }
    }
  };

  /**
   * Carrega mais páginas quando o usuário scroll próximo ao final (modo normal).
   * Implementa lazy loading conforme solicitado: carrega PAGE_LOAD_CHUNK_SIZE páginas por vez.
   */
  loadMorePages() {
    if (!this.isReversePaginationMode && this.loadedPagesCount < this.pages) {
      // Incrementa em PAGE_LOAD_CHUNK_SIZE páginas por vez conforme solicitado
      const newLoadedCount = Math.min(this.pages, this.loadedPagesCount + PAGE_LOAD_CHUNK_SIZE);
      if (newLoadedCount > this.loadedPagesCount) {
        this.loadedPagesCount = newLoadedCount;
        this.updateVisiblePageOptions();
      }
    }
  }

  /**
   * Carrega páginas anteriores quando o usuário scroll próximo ao topo (modo reverso).
   * Implementa lazy loading reverso: carrega PAGE_LOAD_CHUNK_SIZE páginas anteriores por vez.
   */
  loadPreviousPages() {
    if (this.isReversePaginationMode && this.loadedPagesCount < this.pages) {
      // Incrementa em PAGE_LOAD_CHUNK_SIZE páginas por vez conforme solicitado
      const newLoadedCount = Math.min(this.pages, this.loadedPagesCount + PAGE_LOAD_CHUNK_SIZE);
      if (newLoadedCount > this.loadedPagesCount) {
        this.loadedPagesCount = newLoadedCount;
        this.updateVisiblePageOptions();
      }
    }
  }

  @Watch('itemValue')
  itemSelected(index) {
    this.itemValue = index;
    this.itemsPerPage = index;
    this.openOptions();
    this.countItem();
    this.updateItemRange();
    this.bdsItemsPerPageChange.emit(this.itemsPerPage);
  }

  updateItemRange() {
    this.startItem = (this.value - 1) * this.itemsPerPage + 1;
    this.endItem = Math.min(this.value * this.itemsPerPage, this.numberItems);
  }

  get currentLanguage() {
    switch (this.language) {
      case 'en_US':
        return en_US;
      case 'es_MX':
        return es_MX;
      default:
        return pt_BR;
    }
  }

  render() {
    const { currentLanguage } = this;
    return (
      <Host class={{ full_width: this.pageCounter }}>
        <bds-grid justify-content="space-between">
          {this.itemsPerPage && this.itemsPage && (
            <bds-grid gap="1" align-items="center" class="items_per_page">
              <bds-typo variant="fs-14">{currentLanguage.itemsPerPage}:</bds-typo>
              <bds-select class="actions_select" value={this.itemValue} options-position={this.optionsPosition}>
                {this.itemsPage?.map((el, index) => (
                  <bds-select-option key={index} value={el} onClick={() => this.itemSelected(el)}>
                    {el}
                  </bds-select-option>
                ))}
              </bds-select>
              <bds-typo variant="fs-14" no-wrap="true">
                {this.startItem}-{this.endItem} {currentLanguage.of} {this.numberItems}
              </bds-typo>
            </bds-grid>
          )}

          <bds-grid gap="1" align-items="center" class="actions">
            <bds-button-icon
              onBdsClick={(ev) => this.firstPage(ev)}
              size="short"
              variant="secondary"
              icon="arrow-first"
              dataTest={this.dtButtonInitial}
            ></bds-button-icon>
            <bds-button-icon
              onBdsClick={(ev) => this.previewPage(ev)}
              size="short"
              variant="secondary"
              icon="arrow-left"
              dataTest={this.dtButtonPrev}
            ></bds-button-icon>

            <bds-select 
              ref={(el) => this.selectElement = el}
              class="actions_select" 
              value={this.value} 
              options-position={this.optionsPosition}
            >
              {this.visiblePageOptions.map((el, index) => (
                <bds-select-option key={index} value={el} onClick={() => this.optionSelected(el)}>
                  {el}
                </bds-select-option>
              ))}
            </bds-select>
            {this.pageCounter && (
              <bds-typo class="actions--text" variant="fs-14" no-wrap="true">
                {currentLanguage.of} {this.pages} {currentLanguage.pages}
              </bds-typo>
            )}
            <bds-button-icon
              onBdsClick={(ev) => this.nextPage(ev)}
              size="short"
              variant="secondary"
              icon="arrow-right"
              dataTest={this.dtButtonNext}
            ></bds-button-icon>
            <bds-button-icon
              onBdsClick={(ev) => this.lastPage(ev)}
              size="short"
              variant="secondary"
              icon="arrow-last"
              dataTest={this.dtButtonEnd}
            ></bds-button-icon>
          </bds-grid>
        </bds-grid>
      </Host>
    );
  }
}
