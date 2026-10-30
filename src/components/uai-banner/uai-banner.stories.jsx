import React from 'react';
import { UaiBanner, UaiButton, UaiThemeProvider } from '../../../blip-ds-react/dist/components';
import DocumentationTemplate from './uai-banner.mdx';

export default {
  title: 'UAI/Banner',
  component: UaiBanner,
  tags: ['autodocs'],
  parameters: { docs: { page: DocumentationTemplate } },
  decorators: [
    (Story, context) => (
      <UaiThemeProvider theme={context.globals.hasTheme === 'dark' ? 'dark' : 'light'}>
        <Story />
      </UaiThemeProvider>
    ),
  ],
};

const column = { display: 'flex', flexDirection: 'column', gap: 'var(--uai-spacing-md)' };
const VARIANTS = ['system', 'info', 'success', 'warning', 'error'];

export const Playground = (args) => (
  <UaiBanner {...args}>
    Texto curto, preferencialmente 1 linha.
    <a slot="link" href="https://www.blip.ai/" target="_blank" rel="noreferrer">
      Texto do link
    </a>
  </UaiBanner>
);
Playground.args = {
  variant: 'system',
  context: 'inside',
  buttonClose: 'true',
  heading: 'Título curto e objetivo, sem ponto final',
  closeLabel: 'Fechar',
};
Playground.argTypes = {
  variant: { control: 'select', options: VARIANTS },
  context: { control: 'select', options: ['outside', 'inside'] },
  buttonClose: { control: 'select', options: ['true', 'false'] },
  heading: { control: 'text' },
  closeLabel: { control: 'text' },
};

export const Variants = () => (
  <div style={column}>
    {VARIANTS.map((variant) => (
      <UaiBanner
        key={variant}
        variant={variant}
        context="inside"
        buttonClose="true"
        heading="Título curto e objetivo, sem ponto final"
      >
        Texto curto, preferencialmente 1 linha.
        <a slot="link" href="#variants">
          Texto do link
        </a>
      </UaiBanner>
    ))}
  </div>
);

export const WithoutHeading = () => (
  <div style={column}>
    <UaiBanner variant="warning" context="inside">
      Instabilidade na plataforma? Não se preocupe, já estamos resolvendo!
    </UaiBanner>
    <UaiBanner variant="success" context="inside" buttonClose="true">
      Alterações salvas com sucesso.
    </UaiBanner>
  </div>
);

export const Contexts = () => (
  <div style={column}>
    <UaiBanner variant="info" context="outside">
      Banner de largura total, sem cantos arredondados.
    </UaiBanner>
    <UaiBanner variant="info" context="inside">
      Banner dentro de um contêiner, com cantos arredondados.
    </UaiBanner>
  </div>
);

export const Methods = () => {
  const ref = React.useRef(null);
  return (
    <div style={column}>
      <UaiBanner ref={ref} variant="info" context="inside">
        Use toggle() para mostrar ou ocultar o banner.
      </UaiBanner>
      <UaiButton onClick={() => ref.current?.toggle()}>Alternar banner</UaiButton>
    </div>
  );
};
