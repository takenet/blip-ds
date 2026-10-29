import React from 'react';
import { UaiRadio, UaiRadioGroup, UaiThemeProvider } from '../../../blip-ds-react/dist/components';
import DocumentationTemplate from './uai-radio.mdx';

export default {
  title: 'UAI/Radio',
  component: UaiRadio,
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

export const Playground = (args) => <UaiRadio {...args} />;

Playground.args = {
  label: 'Cartão de crédito',
  size: 'standard',
  name: 'payment',
  value: 'card',
  checked: false,
  disabled: false,
};

Playground.argTypes = {
  size: { control: 'select', options: ['short', 'standard', 'tall'] },
  label: { description: 'Rótulo visível e nome acessível.', control: 'text' },
  name: { description: 'Nome usado no FormData fora de UaiRadioGroup.', control: 'text' },
  value: { description: 'Valor enviado quando selecionado.', control: 'text' },
  checked: { description: 'Estado selecionado.', control: 'boolean' },
  disabled: { description: 'Impede a interação e remove o valor do formulário.', control: 'boolean' },
};

export const States = () => (
  <div style={column}>
    <UaiRadio label="Não selecionado" name="unselected" value="unselected" />
    <UaiRadio label="Selecionado" name="selected" value="selected" checked />
    <UaiRadio label="Desabilitado" name="disabled" value="disabled" disabled />
    <UaiRadio label="Selecionado e desabilitado" name="selected-disabled" value="selected-disabled" checked disabled />
  </div>
);

export const Group = () => (
  <UaiRadioGroup aria-label="Forma de pagamento" name="payment" value="card">
    <div style={column}>
      <UaiRadio label="Cartão de crédito" value="card" />
      <UaiRadio label="Boleto" value="invoice" />
      <UaiRadio label="Pix" value="pix" />
    </div>
  </UaiRadioGroup>
);

export const Sizes = () => (
  <div style={column}>
    {['short', 'standard', 'tall'].map((size) => (
      <div key={size} style={{ display: 'flex', alignItems: 'center', gap: 'var(--uai-spacing-md)' }}>
        <UaiRadio size={size} label={size} value={`${size}-unchecked`} />
        <UaiRadio size={size} aria-label={`${size} checked`} value={`${size}-checked`} checked />
      </div>
    ))}
  </div>
);
