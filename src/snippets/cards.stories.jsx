import React, { useState, useEffect } from 'react';
import {
  BdsCard,
  BdsGrid,
  BdsTypo,
  BdsDivider,
  BdsCheckbox,
  BdsRadio,
  BdsRadioGroup,
  BdsCardHeader,
  BdsIcon,
} from '../../blip-ds-react/dist/components';

export default {
  title: 'Snippets/Cards',
};

export const BotsCardClickable = () => {
  return (
    <bds-grid direction="column">
      <bds-card bg-color="surface-1" padding="4">
        <bds-grid>
          <bds-typo tag="h3" variant="fs-24" margin="false" bold="bold">
            Lista de Chatbots
          </bds-typo>
        </bds-grid>
        <bds-divider></bds-divider>
        <bds-grid direction="row" flex-wrap="wrap" gap="3">
          <bds-card clickable="true" width="188px" height="196px" bg-color="surface-0">
            <bds-grid
              style={{ textAlign: 'center' }}
              direction="column"
              xxs="12"
              height="100%"
              gap="1"
              justify-content="center"
              align-items="center"
            >
              <bds-icon type="logo" size="brand" name="blip-chat"></bds-icon>
              <bds-typo bold="bold">Blip Chat</bds-typo>
              <bds-typo>Builder</bds-typo>
            </bds-grid>
          </bds-card>

          <bds-card clickable="true" width="188px" height="196px" bg-color="surface-0">
            <bds-grid
              style={{ textAlign: 'center' }}
              direction="column"
              xxs="12"
              height="100%"
              gap="1"
              justify-content="center"
              align-items="center"
            >
              <bds-icon type="logo" size="brand" name="blip-chat"></bds-icon>
              <bds-typo bold="bold">Chatbot Maker</bds-typo>
              <bds-typo>Builder</bds-typo>
            </bds-grid>
          </bds-card>

          <bds-card clickable="true" width="188px" height="196px" bg-color="surface-0">
            <bds-grid
              style={{ textAlign: 'center' }}
              direction="column"
              xxs="12"
              height="100%"
              gap="1"
              justify-content="center"
              align-items="center"
            >
              <bds-icon type="logo" size="brand" name="blip-chat"></bds-icon>
              <bds-typo bold="bold">Blip Assistant</bds-typo>
              <bds-typo>Builder</bds-typo>
            </bds-grid>
          </bds-card>
        </bds-grid>
      </bds-card>
    </bds-grid>
  );
};

export const FeedbackCard = () => {
  return (
    <bds-grid direction="column">
      <bds-card bg-color="surface-1" padding="4">
        <bds-grid>
          <bds-typo tag="h3" variant="fs-24" margin="false" bold="bold">
            Satisfação do cliente
          </bds-typo>
        </bds-grid>
        <bds-divider></bds-divider>
        <bds-card bg-color="surface-0">
          <bds-grid direction="row" flex-wrap="wrap" gap="3">
            <bds-card width="188px" height="196px" border-color="error" bg-color="surface-0">
              <bds-grid
                style={{ textAlign: 'center' }}
                direction="column"
                xxs="12"
                height="100%"
                gap="1"
                justify-content="center"
                align-items="center"
              >
                <bds-icon type="icon" size="brand" name="emoji-negative"></bds-icon>
                <bds-typo bold="bold">Insuficiente</bds-typo>
                <bds-typo variant="fs-12">Parece que a sua experiência não foi como esperávamos.</bds-typo>
              </bds-grid>
            </bds-card>

            <bds-card width="188px" height="196px" border-color="warning" bg-color="surface-0">
              <bds-grid
                style={{ textAlign: 'center' }}
                direction="column"
                xxs="12"
                height="100%"
                gap="1"
                justify-content="center"
                align-items="center"
              >
                <bds-icon type="icon" size="brand" name="emoji-neutral"></bds-icon>
                <bds-typo bold="bold">Neutra</bds-typo>
                <bds-typo variant="fs-12">
                  Agradecemos sua avaliação. Embora não tenha sido uma experiência excelente.
                </bds-typo>
              </bds-grid>
            </bds-card>

            <bds-card width="188px" height="196px" border-color="success" bg-color="surface-0">
              <bds-grid
                style={{ textAlign: 'center' }}
                direction="column"
                xxs="12"
                height="100%"
                gap="1"
                justify-content="center"
                align-items="center"
              >
                <bds-icon type="icon" size="brand" name="emoji"></bds-icon>
                <bds-typo bold="bold">Alta</bds-typo>
                <bds-typo variant="fs-12">Ficamos felizes em saber que você teve uma ótima experiência! </bds-typo>
              </bds-grid>
            </bds-card>
          </bds-grid>
        </bds-card>
      </bds-card>
    </bds-grid>
  );
};

export const SelectableMultipleCards = () => {
  const [checked, setChecked] = useState([false, false, false]);
  const [borderColors, setBorderColors] = useState(['surface-1', 'surface-1', 'surface-1']);

  const handleSelection = (index) => {
    const newChecked = [...checked];
    const newBorderColors = [...borderColors];

    newChecked[index] = !newChecked[index];
    newBorderColors[index] = newChecked[index] ? 'primary' : 'surface-1';

    setChecked(newChecked);
    setBorderColors(newBorderColors);
  };

  useEffect(() => {
    const newBorderColors = checked.map((isChecked) => (isChecked ? 'primary' : 'surface-1'));
    setBorderColors(newBorderColors);
  }, [checked]);

  return (
    <BdsCard bgColor="surface-1" padding="4">
      <BdsGrid>
        <BdsTypo tag="h3" variant="fs-24" margin="false" bold="bold">
          Selecione os tipos de notificações que deseja receber:
        </BdsTypo>
      </BdsGrid>
      <BdsDivider />
      <BdsGrid direction="row" flexWrap="wrap" gap="3">
        {/* Card 1 */}
        <BdsCard
          width="188px"
          height="196px"
          borderColor={borderColors[0]}
          bg-color="surface-0"
          selectable
          onClick={() => handleSelection(0)}
        >
          <BdsCardHeader>
            <BdsCheckbox
              id="checkbox1"
              name="checkbox1"
              checked={checked[0]}
              dataTest="checkbox1"
              onChange={() => handleSelection(0)}
            />
          </BdsCardHeader>
          <BdsGrid
            style={{ textAlign: 'center' }}
            direction="column"
            xxs="12"
            height="100%"
            gap="1"
            alignItems="center"
          >
            <BdsIcon name="email" size="medium" theme="outline" />
            <BdsTypo bold="bold">E-mails</BdsTypo>
            <BdsTypo variant="fs-12">Receba emails notificando novidades.</BdsTypo>
          </BdsGrid>
        </BdsCard>

        {/* Card 2 */}
        <BdsCard
          width="188px"
          height="196px"
          borderColor={borderColors[1]}
          bg-color="surface-0"
          selectable
          onClick={() => handleSelection(1)}
        >
          <BdsCardHeader>
            <BdsCheckbox
              id="checkbox2"
              name="checkbox2"
              checked={checked[1]}
              dataTest="checkbox2"
              onChange={() => handleSelection(1)}
            />
          </BdsCardHeader>
          <BdsGrid
            style={{ textAlign: 'center' }}
            direction="column"
            xxs="12"
            height="100%"
            gap="1"
            alignItems="center"
          >
            <BdsIcon name="sms" size="medium" theme="outline" />
            <BdsTypo bold="bold">SMS</BdsTypo>
            <BdsTypo variant="fs-12">Receba via sms novidades da sua conta.</BdsTypo>
          </BdsGrid>
        </BdsCard>

        {/* Card 3 */}
        <BdsCard
          width="188px"
          height="196px"
          borderColor={borderColors[2]}
          bg-color="surface-0"
          selectable
          onClick={() => handleSelection(2)}
        >
          <BdsCardHeader>
            <BdsCheckbox
              id="checkbox3"
              name="checkbox3"
              checked={checked[2]}
              dataTest="checkbox3"
              onChange={() => handleSelection(2)}
            />
          </BdsCardHeader>
          <BdsGrid
            style={{ textAlign: 'center' }}
            direction="column"
            xxs="12"
            height="100%"
            gap="1"
            alignItems="center"
          >
            <BdsIcon name="whatsapp" size="medium" theme="outline" />
            <BdsTypo bold="bold">Whatsapp</BdsTypo>
            <BdsTypo variant="fs-12">Tenha uma experiência completa no chat.</BdsTypo>
          </BdsGrid>
        </BdsCard>
      </BdsGrid>
    </BdsCard>
  );
};

export const SelectableUniqueCards = () => {
  // Estado para armazenar a seleção do card (com base no valor do radio)
  const [selectedCard, setSelectedCard] = useState(undefined);

  // Função para tratar a mudança no radio e atualizar a seleção do card
  const handleCardSelection = (value) => {
    setSelectedCard(value);
  };

  // Função para tratar o clique no card e atualizar a seleção do radio
  const handleCardClick = (value) => {
    setSelectedCard((prev) => (prev === value ? undefined : value)); // Alterna entre selecionar ou desmarcar o card
  };

  return (
    <BdsCard bgColor="surface-1" padding="4">
      <BdsGrid>
        <BdsTypo tag="h3" variant="fs-24" margin="false" bold="bold">
        Selecione o método de pagamento preferido
        </BdsTypo>
      </BdsGrid>
      <BdsDivider />

      <BdsRadioGroup value={selectedCard} onBdsRadioGroupChange={(event) => handleCardSelection(event.detail.value)}>
        <BdsGrid direction="row" flexWrap="wrap" gap="3">
          {/* Card 1 */}
          <BdsCard
            width="188px"
            height="196px"
            borderColor={selectedCard === '1' ? 'primary' : 'surface-1'}
            bg-color="surface-0"
            selectable
            onClick={() => handleCardClick('1')} // Atualiza a seleção ao clicar no card
          >
            <BdsCardHeader>
            <BdsRadio value="1" checked={selectedCard === '1'} name="satisfaction" dataTest="radio1" />
            </BdsCardHeader>
            <BdsGrid
              style={{ textAlign: 'center' }}
              direction="column"
              xxs="12"
              height="100%"
              gap="1"
              justifyContent="center"
              alignItems="center"
            >
              <BdsTypo bold="bold">Cartão de Crédito</BdsTypo>
              <BdsTypo variant="fs-12">Pague de forma rápida e segura com seu cartão, com possibilidade de parcelamento.</BdsTypo>
            </BdsGrid>
          </BdsCard>

          {/* Card 2 */}
          <BdsCard
            width="188px"
            height="196px"
            borderColor={selectedCard === '2' ? 'primary' : 'surface-1'}
            bg-color="surface-0"
            selectable
            onClick={() => handleCardClick('2')} // Atualiza a seleção ao clicar no card
          >
            <BdsCardHeader>
            <BdsRadio value="2" checked={selectedCard === '2'} name="satisfaction" dataTest="radio2" />
            </BdsCardHeader>
            <BdsGrid
              style={{ textAlign: 'center' }}
              direction="column"
              xxs="12"
              height="100%"
              gap="1"
              justifyContent="center"
              alignItems="center"
            >
              <BdsTypo bold="bold">Boleto Bancário</BdsTypo>
              <BdsTypo variant="fs-12">
              Pague via boleto bancário com prazo para vencimento.
              </BdsTypo>
              
            </BdsGrid>
          </BdsCard>

          {/* Card 3 */}
          <BdsCard
            width="188px"
            height="196px"
            borderColor={selectedCard === '3' ? 'primary' : 'surface-1'}
            bg-color="surface-0"
            selectable
            onClick={() => handleCardClick('3')} // Atualiza a seleção ao clicar no card
          >
            <BdsCardHeader>
            <BdsRadio value="3" checked={selectedCard === '3'} name="satisfaction" dataTest="radio3" />
            </BdsCardHeader>
            <BdsGrid
              style={{ textAlign: 'center' }}
              direction="column"
              xxs="12"
              height="100%"
              gap="1"
              justifyContent="center"
              alignItems="center"
            >
              <BdsTypo bold="bold">PayPal</BdsTypo>
              <BdsTypo variant="fs-12">Pague com sua conta PayPal de forma prática e segura.</BdsTypo>
              
            </BdsGrid>
          </BdsCard>
        </BdsGrid>
      </BdsRadioGroup>
    </BdsCard>
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
    <bds-card height="fit-content" width="700px" bg-color="surface-0">
      <bds-grid direction="column" xxs="12" gap="3" justify-content="center" align-items="center">
        <bds-card-header align="flex-start">
          <bds-card-title text="Titulo do bloco de card"></bds-card-title>
          <bds-icon theme="solid" size="medium" name="info"></bds-icon>
        </bds-card-header>

        <bds-grid direction="column" align-items="flex-start" gap="2">
          <bds-typo variant="fs-14">
            Um componente de card é uma estrutura comum para organizar e apresentar conteúdo de maneira compacta e
            visualmente atraente. Geralmente, inclui elementos como título, descrição e ações, fornecendo uma visão
            geral rápida do conteúdo.
          </bds-typo>

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
