import { Component, h } from '@stencil/core';

@Component({
  tag: 'bds-test-component',
  styleUrl: 'test-component.scss',
})
export class TestComponent {
  render() {
    return (
      <bds-grid xxs="12" direction="row" padding="3" flex-wrap="wrap">
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
                <bds-typo variant="fs-32" bold="bold">
                  Insira o componente aqui
                </bds-typo>
                <bds-skeleton shape="circle" width="50px" height="50px"></bds-skeleton>
                <bds-skeleton shape="square" width="30%" height="20px"></bds-skeleton>
                <bds-skeleton shape="square" width="100%" height="10px"></bds-skeleton>
                <bds-skeleton shape="square" width="100%" height="10px"></bds-skeleton>
              </bds-grid>
            </bds-paper>
          </bds-theme-provider>
        </bds-grid>
        <bds-grid xxs="6" padding="l-1">
          <bds-theme-provider theme="dark">
            <bds-paper>
              <bds-grid padding="2" gap="3" direction="column">
                <bds-typo variant="fs-32" bold="bold">
                  Insira o componente aqui
                </bds-typo>
                <bds-skeleton shape="circle" width="50px" height="50px"></bds-skeleton>
                <bds-skeleton shape="square" width="30%" height="20px"></bds-skeleton>
                <bds-skeleton shape="square" width="100%" height="10px"></bds-skeleton>
                <bds-skeleton shape="square" width="100%" height="10px"></bds-skeleton>
              </bds-grid>
            </bds-paper>
          </bds-theme-provider>
        </bds-grid>
      </bds-grid>
    );
  }
}
