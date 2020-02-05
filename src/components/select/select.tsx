import { Component, h, State } from "@stencil/core";

@Component({
  tag: 'bds-select',
  styleUrl: 'select.scss',
  shadow: true
})
export class Select {
  @State() isOpen?= false;

  private toggle = (): void => {
    this.isOpen = !this.isOpen;
  }

  render(): HTMLElement {
    const iconArrow = this.isOpen ? 'arrow-up' : 'arrow-down';

    return (
      <div class="select">
        <bds-input>
          <div
            slot="input-right"
            class="select__icon"
            onClick={this.toggle}
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
          <div class="test"></div>
        </div>
      </div>
    )
  }
}