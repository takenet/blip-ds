import { BdsLoadingPage } from '../dist/blip-ds-react';

const LoadingPage = () => {
  return (
    <>
      <BdsLoadingPage data-test="Cypress"></BdsLoadingPage>
    </>
  );
};

describe('Teste de Renderização LoadingPage', () => {
  // Teste de Renderização
  it('deve renderizar o button com o dataTest correto', () => {
    cy.mount(<LoadingPage />);
    cy.get('bds-loading-page').should('have.attr', 'data-test', 'Cypress');
  });
});
