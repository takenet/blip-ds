import { Component, h, Prop, EventEmitter, Event } from '@stencil/core';
import { Keyboard } from '../../utils/enums';

@Component({
  tag: 'bds-select-option',
  styleUrl: 'select-option.scss',
  scoped: true,
})
export class SelectOption {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Prop() value!: any;

  /**
   * The text value of the option.
   */
  @Prop() selected? = false;

  /**
   * If `true`, the user cannot interact with the select option.
   */
  @Prop() disabled? = false;

  /**
   * Add state danger on input, use for use feedback.
   */
  @Prop({ reflect: true, mutable: true }) invisible? = false;

  /**
   * Add state danger on input, use for use feedback.
   */
  @Prop({ reflect: true, mutable: true }) danger?: boolean = false;

  /**
   *  Quantity Description on option value, this item is locate to rigth in component.
   */
  @Prop() bulkOption? = '';

  /**
   *  Alignment of input-left slot. The value need to be one of the values used on flexbox align-self property.
   */
  @Prop() slotAlign? = 'center';

  /**
   *  If set, a title will be shown under the text
   */
  @Prop() titleText: string;

  /**
   *  If set, a text will be displayed on the right side of the option label
   */
  @Prop() status?: string;

  /**
   * Is Loading, is the prop to enable that the component is loading.
   */
  @Prop() loading?: boolean = false;

  /**
   * Data test is the prop to specifically test the component action object.
   */
  @Prop() dataTest?: string = null;

  @Event() optionSelected: EventEmitter;

  private onClickSelectOption = (): void => {
    if (!this.disabled) {
      this.optionSelected.emit({ value: this.value });
    }
  };

  private attachOptionKeyboardListeners = (event: KeyboardEvent): void => {
    const element = event.target as HTMLElement;

    switch (event.key) {
      case Keyboard.ENTER:
        this.onClickSelectOption();
        break;
      case Keyboard.ARROW_DOWN:
        if (
          element.parentElement.nextElementSibling &&
          !element.parentElement.nextElementSibling.hasAttribute('invisible')
        ) {
          event.preventDefault();
          event.stopPropagation();
          (element.parentElement.nextElementSibling.firstElementChild as HTMLInputElement).focus();
        }
        break;
      case Keyboard.ARROW_UP:
        if (
          element.parentElement.previousElementSibling &&
          !element.parentElement.previousElementSibling.hasAttribute('invisible')
        ) {
          event.preventDefault();
          event.stopPropagation();
          (element.parentElement.previousElementSibling.firstElementChild as HTMLInputElement).focus();
        }
    }
  };

  render(): HTMLElement {
    return this.loading ? (
      <bds-grid justifyContent="center" alignItems="center" class="load-spinner">
        <bds-loading-spinner size="small"></bds-loading-spinner>
      </bds-grid>
    ) : (
      <div
        id={`bds-select-option-${this.value}`}
        tabindex="0"
        onKeyDown={this.attachOptionKeyboardListeners}
        onClick={this.onClickSelectOption}
        data-value={this.value}
        data-test={this.dataTest}
        class={{
          'select-option': true,
          'select-option--selected': this.selected,
          'select-option--disabled': this.disabled,
          'select-option--invisible': this.invisible,
        }}
      >
        <div style={{ alignSelf: this.slotAlign }}>
          <slot name="input-left"></slot>
        </div>

        <div
          class={{
            'select-option__container': true,
            'select-option__container__fill_space': !!this.status,
          }}
        >
          {this.titleText && (
            <bds-typo class="select-option__container--value" variant="fs-16" bold="semi-bold">
              {this.titleText}
            </bds-typo>
          )}
          <bds-typo
            class={{
              'select-option__container--value': true,
              'select-option__container__overflow': !!this.status,
            }}
            noWrap={!!this.status}
            variant="fs-14"
            id={`bds-typo-label-${this.value}`}
          >
            <slot />
          </bds-typo>
        </div>
        {this.bulkOption && (
          <bds-typo class="select-option__container--bulk" variant="fs-10">
            {this.bulkOption}
          </bds-typo>
        )}
        {this.status && (
          <bds-typo class="select-option__container--status" noWrap={true} variant="fs-10">
            {this.status}
          </bds-typo>
        )}
      </div>
    );
  }
}
