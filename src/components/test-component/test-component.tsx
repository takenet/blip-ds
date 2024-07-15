import { Component, h } from '@stencil/core';

@Component({
  tag: 'bds-test-component',
  styleUrl: 'test-component.scss',
})
export class TestComponent {
  render() {
    return (
      <bds-grid xxs="12" direction="row" padding="3" flex-wrap="wrap" gap="2">
        <bds-grid xxs="12">
          <div class="titulo">
            <bds-typo variant="fs-40" bold="bold">
              Titulo de teste fora de temas
            </bds-typo>
          </div>
        </bds-grid>
        <bds-grid xxs="6" padding="r-1">
          <bds-theme-provider theme="light">
            <bds-paper border>
              <bds-grid padding="2" gap="3" direction="column">
                <bds-grid gap="2">
                  <bds-button variant="solid" color="content" icon-left="info" icon-right="arrow-right" size="medium">
                    Botão medium
                  </bds-button>
                  <bds-button variant="solid" color="content" icon-left="info" icon-right="arrow-right" size="large">
                    Botão large
                  </bds-button>
                </bds-grid>
                <bds-grid gap="2">
                  <bds-button variant="solid" color="content" icon-right="arrow-right" size="medium"></bds-button>
                  <bds-button variant="solid" color="content" icon-right="arrow-right" size="large"></bds-button>
                  <bds-button
                    variant="solid"
                    color="content"
                    icon-right="arrow-right"
                    size="large"
                    bds-loading
                  ></bds-button>
                </bds-grid>
              </bds-grid>
            </bds-paper>
          </bds-theme-provider>
        </bds-grid>
        <bds-grid xxs="6" padding="l-1">
          <bds-theme-provider theme="dark">
            <bds-paper>
              <bds-grid padding="2" gap="3" direction="column">
                <bds-grid gap="2">
                  <bds-button variant="solid" color="content" icon-left="info" icon-right="arrow-right" size="medium">
                    Botão medium
                  </bds-button>
                  <bds-button variant="solid" color="content" icon-left="info" icon-right="arrow-right" size="large">
                    Botão large
                  </bds-button>
                </bds-grid>
                <bds-grid gap="2">
                  <bds-button variant="solid" color="content" icon-right="arrow-right" size="medium"></bds-button>
                  <bds-button variant="solid" color="content" icon-right="arrow-right" size="large"></bds-button>
                  <bds-button
                    variant="solid"
                    color="content"
                    icon-right="arrow-right"
                    size="large"
                    bds-loading
                  ></bds-button>
                </bds-grid>
              </bds-grid>
            </bds-paper>
          </bds-theme-provider>
        </bds-grid>
      </bds-grid>
    );
  }
}
