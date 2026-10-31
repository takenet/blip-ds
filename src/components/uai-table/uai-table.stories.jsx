import React, { useState } from 'react';
import {
  UaiAvatar,
  UaiBadge,
  UaiButton,
  UaiCheckbox,
  UaiTable,
  UaiTableBody,
  UaiTableCell,
  UaiTableHeader,
  UaiTableRow,
  UaiTableTh,
  UaiThemeProvider,
  UaiTypo,
} from '../../../blip-ds-react/dist/components';
import DocumentationTemplate from './uai-table.mdx';

export default {
  title: 'UAI/Table',
  component: UaiTable,
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

const COLUMNS = 'var(--uai-spacing-8xl) repeat(4, 1fr) var(--uai-spacing-8xl)';
const ROWS = [
  { id: 1, name: 'Ana Souza', created: '01/01/2000, 00:00:00', updated: '02/01/2000, 10:30:00', status: 'system', label: 'Info' },
  { id: 2, name: 'Bruno Lima', created: '03/01/2000, 08:15:00', updated: '04/01/2000, 18:00:00', status: 'success', label: 'Success' },
  { id: 3, name: 'Carla Dias', created: '05/01/2000, 12:00:00', updated: '06/01/2000, 09:45:00', status: 'warning', label: 'Warning' },
];

export const Playground = (args) => (
  <UaiTable {...args}>
    <UaiTableHeader>
      <UaiTableRow>
        <UaiTableTh>Nome</UaiTableTh>
        <UaiTableTh>Criado em</UaiTableTh>
        <UaiTableTh justifyContent="right">Itens</UaiTableTh>
      </UaiTableRow>
    </UaiTableHeader>
    <UaiTableBody>
      {ROWS.map((row) => (
        <UaiTableRow key={row.id}>
          <UaiTableCell>{row.name}</UaiTableCell>
          <UaiTableCell>{row.created}</UaiTableCell>
          <UaiTableCell justifyContent="right">{row.id * 10}</UaiTableCell>
        </UaiTableRow>
      ))}
    </UaiTableBody>
  </UaiTable>
);
Playground.args = { columns: '2fr 2fr 1fr', label: 'Usuários' };
Playground.argTypes = {
  columns: { control: 'text' },
  label: { control: 'text' },
};

export const Sortable = () => {
  const [sort, setSort] = useState({ key: 'name', direction: 'ascending' });
  const rows = [...ROWS].sort((a, b) => {
    const order = String(a[sort.key]).localeCompare(String(b[sort.key]));
    return sort.direction === 'ascending' ? order : -order;
  });
  const th = (key, label) => (
    <UaiTableTh
      sortable
      sortDirection={sort.key === key ? sort.direction : 'none'}
      onUaiTableSort={(event) => setSort({ key, direction: event.detail })}
    >
      {label}
    </UaiTableTh>
  );
  return (
    <UaiTable columns="2fr 2fr 2fr" label="Usuários ordenáveis">
      <UaiTableHeader>
        <UaiTableRow>
          {th('name', 'Nome')}
          {th('created', 'Criado em')}
          {th('updated', 'Atualizado em')}
        </UaiTableRow>
      </UaiTableHeader>
      <UaiTableBody>
        {rows.map((row) => (
          <UaiTableRow key={row.id}>
            <UaiTableCell>{row.name}</UaiTableCell>
            <UaiTableCell>{row.created}</UaiTableCell>
            <UaiTableCell>{row.updated}</UaiTableCell>
          </UaiTableRow>
        ))}
      </UaiTableBody>
    </UaiTable>
  );
};

export const Clickable = () => (
  <UaiTable columns="2fr 2fr 1fr" label="Linhas clicáveis">
    <UaiTableHeader>
      <UaiTableRow>
        <UaiTableTh>Nome</UaiTableTh>
        <UaiTableTh>Criado em</UaiTableTh>
        <UaiTableTh justifyContent="right">Itens</UaiTableTh>
      </UaiTableRow>
    </UaiTableHeader>
    <UaiTableBody>
      {ROWS.map((row) => (
        <UaiTableRow key={row.id} clickable onClick={() => alert(row.name)}>
          <UaiTableCell>{row.name}</UaiTableCell>
          <UaiTableCell>{row.created}</UaiTableCell>
          <UaiTableCell justifyContent="right">{row.id * 10}</UaiTableCell>
        </UaiTableRow>
      ))}
    </UaiTableBody>
  </UaiTable>
);

const SelectionTable = ({ bulk }) => {
  const [selected, setSelected] = useState([1, 2]);
  const all = selected.length === ROWS.length;
  const toggle = (id) => setSelected((list) => (list.includes(id) ? list.filter((item) => item !== id) : [...list, id]));
  const toggleAll = () => setSelected(all ? [] : ROWS.map((row) => row.id));

  return (
    <UaiTable columns={COLUMNS} label="Usuários com seleção">
      <UaiTableHeader>
        <UaiTableRow>
          <UaiTableTh justifyContent="center">
            <UaiCheckbox
              aria-label="Selecionar todos"
              checked={all}
              indeterminate={!all && selected.length > 0}
              onUaiChange={toggleAll}
            />
          </UaiTableTh>
          <UaiTableTh>Título</UaiTableTh>
          <UaiTableTh>Criado em</UaiTableTh>
          <UaiTableTh>Atualizado em</UaiTableTh>
          <UaiTableTh>Status</UaiTableTh>
          <UaiTableTh />
        </UaiTableRow>
        {bulk && selected.length > 0 && (
          <UaiTableRow variant="bar">
            <UaiTypo tag="span" variant="body-base" margin={false} style={{ flex: 1 }}>
              {selected.length} {selected.length === 1 ? 'item selecionado' : 'itens selecionados'}
            </UaiTypo>
            <UaiButton variant="text" color="content" icon="trash" aria-label="Excluir" />
            <UaiButton variant="text" color="content" icon="lock" aria-label="Bloquear" />
            <UaiButton variant="text" color="content" icon="close" aria-label="Limpar seleção" onClick={() => setSelected([])} />
          </UaiTableRow>
        )}
      </UaiTableHeader>
      <UaiTableBody>
        {ROWS.map((row) => (
          <UaiTableRow key={row.id} selected={selected.includes(row.id)}>
            <UaiTableCell justifyContent="center">
              <UaiCheckbox
                aria-label={`Selecionar ${row.name}`}
                checked={selected.includes(row.id)}
                onUaiChange={() => toggle(row.id)}
              />
            </UaiTableCell>
            <UaiTableCell>
              <UaiAvatar name={row.name} size="extra-small" />
              {row.name}
            </UaiTableCell>
            <UaiTableCell>{row.created}</UaiTableCell>
            <UaiTableCell>{row.updated}</UaiTableCell>
            <UaiTableCell>
              <UaiBadge color={row.status} aria-label={row.label} />
              {row.label}
            </UaiTableCell>
            <UaiTableCell justifyContent="center">
              <UaiButton variant="text" color="content" icon="more-options-vertical" aria-label={`Mais opções de ${row.name}`} />
            </UaiTableCell>
          </UaiTableRow>
        ))}
      </UaiTableBody>
    </UaiTable>
  );
};

export const WithSelection = () => <SelectionTable bulk />;

export const WithSelectionNoBulkBar = () => <SelectionTable bulk={false} />;
