import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'bds-card-color',
  styleUrl: 'card-color.scss',
  shadow: true
})
export class CardColor {

  /**
  * Specifies name color, use Figma docs in Blip DS.
  */
  @Prop() name!: string;

  /**
  * Specifies HEX color, use Figma docs in Blip DS.
  */
  @Prop() hex!: string;

  /**
   * Specifies variabel sass color, _variables.scss.
   */
  @Prop() variable!: string;

  render(): HTMLDivElement {
    return (
      <div class="card-color">
        <div class={{
          'card-color--color': true,
          [`card-color--${this.variable}`]: true,
        }}></div>
        <div class="card-color__description">
          <div class="card-color__description__name">
            <div class="card-color__description__name__label">Name</div>
            <div class="card-color__description__name__text">{this.name}</div>
          </div>
          <div class="card-color__description__value">
            <div class="card-color__description__value__label">HEX</div>
            <div class="card-color__description__value__text">{this.hex}</div>
          </div>
        </div>
      </div>
    );
  }

}
