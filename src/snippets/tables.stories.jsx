import React, { useState, useEffect } from 'react';
import {
  BdsChipTag,
  BdsTable,
  BdsTableBody,
  BdsTableCell,
  BdsTableHeader,
  BdsTableRow,
  BdsTypo,
  BdsTableTh,
  BdsCheckbox,
  BdsGrid,
} from '../../blip-ds-react/dist/components';

export default {
  title: 'Snippets/Tables',
};

export const TableDefault = () => {
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
                <bds-button-icon variant="secondary" size="short" icon="edit"></bds-button-icon>
                <bds-button-icon variant="secondary" size="short" icon="trash"></bds-button-icon>
              </bds-table-cell>
            </bds-table-row>
          );
        })}
      </bds-table-body>
    </bds-table>
  );
};

export const TableSorting = (props) => {
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
      (value) => typeof value === 'string' && value.toLowerCase().includes(filterText.toLowerCase()),
    ),
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

export const TablePagination = () => {
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
    {
      id: 4,
      produto: 'Câmera',
      valor: '800,00',
      disponibilidade: 'disponivel',
      marca: 'Canon',
      modelo: 'EOS Rebel T7',
      cor: 'Preto',
    },
    {
      id: 5,
      produto: 'Notebook',
      valor: '4000,00',
      disponibilidade: 'indisponivel',
      marca: 'Apple',
      modelo: 'MacBook Pro',
      cor: 'Cinza Espacial',
    },
    {
      id: 6,
      produto: 'Câmera',
      valor: '800,00',
      disponibilidade: 'disponivel',
      marca: 'Canon',
      modelo: 'EOS Rebel T7',
      cor: 'Preto',
    },
    {
      id: 7,
      produto: 'Câmera',
      valor: '800,00',
      disponibilidade: 'disponivel',
      marca: 'Canon',
      modelo: 'EOS Rebel T7',
      cor: 'Preto',
    },
    {
      id: 8,
      produto: 'Smartwatch',
      valor: '600,00',
      disponibilidade: 'disponivel',
      marca: 'Xiaomi',
      modelo: 'Mi Band 6',
      cor: 'Preto',
    },
    {
      id: 9,
      produto: 'Smart TV',
      valor: '2500,00',
      disponibilidade: 'disponivel',
      marca: 'LG',
      modelo: 'OLED C1',
      cor: 'Preto',
    },
    {
      id: 10,
      produto: 'Fones de Ouvido',
      valor: '200,00',
      disponibilidade: 'disponivel',
      marca: 'Sony',
      modelo: 'WH-1000XM4',
      cor: 'Preto',
    },
  ];

  const heading = ['id', 'Produtos', 'Valor', 'Marca', 'Modelo', 'Cor', 'Disponibilidade'];

  const itemsPerPage = 4;

  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState(DATA);

  useEffect(() => {
    setFilteredData(DATA);
  }, []);

  useEffect(() => {
    document.getElementById('pagination').addEventListener('bdsPaginationChange', handlePageChange);
  });

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, filteredData.length);
  const currentItems = filteredData.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage.detail);
  };

  return (
    <bds-paper>
      <bds-grid padding="1" direction="column" gap="2">
        <bds-table>
          <bds-table-header>
            <bds-table-row>
              {heading.map((item, index) => {
                return <bds-table-th key={index}>{item}</bds-table-th>;
              })}
            </bds-table-row>
          </bds-table-header>
          <bds-table-body>
            {currentItems.map((row, index) => {
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
        <bds-grid xxs="12" justify-content="flex-end">
          <bds-pagination id="pagination" pages={Math.ceil(filteredData.length / itemsPerPage)}></bds-pagination>
        </bds-grid>
      </bds-grid>
    </bds-paper>
  );
};

export const TableDense = () => {
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
    {
      id: 4,
      produto: 'Câmera',
      valor: '800,00',
      disponibilidade: 'disponivel',
      marca: 'Canon',
      modelo: 'EOS Rebel T7',
      cor: 'Preto',
    },
    {
      id: 5,
      produto: 'Notebook',
      valor: '4000,00',
      disponibilidade: 'indisponivel',
      marca: 'Apple',
      modelo: 'MacBook Pro',
      cor: 'Cinza Espacial',
    },
    {
      id: 6,
      produto: 'Câmera',
      valor: '800,00',
      disponibilidade: 'disponivel',
      marca: 'Canon',
      modelo: 'EOS Rebel T7',
      cor: 'Preto',
    },
    {
      id: 7,
      produto: 'Câmera',
      valor: '800,00',
      disponibilidade: 'disponivel',
      marca: 'Canon',
      modelo: 'EOS Rebel T7',
      cor: 'Preto',
    },
  ];

  const heading = ['id', 'Produtos', 'Valor', 'Marca', 'Modelo', 'Cor', 'Disponibilidade'];

  return (
    <bds-paper>
      <bds-grid padding="1" direction="column" gap="2">
        <bds-table dense-table="true">
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
      </bds-grid>
    </bds-paper>
  );
};

export const TableScrollable = () => {
  const DATA = [
    {
      id: 1,
      produto: 'Celular',
      valor: '1500,00',
      disponibilidade: 'disponivel',
      marca: 'Samsung',
      modelo: 'Galaxy S20',
      cor: 'Preto',
      anoLancamento: 2020,
      peso: '150g',
      memoriaRAM: '8GB',
    },
    {
      id: 2,
      produto: 'Notebook',
      valor: '4000,00',
      disponibilidade: 'indisponivel',
      marca: 'Apple',
      modelo: 'MacBook Pro',
      cor: 'Cinza Espacial',
      anoLancamento: 2021,
      peso: '1.4kg',
      memoriaRAM: '16GB',
    },
    {
      id: 3,
      produto: 'Câmera',
      valor: '800,00',
      disponibilidade: 'disponivel',
      marca: 'Canon',
      modelo: 'EOS Rebel T7',
      cor: 'Preto',
      anoLancamento: 2019,
      peso: '500g',
      memoriaRAM: '-',
    },
    {
      id: 4,
      produto: 'Câmera',
      valor: '800,00',
      disponibilidade: 'disponivel',
      marca: 'Canon',
      modelo: 'EOS Rebel T7',
      cor: 'Preto',
      anoLancamento: 2020,
      peso: '500g',
      memoriaRAM: '-',
    },
  ];

  const heading = [
    'id',
    'Produtos',
    'Valor',
    'Marca',
    'Modelo',
    'Cor',
    'Disponibilidade',
    'Ano de Lançamento',
    'Peso',
    'Memoria RAM',
  ];

  return (
    <bds-paper width="600px">
      <bds-grid xxs="12" padding="1" direction="column" gap="2">
        <bds-table scrollable="true">
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
                    <bds-typo variant="fs-14">{row.anoLancamento}</bds-typo>
                  </bds-table-cell>
                  <bds-table-cell>
                    <bds-typo variant="fs-14">{row.peso}</bds-typo>
                  </bds-table-cell>
                  <bds-table-cell>
                    <bds-typo variant="fs-14">{row.memoriaRAM}</bds-typo>
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

export const TableCollapse = () => {
  const DATA = [
    { id: 1, produto: 'Celular', valor: '1500,00', disponibilidade: 'disponivel', descricao: 'Descrição do celular, incluindo modelo, marca e especificações técnicas. Este celular possui uma variedade de recursos avançados, como uma câmera de alta resolução, processador rápido e tela de alta qualidade. Ele está disponível em várias cores e tamanhos, e oferece opções flexíveis de pagamento. Com garantia e política de devolução, este celular é uma escolha popular entre os consumidores que buscam qualidade e desempenho.' },
    { id: 2, produto: 'Notebook', valor: '4000,00', disponibilidade: 'indisponivel', descricao: 'Descrição do notebook, incluindo marca, modelo e configurações detalhadas. Este notebook oferece um desempenho excepcional, com um processador potente, grande capacidade de armazenamento e uma tela de alta resolução. Embora a garantia estendida esteja disponível, este produto é atualmente indisponível devido à alta demanda. Fique atento às próximas promoções e descontos especiais para este notebook.' },
    { id: 3, produto: 'Livros', valor: '60,00', disponibilidade: 'disponivel', descricao: 'Descrição dos livros disponíveis, incluindo autor, título e gênero literário. Com uma variedade de títulos emocionantes e informativos, estes livros oferecem uma experiência de leitura envolvente para todos os gostos. Desde romances cativantes até obras acadêmicas, há algo para todos. Além disso, aproveite as promoções especiais, como descontos em compras de múltiplos livros, para expandir sua biblioteca pessoal.' },
  ];

  const heading = ['id', 'Produtos', 'Valor', 'Disponibilidade'];

  return (
    <bds-grid xxs="12" direction="row" padding="3" flex-wrap="wrap" gap="2">


      <bds-grid xxs="12">
        <bds-table collapse={true}>
          <bds-table-header>
            <bds-table-row>
              {heading.map((item, index) => {
                return <bds-table-th key={index}>{item}</bds-table-th>;
              })}
            </bds-table-row>
          </bds-table-header>

          {DATA.map((row, index) => {
            return (
              <bds-table-body key={index}>
                <bds-table-row data-target={index}>
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

                <bds-table-row body-collapse={index}>
                  <bds-typo>{row.descricao}</bds-typo>
                </bds-table-row>
              </bds-table-body>
            );
          })}
        </bds-table>
      </bds-grid>

    </bds-grid>
  );
}

export const TableSelected = () => {
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

  const [selectedItems, setSelectedItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleCheckboxChange = (id) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(id)) {
        return prevSelectedItems.filter((item) => item !== id);
      } else {
        return [...prevSelectedItems, id];
      }
    });
  };

  const handleSelectAllChange = (event) => {
    const isChecked = event.detail.checked;
    setSelectAll(isChecked);

    if (isChecked) {
      setSelectedItems(DATA.map((row) => row.id));
    } else {
      setSelectedItems([]);
    }
  };

  return (
    <BdsGrid direction='column' gap='2'>
      <BdsGrid justifyContent='space-between'>
        <BdsTypo>{selectedItems.length === 0 ? "Nenhum" : selectedItems.length === DATA.length ? "Todos" : selectedItems.length} Selecionados</BdsTypo>
      <bds-button-group color="content">
        <bds-button>Selecionar Todos</bds-button>
        <bds-button icon-left="share">Compartilhar</bds-button>
        <bds-button icon-left="edit">Editar</bds-button>
        <bds-button icon-left="trash">Deletar</bds-button>
      </bds-button-group>
      </BdsGrid>
      <BdsTable>
        <BdsTableHeader>
          <BdsTableRow>
            <BdsTableTh>
              <BdsCheckbox
                checked={selectAll}
                onBdsChange={handleSelectAllChange}
              />
            </BdsTableTh>
            {heading.map((item, index) => (
              <BdsTableTh key={index}>{item}</BdsTableTh>
            ))}
          </BdsTableRow>
        </BdsTableHeader>

        <BdsTableBody>
          {DATA.map((row, index) => (
            <BdsTableRow key={index}>
              <BdsTableCell>
                <BdsCheckbox
                  checked={selectedItems.includes(row.id)}
                  onBdsChange={() => handleCheckboxChange(row.id)}
                />
              </BdsTableCell>
              <BdsTableCell>
                <BdsTypo variant="fs-14">{row.id}</BdsTypo>
              </BdsTableCell>
              <BdsTableCell>
                <BdsTypo variant="fs-14">{row.produto}</BdsTypo>
              </BdsTableCell>
              <BdsTableCell>
                <BdsTypo variant="fs-14">{row.valor}</BdsTypo>
              </BdsTableCell>
              <BdsTableCell>
                <BdsTypo variant="fs-14">{row.marca}</BdsTypo>
              </BdsTableCell>
              <BdsTableCell>
                <BdsTypo variant="fs-14">{row.modelo}</BdsTypo>
              </BdsTableCell>
              <BdsTableCell>
                <BdsTypo variant="fs-14">{row.cor}</BdsTypo>
              </BdsTableCell>
              <BdsTableCell>
                {row.disponibilidade === 'disponivel' ? (
                  <BdsChipTag color="success">{row.disponibilidade}</BdsChipTag>
                ) : (
                  <BdsChipTag color="danger">{row.disponibilidade}</BdsChipTag>
                )}
              </BdsTableCell>
            </BdsTableRow>
          ))}
        </BdsTableBody>
      </BdsTable>
    </BdsGrid>
  );
};