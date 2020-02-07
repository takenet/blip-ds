import { Component, h, Prop, EventEmitter, Event } from "@stencil/core";

@Component({
  tag: 'bds-select-option',
  styleUrl: 'select-option.scss',
  shadow: true
})
export class SelectOption {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Prop() value!: any;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Prop() label!: any;

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
      this.optionSelected.emit({ label: this.label, value: this.value });
    }
  }

  private attachOptionKeyboardListeners = (event: KeyboardEvent): void => {
    // const element = event.target

    switch (event.keyCode) {
      case 13: // enter
        this.onClickSelectOption();
        console.log('key enter');
        break
      case 40: // arrow down
        console.log('arrow down');
        // if (element.nextSibling) {
        //   event.preventDefault()
        //   event.stopPropagation()
        //   element.nextSibling.focus()
        // }
        break
      case 38: // arrow up
        console.log('arrow up');
        // event.preventDefault()
        // event.stopPropagation()

        // if (element.previousElementSibling) {
        //   element.previousElementSibling.focus()
        // } else if (this.options.onTryAccessInput) {
        //   this.options.onTryAccessInput()
        // }
        break
    }
  }

  render(): HTMLElement {
    return (
      <div
        tabindex="0"
        onKeyDown={this.attachOptionKeyboardListeners}
        onClick={this.onClickSelectOption}
        class={{
          "select-option": true,
          "select-option--selected": this.selected,
          "select-option--disabled": this.disabled,
        }}>
        <bds-typo class="select-option__value" variant="fs-14">{this.label}</bds-typo>
        <bds-typo class="select-option__bulk" variant="fs-10">{this.bulkOption}</bds-typo>
      </div>
    )
  }
}