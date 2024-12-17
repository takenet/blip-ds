import { BdsChipClickable } from '../dist/blip-ds-react';

const ChipClickable = () => {
  return (
    <>
      <button>Botão anterior</button>
      <BdsChipClickable
        avatar="Michael Scott"
        clickable
        close
        color="default"
        icon="edit"
        size="standard"
        onChipClickableClick={cy.stub().as('chipClickableClick')}
      >
        ChipClickable
      </BdsChipClickable>
    </>
  );
};

describe('Teste de Renderização ChipClickable', () => {
  // Teste de Renderização
  it('deve renderizar o button com o avatar correto', () => {
    cy.mount(<ChipClickable />);
    cy.get('bds-chip-clickable').should('have.attr', 'avatar', 'Michael Scott');
  });
  // Teste de Renderização
  it('deve renderizar o button com o clickable correto', () => {
    cy.mount(<ChipClickable />);
    cy.get('bds-chip-clickable').should('have.attr', 'clickable', 'true');
  });
  // Teste de Renderização
  it('deve renderizar o button com o close correto', () => {
    cy.mount(<ChipClickable />);
    cy.get('bds-chip-clickable').should('have.attr', 'close', 'true');
  });
  // Teste de Renderização
  it('deve renderizar o button com o color correto', () => {
    cy.mount(<ChipClickable />);
    cy.get('bds-chip-clickable').should('have.attr', 'color', 'default');
  });
  // Teste de Renderização
  it('deve renderizar o button com o icon correto', () => {
    cy.mount(<ChipClickable />);
    cy.get('bds-chip-clickable').should('have.attr', 'icon', 'edit');
  });
  // Teste de Renderização
  it('deve renderizar o button com o size correto', () => {
    cy.mount(<ChipClickable />);
    cy.get('bds-chip-clickable').should('have.attr', 'size', 'standard');
  });
});

describe('Teste de Eventos ChipClickable', () => {
  // Teste de Evento bdsClick
  it('deve chamar o evento onBdsClick ao clicar', () => {
    cy.mount(<ChipClickable />);
    cy.get('bds-chip-clickable').shadow().find('.chip_clickable').click();
    cy.get('@chipClickableClick').should('have.been.called');
  });
});

describe('Teste de Acessibilidade button', () => {
  // Teste de Acessibilidade com Tab
  it('deve ser possível navegar para o button usando a tecla Tab', () => {
    cy.mount(<ChipClickable />);
    cy.get('button').first().focus();
    cy.wait(50);
    cy.realPress('Tab');
    cy.wait(50);
    cy.get('bds-chip-clickable').should('have.focus');
  });
});
