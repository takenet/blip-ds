import { Component, Host, h, Element, Prop, State, Event, EventEmitter, Watch } from '@stencil/core';
import { getScrollParent } from '../../utils/position-element';
export type PaginationOptionsPositionType = 'auto' | 'top' | 'bottom';
@Component({
  tag: 'bds-pagination',
  styleUrl: 'pagination.scss',
  shadow: true,
})
export class Pagination {
  @Element() private el!: HTMLElement;
  /**
   * State for keep the value selected on select:
   */
  @State() value: number = this.startedPage;
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
   * Data test is the prop to specifically test the component action object.
   * dtButtonInitial is the data-test to button initial.
   */
  @Prop() dtButtonInitial?: string = null;

  /**
   * Data test is the prop to specifically test the component action object.
   * dtButtonPrev is the data-test to button prev.
   */
  @Prop() dtButtonPrev?: string = null;

  /**
   * Data test is the prop to specifically test the component action object.
   * dtSelectNumber is the data-test to select number.
   */
  @Prop() dtSelectNumber?: string = null;

  /**
   * Data test is the prop to specifically test the component action object.
   * dtButtonNext is the data-test to button next.
   */
  @Prop() dtButtonNext?: string = null;

  /**
   * Data test is the prop to specifically test the component action object.
   * dtButtonEnd is the data-test to button end
   */
  @Prop() dtButtonEnd?: string = null;
  /**
   * When de value of component change, the event are dispache.
   */
  @Event() bdsPaginationChange: EventEmitter;

  componentWillLoad() {
    this.countPage();
    this.intoView = getScrollParent(this.el);
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
        </div>
      </Host>
    );
  }
}
