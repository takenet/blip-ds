import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'bds-card-color',
  styleUrl: 'card-color.scss',
  shadow: true,
})
export class CardColor {
  /**
   * Specifies name color, use Figma docs in Blip DS.
   */
  @Prop() name!: string;

  /**
   * Specifies HEX color, use Figma docs in Blip DS.
   */
  @Prop() hex?: string;

  /**
   * Specifies if the hex is a linear gradient
   */
  @Prop() gradient = false;

  /**
   * Specifies variabel sass color, _variables.scss.
   */
  @Prop() variable!: string;

  /**
   * If true, the text will be white
   */
  @Prop() lightText = false;

  render(): HTMLDivElement {
    return (
      <div class="card-color">
        <div
          class={{
            'card-color--color': true,
            'card-color--light': this.lightText,
            [`card-color--${this.variable}`]: true,
          }}
        >
          <bds-typo variant="fs-14">${this.variable}</bds-typo>
        </div>
        <div class={{ 'card-color__description': true, 'card-color__description--gradient': this.gradient }}>
          <div class="card-color__description__name">
            <div class="card-color__description__name__label">
              <bds-typo variant="fs-10">Name</bds-typo>
            </div>
            <div class="card-color__description__name__text">
              <bds-typo variant="fs-12">{this.name}</bds-typo>
            </div>
          </div>
          {this.hex && (
            <div class="card-color__description__value">
              <div class="card-color__description__value__label">
                <bds-typo variant="fs-10">HEX</bds-typo>
              </div>
              <div class="card-color__description__value__text">
                <bds-typo variant="fs-12">{this.hex}</bds-typo>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
