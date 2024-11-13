import { BdsInputEditable } from '../dist/blip-ds-react';

describe('Teste de Renderização Input', () => {
  // Teste de Renderização
  it('deve renderizar o input com o helperMessage correto', () => {
    cy.mount(<BdsInputEditable helperMessage="Mensagem de ajuda" />);
    cy.get('bds-input-editable').should('have.attr', 'helper-message', 'Mensagem de ajuda');
  });
});

describe('Teste de Interação Input', () => {
  // Teste de Interação de Focus
  it('deve permitir que o usuário focalize o input', () => {
    cy.mount(<BdsInputEditable value="" dataTest="input-editable" dtButtonEdit="dt-button-edit" />);
    cy.get('bds-input-editable').shadow().find('[data-test="dt-button-edit"]').click();
    cy.get('bds-input-editable').shadow().find('[data-test="input-editable"]').click();
    cy.get('bds-input-editable').shadow().find('[data-test="input-editable"]').should('have.focus');
  });

  // Teste de Interação de Digitação
  it('deve permitir que o usuário digite no input', () => {
    cy.mount(<BdsInputEditable value="" dataTest="input-editable" dtButtonEdit="dt-button-edit" />);
    cy.get('bds-input-editable').shadow().find('[data-test="dt-button-edit"]').click();
    cy.get('bds-input-editable').shadow().find('[data-test="input-editable"]').type('Hello, Cypress!');
    cy.get('bds-input-editable').shadow().find('[data-test="input-editable"]').should('have.value', 'Hello, Cypress!');
  });
});

describe('Teste de Eventos Input', () => {
  // Teste de Evento onChange
  it('deve chamar o evento onChange ao digitar', () => {
    cy.mount(
      <BdsInputEditable
        value=""
        onBdsChange={cy.stub().as('bdsChange')}
        dataTest="input-editable"
        dtButtonEdit="dt-button-edit"
      />,
    );
    cy.get('bds-input-editable').shadow().find('[data-test="dt-button-edit"]').click();
    cy.get('bds-input-editable').shadow().find('[data-test="input-editable"]').type('Cypress');
    cy.get('@bdsChange').should('have.been.called');
  });
  // Teste de Evento onInput
  it('deve chamar o evento onInput ao digitar', () => {
    cy.mount(
      <BdsInputEditable
        value=""
        onBdsInput={cy.stub().as('bdsInput')}
        dataTest="input-editable"
        dtButtonEdit="dt-button-edit"
      />,
    );
    cy.get('bds-input-editable').shadow().find('[data-test="dt-button-edit"]').click();
    cy.get('bds-input-editable').shadow().find('[data-test="input-editable"]').type('Cypress');
    cy.get('@bdsInput').should('have.been.called');
  });
  // Teste de Evento onBlur
  it('deve chamar o evento onBlur', () => {
    cy.mount(
      <BdsInputEditable
        value=""
        onBdsBlur={cy.stub().as('bdsBlur')}
        dataTest="input-editable"
        dtButtonEdit="dt-button-edit"
      />,
    );
    cy.get('bds-input-editable').shadow().find('[data-test="dt-button-edit"]').click();
    cy.get('bds-input-editable').shadow().find('[data-test="input-editable"]').type('Cypress');
    cy.realPress('Tab');
    cy.get('@bdsBlur').should('have.been.called');
  });
  // Teste de Evento onFocus
  it('deve chamar o evento onFocus', () => {
    cy.mount(
      <BdsInputEditable
        value=""
        onBdsFocus={cy.stub().as('bdsFocus')}
        dataTest="input-editable"
        dtButtonEdit="dt-button-edit"
      />,
    );
    cy.get('bds-input-editable').shadow().find('[data-test="dt-button-edit"]').click();
    cy.get('bds-input-editable').shadow().find('[data-test="input-editable"]').click();
    cy.get('@bdsFocus').should('have.been.called');
  });
  // Teste de Evento onSubmit
  it('deve chamar o evento onInputEditableSave', () => {
    cy.mount(
      <BdsInputEditable
        value=""
        onBdsInputEditableSave={cy.stub().as('InputEditableSave')}
        dataTest="input-editable"
        dtButtonEdit="dt-button-edit"
        dtButtonConfirm="dt-button-confirm"
      />,
    );
    cy.get('bds-input-editable').shadow().find('[data-test="dt-button-edit"]').click();
    cy.get('bds-input-editable').shadow().find('[data-test="input-editable"]').type('Cypress');
    cy.get('bds-input-editable')
      .shadow()
      .find('bds-icon[aria-label="checkball"]')
      .shadow()
      .find('[data-test="dt-button-confirm"]')
      .click();
    cy.get('@InputEditableSave').should('have.been.called');
  });
});

describe('Teste de Acessibilidade Input', () => {
  // Teste de Acessibilidade com Tab
  it('deve ser possível navegar para o input usando a tecla Tab', () => {
    cy.mount(
      <>
        <button>Botão anterior</button>
        <BdsInputEditable />
      </>,
    );
    cy.get('button').first().focus();
    cy.wait(50);
    cy.realPress('Tab');
    cy.wait(50);
    cy.get('bds-input-editable').should('have.focus');
  });
});
