import { BdsChipSelected } from '../dist/blip-ds-react';

export interface Props {
  event?: boolean;
}

const ChipSelected = (props: Props) => {
  const eventAvalible = props.event;
  const eventClick = (event) => {
    if (eventAvalible) {
      const input = document.getElementById('event-test') as HTMLInputElement;
      input.value = event.detail.selected.toString();
    }
  };
  return (
    <>
      <button id="prev_button">Botão anterior</button>
      <BdsChipSelected color="default" icon="edit" selected={true} size="tall" onChipClick={(ev) => eventClick(ev)}>
        ChipSelected
      </BdsChipSelected>
      {eventAvalible && <input id="event-test" />}
    </>
  );
};

describe('Teste de Renderização ChipSelected', () => {
  // Teste de Renderização
  it('deve renderizar o ChipSelected com o color correto', () => {
    cy.mount(<ChipSelected event={false} />);
    cy.get('bds-chip-selected').should('have.attr', 'color', 'default');
  });
  // Teste de Renderização
  it('deve renderizar o ChipSelected com o icon correto', () => {
    cy.mount(<ChipSelected event={false} />);
    cy.get('bds-chip-selected').should('have.attr', 'icon', 'edit');
  });
  // Teste de Renderização
  it('deve renderizar o ChipSelected com o size correto', () => {
    cy.mount(<ChipSelected event={false} />);
    cy.get('bds-chip-selected').should('have.attr', 'size', 'tall');
  });
});

describe('Teste de Eventos ChipSelected', () => {
  // Teste de Evento bdsClick
  it('deve chamar o evento onChipClick ao clicar', () => {
    cy.mount(<ChipSelected event={true} />);
    cy.get('bds-chip-selected').shadow().find('.chip').click({ force: true });
    cy.get('input#event-test').should('have.value', 'false');
  });
});

describe('Teste de Acessibilidade ChipSelected', () => {
  // Teste de Acessibilidade com Tab
  it('deve ser possível navegar para o ChipSelected usando a tecla Tab', () => {
    cy.mount(<ChipSelected event={false} />);
    cy.waitUntil(() => cy.get('bds-chip-selected').should('be.visible'));
    cy.get('button#prev_button').click();
    cy.wait(50);
    cy.realPress('Tab');
    cy.wait(50);
    cy.get('bds-chip-selected').should('have.focus');
  });
});
