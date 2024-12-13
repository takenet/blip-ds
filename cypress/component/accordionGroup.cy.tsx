import {
  BdsAccordion,
  BdsAccordionBody,
  BdsAccordionGroup,
  BdsAccordionHeader,
  BdsButton,
  BdsTypo,
} from '../dist/blip-ds-react';

const AccordionGroup = () => {
  const paragraph =
    'Um accordion é uma lista de cabeçalhos empilhados verticalmente que revelam ou ocultam seções de conteúdo associados.';

  const openAll = () => {
    const buttonElement = document.querySelector('bds-accordion-group');
    buttonElement.openAll();
  };
  const closeAll = () => {
    const buttonElement = document.querySelector('bds-accordion-group');
    buttonElement.closeAll();
  };
  return (
    <>
      <button id="openAll" onClick={() => openAll()}>
        openAll
      </button>
      <button id="closeAll" onClick={() => closeAll()}>
        closeAll
      </button>
      <BdsAccordionGroup
        onBdsAccordionOpenAll={cy.stub().as('bdsAccordionOpenAll')}
        onBdsAccordionCloseAll={cy.stub().as('bdsAccordionCloseAll')}
        collapse="multiple"
      >
        <BdsAccordion>
          <BdsAccordionHeader accordion-title="Título do accordion"></BdsAccordionHeader>
          <BdsAccordionBody>
            <BdsTypo variant="fs-16">{paragraph}</BdsTypo>
          </BdsAccordionBody>
        </BdsAccordion>
        <BdsAccordion>
          <BdsAccordionHeader accordion-title="Título do accordion"></BdsAccordionHeader>
          <BdsAccordionBody>
            <BdsTypo variant="fs-16">{paragraph}</BdsTypo>
          </BdsAccordionBody>
        </BdsAccordion>
      </BdsAccordionGroup>
    </>
  );
};

describe('Teste de Eventos Button', () => {
  // Teste de Evento onBdsAccordionOpen
  it('deve chamar o evento onBdsAccordionOpen ao clicar', () => {
    cy.mount(<AccordionGroup />);
    cy.get('button[id=openAll]').click();
    cy.get('@bdsAccordionOpenAll').should('have.been.called');
  });
  // Teste de Evento onBdsAccordionClose
  it('deve chamar o evento onBdsAccordionClose ao clicar', () => {
    cy.mount(<AccordionGroup />);
    cy.get('button[id=openAll]').click();
    cy.get('button[id=closeAll]').click();
    cy.get('@bdsAccordionCloseAll').should('have.been.called');
  });
});

describe('Teste de Acessibilidade button', () => {
  // Teste de Acessibilidade método openAll
  it('Verificar se o método openAll esta sendo correspondido', () => {
    cy.mount(<AccordionGroup />);
    cy.get('button[id=openAll]').click();
    cy.get('bds-accordion')
      .find('bds-accordion-body')
      .shadow()
      .find('.accordion_body')
      .should('have.class', 'accordion_body_isOpen');
  });
  // Teste de Acessibilidade método closeAll
  it('Verificar se o método closeAll esta sendo correspondido', () => {
    cy.mount(<AccordionGroup />);
    cy.get('button[id=openAll]').click();
    cy.get('button[id=closeAll]').click();
    cy.get('bds-accordion')
      .find('bds-accordion-body')
      .shadow()
      .find('.accordion_body')
      .should('not.have.class', 'accordion_body_isOpen');
  });
});
