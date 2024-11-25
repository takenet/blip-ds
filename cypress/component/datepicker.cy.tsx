import { BdsDatepicker } from '../dist/blip-ds-react';

const THIS_DAY = new Date();
const END_DAY = new Date(Date.now() + 3600 * 1000 * 24);
const dateToValidValue = `${THIS_DAY.getFullYear()}-${(THIS_DAY.getMonth() + 1)
  .toString()
  .padStart(2, '0')}-${THIS_DAY.getDate().toString().padStart(2, '0')}`;
const dateEndToValidValue = `${END_DAY.getFullYear()}-${(END_DAY.getMonth() + 1)
  .toString()
  .padStart(2, '0')}-${END_DAY.getDate().toString().padStart(2, '0')}`;

const hasAtLeastOneClass = (expectedClasses) => {
  return ($el) => {
    const classList = Array.from($el[0].classList);
    console.log('classList', classList);
    return expectedClasses.some((expectedClass) => classList.includes(expectedClass));
  };
};

describe('Teste de Renderização datepicker', () => {
  // Teste de Renderização
  it('deve renderizar o datepicker com o label correto', () => {
    cy.mount(<BdsDatepicker label="Label" />);
    cy.get('bds-datepicker').should('have.attr', 'label', 'Label');
  });
  it('deve renderizar o datepicker com o icon correto', () => {
    cy.mount(<BdsDatepicker message="Mensagem de teste" />);
    cy.get('bds-datepicker').should('have.attr', 'message', 'Mensagem de teste');
  });
  it('deve renderizar o datepicker com o language correto', () => {
    cy.mount(<BdsDatepicker language="en_US" />);
    cy.get('bds-datepicker').should('have.attr', 'language', 'en_US');
  });
});

describe('Teste de Interação datepicker', () => {
  // Teste de Interação de Focus
  it('deve permitir que o usuário focalize o datepicker', () => {
    cy.mount(<BdsDatepicker dataTest="bds-datepicker" />);
    cy.get('bds-datepicker').click();
    cy.get('bds-datepicker').should('have.focus');
  });

  // Teste de Interação de Digitação
  it('deve permitir que o usuário digite no datepicker', () => {
    cy.mount(<BdsDatepicker dtInputStart="should-input-start" />);
    cy.get('bds-datepicker')
      .shadow()
      .find('bds-input')
      .shadow()
      .find('[data-test="should-input-start"]')
      .type(dateToValidValue);
    cy.get('bds-datepicker')
      .shadow()
      .find('bds-input')
      .shadow()
      .find('[data-test="should-input-start"]')
      .should('have.value', dateToValidValue);
  });
});

describe('Teste de Eventos datepicker', () => {
  // Teste de Evento onBdsStartDate
  it('deve chamar o evento onBdsStartDate ao digitar', () => {
    cy.mount(<BdsDatepicker onBdsStartDate={cy.stub().as('bdsStartDate')} dtInputStart="should-input-start" />);
    cy.get('bds-datepicker')
      .shadow()
      .find('bds-input.input-start')
      .shadow()
      .find('[data-test="should-input-start"]')
      .type(dateToValidValue);
    cy.get('@bdsStartDate').should('have.been.called');
  });
  // Teste de Evento onBdsEndDate
  it('deve chamar o evento onBdsEndDate ao digitar', () => {
    cy.mount(
      <BdsDatepicker
        typeOfDate="Period"
        onBdsEndDate={cy.stub().as('bdsEndDate')}
        dtInputStart="should-input-start"
        dtInputEnd="should-input-end"
      />,
    );
    cy.get('bds-datepicker')
      .shadow()
      .find('bds-input.input-start')
      .shadow()
      .find('[data-test="should-input-start"]')
      .type(dateToValidValue);

    cy.get('bds-datepicker')
      .shadow()
      .find('bds-input.input-end')
      .shadow()
      .find('[data-test="should-input-end"]')
      .type(dateEndToValidValue);
    cy.get('@bdsEndDate').should('have.been.called');
  });
  // Teste de Evento onConcludeDatepicker
  it('deve chamar o evento onConcludeDatepicker ao digitar', () => {
    cy.mount(
      <BdsDatepicker
        typeOfDate="Period"
        onConcludeDatepicker={cy.stub().as('concludeDatepicker')}
        dtInputStart="should-input-start"
        dtInputEnd="should-input-end"
        dtButtonConfirm="should-button-confirm"
      />,
    );
    cy.get('bds-datepicker')
      .shadow()
      .find('bds-input.input-start')
      .shadow()
      .find('[data-test="should-input-start"]')
      .type(dateToValidValue);

    cy.get('bds-datepicker')
      .shadow()
      .find('bds-input.input-end')
      .shadow()
      .find('[data-test="should-input-end"]')
      .type(dateEndToValidValue);

    cy.get('bds-datepicker')
      .shadow()
      .find('bds-button.bt-conclude')
      .shadow()
      .find('[data-test="should-button-confirm"]')
      .click();

    cy.get('@concludeDatepicker').should('have.been.called');
  });
});

describe('Teste de Acessibilidade datepicker', () => {
  // Teste de Acessibilidade com Tab
  it('deve ser possível navegar para o datepicker usando a tecla Tab', () => {
    cy.mount(
      <>
        <button>Botão anterior</button>
        <BdsDatepicker />
      </>,
    );
    cy.get('button').first().focus();
    cy.wait(50);
    cy.realPress('Tab');
    cy.wait(50);
    cy.get('bds-datepicker').should('have.focus');
  });
  // Teste de Acessibilidade Abrir o menu de seleção
  it('Verificar se ao clicar o calendario de seleção é habilitado', () => {
    cy.mount(<BdsDatepicker dataTest="bds-datepicker" />);
    cy.get('bds-datepicker').click();
    cy.get('bds-datepicker').shadow().find('.datepicker__menu').should('have.class', 'datepicker__menu__open');
  });
  // Teste de Acessibilidade Fechar o menu de seleção ao clicar em "concluir"
  it('Verificar se ao clicar em "concluir" o calendario de seleção é desabilitado', () => {
    cy.mount(<BdsDatepicker dtButtonConfirm="should-button-confirm" />);
    cy.get('bds-datepicker').click();
    cy.get('bds-datepicker')
      .shadow()
      .find('bds-button.bt-conclude')
      .shadow()
      .find('[data-test="should-button-confirm"]')
      .click();
    cy.get('bds-datepicker').shadow().find('.datepicker__menu').should('not.have.class', 'datepicker__menu__open');
  });
  // Teste de Acessibilidade Fechar o menu de seleção ao clicar fora do componente
  it('Verificar se ao clicar fora do componente o calendario de seleção é desabilitado', () => {
    cy.mount(<BdsDatepicker dtButtonConfirm="should-button-confirm" />);
    cy.get('bds-datepicker').click();
    cy.get('bds-datepicker').shadow().find('.outzone').click({ force: true });
    cy.get('bds-datepicker').shadow().find('.datepicker__menu').should('not.have.class', 'datepicker__menu__open');
  });
});
