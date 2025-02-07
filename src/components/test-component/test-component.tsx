import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'bds-test-component',
  styleUrl: 'test-component.scss',
})
export class TestComponent {
  @State() contentRichText: string = '';
  render() {
    return (
      <bds-grid container padding="t-8" flex-wrap="wrap" justifyContent="center">
        <bds-grid xxs="12" flex-wrap="wrap">
          <bds-theme-provider theme="light">
            <bds-paper bgColor="surface-0">
              <bds-grid padding="2" gap="2" direction="column">
                <bds-typo variant="fs-24" bold="bold" margin={false}>
                  BdsRichText
                </bds-typo>
                <bds-typo>Crie textos com formatação personalizadas dentro da plataforma.</bds-typo>
                <bds-chip-tag color="outline" icon="">
                  Quando usar:
                </bds-chip-tag>
                <bds-button>teste</bds-button>
                <bds-typo>Utilize esse componente para criar textos de mensagens personalizadas.</bds-typo>
                <bds-rich-text
                  onBdsChange={(ev) => (this.contentRichText = ev.detail.value)}
                  height="240px"
                ></bds-rich-text>
                <bds-paper bgColor="surface-3" border elevation="none">
                  <bds-grid padding="2" gap="2" direction="column">
                    {this.contentRichText}
                  </bds-grid>
                </bds-paper>
              </bds-grid>
            </bds-paper>
          </bds-theme-provider>
        </bds-grid>
      </bds-grid>
    );
  }
}
