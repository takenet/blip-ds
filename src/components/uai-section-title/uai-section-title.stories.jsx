import React from 'react';
import { UaiButton, UaiSectionTitle, UaiThemeProvider } from '../../../blip-ds-react/dist/components';
import DocumentationTemplate from './uai-section-title.mdx';

export default {
  title: 'UAI Components/Section Title',
  component: UaiSectionTitle,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
  decorators: [
    (Story, context) => (
      <UaiThemeProvider theme={context.globals.hasTheme === 'dark' ? 'dark' : 'light'}>
        <Story />
      </UaiThemeProvider>
    ),
  ],
  argTypes: {
    heading: { control: 'text', description: 'Texto principal do título da seção.' },
    description: { control: 'text', description: 'Descrição complementar opcional abaixo do título.' },
    headingTag: {
      options: ['h2', 'h3', 'h4'],
      control: 'select',
      description: 'Nível semântico do heading na hierarquia da página.',
    },
  },
};

export const Playground = (args) => <UaiSectionTitle {...args} />;
Playground.args = {
  heading: 'Indicadores de atendimento',
  description: 'Acompanhe o volume e a resolução das conversas no período selecionado.',
  headingTag: 'h2',
};

export const WithoutDescription = () => <UaiSectionTitle heading="Resumo operacional" />;

export const WithActions = () => (
  <UaiSectionTitle heading="Relatórios exportáveis" description="Dados atualizados em tempo real.">
    <UaiButton slot="actions" variant="outline" size="short" iconLeft="info">
      Exportar
    </UaiButton>
  </UaiSectionTitle>
);
