import { BdsInput } from '../dist/blip-ds-react';

describe('Teste de Renderização Input', () => {
  // Teste de Renderização
  it('deve renderizar o input com o label correto', () => {
    cy.mount(<BdsInput label="Label" />);
    cy.get('bds-input').should('have.attr', 'label', 'Label');
  });
  it('deve renderizar o input com o icon correto', () => {
    cy.mount(<BdsInput icon="edit" />);
    cy.get('bds-input').should('have.attr', 'icon', 'edit');
  });
  it('deve renderizar o input com o placeholder correto', () => {
    cy.mount(<BdsInput placeholder="Digite aqui..." />);
    cy.get('bds-input').should('have.attr', 'placeholder', 'Digite aqui...');
  });
  it('deve renderizar o input com o helperMessage correto', () => {
    cy.mount(<BdsInput helperMessage="Mensagem de ajuda" />);
    cy.get('bds-input').should('have.attr', 'helper-message', 'Mensagem de ajuda');
  });
});

describe('Teste de Interação Input', () => {
  // Teste de Interação de Focus
  it('deve permitir que o usuário focalize o input', () => {
    cy.mount(<BdsInput value="" dataTest="bds-input" />);
    cy.get('bds-input').click();
    cy.get('bds-input').should('have.focus');
  });

  // Teste de Interação de Digitação
  it('deve permitir que o usuário digite no input', () => {
    cy.mount(<BdsInput value="" dataTest="bds-input" />);

    cy.get('bds-input').shadow().find('[data-test="bds-input"]').type('Hello, Cypress!');
    cy.get('bds-input').shadow().find('[data-test="bds-input"]').should('have.value', 'Hello, Cypress!');
  });
});

describe('Teste de Eventos Input', () => {
  // Teste de Evento onChange
  it('deve chamar o evento onChange ao digitar', () => {
    cy.mount(<BdsInput value="" onBdsChange={cy.stub().as('bdsChange')} dataTest="bds-input" />);
    cy.get('bds-input').shadow().find('[data-test="bds-input"]').type('Cypress');
    cy.get('@bdsChange').should('have.been.called');
  });
  // Teste de Evento onInput
  it('deve chamar o evento onInput ao digitar', () => {
    cy.mount(<BdsInput value="" onBdsInput={cy.stub().as('bdsInput')} dataTest="bds-input" />);
    cy.get('bds-input').shadow().find('[data-test="bds-input"]').type('Cypress');
    cy.get('@bdsInput').should('have.been.called');
  });
  // Teste de Evento onBlur
  it('deve chamar o evento onBlur', () => {
    cy.mount(<BdsInput value="" onBdsOnBlur={cy.stub().as('bdsBlur')} dataTest="bds-input" />);
    cy.get('bds-input').shadow().find('[data-test="bds-input"]').type('Cypress');
    cy.realPress('Tab');
    cy.get('@bdsBlur').should('have.been.called');
  });
  // Teste de Evento onFocus
  it('deve chamar o evento onFocus', () => {
    cy.mount(<BdsInput value="" onBdsFocus={cy.stub().as('bdsFocus')} dataTest="bds-input" />);
    cy.get('bds-input').click();
    cy.get('@bdsFocus').should('have.been.called');
  });
  // Teste de Evento onSubmit
  it('deve chamar o evento onSubmit', () => {
    cy.mount(<BdsInput value="" onBdsSubmit={cy.stub().as('bdsSubmit')} dataTest="bds-input" />);
    cy.get('bds-input').shadow().find('[data-test="bds-input"]').type('Cypress{enter}');
    cy.get('@bdsSubmit').should('have.been.called');
  });
  // Teste de Evento onBdsKeyDownBackspace
  it('deve chamar o evento onBdsKeyDownBackspace', () => {
    cy.mount(<BdsInput value="" onBdsKeyDownBackspace={cy.stub().as('bdsKeyDownBackspace')} dataTest="bds-input" />);
    cy.get('bds-input').shadow().find('[data-test="bds-input"]').type('Cypress{backspace}');
    cy.get('@bdsKeyDownBackspace').should('have.been.called');
  });
});

describe('Teste de Acessibilidade Input', () => {
  // Teste de Acessibilidade com Tab
  it('deve ser possível navegar para o input usando a tecla Tab', () => {
    cy.mount(
      <>
        <button>Botão anterior</button>
        <BdsInput />
      </>,
    );
    cy.get('button').first().focus();
    cy.wait(50);
    cy.realPress('Tab');
    cy.wait(50);
    cy.get('bds-input').should('have.focus');
  });
});
