import { Component, Host, h, Prop, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'bds-pagination',
  styleUrl: 'pagination.scss',
  shadow: true,
})
export class Pagination {
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
  /**
   * Prop to recive the number of pages.
   */
  @Prop() pages?: number;
  /**
   * When the component are render this page are set.
   */
  @Prop() startedPage?: number;
  /**
   * When de value of component change, the event are dispache.
   */
  @Event() bdsPaginationChange: EventEmitter;

  componentWillLoad() {
    this.countPage();
  }
  countPage() {
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
      this.bdsPaginationChange.emit();
    }
  };

  nextPage = (event: Event) => {
    const el = this.value;
    if (el < this.pages) {
      event.preventDefault();
      this.value = this.value + 1;
      this.bdsPaginationChange.emit();
    }
  };

  firstPage = (event: Event) => {
    const el = this.value;
    if (el > 1) {
      event.preventDefault();
      this.value = this.paginationNumbers[0];
      this.bdsPaginationChange.emit();
    }
  };

  lastPage = (event: Event) => {
    const el = this.value;
    if (el < this.pages) {
      event.preventDefault();
      this.value = this.pages;
      this.bdsPaginationChange.emit();
    }
  };

  openOptions = () => {
    this.openSelect = !this.openSelect;
  };

  optionSelected(index) {
    this.value = index;
    this.openOptions();
    this.bdsPaginationChange.emit();
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
              <div class={{ select_input: true }} id="select" onClick={this.openOptions}>
                <bds-typo variant="fs-14">{this.value}</bds-typo>
                <bds-icon size="small" name={this.openSelect ? 'arrow-up' : 'arrow-down'}></bds-icon>
              </div>
            </div>
            {this.openSelect ? (
              <bds-paper class={{ select_options: true, 'select_options--open': this.openSelect }}>
                <ul>
                  {this.paginationNumbers.map((el, index) => (
                    <li onClick={() => this.optionSelected(el)} key={index} value={el}>
                      <bds-typo variant="fs-14">{el}</bds-typo>
                    </li>
                  ))}
                </ul>
              </bds-paper>
            ) : (
              ''
            )}
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
