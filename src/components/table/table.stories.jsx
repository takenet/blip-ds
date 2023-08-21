import React, { useState } from 'react';
import readme from './readme.md';

export default {
  title: 'Table',
  parameters: {
    notes: { markdown: readme },
  },
};

const DATA = [
  { id: 1, name: 'Willian Lomeu', status: 'ativo', btn: 'com botão' },
  { id: 2, name: 'Nome de teste 2', status: 'ativo', btn: 'com botão' },
  { id: 3, name: 'Nome de teste 3', status: 'desativado', btn: 'com botão' },
];
const heading = ['id', 'name', 'status', 'botão'];

export const TableTeste = () => {
  const [arrow, setArrow] = useState('');
  const [sortedColumn, setSortedColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState(1);

  const toggleSort = (columnIndex) => {
    if (sortedColumn === columnIndex) {
      setSortDirection(-sortDirection);
      if (sortDirection === -1) {
        setArrow('asc');
      } else {
        setArrow('dsc');
      }
    } else {
      setSortedColumn(columnIndex);
      setSortDirection(1);
      if (sortDirection === -1) {
        setArrow('dsc');
      } else {
        setArrow('asc');
      }
    }
  };

  const sortedData =
    sortedColumn !== null
      ? [...DATA].sort((a, b) => {
          const valA = a[heading[sortedColumn]];
          const valB = b[heading[sortedColumn]];

          console.log(sortedColumn)

          if (valA < valB) return -sortDirection;
          if (valA > valB) return sortDirection;
          return 0;
        })
      : DATA;

  return (
    <bds-table>
      <bds-table-header>
        <bds-table-row>
          {heading.map((item, index) => {
            return (
              <bds-table-th
                onClick={() => toggleSort(index)}
                sortable={sortedColumn === index ? true : false}
                arrow={arrow}
                key={index}
              >
                {item}
              </bds-table-th>
            );
          })}
        </bds-table-row>
      </bds-table-header>
      <bds-table-body>
        {sortedData.map((row, index) => {
          console.log(sortedColumn)
          return (
          <bds-table-row key={index}>
            <bds-table-cell>
              <bds-typo variant="fs-14" bold={sortedColumn === 0 ? 'bold' : 'regular'}>{row.id}</bds-typo></bds-table-cell>
              <bds-table-cell>
              <bds-typo variant="fs-14" bold={sortedColumn === 1 ? 'bold' : 'regular'}>{row.name}</bds-typo></bds-table-cell>
            <bds-table-cell type="custom">
              {row.status === 'ativo' ?
              <bds-chip-tag color="success">{row.status}</bds-chip-tag> :
              <bds-chip-tag color="danger">{row.status}</bds-chip-tag>
              }
            </bds-table-cell>
            <bds-table-cell type="action">
              <bds-button-icon variant="secondary" size="small" icon="warning"></bds-button-icon>
              <bds-button-icon variant="secondary" size="small" icon="edit"></bds-button-icon>
              <bds-button-icon variant="secondary" size="small" icon="more-options-horizontal"></bds-button-icon>
            </bds-table-cell>
          </bds-table-row>
        )
        } )}
      </bds-table-body>
    </bds-table>
  );
};

export const Table = () => {
  return (
    <bds-data-table
      avatar="true"
      column='[
      {"heading": "ID", "value": "id"},
      {"heading": "Name", "value": "name", "img" : "thumb"},
      {"heading": "Data do primeiro ticket atendido", "value": "default"},
      {"heading": "Status", "value": "status"}
      ]'
      options='[
        { "id": "1", "name": "Michael Scott", "thumb":"", "default": "default 3", "status": "ativo" },
        { "id": "2", "name" : "Dwight Schrute", "default": "default 2", "status": "ativo" },
        { "id": "3", "name" : "Jim Halpert", "thumb":"", "default": "default 6", "status": "ativo" },
        { "id": "4", "name" : "Pam Beesly", "thumb":"", "default": "default 5", "status": "desativado" },
        { "id": "5", "name" : "Ryan Howard", "thumb":"", "default": "default 1", "status": "desativado" },
        { "id": "6", "name" : "Andy Bernard", "thumb":"", "default": "default 9", "status": "ativo" }
      ]'
    ></bds-data-table>
  );
};

export const TableSorting = () => {
  return (
    <bds-data-table
      sorting="true"
      avatar="true"
      column='[
      {"heading": "ID", "value": "id"},
      {"heading": "Name", "value": "name", "img" : "thumb"},
      {"heading": "Data do primeiro ticket atendido", "value": "default"},
      {"heading": "Status", "value": "status"}
      ]'
      options='[
        { "id": "1", "name": "Michael Scott", "avatar":"", "default": "01/01/2022", "status": "ativo" },
      { "id": "2", "name" : "Dwight Schrute", "default": "01/01/2022", "status": "ativo" },
      { "id": "3", "name" : "Jim Halpert", "avatar":"", "default": "01/01/2022", "status": "ativo" },
      { "id": "4", "name" : "Pam Beesly", "avatar":"", "default": "01/01/2022", "status": "inativo"},
      { "id": "5", "name" : "Ryan Howard", "avatar":"", "default": "01/01/2022", "status": "inativo" },
      { "id": "6", "name" : "Andy Bernard", "avatar":"", "default": "01/01/2022", "status": "ativo"}
      ]'
    ></bds-data-table>
  );
};

export const TableChips = () => {
  return (
    <bds-data-table
      sorting="true"
      avatar="true"
      chips="true"
      action-area="true"
      column='[
    {"heading": "ID", "value": "id"},
    {"heading": "Name", "value": "name", "img" : "avatar"},
    {"heading": "Data do primeiro ticket atendido", "value": "default"},
    {"heading": "Status", "value": "status", "chips" : "color"}
    ]'
      options='[
      { "id": "1", "name": "Michael Scott", "avatar":"", "default": "01/01/2022", "status": "ativo", "color": "success" },
      { "id": "2", "name" : "Dwight Schrute", "default": "01/01/2022", "status": "ativo", "color": "success" },
      { "id": "3", "name" : "Jim Halpert", "avatar":"", "default": "01/01/2022", "status": "ativo", "color": "success" },
      { "id": "4", "name" : "Pam Beesly", "avatar":"", "default": "01/01/2022", "status": "inativo", "color": "disabled"},
      { "id": "5", "name" : "Ryan Howard", "avatar":"", "default": "01/01/2022", "status": "inativo", "color": "disabled" },
      { "id": "6", "name" : "Andy Bernard", "avatar":"", "default": "01/01/2022", "status": "ativo", "color": "success"}
    ]'
    ></bds-data-table>
  );
};

export const TableActionButtons = () => {
  return (
    <bds-data-table
      sorting="true"
      avatar="true"
      chips="true"
      action-area="true"
      column='[
      {"heading": "ID", "value": "id"},
      {"heading": "Name", "value": "name", "img" : "avatar"},
      {"heading": "Data do primeiro ticket atendido", "value": "default"},
      {"heading": "Status", "value": "status", "chips" : "color"},
      {"heading": "Ações", "editAction": "edit-button", "deleteAction": "delete-button", "customAction" : "dot-button"}
      ]'
      options='[
        { "id": "1", "name": "Michael Scott", "avatar":"", "default": "01/01/2022", "status": "ativo", "color": "success", "edit-button": "edit", "delete-button": "trash", "dot-button": "more-options-horizontal" },
        { "id": "2", "name" : "Dwight Schrute", "default": "01/01/2022", "status": "ativo", "color": "success", "edit-button": "edit", "delete-button": "trash", "dot-button": "more-options-horizontal"  },
        { "id": "3", "name" : "Jim Halpert", "avatar":"", "default": "01/01/2022", "status": "ativo", "color": "success", "edit-button": "edit", "delete-button": "trash", "dot-button": "more-options-horizontal" },
        { "id": "4", "name" : "Pam Beesly", "avatar":"", "default": "01/01/2022", "status": "inativo", "color": "disabled", "edit-button": "edit", "delete-button": "trash", "dot-button": "more-options-horizontal" },
        { "id": "5", "name" : "Ryan Howard", "avatar":"", "default": "01/01/2022", "status": "inativo", "color": "disabled","edit-button": "edit", "delete-button": "trash", "dot-button": "more-options-horizontal"  },
        { "id": "6", "name" : "Andy Bernard", "avatar":"", "default": "01/01/2022", "status": "ativo", "color": "success", "edit-button": "edit", "delete-button": "trash", "dot-button": "more-options-horizontal"  }
      ]'
    ></bds-data-table>
  );
};
