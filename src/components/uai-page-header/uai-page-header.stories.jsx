import React, { useState } from 'react';
import { UaiButton, UaiPageHeader, UaiThemeProvider, UaiTypo } from '../../../blip-ds-react/dist/components';
import DocumentationTemplate from './uai-page-header.mdx';

export default {
  title: 'UAI/Page Header',
  component: UaiPageHeader,
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

const items = [
  { label: 'Início', href: '#inicio' },
  { label: 'Atendimento', href: '#atendimento' },
  { label: 'Equipe' },
  { label: 'Relatórios', href: '#relatorios' },
  { label: 'Relatório mensal' },
];
const column = { display: 'flex', flexDirection: 'column', gap: 'var(--uai-spacing-md)', minWidth: 0 };
const group = { display: 'flex', flexWrap: 'wrap', gap: 'var(--uai-spacing-xs)', alignItems: 'center' };

export const Playground = (args) => (
  <UaiPageHeader {...args}>
    <UaiButton slot="actions" variant="outline" color="content">Exportar</UaiButton>
    <UaiButton slot="actions">Criar relatório</UaiButton>
  </UaiPageHeader>
);
Playground.args = { level: 'primary', title: 'Relatórios', items, wrapItems: true, editable: false, language: 'pt_BR', labels: {} };
Playground.argTypes = {
  level: { control: 'select', options: ['primary', 'secondary'], description: 'Nível visual, não profundidade. Padrão primary: title; secondary: items.' },
  title: { control: 'text', description: 'Título primary, padrão vazio. Não é editável e não é fallback do secondary.' },
  items: { control: 'object', description: 'Array de { label, href? } ou JSON, padrão []. Repassado ao breadcrumb secondary.' },
  wrapItems: { control: 'boolean', description: 'Padrão true. Acima de três itens recolhe intermediários; false mostra todos.' },
  editable: { control: 'boolean', description: 'Padrão false. Edita somente o atual do secondary; não edita title.' },
  language: { control: 'select', options: ['pt_BR', 'en_US', 'es_ES'], description: 'Padrão pt_BR; repassado ao breadcrumb secondary.' },
  labels: { control: 'object', description: 'Partial<UaiBreadcrumbLabels>: navigation, hiddenItems, edit, input, confirm, cancel, required, empty. Repassado ao breadcrumb.' },
  onUaiBreadcrumbItemClick: { action: 'uaiBreadcrumbItemClick', control: false, description: 'Evento do filho, sem reemissão: { label, href? }.' },
  onUaiBreadcrumbItemEdit: { action: 'uaiBreadcrumbItemEdit', control: false, description: 'Evento do filho, sem reemissão: { index, oldValue, value }.' },
};

export const Usage = () => {
  const [hierarchy, setHierarchy] = useState(items);
  const [message, setMessage] = useState('Nenhuma ação.');
  return (
    <div style={column}>
      <UaiPageHeader
        level="secondary"
        items={hierarchy}
        editable
        onUaiBreadcrumbItemClick={(event) => setMessage(JSON.stringify(event.detail))}
        onUaiBreadcrumbItemEdit={(event) => {
          const { index, value } = event.detail;
          setHierarchy((current) => current.map((item, position) => position === index ? { ...item, label: value } : item));
          setMessage(JSON.stringify(event.detail));
        }}
      >
        <UaiButton slot="actions" variant="outline" color="content" onUaiClick={() => setMessage('Exportação solicitada.')}>Exportar</UaiButton>
        <UaiButton slot="actions" onUaiClick={() => setMessage('Criação solicitada.')}>Criar relatório</UaiButton>
      </UaiPageHeader>
      <UaiTypo tag="p" variant="body-base" aria-live="polite">{message}</UaiTypo>
    </div>
  );
};
Usage.parameters = {
  docs: { source: { language: 'jsx', code: `import React, { useState } from 'react';
import { UaiButton, UaiPageHeader, UaiThemeProvider } from 'blip-ds-react/dist/components';
import 'blip-tokens/uai-icons/css';

export function ReportPageHeader() {
  const [items, setItems] = useState([
    { label: 'Início', href: '#inicio' },
    { label: 'Relatórios', href: '#relatorios' },
    { label: 'Relatório mensal' },
  ]);
  const [message, setMessage] = useState('');
  const handleEdit = (event) => {
    const { index, oldValue, value } = event.detail;
    // A aplicação é responsável por persistência e tratamento de falhas.
    setItems((current) => current.map((item, position) =>
      position === index ? { ...item, label: value } : item));
    setMessage(JSON.stringify({ index, oldValue, value }));
  };
  return (
    <UaiThemeProvider theme="light">
      <UaiPageHeader level="secondary" items={items} editable
        language="pt_BR" labels={{ edit: 'Renomear relatório' }}
        onUaiBreadcrumbItemEdit={handleEdit}
        onUaiBreadcrumbItemClick={(event) => console.info(event.detail)}>
        <UaiButton slot="actions" variant="outline" color="content"
          onUaiClick={() => setMessage('Exportação solicitada.')}>Exportar</UaiButton>
        <UaiButton slot="actions"
          onUaiClick={() => setMessage('Criação solicitada.')}>Criar relatório</UaiButton>
      </UaiPageHeader>
      <p role="status">{message}</p>
    </UaiThemeProvider>
  );
}` } },
};

export const States = () => (
  <div style={column}>
    <UaiPageHeader title="Relatórios" />
    <UaiPageHeader level="secondary" items={items} />
    <UaiTypo tag="p" variant="body-base">Edite o atual abaixo; confirme vazio para ver erro ou cancele. As ações continuam disponíveis.</UaiTypo>
    <Usage />
    <UaiPageHeader level="secondary" title="Este título não é fallback" items={[]} />
    <UaiPageHeader title="Relatório com ações indisponíveis">
      <UaiButton slot="actions" disabled variant="outline" color="content">Exportar indisponível</UaiButton>
      <UaiButton slot="actions" loading>Salvando</UaiButton>
    </UaiPageHeader>
  </div>
);

export const Hierarchy = () => (
  <div style={column}>
    <UaiPageHeader level="secondary" items={items} />
    <UaiPageHeader level="secondary" items={items} wrapItems={false} />
    <div style={{ width: 'var(--uai-width-panel)', maxWidth: '100%' }}>
      <UaiPageHeader
        level="secondary"
        items={[...items.slice(0, -1), { label: 'Relatório mensal de atendimento de todas as equipes da organização' }]}
        wrapItems={false}
        editable
      >
        <UaiButton slot="actions" variant="outline" color="content">Exportar relatório</UaiButton>
        <UaiButton slot="actions">Criar relatório</UaiButton>
      </UaiPageHeader>
    </div>
  </div>
);

export const SplitActions = () => {
  const [message, setMessage] = useState('Escolha uma ação.');
  return (
    <div style={column}>
      <UaiPageHeader title="Relatórios">
        <div slot="actions" role="group" aria-label="Ações de criação do relatório" style={group}>
          <UaiButton onUaiClick={() => setMessage('Criação solicitada.')}>Criar relatório</UaiButton>
          <UaiButton variant="outline" color="content" onUaiClick={() => setMessage('Criação a partir de modelo solicitada.')}>Criar a partir de modelo</UaiButton>
        </div>
      </UaiPageHeader>
      <UaiTypo tag="p" variant="body-base" aria-live="polite">{message}</UaiTypo>
    </div>
  );
};

export const EditingOptional = () => (
  <div style={column}>
    <UaiTypo tag="p" variant="body-base">Secondary sem edição (padrão: editable=false): navegação e ações.</UaiTypo>
    <UaiPageHeader level="secondary" items={items.slice(-3)}>
      <UaiButton slot="actions">Criar relatório</UaiButton>
    </UaiPageHeader>
    <UaiTypo tag="p" variant="body-base">Secondary com edição (editable): somente o item atual pode ser renomeado.</UaiTypo>
    <Usage />
  </div>
);

export const Localization = () => (
  <div style={column}>
    {['pt_BR', 'en_US', 'es_ES'].map((language) => (
      <UaiPageHeader key={language} level="secondary" items={items} editable language={language} />
    ))}
    <UaiPageHeader level="secondary" items={items} editable language="en_US" labels={{ navigation: 'Report hierarchy', edit: 'Rename report', required: 'Enter a report name.' }} />
  </div>
);

export const Themes = () => (
  <div style={column}>
    {['light', 'dark'].map((theme) => (
      <UaiThemeProvider key={theme} theme={theme}>
        <div style={{ ...column, padding: 'var(--uai-spacing-md)', background: 'var(--uai-surface-paper)', color: 'var(--uai-content-primary)' }}>
          <UaiTypo tag="p" variant="body-base">{theme}: primary, secondary e edição interativa.</UaiTypo>
          <UaiPageHeader title="Relatórios" />
          <Usage />
        </div>
      </UaiThemeProvider>
    ))}
  </div>
);
