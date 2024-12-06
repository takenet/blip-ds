import { BdsButton, BdsButtonGroup } from '../dist/blip-ds-react';

const ButtonGroup = () => {
  const activateButton = () => {
    const buttonElement = document.querySelector('bds-button-group');
    buttonElement.activateButton(3);
  };
  return (
    <>
      <button id="activateButton" onClick={() => activateButton()}>
        Botão anterior
      </button>
      <BdsButtonGroup
        color="primary"
        direction="column"
        size="medium"
        onButtonSelected={cy.stub().as('buttonSelected')}
      >
        <BdsButton iconLeft="builder-publish-bot" id="bot-builder-publish"></BdsButton>
        <BdsButton iconLeft="search" id="bot-search"></BdsButton>
        <BdsButton iconLeft="email" id="bot-email"></BdsButton>
        <BdsButton iconLeft="bell" id="bot-bell"></BdsButton>
        <BdsButton iconLeft="settings-general" id="bot-settings"></BdsButton>
      </BdsButtonGroup>
      ;
    </>
  );
};

describe('Teste de Renderização ButtonGroup', () => {
  // Teste de Renderização
  it('deve renderizar o button com o color correto', () => {
    cy.mount(<ButtonGroup />);
    cy.get('bds-button-group').should('have.attr', 'color', 'primary');
  });
  it('deve renderizar o button com o size correto', () => {
    cy.mount(<ButtonGroup />);
    cy.get('bds-button-group').should('have.attr', 'size', 'medium');
  });
  it('deve renderizar o button com o direction correto', () => {
    cy.mount(<ButtonGroup />);
    cy.get('bds-button-group').should('have.attr', 'direction', 'column');
  });
});

describe('Teste de Eventos ButtonGroup', () => {
  // Teste de Evento bdsClick
  it('deve chamar o evento onButtonSelected ao clicar', () => {
    cy.mount(<ButtonGroup />);
    cy.get('bds-button-group').find('bds-button[id="bot-search"]').shadow().find('button').click();
    cy.get('@buttonSelected').should('have.been.called');
  });
});

describe('Teste de Acessibilidade button', () => {
  // Teste de Acessibilidade método isActive
  it('Verificar se o método isActive esta sendo correspondido', () => {
    cy.mount(<ButtonGroup />);
    cy.get('button[id="activateButton"]').click();
    cy.get('bds-button-group')
      .find('bds-button[id="bot-bell"]')
      .shadow()
      .find('button')
      .should('have.class', 'button--active');
  });
});
