import { BdsPagination } from '../dist/blip-ds-react';

export interface Props {
  event?: boolean;
}

const Pagination = (props: Props) => {
  const eventAvalible = props.event;
  const eventBdsPaginationChange = (event) => {
    if (eventAvalible) {
      const input = document.getElementById('event-test') as HTMLInputElement;
      input.value = event.detail.toString();
    }
  };
  const eventBdsItemsPerPageChange = (event) => {
    if (eventAvalible) {
      const input = document.getElementById('event-test') as HTMLInputElement;
      input.value = event.detail.toString();
    }
  };
  return (
    <>
      <button>Botão anterior</button>
      <BdsPagination
        optionsPosition="top"
        numberItems={80}
        itemsPage={[5, 10, 20]}
        pageCounter={true}
        language="pt_BR"
        onBdsPaginationChange={(ev) => eventBdsPaginationChange(ev)}
        onBdsItemsPerPageChange={(ev) => eventBdsItemsPerPageChange(ev)}
      ></BdsPagination>
      {eventAvalible && <input id="event-test" />}
    </>
  );
};

describe('Teste de Renderização Pagination', () => {
  // Teste de Renderização
  it('deve renderizar o Pagination com o optionsPosition correto', () => {
    cy.mount(<Pagination event={false} />);
    cy.get('bds-pagination').should('have.attr', 'options-position', 'top');
  });
  // Teste de Renderização
  it('deve renderizar o Pagination com o pageCounter correto', () => {
    cy.mount(<Pagination event={false} />);
    cy.get('bds-pagination').should('have.attr', 'page-counter', 'true');
  });
  // Teste de Renderização
  it('deve renderizar o Pagination com o numberItems correto', () => {
    cy.mount(<Pagination event={false} />);
    cy.get('bds-pagination').should('have.attr', 'number-items', '80');
  });
  // Teste de Renderização
  it('deve renderizar o Pagination com o language correto', () => {
    cy.mount(<Pagination event={false} />);
    cy.get('bds-pagination').should('have.attr', 'language', 'pt_BR');
  });
});

// describe('Teste de Eventos Pagination', () => {
//   // Teste de Evento onBdsPaginationChange
//   it('deve chamar o evento onBdsPaginationChange ao clicar', () => {
//     cy.mount(<Pagination event={true} />);
//     cy.get('bds-pagination').shadow().find('[icon="arrow-right"]').click();
//     cy.get('input#event-test').should('have.value', '2');
//   });
//   // Teste de Evento onBdsItemsPerPageChange
//   it('deve chamar o evento onBdsItemsPerPageChange ao clicar', () => {
//     cy.mount(<Pagination event={true} />);
//     cy.get('bds-pagination').shadow().find('.actions_select').click();
//     cy.get('bds-pagination')
//       .shadow()
//       .find('.actions_select bds-select-option')
//       .first()
//       .should('have.text', '5')
//       .click();
//     cy.get('input#event-test').should('have.value', '5');
//   });
// });

// describe('Teste de Acessibilidade Pagination', () => {
//   // Teste de Acessibilidade com Tab
//   it('deve ser possível navegar para o Pagination usando a tecla Tab', () => {
//     cy.mount(<Pagination event={false} />);
//     cy.get('button').first().focus();
//     cy.wait(50);
//     cy.realPress('Tab');
//     cy.wait(50);
//     cy.get('bds-pagination').shadow().find('.actions_select').should('have.focus');
//   });
// });
