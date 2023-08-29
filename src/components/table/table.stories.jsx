import React, { useState } from 'react';
import { BdsChipTag, BdsDataTable, BdsTable, BdsTableBody, BdsTableCell, BdsTableHeader, BdsTableRow, BdsTableTh, BdsTypo } from '../../../blip-ds-react/dist/components';
import readme from './readme.md';

export default {
  title: 'Table',
  parameters: {
    notes: { markdown: readme },
  },
};

const DATA = [
  { id: 1, produto: 'Celular', valor: '1500,00', disponibilidade: 'disponivel' },
  { id: 2, produto: 'Notebook', valor: '4000,00', disponibilidade: 'indisponivel' },
  { id: 3, produto: 'Livros', valor: '60,00', disponibilidade: 'disponivel' },
];

const heading = ['id', 'Produtos', 'Valor', 'Disponibilidade'];

export const Table = () => {
  return (
    <bds-table>
      <bds-table-header>
        <bds-table-row>
          {heading.map((item, index) => {
            return <bds-table-th key={index}>{item}</bds-table-th>;
          })}
        </bds-table-row>
      </bds-table-header>
      <bds-table-body>
        {DATA.map((row, index) => {
          return (
            <bds-table-row key={index}>
              <bds-table-cell>
                <bds-typo variant="fs-14">
                  {row.id}
                </bds-typo>
              </bds-table-cell>
              <bds-table-cell>
                <bds-typo variant="fs-14">
                  {row.produto}
                </bds-typo>
              </bds-table-cell>
              <bds-table-cell>
                <bds-typo variant="fs-14">
                  {row.valor}
                </bds-typo>
              </bds-table-cell>
              <bds-table-cell type="custom">
                {row.disponibilidade === 'disponivel' ? (
                  <bds-chip-tag color="success">{row.disponibilidade}</bds-chip-tag>
                ) : (
                  <bds-chip-tag color="danger">{row.disponibilidade}</bds-chip-tag>
                )}
              </bds-table-cell>
            </bds-table-row>
          );
        })}
      </bds-table-body>
    </bds-table>
  );
};

export const TableReact = () => {
  return (
    <BdsTable>
      <BdsTableHeader>
        <BdsTableRow>
          {heading.map((item, index) => {
            return <BdsTableTh key={index}>{item}</BdsTableTh>;
          })}
        </BdsTableRow>
      </BdsTableHeader>
      <BdsTableBody>
        {DATA.map((row, index) => {
          return (
            <BdsTableRow key={index}>
              <BdsTableCell>
                <BdsTypo variant="fs-14">
                  {row.id}
                </BdsTypo>
              </BdsTableCell>
              <BdsTableCell>
                <BdsTypo variant="fs-14">
                  {row.produto}
                </BdsTypo>
              </BdsTableCell>
              <BdsTableCell>
                <BdsTypo variant="fs-14">
                  {row.valor}
                </BdsTypo>
              </BdsTableCell>
              <BdsTableCell type="custom">
                {row.disponibilidade === 'disponivel' ? (
                  <BdsChipTag color="success">{row.disponibilidade}</BdsChipTag>
                ) : (
                  <BdsChipTag color="danger">{row.disponibilidade}</BdsChipTag>
                )}
              </BdsTableCell>
            </BdsTableRow>
          );
        })}
      </BdsTableBody>
    </BdsTable>
  );
};

export const TableSorting = () => {
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

          console.log(sortedColumn);

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
          console.log(sortedColumn);
          return (
            <bds-table-row key={index}>
              <bds-table-cell>
                <bds-typo variant="fs-14" bold={sortedColumn === 0 ? 'bold' : 'regular'}>
                  {row.id}
                </bds-typo>
              </bds-table-cell>
              <bds-table-cell>
                <bds-typo variant="fs-14" bold={sortedColumn === 1 ? 'bold' : 'regular'}>
                  {row.produto}
                </bds-typo>
              </bds-table-cell>
              <bds-table-cell>
                <bds-typo variant="fs-14" bold={sortedColumn === 2 ? 'bold' : 'regular'}>
                  {row.valor}
                </bds-typo>
              </bds-table-cell>
              <bds-table-cell type="custom">
                {row.disponibilidade === 'disponivel' ? (
                  <bds-chip-tag color="success">{row.disponibilidade}</bds-chip-tag>
                ) : (
                  <bds-chip-tag color="danger">{row.disponibilidade}</bds-chip-tag>
                )}
              </bds-table-cell>
            </bds-table-row>
          );
        })}
      </bds-table-body>
    </bds-table>
  );
};

export const DataTable = () => {
  return (
    <bds-data-table
      sorting="true"
      column='[
      {"heading": "ID", "value": "id"},
      {"heading": "Name", "value": "name"},
      {"heading": "Data do primeiro ticket atendido", "value": "data"},
      {"heading": "Status", "value": "status"}
      ]'
      options='[
        { "id": "1", "name": "Michael Scott", "avatar":"", "data": "01/01/2022", "status": "ativo" },
      { "id": "2", "name" : "Dwight Schrute", "data": "01/01/2022", "status": "ativo" },
      { "id": "3", "name" : "Jim Halpert", "avatar":"", "data": "01/01/2022", "status": "ativo" },
      { "id": "4", "name" : "Pam Beesly", "avatar":"", "data": "01/01/2022", "status": "inativo"},
      { "id": "5", "name" : "Ryan Howard", "avatar":"", "data": "01/01/2022", "status": "inativo" },
      { "id": "6", "name" : "Andy Bernard", "avatar":"", "data": "01/01/2022", "status": "ativo"}
      ]'
    ></bds-data-table>
  );
};

export const DataTableReact = () => {
  return (
    <BdsDataTable
      sorting="true"
      column='[
      {"heading": "ID", "value": "id"},
      {"heading": "Name", "value": "name"},
      {"heading": "Data do primeiro ticket atendido", "value": "data"},
      {"heading": "Status", "value": "status"}
      ]'
      options='[
        { "id": "1", "name": "Michael Scott", "avatar":"", "data": "01/01/2022", "status": "ativo" },
      { "id": "2", "name" : "Dwight Schrute", "data": "01/01/2022", "status": "ativo" },
      { "id": "3", "name" : "Jim Halpert", "avatar":"", "data": "01/01/2022", "status": "ativo" },
      { "id": "4", "name" : "Pam Beesly", "avatar":"", "data": "01/01/2022", "status": "inativo"},
      { "id": "5", "name" : "Ryan Howard", "avatar":"", "data": "01/01/2022", "status": "inativo" },
      { "id": "6", "name" : "Andy Bernard", "avatar":"", "data": "01/01/2022", "status": "ativo"}
      ]'
    ></BdsDataTable>
  );
};
