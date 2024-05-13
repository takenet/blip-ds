import React, { useState } from 'react';
import { useEffect } from 'react';
import {
  BdsChipTag,
  BdsTable,
  BdsTableBody,
  BdsTableCell,
  BdsTableHeader,
  BdsTableRow,
  BdsTypo,
  BdsTableTh,
} from '../../../../blip-ds-react/dist/components';
import DocumentationTemplate from './table.mdx';

export default {
  title: 'Components/Table',
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

const DATA = [
  {
    id: 1,
    produto: 'Celular',
    valor: '1500,00',
    disponibilidade: 'disponivel',
    marca: 'Samsung',
    estoque: 10,
    categoria: 'Eletrônicos',
  },
  {
    id: 2,
    produto: 'Notebook',
    valor: '4000,00',
    disponibilidade: 'indisponivel',
    marca: 'Dell',
    estoque: 5,
    categoria: 'Computadores',
  },
  {
    id: 3,
    produto: 'Livros',
    valor: '60,00',
    disponibilidade: 'disponivel',
    marca: 'Penguin',
    estoque: 20,
    categoria: 'Livros',
  },
];

const heading = ['id', 'Produtos', 'Valor', 'Disponibilidade', 'Marca', 'Estoque', 'Categoria'];

export const Properties = (args) => {
  const el = document.getElementsByClassName('sb-story');

  useEffect(() => {
    const table = document.getElementById('table-default');
    const scro = table.getAttribute('scrollable');
    const scrDense = table.getAttribute('dense-table');
    console.log(scrDense)
    scro == 'false' ? (el[0].style.width = '800px') : (el[0].style.width = '600px');
  });
  return (
    <bds-table id="table-default" scrollable={args.scrollable} dense-table={args.denseTable}>
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
                <bds-typo variant="fs-14">{row.id}</bds-typo>
              </bds-table-cell>
              <bds-table-cell>
                <bds-typo variant="fs-14">{row.produto}</bds-typo>
              </bds-table-cell>
              <bds-table-cell>
                <bds-typo variant="fs-14">{row.valor}</bds-typo>
              </bds-table-cell>
              <bds-table-cell type={args.type}>
                {row.disponibilidade === 'disponivel' ? (
                  <bds-chip-tag color="success">{row.disponibilidade}</bds-chip-tag>
                ) : (
                  <bds-chip-tag color="danger">{row.disponibilidade}</bds-chip-tag>
                )}
              </bds-table-cell>
              <bds-table-cell>
                <bds-typo variant="fs-14">{row.marca}</bds-typo>
              </bds-table-cell>
              <bds-table-cell>
                <bds-typo variant="fs-14">{row.estoque}</bds-typo>
              </bds-table-cell>
              <bds-table-cell>
                <bds-typo variant="fs-14">{row.categoria}</bds-typo>
              </bds-table-cell>
            </bds-table-row>
          );
        })}
      </bds-table-body>
    </bds-table>
  );
};

Properties.args = {
  denseTable: false,
  scrollable: false,
  type: 'custom',
};

Properties.argTypes = {
  scrollable: {
    table: {
      defaultValue: { summary: 'false' },
    },
    control: 'boolean',
  },
  denseTable: {
    table: {
      defaultValue: { summary: 'false' },
    },
    control: 'boolean',
  },
  type: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    options: ['text', 'custom', 'action'],
    control: 'select',
  },
};

export const WebComponent = () => {
  const DATA = [
    { id: 1, produto: 'Celular', valor: '1500,00', disponibilidade: 'disponivel' },
    { id: 2, produto: 'Notebook', valor: '4000,00', disponibilidade: 'indisponivel' },
    { id: 3, produto: 'Livros', valor: '60,00', disponibilidade: 'disponivel' },
  ];

  const heading = ['id', 'Produtos', 'Valor', 'Disponibilidade'];

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
                <bds-typo variant="fs-14">{row.id}</bds-typo>
              </bds-table-cell>
              <bds-table-cell>
                <bds-typo variant="fs-14">{row.produto}</bds-typo>
              </bds-table-cell>
              <bds-table-cell>
                <bds-typo variant="fs-14">{row.valor}</bds-typo>
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

export const FrameworkReact = () => {
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
                <BdsTypo variant="fs-14">{row.id}</BdsTypo>
              </BdsTableCell>
              <BdsTableCell>
                <BdsTypo variant="fs-14">{row.produto}</BdsTypo>
              </BdsTableCell>
              <BdsTableCell>
                <BdsTypo variant="fs-14">{row.valor}</BdsTypo>
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
