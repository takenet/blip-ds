import { BdsInputPhoneNumber } from '../dist/blip-ds-react';

describe('Teste de Renderização Input', () => {
  // Teste de Renderização
  it('deve renderizar o input com o label correto', () => {
    cy.mount(<BdsInputPhoneNumber label="Label" />);
    cy.get('bds-input-phone-number').should('have.attr', 'label', 'Label');
  });
  it('deve renderizar o input com o helperMessage correto', () => {
    cy.mount(<BdsInputPhoneNumber helperMessage="Mensagem de ajuda" />);
    cy.get('bds-input-phone-number').should('have.attr', 'helper-message', 'Mensagem de ajuda');
  });
});

describe('Teste de Interação Input', () => {
  // Teste de Interação de Focus
  it('deve permitir que o usuário focalize o input', () => {
    cy.mount(<BdsInputPhoneNumber value="" dataTest="bds-input-phone-number" />);
    cy.get('bds-input-phone-number').click();
    cy.get('bds-input-phone-number').should('have.focus');
  });

  // Teste de Interação de Digitação
  it('deve permitir que o usuário digite no input', () => {
    cy.mount(<BdsInputPhoneNumber value="" dataTest="bds-input-phone-number" />);

    cy.get('bds-input-phone-number').shadow().find('[data-test="bds-input-phone-number"]').type('5555-5555');
    cy.get('bds-input-phone-number')
      .shadow()
      .find('[data-test="bds-input-phone-number"]')
      .should('have.value', '5555-5555');
  });
});

describe('Teste de Eventos Input', () => {
  // Teste de Evento onChange
  it('deve chamar o evento onChange ao digitar', () => {
    cy.mount(
      <BdsInputPhoneNumber
        value=""
        onBdsPhoneNumberChange={cy.stub().as('bdsChange')}
        dataTest="bds-input-phone-number"
      />,
    );
    cy.get('bds-input-phone-number').shadow().find('[data-test="bds-input-phone-number"]').type('1234-1234');
    cy.get('@bdsChange').should('have.been.called');
  });
  // Teste de Evento onInput
  it('deve chamar o evento onInput ao digitar', () => {
    cy.mount(<BdsInputPhoneNumber value="" onBdsInput={cy.stub().as('bdsInput')} dataTest="bds-input-phone-number" />);
    cy.get('bds-input-phone-number').shadow().find('[data-test="bds-input-phone-number"]').type('1234-1234');
    cy.get('@bdsInput').should('have.been.called');
  });
  // Teste de Evento onBlur
  it('deve chamar o evento onBlur', () => {
    cy.mount(<BdsInputPhoneNumber value="" onBdsBlur={cy.stub().as('bdsBlur')} dataTest="bds-input-phone-number" />);
    cy.get('bds-input-phone-number').click();
    cy.realPress('Tab');
    cy.get('@bdsBlur').should('have.been.called');
  });
  // Teste de Evento onFocus
  it('deve chamar o evento onFocus', () => {
    cy.mount(<BdsInputPhoneNumber value="" onBdsFocus={cy.stub().as('bdsFocus')} dataTest="bds-input-phone-number" />);
    cy.get('bds-input-phone-number').click();
    cy.get('@bdsFocus').should('have.been.called');
  });
});

describe('Teste de Acessibilidade Input', () => {
  // Teste de Acessibilidade com Tab
  it('deve ser possível navegar para o input usando a tecla Tab', () => {
    cy.mount(
      <>
        <button>Botão anterior</button>
        <BdsInputPhoneNumber />
      </>,
    );
    cy.get('button').first().focus();
    cy.wait(50);
    cy.realPress('Tab');
    cy.wait(50);
    cy.get('bds-input-phone-number').should('have.focus');
  });
});
