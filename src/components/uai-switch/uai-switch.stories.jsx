import React, { useState } from 'react';
import { UaiSwitch, UaiThemeProvider } from '../../../blip-ds-react/dist/components';
import DocumentationTemplate from './uai-switch.mdx';

export default {
  title: 'UAI/Switch',
  component: UaiSwitch,
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
export const Playground = (args) => <UaiSwitch {...args} />;
Playground.args = {
  label: 'Notificações',
  size: 'standard',
  checked: false,
  disabled: false,
  name: 'notifications',
  value: 'on',
};
Playground.argTypes = {
  size: { control: 'select', options: ['short', 'standard', 'tall'] },
  checked: { control: 'boolean' },
  disabled: { control: 'boolean' },
  'aria-label': { control: 'text' },
  label: { control: 'text' },
};

export const States = () => (
  <div style={column}>
    <UaiSwitch label="Desativado" />
    <UaiSwitch label="Ativado" checked />
    <UaiSwitch label="Indisponível" disabled />
    <UaiSwitch label="Ativado e indisponível" checked disabled />
  </div>
);

export const Sizes = () => (
  <div style={column}>
    {['short', 'standard', 'tall'].map((size) => (
      <UaiSwitch key={size} size={size} label={size} checked />
    ))}
  </div>
);

export const Usage = () => {
  const [enabled, setEnabled] = useState(false);
  return (
    <UaiSwitch
      label="Receber notificações"
      checked={enabled}
      onUaiChange={(event) => setEnabled(event.detail.checked)}
    />
  );
};
Usage.parameters = {
  docs: {
    source: {
      code: `const [enabled, setEnabled] = useState(false);

<UaiThemeProvider theme="light">
  <UaiSwitch
    label="Receber notificações"
    checked={enabled}
    onUaiChange={(event) => setEnabled(event.detail.checked)}
  />
</UaiThemeProvider>`,
    },
  },
};

export const Form = () => {
  const [result, setResult] = useState('');
  return (
    <form
      style={column}
      onSubmit={(event) => {
        event.preventDefault();
        setResult(JSON.stringify(Object.fromEntries(new FormData(event.currentTarget))));
      }}
    >
      <UaiSwitch name="notifications" value="email" label="Notificações por e-mail" />
      <button type="submit">Enviar</button>
      <button type="reset">Restaurar</button>
      <output>{result}</output>
    </form>
  );
};
