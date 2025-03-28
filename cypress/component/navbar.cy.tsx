import { BdsNavbar } from '../dist/blip-ds-react';

export interface Props {
  event?: boolean;
}

const Navbar = (props: Props) => {
  return (
    <>
      <BdsNavbar orientation="horizontal" backgroundColor="surface-1" justifyContent="space-between"></BdsNavbar>
    </>
  );
};

describe('Teste de Renderização Navbar', () => {
  // Teste de Renderização
  it('deve renderizar o Navbar com o orientation correto', () => {
    cy.mount(<Navbar event={false} />);
    cy.get('bds-navbar').should('have.attr', 'orientation', 'horizontal');
  });
  // Teste de Renderização
  it('deve renderizar o Navbar com o backgroundColor correto', () => {
    cy.mount(<Navbar event={false} />);
    cy.get('bds-navbar').should('have.attr', 'background-color', 'surface-1');
  });
  // Teste de Renderização
  it('deve renderizar o Navbar com o justifyContent correto', () => {
    cy.mount(<Navbar event={false} />);
    cy.get('bds-navbar').should('have.attr', 'justify-content', 'space-between');
  });
});
