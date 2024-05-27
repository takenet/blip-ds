import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'bds-card-color',
  styleUrl: 'card-color.scss',
  shadow: true,
})
export class CardColor {
  @State() showMessage = false;
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

  handleCopyVariable = (variable) => {
    const value = `$${variable}`;
    navigator.clipboard.writeText(value);

    this.showMessage = true;

    // Ocultar a mensagem após 3 segundos
    setTimeout(() => {
      this.showMessage = false;
    }, 3000);
  };

  render(): HTMLDivElement {
    return (
      <bds-paper class="card" width="240px" height="140px" onClick={() => this.handleCopyVariable(this.variable)}>
        <bds-grid direction="column" height="100%">
          <bds-grid
            height="70%"
            xxs="12"
            class={{
              'card-color--color': true,
              [`card-color--${this.variable}`]: true,
            }}
          ></bds-grid>
          <bds-grid justify-content="center" align-items="center" height="30%">
            {!this.showMessage ? (
              <bds-typo class="card-text" variant="fs-14" bold="bold">
                ${this.variable}
              </bds-typo>
            ) : (
              <bds-typo class="card-text-copie" variant="fs-14" bold="bold">
                Cor copiada!
              </bds-typo>
            )}
          </bds-grid>
        </bds-grid>
      </bds-paper>
    );
  }
}
