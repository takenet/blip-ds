import React, { useState, useEffect } from 'react';

export default {
  title: 'Snippets/Tables',
};

const DATA = [
  {
    id: 1,
    produto: 'Celular',
    valor: '1500,00',
    disponibilidade: 'disponivel',
    marca: 'Samsung',
    modelo: 'Galaxy S20',
    cor: 'Preto',
  },
  {
    id: 2,
    produto: 'Notebook',
    valor: '4000,00',
    disponibilidade: 'indisponivel',
    marca: 'Apple',
    modelo: 'MacBook Pro',
    cor: 'Cinza Espacial',
  },
  {
    id: 3,
    produto: 'Câmera',
    valor: '800,00',
    disponibilidade: 'disponivel',
    marca: 'Canon',
    modelo: 'EOS Rebel T7',
    cor: 'Preto',
  },
];

const heading = ['Id', 'Produtos', 'Valor', 'Marca', 'Modelo', 'Cor', 'Disponibilidade'];

export const TableDefault = () => {
  const el = document.getElementsByClassName('sb-story');
  if (el.length !== 0) {
    el[0].style.width = '600px';
  }
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
              <bds-table-cell>
                <bds-typo variant="fs-14">{row.marca}</bds-typo>
              </bds-table-cell>
              <bds-table-cell>
                <bds-typo variant="fs-14">{row.modelo}</bds-typo>
              </bds-table-cell>
              <bds-table-cell>
                <bds-typo variant="fs-14">{row.cor}</bds-typo>
              </bds-table-cell>
              <bds-table-cell>
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

export const TableWithComponents = () => {
  const el = document.getElementsByClassName('sb-story');
  if (el.length !== 0) {
    el[0].style.width = '600px';
  }

  const DATA = [
    { usuario: 'Marco Antônio', idade: '20', estadoCivil: 'Solteiro', profissao: 'Professor', status: 'Ativo' },
    { usuario: 'Julia Alves', idade: '34', estadoCivil: 'Casado', profissao: 'Médico', status: 'Ativo' },
    { usuario: 'Pedro Guimarães', idade: '46', estadoCivil: 'Solteiro', profissao: 'Designer', status: 'Desativado' },
  ];

  const heading = ['Usuário', 'Idade', 'Estado Civil', 'Profissão', 'Status', ''];

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
              <bds-table-cell type="action">
                <bds-avatar size="extra-small" name={row.usuario}></bds-avatar>
                <bds-typo variant="fs-14">{row.usuario}</bds-typo>
              </bds-table-cell>
              <bds-table-cell>
                <bds-typo variant="fs-14">{row.idade}</bds-typo>
              </bds-table-cell>
              <bds-table-cell>
                <bds-typo variant="fs-14">{row.estadoCivil}</bds-typo>
              </bds-table-cell>
              <bds-table-cell>{row.profissao}</bds-table-cell>
              <bds-table-cell>
                {row.status === 'Ativo' ? (
                  <bds-chip-tag color="success">{row.status}</bds-chip-tag>
                ) : (
                  <bds-chip-tag color="danger">{row.status}</bds-chip-tag>
                )}
              </bds-table-cell>
              <bds-table-cell type="action">
                <bds-button-icon variant="tertiary" size="short" icon="edit"></bds-button-icon>
                <bds-button-icon variant="delete" size="short" icon="trash"></bds-button-icon>
              </bds-table-cell>
            </bds-table-row>
          );
        })}
      </bds-table-body>
    </bds-table>
  );
};

export const TableSorting = () => {
  const el = document.getElementsByClassName('sb-story');
  if (el.length !== 0) {
    el[0].style.width = '800px';
  }
  return (
    <bds-paper width="800px">
      <bds-data-table
        sorting="true"
        column='[
        {"heading": "ID", "value": "id"},
        {"heading": "Name", "value": "name"},
        {"heading": "Data do primeiro ticket atendido", "value": "data"},
        {"heading": "Profissão", "value": "profissao"}
        ]'
        options='[
          { "id": "1", "name": "Michael Scott", "avatar":"", "data": "15/03/2024", "profissao": "Médico" },
          { "id": "2", "name" : "Dwight Schrute", "data": "25/06/2024", "profissao": "Engenheiro" },
          { "id": "3", "name" : "Jim Halpert", "avatar":"", "data": "10/09/2024", "profissao": "Professor" },
          { "id": "4", "name" : "Pam Beesly", "avatar":"", "data": "05/11/2024", "profissao": "Advogado"},
          { "id": "5", "name" : "Ryan Howard", "avatar":"", "data": "20/02/2024", "profissao": "Designer gráfico" },
          { "id": "6", "name" : "Andy Bernard", "avatar":"", "data": "08/07/2024", "profissao": "Contador"}
      ]'
      ></bds-data-table>
    </bds-paper>
  );
};

export const TableWithFilter = () => {
  const DATA = [
    {
      id: 1,
      produto: 'Celular',
      valor: '1500,00',
      disponibilidade: 'disponivel',
      marca: 'Samsung',
      modelo: 'Galaxy S20',
      cor: 'Preto',
    },
    {
      id: 2,
      produto: 'Notebook',
      valor: '4000,00',
      disponibilidade: 'indisponivel',
      marca: 'Apple',
      modelo: 'MacBook Pro',
      cor: 'Cinza Espacial',
    },
    {
      id: 3,
      produto: 'Câmera',
      valor: '800,00',
      disponibilidade: 'disponivel',
      marca: 'Canon',
      modelo: 'EOS Rebel T7',
      cor: 'Preto',
    },
  ];

  const heading = ['id', 'Produtos', 'Valor', 'Marca', 'Modelo', 'Cor', 'Disponibilidade'];

  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    const handleInputChange = (event) => {
      setFilterText(event.detail.value);
    };

    document.getElementById('input').addEventListener('bdsChange', handleInputChange);

    return () => {
      document.getElementById('input').removeEventListener('bdsChange', handleInputChange);
    };
  }, []);

  const filteredData = DATA.filter((row) =>
    Object.values(row).some(
      (value) => typeof value === 'string' && value.toLowerCase().includes(filterText.toLowerCase())
    )
  );

  return (
    <bds-paper>
      <bds-grid padding="1" direction="column" gap="2">
        <bds-input id="input" placeholder="Filtrar..."></bds-input>
        <bds-table>
          <bds-table-header>
            <bds-table-row>
              {heading.map((item, index) => {
                return <bds-table-th key={index}>{item}</bds-table-th>;
              })}
            </bds-table-row>
          </bds-table-header>
          <bds-table-body>
            {filteredData.map((row, index) => {
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
                  <bds-table-cell>
                    <bds-typo variant="fs-14">{row.marca}</bds-typo>
                  </bds-table-cell>
                  <bds-table-cell>
                    <bds-typo variant="fs-14">{row.modelo}</bds-typo>
                  </bds-table-cell>
                  <bds-table-cell>
                    <bds-typo variant="fs-14">{row.cor}</bds-typo>
                  </bds-table-cell>
                  <bds-table-cell>
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
      </bds-grid>
    </bds-paper>
  );
};

export const TableComplete = () => {
  const DATA = [
    {
      id: 1,
      produto: 'Celular',
      valor: '1500,00',
      disponibilidade: 'disponivel',
      marca: 'Samsung',
      modelo: 'Galaxy S20',
      cor: 'Preto',
    },
    {
      id: 2,
      produto: 'Notebook',
      valor: '4000,00',
      disponibilidade: 'indisponivel',
      marca: 'Apple',
      modelo: 'MacBook Pro',
      cor: 'Cinza Espacial',
    },
    {
      id: 3,
      produto: 'Câmera',
      valor: '800,00',
      disponibilidade: 'disponivel',
      marca: 'Canon',
      modelo: 'EOS Rebel T7',
      cor: 'Preto',
    },
  ];

  const heading = ['id', 'Produtos', 'Valor', 'Marca', 'Modelo', 'Cor', 'Disponibilidade'];

  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    const handleInputChange = (event) => {
      setFilterText(event.detail.value);
    };

    document.getElementById('input').addEventListener('bdsChange', handleInputChange);

    return () => {
      document.getElementById('input').removeEventListener('bdsChange', handleInputChange);
    };
  }, []);

  const filteredData = DATA.filter((row) =>
    Object.values(row).some(
      (value) => typeof value === 'string' && value.toLowerCase().includes(filterText.toLowerCase())
    )
  );

  return (
    <bds-paper>
      <bds-grid padding="1" direction="column" gap="2">
        <bds-input id="input" placeholder="Filtrar..."></bds-input>
        <bds-table>
          <bds-table-header>
            <bds-table-row>
              {heading.map((item, index) => {
                return <bds-table-th key={index}>{item}</bds-table-th>;
              })}
            </bds-table-row>
          </bds-table-header>
          <bds-table-body>
            {filteredData.map((row, index) => {
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
                  <bds-table-cell>
                    <bds-typo variant="fs-14">{row.marca}</bds-typo>
                  </bds-table-cell>
                  <bds-table-cell>
                    <bds-typo variant="fs-14">{row.modelo}</bds-typo>
                  </bds-table-cell>
                  <bds-table-cell>
                    <bds-typo variant="fs-14">{row.cor}</bds-typo>
                  </bds-table-cell>
                  <bds-table-cell>
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
      </bds-grid>
    </bds-paper>
  );
};
