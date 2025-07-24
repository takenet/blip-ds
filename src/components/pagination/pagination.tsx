import { Component, Host, h, Element, Prop, State, Event, EventEmitter, Watch } from '@stencil/core';
import { getScrollParent } from '../../utils/position-element';
import { pt_BR, en_US, es_MX } from './languages';

export type PaginationOptionsPositionType = 'auto' | 'top' | 'bottom';
@Component({
  tag: 'bds-pagination',
  styleUrl: 'pagination.scss',
  shadow: true,
})
export class Pagination {
  // Elemento HTML nativo onde o componente será renderizado
  @Element() private el!: HTMLElement;

  // Referência para o elemento select de paginação
  private selectRef?: HTMLBdsSelectElement;

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
   * Estado que controla o range de páginas carregadas para otimização de performance.
   */
  @State() loadedPageRange = { start: 1, end: 100 };

  /**
   * Tamanho do batch de páginas carregadas por vez.
   */
  private pageLoadSize = 100;

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

  componentDidRender() {
    this.attachScrollListener();
  }

  disconnectedCallback() {
    this.removeScrollListener();
  }

  /**
   * Anexa o listener de scroll ao dropdown do select quando ele está disponível
   */
  private attachScrollListener() {
    if (this.selectRef) {
      // Busca o dropdown dentro do shadow root do select
      const dropdown = this.selectRef.shadowRoot?.querySelector('.select__options');
      if (dropdown && !dropdown.hasAttribute('data-scroll-listener-attached')) {
        dropdown.addEventListener('scroll', this.handleSelectScroll);
        dropdown.setAttribute('data-scroll-listener-attached', 'true');
      }
    }
  }

  /**
   * Remove o listener de scroll do dropdown
   */
  private removeScrollListener() {
    if (this.selectRef) {
      const dropdown = this.selectRef.shadowRoot?.querySelector('.select__options');
      if (dropdown) {
        dropdown.removeEventListener('scroll', this.handleSelectScroll);
        dropdown.removeAttribute('data-scroll-listener-attached');
      }
    }
  }

  @Watch('pages')
  @Watch('startedPage')
  pagesChanged(): void {
    this.countPage();
  }

  @Watch('value')
  valueChanged(): void {
    this.bdsPaginationChange.emit(this.value);
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

  /**
   * Carrega um range específico de páginas centrado na página fornecida
   */
  loadPageRange(targetPage: number) {
    if (!this.pages) return;
    
    const halfRange = Math.floor(this.pageLoadSize / 2);
    let start = Math.max(1, targetPage - halfRange);
    let end = Math.min(this.pages, start + this.pageLoadSize - 1);
    
    // Adjust start if we're near the end
    if (end - start < this.pageLoadSize - 1) {
      start = Math.max(1, end - this.pageLoadSize + 1);
    }
    
    this.loadedPageRange = { start, end };
    this.paginationNumbers = [];
    
    for (let i = start; i <= end; i++) {
      this.paginationNumbers.push(i);
    }
  }

  /**
   * Carrega mais páginas baseado na direção da navegação
   */
  loadMorePages(direction: 'next' | 'prev' | 'first' | 'last') {
    if (!this.pages) return;
    
    let newStart = this.loadedPageRange.start;
    let newEnd = this.loadedPageRange.end;
    
    switch (direction) {
      case 'next':
        if (newEnd < this.pages) {
          newStart = newEnd + 1;
          newEnd = Math.min(this.pages, newStart + this.pageLoadSize - 1);
        }
        break;
      case 'prev':
        if (newStart > 1) {
          newEnd = newStart - 1;
          newStart = Math.max(1, newEnd - this.pageLoadSize + 1);
        }
        break;
      case 'first':
        newStart = 1;
        newEnd = Math.min(this.pages, this.pageLoadSize);
        break;
      case 'last':
        newEnd = this.pages;
        newStart = Math.max(1, newEnd - this.pageLoadSize + 1);
        break;
    }
    
    this.loadedPageRange = { start: newStart, end: newEnd };
    this.paginationNumbers = [];
    
    for (let i = newStart; i <= newEnd; i++) {
      this.paginationNumbers.push(i);
    }
  }

  countPage() {
    if (this.paginationNumbers.length !== 0) {
      this.paginationNumbers = [];
    }
    if (this.paginationNumbers.length === 0) {
      // Load only a subset of pages for performance optimization
      const endPage = Math.min(this.pageLoadSize, this.pages || 0);
      this.loadedPageRange = { start: 1, end: endPage };
      
      for (let i = this.loadedPageRange.start; i <= this.loadedPageRange.end; i++) {
        this.paginationNumbers.push(i);
      }
      if (this.startedPage && this.startedPage < this.pages) {
        this.value = this.startedPage;
        // If started page is outside current range, load appropriate range
        if (this.startedPage > this.loadedPageRange.end) {
          this.loadPageRange(this.startedPage);
        }
      } else {
        this.value = this.paginationNumbers[0];
      }
    }
  }

  nextPage = (event: Event) => {
    const el = this.value;
    if (el < this.pages) {
      event.preventDefault();
      const newValue = this.value + 1;
      
      // Check if we need to load more pages
      if (newValue > this.loadedPageRange.end) {
        this.loadMorePages('next');
      }
      
      this.value = newValue;
      this.updateItemRange();
    }
  };

  previewPage = (event: Event) => {
    const el = this.value;
    if (el > 1) {
      event.preventDefault();
      const newValue = this.value - 1;
      
      // Check if we need to load more pages
      if (newValue < this.loadedPageRange.start) {
        this.loadMorePages('prev');
      }
      
      this.value = newValue;
      this.updateItemRange();
    }
  };

  firstPage = (event: Event) => {
    const el = this.value;
    if (el > 1) {
      event.preventDefault();
      this.loadMorePages('first');
      this.value = 1;
      this.updateItemRange();
    }
  };

  lastPage = (event: Event) => {
    const el = this.value;
    if (el < this.pages) {
      event.preventDefault();
      this.loadMorePages('last');
      this.value = this.pages;
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
    // If the selected page is outside current range, load appropriate range
    if (index < this.loadedPageRange.start || index > this.loadedPageRange.end) {
      this.loadPageRange(index);
    }
    
    this.value = index;
    this.openOptions();
    this.updateItemRange();
  }

  /**
   * Manipula o scroll no dropdown de páginas para carregar mais opções
   */
  handleSelectScroll = (event: Event) => {
    const target = event.target as HTMLElement;
    const { scrollTop, scrollHeight, clientHeight } = target;
    
    // Check if scrolled to bottom (load next pages)
    if (scrollTop + clientHeight >= scrollHeight - 10) {
      if (this.loadedPageRange.end < this.pages) {
        this.loadMorePagesForScroll('next');
      }
    }
    
    // Check if scrolled to top (load previous pages)  
    if (scrollTop <= 10) {
      if (this.loadedPageRange.start > 1) {
        this.loadMorePagesForScroll('prev');
      }
    }
  };

  /**
   * Carrega mais páginas para scroll (mantém as páginas existentes e adiciona novas)
   */
  loadMorePagesForScroll(direction: 'next' | 'prev') {
    if (!this.pages) return;
    
    const batchSize = 50; // Smaller batch for smooth scrolling
    let newStart = this.loadedPageRange.start;
    let newEnd = this.loadedPageRange.end;
    
    if (direction === 'next' && newEnd < this.pages) {
      // Extend the range to the right
      newEnd = Math.min(this.pages, newEnd + batchSize);
      this.loadedPageRange = { start: newStart, end: newEnd };
      
      // Add new pages to the existing array
      for (let i = this.loadedPageRange.end - batchSize + 1; i <= newEnd; i++) {
        if (i > 0 && !this.paginationNumbers.includes(i)) {
          this.paginationNumbers.push(i);
        }
      }
    } else if (direction === 'prev' && newStart > 1) {
      // Extend the range to the left
      const originalStart = newStart;
      newStart = Math.max(1, newStart - batchSize);
      this.loadedPageRange = { start: newStart, end: newEnd };
      
      // Add new pages to the beginning of the array
      const newPages = [];
      for (let i = newStart; i < originalStart; i++) {
        if (i > 0 && !this.paginationNumbers.includes(i)) {
          newPages.push(i);
        }
      }
      this.paginationNumbers = [...newPages, ...this.paginationNumbers];
    }
    
    // Force re-render to show new options
    this.paginationNumbers = [...this.paginationNumbers];
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
              ref={(el) => this.selectRef = el}
              class="actions_select" 
              value={this.value} 
              options-position={this.optionsPosition}
            >
              {this.paginationNumbers.map((el, index) => (
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
