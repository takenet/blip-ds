import React, { useState } from 'react';
import { UaiBreadcrumb, UaiThemeProvider, UaiTypo } from '../../../blip-ds-react/dist/components';
import DocumentationTemplate from './uai-breadcrumb.mdx';

export default {
  title: 'UAI/Breadcrumb',
  component: UaiBreadcrumb,
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

export const Playground = (args) => <UaiBreadcrumb {...args} />;
Playground.args = { items, wrapItems: true, editable: false, language: 'pt_BR', labels: {} };
Playground.argTypes = {
  items: { control: 'object', description: 'Array de { label, href? } ou JSON equivalente. Padrão: []. Último item é o atual.' },
  wrapItems: { control: 'boolean', description: 'Padrão true. Recolhe intermediários somente acima de três itens; não limita a profundidade.' },
  editable: { control: 'boolean', description: 'Padrão false. Habilita edição apenas do item atual, sem persistir nem alterar items.' },
  language: {
    control: 'select',
    options: ['pt_BR', 'en_US', 'es_ES'],
    description: 'Idioma dos textos próprios; padrão pt_BR. Não traduz os rótulos recebidos em items.',
  },
  labels: { control: 'object', description: 'Partial<UaiBreadcrumbLabels>: navigation, hiddenItems, edit, input, confirm, cancel, required, empty.' },
  currentHeadingLevel: { control: { type: 'select' }, options: [undefined, 1, 2, 3, 4, 5, 6], description: 'Sem heading por padrão. Nível semântico do texto atual; o page header repassa 1.' },
  onUaiBreadcrumbItemClick: { action: 'uaiBreadcrumbItemClick', control: false, description: 'Link ativado: detail { label, href? }; preserva navegação nativa.' },
  onUaiBreadcrumbItemEdit: { action: 'uaiBreadcrumbItemEdit', control: false, description: 'Solicitação: detail { index, oldValue, value }; consumidor atualiza items.' },
};

export const Usage = () => {
  const [hierarchy, setHierarchy] = useState(items);
  const [lastEvent, setLastEvent] = useState('Nenhum evento.');
  return (
    <div style={column}>
      <UaiBreadcrumb
        items={hierarchy}
        editable
        onUaiBreadcrumbItemClick={(event) => setLastEvent(JSON.stringify(event.detail))}
        onUaiBreadcrumbItemEdit={(event) => {
          const { index, value } = event.detail;
          setHierarchy((current) => current.map((item, position) => position === index ? { ...item, label: value } : item));
          setLastEvent(JSON.stringify(event.detail));
        }}
      />
      <UaiTypo tag="p" variant="body-base" aria-live="polite">{lastEvent}</UaiTypo>
    </div>
  );
};
Usage.parameters = {
  docs: { source: { language: 'jsx', code: `import React, { useState } from 'react';
import { UaiBreadcrumb, UaiThemeProvider } from 'blip-ds-react/dist/components';
import 'blip-tokens/uai-icons/css';

export function PageBreadcrumb() {
  const [items, setItems] = useState([
    { label: 'Início', href: '#inicio' },
    { label: 'Relatórios', href: '#relatorios' },
    { label: 'Relatório mensal' },
  ]);
  const handleEdit = (event) => {
    const { index, oldValue, value } = event.detail;
    // Persista no serviço do produto e trate falhas aqui, se necessário.
    setItems((current) => current.map((item, position) =>
      position === index ? { ...item, label: value } : item));
    console.info({ index, oldValue, value });
  };
  return (
    <UaiThemeProvider theme="light">
      <UaiBreadcrumb items={items} editable language="pt_BR"
        onUaiBreadcrumbItemEdit={handleEdit}
        onUaiBreadcrumbItemClick={(event) => console.info(event.detail)} />
    </UaiThemeProvider>
  );
}` } },
};

export const States = () => (
  <div style={column}>
    <UaiTypo tag="p" variant="body-base">Leitura; atual com link; edição; vazio. Use Tab para ver o foco, edite e confirme espaços para ver o erro.</UaiTypo>
    <UaiBreadcrumb items={items.slice(0, 2)} />
    <UaiBreadcrumb items={[{ label: 'Início', href: '#inicio' }, { label: 'Relatório mensal', href: '#mensal' }]} editable />
    <Usage />
    <UaiBreadcrumb items={[]} />
  </div>
);

export const Hierarchy = () => (
  <div style={column}>
    <UaiTypo tag="p" variant="body-base">Cinco níveis: abra os intermediários. “Equipe” não tem link.</UaiTypo>
    <UaiBreadcrumb items={items} />
    <UaiTypo tag="p" variant="body-base">Mesma hierarquia sem recolhimento: wrapItems=false.</UaiTypo>
    <UaiBreadcrumb items={items} wrapItems={false} />
    <UaiTypo tag="p" variant="body-base">Três níveis não recolhem; JSON também é aceito.</UaiTypo>
    <UaiBreadcrumb items={JSON.stringify(items.slice(0, 3))} />
  </div>
);

export const EditingOptional = () => (
  <div style={column}>
    <UaiTypo tag="p" variant="body-base">Sem edição (padrão: editable=false): somente navegação.</UaiTypo>
    <UaiBreadcrumb items={items.slice(-3)} />
    <UaiTypo tag="p" variant="body-base">Com edição (editable): o item atual ganha um gatilho separado para renomear.</UaiTypo>
    <Usage />
  </div>
);

export const Localization = () => (
  <div style={column}>
    {['pt_BR', 'en_US', 'es_ES'].map((language) => (
      <div key={language} style={column}>
        <UaiTypo tag="p" variant="body-base">{language}</UaiTypo>
        <UaiBreadcrumb items={items} editable language={language} />
        <UaiBreadcrumb items={[]} language={language} />
      </div>
    ))}
    <UaiBreadcrumb items={items} editable language="en_US" labels={{ navigation: 'Report hierarchy', edit: 'Rename report', required: 'Enter a report name.' }} />
  </div>
);

export const Themes = () => (
  <div style={column}>
    {['light', 'dark'].map((theme) => (
      <UaiThemeProvider key={theme} theme={theme}>
        <div style={{ ...column, padding: 'var(--uai-spacing-md)', background: 'var(--uai-surface-paper)', color: 'var(--uai-content-primary)' }}>
          <UaiTypo tag="p" variant="body-base">{theme}: abra os intermediários ou edite o atual.</UaiTypo>
          <Usage />
        </div>
      </UaiThemeProvider>
    ))}
  </div>
);
