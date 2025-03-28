import { BdsProgressBar } from '../dist/blip-ds-react';

export interface Props {
  event?: boolean;
}

const ProgressBar = (props: Props) => {
  return (
    <>
      <BdsProgressBar percent={45} size="default" color="information" text="Cypress"></BdsProgressBar>
    </>
  );
};

describe('Teste de Renderização ProgressBar', () => {
  // Teste de Renderização
  it('deve renderizar o ProgressBar com o percent correto', () => {
    cy.mount(<ProgressBar event={false} />);
    cy.get('bds-progress-bar').should('have.attr', 'percent', '45');
  });
  // Teste de Renderização
  it('deve renderizar o ProgressBar com o size correto', () => {
    cy.mount(<ProgressBar event={false} />);
    cy.get('bds-progress-bar').should('have.attr', 'size', 'default');
  });
  // Teste de Renderização
  it('deve renderizar o ProgressBar com o color correto', () => {
    cy.mount(<ProgressBar event={false} />);
    cy.get('bds-progress-bar').should('have.attr', 'color', 'information');
  });
  // Teste de Renderização
  it('deve renderizar o ProgressBar com o text correto', () => {
    cy.mount(<ProgressBar event={false} />);
    cy.get('bds-progress-bar').should('have.attr', 'text', 'Cypress');
  });
});
