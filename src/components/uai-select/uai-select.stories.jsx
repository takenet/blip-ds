import React, { useState } from 'react';
import { UaiSelect, UaiSelectOption, UaiThemeProvider } from '../../../blip-ds-react/dist/components';
import DocumentationTemplate from './uai-select.mdx';

export default {
  title: 'UAI/Select',
  component: UaiSelect,
  tags: ['autodocs'],
  parameters: { docs: { page: DocumentationTemplate } },
  decorators: [
    (Story, context) => (
      <UaiThemeProvider theme={context.globals.hasTheme === 'dark' ? 'dark' : 'light'}>
        <div style={{ maxWidth: 'var(--uai-width-menu)', minHeight: 'calc(6 * var(--uai-control-height-medium))' }}>
          <Story />
        </div>
      </UaiThemeProvider>
    ),
  ],
};

const OPTIONS = [
  { value: 'today', label: 'Hoje' },
  { value: '7', label: '7 Dias' },
  { value: '30', label: '30 Dias' },
  { value: '90', label: '90 Dias' },
  { value: 'custom', label: 'Personalizado' },
];

export const Playground = (args) => <UaiSelect {...args} options={OPTIONS} />;
Playground.args = {
  label: 'Data',
  placeholder: 'Placeholder',
  helperMessage: 'Mensagem de 1 linha',
  size: 'medium',
  disabled: false,
  danger: false,
  success: false,
  required: false,
};
Playground.argTypes = {
  size: { control: 'select', options: ['short', 'medium'] },
  icon: { control: 'text' },
};

export const Controlled = () => {
  const [value, setValue] = useState('7');
  return (
    <UaiSelect
      label="Data"
      value={value}
      options={OPTIONS}
      onUaiChange={(event) => setValue(event.detail.value)}
      helperMessage={`Valor escolhido: ${value}`}
    />
  );
};

export const States = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--uai-spacing-md)' }}>
    <UaiSelect label="Padrão" placeholder="Placeholder" options={OPTIONS} helperMessage="Mensagem de 1 linha" />
    <UaiSelect label="Preenchido" value="30" options={OPTIONS} helperMessage="Mensagem de 1 linha" />
    <UaiSelect label="Erro" danger placeholder="Placeholder" options={OPTIONS} errorMessage="Mensagem de 1 linha" />
    <UaiSelect label="Sucesso" success value="90" options={OPTIONS} successMessage="Mensagem de 1 linha" />
    <UaiSelect label="Desabilitado" disabled placeholder="Placeholder" options={OPTIONS} />
  </div>
);

export const WithIconAndDisabledOption = () => (
  <UaiSelect
    label="Período"
    icon="calendar"
    placeholder="Selecione"
    options={[...OPTIONS.slice(0, 4), { value: 'custom', label: 'Personalizado', disabled: true }]}
  />
);

export const DeclarativeOptions = () => (
  <UaiSelect label="Data" placeholder="Selecione">
    {OPTIONS.map((option) => (
      <UaiSelectOption key={option.value} value={option.value}>
        {option.label}
      </UaiSelectOption>
    ))}
  </UaiSelect>
);

export const InsideForm = () => (
  <form
    onSubmit={(event) => {
      event.preventDefault();
      alert(JSON.stringify(Object.fromEntries(new FormData(event.currentTarget))));
    }}
  >
    <UaiSelect name="period" label="Data" required placeholder="Selecione" options={OPTIONS} />
    <button type="submit" style={{ marginTop: 'var(--uai-spacing-md)' }}>
      Enviar
    </button>
  </form>
);
