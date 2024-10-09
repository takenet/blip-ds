import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'bds-divider',
  styleUrl: 'divider.scss',
  shadow: true,
})
export class BdsDivider {
  // /**
  //  * O tipo de espessura da linha: fina, média ou grossa
  //  */
  // @Prop() thickness: 'thin' | 'medium' | 'thick' = 'medium';

  /**
   * O tipo de estilo da linha: sólida, pontilhada, tracejada
   */
  @Prop() styleType: 'solid' | 'dotted' | 'dashed' = 'solid';

  /**
   * Define se o divider deve ser exibido horizontalmente ou verticalmente
   */
  @Prop() orientation: 'horizontal' | 'vertical' = 'horizontal';

  /**
   * Cor da linha, aceitando qualquer valor válido em CSS (hex, rgb, nome da cor)
   */
  @Prop() color: 'divider-1' | 'divider-2' | 'divider-3' = 'divider-1';

  // /**
  //  * Define o espaçamento ao redor do divider (margens), aceitando valores de 4 a 64
  //  */
  // @Prop() margin: 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48 | 52 | 56 | 60 | 64 = 16;

  render() {
    const classes = `${this.orientation} ${this.styleType} color-${this.color} `;

    return <hr class={classes} />;
  }
}
