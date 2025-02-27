import { Component, Host, h, Element, Prop, State, Event, EventEmitter } from '@stencil/core';
import { getScrollParent } from '../../utils/position-element';
import { pt_BR, en_US, es_MX } from './languages';

export type PaginationOptionsPositionType = 'auto' | 'top' | 'bottom';
@Component({
  tag: 'bds-pagination',
  styleUrl: 'pagination.scss',
  shadow: true,
})
export class BdsPagination {
  // Variável que armazena o número do primeiro item sendo exibido na página atual
  startItem: number;
  // Variável que armazena o número do último item sendo exibido na página atual
  endItem: number;

  // Elemento HTML nativo onde o componente será renderizado
  @Element() private el!: HTMLElement;
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

  @State() intoView?: HTMLElement = null;
  @State() currentPage: number;
  @State() itemsPerPage: number;
  @State() totalPages: number;

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

  componentWillLoad() {
    this.intoView = getScrollParent(this.el);
    this.itemsPerPage = this.itemsPage?.length > 0 ? this.itemsPage[0] : this.numberItems;
    this.totalPages = this.pages || Math.ceil(this.numberItems / this.itemsPerPage);
    this.currentPage = this.startedPage;
  }

  handlePageChange(el: number) {
    const newPage = el;
    this.currentPage = newPage;
    this.updateItemRange();
    this.bdsPaginationChange.emit(this.currentPage);
  }

  handleItemsPerPageChange(el: number) {
    this.itemsPerPage = el;
    this.totalPages = Math.ceil(this.numberItems / this.itemsPerPage);
    this.currentPage = 1; // Reset para a primeira página ao mudar itens por página
    this.updateItemRange();
    this.bdsItemsPerPageChange.emit(this.itemsPerPage);
  }

  firstPage = () => {
    this.currentPage = 1;
  };

  prevPage = () => {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  };

  nextPage = () => {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  };

  lastPage = () => {
    this.currentPage = this.totalPages;
  };

  updateItemRange() {
    this.startItem = (this.currentPage - 1) * this.itemsPerPage + 1;
    this.endItem = Math.min(this.currentPage * this.itemsPerPage, this.numberItems);
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
    const optionsPages = Array.from({ length: this.totalPages }, (_, i) => ({
      value: (i + 1).toString(),
      label: (i + 1).toString(),
    }));
    const optionsItemsPage = this.itemsPage?.map((item) => ({
      value: item.toString(),
      label: item.toString(),
    }));
    return (
      <Host class={{ full_width: this.pageCounter }}>
        <bds-grid justify-content="space-between">
          {this.itemsPerPage && (
            <bds-grid gap="1" align-items="center" class="items_per_page">
              <bds-typo variant="fs-14">{currentLanguage.itemsPerPage}:</bds-typo>
              <bds-select
                class="actions_select"
                options={optionsItemsPage}
                value={this.itemsPerPage.toString()}
                options-position={this.optionsPosition}
                onBdsChange={(ev) => this.handleItemsPerPageChange(parseFloat(ev.detail.value))}
              ></bds-select>
              <bds-typo variant="fs-14" no-wrap="true">
                {this.startItem}-{this.endItem} {currentLanguage.of} {this.numberItems}
              </bds-typo>
            </bds-grid>
          )}

          <bds-grid gap="1" align-items="center" class="actions">
            <bds-button-icon
              onBdsClick={() => this.firstPage()}
              size="short"
              variant="secondary"
              icon="arrow-first"
              dataTest={this.dtButtonInitial}
            ></bds-button-icon>
            <bds-button-icon
              onBdsClick={() => this.prevPage()}
              size="short"
              variant="secondary"
              icon="arrow-left"
              dataTest={this.dtButtonPrev}
            ></bds-button-icon>

            {(this.currentPage || this.startedPage) && (
              <bds-select
                class="actions_select"
                options={optionsPages}
                value={this.currentPage ? this.currentPage.toString() : this.startedPage.toString()}
                options-position={this.optionsPosition}
                onBdsChange={(ev) => this.handlePageChange(parseFloat(ev.detail.value))}
              ></bds-select>
            )}
            {this.pageCounter && (
              <bds-typo class="actions--text" variant="fs-14" no-wrap="true">
                {currentLanguage.of} {this.totalPages}{' '}
                {this.totalPages > 1 ? currentLanguage.pages : currentLanguage.page}
              </bds-typo>
            )}
            <bds-button-icon
              onBdsClick={() => this.nextPage()}
              size="short"
              variant="secondary"
              icon="arrow-right"
              dataTest={this.dtButtonNext}
            ></bds-button-icon>
            <bds-button-icon
              onBdsClick={() => this.lastPage()}
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
