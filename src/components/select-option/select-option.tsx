import { Component, h, Element, Prop, EventEmitter, Event, Method } from '@stencil/core';
import { Keyboard } from '../../utils/enums';

export type TypeOption = 'checkbox' | 'default';

@Component({
  tag: 'bds-select-option',
  styleUrl: 'select-option.scss',
  shadow: true,
})
export class SelectOption {
  private nativeInput?: HTMLBdsCheckboxElement;

  @Element() private element: HTMLElement;

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
   * Type Option. Used toselect type of item list.
   */
  @Prop() typeOption?: TypeOption = 'default';

  /**
   * If `true`, the checkbox is selected.
   */
  @Prop({ mutable: true, reflect: true }) checked = false;

  /**
   * Data test is the prop to specifically test the component action object.
   */
  @Prop() dataTest?: string = null;

  @Event() optionSelected: EventEmitter;

  @Event() optionChecked: EventEmitter;

  @Method()
  async toggle() {
    this.checked = !this.checked;
  }

  @Method()
  async toMark() {
    this.checked = true;
  }

  @Method()
  async markOff() {
    this.checked = false;
  }

  private refNativeInput = (input: HTMLBdsCheckboxElement): void => {
    this.nativeInput = input;
  };

  private checkedCurrent = () => {
    if (this.typeOption !== 'checkbox') return;
    this.nativeInput.toggle();
  };

  private onClickSelectOption = (): void => {
    if (this.typeOption == 'checkbox') return;
    if (!this.disabled) {
      this.optionSelected.emit({ value: this.value });
    }
  };

  private optionHandle = (ev: CustomEvent): void => {
    const elementChecked = ev.target as HTMLBdsCheckboxElement;
    const data = { value: elementChecked.name, label: this.element.innerHTML, checked: elementChecked.checked };
    this.checked = !this.checked;
    this.optionChecked.emit(data);
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
    return (
      <div
        id={`bds-select-option-${this.value}`}
        tabindex="0"
        onKeyDown={this.attachOptionKeyboardListeners}
        onClick={this.onClickSelectOption}
        data-value={this.value}
        data-test={this.dataTest}
        class={{
          'select-option': this.typeOption != 'checkbox',
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
            'select-option__container__checkbox': this.typeOption == 'checkbox',
          }}
          onClick={() => this.checkedCurrent()}
        >
          {this.titleText && (
            <bds-typo class="select-option__container--value" variant="fs-16" bold="semi-bold">
              {this.titleText}
            </bds-typo>
          )}

          {this.typeOption === 'checkbox' ? (
            <bds-checkbox
              ref={this.refNativeInput}
              refer={`html-for-${this.value}`}
              label={this.element.innerHTML}
              name={this.value}
              checked={this.checked}
              onBdsChange={(ev) => this.optionHandle(ev)}
            ></bds-checkbox>
          ) : (
            <bds-typo
              class={{
                'select-option__container--value': true,
                'select-option__container__overflow': !!this.status,
              }}
              noWrap={!!this.status}
              variant="fs-14"
            >
              <slot />
            </bds-typo>
          )}
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
