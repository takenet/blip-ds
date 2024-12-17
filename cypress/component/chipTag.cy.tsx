import { BdsChipTag } from '../dist/blip-ds-react';

const ChipTag = () => {
  return (
    <>
      <BdsChipTag color="info" icon="edit">
        ChipTag
      </BdsChipTag>
    </>
  );
};

describe('Teste de Renderização ChipTag', () => {
  // Teste de Renderização
  it('deve renderizar o button com o color correto', () => {
    cy.mount(<ChipTag />);
    cy.get('bds-chip-tag').should('have.attr', 'color', 'info');
  });
  // Teste de Renderização
  it('deve renderizar o button com o icon correto', () => {
    cy.mount(<ChipTag />);
    cy.get('bds-chip-tag').should('have.attr', 'icon', 'edit');
  });
});
