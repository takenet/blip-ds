import { BdsButton, BdsDropdown, BdsList, BdsListItem } from '../dist/blip-ds-react';

export interface Props {
  event?: boolean;
}

const Dropdown = (props: Props) => {
  const eventAvalible = props.event;
  const eventbdsToggle = (event) => {
    if (eventAvalible) {
      const input = document.getElementById('event-test') as HTMLInputElement;
      input.value = event.detail.value.toString();
    }
  };
  const toggle = () => {
    const dropdownElement = document.querySelector('bds-dropdown');
    dropdownElement.toggle();
  };
  const setOpen = () => {
    const dropdownElement = document.querySelector('bds-dropdown');
    dropdownElement.setOpen();
  };
  const setClose = () => {
    const dropdownElement = document.querySelector('bds-dropdown');
    dropdownElement.setClose();
  };
  return (
    <>
      <button id="toggle" onClick={() => toggle()}>
        toggle
      </button>
      <button id="open" onClick={() => setOpen()}>
        open
      </button>
      <button id="close" onClick={() => setClose()}>
        close
      </button>
      <BdsDropdown onBdsToggle={(ev) => eventbdsToggle(ev)} activeMode="click" open={false}>
        <div slot="dropdown-activator">
          <BdsButton variant="primary">Open Menu</BdsButton>
        </div>
        <div slot="dropdown-content">
          <BdsList type-list="default">
            <BdsListItem
              value="03"
              text="Text"
              secondary-text="Secondary text"
              clickable
              icon="blip-ideas"
            ></BdsListItem>
            <BdsDropdown>
              <div slot="dropdown-activator">
                <BdsListItem value="01" text="Text" secondary-text="Secondary text" clickable></BdsListItem>
              </div>
              <div slot="dropdown-content">
                <BdsList type-list="default">
                  <BdsListItem value="01" text="Text" secondary-text="Secondary text" clickable></BdsListItem>
                  <BdsListItem value="01" text="Text" secondary-text="Secondary text" clickable></BdsListItem>
                  <BdsListItem value="01" text="Text" secondary-text="Secondary text" clickable></BdsListItem>
                </BdsList>
              </div>
            </BdsDropdown>
            <BdsListItem
              value="04"
              text="Text"
              secondary-text="Secondary text"
              avatar-name="Alvare Horta"
            ></BdsListItem>
          </BdsList>
        </div>
      </BdsDropdown>
      {eventAvalible && <input id="event-test" />}
    </>
  );
};

describe('Teste de Renderização Dropdown', () => {
  // Teste de Renderização
  it('deve renderizar o Dropdown com o active-mode correto', () => {
    cy.mount(<Dropdown event={false} />);
    cy.get('bds-dropdown').should('have.attr', 'active-mode', 'click');
  });
});

describe('Teste de Eventos Dropdown', () => {
  // Teste de Evento bdsClick
  it('deve chamar o evento onBdsToggle ao clicar', () => {
    cy.mount(<Dropdown event={true} />);
    cy.get('bds-button').shadow().find('button').click();
    cy.get('input#event-test').should('have.value', 'true');
  });
});

describe('Teste de Acessibilidade Dropdown', () => {
  // Teste de Acessibilidade método toggle
  it('Verificar se o método toggle esta sendo correspondido', () => {
    cy.mount(<Dropdown event={false} />);
    cy.get('button[id=toggle]').click();
    cy.get('bds-dropdown').shadow().find('.dropdown').should('have.class', 'dropdown__open');
  });
  // Teste de Acessibilidade método open
  it('Verificar se o método open esta sendo correspondido', () => {
    cy.mount(<Dropdown event={false} />);
    cy.get('button[id=open]').click();
    cy.get('bds-dropdown').shadow().find('.dropdown').should('have.class', 'dropdown__open');
  });
  // Teste de Acessibilidade método close
  it('Verificar se o método close esta sendo correspondido', () => {
    cy.mount(<Dropdown event={false} />);
    cy.get('button[id=open]').click();
    cy.get('button[id=close]').click({ force: true });
    cy.get('bds-dropdown').shadow().find('.dropdown').should('not.have.class', 'dropdown__open');
  });
});
