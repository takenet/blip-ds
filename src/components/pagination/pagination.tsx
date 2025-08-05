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
  @Event() bdsPaginationChange: EventEmitter<number>;
  /**
   * Evento emitido quando o valor da página atual é alterado.
   * Pode ser escutado para realizar ações específicas ao mudar de página.
   */
  @Event() bdsItemsPerPageChange: EventEmitter<number>;

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
  }

  nextPage = (event: Event) => {
    const el = this.value;
    if (el < this.pages) {
      event.preventDefault();
      this.value = this.value + 1;
      this.updateItemRange();
    }
  };

  previewPage = (event: Event) => {
    const el = this.value;
    if (el > 1) {
      event.preventDefault();
      this.value = this.value - 1;
      this.updateItemRange();
    }
  };

  firstPage = (event: Event) => {
    const el = this.value;
    if (el > 1) {
      event.preventDefault();
      this.value = this.paginationNumbers[0];
      this.updateItemRange();
    }
  };

  lastPage = (event: Event) => {
    const el = this.value;
    if (el < this.pages) {
      event.preventDefault();
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
    this.value = index;
    this.openOptions();
    this.updateItemRange();
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

            <bds-select class="actions_select" value={this.value} options-position={this.optionsPosition}>
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
