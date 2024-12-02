import { Component, h } from '@stencil/core';

@Component({
  tag: 'bds-test-component',
  styleUrl: 'test-component.scss',
})
export class TestComponent {
  render() {
    const DATA = [
      { value: '1', label: 'Millie Bobby', status: 'offline' },
      { value: '2', label: 'Finn Wolfhard', status: 'offline' },
      { value: '3', label: 'David Harbour', status: 'offline' },
      { value: '4', label: 'Gaten Matarazzo', status: 'offline' },
      { value: '5', label: 'Caleb McLaughlin', status: 'offline' },
      { value: '6', label: 'Noah Schnapp', status: 'offline' },
    ];
    return (
      <bds-grid xxs="12" padding="x-2" flex-wrap="wrap">
        <bds-grid xxs="12" margin="t-2">
          <div class="titulo">
            <bds-typo variant="fs-40" bold="bold">
              Titulo de teste fora de temas
            </bds-typo>
          </div>
        </bds-grid>
        <bds-grid xxs="6" padding="r-1">
          <bds-theme-provider theme="light">
            <bds-paper elevation="none" border>
              <bds-grid direction="column" padding="2">
                <bds-select-chips
                  chips='["Millie Bobby", "Finn Wolfhard"]'
                  onBdsChange={(ev) => console.log('ev - select-chips', ev)}
                >
                  <bds-select-option value="1" status="offline">
                    Millie Bobby
                  </bds-select-option>
                  <bds-select-option value="2" status="offline">
                    Finn Wolfhard
                  </bds-select-option>
                  <bds-select-option value="3" status="offline">
                    David Harbour
                  </bds-select-option>
                  <bds-select-option value="4" status="offline">
                    Gaten Matarazzo
                  </bds-select-option>
                  <bds-select-option value="5" status="offline">
                    Caleb McLaughlin
                  </bds-select-option>
                  <bds-select-option value="6" status="offline">
                    Noah Schnapp
                  </bds-select-option>
                </bds-select-chips>
              </bds-grid>
            </bds-paper>
          </bds-theme-provider>
        </bds-grid>
        <bds-grid xxs="6" padding="l-1">
          <bds-theme-provider theme="dark">
            <bds-paper elevation="none" border>
              <bds-grid padding="2" direction="column">
                <bds-select-chips
                  options={DATA}
                  onBdsChange={(ev) => console.log('ev - select-chips', ev)}
                ></bds-select-chips>
              </bds-grid>
            </bds-paper>
          </bds-theme-provider>
        </bds-grid>
      </bds-grid>
    );
  }
}
