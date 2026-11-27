import React from 'react';
import { UaiSparkline, UaiThemeProvider } from '../../../blip-ds-react/dist/components';
import DocumentationTemplate from './uai-sparkline.mdx';

const VARIANTS = ['neutral', 'positive', 'negative'];
const SAMPLE_DATA = [18, 24, 21, 32, 29, 41, 38, 52];

export default {
  title: 'UAI Components/Sparkline',
  component: UaiSparkline,
  tags: ['autodocs'],
  parameters: { docs: { page: DocumentationTemplate } },
  decorators: [
    (Story, context) => (
      <UaiThemeProvider theme={context.globals.hasTheme === 'dark' ? 'dark' : 'light'}>
        <div style={{ padding: 'var(--uai-spacing-xl)' }}>
          <Story />
        </div>
      </UaiThemeProvider>
    ),
  ],
  argTypes: {
    variant: { options: VARIANTS, control: 'select' },
    smooth: { control: 'boolean' },
    showArea: { control: 'boolean' },
    label: { control: 'text' },
    language: { options: ['pt_BR', 'en_US', 'es_ES'], control: 'select' },
  },
};

export const Playground = (args) => (
  <div style={{ maxWidth: 'var(--uai-width-panel)' }}>
    <UaiSparkline {...args} />
  </div>
);
Playground.args = {
  data: SAMPLE_DATA,
  variant: 'positive',
  smooth: true,
  showArea: true,
  label: 'Tendência positiva de conversas na última semana',
  language: 'pt_BR',
};

export const Variants = () => (
  <div style={{ display: 'grid', gap: 'var(--uai-spacing-lg)', maxWidth: 'var(--uai-width-panel)' }}>
    <UaiSparkline data={[22, 24, 23, 25, 24, 24]} variant="neutral" label="Tendência estável" />
    <UaiSparkline data={[12, 16, 15, 24, 28, 39]} variant="positive" label="Tendência de crescimento" />
    <UaiSparkline data={[40, 36, 38, 27, 21, 14]} variant="negative" label="Tendência de queda" />
  </div>
);

export const ConstantSeries = () => (
  <div style={{ maxWidth: 'var(--uai-width-panel)' }}>
    <UaiSparkline data={[30, 30, 30, 30, 30]} variant="neutral" label="Série constante sem variação" />
  </div>
);
