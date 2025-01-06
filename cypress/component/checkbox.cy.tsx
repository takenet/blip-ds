import { BdsCheckbox } from '../dist/blip-ds-react';

const Checkbox = () => {
  const toggle = () => {
    const buttonElement = document.querySelector('bds-checkbox');
    buttonElement.toggle();
  };
  return (
    <>
      <button id="toggle" onClick={() => toggle()}>
        Botão anterior
      </button>
      <BdsCheckbox label="Opção do checkbox" name="check" onBdsChange={cy.stub().as('bdsChange')}>
        Checkbox
      </BdsCheckbox>
    </>
  );
};

describe('Teste de Renderização Checkbox', () => {
  // Teste de Renderização
  it('deve renderizar o button com o label correto', () => {
    cy.mount(<Checkbox />);
    cy.get('bds-checkbox').should('have.attr', 'label', 'Opção do checkbox');
  });
  it('deve renderizar o button com o name correto', () => {
    cy.mount(<Checkbox />);
    cy.get('bds-checkbox').should('have.attr', 'name', 'check');
  });
});

describe('Teste de Eventos Checkbox', () => {
  // Teste de Evento bdsChange
  it('deve chamar o evento onBdsChange ao clicar', () => {
    cy.mount(<Checkbox />);
    cy.get('bds-checkbox').shadow().find('label').click();
    cy.get('@bdsChange').should('have.been.called');
  });
});

describe('Teste de Acessibilidade button', () => {
  // Teste de Acessibilidade com Tab
  it('deve ser possível navegar para o button usando a tecla Tab', () => {
    cy.mount(<Checkbox />);
    cy.get('button[id=toggle]').first().focus();
    cy.wait(50);
    cy.realPress('Tab');
    cy.wait(50);
    cy.get('bds-checkbox').should('have.focus');
  });
  // Teste de Acessibilidade método toggle
  it('Verificar se o método toggle esta sendo correspondido', () => {
    cy.mount(<Checkbox />);
    cy.get('button[id=toggle]').click();
    cy.get('bds-checkbox').shadow().find('.checkbox').should('have.class', 'checkbox--selected');
  });
});
