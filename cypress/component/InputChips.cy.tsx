import { BdsInputChips } from '../dist/blip-ds-react';

describe('Teste de Renderização Input', () => {
  // Teste de Renderização
  it('deve renderizar o input com o label correto', () => {
    cy.mount(<BdsInputChips label="Label" />);
    cy.get('bds-input-chips').should('have.attr', 'label', 'Label');
  });
  it('deve renderizar o input com o icon correto', () => {
    cy.mount(<BdsInputChips icon="edit" />);
    cy.get('bds-input-chips').should('have.attr', 'icon', 'edit');
  });
  it('deve renderizar o input com o placeholder correto', () => {
    cy.mount(<BdsInputChips placeholder="Digite aqui..." />);
    cy.get('bds-input-chips').should('have.attr', 'placeholder', 'Digite aqui...');
  });
  it('deve renderizar o input com o helperMessage correto', () => {
    cy.mount(<BdsInputChips helperMessage="Mensagem de ajuda" />);
    cy.get('bds-input-chips').should('have.attr', 'helper-message', 'Mensagem de ajuda');
  });
});

describe('Teste de Interação Input', () => {
  // Teste de Interação de Focus
  it('deve permitir que o usuário focalize o input', () => {
    cy.mount(<BdsInputChips value="" dataTest="bds-input-chips" />);
    cy.get('bds-input-chips').click();
    cy.get('bds-input-chips').should('have.focus');
  });

  // Teste de Interação de Digitação
  it('deve permitir que o usuário digite no input', () => {
    cy.mount(<BdsInputChips value="" dataTest="bds-input-chips" />);

    cy.get('bds-input-chips').shadow().find('[data-test="bds-input-chips"]').type('Hello, Cypress!');
    cy.get('bds-input-chips').shadow().find('[data-test="bds-input-chips"]').should('have.value', 'Hello, Cypress!');
  });
});

describe('Teste de Eventos Input', () => {
  // Teste de Evento onChange
  it('deve chamar o evento onChange ao digitar', () => {
    cy.mount(<BdsInputChips value="" onBdsChange={cy.stub().as('bdsChange')} dataTest="bds-input-chips" />);
    cy.get('bds-input-chips').shadow().find('[data-test="bds-input-chips"]').type('Cypress{enter}');
    cy.get('@bdsChange').should('have.been.called');
  });
  // Teste de Evento onChange
  it('deve chamar o evento onChange ao digitar', () => {
    cy.mount(<BdsInputChips value="" onBdsChangeChips={cy.stub().as('bdsChangeChips')} dataTest="bds-input-chips" />);
    cy.get('bds-input-chips').shadow().find('[data-test="bds-input-chips"]').type('Cypress{enter}');
    cy.get('@bdsChangeChips').should('have.been.called');
  });
  // Teste de Evento onInput
  it('deve chamar o evento onInput ao digitar', () => {
    cy.mount(<BdsInputChips value="" onBdsInputChipsInput={cy.stub().as('bdsInput')} dataTest="bds-input-chips" />);
    cy.get('bds-input-chips').shadow().find('[data-test="bds-input-chips"]').type('Cypress');
    cy.get('@bdsInput').should('have.been.called');
  });
  // Teste de Evento onBlur
  it('deve chamar o evento onBlur', () => {
    cy.mount(<BdsInputChips value="" onBdsBlur={cy.stub().as('bdsBlur')} dataTest="bds-input-chips" />);
    cy.get('bds-input-chips').shadow().find('[data-test="bds-input-chips"]').type('Cypress{enter}');
    cy.realPress('Tab');
    cy.get('@bdsBlur').should('have.been.called');
  });
  // Teste de Evento onFocus
  it('deve chamar o evento onFocus', () => {
    cy.mount(<BdsInputChips value="" onBdsInputChipsFocus={cy.stub().as('bdsFocus')} dataTest="bds-input-chips" />);
    cy.get('bds-input-chips').click();
    cy.get('@bdsFocus').should('have.been.called');
  });
  // Teste de Evento onSubmit
  it('deve chamar o evento onSubmit', () => {
    cy.mount(<BdsInputChips value="" onBdsSubmit={cy.stub().as('bdsSubmit')} dataTest="bds-input-chips" />);
    cy.get('bds-input-chips').shadow().find('[data-test="bds-input-chips"]').type('Cypress{enter}');
    cy.realPress('Tab');
    cy.get('@bdsSubmit').should('have.been.called');
  });
});

describe('Teste de Acessibilidade Input', () => {
  // Teste de Acessibilidade com Tab
  it('deve ser possível navegar para o input usando a tecla Tab', () => {
    cy.mount(
      <>
        <button>Botão anterior</button>
        <BdsInputChips />
      </>,
    );
    cy.get('button').first().focus();
    cy.wait(50);
    cy.realPress('Tab');
    cy.wait(50);
    cy.get('bds-input-chips').should('have.focus');
  });
});
