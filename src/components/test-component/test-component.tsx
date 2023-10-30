import { Component, h } from '@stencil/core';

const data = [
  { value: 0, name: 'standard' },
  { value: 1, name: 'plus' },
  { value: 2, name: 'gold' },
  { value: 3, name: 'platinum' },
];

@Component({
  tag: 'bds-test-component',
  styleUrl: 'test-component.scss',
})
export class TestComponent {
  private onChange = (ev: CustomEvent): void => {
    // console.log('ev', ev.detail.value);
  };
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
                <bds-slider value={50} min={0} max={100}></bds-slider>
                <bds-slider value={50} min={0} max={100} step={10}></bds-slider>
                <bds-slider value={50} min={0} max={100} step={10} markers="markers"></bds-slider>
                <bds-slider value={50} min={0} max={100} step={10} markers="without-subtitle"></bds-slider>
                <bds-slider value={2} markers="markers" dataMarkers={data}></bds-slider>
                <bds-slider value={[25, 75]} min={0} max={100} type="range"></bds-slider>
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
                <bds-slider value={50} min={0} max={100}></bds-slider>
                <bds-slider value={50} min={0} max={100} step={10}></bds-slider>
                <bds-slider value={50} min={0} max={100} step={10} markers="markers"></bds-slider>
                <bds-slider value={50} min={0} max={100} step={10} markers="without-subtitle"></bds-slider>
                <bds-slider value={2} markers="markers" dataMarkers={data}></bds-slider>
                <bds-slider value={50} min={0} max={100} type="range"></bds-slider>
              </bds-grid>
            </bds-paper>
          </bds-theme-provider>
        </bds-grid>
      </bds-grid>
    );
  }
}
