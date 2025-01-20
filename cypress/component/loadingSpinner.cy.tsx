import { BdsLoadingSpinner } from '../dist/blip-ds-react';

const LoadingSpinner = () => {
  return (
    <>
      <BdsLoadingSpinner size="standard" color="main"></BdsLoadingSpinner>
    </>
  );
};

describe('Teste de Renderização LoadingSpinner', () => {
  // Teste de Renderização
  it('deve renderizar o button com o size correto', () => {
    cy.mount(<LoadingSpinner />);
    cy.get('bds-loading-spinner').should('have.attr', 'size', 'standard');
  });
  // Teste de Renderização
  it('deve renderizar o button com o color correto', () => {
    cy.mount(<LoadingSpinner />);
    cy.get('bds-loading-spinner').should('have.attr', 'color', 'main');
  });
});
