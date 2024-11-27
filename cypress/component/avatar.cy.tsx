import { BdsAvatar } from '../dist/blip-ds-react';

describe('Teste de Renderização avatar', () => {
  // Teste de Renderização
  it('deve renderizar o avatar com o name correto', () => {
    cy.mount(<BdsAvatar name="Michael Scott" />);
    cy.get('bds-avatar').should('have.attr', 'name', 'Michael Scott');
  });
  it('deve renderizar o avatar com o thumbnail correto', () => {
    cy.mount(<BdsAvatar thumbnail="https://www.blip.ai/scripts-bot/icons/blipinho-widget.svg" />);
    cy.get('bds-avatar').should('have.attr', 'thumbnail', 'https://www.blip.ai/scripts-bot/icons/blipinho-widget.svg');
  });
});

describe('Teste de Eventos avatar', () => {
  // Teste de Evento onBdsClickAvatar
  it('deve chamar o evento onBdsClickAvatar ao clicar no componente', () => {
    cy.mount(<BdsAvatar name="Michael Scott" upload onBdsClickAvatar={cy.stub().as('bdsClickAvatar')} />);
    cy.get('bds-avatar').click();
    cy.get('@bdsClickAvatar').should('have.been.called');
  });
});

describe('Teste de Acessibilidade avatar', () => {
  // Teste de Acessibilidade com Tab
  it('deve ser possível navegar para o avatar usando a tecla Tab', () => {
    cy.mount(
      <>
        <button>Botão anterior</button>
        <BdsAvatar name="Michael Scott" />
      </>,
    );
    cy.get('button').first().focus();
    cy.wait(50);
    cy.realPress('Tab');
    cy.wait(50);
    cy.get('bds-avatar').should('have.focus');
  });
});
