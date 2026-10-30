import React from 'react';
import { UaiButton, UaiIcon, UaiThemeProvider, UaiTooltip } from '../../../blip-ds-react/dist/components';
import DocumentationTemplate from './uai-tooltip.mdx';

export default {
  title: 'UAI/Tooltip',
  component: UaiTooltip,
  tags: ['autodocs'],
  parameters: { docs: { page: DocumentationTemplate } },
  decorators: [
    (Story, context) => (
      <UaiThemeProvider theme={context.globals.hasTheme === 'dark' ? 'dark' : 'light'}>
        <div style={{ display: 'flex', justifyContent: 'center', padding: 'var(--uai-spacing-5xl)' }}>
          <Story />
        </div>
      </UaiThemeProvider>
    ),
  ],
};

const POSITIONS = [
  'top-left',
  'top-center',
  'top-right',
  'right-top',
  'right-center',
  'right-bottom',
  'bottom-left',
  'bottom-center',
  'bottom-right',
  'left-top',
  'left-center',
  'left-bottom',
];

export const Playground = (args) => (
  <UaiTooltip {...args}>
    <UaiButton>Passe o cursor</UaiButton>
  </UaiTooltip>
);
Playground.args = {
  tooltipText: 'Texto do tooltip',
  position: 'right-center',
  disabled: false,
  maxWidth: '',
};
Playground.argTypes = {
  tooltipText: { control: 'text' },
  position: { control: 'select', options: POSITIONS },
  disabled: { control: 'boolean' },
  maxWidth: { control: 'text' },
};

export const Positions = () => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, max-content)',
      gap: 'var(--uai-spacing-5xl) var(--uai-spacing-9xl)',
    }}
  >
    {['top-center', 'bottom-center', 'left-center', 'right-center', 'top-left', 'bottom-right'].map((position) => (
      <UaiTooltip key={position} position={position} tooltipText={position} ref={(el) => el?.visible()}>
        <UaiButton variant="outline">{position}</UaiButton>
      </UaiTooltip>
    ))}
  </div>
);

export const Methods = () => {
  const ref = React.useRef(null);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--uai-spacing-lg)' }}>
      <UaiTooltip ref={ref} position="top-center" tooltipText="Texto do tooltip">
        <UaiIcon name="warning" aria-label="Aviso" />
      </UaiTooltip>
      <UaiButton onClick={() => ref.current?.visible()}>Mostrar</UaiButton>
      <UaiButton variant="outline" onClick={() => ref.current?.invisible()}>
        Ocultar
      </UaiButton>
    </div>
  );
};
