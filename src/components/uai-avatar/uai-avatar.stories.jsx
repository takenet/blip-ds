import React from 'react';
import { UaiAvatar, UaiThemeProvider } from '../../../blip-ds-react/dist/components';
import DocumentationTemplate from './uai-avatar.mdx';

export default {
  title: 'UAI/Avatar',
  component: UaiAvatar,
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

const sizes = ['micro', 'extra-small', 'small', 'standard', 'large', 'extra-large'];

export const Playground = (args) => <UaiAvatar {...args} />;

Playground.args = {
  src: '',
  initials: 'AB',
  label: 'Alex Brown',
  size: 'standard',
};

Playground.argTypes = {
  src: {
    description: 'URL da imagem. O app consumidor é responsável pela seleção e pelo upload do arquivo.',
    control: 'text',
  },
  initials: {
    description: 'Uma ou duas iniciais explícitas para o fallback da imagem.',
    control: 'text',
  },
  label: {
    description: 'Nome acessível do avatar. Sem label, o componente é decorativo para leitores de tela.',
    control: 'text',
  },
  size: {
    table: { defaultValue: { summary: 'standard' } },
    options: sizes,
    control: 'select',
  },
  dataTest: {
    description: 'Valor de data-test aplicado ao elemento do avatar.',
    control: 'text',
  },
};

export const Sizes = () => (
  <div style={{ display: 'flex', alignItems: 'end', gap: 'var(--uai-spacing-lg)' }}>
    {sizes.map((size) => (
      <div key={size} style={{ display: 'grid', justifyItems: 'center', gap: 'var(--uai-spacing-xs)' }}>
        <UaiAvatar size={size} initials="AB" label="Alex Brown" />
        <code>{size}</code>
      </div>
    ))}
  </div>
);

export const ImageFallback = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--uai-spacing-md)' }}>
    <UaiAvatar
      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&h=160&fit=crop&crop=faces"
      initials="AB"
      label="Alex Brown"
    />
    <UaiAvatar initials="AB" label="Alex Brown" />
    <UaiAvatar label="Profile without photo or initials" />
  </div>
);

export const Decorative = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--uai-spacing-md)' }}>
    <UaiAvatar initials="AB" />
    <span>Avatar decorativo ao lado de conteúdo que já identifica a pessoa.</span>
  </div>
);
