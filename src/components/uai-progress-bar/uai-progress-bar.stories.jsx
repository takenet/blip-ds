import React from 'react';
import { UaiProgressBar, UaiThemeProvider } from '../../../blip-ds-react/dist/components';
import DocumentationTemplate from './uai-progress-bar.mdx';

export default {
  title: 'UAI Components/Progress Bar',
  component: UaiProgressBar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
  decorators: [
    (Story, context) => (
      <UaiThemeProvider theme={context.globals.hasTheme === 'dark' ? 'dark' : 'light'}>
        <div
          style={{
            padding: 'var(--uai-spacing-md)',
            backgroundColor: 'var(--uai-surface-paper)',
            maxWidth: 'var(--uai-width-panel)',
          }}
        >
          <Story />
        </div>
      </UaiThemeProvider>
    ),
  ],
  argTypes: {
    percent: { control: { type: 'range', min: 0, max: 100, step: 1 }, description: 'Percentual limitado entre 0 e 100.' },
    text: { control: 'text', description: 'Rótulo complementar exibido junto à barra.' },
  },
};

export const Playground = (args) => <UaiProgressBar {...args} />;
Playground.args = {
  percent: 64,
  text: '64% da franquia mensal utilizada',
};

export const WithoutText = () => <UaiProgressBar percent={68} aria-label="Progresso de carrinhos recuperados" />;
