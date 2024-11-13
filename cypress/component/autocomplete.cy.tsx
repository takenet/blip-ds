import { BdsAutocomplete, BdsSelectOption } from '../dist/blip-ds-react';

describe('Teste de Renderização Input', () => {
  // Teste de Renderização
  it('deve renderizar o input com o label correto', () => {
    cy.mount(<BdsAutocomplete label="Label" />);
    cy.get('bds-autocomplete').should('have.attr', 'label', 'Label');
  });
  it('deve renderizar o input com o icon correto', () => {
    cy.mount(<BdsAutocomplete icon="edit" />);
    cy.get('bds-autocomplete').should('have.attr', 'icon', 'edit');
  });
  it('deve renderizar o input com o placeholder correto', () => {
    cy.mount(<BdsAutocomplete placeholder="Digite aqui..." />);
    cy.get('bds-autocomplete').should('have.attr', 'placeholder', 'Digite aqui...');
  });
  it('deve renderizar o input com o helperMessage correto', () => {
    cy.mount(<BdsAutocomplete helperMessage="Mensagem de ajuda" />);
    cy.get('bds-autocomplete').should('have.attr', 'helper-message', 'Mensagem de ajuda');
  });
});

describe('Teste de Interação Input', () => {
  // Teste de Interação de Focus
  it('deve permitir que o usuário focalize o input', () => {
    cy.mount(<BdsAutocomplete value="" dataTest="bds-autocomplete" />);
    cy.get('bds-autocomplete').click();
    cy.get('bds-autocomplete').should('have.focus');
  });

  // Teste de Interação de Digitação
  it('deve permitir que o usuário digite no input', () => {
    cy.mount(<BdsAutocomplete value="" dataTest="bds-autocomplete" />);

    cy.get('bds-autocomplete').shadow().find('[data-test="bds-autocomplete"]').type('Hello, Cypress!');
    cy.get('bds-autocomplete').shadow().find('[data-test="bds-autocomplete"]').should('have.value', 'Hello, Cypress!');
  });
});

describe('Teste de Eventos Input', () => {
  // Teste de Evento onChange
  it('deve chamar o evento onChange ao digitar', () => {
    cy.mount(<BdsAutocomplete value="" onBdsChange={cy.stub().as('bdsChange')} dataTest="bds-autocomplete" />);
    cy.get('bds-autocomplete').shadow().find('[data-test="bds-autocomplete"]').type('Cypress');
    cy.get('@bdsChange').should('have.been.called');
  });
  // Teste de Evento onInput
  it('deve chamar o evento onInput ao digitar', () => {
    cy.mount(<BdsAutocomplete value="" onBdsInput={cy.stub().as('bdsInput')} dataTest="bds-autocomplete" />);
    cy.get('bds-autocomplete').shadow().find('[data-test="bds-autocomplete"]').type('Cypress');
    cy.get('@bdsInput').should('have.been.called');
  });
  // Teste de Evento onBlur
  it('deve chamar o evento onBlur', () => {
    cy.mount(<BdsAutocomplete value="" onBdsBlur={cy.stub().as('bdsBlur')} dataTest="bds-autocomplete" />);
    cy.get('bds-autocomplete').shadow().find('[data-test="bds-autocomplete"]').type('Cypress');
    cy.realPress('Tab');
    cy.get('@bdsBlur').should('have.been.called');
  });
  // Teste de Evento onFocus
  it('deve chamar o evento onFocus', () => {
    cy.mount(<BdsAutocomplete value="" onBdsFocus={cy.stub().as('bdsFocus')} dataTest="bds-autocomplete" />);
    cy.get('bds-autocomplete').click();
    cy.get('@bdsFocus').should('have.been.called');
  });
  // Teste de Evento onSelectedChange
  it('deve chamar o evento onSelectedChange', () => {
    cy.mount(
      <BdsAutocomplete value="" onBdsSelectedChange={cy.stub().as('bdsSelectedChange')} dataTest="bds-autocomplete">
        <BdsSelectOption value="1">Millie Bobby</BdsSelectOption>
        <BdsSelectOption value="2">Finn Wolfhard</BdsSelectOption>
        <BdsSelectOption value="3">David Harbour</BdsSelectOption>
        <BdsSelectOption value="4">Gaten Matarazzo</BdsSelectOption>
        <BdsSelectOption value="5">Caleb McLaughlin</BdsSelectOption>
        <BdsSelectOption value="9">Noah Schnapp</BdsSelectOption>
      </BdsAutocomplete>,
    );
    cy.get('bds-autocomplete').click().find('bds-select-option[value="1"]').click();
    cy.get('@bdsSelectedChange').should('have.been.called');
  });
});

describe('Teste de Acessibilidade Input', () => {
  // Teste de Acessibilidade com Tab
  it('deve ser possível navegar para o input usando a tecla Tab', () => {
    cy.mount(
      <>
        <button>Botão anterior</button>
        <BdsAutocomplete />
      </>,
    );
    cy.get('button').first().focus();
    cy.wait(50);
    cy.realPress('Tab');
    cy.wait(50);
    cy.get('bds-autocomplete').should('have.focus');
  });
});
