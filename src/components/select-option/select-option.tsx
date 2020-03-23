import { Component, h, Prop, EventEmitter, Event } from "@stencil/core";
import { Keyboard } from '../../utils/enums';

@Component({
  tag: 'bds-select-option',
  styleUrl: 'select-option.scss',
  shadow: true
})
export class SelectOption {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Prop() value!: any;

  /**
   * The text value of the option.
  */
  @Prop() selected?= false;

  /**
   * If `true`, the user cannot interact with the select option.
   */
  @Prop() disabled?= false;

  /**
   *  Quantity Description on option value, this item is locate to rigth in component.
   */
  @Prop() bulkOption?= '';

  @Event() optionSelected: EventEmitter;

  private onClickSelectOption = (): void => {
    if (!this.disabled) {
      this.optionSelected.emit({ value: this.value });
    }
  }

  private attachOptionKeyboardListeners = (event: KeyboardEvent): void => {
    const element = (event.target as HTMLElement);

    switch (event.keyCode) {
      case Keyboard.ENTER:
        this.onClickSelectOption();
        break
      case Keyboard.ARROW_DOWN:
        if (element.nextSibling) {
          event.preventDefault();
          event.stopPropagation();
          (element.nextSibling as HTMLInputElement).focus();
        }
        break
      case Keyboard.ARROW_UP:
        event.preventDefault()
        event.stopPropagation()

        if (element.previousElementSibling) {
          (element.previousElementSibling as HTMLInputElement).focus();
        }
    }
  }

  render(): HTMLElement {
    return (
      <div
        id={`bds-select-option-${this.value}`}
        tabindex="0"
        onKeyDown={this.attachOptionKeyboardListeners}
        onClick={this.onClickSelectOption}
        data-value={this.value}
        class={{
          "select-option": true,
          "select-option--selected": this.selected,
          "select-option--disabled": this.disabled,
        }}>
        <bds-typo class="select-option__value" variant="fs-14"><slot /></bds-typo>
        <bds-typo class="select-option__bulk" variant="fs-10">{this.bulkOption}</bds-typo>
      </div>
    )
  }
}
