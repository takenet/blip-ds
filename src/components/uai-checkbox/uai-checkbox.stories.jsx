import React, { useState } from 'react';
import { UaiCheckbox, UaiThemeProvider } from '../../../blip-ds-react/dist/components';
import DocumentationTemplate from './uai-checkbox.mdx';

export default {
  title: 'UAI/Checkbox',
  component: UaiCheckbox,
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
};

const column = {
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--uai-spacing-md)',
};

export const Playground = (args) => <UaiCheckbox {...args} />;

Playground.args = {
  label: 'Receber novidades',
  size: 'standard',
  name: 'updates',
  value: 'email',
  checked: false,
  indeterminate: false,
  required: false,
  disabled: false,
};

Playground.argTypes = {
  size: { control: 'select', options: ['short', 'standard', 'tall'] },
  label: { description: 'Rótulo visível e nome acessível.', control: 'text' },
  name: { description: 'Nome usado no FormData quando marcado.', control: 'text' },
  value: { description: 'Valor enviado quando marcado.', control: 'text' },
  checked: { description: 'Estado marcado.', control: 'boolean' },
  indeterminate: { description: 'Seleção parcial de um conjunto de opções.', control: 'boolean' },
  required: { description: 'Exige que o checkbox esteja marcado no envio.', control: 'boolean' },
  disabled: { description: 'Impede a interação e remove o valor do formulário.', control: 'boolean' },
};

export const States = () => (
  <div style={column}>
    <UaiCheckbox label="Desmarcado" />
    <UaiCheckbox label="Marcado" checked />
    <UaiCheckbox label="Seleção parcial" indeterminate />
    <UaiCheckbox label="Desabilitado" disabled />
    <UaiCheckbox label="Marcado e desabilitado" checked disabled />
    <UaiCheckbox label="Parcial e desabilitado" indeterminate disabled />
  </div>
);

export const Sizes = () => (
  <div style={column}>
    {['short', 'standard', 'tall'].map((size) => (
      <div key={size} style={{ display: 'flex', alignItems: 'center', gap: 'var(--uai-spacing-md)' }}>
        <UaiCheckbox size={size} label={size} />
        <UaiCheckbox size={size} aria-label={`${size} checked`} checked />
        <UaiCheckbox size={size} aria-label={`${size} indeterminate`} indeterminate />
      </div>
    ))}
  </div>
);

export const Form = () => {
  const [submitted, setSubmitted] = useState('');
  return (
    <form
      style={column}
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(JSON.stringify(Object.fromEntries(new FormData(event.currentTarget))));
      }}
    >
      <UaiCheckbox label="Aceito receber atualizações" name="updates" value="email" required />
      <button type="submit">Enviar</button>
      <button type="reset">Limpar</button>
      <output>{submitted}</output>
    </form>
  );
};
