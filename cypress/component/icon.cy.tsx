import { BdsIcon } from '../dist/blip-ds-react';

export interface Props {
  event?: boolean;
}

const Icon = (props: Props) => {
  return (
    <>
      <BdsIcon ariaLabel="Cypress" name="checkbox" size="medium" theme="outline" type="icon"></BdsIcon>
    </>
  );
};

describe('Teste de Renderização Icon', () => {
  // Teste de Renderização
  it('deve renderizar o Icon com o ariaLabel correto', () => {
    cy.mount(<Icon event={false} />);
    cy.get('bds-icon').should('have.attr', 'aria-label', 'Cypress');
  });
  // Teste de Renderização
  it('deve renderizar o Icon com o name correto', () => {
    cy.mount(<Icon event={false} />);
    cy.get('bds-icon').should('have.attr', 'name', 'checkbox');
  });
  // Teste de Renderização
  it('deve renderizar o Icon com o size correto', () => {
    cy.mount(<Icon event={false} />);
    cy.get('bds-icon').should('have.attr', 'size', 'medium');
  });
  // Teste de Renderização
  it('deve renderizar o Icon com o theme correto', () => {
    cy.mount(<Icon event={false} />);
    cy.get('bds-icon').should('have.attr', 'theme', 'outline');
  });
  // Teste de Renderização
  it('deve renderizar o Icon com o type correto', () => {
    cy.mount(<Icon event={false} />);
    cy.get('bds-icon').should('have.attr', 'type', 'icon');
  });
});
