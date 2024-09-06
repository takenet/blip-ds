import React, { useState, h, useEffect } from 'react';
import {
  BdsTable,
  BdsTableHeader,
  BdsTableRow,
  BdsTableTh,
  BdsTableBody,
  BdsTableCell,
  BdsTypo,
  BdsPagination,
  BdsChipTag,
  BdsCard,
  BdsCardHeader,
  BdsCardTitle,
  BdsGrid,
  BdsCardSubtitle,
  BdsCardBody,
  BdsList,
  BdsListItem,
} from '../../blip-ds-react/dist/components';

export default {
  title: 'Snippets/Pagination',
};

export const TableWithPagination = () => {
  const data = [
    {
      id: 1,
      produto: 'Celular',
      valor: '1500,00',
      disponibilidade: 'disponível',
      marca: 'Samsung',
      estoque: 10,
      categoria: 'Eletrônicos',
    },
    {
      id: 2,
      produto: 'Notebook',
      valor: '4000,00',
      disponibilidade: 'indisponível',
      marca: 'Dell',
      estoque: 5,
      categoria: 'Computadores',
    },
    {
      id: 3,
      produto: 'Livros',
      valor: '60,00',
      disponibilidade: 'disponível',
      marca: 'Penguin',
      estoque: 20,
      categoria: 'Livros',
    },
    {
      id: 4,
      produto: 'Tablet',
      valor: '1200,00',
      disponibilidade: 'disponível',
      marca: 'Apple',
      estoque: 15,
      categoria: 'Eletrônicos',
    },
    {
      id: 5,
      produto: 'Headphones',
      valor: '350,00',
      disponibilidade: 'indisponível',
      marca: 'Sony',
      estoque: 8,
      categoria: 'Acessórios',
    },
    {
      id: 6,
      produto: 'Monitor',
      valor: '800,00',
      disponibilidade: 'disponível',
      marca: 'LG',
      estoque: 12,
      categoria: 'Computadores',
    },
    {
      id: 7,
      produto: 'Câmera',
      valor: '2500,00',
      disponibilidade: 'disponível',
      marca: 'Canon',
      estoque: 7,
      categoria: 'Eletrônicos',
    },
    {
      id: 8,
      produto: 'Teclado',
      valor: '150,00',
      disponibilidade: 'disponível',
      marca: 'Microsoft',
      estoque: 25,
      categoria: 'Acessórios',
    },
    {
      id: 9,
      produto: 'Mouse',
      valor: '80,00',
      disponibilidade: 'disponível',
      marca: 'Logitech',
      estoque: 30,
      categoria: 'Acessórios',
    },
    {
      id: 10,
      produto: 'Impressora',
      valor: '600,00',
      disponibilidade: 'indisponível',
      marca: 'HP',
      estoque: 4,
      categoria: 'Computadores',
    },
    {
      id: 11,
      produto: 'Micro-ondas',
      valor: '400,00',
      disponibilidade: 'disponível',
      marca: 'Electrolux',
      estoque: 14,
      categoria: 'Eletrodomésticos',
    },
    {
      id: 12,
      produto: 'Geladeira',
      valor: '2000,00',
      disponibilidade: 'disponível',
      marca: 'Brastemp',
      estoque: 6,
      categoria: 'Eletrodomésticos',
    },
    {
      id: 13,
      produto: 'Fogão',
      valor: '900,00',
      disponibilidade: 'disponível',
      marca: 'Consul',
      estoque: 9,
      categoria: 'Eletrodomésticos',
    },
    {
      id: 14,
      produto: 'Aspirador de pó',
      valor: '350,00',
      disponibilidade: 'disponível',
      marca: 'Philips',
      estoque: 11,
      categoria: 'Eletrodomésticos',
    },
    {
      id: 15,
      produto: 'Batedeira',
      valor: '200,00',
      disponibilidade: 'indisponível',
      marca: 'Mondial',
      estoque: 3,
      categoria: 'Eletrodomésticos',
    },
    {
      id: 16,
      produto: 'Fritadeira',
      valor: '300,00',
      disponibilidade: 'disponível',
      marca: 'Arno',
      estoque: 13,
      categoria: 'Eletrodomésticos',
    },
    {
      id: 17,
      produto: 'Cafeteira',
      valor: '120,00',
      disponibilidade: 'disponível',
      marca: 'Nespresso',
      estoque: 18,
      categoria: 'Eletrodomésticos',
    },
    {
      id: 18,
      produto: 'Sandwich Maker',
      valor: '100,00',
      disponibilidade: 'indisponível',
      marca: 'Black+Decker',
      estoque: 6,
      categoria: 'Eletrodomésticos',
    },
    {
      id: 19,
      produto: 'Torradeira',
      valor: '80,00',
      disponibilidade: 'disponível',
      marca: 'Cadence',
      estoque: 20,
      categoria: 'Eletrodomésticos',
    },
    {
      id: 20,
      produto: 'Liquidificador',
      valor: '180,00',
      disponibilidade: 'disponível',
      marca: 'Arno',
      estoque: 15,
      categoria: 'Eletrodomésticos',
    },
    {
      id: 21,
      produto: 'Máquina de costura',
      valor: '700,00',
      disponibilidade: 'disponível',
      marca: 'Singer',
      estoque: 8,
      categoria: 'Eletrodomésticos',
    },
    {
      id: 22,
      produto: 'Escova de cabelo',
      valor: '60,00',
      disponibilidade: 'disponível',
      marca: 'Philips',
      estoque: 22,
      categoria: 'Beleza',
    },
    {
      id: 23,
      produto: 'Secador de cabelo',
      valor: '150,00',
      disponibilidade: 'disponível',
      marca: 'Taiff',
      estoque: 12,
      categoria: 'Beleza',
    },
    {
      id: 24,
      produto: 'Chapinha',
      valor: '100,00',
      disponibilidade: 'disponível',
      marca: 'Gama',
      estoque: 16,
      categoria: 'Beleza',
    },
    {
      id: 25,
      produto: 'Kit de maquiagem',
      valor: '250,00',
      disponibilidade: 'disponível',
      marca: 'Maybelline',
      estoque: 10,
      categoria: 'Beleza',
    },
    {
      id: 26,
      produto: 'Perfume',
      valor: '180,00',
      disponibilidade: 'indisponível',
      marca: 'Dior',
      estoque: 5,
      categoria: 'Beleza',
    },
    {
      id: 27,
      produto: 'Creme para o rosto',
      valor: '80,00',
      disponibilidade: 'disponível',
      marca: "L'Oréal",
      estoque: 25,
      categoria: 'Beleza',
    },
    {
      id: 28,
      produto: 'Desodorante',
      valor: '30,00',
      disponibilidade: 'disponível',
      marca: 'Nivea',
      estoque: 40,
      categoria: 'Beleza',
    },
    {
      id: 29,
      produto: 'Shampoo',
      valor: '50,00',
      disponibilidade: 'disponível',
      marca: 'Pantene',
      estoque: 30,
      categoria: 'Beleza',
    },
    {
      id: 30,
      produto: 'Condicionador',
      valor: '50,00',
      disponibilidade: 'disponível',
      marca: 'Elseve',
      estoque: 28,
      categoria: 'Beleza',
    },
    {
      id: 31,
      produto: 'Sabonete',
      valor: '20,00',
      disponibilidade: 'disponível',
      marca: 'Dove',
      estoque: 50,
      categoria: 'Beleza',
    },
    {
      id: 32,
      produto: 'Creme para as mãos',
      valor: '35,00',
      disponibilidade: 'disponível',
      marca: 'Avon',
      estoque: 20,
      categoria: 'Beleza',
    },
    {
      id: 33,
      produto: 'Base',
      valor: '120,00',
      disponibilidade: 'disponível',
      marca: 'MAC',
      estoque: 18,
      categoria: 'Beleza',
    },
    {
      id: 34,
      produto: 'Corretivo',
      valor: '90,00',
      disponibilidade: 'disponível',
      marca: 'Clinique',
      estoque: 22,
      categoria: 'Beleza',
    },
  ];

  const heading = ['Id', 'Produtos', 'Valor', 'Marca', 'Estoque', 'Categoria', 'Disponibilidade'];

  const numberPerPage = [5, 10, 20];

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(numberPerPage[0]);

  const [paginatedData, setPaginatedData] = useState(data);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setPaginatedData(data.slice(startIndex, endIndex));
  }, [currentPage, itemsPerPage]);

  const handlePaginationChange = (event) => {
    setCurrentPage(event.detail);
  };

  const handleItemsPerPageChange = (newItemsPerPage) => {
    setItemsPerPage(newItemsPerPage.detail);
    setCurrentPage(1);
  };

  return (
    <BdsGrid xxs="12" gap="2" direction="column">
      <BdsTable scrollable={true}>
        <BdsTableHeader>
          <BdsTableRow>
            {heading.map((item, index) => (
              <BdsTableTh key={index}>{item}</BdsTableTh>
            ))}
          </BdsTableRow>
        </BdsTableHeader>
        <BdsTableBody>
          {paginatedData.map((row, index) => (
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
              <BdsTableCell>
                <BdsTypo variant="fs-14">{row.marca}</BdsTypo>
              </BdsTableCell>
              <BdsTableCell>
                <BdsTypo variant="fs-14">{row.estoque}</BdsTypo>
              </BdsTableCell>
              <BdsTableCell>
                <BdsTypo variant="fs-14">{row.categoria}</BdsTypo>
              </BdsTableCell>
              <BdsTableCell>
                {row.disponibilidade === 'disponível' ? (
                  <BdsChipTag key={row.index} color="success">
                    {row.disponibilidade}
                  </BdsChipTag>
                ) : (
                  <BdsChipTag key={row.index} color="danger">
                    {row.disponibilidade}
                  </BdsChipTag>
                )}
              </BdsTableCell>
            </BdsTableRow>
          ))}
        </BdsTableBody>
      </BdsTable>
      <BdsPagination
        numberItems={data.length}
        itemsPage={numberPerPage}
        startedPage={1}
        pageCounter={true}
        onBdsPaginationChange={handlePaginationChange}
        onBdsItemsPerPageChange={handleItemsPerPageChange}
      />
    </BdsGrid>
  );
};

export const CardsWithPagination = () => {
  const data = [
    { title: 'Celular', subtitle: 'Samsung', text: 'R$1500,00', disponibilidade: 'disponível' },
    { title: 'Notebook', subtitle: 'Dell', text: 'R$4000,00', disponibilidade: 'indisponível' },
    { title: 'Livros', subtitle: 'Penguin', text: 'R$60,00', disponibilidade: 'disponível' },
    { title: 'Tablet', subtitle: 'Apple', text: 'R$1200,00', disponibilidade: 'disponível' },
    { title: 'Headphones', subtitle: 'Sony', text: 'R$350,00', disponibilidade: 'indisponível' },
    { title: 'Monitor', subtitle: 'LG', text: 'R$800,00', disponibilidade: 'disponível' },
    { title: 'Câmera', subtitle: 'Canon', text: 'R$2500,00', disponibilidade: 'disponível' },
    { title: 'Teclado', subtitle: 'Microsoft', text: 'R$150,00', disponibilidade: 'disponível' },
    { title: 'Mouse', subtitle: 'Logitech', text: 'R$80,00', disponibilidade: 'disponível' },
    { title: 'Impressora', subtitle: 'HP', text: 'R$600,00', disponibilidade: 'indisponível' },
    { title: 'Micro-ondas', subtitle: 'Electrolux', text: 'R$400,00', disponibilidade: 'disponível' },
    { title: 'Geladeira', subtitle: 'Brastemp', text: 'R$2000,00', disponibilidade: 'disponível' },
    { title: 'Fogão', subtitle: 'Consul', text: 'R$900,00', disponibilidade: 'disponível' },
    { title: 'Aspirador de pó', subtitle: 'Philips', text: 'R$350,00', disponibilidade: 'disponível' },
    { title: 'Batedeira', subtitle: 'Mondial', text: 'R$200,00', disponibilidade: 'indisponível' },
    { title: 'Fritadeira', subtitle: 'Arno', text: 'R$300,00', disponibilidade: 'disponível' },
    { title: 'Cafeteira', subtitle: 'Nespresso', text: 'R$120,00', disponibilidade: 'disponível' },
    { title: 'Sandwich Maker', subtitle: 'Black+Decker', text: 'R$100,00', disponibilidade: 'indisponível' },
    { title: 'Torradeira', subtitle: 'Cadence', text: 'R$80,00', disponibilidade: 'disponível' },
    { title: 'Liquidificador', subtitle: 'Arno', text: 'R$180,00', disponibilidade: 'disponível' },
    { title: 'Máquina de costura', subtitle: 'Singer', text: 'R$700,00', disponibilidade: 'disponível' },
    { title: 'Escova de cabelo', subtitle: 'Philips', text: 'R$60,00', disponibilidade: 'disponível' },
    { title: 'Secador de cabelo', subtitle: 'Taiff', text: 'R$150,00', disponibilidade: 'disponível' },
    { title: 'Chapinha', subtitle: 'Gama', text: 'R$100,00', disponibilidade: 'disponível' },
    { title: 'Kit de maquiagem', subtitle: 'Maybelline', text: 'R$250,00', disponibilidade: 'disponível' },
    { title: 'Perfume', subtitle: 'Dior', text: 'R$180,00', disponibilidade: 'indisponível' },
    { title: 'Creme para o rosto', subtitle: "L'Oréal", text: 'R$80,00', disponibilidade: 'disponível' },
    { title: 'Desodorante', subtitle: 'Nivea', text: 'R$30,00', disponibilidade: 'disponível' },
    { title: 'Shampoo', subtitle: 'Pantene', text: 'R$50,00', disponibilidade: 'disponível' },
    { title: 'Condicionador', subtitle: 'Elseve', text: 'R$50,00', disponibilidade: 'disponível' },
    { title: 'Sabonete', subtitle: 'Dove', text: 'R$20,00', disponibilidade: 'disponível' },
    { title: 'Creme para as mãos', subtitle: 'Avon', text: 'R$35,00', disponibilidade: 'disponível' },
    { title: 'Base', subtitle: 'MAC', text: 'R$120,00', disponibilidade: 'disponível' },
    { title: 'Corretivo', subtitle: 'Clinique', text: 'R$90,00', disponibilidade: 'disponível' },
  ];

  const numberPerPage = [5, 10, 20];

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(numberPerPage[0]);

  const [paginatedData, setPaginatedData] = useState(data);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setPaginatedData(data.slice(startIndex, endIndex));
  }, [currentPage, itemsPerPage]);

  const handlePaginationChange = (event) => {
    setCurrentPage(event.detail);
  };

  const handleItemsPerPageChange = (newItemsPerPage) => {
    setItemsPerPage(newItemsPerPage.detail);
    setCurrentPage(1);
  };

  return (
    <BdsGrid gap={2} direction="column" xxs="12">
      <BdsGrid direction="row" gap="3" justifyContent="flex-start" flexWrap="wrap">
        {paginatedData.map((obj, index) => (
          <BdsGrid xxs="2" key={index}>
            <BdsCard width="100%">
              <BdsCardHeader>
                <BdsGrid direction="column">
                  <BdsCardTitle text={obj.title} />
                  <BdsCardSubtitle text={obj.subtitle} />
                </BdsGrid>
              </BdsCardHeader>
              <BdsCardBody>
                <BdsTypo>{obj.text}</BdsTypo>
              </BdsCardBody>
            </BdsCard>
          </BdsGrid>
        ))}
      </BdsGrid>
      <BdsPagination
        numberItems={data.length}
        itemsPage={numberPerPage}
        startedPage={1}
        pageCounter={true}
        onBdsPaginationChange={handlePaginationChange}
        onBdsItemsPerPageChange={handleItemsPerPageChange}
      />
    </BdsGrid>
  );
};

export const ListWithPagination = () => {
  const data = [
    { title: 'Celular', subtitle: 'Samsung', text: 'R$1500,00', disponibilidade: 'disponível' },
    { title: 'Notebook', subtitle: 'Dell', text: 'R$4000,00', disponibilidade: 'indisponível' },
    { title: 'Livros', subtitle: 'Penguin', text: 'R$60,00', disponibilidade: 'disponível' },
    { title: 'Tablet', subtitle: 'Apple', text: 'R$1200,00', disponibilidade: 'disponível' },
    { title: 'Headphones', subtitle: 'Sony', text: 'R$350,00', disponibilidade: 'indisponível' },
    { title: 'Monitor', subtitle: 'LG', text: 'R$800,00', disponibilidade: 'disponível' },
    { title: 'Câmera', subtitle: 'Canon', text: 'R$2500,00', disponibilidade: 'disponível' },
    { title: 'Teclado', subtitle: 'Microsoft', text: 'R$150,00', disponibilidade: 'disponível' },
    { title: 'Mouse', subtitle: 'Logitech', text: 'R$80,00', disponibilidade: 'disponível' },
    { title: 'Impressora', subtitle: 'HP', text: 'R$600,00', disponibilidade: 'indisponível' },
    { title: 'Micro-ondas', subtitle: 'Electrolux', text: 'R$400,00', disponibilidade: 'disponível' },
    { title: 'Geladeira', subtitle: 'Brastemp', text: 'R$2000,00', disponibilidade: 'disponível' },
    { title: 'Fogão', subtitle: 'Consul', text: 'R$900,00', disponibilidade: 'disponível' },
    { title: 'Aspirador de pó', subtitle: 'Philips', text: 'R$350,00', disponibilidade: 'disponível' },
    { title: 'Batedeira', subtitle: 'Mondial', text: 'R$200,00', disponibilidade: 'indisponível' },
    { title: 'Fritadeira', subtitle: 'Arno', text: 'R$300,00', disponibilidade: 'disponível' },
    { title: 'Cafeteira', subtitle: 'Nespresso', text: 'R$120,00', disponibilidade: 'disponível' },
    { title: 'Sandwich Maker', subtitle: 'Black+Decker', text: 'R$100,00', disponibilidade: 'indisponível' },
    { title: 'Torradeira', subtitle: 'Cadence', text: 'R$80,00', disponibilidade: 'disponível' },
    { title: 'Liquidificador', subtitle: 'Arno', text: 'R$180,00', disponibilidade: 'disponível' },
    { title: 'Máquina de costura', subtitle: 'Singer', text: 'R$700,00', disponibilidade: 'disponível' },
    { title: 'Escova de cabelo', subtitle: 'Philips', text: 'R$60,00', disponibilidade: 'disponível' },
    { title: 'Secador de cabelo', subtitle: 'Taiff', text: 'R$150,00', disponibilidade: 'disponível' },
    { title: 'Chapinha', subtitle: 'Gama', text: 'R$100,00', disponibilidade: 'disponível' },
    { title: 'Kit de maquiagem', subtitle: 'Maybelline', text: 'R$250,00', disponibilidade: 'disponível' },
    { title: 'Perfume', subtitle: 'Dior', text: 'R$180,00', disponibilidade: 'indisponível' },
    { title: 'Creme para o rosto', subtitle: "L'Oréal", text: 'R$80,00', disponibilidade: 'disponível' },
    { title: 'Desodorante', subtitle: 'Nivea', text: 'R$30,00', disponibilidade: 'disponível' },
    { title: 'Shampoo', subtitle: 'Pantene', text: 'R$50,00', disponibilidade: 'disponível' },
    { title: 'Condicionador', subtitle: 'Elseve', text: 'R$50,00', disponibilidade: 'disponível' },
    { title: 'Sabonete', subtitle: 'Dove', text: 'R$20,00', disponibilidade: 'disponível' },
    { title: 'Creme para as mãos', subtitle: 'Avon', text: 'R$35,00', disponibilidade: 'disponível' },
    { title: 'Base', subtitle: 'MAC', text: 'R$120,00', disponibilidade: 'disponível' },
    { title: 'Corretivo', subtitle: 'Clinique', text: 'R$90,00', disponibilidade: 'disponível' },
  ];

  const numberPerPage = [5, 10, 20];

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(numberPerPage[0]);

  const [paginatedData, setPaginatedData] = useState(data);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setPaginatedData(data.slice(startIndex, endIndex));
  }, [currentPage, itemsPerPage]);

  const handlePaginationChange = (event) => {
    setCurrentPage(event.detail);
  };

  const handleItemsPerPageChange = (newItemsPerPage) => {
    setItemsPerPage(newItemsPerPage.detail);
    setCurrentPage(1);
  };

  return (
    <BdsGrid gap={2} direction="column" xxs="12">
      <BdsGrid direction="row" gap="3" justifyContent="flex-start" flexWrap="wrap">
        <BdsList typeList="default">
          {paginatedData.map((obj, index) => (
            <BdsListItem value={index}>
              <BdsTypo variant="fs-16">{obj.text}</BdsTypo>
              <BdsTypo variant="fs-14">{obj.subtitle}</BdsTypo>
              {obj.disponibilidade === 'disponível' ? (
                <BdsChipTag key={index} color="success">
                  {obj.disponibilidade}
                </BdsChipTag>
              ) : (
                <BdsChipTag key={index} color="danger">
                  {obj.disponibilidade}
                </BdsChipTag>
              )}
            </BdsListItem>
          ))}
        </BdsList>
      </BdsGrid>
      <BdsPagination
        numberItems={data.length}
        itemsPage={numberPerPage}
        startedPage={1}
        pageCounter={true}
        onBdsPaginationChange={handlePaginationChange}
        onBdsItemsPerPageChange={handleItemsPerPageChange}
      />
    </BdsGrid>
  );
};
