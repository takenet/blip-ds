import {
  BdsAvatar,
  BdsButtonIcon,
  BdsCard,
  BdsCardBody,
  BdsCardFooter,
  BdsCardHeader,
  BdsCardSubtitle,
  BdsCardTitle,
  BdsGrid,
  BdsIcon,
  BdsTypo,
} from '../dist/blip-ds-react';

const Card = () => {
  return (
    <>
      <button>Botão anterior</button>
      <BdsCard clickable={true} height="200px" width="fit-content" onBdsClick={cy.stub().as('bdsClick')}>
        <BdsCardHeader align="">
          <BdsAvatar name="Blip" size="small" />
          <BdsGrid direction="column">
            <BdsCardTitle text="@TakeBlip" />
            <BdsCardSubtitle text="10/10/21 11:20 | atualizado há 10 min" />
          </BdsGrid>
          <BdsButtonIcon icon="more-options-vertical" size="small" variant="secondary" />
        </BdsCardHeader>
        <BdsCardBody>
          <BdsGrid align-items="center" direction="column" gap="1" justify-content="center" xxs="12">
            <BdsIcon name="blip-chat" size="brand" type="logo" />
          </BdsGrid>
        </BdsCardBody>
        <BdsCardFooter align="flex-start">
          <BdsTypo bold="bold">Blip Chat</BdsTypo>
        </BdsCardFooter>
      </BdsCard>
    </>
  );
};

describe('Teste de Renderização Card', () => {
  // Teste de Renderização
  it('deve renderizar o button com o clickable correto', () => {
    cy.mount(<Card />);
    cy.get('bds-card').should('have.attr', 'clickable', 'true');
  });
  it('deve renderizar o button com o height correto', () => {
    cy.mount(<Card />);
    cy.get('bds-card').should('have.attr', 'height', '200px');
  });
  it('deve renderizar o button com o width correto', () => {
    cy.mount(<Card />);
    cy.get('bds-card').should('have.attr', 'width', 'fit-content');
  });
});

describe('Teste de Eventos Card', () => {
  // Teste de Evento bdsClick
  it('deve chamar o evento onBdsClick ao clicar', () => {
    cy.mount(<Card />);
    cy.get('bds-card').click();
    cy.get('@bdsClick').should('have.been.called');
  });
});

describe('Teste de Acessibilidade button', () => {
  // Teste de Acessibilidade com Tab
  it('deve ser possível navegar para o button usando a tecla Tab', () => {
    cy.mount(<Card />);
    cy.get('button').first().focus();
    cy.wait(50);
    cy.realPress('Tab');
    cy.wait(50);
    cy.get('bds-card').should('have.focus');
  });
});
