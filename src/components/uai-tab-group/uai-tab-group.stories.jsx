import React, { useState } from 'react';
import { UaiTabGroup, UaiTabItem, UaiThemeProvider, UaiTypo } from '../../../blip-ds-react/dist/components';
import DocumentationTemplate from './uai-tab-group.mdx';

export default {
  title: 'UAI/Tab Group',
  component: UaiTabGroup,
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

const stack = { display: 'flex', flexDirection: 'column', gap: 'var(--uai-spacing-lg)' };
const panel = { padding: 'var(--uai-spacing-md)' };

export const Playground = (args) => (
  <UaiTabGroup
    align={args.align}
    contentScrollable={args.contentScrollable}
    dtButtonPrev={args.dtButtonPrev}
    dtButtonNext={args.dtButtonNext}
    ariaLabel={args.ariaLabel}
    ariaLabelledBy={args.ariaLabelledBy}
    language={args.language}
  >
    <UaiTabItem
      label={args.label}
      open
      icon={args.icon}
      iconPosition={args.iconPosition}
      iconTheme={args.iconTheme}
      iconOnly={args.iconOnly}
      ariaLabel={args.itemAriaLabel}
      error={args.error}
      badge={args.badge}
      badgeShape={args.badgeShape}
      badgeColor={args.badgeColor}
      badgeIcon={args.badgeIcon}
      badgeAnimation={args.badgeAnimation}
      badgePosition={args.badgePosition}
      badgeNumber={args.badgeNumber}
    >
      <div style={panel}><UaiTypo>Visão geral do projeto.</UaiTypo></div>
    </UaiTabItem>
    <UaiTabItem label="Atividade">
      <div style={panel}><UaiTypo>Atividades recentes do projeto.</UaiTypo></div>
    </UaiTabItem>
    <UaiTabItem label="Configurações" disable={args.disable}>
      <div style={panel}><UaiTypo>Configurações do projeto.</UaiTypo></div>
    </UaiTabItem>
  </UaiTabGroup>
);

Playground.args = {
  align: 'center',
  contentScrollable: true,
  dtButtonPrev: null,
  dtButtonNext: null,
  ariaLabel: 'Seções do projeto',
  ariaLabelledBy: null,
  language: 'pt_BR',
  label: 'Visão geral',
  icon: 'home',
  iconPosition: 'left',
  iconTheme: 'outline',
  iconOnly: false,
  itemAriaLabel: null,
  disable: false,
  error: false,
  badge: false,
  badgeShape: 'circle',
  badgeColor: 'system',
  badgeIcon: null,
  badgeAnimation: false,
  badgePosition: 'left',
  badgeNumber: null,
};

Playground.argTypes = {
  align: { description: 'Alinhamento do cabeçalho quando não há overflow.', options: ['left', 'center', 'right'], control: 'select', table: { defaultValue: { summary: 'center' } } },
  contentScrollable: { description: 'Permite rolagem do conteúdo do painel.', control: 'boolean', table: { defaultValue: { summary: 'true' } } },
  dtButtonPrev: { description: 'Marcador data-test do controle anterior; prefira roles nos testes.', control: 'text' },
  dtButtonNext: { description: 'Marcador data-test do controle próximo; prefira roles nos testes.', control: 'text' },
  ariaLabel: { description: 'Nome acessível do conjunto de abas.', control: 'text' },
  ariaLabelledBy: { description: 'ID de um título visível que nomeia o conjunto; tem prioridade sobre ariaLabel.', control: 'text' },
  language: { description: 'Idioma dos controles de rolagem, sem alterar os rótulos dos itens.', options: ['pt_BR', 'en_US', 'es_ES'], control: 'select', table: { defaultValue: { summary: 'pt_BR' } } },
  label: { description: 'Rótulo do primeiro item e nome acessível de fallback.', control: 'text', table: { category: 'Item' } },
  icon: { description: 'Nome do ícone opcional do primeiro item.', control: 'text', table: { category: 'Item' } },
  iconPosition: { description: 'Posição do ícone em relação ao rótulo.', options: ['left', 'right'], control: 'select', table: { category: 'Item' } },
  iconTheme: { description: 'Tema herdado do ícone; outline é o padrão.', options: ['outline', 'solid', 'emoji', 'logos'], control: 'select', table: { category: 'Item' } },
  iconOnly: { description: 'Oculta o rótulo visual, mas preserva seu nome acessível.', control: 'boolean', table: { category: 'Item', defaultValue: { summary: 'false' } } },
  itemAriaLabel: { description: 'Prop ariaLabel do primeiro item: nome acessível específico para a aba.', control: 'text', table: { category: 'Item' } },
  disable: { description: 'Desabilita Configurações; a aba não pode ser selecionada.', control: 'boolean', table: { category: 'Item' } },
  error: { description: 'Indica erro no primeiro item com sinal adicional à cor.', control: 'boolean', table: { category: 'Item' } },
  badge: { description: 'Exibe o indicador opcional interno do primeiro item.', control: 'boolean', table: { category: 'Indicador opcional' } },
  badgeShape: { description: 'Forma herdada do indicador.', options: ['circle', 'square', 'triangle', 'triangle-reverse', 'polygon'], control: 'select', table: { category: 'Indicador opcional' } },
  badgeColor: { description: 'Papel semântico da cor do indicador.', options: ['system', 'danger', 'warning', 'success', 'neutral'], control: 'select', table: { category: 'Indicador opcional' } },
  badgeIcon: { description: 'Ícone opcional do indicador.', control: 'text', table: { category: 'Indicador opcional' } },
  badgeAnimation: { description: 'Anima o indicador, respeitando movimento reduzido.', control: 'boolean', table: { category: 'Indicador opcional' } },
  badgePosition: { description: 'Posição herdada do indicador.', options: ['left', 'right'], control: 'select', table: { category: 'Indicador opcional' } },
  badgeNumber: { description: 'Contagem do indicador, incluindo zero; acima do limite mostra 999+.', control: 'number', table: { category: 'Indicador opcional' } },
};

const usageSource = `import React, { useState } from 'react';
import { UaiTabGroup, UaiTabItem, UaiThemeProvider, UaiTypo } from 'blip-ds-react/dist/components';
import 'blip-tokens/uai-icons/css';

export function ProjectTabs() {
  const [selected, setSelected] = useState('Resumo');

  const handleTabChange = (event) => {
    // detail é o elemento HTMLUaiTabItemElement, não um índice nem um objeto value.
    setSelected(event.detail.label);
  };

  return (
    <UaiThemeProvider theme="light">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--uai-spacing-lg)' }}>
        <UaiTabGroup ariaLabel="Seções do projeto" onUaiTabChange={handleTabChange}>
          <UaiTabItem label="Resumo" open={selected === 'Resumo'}>
            <UaiTypo>Visão geral do projeto.</UaiTypo>
          </UaiTabItem>
          <UaiTabItem label="Atividade" open={selected === 'Atividade'}>
            <UaiTypo>Atividades recentes do projeto.</UaiTypo>
          </UaiTabItem>
        </UaiTabGroup>
        <UaiTypo aria-live="polite">Aba selecionada: {selected}</UaiTypo>
      </div>
    </UaiThemeProvider>
  );
}`;

export const Usage = () => {
  const [selected, setSelected] = useState('Resumo');
  const handleTabChange = (event) => setSelected(event.detail.label);
  return (
    <div style={stack}>
      <UaiTabGroup ariaLabel="Seções do projeto" onUaiTabChange={handleTabChange}>
        <UaiTabItem label="Resumo" open={selected === 'Resumo'}>
          <UaiTypo>Visão geral do projeto.</UaiTypo>
        </UaiTabItem>
        <UaiTabItem label="Atividade" open={selected === 'Atividade'}>
          <UaiTypo>Atividades recentes do projeto.</UaiTypo>
        </UaiTabItem>
      </UaiTabGroup>
      <UaiTypo aria-live="polite">Aba selecionada: {selected}</UaiTypo>
    </div>
  );
};
Usage.parameters = { docs: { source: { code: usageSource, language: 'jsx', type: 'code' } } };

export const States = () => (
  <div style={stack}>
    <UaiTypo>Seleção, repouso, erro e indisponibilidade</UaiTypo>
    <UaiTabGroup ariaLabel="Estados das abas">
      <UaiTabItem label="Resumo" open><UaiTypo>Resumo selecionado.</UaiTypo></UaiTabItem>
      <UaiTabItem label="Atividade"><UaiTypo>Atividade do projeto.</UaiTypo></UaiTabItem>
      <UaiTabItem label="Revisar" error><UaiTypo>Revise os dados antes de continuar.</UaiTypo></UaiTabItem>
      <UaiTabItem label="Indisponível" disable><UaiTypo>Conteúdo indisponível.</UaiTypo></UaiTabItem>
    </UaiTabGroup>
    <UaiTypo>Ícones sem rótulo visual, com nome acessível</UaiTypo>
    <UaiTabGroup ariaLabel="Abas com ícones">
      <UaiTabItem label="Visão geral" ariaLabel="Visão geral" icon="home" iconOnly open><UaiTypo>Visão geral.</UaiTypo></UaiTabItem>
      <UaiTabItem label="Ajustes" ariaLabel="Ajustes" icon="settings-general" iconOnly><UaiTypo>Ajustes do projeto.</UaiTypo></UaiTabItem>
    </UaiTabGroup>
    <UaiTypo>Indicadores opcionais: zero e limite de contagem</UaiTypo>
    <UaiTabGroup ariaLabel="Abas com indicadores">
      <UaiTabItem label="Nenhuma pendência" badge badgeNumber={0} open><UaiTypo>Não há pendências.</UaiTypo></UaiTabItem>
      <UaiTabItem label="Pendências" badge badgeNumber={1200} badgeColor="danger" badgePosition="right"><UaiTypo>Consulte as pendências.</UaiTypo></UaiTabItem>
    </UaiTabGroup>
    <UaiTypo>Use o mouse para hover e pressed; use Tab e as setas para visualizar o foco.</UaiTypo>
  </div>
);

export const Overflow = () => (
  <div style={{ maxWidth: 'var(--uai-width-panel)', width: '100%' }}>
    <UaiTabGroup ariaLabel="Seções do projeto">
      {['Visão geral', 'Atividade', 'Conversas', 'Contatos', 'Relatórios', 'Integrações', 'Configurações', 'Histórico', 'Permissões', 'Notificações'].map((label, index) => (
        <UaiTabItem key={label} label={label} open={index === 0}>
          <div style={panel}><UaiTypo>Conteúdo de {label.toLocaleLowerCase('pt-BR')}.</UaiTypo></div>
        </UaiTabItem>
      ))}
    </UaiTabGroup>
  </div>
);
