import React from 'react';
import DocumentationTemplate from './theme-provider.mdx';
import { BdsAvatar, BdsBanner, BdsGrid, BdsInputChips, BdsPaper, BdsThemeProvider, BdsTypo } from '../../../blip-ds-react/dist/components';

export default {
  title: 'Components/Theme provider',
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

export const Properties = (args) => {
  return (
    <>
      <bds-theme-provider theme={args.theme}>
        <bds-grid xxs="12">
          <bds-paper width="500px">
            <bds-grid direction="column" padding="2" gap="2">
              <bds-typo variant="fs-32" bold="bold">
                Exemplo de uso do tema
              </bds-typo>
              <bds-input-chips chips='["chip1", "chip2"]'></bds-input-chips>
              <bds-avatar name="Michael Scott" size="standard" upload="false">
              </bds-avatar>
              <bds-banner variant="system" context="inside">
                  Este é um banner do tipo inside. Ele pode conter várias linhas, mas a sugestão é que possua textos
                  curtos e objetivos.
                </bds-banner>
            </bds-grid>
          </bds-paper>
        </bds-grid>
      </bds-theme-provider>
    </>
  );
};

Properties.args = {
  theme: 'light',
};

Properties.argTypes = {
  theme: {
    table: {
      defaultValue: { summary: 'light' },
    },
    options: ['dark', 'high-contrast', 'light'],
    control: 'select',
  },
};

export const FrameworkReact = () => {
  return (
    <>
      <BdsThemeProvider theme="light">
        <BdsGrid xxs="12">
          <BdsPaper width="500px">
            <BdsGrid direction="column" padding="2" gap="2">
              <BdsTypo variant="fs-32" bold="bold">
                Exemplo de uso do tema
              </BdsTypo>
              <BdsInputChips chips='["chip1", "chip2"]'></BdsInputChips>
              <BdsAvatar name="Michael Scott" size="standard" upload="false">
              </BdsAvatar>
              <BdsBanner variant="system" context="inside">
                  Este é um banner do tipo inside. Ele pode conter várias linhas, mas a sugestão é que possua textos
                  curtos e objetivos.
                </BdsBanner>
            </BdsGrid>
          </BdsPaper>
        </BdsGrid>
      </BdsThemeProvider>
    </>
  );
};
