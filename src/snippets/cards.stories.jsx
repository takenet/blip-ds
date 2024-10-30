import React, { useState, useEffect } from 'react';

export default {
  title: 'Snippets/Cards',
};


export const BotsCard = () => {
  return (
    <bds-grid direction="row" flex-wrap="wrap" gap="3">

      <bds-card clickable="true" width="188px" height="196px">
        <bds-grid style={{textAlign: 'center'}} direction="column" xxs="12" height="100%" gap="1" justify-content="center"
          align-items="center">
          <bds-icon type="logo" size="brand" name="blip-chat"></bds-icon>
          <bds-typo bold="bold">Blip Chat</bds-typo>
          <bds-typo>Builder</bds-typo>
        </bds-grid>
      </bds-card>

      <bds-card clickable="true" width="188px" height="196px">
        <bds-grid style={{textAlign: 'center'}} direction="column" xxs="12" height="100%" gap="1" justify-content="center"
          align-items="center">
          <bds-icon type="logo" size="brand" name="blip-chat"></bds-icon>
          <bds-typo bold="bold">Chatbot Maker</bds-typo>
          <bds-typo>Builder</bds-typo>
        </bds-grid>
      </bds-card>

      <bds-card clickable="true" width="188px" height="196px">
        <bds-grid style={{textAlign: 'center'}} direction="column" xxs="12" height="100%" gap="1" justify-content="center"
          align-items="center">
          <bds-icon type="logo" size="brand" name="blip-chat"></bds-icon>
          <bds-typo bold="bold">Blip Assistant</bds-typo>
          <bds-typo>Builder</bds-typo>
        </bds-grid>
      </bds-card>

      <bds-card clickable="true" width="188px" height="196px">
        <bds-grid style={{textAlign: 'center'}} direction="column" xxs="12" height="100%" gap="1" justify-content="center"
          align-items="center">
          <bds-icon type="logo" size="brand" name="blip-chat"></bds-icon>
          <bds-typo bold="bold">AI Chat Creator</bds-typo>
          <bds-typo>Builder</bds-typo>
        </bds-grid>
      </bds-card>

      <bds-card clickable="true" width="188px" height="196px">
        <bds-grid style={{textAlign: 'center'}} direction="column" xxs="12" height="100%" gap="1" justify-content="center"
          align-items="center">
          <bds-icon type="logo" size="brand" name="blip-chat"></bds-icon>
          <bds-typo bold="bold">Smart Bot Designer</bds-typo>
          <bds-typo>Builder</bds-typo>
        </bds-grid>
      </bds-card>

    </bds-grid>
  );
};

export const InteractionCard = (props) => {
  return (
    <bds-card clickable="true" height="fit-content" width="400px">
      <bds-grid direction="row" xxs="12" padding="2" gap="1" justify-content="center" align-items="center">
        <bds-icon theme="outline" size="brand" name="business"></bds-icon>
        <bds-grid direction="column" align-items="flex-start">
          <bds-typo bold="bold">Painel de contrato</bds-typo>
          <bds-typo>Gerencie membros e informações importantes do seu contrato.</bds-typo>
        </bds-grid>
        </bds-grid>
    </bds-card>
  );
};

export const CompleteCard = () => {
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
  
  const heading = ['Produtos', 'Valor', 'Marca', 'Cor', 'Disponibilidade'];

  return (
    <bds-card height="fit-content" width="700px">
      <bds-grid direction="column" xxs="12" gap="3" justify-content="center" align-items="center">
        <bds-card-header align="flex-start">
          <bds-card-title text="Titulo do bloco de card"></bds-card-title>
          <bds-icon theme="solid" size="medium" name="info"></bds-icon>
        </bds-card-header>

        <bds-grid direction="column" align-items="flex-start" gap="2">
          <bds-typo variant="fs-14">Um componente de card é uma estrutura comum para organizar e apresentar conteúdo de
            maneira compacta e visualmente atraente. Geralmente, inclui elementos como título, descrição e ações,
            fornecendo uma visão geral rápida do conteúdo.</bds-typo>

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
                <bds-typo variant="fs-14">{row.produto}</bds-typo>
              </bds-table-cell>
              <bds-table-cell>
                <bds-typo variant="fs-14">{row.valor}</bds-typo>
              </bds-table-cell>
              <bds-table-cell>
                <bds-typo variant="fs-14">{row.marca}</bds-typo>
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
        <bds-card-footer align="flex-end">
          <bds-button size="standard" type="button" type-icon="icon" variant="tertiary">
            Botão Terciário
          </bds-button>
          <bds-button size="standard" type="button" type-icon="icon" variant="primary">
            Botão Primário
          </bds-button>
        </bds-card-footer>
        </bds-grid>
    </bds-card>
  );
};
