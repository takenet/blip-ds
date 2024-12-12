import { BdsBreadcrumb } from '../dist/blip-ds-react';

const Breadcrumb = () => {
  const items = JSON.stringify([
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Current Page' },
  ]);

  return <BdsBreadcrumb items={items} />;
};

describe('Teste de Renderização Breadcrumb', () => {
  it('deve renderizar o breadcrumb com os itens corretamente', () => {
    cy.mount(<Breadcrumb />);

    cy.get('bds-breadcrumb').should('have.attr', 'items');
  });
});
