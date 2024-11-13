import { Component, h, Prop, Host } from '@stencil/core';

@Component({
  tag: 'bds-divider',
  styleUrl: 'divider.scss',
  shadow: true,
})
export class BdsDivider {

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

  render() {
    const orientationClass = `${this.orientation} ${this.styleType} color-${this.color} `;

    return (
    <Host class={orientationClass}>
      <hr class={`${this.orientation} ${this.styleType} color-${this.color}`} />
    </Host>
    );
  }
}
