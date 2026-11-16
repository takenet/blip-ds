import React from 'react';
import { UaiButton, UaiButtonGroup, UaiThemeProvider, UaiTypo } from '../../../blip-ds-react/dist/components';
import DocumentationTemplate from './uai-button-group.mdx';

export default {
  title: 'UAI/Button Group',
  component: UaiButtonGroup,
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

const ALIGNMENTS = [
  ['align-left', 'Alinhar à esquerda'],
  ['align-center', 'Centralizar'],
  ['align-right', 'Alinhar à direita'],
];

const IconButtons = () =>
  ALIGNMENTS.map(([icon, label]) => <UaiButton key={icon} id={icon} iconLeft={icon} aria-label={label} />);

const column = { display: 'flex', flexDirection: 'column', gap: 'var(--uai-spacing-md)', alignItems: 'flex-start' };

export const Usage = () => {
  const [period, setPeriod] = React.useState('Semana');
  const periods = ['Dia', 'Semana', 'Mês'];
  return (
    <div style={column}>
      <UaiButtonGroup
        label="Período"
        onUaiButtonSelected={(event) => setPeriod(event.detail.active ? periods[event.detail.index] : 'nenhum')}
      >
        {periods.map((item) => (
          <UaiButton key={item} id={item}>
            {item}
          </UaiButton>
        ))}
      </UaiButtonGroup>
      <UaiTypo variant="body-base">{`Período selecionado: ${period}`}</UaiTypo>
    </div>
  );
};

export const Playground = (args) => (
  <UaiButtonGroup {...args}>
    <IconButtons />
  </UaiButtonGroup>
);
Playground.args = { size: 'medium', color: 'primary', direction: 'row', multiple: false, label: 'Alinhamento' };
Playground.argTypes = {
  size: {
    options: ['compact', 'short', 'medium', 'large'],
    control: 'select',
    table: { defaultValue: { summary: 'medium' } },
  },
  color: {
    options: ['primary', 'content', 'positive', 'negative'],
    control: 'select',
    table: { defaultValue: { summary: 'primary' } },
  },
  direction: { options: ['row', 'column'], control: 'select', table: { defaultValue: { summary: 'row' } } },
  multiple: { control: 'boolean', table: { defaultValue: { summary: 'false' } } },
};

export const WithLabels = () => (
  <UaiButtonGroup label="Gráfico">
    <UaiButton iconLeft="chart-bar">Barras</UaiButton>
    <UaiButton iconLeft="chart-line">Linhas</UaiButton>
    <UaiButton iconLeft="chart-pizza">Pizza</UaiButton>
  </UaiButtonGroup>
);

export const Directions = () => (
  <div style={{ display: 'flex', gap: 'var(--uai-spacing-xl)', alignItems: 'flex-start' }}>
    <UaiButtonGroup label="Alinhamento em linha">
      <IconButtons />
    </UaiButtonGroup>
    <UaiButtonGroup label="Alinhamento em coluna" direction="column">
      <IconButtons />
    </UaiButtonGroup>
  </div>
);

export const SizesAndColors = () => (
  <div style={column}>
    {['compact', 'short', 'medium', 'large'].map((size) => (
      <UaiButtonGroup key={size} label={`Tamanho ${size}`} size={size}>
        <IconButtons />
      </UaiButtonGroup>
    ))}
    {['primary', 'content', 'positive', 'negative'].map((color) => (
      <UaiButtonGroup key={color} label={`Cor ${color}`} color={color}>
        <IconButtons />
      </UaiButtonGroup>
    ))}
  </div>
);

// One button selected on load, for the visual regression tests.
export const Selected = () => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    ref.current?.componentOnReady?.().then(() => ref.current.activateButton(1));
  }, []);
  return (
    <div style={column}>
      <UaiButtonGroup ref={ref} label="Alinhamento">
        <IconButtons />
      </UaiButtonGroup>
      <UaiButtonGroup label="Alinhamento em coluna" direction="column" color="content">
        <IconButtons />
      </UaiButtonGroup>
    </div>
  );
};

export const Multiple = () => (
  <UaiButtonGroup label="Filtros" multiple>
    <UaiButton iconLeft="calendar">Hoje</UaiButton>
    <UaiButton iconLeft="email">Não lidas</UaiButton>
    <UaiButton iconLeft="bell">Com alerta</UaiButton>
  </UaiButtonGroup>
);

export const Methods = () => {
  const ref = React.useRef(null);
  return (
    <div style={column}>
      <UaiButton variant="text" onClick={() => ref.current?.activateButton(2)}>
        Selecionar o terceiro
      </UaiButton>
      <UaiButtonGroup ref={ref} label="Alinhamento">
        <IconButtons />
      </UaiButtonGroup>
    </div>
  );
};
