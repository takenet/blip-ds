import { Component, Host, h, Element, Prop, State, Event, EventEmitter, Watch } from '@stencil/core';
import { SelectOptionsPositionType } from '../selects/select-interface';
import { getScrollParent, positionAbsoluteElement } from '../../utils/position-element';
export type PaginationOptionsPositionType = 'auto' | 'top' | 'bottom';
@Component({
  tag: 'bds-pagination',
  styleUrl: 'pagination.scss',
  shadow: true,
})
export class Pagination {
  private dropElement?: HTMLElement;
  private iconDropElement?: HTMLBdsIconElement;
  private positionHeightDrop?: SelectOptionsPositionType;

  @Element() private el!: HTMLElement;
  /**
   * State for keep the value selected on select:
   */
  @State() value: number;
  /**
   * State for keep if the select are open or close;
   */
  @State() openSelect: boolean;
  /**
   * State for recive and save the number of pages.
   */
  @State() paginationNumbers = [];

  @State() intoView?: HTMLElement = null;

  /**
   * Prop to recive the number of pages.
   */
  @Prop() pages?: number;
  /**
   * When the component are render this page are set.
   */
  @Prop() startedPage?: number;
  /**
   * Set the placement of the options menu. Can be 'bottom' or 'top'.
   */
  @Prop() optionsPosition?: PaginationOptionsPositionType = 'auto';
  /**
   * When de value of component change, the event are dispache.
   */
  @Event() bdsPaginationChange: EventEmitter;

  componentWillLoad() {
    this.countPage();
    this.intoView = getScrollParent(this.el);
  }

  componentDidLoad() {
    if (this.optionsPosition != 'auto') {
      this.setDefaultPlacement(this.optionsPosition);
    } else {
      this.validatePositionDrop();
    }
  }

  private setDefaultPlacement(value: PaginationOptionsPositionType) {
    if (value == 'bottom') {
      this.dropElement.classList.add('select__options--position-bottom');
      this.iconDropElement.name = 'arrow-down';
    } else {
      this.dropElement.classList.add('select__options--position-top');
      this.iconDropElement.name = 'arrow-up';
    }
  }

  private validatePositionDrop() {
    const positionValue = positionAbsoluteElement({
      actionElement: this.el,
      changedElement: this.dropElement,
      intoView: this.intoView,
    });
    this.positionHeightDrop = positionValue.y as SelectOptionsPositionType;
    if (positionValue.y == 'bottom') {
      this.dropElement.classList.add('select__options--position-bottom');
      this.iconDropElement.name = 'arrow-down';
    } else {
      this.dropElement.classList.add('select__options--position-top');
      this.iconDropElement.name = 'arrow-up';
    }
  }

  @Watch('openSelect')
  protected isOpenChanged(isOpen: boolean): void {
    if (this.positionHeightDrop == 'bottom') {
      this.iconDropElement.name = this.openSelect ? 'arrow-up' : 'arrow-down';
    } else {
      this.iconDropElement.name = this.openSelect ? 'arrow-down' : 'arrow-up';
    }
    if (isOpen)
      if (this.optionsPosition != 'auto') {
        this.setDefaultPlacement(this.optionsPosition);
      } else {
        this.validatePositionDrop();
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

  private refDropdown = (el: HTMLElement): void => {
    this.dropElement = el;
  };

  private refIconDrop = (el: HTMLBdsIconElement) => {
    this.iconDropElement = el;
  };

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

  previewPage = (event: Event) => {
    const el = this.value;
    if (el > 1) {
      event.preventDefault();
      this.value = this.value - 1;
    }
  };

  nextPage = (event: Event) => {
    const el = this.value;
    if (el < this.pages) {
      event.preventDefault();
      this.value = this.value + 1;
    }
  };

  firstPage = (event: Event) => {
    const el = this.value;
    if (el > 1) {
      event.preventDefault();
      this.value = this.paginationNumbers[0];
    }
  };

  lastPage = (event: Event) => {
    const el = this.value;
    if (el < this.pages) {
      event.preventDefault();
      this.value = this.pages;
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
  }

  render() {
    return (
      <Host>
        <div class="actions">
          <bds-button-icon
            onClick={this.firstPage}
            size="short"
            variant="secondary"
            icon="arrow-first"
          ></bds-button-icon>
          <bds-button-icon
            onClick={this.previewPage}
            size="short"
            variant="secondary"
            icon="arrow-left"
          ></bds-button-icon>
          <div class="select">
            <div class="border-select">
              <div class={{ select_input: true }} id="select" onClick={this.openOptions} onBlur={this.onBlur}>
                <bds-typo variant="fs-14">{this.value}</bds-typo>
                <bds-icon ref={(el) => this.refIconDrop(el)} size="small"></bds-icon>
              </div>
            </div>
            <bds-paper
              ref={(el) => this.refDropdown(el)}
              class={{
                select__options: true,
                'select__options--open': this.openSelect,
              }}
            >
              <ul>
                {this.paginationNumbers.map((el, index) => (
                  <li onClick={() => this.optionSelected(el)} key={index} value={el}>
                    <bds-typo variant="fs-14">{el}</bds-typo>
                  </li>
                ))}
              </ul>
            </bds-paper>
          </div>

          <bds-button-icon
            onClick={this.nextPage}
            size="short"
            variant="secondary"
            icon="arrow-right"
          ></bds-button-icon>
          <bds-button-icon onClick={this.lastPage} size="short" variant="secondary" icon="arrow-last"></bds-button-icon>
        </div>
      </Host>
    );
  }
}
