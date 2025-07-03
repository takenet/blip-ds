import { BdsIllustration } from '../dist/blip-ds-react';

export interface Props {
  event?: boolean;
}

const Illustration = (props: Props) => {
  return (
    <>
      <BdsIllustration type="default" name="accessibility-1" alt="Cypress"></BdsIllustration>
    </>
  );
};

describe('Teste de Renderização Illustration', () => {
  // Teste de Renderização
  it('deve renderizar o Illustration com o type correto', () => {
    cy.mount(<Illustration event={false} />);
    cy.get('bds-illustration').should('have.attr', 'type', 'default');
  });
  // Teste de Renderização
  it('deve renderizar o Illustration com o name correto', () => {
    cy.mount(<Illustration event={false} />);
    cy.get('bds-illustration').should('have.attr', 'name', 'accessibility-1');
  });
  // Teste de Renderização
  it('deve renderizar o Illustration com o alt correto', () => {
    cy.mount(<Illustration event={false} />);
    cy.get('bds-illustration').should('have.attr', 'alt', 'Cypress');
  });
});
