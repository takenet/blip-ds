import { BdsInputPassword } from '../dist/blip-ds-react';

describe('Teste de Renderização Input', () => {
  // Teste de Renderização
  it('deve renderizar o input com o label correto', () => {
    cy.mount(<BdsInputPassword label="Label" />);
    cy.get('bds-input-password').should('have.attr', 'label', 'Label');
  });
  it('deve renderizar o input com o icon correto', () => {
    cy.mount(<BdsInputPassword icon="edit" />);
    cy.get('bds-input-password').should('have.attr', 'icon', 'edit');
  });
  it('deve renderizar o input com o placeholder correto', () => {
    cy.mount(<BdsInputPassword placeholder="Digite aqui..." />);
    cy.get('bds-input-password').should('have.attr', 'placeholder', 'Digite aqui...');
  });
  it('deve renderizar o input com o helperMessage correto', () => {
    cy.mount(<BdsInputPassword helperMessage="Mensagem de ajuda" />);
    cy.get('bds-input-password').should('have.attr', 'helper-message', 'Mensagem de ajuda');
  });
});

describe('Teste de Interação Input', () => {
  // Teste de Interação de Focus
  it('deve permitir que o usuário focalize o input', () => {
    cy.mount(<BdsInputPassword value="" dataTest="bds-input-password" />);
    cy.get('bds-input-password').click();
    cy.get('bds-input-password').should('have.focus');
  });

  // Teste de Interação de Digitação
  it('deve permitir que o usuário digite no input', () => {
    cy.mount(<BdsInputPassword value="" dataTest="bds-input-password" />);

    cy.get('bds-input-password').shadow().find('[data-test="bds-input-password"]').type('Hello, Cypress!');
    cy.get('bds-input-password')
      .shadow()
      .find('[data-test="bds-input-password"]')
      .should('have.value', 'Hello, Cypress!');
  });
});

describe('Teste de Eventos Input', () => {
  // Teste de Evento onChange
  it('deve chamar o evento onChange ao digitar', () => {
    cy.mount(
      <BdsInputPassword value="" onBdsInputPasswordChange={cy.stub().as('bdsChange')} dataTest="bds-input-password" />,
    );
    cy.get('bds-input-password').shadow().find('[data-test="bds-input-password"]').type('Cypress');
    cy.get('@bdsChange').should('have.been.called');
  });
  // Teste de Evento onInput
  it('deve chamar o evento onInput ao digitar', () => {
    cy.mount(
      <BdsInputPassword value="" onBdsInputPasswordInput={cy.stub().as('bdsInput')} dataTest="bds-input-password" />,
    );
    cy.get('bds-input-password').shadow().find('[data-test="bds-input-password"]').type('Cypress');
    cy.get('@bdsInput').should('have.been.called');
  });
  // Teste de Evento onBlur
  it('deve chamar o evento onBlur', () => {
    cy.mount(
      <BdsInputPassword value="" onBdsInputPasswordBlur={cy.stub().as('bdsBlur')} dataTest="bds-input-password" />,
    );
    cy.get('bds-input-password').shadow().find('[data-test="bds-input-password"]').type('Cypress');
    cy.realPress('Tab');
    cy.get('@bdsBlur').should('have.been.called');
  });
  // Teste de Evento onFocus
  it('deve chamar o evento onFocus', () => {
    cy.mount(
      <BdsInputPassword value="" onBdsInputPasswordFocus={cy.stub().as('bdsFocus')} dataTest="bds-input-password" />,
    );
    cy.get('bds-input-password').click();
    cy.get('@bdsFocus').should('have.been.called');
  });
  // Teste de Evento onSubmit
  it('deve chamar o evento onSubmit', () => {
    cy.mount(
      <BdsInputPassword value="" onBdsInputPasswordSubmit={cy.stub().as('bdsSubmit')} dataTest="bds-input-password" />,
    );
    cy.get('bds-input-password').shadow().find('[data-test="bds-input-password"]').type('Cypress{enter}');
    cy.get('@bdsSubmit').should('have.been.called');
  });
  // Teste de Evento onBdsKeyDownBackspace
  it('deve chamar o evento onBdsKeyDownBackspace', () => {
    cy.mount(
      <BdsInputPassword
        value=""
        onBdsKeyDownBackspace={cy.stub().as('bdsKeyDownBackspace')}
        dataTest="bds-input-password"
      />,
    );
    cy.get('bds-input-password').shadow().find('[data-test="bds-input-password"]').type('Cypress{backspace}');
    cy.get('@bdsKeyDownBackspace').should('have.been.called');
  });
});

describe('Teste de Acessibilidade Input', () => {
  // Teste de Acessibilidade com Tab
  it('deve ser possível navegar para o input usando a tecla Tab', () => {
    cy.mount(
      <>
        <button>Botão anterior</button>
        <BdsInputPassword />
      </>,
    );
    cy.get('button').first().focus();
    cy.wait(50);
    cy.realPress('Tab');
    cy.wait(50);
    cy.get('bds-input-password').should('have.focus');
  });
});
