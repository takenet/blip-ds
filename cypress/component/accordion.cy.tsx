import { BdsAccordion, BdsAccordionBody, BdsAccordionHeader, BdsButton, BdsTypo } from '../dist/blip-ds-react';

const Accordion = () => {
  const paragraph =
    'Um accordion é uma lista de cabeçalhos empilhados verticalmente que revelam ou ocultam seções de conteúdo associados.';
  const toggle = () => {
    const buttonElement = document.querySelector('bds-accordion');
    buttonElement.toggle();
  };
  const open = () => {
    const buttonElement = document.querySelector('bds-accordion');
    buttonElement.open();
  };
  const close = () => {
    const buttonElement = document.querySelector('bds-accordion');
    buttonElement.close();
  };
  return (
    <>
      <button id="toggle" onClick={() => toggle()}>
        toggle
      </button>
      <button id="open" onClick={() => open()}>
        open
      </button>
      <button id="close" onClick={() => close()}>
        close
      </button>
      <BdsAccordion
        onBdsToggle={cy.stub().as('bdsToggle')}
        onBdsAccordionOpen={cy.stub().as('bdsAccordionOpen')}
        onBdsAccordionClose={cy.stub().as('bdsAccordionClose')}
      >
        <BdsAccordionHeader accordionTitle="Título do accordion"></BdsAccordionHeader>
        <BdsAccordionBody>
          <BdsTypo variant="fs-16">{paragraph}</BdsTypo>
        </BdsAccordionBody>
      </BdsAccordion>
    </>
  );
};

describe('Teste de Eventos Button', () => {
  // Teste de Evento onBdsToggle
  it('deve chamar o evento onBdsToggle ao clicar', () => {
    cy.mount(<Accordion />);
    cy.get('button[id=toggle]').click();
    cy.get('@bdsToggle').should('have.been.called');
  });
  // Teste de Evento onBdsAccordionOpen
  it('deve chamar o evento onBdsAccordionOpen ao clicar', () => {
    cy.mount(<Accordion />);
    cy.get('button[id=open]').click();
    cy.get('@bdsAccordionOpen').should('have.been.called');
  });
  // Teste de Evento onBdsAccordionClose
  it('deve chamar o evento onBdsAccordionClose ao clicar', () => {
    cy.mount(<Accordion />);
    cy.get('button[id=open]').click();
    cy.get('button[id=close]').click();
    cy.get('@bdsAccordionClose').should('have.been.called');
  });
});

describe('Teste de Acessibilidade button', () => {
  // Teste de Acessibilidade com Tab
  it('deve ser possível navegar para o button usando a tecla Tab', () => {
    cy.mount(<Accordion />);
    cy.get('button[id=close]').first().focus();
    cy.wait(50);
    cy.realPress('Tab');
    cy.wait(50);
    cy.get('bds-accordion').find('bds-accordion-header').shadow().find('bds-icon.accButton').should('have.focus');
  });
  // Teste de Acessibilidade método toggle
  it('Verificar se o método toggle esta sendo correspondido', () => {
    cy.mount(<Accordion />);
    cy.get('button[id=toggle]').click();
    cy.get('bds-accordion')
      .find('bds-accordion-body')
      .shadow()
      .find('.accordion_body')
      .should('have.class', 'accordion_body_isOpen');
  });
  // Teste de Acessibilidade método open
  it('Verificar se o método open esta sendo correspondido', () => {
    cy.mount(<Accordion />);
    cy.get('button[id=open]').click();
    cy.get('bds-accordion')
      .find('bds-accordion-body')
      .shadow()
      .find('.accordion_body')
      .should('have.class', 'accordion_body_isOpen');
  });
  // Teste de Acessibilidade método close
  it('Verificar se o método close esta sendo correspondido', () => {
    cy.mount(<Accordion />);
    cy.get('button[id=open]').click();
    cy.get('button[id=close]').click();
    cy.get('bds-accordion')
      .find('bds-accordion-body')
      .shadow()
      .find('.accordion_body')
      .should('not.have.class', 'accordion_body_isOpen');
  });
});
