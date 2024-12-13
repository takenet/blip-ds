import { BdsBadge } from '../dist/blip-ds-react';

const Badge = () => {
  return (
    <>
      <BdsBadge animation={true} shape="circle" color="system" icon="info"></BdsBadge>
    </>
  );
};

describe('Teste de Renderização Badge', () => {
  // Teste de Renderização
  it('deve renderizar o Badge com o shape correto', () => {
    cy.mount(<Badge />);
    cy.get('bds-badge').should('have.attr', 'shape', 'circle');
  });
  it('deve renderizar o Badge com o color correto', () => {
    cy.mount(<Badge />);
    cy.get('bds-badge').should('have.attr', 'color', 'system');
  });
  it('deve renderizar o Badge com o icon correto', () => {
    cy.mount(<Badge />);
    cy.get('bds-badge').should('have.attr', 'icon', 'info');
  });
  it('deve renderizar o Badge com o animation correto', () => {
    cy.mount(<Badge />);
    cy.get('bds-badge').should('have.attr', 'animation', 'true');
  });
});
