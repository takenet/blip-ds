import React from 'react';
import {
  UaiThemeProvider,
  UaiInput,
  UaiButton,
  UaiIconButton,
  UaiFilterBar,
  UaiTypo,
} from '../../blip-ds-react/dist/components';

export default {
  title: 'UAI Snippets/Borda de controle',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Input, botão e icon button outline `content` e filter bar lado a lado, em light e dark. Todos usam as mesmas variáveis de borda do `uai-input`: `border/input` em repouso, `content/secondary` em hover, `border/ring` em foco e `border/default` desabilitado. Passe o mouse sobre os controles para comparar o hover.',
      },
    },
  },
};

const columnStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--uai-spacing-lg)',
  padding: 'var(--uai-spacing-xl)',
  backgroundColor: 'var(--uai-surface-background)',
  minHeight: '100%',
};

const rowStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: 'var(--uai-spacing-xs)',
};

const Section = ({ title, children }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--uai-spacing-xs)' }}>
    <UaiTypo variant="body-sm" bold="medium" margin={false}>
      <span style={{ color: 'var(--uai-content-secondary)' }}>{title}</span>
    </UaiTypo>
    {children}
  </div>
);

const ThemeColumn = ({ theme }) => (
  <div style={{ flex: '1 1 0', minWidth: 0, display: 'flex' }}>
    <UaiThemeProvider theme={theme} style={{ display: 'block', width: '100%' }}>
      <div style={columnStyle}>
        <UaiTypo variant="heading-md" bold="semibold" margin={false}>
          {theme === 'light' ? 'Light' : 'Dark'}
        </UaiTypo>

        <Section title="Repouso">
          <div style={rowStyle}>
            <div style={{ flex: '1 1 0', minWidth: 0 }}>
              <UaiInput aria-label="Buscar" placeholder="Nome, telefone ou e-mail" icon="search" />
            </div>
            <UaiButton variant="outline" color="content" iconLeft="filter">
              Filtros
            </UaiButton>
            <UaiIconButton variant="outline" color="content" icon="more-options-vertical" aria-label="Mais opções" />
          </div>
        </Section>

        <Section title="Desabilitado">
          <div style={rowStyle}>
            <div style={{ flex: '1 1 0', minWidth: 0 }}>
              <UaiInput
                aria-label="Buscar desabilitado"
                placeholder="Nome, telefone ou e-mail"
                icon="search"
                disabled
              />
            </div>
            <UaiButton variant="outline" color="content" iconLeft="filter" disabled>
              Filtros
            </UaiButton>
            <UaiIconButton
              variant="outline"
              color="content"
              icon="more-options-vertical"
              aria-label="Mais opções desabilitado"
              disabled
            />
          </div>
        </Section>

        <Section title="Filter bar">
          <UaiFilterBar searchPlaceholder="Buscar indicadores ou campanhas" />
        </Section>
      </div>
    </UaiThemeProvider>
  </div>
);

export const LadoALado = () => (
  <div style={{ display: 'flex', width: '100%', minHeight: '100vh' }}>
    <ThemeColumn theme="light" />
    <ThemeColumn theme="dark" />
  </div>
);
LadoALado.storyName = 'Light e dark lado a lado';
