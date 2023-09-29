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
      <bds-paper width="240px" height="140px">
        <bds-grid>
          <bds-grid height="48px">
            <bds-typo>Variable</bds-typo>
            <bds-typo>$-color-{this.name}</bds-typo>
          </bds-grid>
        </bds-grid>
      </bds-paper>
    );
  }
}
