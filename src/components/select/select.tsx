import { Component, h, State, Prop } from "@stencil/core";

export interface Option {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  label: any;
}

@Component({
  tag: 'bds-select',
  styleUrl: 'select.scss',
  shadow: true
})
export class Select {
  @State() isOpen?= false;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @State() selectedOption?: Option = { label: null, value: null };

  @Prop() options?: Array<Option> = [];

  private toggle = (): void => {
    this.isOpen = !this.isOpen;
  }

  private selectValue = (event: CustomEvent): void => {
    const { detail: { value, label } } = event;
    if (this.selectedOption.value !== value) {
      this.selectedOption = { value, label };
    }
    this.toggle();
  }

  private getSelectOptions = (): Array<HTMLElement> => {
    const options = this.options.map(option => {
      return (
        <bds-select-option
          key={`select-option-${option.value}`}
          value={option.value}
          label={option.label}
          onOptionSelected={this.selectValue}
          selected={this.selectedOption.value === option.value}
          bulk-option="(30) itens"
        >
        </bds-select-option>
      );
    })
    return options;
  };

  render(): HTMLElement {
    const iconArrow = this.isOpen ? 'arrow-up' : 'arrow-down';
    console.log('RENDER')

    return (
      <div
        class="select"
      // onFocus={() => { console.log('onFocus') }}
      // onMouseEnter={() => { console.log('onMouseEnter'); }}
      // onMouseLeave={() => { console.log('onMouseLeave') }}
      // onFocusCapture={() => { console.log('onFocusCapture') }}
      // onBlur={() => { console.log('onBlur') }}
      >
        <bds-input onClick={this.toggle} value={this.selectedOption.label}>
          <div
            slot="input-right"
            class="select__icon"
          >
            <bds-icon
              size="small"
              name={iconArrow}
              color="inherit"
            >
            </bds-icon>
          </div>
        </bds-input>
        <div
          class={{
            "select__options": true,
            "select__options--open": this.isOpen
          }}>
          {this.getSelectOptions()}
        </div>
      </div>
    )
  }
}